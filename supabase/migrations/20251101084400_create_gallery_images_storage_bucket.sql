/*
  # Create storage bucket for gallery images

  1. Storage Bucket
    - Create `gallery-images` bucket for storing uploaded gallery photos
    - Set as public bucket for easy access
    - Configure MIME type restrictions for images only

  2. Security Policies
    - Allow public read access to all files
    - Allow service role to upload/update files (for webhook)
    - Restrict file types to common image formats
*/

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'gallery-images',
  'gallery-images',
  true,
  10485760, -- 10MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 10485760,
  allowed_mime_types = ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

-- Policy: Allow public read access to gallery images
DROP POLICY IF EXISTS "Public can view gallery images" ON storage.objects;
CREATE POLICY "Public can view gallery images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'gallery-images');

-- Policy: Allow service role to upload gallery images
DROP POLICY IF EXISTS "Service role can upload gallery images" ON storage.objects;
CREATE POLICY "Service role can upload gallery images"
  ON storage.objects
  FOR INSERT
  TO service_role
  WITH CHECK (bucket_id = 'gallery-images');

-- Policy: Allow service role to update gallery images
DROP POLICY IF EXISTS "Service role can update gallery images" ON storage.objects;
CREATE POLICY "Service role can update gallery images"
  ON storage.objects
  FOR UPDATE
  TO service_role
  USING (bucket_id = 'gallery-images');

-- Policy: Allow service role to delete gallery images
DROP POLICY IF EXISTS "Service role can delete gallery images" ON storage.objects;
CREATE POLICY "Service role can delete gallery images"
  ON storage.objects
  FOR DELETE
  TO service_role
  USING (bucket_id = 'gallery-images');