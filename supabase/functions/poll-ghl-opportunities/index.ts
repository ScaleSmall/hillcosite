import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface PollOpportunitiesRequest {
  source_id: string;
  locationId: string;
  mode?: 'full' | 'incremental';
  pageSize?: number;
}

interface GHLOpportunity {
  id: string;
  name: string;
  pipelineId: string;
  pipelineStageId: string;
  contactId?: string;
  monetaryValue?: number;
  status: string;
  customFields?: Record<string, any>;
  dateAdded?: string;
  dateUpdated?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const ghlApiKey = Deno.env.get('GHL_API_KEY');

    if (!ghlApiKey) {
      return new Response(
        JSON.stringify({ error: 'GHL_API_KEY not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    if (req.method === 'POST') {
      let body: PollOpportunitiesRequest;

      try {
        body = await req.json();
      } catch (parseError) {
        return new Response(
          JSON.stringify({ error: 'Invalid JSON payload' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      const { source_id, locationId, mode = 'incremental', pageSize = 100 } = body;

      if (!source_id || !locationId) {
        return new Response(
          JSON.stringify({ error: 'source_id and locationId are required' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      console.log('Starting opportunities sync:', { source_id, locationId, mode });

      let totalProcessed = 0;
      let currentPage = 1;
      let hasMore = true;

      while (hasMore) {
        const ghlUrl = `https://services.leadconnectorhq.com/opportunities/?locationId=${locationId}&limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`;

        console.log(`Fetching page ${currentPage}...`);

        const ghlResponse = await fetch(ghlUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${ghlApiKey}`,
            'Version': '2021-07-28',
            'Content-Type': 'application/json',
          },
        });

        if (!ghlResponse.ok) {
          const errorText = await ghlResponse.text();
          console.error('GHL API error:', errorText);
          return new Response(
            JSON.stringify({ error: 'Failed to fetch from GHL API', details: errorText }),
            {
              status: ghlResponse.status,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            }
          );
        }

        const ghlData = await ghlResponse.json();
        const opportunities: GHLOpportunity[] = ghlData.opportunities || [];

        console.log(`Received ${opportunities.length} opportunities from page ${currentPage}`);

        if (opportunities.length === 0) {
          hasMore = false;
          break;
        }

        for (const opp of opportunities) {
          let contactUuid = null;
          let pipelineUuid = null;

          if (opp.contactId) {
            const { data: contactData } = await supabase
              .from('ghl_contacts')
              .select('id')
              .eq('source_id', source_id)
              .eq('ghl_contact_id', opp.contactId)
              .maybeSingle();

            contactUuid = contactData?.id || null;
          }

          if (opp.pipelineId) {
            const { data: pipelineData } = await supabase
              .from('ghl_pipelines')
              .select('id')
              .eq('source_id', source_id)
              .eq('ghl_pipeline_id', opp.pipelineId)
              .maybeSingle();

            pipelineUuid = pipelineData?.id || null;
          }

          const oppData = {
            source_id,
            ghl_opportunity_id: opp.id,
            contact_id: contactUuid,
            pipeline_id: pipelineUuid,
            stage_id: opp.pipelineStageId,
            name: opp.name,
            amount: opp.monetaryValue || 0,
            status: opp.status,
            custom_fields: opp.customFields || {},
            updated_at: opp.dateUpdated ? new Date(opp.dateUpdated).toISOString() : new Date().toISOString(),
          };

          const { error } = await supabase
            .from('ghl_opportunities')
            .upsert(oppData, {
              onConflict: 'source_id,ghl_opportunity_id',
              ignoreDuplicates: false,
            });

          if (error) {
            console.error('Error upserting opportunity:', error);
          } else {
            totalProcessed++;
          }
        }

        if (opportunities.length < pageSize) {
          hasMore = false;
        } else {
          currentPage++;
        }

        if (mode === 'incremental' && currentPage > 5) {
          console.log('Incremental mode: stopping after 5 pages');
          hasMore = false;
        }
      }

      console.log(`Opportunities sync completed. Processed ${totalProcessed} opportunities.`);

      return new Response(
        JSON.stringify({
          ok: true,
          count: totalProcessed,
          pages: currentPage,
          message: `Successfully synced ${totalProcessed} opportunities`,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in poll-ghl-opportunities:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});