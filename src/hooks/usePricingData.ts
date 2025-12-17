import { useState, useEffect } from 'react';
import { getSupabaseConfig } from '../lib/env';

interface PriceData {
  min: number;
  max?: number;
  formatted: string;
  description: string;
}

interface PricingDataResponse {
  success: boolean;
  guide: string;
  data: { [key: string]: PriceData };
  lastUpdated: string;
}

const CACHE_KEY = 'hillco_pricing_data';
const CACHE_DURATION = 3600000;

function getCachedData(): PricingDataResponse | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      const now = Date.now();
      if (now - parsed.timestamp < CACHE_DURATION) {
        return parsed.data;
      }
    }
  } catch (error) {
    console.error('Error reading cache:', error);
  }
  return null;
}

function setCachedData(data: PricingDataResponse): void {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
}

export function usePricingData(guide: string = 'painting-costs') {
  const [data, setData] = useState<{ [key: string]: PriceData } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricing = async () => {
      const cached = getCachedData();
      if (cached && cached.guide === guide) {
        setData(cached.data);
        setLoading(false);
        return;
      }

      try {
        const { url } = getSupabaseConfig();
        if (!url) {
          setError('Supabase not configured');
          setLoading(false);
          return;
        }

        const apiUrl = `${url}/functions/v1/get-pricing-data?guide=${guide}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch pricing data');
        }

        const result: PricingDataResponse = await response.json();

        if (result.success) {
          setData(result.data);
          setCachedData(result);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching pricing data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');

        const cached = getCachedData();
        if (cached && cached.guide === guide) {
          setData(cached.data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, [guide]);

  return { data, loading, error };
}
