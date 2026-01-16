/*
  # Comprehensive Security Fixes Migration

  ## Summary
  This migration addresses multiple security and performance issues identified in the database:

  1. **RLS Policy Performance Optimization**
     - Replaces `auth.uid()` with `(select auth.uid())` in RLS policies
     - This prevents re-execution of auth functions on every row check
     - Affects: user_sources, ghl_contacts, ghl_opportunities, ghl_orders, ghl_payments, ghl_pipelines, ghl_reviews, ghl_sources, ghl_sync_jobs

  2. **Service Role Policy Fixes**
     - Policies named "Service role can..." should only apply to service_role
     - Changes from `USING (true)` to proper role checks using `current_setting('role') = 'service_role'`
     - Affects: automation_config, automation_logs, blog_posts, gallery_photos, ghl_*, inflation_rates, keyword_mappings, pricing_data, user_sources

  3. **Redundant Index Removal**
     - Drops indexes that duplicate unique constraints
     - idx_ghl_sources_location_id (covered by ghl_sources_location_id_key)
     - idx_blog_posts_slug (covered by blog_posts_slug_key)
     - idx_user_sources_user_id (covered by idx_user_sources_lookup)

  4. **View Security Mode**
     - Converts views to SECURITY INVOKER to ensure RLS policies are respected
     - Affects all v_ghl_* views

  ## Security Changes
  - All service role policies now properly verify service_role
  - Views respect RLS through SECURITY INVOKER mode
  - Auth function calls are optimized for performance
*/

-- =====================================================
-- PART 1: Drop redundant indexes
-- =====================================================

DROP INDEX IF EXISTS public.idx_ghl_sources_location_id;
DROP INDEX IF EXISTS public.idx_blog_posts_slug;
DROP INDEX IF EXISTS public.idx_user_sources_user_id;

-- =====================================================
-- PART 2: Fix user_sources RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Users can view their own source mappings" ON public.user_sources;
DROP POLICY IF EXISTS "Service role can manage user_sources" ON public.user_sources;

CREATE POLICY "Users can view their own source mappings"
  ON public.user_sources
  FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = user_id);

CREATE POLICY "Service role can manage user_sources"
  ON public.user_sources
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 3: Fix ghl_sources RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Users can view sources they have access to" ON public.ghl_sources;
DROP POLICY IF EXISTS "Service role can manage ghl_sources" ON public.ghl_sources;

CREATE POLICY "Users can view sources they have access to"
  ON public.ghl_sources
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = (select auth.uid())
      AND user_sources.source_id = ghl_sources.id
    )
  );

CREATE POLICY "Service role can manage ghl_sources"
  ON public.ghl_sources
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 4: Fix ghl_contacts RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Users can view contacts from their sources" ON public.ghl_contacts;
DROP POLICY IF EXISTS "Service role can manage ghl_contacts" ON public.ghl_contacts;

CREATE POLICY "Users can view contacts from their sources"
  ON public.ghl_contacts
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = (select auth.uid())
      AND user_sources.source_id = ghl_contacts.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_contacts"
  ON public.ghl_contacts
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 5: Fix ghl_pipelines RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Users can view pipelines from their sources" ON public.ghl_pipelines;
DROP POLICY IF EXISTS "Service role can manage ghl_pipelines" ON public.ghl_pipelines;

CREATE POLICY "Users can view pipelines from their sources"
  ON public.ghl_pipelines
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = (select auth.uid())
      AND user_sources.source_id = ghl_pipelines.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_pipelines"
  ON public.ghl_pipelines
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 6: Fix ghl_opportunities RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Users can view opportunities from their sources" ON public.ghl_opportunities;
DROP POLICY IF EXISTS "Service role can manage ghl_opportunities" ON public.ghl_opportunities;

