/*
  # Create gallery_photos table for Zapier webhook integration

  1. New Tables
    - `gallery_photos`
      - `id` (uuid, primary key) - Unique identifier for each photo
      - `image_url` (text) - URL to the uploaded image in storage
      - `title` (text) - Title/caption for the photo
      - `description` (text, optional) - Longer description text
      - `alt_text` (text) - SEO-friendly alt text for the image
      - `display_order` (integer) - Order for display (newest = highest number)
      - `is_visible` (boolean) - Whether photo is visible on gallery
      - `created_at` (timestamptz) - When the photo was uploaded
      - `updated_at` (timestamptz) - When the photo was last modified

  2. Security
    - Enable RLS on `gallery_photos` table
    - Add policy for public read access (gallery is public)
    - Add policy for service role to insert/update (webhook endpoint)

  3. Indexes
    - Index on `display_order` for efficient sorting
    - Index on `is_visible` for filtering
    - Index on `created_at` for date-based queries
*/

-- Create gallery_photos table
CREATE TABLE IF NOT EXISTS gallery_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url text NOT NULL,
  title text NOT NULL,
  description text DEFAULT '',
  alt_text text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  is_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE gallery_photos ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access to visible photos
CREATE POLICY "Public can view visible gallery photos"
  ON gallery_photos
  FOR SELECT
  TO anon, authenticated
  USING (is_visible = true);

-- Policy: Allow service role full access (for webhook)
CREATE POLICY "Service role has full access to gallery photos"
  ON gallery_photos
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_gallery_photos_display_order ON gallery_photos(display_order DESC);
CREATE INDEX IF NOT EXISTS idx_gallery_photos_is_visible ON gallery_photos(is_visible);
CREATE INDEX IF NOT EXISTS idx_gallery_photos_created_at ON gallery_photos(created_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_gallery_photos_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_gallery_photos_updated_at_trigger ON gallery_photos;
CREATE TRIGGER update_gallery_photos_updated_at_trigger
  BEFORE UPDATE ON gallery_photos
  FOR EACH ROW
  EXECUTE FUNCTION update_gallery_photos_updated_at();