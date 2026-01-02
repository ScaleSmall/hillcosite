/*
  # Fix Pricing Data Unique Constraint

  1. Issue
    - The pricing_data table has UNIQUE constraint on guide_key
    - This prevents multiple pricing entries for the same guide
    - Each guide needs multiple section entries

  2. Changes
    - Drop UNIQUE constraint on guide_key
    - Add UNIQUE constraint on (guide_key, section_key) combination
    - This allows multiple sections per guide

  3. Impact
    - Enables proper pricing data structure
    - Allows multiple pricing entries per guide
*/

-- Drop the existing UNIQUE constraint on guide_key
ALTER TABLE pricing_data DROP CONSTRAINT IF EXISTS pricing_data_guide_key_key;

-- Add UNIQUE constraint on the combination of guide_key and section_key
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'pricing_data_guide_section_key'
  ) THEN
    ALTER TABLE pricing_data 
    ADD CONSTRAINT pricing_data_guide_section_key 
    UNIQUE (guide_key, section_key);
  END IF;
END $$;