CREATE POLICY "Users can view opportunities from their sources"
  ON public.ghl_opportunities
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = (select auth.uid())
      AND user_sources.source_id = ghl_opportunities.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_opportunities"
  ON public.ghl_opportunities
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 7: Fix ghl_orders RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Users can view orders from their sources" ON public.ghl_orders;
DROP POLICY IF EXISTS "Service role can manage ghl_orders" ON public.ghl_orders;

CREATE POLICY "Users can view orders from their sources"
  ON public.ghl_orders
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = (select auth.uid())
      AND user_sources.source_id = ghl_orders.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_orders"
  ON public.ghl_orders
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 8: Fix ghl_payments RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Users can view payments from their sources" ON public.ghl_payments;
DROP POLICY IF EXISTS "Service role can manage ghl_payments" ON public.ghl_payments;

CREATE POLICY "Users can view payments from their sources"
  ON public.ghl_payments
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = (select auth.uid())
      AND user_sources.source_id = ghl_payments.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_payments"
  ON public.ghl_payments
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 9: Fix ghl_reviews RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Users can view reviews from their sources" ON public.ghl_reviews;
DROP POLICY IF EXISTS "Service role can manage ghl_reviews" ON public.ghl_reviews;

CREATE POLICY "Users can view reviews from their sources"
  ON public.ghl_reviews
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = (select auth.uid())
      AND user_sources.source_id = ghl_reviews.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_reviews"
  ON public.ghl_reviews
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 10: Fix ghl_sync_jobs RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Users can view sync jobs from their sources" ON public.ghl_sync_jobs;
DROP POLICY IF EXISTS "Service role can manage ghl_sync_jobs" ON public.ghl_sync_jobs;

CREATE POLICY "Users can view sync jobs from their sources"
  ON public.ghl_sync_jobs
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.user_sources
      WHERE user_sources.user_id = (select auth.uid())
      AND user_sources.source_id = ghl_sync_jobs.source_id
    )
  );

CREATE POLICY "Service role can manage ghl_sync_jobs"
  ON public.ghl_sync_jobs
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 11: Fix automation_config RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Service role can manage config" ON public.automation_config;

CREATE POLICY "Service role can manage config"
  ON public.automation_config
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 12: Fix automation_logs RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Service role can manage logs" ON public.automation_logs;

CREATE POLICY "Service role can manage logs"
  ON public.automation_logs
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 13: Fix blog_posts RLS policies (service role only)
-- =====================================================

DROP POLICY IF EXISTS "Service role can delete blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Service role can insert blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Service role can update blog posts" ON public.blog_posts;

CREATE POLICY "Service role can insert blog posts"
  ON public.blog_posts
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update blog posts"
  ON public.blog_posts
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can delete blog posts"
  ON public.blog_posts
  FOR DELETE
  TO service_role
  USING (true);

-- =====================================================
-- PART 14: Fix gallery_photos RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Service role has full access to gallery photos" ON public.gallery_photos;

CREATE POLICY "Service role has full access to gallery photos"
  ON public.gallery_photos
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 15: Fix inflation_rates RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Service role can manage inflation rates" ON public.inflation_rates;

CREATE POLICY "Service role can manage inflation rates"
  ON public.inflation_rates
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 16: Fix keyword_mappings RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Service role can delete keyword mappings" ON public.keyword_mappings;
DROP POLICY IF EXISTS "Service role can insert keyword mappings" ON public.keyword_mappings;
DROP POLICY IF EXISTS "Service role can update keyword mappings" ON public.keyword_mappings;

CREATE POLICY "Service role can insert keyword mappings"
  ON public.keyword_mappings
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update keyword mappings"
  ON public.keyword_mappings
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can delete keyword mappings"
  ON public.keyword_mappings
  FOR DELETE
  TO service_role
  USING (true);

-- =====================================================
-- PART 17: Fix pricing_data RLS policies
-- =====================================================

DROP POLICY IF EXISTS "Service role can manage pricing data" ON public.pricing_data;

CREATE POLICY "Service role can manage pricing data"
  ON public.pricing_data
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- PART 18: Convert views to SECURITY INVOKER
-- =====================================================

