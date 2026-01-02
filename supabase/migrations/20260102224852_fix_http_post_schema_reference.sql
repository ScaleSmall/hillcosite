/*
  # Fix HTTP Post Schema Reference
  
  1. Issue
    - Function calls `extensions.http_post` but it doesn't exist there
    - The http_post function is actually in the `net` schema
    - pg_net extension is in `extensions` schema, but functions are in `net` schema
  
  2. Changes
    - Update trigger_annual_pricing_update() to use `net.http_post`
    - Keep the secure search_path setting
  
  3. Impact
    - Fixes cron job execution
    - Allows annual pricing automation to run correctly
*/

-- Update the trigger function with correct schema reference
CREATE OR REPLACE FUNCTION public.trigger_annual_pricing_update()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
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
  FROM public.automation_config
  WHERE config_key = 'supabase_url';
  
  -- Log the start of automation
  INSERT INTO public.automation_logs (log_type, operation, message, metadata)
  VALUES (
    'info',
    'cron-trigger',
    'Annual pricing automation triggered by cron job',
    jsonb_build_object('year', v_current_year, 'timestamp', NOW())
  );
  
  -- Make HTTP request to Edge Function using pg_net (correct schema: net, not extensions)
  IF v_supabase_url IS NOT NULL THEN
    SELECT net.http_post(
      url := v_supabase_url || '/functions/v1/annual-pricing-automation?year=' || v_current_year::text,
      headers := jsonb_build_object(
        'Content-Type', 'application/json'
      ),
      body := jsonb_build_object()
    ) INTO v_request_id;
    
    -- Log the request
    INSERT INTO public.automation_logs (log_type, operation, message, metadata)
    VALUES (
      'info',
      'cron-trigger',
      'HTTP request sent to annual-pricing-automation',
      jsonb_build_object('request_id', v_request_id, 'year', v_current_year)
    );
  ELSE
    -- Log error if URL not configured
    INSERT INTO public.automation_logs (log_type, operation, message, metadata)
    VALUES (
      'error',
      'cron-trigger',
      'Supabase URL not configured for cron job',
      jsonb_build_object('year', v_current_year)
    );
  END IF;
  
EXCEPTION WHEN OTHERS THEN
  -- Log any errors
  INSERT INTO public.automation_logs (log_type, operation, message, metadata)
  VALUES (
    'error',
    'cron-trigger',
    'Error executing annual pricing automation: ' || SQLERRM,
    jsonb_build_object('error', SQLERRM, 'year', v_current_year)
  );
END;
$$;

-- Add comment for documentation
COMMENT ON FUNCTION public.trigger_annual_pricing_update IS 
  'Triggers annual pricing automation via Edge Function. Uses SECURITY DEFINER with immutable search_path for security. Calls net.http_post for HTTP requests.';
