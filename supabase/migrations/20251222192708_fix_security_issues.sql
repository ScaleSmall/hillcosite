/*
  # Fix Security Issues
  
  This migration addresses multiple security and performance concerns:
  
  1. **Drop Unused Indexes**
     - Remove `idx_pricing_data_guide_key` (redundant with UNIQUE constraint)
     - Remove `idx_pricing_data_active` (not being used)
     - Remove `idx_inflation_rates_year` (not being used)
     - Remove `idx_automation_logs_created` (not being used)
     - Remove `idx_automation_logs_type` (not being used)
  
  2. **Fix Function Search Path Security**
     - Fix `update_updated_at_column` - set immutable search_path
     - Fix `trigger_annual_pricing_update` - set immutable search_path
     - Prevents schema injection attacks
  
  3. **Move Extension to Safe Schema**
     - Move `pg_net` extension from public to extensions schema
     - Follows PostgreSQL security best practices
  
  ## Security Impact
  - Prevents potential schema injection attacks
  - Reduces attack surface by removing unused indexes
  - Ensures extensions are isolated from application schemas
*/

-- ============================================================================
-- 1. DROP UNUSED INDEXES
-- ============================================================================

DROP INDEX IF EXISTS public.idx_pricing_data_guide_key;
DROP INDEX IF EXISTS public.idx_pricing_data_active;
DROP INDEX IF EXISTS public.idx_inflation_rates_year;
DROP INDEX IF EXISTS public.idx_automation_logs_created;
DROP INDEX IF EXISTS public.idx_automation_logs_type;

-- ============================================================================
-- 2. FIX FUNCTION SEARCH PATH SECURITY
-- ============================================================================

-- Fix update_updated_at_column function with secure search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Fix trigger_annual_pricing_update function with secure search_path
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
  
  -- Get Supabase URL from environment
  v_supabase_url := current_setting('app.settings.supabase_url', true);
  
  -- If not set, try to get from a config table
  IF v_supabase_url IS NULL THEN
    SELECT config_value->>'url' INTO v_supabase_url
    FROM public.automation_config
    WHERE config_key = 'supabase_url';
  END IF;
  
  -- Log the start of automation
  INSERT INTO public.automation_logs (log_type, operation, message, metadata)
  VALUES (
    'info',
    'cron-trigger',
    'Annual pricing automation triggered by cron job',
    jsonb_build_object('year', v_current_year, 'timestamp', NOW())
  );
  
  -- Make HTTP request to Edge Function using pg_net
  IF v_supabase_url IS NOT NULL THEN
    SELECT extensions.http_post(
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

-- ============================================================================
-- 3. MOVE PG_NET EXTENSION TO EXTENSIONS SCHEMA
-- ============================================================================

-- Create extensions schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS extensions;

-- Grant usage on extensions schema
GRANT USAGE ON SCHEMA extensions TO postgres, service_role;

-- Move pg_net extension to extensions schema
-- Note: We need to drop and recreate to move it
DROP EXTENSION IF EXISTS pg_net CASCADE;
CREATE EXTENSION IF NOT EXISTS pg_net SCHEMA extensions;

-- Grant necessary permissions on pg_net functions in extensions schema
GRANT ALL ON ALL FUNCTIONS IN SCHEMA extensions TO postgres, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA extensions TO postgres, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA extensions TO postgres, service_role;