DROP VIEW IF EXISTS public.v_ghl_contacts_recent;
CREATE VIEW public.v_ghl_contacts_recent
WITH (security_invoker = true)
AS
SELECT 
  c.id,
  c.source_id,
  c.ghl_contact_id,
  c.email,
  c.phone,
  c.first_name,
  c.last_name,
  c.tags,
  c.custom_fields,
  c.created_at,
  c.updated_at,
  s.name AS source_name,
  s.location_id
FROM public.ghl_contacts c
JOIN public.ghl_sources s ON s.id = c.source_id
WHERE c.deleted_at IS NULL
ORDER BY c.updated_at DESC;

DROP VIEW IF EXISTS public.v_ghl_opportunities_report;
CREATE VIEW public.v_ghl_opportunities_report
WITH (security_invoker = true)
AS
SELECT 
  o.id,
  o.source_id,
  o.ghl_opportunity_id,
  o.name AS opportunity_name,
  o.amount,
  o.status,
  o.stage_id,
  o.created_at,
  o.updated_at,
  o.deleted_at,
  s.name AS source_name,
  s.location_id,
  p.name AS pipeline_name,
  p.ghl_pipeline_id,
  c.first_name AS contact_first_name,
  c.last_name AS contact_last_name,
  c.email AS contact_email,
  c.phone AS contact_phone,
  COALESCE(c.first_name || ' ' || c.last_name, c.email, 'Unknown') AS contact_display_name
FROM public.ghl_opportunities o
JOIN public.ghl_sources s ON s.id = o.source_id
LEFT JOIN public.ghl_pipelines p ON p.id = o.pipeline_id
LEFT JOIN public.ghl_contacts c ON c.id = o.contact_id
WHERE o.deleted_at IS NULL
ORDER BY o.updated_at DESC;

DROP VIEW IF EXISTS public.v_ghl_pipeline_stage_summary;
CREATE VIEW public.v_ghl_pipeline_stage_summary
WITH (security_invoker = true)
AS
SELECT 
  o.source_id,
  s.name AS source_name,
  o.pipeline_id,
  p.name AS pipeline_name,
  o.stage_id,
  count(*) AS opportunity_count,
  sum(o.amount) AS total_amount,
  avg(o.amount) AS average_amount,
  min(o.created_at) AS earliest_opportunity,
  max(o.updated_at) AS latest_update
FROM public.ghl_opportunities o
JOIN public.ghl_sources s ON s.id = o.source_id
LEFT JOIN public.ghl_pipelines p ON p.id = o.pipeline_id
WHERE o.deleted_at IS NULL
GROUP BY o.source_id, s.name, o.pipeline_id, p.name, o.stage_id;

DROP VIEW IF EXISTS public.v_ghl_revenue_summary;
CREATE VIEW public.v_ghl_revenue_summary
WITH (security_invoker = true)
AS
SELECT 
  ord.source_id,
  s.name AS source_name,
  count(DISTINCT ord.id) AS total_orders,
  sum(ord.amount) AS total_order_amount,
  count(DISTINCT pay.id) AS total_payments,
  sum(pay.amount) AS total_payment_amount,
  count(DISTINCT ord.contact_id) AS unique_customers,
  min(ord.created_at) AS first_order_date,
  max(ord.updated_at) AS latest_order_date
FROM public.ghl_orders ord
JOIN public.ghl_sources s ON s.id = ord.source_id
LEFT JOIN public.ghl_payments pay ON pay.order_id = ord.id
GROUP BY ord.source_id, s.name;

