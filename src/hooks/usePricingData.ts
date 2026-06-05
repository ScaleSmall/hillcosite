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
const MINIMUM_VISIBLE_PROJECT_PRICE = 6000;

function formatCurrency(value: number): string {
  return `$${value.toLocaleString('en-US')}`;
}

function normalizePriceData(price: PriceData): PriceData {
  const normalizePriceText = (value: string) => value.replace(
    /\$([0-9][0-9,]*)(?:\s*(?:-|–|to)\s*\$?([0-9][0-9,]*))?/g,
    (match, lowValue: string, highValue?: string) => {
      const low = Number(lowValue.replace(/,/g, ''));
      const high = highValue ? Number(highValue.replace(/,/g, '')) : undefined;

      if (low >= MINIMUM_VISIBLE_PROJECT_PRICE && (!high || high >= MINIMUM_VISIBLE_PROJECT_PRICE)) {
        return match;
      }

      if (high) {
        return `${formatCurrency(MINIMUM_VISIBLE_PROJECT_PRICE)} - ${formatCurrency(Math.max(high, MINIMUM_VISIBLE_PROJECT_PRICE))}`;
      }

      return `${formatCurrency(MINIMUM_VISIBLE_PROJECT_PRICE)}+`;
    }
  );

  return {
    ...price,
    min: Math.max(price.min, MINIMUM_VISIBLE_PROJECT_PRICE),
    max: price.max ? Math.max(price.max, MINIMUM_VISIBLE_PROJECT_PRICE) : price.max,
    formatted: normalizePriceText(price.formatted),
    description: normalizePriceText(price.description)
  };
}

function normalizePricingResponse(response: PricingDataResponse): PricingDataResponse {
  return {
    ...response,
    data: Object.fromEntries(
      Object.entries(response.data).map(([key, price]) => [key, normalizePriceData(price)])
    )
  };
}

function getCachedData(): PricingDataResponse | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      const now = Date.now();
      if (now - parsed.timestamp < CACHE_DURATION) {
        return normalizePricingResponse(parsed.data);
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
        const { url, key } = getSupabaseConfig();
        const pricingApiEnabled = import.meta.env.VITE_ENABLE_PRICING_API === 'true';

        if (!pricingApiEnabled || !url || !key) {
          setLoading(false);
          return;
        }

        const apiUrl = `${url}/functions/v1/get-pricing-data?guide=${guide}`;
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${key}`,
            apikey: key
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch pricing data');
        }

        const result: PricingDataResponse = await response.json();

        if (result.success) {
          const normalizedResult = normalizePricingResponse(result);
          setData(normalizedResult.data);
          setCachedData(normalizedResult);
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
