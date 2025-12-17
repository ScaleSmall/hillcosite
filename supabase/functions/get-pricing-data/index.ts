import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
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
    const guideKey = url.searchParams.get('guide') || 'painting-costs';

    const { data: pricingData, error } = await supabase
      .from('pricing_data')
      .select('*')
      .eq('guide_key', guideKey)
      .eq('is_active', true)
      .order('section_key');

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch pricing data' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const formattedData: { [key: string]: any } = {};
    
    if (pricingData) {
      for (const item of pricingData) {
        const priceObj: any = {
          min: item.display_min_value,
          description: item.description
        };
        
        if (item.display_max_value !== null) {
          priceObj.max = item.display_max_value;
          priceObj.formatted = `$${item.display_min_value.toLocaleString()} - $${item.display_max_value.toLocaleString()}`;
        } else {
          priceObj.formatted = `$${item.display_min_value.toLocaleString()}`;
        }
        
        formattedData[item.section_key] = priceObj;
      }
    }

    const response = {
      success: true,
      guide: guideKey,
      data: formattedData,
      lastUpdated: pricingData && pricingData.length > 0 
        ? pricingData[0].updated_at 
        : new Date().toISOString()
    };

    return new Response(
      JSON.stringify(response),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600',
        },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});