DROP VIEW IF EXISTS public.v_ghl_reviews_summary;
CREATE VIEW public.v_ghl_reviews_summary
WITH (security_invoker = true)
AS
SELECT 
  r.source_id,
  s.name AS source_name,
  count(*) AS total_reviews,
  avg(r.rating) AS average_rating,
  count(CASE WHEN r.rating = 5 THEN 1 END) AS five_star_count,
  count(CASE WHEN r.rating = 4 THEN 1 END) AS four_star_count,
  count(CASE WHEN r.rating = 3 THEN 1 END) AS three_star_count,
  count(CASE WHEN r.rating = 2 THEN 1 END) AS two_star_count,
  count(CASE WHEN r.rating = 1 THEN 1 END) AS one_star_count,
  min(r.created_at) AS first_review_date,
  max(r.created_at) AS latest_review_date
FROM public.ghl_reviews r
JOIN public.ghl_sources s ON s.id = r.source_id
GROUP BY r.source_id, s.name;

DROP VIEW IF EXISTS public.v_ghl_reviews_recent;
CREATE VIEW public.v_ghl_reviews_recent
WITH (security_invoker = true)
AS
SELECT 
  r.id,
  r.source_id,
  s.name AS source_name,
  r.ghl_review_id,
  r.rating,
  r.review_text,
  r.reviewer_name,
  r.created_at,
  c.first_name AS contact_first_name,
  c.last_name AS contact_last_name,
  c.email AS contact_email,
  COALESCE(r.reviewer_name, c.first_name || ' ' || c.last_name, 'Anonymous') AS display_name
FROM public.ghl_reviews r
JOIN public.ghl_sources s ON s.id = r.source_id
LEFT JOIN public.ghl_contacts c ON c.id = r.contact_id
ORDER BY r.created_at DESC;

DROP VIEW IF EXISTS public.v_ghl_sync_status;
CREATE VIEW public.v_ghl_sync_status
WITH (security_invoker = true)
AS
SELECT DISTINCT ON (j.source_id, j.job_type)
  j.id,
  j.source_id,
  s.name AS source_name,
  j.location_id,
  j.job_type,
  j.status,
  j.progress,
  j.error,
  j.started_at,
  j.completed_at,
  j.created_at,
  EXTRACT(epoch FROM (COALESCE(j.completed_at, now()) - j.started_at)) AS duration_seconds
FROM public.ghl_sync_jobs j
JOIN public.ghl_sources s ON s.id = j.source_id
ORDER BY j.source_id, j.job_type, j.created_at DESC;

DROP VIEW IF EXISTS public.v_ghl_dashboard_summary;
CREATE VIEW public.v_ghl_dashboard_summary
WITH (security_invoker = true)
AS
SELECT 
  s.id AS source_id,
  s.name AS source_name,
  s.location_id,
  (SELECT count(*) FROM public.ghl_contacts WHERE ghl_contacts.source_id = s.id AND ghl_contacts.deleted_at IS NULL) AS total_contacts,
  (SELECT count(*) FROM public.ghl_opportunities WHERE ghl_opportunities.source_id = s.id AND ghl_opportunities.deleted_at IS NULL) AS total_opportunities,
  (SELECT sum(ghl_opportunities.amount) FROM public.ghl_opportunities WHERE ghl_opportunities.source_id = s.id AND ghl_opportunities.deleted_at IS NULL) AS total_opportunity_amount,
  (SELECT count(*) FROM public.ghl_orders WHERE ghl_orders.source_id = s.id) AS total_orders,
  (SELECT sum(ghl_orders.amount) FROM public.ghl_orders WHERE ghl_orders.source_id = s.id) AS total_order_amount,
  (SELECT count(*) FROM public.ghl_payments WHERE ghl_payments.source_id = s.id) AS total_payments,
  (SELECT sum(ghl_payments.amount) FROM public.ghl_payments WHERE ghl_payments.source_id = s.id) AS total_payment_amount,
  (SELECT count(*) FROM public.ghl_reviews WHERE ghl_reviews.source_id = s.id) AS total_reviews,
  (SELECT avg(ghl_reviews.rating) FROM public.ghl_reviews WHERE ghl_reviews.source_id = s.id) AS average_rating,
  s.updated_at AS last_source_update
FROM public.ghl_sources s;
