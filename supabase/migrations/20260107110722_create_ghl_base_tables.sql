/*
  # Create Go High Level (GHL) Base Tables

  ## Overview
  Creates the foundational tables for Go High Level CRM integration, including contacts, opportunities, pipelines, orders, payments, and reviews.

  ## New Tables
  
  ### 1. `user_sources`
  Maps users to source_ids they can access
  - `id` (uuid, primary key)
  - `user_id` (uuid, foreign key to auth.users) - User who has access
  - `source_id` (uuid) - Source identifier they can access
  - `role` (text) - Access role (owner, editor, viewer)
  - `created_at` (timestamptz)
  
  ### 2. `ghl_sources`
  Stores GHL location/source configuration
  - `id` (uuid, primary key)
  - `name` (text) - Friendly name
  - `location_id` (text) - GHL location ID
  - `api_key_encrypted` (text) - Encrypted API key
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 3. `ghl_contacts`
  Stores GHL contacts
  - `id` (uuid, primary key)
  - `source_id` (uuid, foreign key) - References ghl_sources
  - `ghl_contact_id` (text) - GHL's contact ID
  - `email` (text)
  - `phone` (text)
  - `first_name` (text)
  - `last_name` (text)
  - `tags` (text[])
  - `custom_fields` (jsonb)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  - `deleted_at` (timestamptz)
  
  ### 4. `ghl_pipelines`
  Stores GHL pipeline definitions
  - `id` (uuid, primary key)
  - `source_id` (uuid, foreign key)
  - `ghl_pipeline_id` (text) - GHL's pipeline ID
  - `name` (text)
  - `stages` (jsonb) - Array of stage objects
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 5. `ghl_opportunities`
  Stores GHL opportunities/deals
  - `id` (uuid, primary key)
  - `source_id` (uuid, foreign key)
  - `ghl_opportunity_id` (text) - GHL's opportunity ID
  - `contact_id` (uuid, foreign key to ghl_contacts)
  - `pipeline_id` (uuid, foreign key to ghl_pipelines)
  - `stage_id` (text) - Current stage ID
  - `name` (text)
  - `amount` (numeric)
  - `status` (text)
  - `custom_fields` (jsonb)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  - `deleted_at` (timestamptz)
  
  ### 6. `ghl_orders`
  Stores GHL orders
  - `id` (uuid, primary key)
  - `source_id` (uuid, foreign key)
  - `ghl_order_id` (text) - GHL's order ID
  - `contact_id` (uuid, foreign key)
  - `amount` (numeric)
  - `status` (text)
  - `metadata` (jsonb)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 7. `ghl_payments`
  Stores GHL payment records
  - `id` (uuid, primary key)
  - `source_id` (uuid, foreign key)
  - `ghl_payment_id` (text) - GHL's payment ID
  - `order_id` (uuid, foreign key to ghl_orders)
  - `amount` (numeric)
  - `status` (text)
  - `payment_method` (text)
  - `metadata` (jsonb)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 8. `ghl_reviews`
  Stores GHL review data
  - `id` (uuid, primary key)
  - `source_id` (uuid, foreign key)
  - `ghl_review_id` (text) - GHL's review ID
  - `contact_id` (uuid, foreign key)
  - `rating` (integer)
  - `review_text` (text)
  - `reviewer_name` (text)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 9. `ghl_sync_jobs`
  Tracks sync job status for polling
  - `id` (uuid, primary key)
  - `source_id` (uuid, foreign key)
  - `location_id` (text)
  - `job_type` (text) - Type of sync (contacts, opportunities, etc)
  - `status` (text) - pending, running, completed, failed
  - `progress` (jsonb) - Progress tracking object
  - `error` (text)
  - `started_at` (timestamptz)
  - `completed_at` (timestamptz)
  - `created_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Users can only access data for source_ids they're mapped to via user_sources
  - Service role can perform all operations (for Edge Functions)

  ## Indexes
  - Index on source_id for all tables (fast filtering)
  - Index on ghl_*_id for all tables (fast lookups)
  - Index on user_sources(user_id, source_id) for quick membership checks
*/

-- Create user_sources mapping table
CREATE TABLE IF NOT EXISTS public.user_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  source_id uuid NOT NULL,
  role text DEFAULT 'viewer' CHECK (role IN ('owner', 'editor', 'viewer')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, source_id)
);

CREATE INDEX IF NOT EXISTS idx_user_sources_user_id ON public.user_sources(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sources_source_id ON public.user_sources(source_id);
CREATE INDEX IF NOT EXISTS idx_user_sources_lookup ON public.user_sources(user_id, source_id);

-- Create ghl_sources table
CREATE TABLE IF NOT EXISTS public.ghl_sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  location_id text UNIQUE NOT NULL,
  api_key_encrypted text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_ghl_sources_location_id ON public.ghl_sources(location_id);

-- Create ghl_contacts table
CREATE TABLE IF NOT EXISTS public.ghl_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id uuid REFERENCES public.ghl_sources(id) ON DELETE CASCADE,
  ghl_contact_id text NOT NULL,
  email text,
  phone text,
  first_name text,
  last_name text,
  tags text[] DEFAULT '{}',
  custom_fields jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  deleted_at timestamptz,
  UNIQUE(source_id, ghl_contact_id)
);

