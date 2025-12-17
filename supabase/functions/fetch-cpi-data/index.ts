import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface CPIResponse {
  year: number;
  cpiRate: number;
  source: string;
  validated: boolean;
}

async function fetchFromBLS(year: number): Promise<CPIResponse | null> {
  try {
    const endYear = year;
    const startYear = year - 1;
    
    const url = `https://api.bls.gov/publicAPI/v2/timeseries/data/CUUR0000SA0`;
    const body = JSON.stringify({
      seriesid: ['CUUR0000SA0'],
      startyear: startYear.toString(),
      endyear: endYear.toString(),
      registrationkey: Deno.env.get('BLS_API_KEY') || ''
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    if (!response.ok) {
      console.error('BLS API error:', response.statusText);
      return null;
    }

    const data = await response.json();
    
    if (data.status === 'REQUEST_SUCCEEDED' && data.Results?.series?.[0]?.data) {
      const seriesData = data.Results.series[0].data;
      
      const decCurrentYear = seriesData.find((d: any) => 
        d.year === endYear.toString() && d.period === 'M12'
      );
      const decPreviousYear = seriesData.find((d: any) => 
        d.year === startYear.toString() && d.period === 'M12'
      );

      if (decCurrentYear && decPreviousYear) {
        const current = parseFloat(decCurrentYear.value);
        const previous = parseFloat(decPreviousYear.value);
        const cpiRate = ((current - previous) / previous) * 100;

        if (cpiRate >= -2 && cpiRate <= 20) {
          return {
            year,
            cpiRate: Math.round(cpiRate * 1000) / 1000,
            source: 'bls.gov',
            validated: true
          };
        }
      }
    }

    return null;
  } catch (error) {
    console.error('BLS fetch error:', error);
    return null;
  }
}

async function fetchFromFRED(year: number): Promise<CPIResponse | null> {
  try {
    const apiKey = Deno.env.get('FRED_API_KEY');
    if (!apiKey) {
      console.log('FRED API key not configured, skipping fallback');
      return null;
    }

    const seriesId = 'CPIAUCSL';
    const endDate = `${year}-12-31`;
    const startDate = `${year - 1}-12-31`;
    
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${apiKey}&file_type=json&observation_start=${startDate}&observation_end=${endDate}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('FRED API error:', response.statusText);
      return null;
    }

    const data = await response.json();
    
    if (data.observations && data.observations.length >= 2) {
      const observations = data.observations;
      const current = parseFloat(observations[observations.length - 1].value);
      const previous = parseFloat(observations[0].value);
      const cpiRate = ((current - previous) / previous) * 100;

      if (cpiRate >= -2 && cpiRate <= 20) {
        return {
          year,
          cpiRate: Math.round(cpiRate * 1000) / 1000,
          source: 'fred.stlouisfed.org',
          validated: true
        };
      }
    }

    return null;
  } catch (error) {
    console.error('FRED fetch error:', error);
    return null;
  }
}

async function logToDatabase(supabase: any, logType: string, operation: string, message: string, metadata?: any) {
  await supabase.from('automation_logs').insert({
    log_type: logType,
    operation,
    message,
    metadata: metadata || {}
  });
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

    const url = new URL(req.url);
    const yearParam = url.searchParams.get('year');
    const targetYear = yearParam ? parseInt(yearParam) : new Date().getFullYear();

    await logToDatabase(supabase, 'info', 'fetch-cpi', `Starting CPI fetch for year ${targetYear}`);

    let cpiData = await fetchFromBLS(targetYear);
    
    if (!cpiData) {
      await logToDatabase(supabase, 'warning', 'fetch-cpi', 'BLS fetch failed, trying FRED fallback');
      cpiData = await fetchFromFRED(targetYear);
    }

    if (!cpiData) {
      await logToDatabase(supabase, 'error', 'fetch-cpi', 'All CPI data sources failed');
      return new Response(
        JSON.stringify({ error: 'Failed to fetch CPI data from all sources' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const { data: existingRate } = await supabase
      .from('inflation_rates')
      .select('*')
      .eq('year', cpiData.year)
      .maybeSingle();

    if (existingRate) {
      await supabase
        .from('inflation_rates')
        .update({
          cpi_rate: cpiData.cpiRate,
          data_source: cpiData.source,
          is_validated: cpiData.validated,
          fetch_date: new Date().toISOString(),
        })
        .eq('year', cpiData.year);
      
      await logToDatabase(supabase, 'success', 'fetch-cpi', `Updated CPI rate for ${cpiData.year}`, cpiData);
    } else {
      await supabase.from('inflation_rates').insert({
        year: cpiData.year,
        cpi_rate: cpiData.cpiRate,
        data_source: cpiData.source,
        is_validated: cpiData.validated,
        fetch_date: new Date().toISOString(),
      });
      
      await logToDatabase(supabase, 'success', 'fetch-cpi', `Stored new CPI rate for ${cpiData.year}`, cpiData);
    }

    return new Response(
      JSON.stringify({ success: true, data: cpiData }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
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