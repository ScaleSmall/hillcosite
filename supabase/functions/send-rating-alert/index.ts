import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface AlertPayload {
  rating: number;
  reviewCount: number;
  timestamp: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { rating, reviewCount, timestamp }: AlertPayload = await req.json();

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (!resendApiKey) {
      throw new Error('Missing RESEND_API_KEY environment variable');
    }

    const emailBody = `
ALERT: Google Business Profile Rating Below Threshold

Current Rating: ${rating}/5.0
Review Count: ${reviewCount}
Timestamp: ${timestamp}

The Google Business Profile rating for Hill Country Painting has fallen below 4.5.

Action Required:
1. Check recent reviews on Google Business Profile
2. Respond to any negative reviews professionally
3. Address any service quality issues mentioned
4. Consider reaching out to unhappy customers

This is an automated alert. You will not receive another alert for 7 days unless the rating improves and then drops again.
    `.trim();

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'alerts@hillcopaint.com',
        to: ['kris@hillcopaint.com', 'admin@scalesmall.ai'],
        subject: 'ALERT: GBP Rating Below 4.5',
        text: emailBody,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      throw new Error(`Resend API error: ${errorData}`);
    }

    const emailData = await emailResponse.json();

    return new Response(
      JSON.stringify({
        success: true,
        emailId: emailData.id
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Error sending rating alert:', error);
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
