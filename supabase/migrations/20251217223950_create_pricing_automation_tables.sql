/*
  # Create Pricing Automation System Tables

  1. New Tables
    - `pricing_data`
      - Stores all pricing information for guide pages
      - Includes base prices, display prices, and metadata
      - Tracks version history for rollback capability
    
    - `inflation_rates`
      - Stores CPI data fetched from government APIs
      - Includes validation status and data source
      - Maintains historical inflation rate records
    
    - `automation_config`
      - System configuration and settings
      - Owner notification preferences
      - Rounding rules and calculation parameters
    
    - `automation_logs`
      - Comprehensive audit trail of all system operations
      - Tracks calculations, updates, and notifications sent
      - Enables debugging and compliance reporting

  2. Security
    - Enable RLS on all tables
    - Policies allow authenticated service role access
    - Public read access only for pricing_data

  3. Indexes
    - Optimized for common query patterns
    - Support for efficient filtering and sorting
*/

-- Create pricing_data table
CREATE TABLE IF NOT EXISTS pricing_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guide_key text UNIQUE NOT NULL,
  guide_title text NOT NULL,
  section_key text NOT NULL,
  price_type text NOT NULL CHECK (price_type IN ('single', 'range', 'percentage')),
  base_min_value numeric(10, 2) NOT NULL,
  base_max_value numeric(10, 2),
  display_min_value numeric(10, 2) NOT NULL,
  display_max_value numeric(10, 2),
  currency text DEFAULT 'USD',
  description text,
  last_inflated_year integer DEFAULT 2025,
  version integer DEFAULT 1,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create inflation_rates table
CREATE TABLE IF NOT EXISTS inflation_rates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  year integer UNIQUE NOT NULL,
  cpi_rate numeric(5, 3) NOT NULL,
  data_source text NOT NULL,
  fetch_date timestamptz DEFAULT now(),
  is_validated boolean DEFAULT false,
  is_applied boolean DEFAULT false,
  applied_at timestamptz,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Create automation_config table
CREATE TABLE IF NOT EXISTS automation_config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  config_key text UNIQUE NOT NULL,
  config_value jsonb NOT NULL,
  description text,
  updated_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create automation_logs table
CREATE TABLE IF NOT EXISTS automation_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  log_type text NOT NULL CHECK (log_type IN ('info', 'success', 'warning', 'error')),
  operation text NOT NULL,
  message text NOT NULL,
  metadata jsonb,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_pricing_data_guide_key ON pricing_data(guide_key);
CREATE INDEX IF NOT EXISTS idx_pricing_data_active ON pricing_data(is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_inflation_rates_year ON inflation_rates(year DESC);
CREATE INDEX IF NOT EXISTS idx_automation_logs_created ON automation_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_automation_logs_type ON automation_logs(log_type);

-- Enable Row Level Security
ALTER TABLE pricing_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE inflation_rates ENABLE ROW LEVEL SECURITY;
ALTER TABLE automation_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE automation_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for pricing_data (public read, service role write)
CREATE POLICY "Anyone can read active pricing data"
  ON pricing_data FOR SELECT
  USING (is_active = true);

CREATE POLICY "Service role can manage pricing data"
  ON pricing_data FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- RLS Policies for inflation_rates (service role only)
CREATE POLICY "Service role can manage inflation rates"
  ON inflation_rates FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- RLS Policies for automation_config (service role only)
CREATE POLICY "Service role can manage config"
  ON automation_config FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- RLS Policies for automation_logs (service role only)
CREATE POLICY "Service role can manage logs"
  ON automation_logs FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Insert default configuration
INSERT INTO automation_config (config_key, config_value, description) VALUES
  ('owner_email', '{"email": "owner@hillcopaint.com", "enabled": true}'::jsonb, 'Site owner email for notifications'),
  ('rounding_rules', '{"round_to": 100, "method": "nearest"}'::jsonb, 'Price rounding configuration'),
  ('notification_settings', '{"send_on_success": true, "send_on_failure": true, "include_details": true}'::jsonb, 'Email notification preferences'),
  ('cpi_api_config', '{"primary": "bls.gov", "fallback": "fred.stlouisfed.org", "timeout": 30000}'::jsonb, 'CPI API endpoints and settings'),
  ('automation_schedule', '{"enabled": true, "cron": "0 1 1 1 *", "timezone": "America/Chicago"}'::jsonb, 'Scheduled automation configuration')
ON CONFLICT (config_key) DO NOTHING;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_pricing_data_updated_at
  BEFORE UPDATE ON pricing_data
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_automation_config_updated_at
  BEFORE UPDATE ON automation_config
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
