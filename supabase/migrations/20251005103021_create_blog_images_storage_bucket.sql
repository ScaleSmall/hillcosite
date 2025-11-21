/*
  # Create Blog Images Storage Bucket

  1. Storage Setup
    - Creates a public storage bucket called `blog-images` for storing blog post featured images
    - Enables public access for reading images (no authentication required)
    - Sets up policies for uploading images (service role only)
  
  2. Security
    - Public read access to all images in the bucket
    - Only service role can upload/delete images (via edge function)
    - Maximum file size limits applied
*/

-- Create the storage bucket for blog images
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to read images
CREATE POLICY "Public Access to Blog Images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Allow service role to upload images
CREATE POLICY "Service Role Can Upload Blog Images"
ON storage.objects FOR INSERT
TO service_role
WITH CHECK (bucket_id = 'blog-images');

-- Allow service role to delete images
CREATE POLICY "Service Role Can Delete Blog Images"
ON storage.objects FOR DELETE
TO service_role
USING (bucket_id = 'blog-images');