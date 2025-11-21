/*
  # Add Image Metadata Fields

  ## Overview
  Adds fields to store auto-generated image metadata for better SEO and accessibility.

  ## Changes
  1. New Columns
    - `featured_image_alt` (text) - Alt text for featured image
    - `featured_image_title` (text) - Title attribute for featured image
    - `featured_image_caption` (text) - Optional caption for featured image

  ## Notes
  - These fields will be auto-generated when a featured_image URL is provided
  - Improves SEO and accessibility compliance
  - No breaking changes to existing data
*/

-- Add image metadata columns
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'featured_image_alt'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN featured_image_alt text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'featured_image_title'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN featured_image_title text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'featured_image_caption'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN featured_image_caption text;
  END IF;
END $$;