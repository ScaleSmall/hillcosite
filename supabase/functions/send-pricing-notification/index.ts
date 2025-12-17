import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface NotificationData {
  type: 'success' | 'failure';
  year: number;
  cpiRate?: number;
  pricesUpdated?: number;
  sampleChanges?: Array<{name: string; before: string; after: string}>;
  errorMessage?: string;
  logUrl?: string;
}

function generateSuccessEmailHTML(data: NotificationData): string {
  const { year, cpiRate, pricesUpdated, sampleChanges, logUrl } = data;
  
  const samplesHTML = sampleChanges && sampleChanges.length > 0
    ? sampleChanges.map(change => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${change.name}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${change.before}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #059669; font-weight: 600;">${change.after}</td>
        </tr>
      `).join('')
    : '<tr><td colspan="3" style="padding: 8px; text-align: center; color: #6b7280;">No sample changes available</td></tr>';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${year} Price Update Complete</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
              ✓ ${year} Price Update Complete
            </h1>
            <p style="margin: 10px 0 0 0; color: #d1fae5; font-size: 14px;">
              Automated Pricing Update Successful
            </p>
          </div>
          
          <!-- Summary Stats -->
          <div style="padding: 30px 20px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
              <div style="background-color: #f0fdf4; border-left: 4px solid #059669; padding: 15px; border-radius: 4px;">
                <div style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">CPI Rate Applied</div>
                <div style="color: #059669; font-size: 28px; font-weight: 700;">${cpiRate?.toFixed(2)}%</div>
              </div>
              <div style="background-color: #f0fdf4; border-left: 4px solid #059669; padding: 15px; border-radius: 4px;">
                <div style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Prices Updated</div>
                <div style="color: #059669; font-size: 28px; font-weight: 700;">${pricesUpdated || 0}</div>
              </div>
            </div>
            
            <!-- Sample Changes -->
            <div style="margin-top: 30px;">
              <h2 style="color: #111827; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">Sample Price Changes</h2>
              <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 4px;">
                <thead>
                  <tr style="background-color: #f9fafb;">
                    <th style="padding: 10px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 2px solid #e5e7eb;">Item</th>
                    <th style="padding: 10px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 2px solid #e5e7eb;">Previous</th>
                    <th style="padding: 10px; text-align: left; font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; border-bottom: 2px solid #e5e7eb;">New (${year})</th>
                  </tr>
                </thead>
                <tbody>
                  ${samplesHTML}
                </tbody>
              </table>
            </div>
            
            <!-- Important Notes -->
            <div style="margin-top: 30px; background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 4px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px; line-height: 1.6;">
                <strong>✓ Automated Actions Completed:</strong><br>
                • All prices rounded to nearest $100<br>
                • Year references updated from ${year - 1} to ${year}<br>
                • Database records updated and versioned<br>
                • Site content refreshed automatically
              </p>
            </div>
            
            ${logUrl ? `
            <div style="margin-top: 25px; text-align: center;">
              <a href="${logUrl}" style="display: inline-block; background-color: #059669; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">View Detailed Logs</a>
            </div>
            ` : ''}
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              Hill Country Painting - Automated Pricing System<br>
              Executed on ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateFailureEmailHTML(data: NotificationData): string {
  const { year, errorMessage, logUrl } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${year} Price Update Failed</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
              ⚠ ${year} Price Update Failed
            </h1>
            <p style="margin: 10px 0 0 0; color: #fecaca; font-size: 14px;">
              Automated Pricing Update Encountered an Error
            </p>
          </div>
          
          <!-- Error Details -->
          <div style="padding: 30px 20px;">
            <div style="background-color: #fef2f2; border-left: 4px solid #dc2626; padding: 20px; border-radius: 4px; margin-bottom: 25px;">
              <h2 style="color: #991b1b; font-size: 16px; font-weight: 600; margin: 0 0 10px 0;">Error Details:</h2>
              <p style="margin: 0; color: #7f1d1d; font-size: 14px; line-height: 1.6; font-family: 'Courier New', monospace;">
                ${errorMessage || 'Unknown error occurred'}
              </p>
            </div>
            
            <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 4px; margin-bottom: 25px;">
              <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 1.6;">
                <strong>Required Action:</strong><br>
                • Review error logs for detailed information<br>
                • Check API connectivity and credentials<br>
                • Verify database access and permissions<br>
                • Consider manual intervention if needed
              </p>
            </div>
            
            ${logUrl ? `
            <div style="margin-top: 25px; text-align: center;">
              <a href="${logUrl}" style="display: inline-block; background-color: #dc2626; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">View Error Logs</a>
            </div>
            ` : ''}
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              Hill Country Painting - Automated Pricing System<br>
              Failed on ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
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
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: 'RESEND_API_KEY not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const notificationData: NotificationData = await req.json();

    const { data: configData } = await supabase
      .from('automation_config')
      .select('config_value')
      .eq('config_key', 'owner_email')
      .maybeSingle();

    if (!configData?.config_value?.emails || !Array.isArray(configData.config_value.emails) || configData.config_value.emails.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Owner emails not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const ownerEmails = configData.config_value.emails;
    const subject = notificationData.type === 'success'
      ? `✓ ${notificationData.year} Price Update Complete - ${notificationData.pricesUpdated} Prices Updated`
      : `⚠ ${notificationData.year} Price Update Failed`;
    
    const htmlContent = notificationData.type === 'success'
      ? generateSuccessEmailHTML(notificationData)
      : generateFailureEmailHTML(notificationData);

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Hill Country Painting <noreply@hillcopaint.com>',
        to: ownerEmails,
        subject,
        html: htmlContent,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('Resend API error:', errorText);
      throw new Error(`Email send failed: ${errorText}`);
    }

    const emailResult = await emailResponse.json();

    await supabase.from('automation_logs').insert({
      log_type: 'success',
      operation: 'send-notification',
      message: `Email sent successfully to ${ownerEmails.join(', ')}`,
      metadata: { emailId: emailResult.id, notificationData, recipients: ownerEmails }
    });

    return new Response(
      JSON.stringify({ success: true, emailId: emailResult.id }),
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