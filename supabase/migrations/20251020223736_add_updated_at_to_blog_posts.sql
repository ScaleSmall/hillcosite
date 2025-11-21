/*
  # Add updated_at tracking to blog_posts table

  1. Changes
    - Add `updated_at` column to blog_posts if not exists
    - Set default to current timestamp
    - Add trigger to automatically update on modifications
    
  2. Purpose
    - Track when blog posts are modified for sitemap lastmod dates
    - Enable cache invalidation based on content changes
    - Support content freshness signals for SEO
    
  3. Notes
    - Uses same trigger function as keyword_mappings
    - Automatically updates on any UPDATE operation
    - Existing posts get current timestamp as initial value
*/

-- Add updated_at column if not exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'updated_at'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN updated_at timestamptz DEFAULT now();
  END IF;
END $$;

-- Backfill existing posts with published_at as updated_at
UPDATE blog_posts
SET updated_at = published_at
WHERE updated_at IS NULL;

-- Add trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add index for sitemap queries (ordered by updated_at)
CREATE INDEX IF NOT EXISTS idx_blog_posts_updated_at ON blog_posts(updated_at DESC);
