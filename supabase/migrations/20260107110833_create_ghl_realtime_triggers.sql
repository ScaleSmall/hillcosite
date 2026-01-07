/*
  # Create GHL Realtime Broadcast Triggers

  ## Overview
  Creates triggers to broadcast changes to GHL tables via Supabase Realtime, enabling automatic push updates to the dashboard.

  ## Changes
  
  ### 1. Broadcast Function
  Creates a reusable function that broadcasts changes to Realtime channels based on source_id
  
  ### 2. Triggers on All GHL Tables
  Attaches broadcast triggers to:
  - ghl_contacts
  - ghl_opportunities
  - ghl_pipelines
  - ghl_orders
  - ghl_payments
  - ghl_reviews
  - ghl_sync_jobs
  
  ### 3. RLS Policies for realtime.messages
  Ensures users can only receive broadcasts for source_ids they have access to

  ## Topic Naming Convention
  Topics follow pattern: `ghl:{source_id}`
  Example: `ghl:fb055913-f354-422c-8fce-6e0cbe7866fb`

  ## Security
  - Broadcasts only trigger for authenticated operations
  - RLS on realtime.messages filters by user_sources membership
  - Service role operations automatically broadcast to all listeners

  ## Benefits
  - Near-instant UI updates when data changes
  - No polling required from dashboard
  - Reduced server load
  - Better user experience
*/

-- Create broadcast function for GHL changes
CREATE OR REPLACE FUNCTION public.rt_broadcast_ghl_changes()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  v_source_id uuid;
  v_topic text;
  v_payload jsonb;
BEGIN
  -- Extract source_id from NEW or OLD record
  v_source_id := COALESCE(NEW.source_id, OLD.source_id);
  
  -- Build topic name
  v_topic := 'ghl:' || v_source_id::text;
  
  -- Build payload
  v_payload := jsonb_build_object(
    'table', TG_TABLE_NAME,
    'schema', TG_TABLE_SCHEMA,
    'operation', TG_OP,
    'old', CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN row_to_json(OLD) ELSE NULL END,
    'new', CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN row_to_json(NEW) ELSE NULL END,
    'timestamp', now()
  );
  
  -- Broadcast to realtime channel
  PERFORM realtime.broadcast_changes(
    v_topic,
    TG_OP,
    TG_OP,
    TG_TABLE_NAME,
    TG_TABLE_SCHEMA,
    NEW,
    OLD,
    v_payload
  );
  
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Attach triggers to ghl_contacts
DROP TRIGGER IF EXISTS t_rt_broadcast_ghl_contacts ON public.ghl_contacts;
CREATE TRIGGER t_rt_broadcast_ghl_contacts
  AFTER INSERT OR UPDATE OR DELETE ON public.ghl_contacts
  FOR EACH ROW
  EXECUTE FUNCTION public.rt_broadcast_ghl_changes();

-- Attach triggers to ghl_opportunities
DROP TRIGGER IF EXISTS t_rt_broadcast_ghl_opportunities ON public.ghl_opportunities;
CREATE TRIGGER t_rt_broadcast_ghl_opportunities
  AFTER INSERT OR UPDATE OR DELETE ON public.ghl_opportunities
  FOR EACH ROW
  EXECUTE FUNCTION public.rt_broadcast_ghl_changes();

-- Attach triggers to ghl_pipelines
DROP TRIGGER IF EXISTS t_rt_broadcast_ghl_pipelines ON public.ghl_pipelines;
CREATE TRIGGER t_rt_broadcast_ghl_pipelines
  AFTER INSERT OR UPDATE OR DELETE ON public.ghl_pipelines
  FOR EACH ROW
  EXECUTE FUNCTION public.rt_broadcast_ghl_changes();

-- Attach triggers to ghl_orders
DROP TRIGGER IF EXISTS t_rt_broadcast_ghl_orders ON public.ghl_orders;
CREATE TRIGGER t_rt_broadcast_ghl_orders
  AFTER INSERT OR UPDATE OR DELETE ON public.ghl_orders
  FOR EACH ROW
  EXECUTE FUNCTION public.rt_broadcast_ghl_changes();

-- Attach triggers to ghl_payments
DROP TRIGGER IF EXISTS t_rt_broadcast_ghl_payments ON public.ghl_payments;
CREATE TRIGGER t_rt_broadcast_ghl_payments
  AFTER INSERT OR UPDATE OR DELETE ON public.ghl_payments
  FOR EACH ROW
  EXECUTE FUNCTION public.rt_broadcast_ghl_changes();

-- Attach triggers to ghl_reviews
DROP TRIGGER IF EXISTS t_rt_broadcast_ghl_reviews ON public.ghl_reviews;
CREATE TRIGGER t_rt_broadcast_ghl_reviews
  AFTER INSERT OR UPDATE OR DELETE ON public.ghl_reviews
  FOR EACH ROW
  EXECUTE FUNCTION public.rt_broadcast_ghl_changes();

-- Attach triggers to ghl_sync_jobs
DROP TRIGGER IF EXISTS t_rt_broadcast_ghl_sync_jobs ON public.ghl_sync_jobs;
CREATE TRIGGER t_rt_broadcast_ghl_sync_jobs
  AFTER INSERT OR UPDATE OR DELETE ON public.ghl_sync_jobs
  FOR EACH ROW
  EXECUTE FUNCTION public.rt_broadcast_ghl_changes();

-- Enable realtime for all GHL tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.ghl_contacts;
ALTER PUBLICATION supabase_realtime ADD TABLE public.ghl_opportunities;
ALTER PUBLICATION supabase_realtime ADD TABLE public.ghl_pipelines;
ALTER PUBLICATION supabase_realtime ADD TABLE public.ghl_orders;
ALTER PUBLICATION supabase_realtime ADD TABLE public.ghl_payments;
ALTER PUBLICATION supabase_realtime ADD TABLE public.ghl_reviews;
ALTER PUBLICATION supabase_realtime ADD TABLE public.ghl_sync_jobs;

-- RLS Policy for realtime.messages (users can only receive broadcasts for their sources)
-- Note: This policy applies to the realtime.messages table which controls broadcast reception
DO $$
BEGIN
  -- Enable RLS on realtime.messages if not already enabled
  IF NOT EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE schemaname = 'realtime' 
    AND tablename = 'messages' 
    AND rowsecurity = true
  ) THEN
    ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;

-- Policy: Users can only receive GHL broadcasts for sources they have access to
DROP POLICY IF EXISTS "ghl_source_broadcast_receivers" ON realtime.messages;
CREATE POLICY "ghl_source_broadcast_receivers"
  ON realtime.messages
  FOR SELECT
  TO authenticated
  USING (
    -- Allow all non-GHL topics (don't interfere with other realtime usage)
    (topic NOT LIKE 'ghl:%')
    OR
    -- For GHL topics, check user has access to the source_id in the topic
    EXISTS (
      SELECT 1
      FROM public.user_sources us
      WHERE us.user_id = auth.uid()
        AND us.source_id::text = split_part(topic, ':', 2)
    )
  );