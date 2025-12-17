import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

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

    const url = new URL(req.url);
    const action = url.searchParams.get('action') || 'dry-run';
    const year = parseInt(url.searchParams.get('year') || new Date().getFullYear().toString());
    const testCpiRate = parseFloat(url.searchParams.get('cpi') || '3.2');

    await supabase.from('automation_logs').insert({
      log_type: 'info',
      operation: 'test-automation',
      message: `Testing pricing automation: ${action}`,
      metadata: { action, year, testCpiRate }
    });

    const results: any = {
      testMode: true,
      timestamp: new Date().toISOString(),
      year,
      testCpiRate,
      results: {}
    };

    if (action === 'check-config') {
      const { data: config } = await supabase
        .from('automation_config')
        .select('*');

      results.results.config = config;
      results.message = 'Configuration check complete';
    }

    else if (action === 'check-pricing') {
      const { data: pricing } = await supabase
        .from('pricing_data')
        .select('*')
        .eq('is_active', true);

      results.results.pricing = pricing;
      results.results.count = pricing?.length || 0;
      results.message = `Found ${pricing?.length || 0} active pricing entries`;
    }

    else if (action === 'check-cpi') {
      const { data: cpiRates } = await supabase
        .from('inflation_rates')
        .select('*')
        .order('year', { ascending: false })
        .limit(5);

      results.results.cpiRates = cpiRates;
      results.message = 'CPI data check complete';
    }

    else if (action === 'simulate-calculation') {
      const { data: pricing } = await supabase
        .from('pricing_data')
        .select('*')
        .eq('is_active', true)
        .limit(5);

      const simulations = pricing?.map((item: any) => {
        const inflatedMin = item.base_min_value * (1 + testCpiRate / 100);
        const roundedMin = Math.round(inflatedMin / 100) * 100;
        
        let roundedMax = null;
        if (item.base_max_value) {
          const inflatedMax = item.base_max_value * (1 + testCpiRate / 100);
          roundedMax = Math.round(inflatedMax / 100) * 100;
        }

        return {
          section: item.section_key,
          current: {
            min: item.display_min_value,
            max: item.display_max_value,
            formatted: item.display_max_value 
              ? `$${item.display_min_value.toLocaleString()} - $${item.display_max_value.toLocaleString()}`
              : `$${item.display_min_value.toLocaleString()}`
          },
          calculated: {
            min: roundedMin,
            max: roundedMax,
            formatted: roundedMax 
              ? `$${roundedMin.toLocaleString()} - $${roundedMax.toLocaleString()}`
              : `$${roundedMin.toLocaleString()}`
          },
          change: {
            minDollar: roundedMin - item.display_min_value,
            minPercent: ((roundedMin - item.display_min_value) / item.display_min_value * 100).toFixed(2)
          }
        };
      });

      results.results.simulations = simulations;
      results.message = `Simulated ${simulations?.length || 0} price calculations with ${testCpiRate}% CPI`;
    }

    else if (action === 'dry-run') {
      const automationUrl = `${supabaseUrl}/functions/v1/annual-pricing-automation?dry_run=true&year=${year}`;
      
      const response = await fetch(automationUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        results.results = data;
        results.message = 'Dry run completed successfully';
      } else {
        const errorText = await response.text();
        results.error = errorText;
        results.message = 'Dry run failed';
      }
    }

    else if (action === 'test-notification') {
      const notificationUrl = `${supabaseUrl}/functions/v1/send-pricing-notification`;
      
      const testData = {
        type: 'success',
        year,
        cpiRate: testCpiRate,
        pricesUpdated: 17,
        sampleChanges: [
          { name: 'Home Size Interior', before: '$2,500 - $6,000', after: '$2,600 - $6,200' },
          { name: 'Home Size Exterior', before: '$4,000 - $10,000', after: '$4,100 - $10,300' },
          { name: '2,200 sq ft Interior', before: '$4,400 - $7,200', after: '$4,500 - $7,400' }
        ]
      };

      const response = await fetch(notificationUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      if (response.ok) {
        const data = await response.json();
        results.results = data;
        results.message = 'Test notification sent successfully';
      } else {
        const errorText = await response.text();
        results.error = errorText;
        results.message = 'Test notification failed';
      }
    }

    else {
      results.message = 'Unknown action';
      results.availableActions = [
        'check-config',
        'check-pricing',
        'check-cpi',
        'simulate-calculation',
        'dry-run',
        'test-notification'
      ];
    }

    return new Response(
      JSON.stringify(results),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Test error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});