/*
  # Create keyword_mappings table for automatic internal linking

  1. New Tables
    - `keyword_mappings`
      - `id` (uuid, primary key) - Unique identifier
      - `keyword` (text) - The keyword to detect in blog content
      - `target_url` (text) - Internal URL to link to (e.g., /services/interior-painting)
      - `anchor_text` (text) - Optional custom anchor text
      - `priority` (integer) - Priority for link selection (higher = preferred)
      - `category` (text) - Category for organization (service, location, guide)
      - `active` (boolean) - Whether this mapping is currently active
      - `created_at` (timestamptz) - Timestamp of creation
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `keyword_mappings` table
    - Add policy for public read access (needed for blog post rendering)
    - Add policy for authenticated admin write access

  3. Indexes
    - Index on keyword for fast lookups during content processing
    - Index on active status for filtering
    - Index on priority for sorting

  4. Notes
    - This table powers automatic internal linking in blog posts
    - Keywords are matched case-insensitively in blog content
    - Higher priority keywords are linked first to avoid over-optimization
    - Inactive mappings are ignored during content processing
*/

CREATE TABLE IF NOT EXISTS keyword_mappings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  keyword text NOT NULL,
  target_url text NOT NULL,
  anchor_text text,
  priority integer DEFAULT 100,
  category text DEFAULT 'service',
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_keyword_mappings_keyword ON keyword_mappings(keyword);
CREATE INDEX IF NOT EXISTS idx_keyword_mappings_active ON keyword_mappings(active);
CREATE INDEX IF NOT EXISTS idx_keyword_mappings_priority ON keyword_mappings(priority DESC);

-- Enable RLS
ALTER TABLE keyword_mappings ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read active keyword mappings (needed for client-side rendering)
CREATE POLICY "Public read access to active keyword mappings"
  ON keyword_mappings
  FOR SELECT
  USING (active = true);

-- Policy: Only service role can insert mappings
CREATE POLICY "Service role can insert keyword mappings"
  ON keyword_mappings
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Policy: Only service role can update mappings
CREATE POLICY "Service role can update keyword mappings"
  ON keyword_mappings
  FOR UPDATE
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Policy: Only service role can delete mappings
CREATE POLICY "Service role can delete keyword mappings"
  ON keyword_mappings
  FOR DELETE
  TO service_role
  USING (true);

-- Add updated_at trigger function if not exists
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_keyword_mappings_updated_at ON keyword_mappings;
CREATE TRIGGER update_keyword_mappings_updated_at
  BEFORE UPDATE ON keyword_mappings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