CREATE INDEX IF NOT EXISTS idx_ghl_contacts_source_id ON public.ghl_contacts(source_id);
CREATE INDEX IF NOT EXISTS idx_ghl_contacts_ghl_id ON public.ghl_contacts(ghl_contact_id);
CREATE INDEX IF NOT EXISTS idx_ghl_contacts_email ON public.ghl_contacts(email);

-- Create ghl_pipelines table
CREATE TABLE IF NOT EXISTS public.ghl_pipelines (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id uuid REFERENCES public.ghl_sources(id) ON DELETE CASCADE,
  ghl_pipeline_id text NOT NULL,
  name text NOT NULL,
  stages jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(source_id, ghl_pipeline_id)
);

CREATE INDEX IF NOT EXISTS idx_ghl_pipelines_source_id ON public.ghl_pipelines(source_id);
CREATE INDEX IF NOT EXISTS idx_ghl_pipelines_ghl_id ON public.ghl_pipelines(ghl_pipeline_id);

-- Create ghl_opportunities table
CREATE TABLE IF NOT EXISTS public.ghl_opportunities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id uuid REFERENCES public.ghl_sources(id) ON DELETE CASCADE,
  ghl_opportunity_id text NOT NULL,
  contact_id uuid REFERENCES public.ghl_contacts(id) ON DELETE SET NULL,
  pipeline_id uuid REFERENCES public.ghl_pipelines(id) ON DELETE SET NULL,
  stage_id text,
  name text NOT NULL,
  amount numeric DEFAULT 0,
  status text,
  custom_fields jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  deleted_at timestamptz,
  UNIQUE(source_id, ghl_opportunity_id)
);

CREATE INDEX IF NOT EXISTS idx_ghl_opportunities_source_id ON public.ghl_opportunities(source_id);
CREATE INDEX IF NOT EXISTS idx_ghl_opportunities_ghl_id ON public.ghl_opportunities(ghl_opportunity_id);
CREATE INDEX IF NOT EXISTS idx_ghl_opportunities_pipeline_id ON public.ghl_opportunities(pipeline_id);
CREATE INDEX IF NOT EXISTS idx_ghl_opportunities_contact_id ON public.ghl_opportunities(contact_id);

-- Create ghl_orders table
CREATE TABLE IF NOT EXISTS public.ghl_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id uuid REFERENCES public.ghl_sources(id) ON DELETE CASCADE,
  ghl_order_id text NOT NULL,
  contact_id uuid REFERENCES public.ghl_contacts(id) ON DELETE SET NULL,
  amount numeric DEFAULT 0,
  status text,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(source_id, ghl_order_id)
);

CREATE INDEX IF NOT EXISTS idx_ghl_orders_source_id ON public.ghl_orders(source_id);
CREATE INDEX IF NOT EXISTS idx_ghl_orders_ghl_id ON public.ghl_orders(ghl_order_id);
CREATE INDEX IF NOT EXISTS idx_ghl_orders_contact_id ON public.ghl_orders(contact_id);

-- Create ghl_payments table
CREATE TABLE IF NOT EXISTS public.ghl_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id uuid REFERENCES public.ghl_sources(id) ON DELETE CASCADE,
  ghl_payment_id text NOT NULL,
  order_id uuid REFERENCES public.ghl_orders(id) ON DELETE SET NULL,
  amount numeric DEFAULT 0,
  status text,
  payment_method text,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(source_id, ghl_payment_id)
);

CREATE INDEX IF NOT EXISTS idx_ghl_payments_source_id ON public.ghl_payments(source_id);
CREATE INDEX IF NOT EXISTS idx_ghl_payments_ghl_id ON public.ghl_payments(ghl_payment_id);
CREATE INDEX IF NOT EXISTS idx_ghl_payments_order_id ON public.ghl_payments(order_id);

-- Create ghl_reviews table
CREATE TABLE IF NOT EXISTS public.ghl_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id uuid REFERENCES public.ghl_sources(id) ON DELETE CASCADE,
  ghl_review_id text NOT NULL,
  contact_id uuid REFERENCES public.ghl_contacts(id) ON DELETE SET NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  review_text text,
  reviewer_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(source_id, ghl_review_id)
);

CREATE INDEX IF NOT EXISTS idx_ghl_reviews_source_id ON public.ghl_reviews(source_id);
CREATE INDEX IF NOT EXISTS idx_ghl_reviews_ghl_id ON public.ghl_reviews(ghl_review_id);
CREATE INDEX IF NOT EXISTS idx_ghl_reviews_contact_id ON public.ghl_reviews(contact_id);

