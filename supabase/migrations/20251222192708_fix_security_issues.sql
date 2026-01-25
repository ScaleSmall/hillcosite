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
