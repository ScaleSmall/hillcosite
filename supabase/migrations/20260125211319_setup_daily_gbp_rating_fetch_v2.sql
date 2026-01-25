/*
  # Setup Daily GBP Rating Fetch Automation

  1. Cron Job Configuration
    - Schedule: Daily at 9:00 AM UTC (3:00 AM CST)
    - Action: Call fetch-gbp-rating Edge Function
    - Automatically stores rating in gbp_ratings table
    - Sends alert if rating < 4.5

  2. Helper Function
    - `trigger_gbp_rating_fetch()` - Makes HTTP request to Edge Function
    - Uses service role key for authentication
    - Handles errors gracefully

  3. Notes
    - Cron expression: '0 9 * * *' = minute 0, hour 9 (UTC), every day
    - Uses pg_net for async HTTP requests
    - Edge function handles all business logic (fetch, store, alert)
    - Extensions (pg_cron, pg_net) should already be enabled
*/

-- Create helper function to trigger the GBP rating fetch
CREATE OR REPLACE FUNCTION trigger_gbp_rating_fetch()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_supabase_url text;
  v_service_role_key text;
  v_request_id bigint;
BEGIN
  -- Get Supabase URL and service role key from environment
  v_supabase_url := current_setting('app.settings.supabase_url', true);
  v_service_role_key := current_setting('app.settings.service_role_key', true);
  
  -- If not set in app settings, use default env vars
  IF v_supabase_url IS NULL THEN
    v_supabase_url := current_setting('SUPABASE_URL', true);
  END IF;
  
  IF v_service_role_key IS NULL THEN
    v_service_role_key := current_setting('SUPABASE_SERVICE_ROLE_KEY', true);
  END IF;
  
  -- Make HTTP request to Edge Function using pg_net
  IF v_supabase_url IS NOT NULL THEN
    SELECT net.http_post(
      url := v_supabase_url || '/functions/v1/fetch-gbp-rating',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || COALESCE(v_service_role_key, '')
      ),
      body := jsonb_build_object()
    ) INTO v_request_id;
  END IF;
  
EXCEPTION WHEN OTHERS THEN
  -- Silently fail - edge function will log errors
  RAISE WARNING 'Error executing GBP rating fetch: %', SQLERRM;
END;
$$;

-- Remove existing cron job if it exists
DO $$
BEGIN
  PERFORM cron.unschedule('fetch-gbp-rating-daily')
  WHERE EXISTS (
    SELECT 1 FROM cron.job WHERE jobname = 'fetch-gbp-rating-daily'
  );
EXCEPTION WHEN OTHERS THEN
  -- Ignore if job doesn't exist
  NULL;
END $$;

-- Schedule the cron job to run daily at 9:00 AM UTC
SELECT cron.schedule(
  'fetch-gbp-rating-daily',
  '0 9 * * *',
  $$SELECT trigger_gbp_rating_fetch()$$
);
