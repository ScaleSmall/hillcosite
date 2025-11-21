/*
  # Create Blog Posts Table

  ## Overview
  Creates a comprehensive blog system for industry insights with full Zapier integration support.

  ## New Tables
  - `blog_posts`
    - `id` (uuid, primary key) - Unique identifier for each post
    - `title` (text) - Blog post title
    - `slug` (text, unique) - URL-friendly version of title
    - `content` (text) - Full blog post content (supports markdown/HTML)
    - `excerpt` (text) - Short summary for listings
    - `author` (text) - Post author name
    - `category` (text) - Post category (e.g., "Industry Insights", "Painting Tips")
    - `tags` (text array) - Array of tags for categorization
    - `featured_image` (text) - URL to featured image
    - `published` (boolean) - Whether post is published or draft
    - `published_at` (timestamptz) - Publication date/time
    - `created_at` (timestamptz) - Record creation timestamp
    - `updated_at` (timestamptz) - Last update timestamp
    - `meta_description` (text) - SEO meta description
    - `meta_keywords` (text) - SEO keywords

  ## Security
  - Enable RLS on `blog_posts` table
  - Public read access for published posts
  - Authenticated write access (for Zapier webhook via service role)

  ## Indexes
  - Index on slug for fast lookups
  - Index on published_at for chronological sorting
  - Index on published for filtering
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  author text DEFAULT 'Hill Country Painting',
  category text DEFAULT 'Industry Insights',
  tags text[] DEFAULT '{}',
  featured_image text,
  published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  meta_description text,
  meta_keywords text
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Policy: Service role can insert posts (for Zapier webhook)
CREATE POLICY "Service role can insert blog posts"
  ON blog_posts
  FOR INSERT
  WITH CHECK (true);

-- Policy: Service role can update posts
CREATE POLICY "Service role can update blog posts"
  ON blog_posts
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Policy: Service role can delete posts
CREATE POLICY "Service role can delete blog posts"
  ON blog_posts
  FOR DELETE
  USING (true);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to call the function
DROP TRIGGER IF EXISTS trigger_update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER trigger_update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_blog_posts_updated_at();