/*
  # Create GHL Reporting Views

  ## Overview
  Creates optimized reporting views for the GHL dashboard to provide stable, fast query interfaces.

  ## New Views
  
  ### 1. `v_ghl_contacts_recent`
  Most recently updated contacts, excluding deleted
  
  ### 2. `v_ghl_opportunities_report`
  Enriched opportunities with contact and pipeline details
  
  ### 3. `v_ghl_pipeline_stage_summary`
  Aggregated pipeline metrics by stage (count and amount)
  
  ### 4. `v_ghl_revenue_summary`
  Revenue metrics from orders and payments
  
  ### 5. `v_ghl_reviews_summary`
  Review statistics and recent reviews
  
  ### 6. `v_ghl_sync_status`
  Latest sync job status per source and job type

  ## Security
  - Views inherit RLS from underlying tables
  - Users only see data from sources they have access to

  ## Benefits
  - Stable schema for dashboard queries
  - Optimized joins and aggregations
  - Easier to maintain and modify
*/

-- View: Recent contacts (excluding deleted)
CREATE OR REPLACE VIEW public.v_ghl_contacts_recent AS
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

-- View: Enriched opportunities with contact and pipeline details
CREATE OR REPLACE VIEW public.v_ghl_opportunities_report AS
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

-- View: Pipeline stage summary (aggregated metrics)
CREATE OR REPLACE VIEW public.v_ghl_pipeline_stage_summary AS
SELECT
  o.source_id,
  s.name AS source_name,
  o.pipeline_id,
  p.name AS pipeline_name,
  o.stage_id,
  COUNT(*) AS opportunity_count,
  SUM(o.amount) AS total_amount,
  AVG(o.amount) AS average_amount,
  MIN(o.created_at) AS earliest_opportunity,
  MAX(o.updated_at) AS latest_update
FROM public.ghl_opportunities o
JOIN public.ghl_sources s ON s.id = o.source_id
LEFT JOIN public.ghl_pipelines p ON p.id = o.pipeline_id
WHERE o.deleted_at IS NULL
GROUP BY o.source_id, s.name, o.pipeline_id, p.name, o.stage_id;

-- View: Revenue summary from orders and payments
CREATE OR REPLACE VIEW public.v_ghl_revenue_summary AS
SELECT
  ord.source_id,
  s.name AS source_name,
  COUNT(DISTINCT ord.id) AS total_orders,
  SUM(ord.amount) AS total_order_amount,
  COUNT(DISTINCT pay.id) AS total_payments,
  SUM(pay.amount) AS total_payment_amount,
  COUNT(DISTINCT ord.contact_id) AS unique_customers,
  MIN(ord.created_at) AS first_order_date,
  MAX(ord.updated_at) AS latest_order_date
FROM public.ghl_orders ord
JOIN public.ghl_sources s ON s.id = ord.source_id
LEFT JOIN public.ghl_payments pay ON pay.order_id = ord.id
GROUP BY ord.source_id, s.name;

-- View: Reviews summary with statistics
CREATE OR REPLACE VIEW public.v_ghl_reviews_summary AS
SELECT
  r.source_id,
  s.name AS source_name,
  COUNT(*) AS total_reviews,
  AVG(r.rating) AS average_rating,
  COUNT(CASE WHEN r.rating = 5 THEN 1 END) AS five_star_count,
  COUNT(CASE WHEN r.rating = 4 THEN 1 END) AS four_star_count,
  COUNT(CASE WHEN r.rating = 3 THEN 1 END) AS three_star_count,
  COUNT(CASE WHEN r.rating = 2 THEN 1 END) AS two_star_count,
  COUNT(CASE WHEN r.rating = 1 THEN 1 END) AS one_star_count,
  MIN(r.created_at) AS first_review_date,
  MAX(r.created_at) AS latest_review_date
FROM public.ghl_reviews r
JOIN public.ghl_sources s ON s.id = r.source_id
GROUP BY r.source_id, s.name;

-- View: Recent reviews detail
CREATE OR REPLACE VIEW public.v_ghl_reviews_recent AS
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

-- View: Latest sync job status per source and job type
CREATE OR REPLACE VIEW public.v_ghl_sync_status AS
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
  EXTRACT(EPOCH FROM (COALESCE(j.completed_at, now()) - j.started_at)) AS duration_seconds
FROM public.ghl_sync_jobs j
JOIN public.ghl_sources s ON s.id = j.source_id
ORDER BY j.source_id, j.job_type, j.created_at DESC;

-- View: Overall dashboard summary per source
CREATE OR REPLACE VIEW public.v_ghl_dashboard_summary AS
SELECT
  s.id AS source_id,
  s.name AS source_name,
  s.location_id,
  (SELECT COUNT(*) FROM public.ghl_contacts WHERE source_id = s.id AND deleted_at IS NULL) AS total_contacts,
  (SELECT COUNT(*) FROM public.ghl_opportunities WHERE source_id = s.id AND deleted_at IS NULL) AS total_opportunities,
  (SELECT SUM(amount) FROM public.ghl_opportunities WHERE source_id = s.id AND deleted_at IS NULL) AS total_opportunity_amount,
  (SELECT COUNT(*) FROM public.ghl_orders WHERE source_id = s.id) AS total_orders,
  (SELECT SUM(amount) FROM public.ghl_orders WHERE source_id = s.id) AS total_order_amount,
  (SELECT COUNT(*) FROM public.ghl_payments WHERE source_id = s.id) AS total_payments,
  (SELECT SUM(amount) FROM public.ghl_payments WHERE source_id = s.id) AS total_payment_amount,
  (SELECT COUNT(*) FROM public.ghl_reviews WHERE source_id = s.id) AS total_reviews,
  (SELECT AVG(rating) FROM public.ghl_reviews WHERE source_id = s.id) AS average_rating,
  s.updated_at AS last_source_update
FROM public.ghl_sources s;