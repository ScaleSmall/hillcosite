import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface PriceData {
  id: string;
  guide_key: string;
  section_key: string;
  base_min_value: number;
  base_max_value: number | null;
  display_min_value: number;
  display_max_value: number | null;
  description: string;
  last_inflated_year: number;
}

interface UpdateResult {
  id: string;
  name: string;
  before: string;
  after: string;
  oldMinValue: number;
  newMinValue: number;
  oldMaxValue: number | null;
  newMaxValue: number | null;
}

function roundToNearest100(value: number): number {
  return Math.round(value / 100) * 100;
}

function applyInflation(baseValue: number, inflationRate: number): number {
  return baseValue * (1 + inflationRate / 100);
}

function formatPrice(min: number, max: number | null): string {
  if (max === null) {
    return `$${min.toLocaleString()}`;
  }
  return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
}

async function logToDatabase(supabase: any, logType: string, operation: string, message: string, metadata?: any) {
  await supabase.from('automation_logs').insert({
    log_type: logType,
    operation,
    message,
    metadata: metadata || {}
  });
}

async function fetchCPIData(supabaseUrl: string, targetYear: number): Promise<{rate: number; source: string} | null> {
  try {
    const response = await fetch(
      `${supabaseUrl}/functions/v1/fetch-cpi-data?year=${targetYear}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    if (result.success && result.data) {
      return {
        rate: result.data.cpiRate,
        source: result.data.source
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching CPI:', error);
    return null;
  }
}

async function sendNotification(supabaseUrl: string, notificationData: any): Promise<boolean> {
  try {
    const response = await fetch(
      `${supabaseUrl}/functions/v1/send-pricing-notification`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(notificationData),
      }
    );

    return response.ok;
  } catch (error) {
    console.error('Error sending notification:', error);
    return false;
  }
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    const url = new URL(req.url);
    const dryRun = url.searchParams.get('dry_run') === 'true';
    const targetYear = parseInt(url.searchParams.get('year') || new Date().getFullYear().toString());

    await logToDatabase(supabase, 'info', 'automation-start', `Starting annual pricing automation for ${targetYear}${dryRun ? ' (DRY RUN)' : ''}`);

    // First check if CPI data already exists in database
    const { data: existingCPI } = await supabase
      .from('inflation_rates')
      .select('*')
      .eq('year', targetYear)
      .maybeSingle();

    let cpiData;
    if (existingCPI) {
      // Use existing CPI data from database
      cpiData = {
        rate: parseFloat(existingCPI.cpi_rate),
        source: existingCPI.data_source
      };
      await logToDatabase(supabase, 'info', 'cpi-source', `Using existing CPI data from database for ${targetYear}`, cpiData);
    } else {
      // Try to fetch from external APIs
      cpiData = await fetchCPIData(supabaseUrl, targetYear);

      if (!cpiData) {
        const errorMsg = 'Failed to fetch CPI data';
        await logToDatabase(supabase, 'error', 'automation-failed', errorMsg);

        if (!dryRun) {
          await sendNotification(supabaseUrl, {
            type: 'failure',
            year: targetYear,
            errorMessage: errorMsg
          });
        }

        return new Response(
          JSON.stringify({ error: errorMsg }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }
    }

    await logToDatabase(supabase, 'info', 'cpi-fetched', `CPI rate: ${cpiData.rate}% from ${cpiData.source}`, cpiData);

    const { data: pricingData, error: fetchError } = await supabase
      .from('pricing_data')
      .select('*')
      .eq('is_active', true);

    if (fetchError || !pricingData) {
      const errorMsg = 'Failed to fetch pricing data';
      await logToDatabase(supabase, 'error', 'automation-failed', errorMsg, { error: fetchError });
      
      if (!dryRun) {
        await sendNotification(supabaseUrl, {
          type: 'failure',
          year: targetYear,
          errorMessage: errorMsg
        });
      }

      return new Response(
        JSON.stringify({ error: errorMsg }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const updates: UpdateResult[] = [];
    const updatePromises: Promise<any>[] = [];

    for (const item of pricingData as PriceData[]) {
      const inflatedMin = applyInflation(item.base_min_value, cpiData.rate);
      const roundedMin = roundToNearest100(inflatedMin);
      
      let roundedMax: number | null = null;
      if (item.base_max_value !== null) {
        const inflatedMax = applyInflation(item.base_max_value, cpiData.rate);
        roundedMax = roundToNearest100(inflatedMax);
      }

      const beforePrice = formatPrice(item.display_min_value, item.display_max_value);
      const afterPrice = formatPrice(roundedMin, roundedMax);

      updates.push({
        id: item.id,
        name: item.description || item.section_key,
        before: beforePrice,
        after: afterPrice,
        oldMinValue: item.display_min_value,
        newMinValue: roundedMin,
        oldMaxValue: item.display_max_value,
        newMaxValue: roundedMax
      });

      if (!dryRun) {
        updatePromises.push(
          supabase
            .from('pricing_data')
            .update({
              base_min_value: inflatedMin,
              base_max_value: item.base_max_value !== null ? applyInflation(item.base_max_value, cpiData.rate) : null,
              display_min_value: roundedMin,
              display_max_value: roundedMax,
              last_inflated_year: targetYear,
              version: item.version + 1,
              updated_at: new Date().toISOString()
            })
            .eq('id', item.id)
        );
      }
    }

    if (!dryRun && updatePromises.length > 0) {
      await Promise.all(updatePromises);
      
      await supabase
        .from('inflation_rates')
        .update({
          is_applied: true,
          applied_at: new Date().toISOString()
        })
        .eq('year', targetYear);

      await logToDatabase(supabase, 'success', 'automation-complete', `Updated ${updates.length} pricing entries`, {
        year: targetYear,
        cpiRate: cpiData.rate,
        pricesUpdated: updates.length
      });
    }

    const sampleChanges = updates.slice(0, 5).map(u => ({
      name: u.name,
      before: u.before,
      after: u.after
    }));

    if (!dryRun) {
      await sendNotification(supabaseUrl, {
        type: 'success',
        year: targetYear,
        cpiRate: cpiData.rate,
        pricesUpdated: updates.length,
        sampleChanges
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        dryRun,
        year: targetYear,
        cpiRate: cpiData.rate,
        pricesUpdated: updates.length,
        updates,
        sampleChanges
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Automation error:', error);
    
    await logToDatabase(supabase, 'error', 'automation-failed', error.message, { error: error.toString() });
    
    const targetYear = parseInt(new URL(req.url).searchParams.get('year') || new Date().getFullYear().toString());
    const dryRun = new URL(req.url).searchParams.get('dry_run') === 'true';
    
    if (!dryRun) {
      await sendNotification(supabaseUrl, {
        type: 'failure',
        year: targetYear,
        errorMessage: error.message
      });
    }

    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
