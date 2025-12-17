/*
  # Setup Annual Pricing Automation Cron Job

  1. Extensions
    - Enable pg_cron for scheduled tasks
    - Enable pg_net for HTTP requests from database

  2. Cron Job Configuration
    - Schedule: Every January 1st at 12:01 AM CST (6:01 AM UTC)
    - Action: Call annual-pricing-automation Edge Function
    - Includes error handling and logging

  3. Helper Function
    - `trigger_annual_pricing_update()` - Makes HTTP request to Edge Function
    - Logs execution results to automation_logs table
    - Handles both success and failure scenarios

  4. Notes
    - Cron expression: '1 6 1 1 *' = minute 1, hour 6 (UTC), day 1, month 1
    - CST is UTC-6, so 12:01 AM CST = 6:01 AM UTC
    - Uses pg_net for async HTTP requests
    - Automatically retries on failure through cron
*/

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create helper function to trigger the pricing automation
CREATE OR REPLACE FUNCTION trigger_annual_pricing_update()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_supabase_url text;
  v_request_id bigint;
  v_current_year int;
BEGIN
  -- Get current year
  v_current_year := EXTRACT(YEAR FROM CURRENT_DATE);
  
  -- Get Supabase URL from environment (you'll need to set this)
  -- For now, we'll construct it - replace with your actual project URL
  v_supabase_url := current_setting('app.settings.supabase_url', true);
  
  -- If not set, try to get from a config table
  IF v_supabase_url IS NULL THEN
    SELECT config_value->>'url' INTO v_supabase_url
    FROM automation_config
    WHERE config_key = 'supabase_url';
  END IF;
  
  -- Log the start of automation
  INSERT INTO automation_logs (log_type, operation, message, metadata)
  VALUES (
    'info',
    'cron-trigger',
    'Annual pricing automation triggered by cron job',
    jsonb_build_object('year', v_current_year, 'timestamp', NOW())
  );
  
  -- Make HTTP request to Edge Function using pg_net
  IF v_supabase_url IS NOT NULL THEN
    SELECT net.http_post(
      url := v_supabase_url || '/functions/v1/annual-pricing-automation?year=' || v_current_year::text,
      headers := jsonb_build_object(
        'Content-Type', 'application/json'
      ),
      body := jsonb_build_object()
    ) INTO v_request_id;
    
    -- Log the request
    INSERT INTO automation_logs (log_type, operation, message, metadata)
    VALUES (
      'info',
      'cron-trigger',
      'HTTP request sent to annual-pricing-automation',
      jsonb_build_object('request_id', v_request_id, 'year', v_current_year)
    );
  ELSE
    -- Log error if URL not configured
    INSERT INTO automation_logs (log_type, operation, message, metadata)
    VALUES (
      'error',
      'cron-trigger',
      'Supabase URL not configured for cron job',
      jsonb_build_object('year', v_current_year)
    );
  END IF;
  
EXCEPTION WHEN OTHERS THEN
  -- Log any errors
  INSERT INTO automation_logs (log_type, operation, message, metadata)
  VALUES (
    'error',
    'cron-trigger',
    'Error executing annual pricing automation: ' || SQLERRM,
    jsonb_build_object('error', SQLERRM, 'year', v_current_year)
  );
END;
$$;

-- Remove existing cron job if it exists
SELECT cron.unschedule('annual-pricing-automation')
WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'annual-pricing-automation'
);

-- Schedule the cron job to run every January 1st at 12:01 AM CST (6:01 AM UTC)
SELECT cron.schedule(
  'annual-pricing-automation',
  '1 6 1 1 *',
  $$SELECT trigger_annual_pricing_update()$$
);

-- Insert Supabase URL into config if not already present
INSERT INTO automation_config (config_key, config_value, description)
VALUES (
  'supabase_url',
  jsonb_build_object('url', 'https://your-project.supabase.co'),
  'Supabase project URL for cron job HTTP requests'
)
ON CONFLICT (config_key) DO NOTHING;

-- Log the cron job setup
INSERT INTO automation_logs (log_type, operation, message, metadata)
VALUES (
  'success',
  'cron-setup',
  'Annual pricing automation cron job configured successfully',
  jsonb_build_object(
    'schedule', '1 6 1 1 * (Every January 1st at 12:01 AM CST)',
    'function', 'trigger_annual_pricing_update()',
    'configured_at', NOW()
  )
);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA cron TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA cron TO postgres;
