/*
  # Remove GoHighLevel CRM Tables

  This migration removes all unused GoHighLevel CRM integration tables.
  All tables are empty (0 rows), so no data will be lost.

  ## Tables Being Removed
  1. `user_sources` - User source tracking
  2. `ghl_sources` - GoHighLevel source data
  3. `ghl_contacts` - GoHighLevel contacts
  4. `ghl_pipelines` - GoHighLevel sales pipelines
  5. `ghl_opportunities` - GoHighLevel opportunities
  6. `ghl_orders` - GoHighLevel orders
  7. `ghl_payments` - GoHighLevel payments
  8. `ghl_reviews` - GoHighLevel reviews
  9. `ghl_sync_jobs` - GoHighLevel sync jobs

  ## Reason
  GoHighLevel CRM integration is not being used. Removing these tables
  simplifies the database schema and reduces maintenance overhead.
*/

-- Drop GoHighLevel tables in reverse dependency order
DROP TABLE IF EXISTS ghl_sync_jobs CASCADE;
DROP TABLE IF EXISTS ghl_reviews CASCADE;
DROP TABLE IF EXISTS ghl_payments CASCADE;
DROP TABLE IF EXISTS ghl_orders CASCADE;
DROP TABLE IF EXISTS ghl_opportunities CASCADE;
DROP TABLE IF EXISTS ghl_pipelines CASCADE;
DROP TABLE IF EXISTS ghl_contacts CASCADE;
DROP TABLE IF EXISTS ghl_sources CASCADE;
DROP TABLE IF EXISTS user_sources CASCADE;