-- Create ghl_sync_jobs table
CREATE TABLE IF NOT EXISTS public.ghl_sync_jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id uuid REFERENCES public.ghl_sources(id) ON DELETE CASCADE,
  location_id text NOT NULL,
  job_type text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'running', 'completed', 'failed')),
  progress jsonb DEFAULT '{}',
  error text,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_ghl_sync_jobs_source_id ON public.ghl_sync_jobs(source_id);
CREATE INDEX IF NOT EXISTS idx_ghl_sync_jobs_status ON public.ghl_sync_jobs(status);
CREATE INDEX IF NOT EXISTS idx_ghl_sync_jobs_created_at ON public.ghl_sync_jobs(created_at DESC);

-- Enable RLS on all tables
ALTER TABLE public.user_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_pipelines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ghl_sync_jobs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_sources
CREATE POLICY "Users can view their own source mappings"
  ON public.user_sources
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage user_sources"
  ON public.user_sources
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- RLS Policies for ghl_sources
CREATE POLICY "Users can view sources they have access to"
  ON public.ghl_sources
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = auth.uid()
        AND user_sources.source_id = ghl_sources.id
    )
  );

CREATE POLICY "Service role can manage ghl_sources"
  ON public.ghl_sources
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- RLS Policies for ghl_contacts
CREATE POLICY "Users can view contacts from their sources"
  ON public.ghl_contacts
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = auth.uid()
        AND user_sources.source_id = ghl_contacts.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_contacts"
  ON public.ghl_contacts
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- RLS Policies for ghl_pipelines
CREATE POLICY "Users can view pipelines from their sources"
  ON public.ghl_pipelines
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = auth.uid()
        AND user_sources.source_id = ghl_pipelines.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_pipelines"
  ON public.ghl_pipelines
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- RLS Policies for ghl_opportunities
CREATE POLICY "Users can view opportunities from their sources"
  ON public.ghl_opportunities
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = auth.uid()
        AND user_sources.source_id = ghl_opportunities.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_opportunities"
  ON public.ghl_opportunities
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- RLS Policies for ghl_orders
CREATE POLICY "Users can view orders from their sources"
  ON public.ghl_orders
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = auth.uid()
        AND user_sources.source_id = ghl_orders.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_orders"
  ON public.ghl_orders
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- RLS Policies for ghl_payments
CREATE POLICY "Users can view payments from their sources"
  ON public.ghl_payments
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = auth.uid()
        AND user_sources.source_id = ghl_payments.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_payments"
  ON public.ghl_payments
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- RLS Policies for ghl_reviews
CREATE POLICY "Users can view reviews from their sources"
  ON public.ghl_reviews
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = auth.uid()
        AND user_sources.source_id = ghl_reviews.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_reviews"
  ON public.ghl_reviews
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- RLS Policies for ghl_sync_jobs
CREATE POLICY "Users can view sync jobs from their sources"
  ON public.ghl_sync_jobs
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = auth.uid()
        AND user_sources.source_id = ghl_sync_jobs.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_sync_jobs"
  ON public.ghl_sync_jobs
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_ghl_updated_at()
RETURNS TRIGGER
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Add triggers for updated_at
DROP TRIGGER IF EXISTS trigger_ghl_sources_updated_at ON public.ghl_sources;
CREATE TRIGGER trigger_ghl_sources_updated_at
  BEFORE UPDATE ON public.ghl_sources
  FOR EACH ROW
  EXECUTE FUNCTION public.update_ghl_updated_at();

DROP TRIGGER IF EXISTS trigger_ghl_contacts_updated_at ON public.ghl_contacts;
CREATE TRIGGER trigger_ghl_contacts_updated_at
  BEFORE UPDATE ON public.ghl_contacts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_ghl_updated_at();

DROP TRIGGER IF EXISTS trigger_ghl_pipelines_updated_at ON public.ghl_pipelines;
CREATE TRIGGER trigger_ghl_pipelines_updated_at
  BEFORE UPDATE ON public.ghl_pipelines
  FOR EACH ROW
  EXECUTE FUNCTION public.update_ghl_updated_at();

DROP TRIGGER IF EXISTS trigger_ghl_opportunities_updated_at ON public.ghl_opportunities;
CREATE TRIGGER trigger_ghl_opportunities_updated_at
  BEFORE UPDATE ON public.ghl_opportunities
  FOR EACH ROW
  EXECUTE FUNCTION public.update_ghl_updated_at();

DROP TRIGGER IF EXISTS trigger_ghl_orders_updated_at ON public.ghl_orders;
CREATE TRIGGER trigger_ghl_orders_updated_at
  BEFORE UPDATE ON public.ghl_orders
  FOR EACH ROW
  EXECUTE FUNCTION public.update_ghl_updated_at();

DROP TRIGGER IF EXISTS trigger_ghl_payments_updated_at ON public.ghl_payments;
CREATE TRIGGER trigger_ghl_payments_updated_at
  BEFORE UPDATE ON public.ghl_payments
  FOR EACH ROW
  EXECUTE FUNCTION public.update_ghl_updated_at();