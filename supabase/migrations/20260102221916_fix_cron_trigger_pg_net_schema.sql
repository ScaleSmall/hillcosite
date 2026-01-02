/*
  # Fix Cron Trigger Function - Correct pg_net Schema

  1. Issue
    - The annual pricing cron job failed on January 1, 2026
    - Error: "function extensions.http_post does not exist"
    - Root cause: Using `net.http_post` instead of `extensions.http_post`

  2. Changes
    - Update trigger_annual_pricing_update() function
    - Correct pg_net function call to use proper schema
    - pg_net is installed in 'extensions' schema, not 'net'

  3. Impact
    - Fixes the cron job for future executions
    - Allows manual trigger to work for 2026 update
*/

-- Update the trigger function to use correct schema
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
  
  -- Get Supabase URL from config table
  SELECT config_value->>'url' INTO v_supabase_url
  FROM automation_config
  WHERE config_key = 'supabase_url';
  
  -- Log the start of automation
  INSERT INTO automation_logs (log_type, operation, message, metadata)
  VALUES (
    'info',
    'cron-trigger',
    'Annual pricing automation triggered by cron job',
    jsonb_build_object('year', v_current_year, 'timestamp', NOW())
  );
  
  -- Make HTTP request to Edge Function using pg_net (correct schema)
  IF v_supabase_url IS NOT NULL THEN
    SELECT extensions.http_post(
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