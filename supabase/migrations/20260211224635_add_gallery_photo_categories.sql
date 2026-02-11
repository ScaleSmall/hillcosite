/*
  # Add Gallery Photo Categories and Features

  1. Changes
    - Add `is_before_after` column (boolean) to identify split before/after images
    - Add `category` column (text) to categorize images (kitchen, exterior, interior, cabinet, commercial, etc.)
    - Add `featured` column (boolean) to mark standout photos for hero section
    - Add indexes for efficient querying by category and featured status
  
  2. Notes
    - All columns default to safe values (false for booleans, null for category)
    - Existing photos will need manual categorization via admin interface or bulk update
    - Featured photos will be displayed prominently in the hero section
*/

-- Add new columns to gallery_photos table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_photos' AND column_name = 'is_before_after'
  ) THEN
    ALTER TABLE gallery_photos ADD COLUMN is_before_after boolean DEFAULT false NOT NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_photos' AND column_name = 'category'
  ) THEN
    ALTER TABLE gallery_photos ADD COLUMN category text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'gallery_photos' AND column_name = 'featured'
  ) THEN
    ALTER TABLE gallery_photos ADD COLUMN featured boolean DEFAULT false NOT NULL;
  END IF;
END $$;

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_gallery_photos_category ON gallery_photos(category);
CREATE INDEX IF NOT EXISTS idx_gallery_photos_featured ON gallery_photos(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_gallery_photos_before_after ON gallery_photos(is_before_after) WHERE is_before_after = true;

-- Add comment to document the category field
COMMENT ON COLUMN gallery_photos.category IS 'Photo category: kitchen, exterior, interior, cabinet, commercial, etc.';