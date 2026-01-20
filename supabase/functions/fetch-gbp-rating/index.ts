import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface PlaceDetailsResponse {
  result?: {
    rating?: number;
    user_ratings_total?: number;
  };
  status: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Get environment variables
    const googleApiKey = Deno.env.get('GOOGLE_API_KEY');
    const googlePlaceId = Deno.env.get('GOOGLE_PLACE_ID');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!googleApiKey || !googlePlaceId) {
      throw new Error('Missing GOOGLE_API_KEY or GOOGLE_PLACE_ID environment variables');
    }

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase environment variables');
    }

    // Fetch rating from Google Places API
    const placesUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${googlePlaceId}&fields=rating,user_ratings_total&key=${googleApiKey}`;

    const placesResponse = await fetch(placesUrl);
    const placesData: PlaceDetailsResponse = await placesResponse.json();

    if (placesData.status !== 'OK' || !placesData.result) {
      throw new Error(`Google Places API error: ${placesData.status}`);
    }

    const rating = placesData.result.rating || 0;
    const reviewCount = placesData.result.user_ratings_total || 0;

    // Store in Supabase
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: insertedData, error: insertError } = await supabase
      .from('gbp_ratings')
      .insert({
        rating_value: rating,
        review_count: reviewCount,
        fetched_at: new Date().toISOString()
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    // Check if rating is below 4.5 and send alert if needed
    if (rating < 4.5) {
      // Get the most recent alert timestamp
      const { data: latestRating } = await supabase
        .from('gbp_ratings')
        .select('alert_sent_at')
        .not('alert_sent_at', 'is', null)
        .order('alert_sent_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      // Only send alert if no alert was sent in the last 7 days
      const shouldSendAlert = !latestRating?.alert_sent_at ||
        (new Date().getTime() - new Date(latestRating.alert_sent_at).getTime()) > (7 * 24 * 60 * 60 * 1000);

      if (shouldSendAlert) {
        // Call send-rating-alert edge function
        const alertResponse = await fetch(`${supabaseUrl}/functions/v1/send-rating-alert`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${supabaseServiceKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            rating,
            reviewCount,
            timestamp: new Date().toISOString()
          })
        });

        if (alertResponse.ok) {
          // Update the record to mark alert as sent
          await supabase
            .from('gbp_ratings')
            .update({ alert_sent_at: new Date().toISOString() })
            .eq('id', insertedData.id);
        }
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        rating,
        reviewCount,
        alertSent: rating < 4.5
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Error fetching GBP rating:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
