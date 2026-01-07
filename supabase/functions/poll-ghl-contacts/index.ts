import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface PollContactsRequest {
  source_id: string;
  locationId: string;
  mode?: 'full' | 'incremental';
  pageSize?: number;
}

interface GHLContact {
  id: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  tags?: string[];
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
      let body: PollContactsRequest;

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

      console.log('Starting contacts sync:', { source_id, locationId, mode });

      let totalProcessed = 0;
      let currentPage = 1;
      let hasMore = true;

      while (hasMore) {
        const ghlUrl = `https://services.leadconnectorhq.com/contacts/?locationId=${locationId}&limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`;

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
        const contacts: GHLContact[] = ghlData.contacts || [];

        console.log(`Received ${contacts.length} contacts from page ${currentPage}`);

        if (contacts.length === 0) {
          hasMore = false;
          break;
        }

        for (const contact of contacts) {
          const contactData = {
            source_id,
            ghl_contact_id: contact.id,
            email: contact.email || null,
            phone: contact.phone || null,
            first_name: contact.firstName || null,
            last_name: contact.lastName || null,
            tags: contact.tags || [],
            custom_fields: contact.customFields || {},
            updated_at: contact.dateUpdated ? new Date(contact.dateUpdated).toISOString() : new Date().toISOString(),
          };

          const { error } = await supabase
            .from('ghl_contacts')
            .upsert(contactData, {
              onConflict: 'source_id,ghl_contact_id',
              ignoreDuplicates: false,
            });

          if (error) {
            console.error('Error upserting contact:', error);
          } else {
            totalProcessed++;
          }
        }

        if (contacts.length < pageSize) {
          hasMore = false;
        } else {
          currentPage++;
        }

        if (mode === 'incremental' && currentPage > 5) {
          console.log('Incremental mode: stopping after 5 pages');
          hasMore = false;
        }
      }

      console.log(`Contacts sync completed. Processed ${totalProcessed} contacts.`);

      return new Response(
        JSON.stringify({
          ok: true,
          count: totalProcessed,
          pages: currentPage,
          message: `Successfully synced ${totalProcessed} contacts`,
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
    console.error('Error in poll-ghl-contacts:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});