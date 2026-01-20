/*
  # Create GBP Ratings Table

  1. New Tables
    - `gbp_ratings`
      - `id` (uuid, primary key)
      - `rating_value` (numeric) - Current Google rating
      - `review_count` (integer) - Number of reviews
      - `fetched_at` (timestamptz) - When data was fetched
      - `alert_sent_at` (timestamptz, nullable) - Last time alert was sent for low rating
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `gbp_ratings` table
    - Add policy for anonymous users to read latest rating (public data)
    - No insert/update/delete for public (only backend functions)

  3. Indexes
    - Index on fetched_at for quick retrieval of latest rating
*/

CREATE TABLE IF NOT EXISTS gbp_ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  rating_value numeric(2,1) NOT NULL CHECK (rating_value >= 1 AND rating_value <= 5),
  review_count integer NOT NULL CHECK (review_count >= 0),
  fetched_at timestamptz NOT NULL DEFAULT now(),
  alert_sent_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE gbp_ratings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous users to read ratings (public data for display)
CREATE POLICY "Anyone can read GBP ratings"
  ON gbp_ratings FOR SELECT
  TO anon
  USING (true);

-- Index for quick retrieval of latest rating
CREATE INDEX IF NOT EXISTS idx_gbp_ratings_fetched_at
  ON gbp_ratings(fetched_at DESC);
