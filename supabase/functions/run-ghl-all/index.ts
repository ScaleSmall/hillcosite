import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface RunGHLAllRequest {
  source_id: string;
  locationId: string;
  mode?: 'full' | 'incremental';
  pageSize?: number;
}

interface SyncJobResult {
  job_type: string;
  status: 'completed' | 'failed';
  count?: number;
  error?: string;
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
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    if (req.method === 'POST') {
      let body: RunGHLAllRequest;

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

      const { source_id, locationId, mode = 'incremental', pageSize = 200 } = body;

      if (!source_id || !locationId) {
        return new Response(
          JSON.stringify({ error: 'source_id and locationId are required' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      console.log('Starting GHL sync orchestration:', { source_id, locationId, mode });

      const results: SyncJobResult[] = [];
      const jobTypes = ['contacts', 'pipelines', 'opportunities', 'orders', 'payments', 'reviews'];

      for (const jobType of jobTypes) {
        try {
          console.log(`Starting sync for ${jobType}...`);

          const jobId = crypto.randomUUID();
          const { error: insertError } = await supabase
            .from('ghl_sync_jobs')
            .insert({
              id: jobId,
              source_id,
              location_id: locationId,
              job_type: jobType,
              status: 'running',
              started_at: new Date().toISOString(),
              progress: { current_page: 0, total_records: 0 },
            });

          if (insertError) {
            console.error(`Failed to create sync job for ${jobType}:`, insertError);
            results.push({
              job_type: jobType,
              status: 'failed',
              error: insertError.message,
            });
            continue;
          }

          const pollFunctionUrl = `${supabaseUrl}/functions/v1/poll-ghl-${jobType}`;
          const pollResponse = await fetch(pollFunctionUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseServiceKey}`,
            },
            body: JSON.stringify({
              source_id,
              locationId,
              mode,
              pageSize,
            }),
          });

          if (!pollResponse.ok) {
            const errorText = await pollResponse.text();
            console.error(`Poll function failed for ${jobType}:`, errorText);
            
            await supabase
              .from('ghl_sync_jobs')
              .update({
                status: 'failed',
                error: errorText,
                completed_at: new Date().toISOString(),
              })
              .eq('id', jobId);

            results.push({
              job_type: jobType,
              status: 'failed',
              error: errorText,
            });
            continue;
          }

          const pollResult = await pollResponse.json();
          console.log(`Completed sync for ${jobType}:`, pollResult);

          await supabase
            .from('ghl_sync_jobs')
            .update({
              status: 'completed',
              progress: { total_records: pollResult.count || 0 },
              completed_at: new Date().toISOString(),
            })
            .eq('id', jobId);

          results.push({
            job_type: jobType,
            status: 'completed',
            count: pollResult.count || 0,
          });
        } catch (jobError) {
          console.error(`Error syncing ${jobType}:`, jobError);
          results.push({
            job_type: jobType,
            status: 'failed',
            error: jobError.message,
          });
        }
      }

      const successCount = results.filter(r => r.status === 'completed').length;
      const failCount = results.filter(r => r.status === 'failed').length;

      return new Response(
        JSON.stringify({
          ok: true,
          message: `Sync completed: ${successCount} succeeded, ${failCount} failed`,
          results,
          counts: results.reduce((acc, r) => {
            if (r.count !== undefined) {
              acc[r.job_type] = r.count;
            }
            return acc;
          }, {} as Record<string, number>),
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
    console.error('Error in run-ghl-all:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});