/*
  # Drop Unused Database Indexes

  This migration removes unused indexes to improve database performance and reduce maintenance overhead.

  ## Indexes Being Removed
  
  1. Blog Posts Table
     - `idx_blog_posts_updated_at` - Not being queried by updated_at
  
  2. Gallery Photos Table
     - `idx_gallery_photos_display_order` - Not being queried by display_order
     - `idx_gallery_photos_created_at` - Not being queried by created_at
  
  3. Keyword Mappings Table
     - `idx_keyword_mappings_keyword` - Not being queried by keyword
     - `idx_keyword_mappings_active` - Not being queried by active status
     - `idx_keyword_mappings_priority` - Not being queried by priority

  ## Impact
  
  - Reduces storage overhead
  - Improves write performance (fewer indexes to update)
  - Simplifies database maintenance
*/

-- Drop unused blog_posts indexes
DROP INDEX IF EXISTS idx_blog_posts_updated_at;

-- Drop unused gallery_photos indexes
DROP INDEX IF EXISTS idx_gallery_photos_display_order;
DROP INDEX IF EXISTS idx_gallery_photos_created_at;

-- Drop unused keyword_mappings indexes
DROP INDEX IF EXISTS idx_keyword_mappings_keyword;
DROP INDEX IF EXISTS idx_keyword_mappings_active;
DROP INDEX IF EXISTS idx_keyword_mappings_priority;