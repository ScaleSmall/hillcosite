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
const ABSOLUTE_MINIMUM_PROJECT_PRICE = 6000;
const DEFAULT_VISIBLE_PROJECT_PRICE = 6250;
const MINIMUM_AVERAGE_PROJECT_PRICE = 8500;
const PRICING_KEY_MINIMUMS: Record<string, number> = {
  cost_factor_home_size_interior: 6500,
  cost_factor_home_size_exterior: 7000,
  faq_2000sqft_interior: 6500,
  faq_2000sqft_exterior: 8500,
  house_1500_interior: 6250,
  house_1500_exterior: 6750,
  house_2200_interior: 6500,
  house_2200_exterior: 8500,
  house_3000_interior: 9000,
  house_3000_exterior: 12000,
  stat_average_project: MINIMUM_AVERAGE_PROJECT_PRICE
};

const PRICING_KEY_PATTERN_MINIMUMS: Array<[RegExp, number]> = [
  [/commercial/i, 7500],
  [/(house_3000_exterior|3000.*exterior|exterior.*3000|large.*exterior)/i, 12000],
  [/(house_3000_interior|3000.*interior|interior.*3000|large.*interior)/i, 9000],
  [/(house_2200_exterior|faq_2000sqft_exterior|2000.*exterior|2200.*exterior|average.*exterior)/i, 8500],
  [/(house_1500_exterior|1500.*exterior)/i, 6750],
  [/exterior/i, 7000],
  [/(house_1500_interior|1500.*interior)/i, 6250],
  [/interior/i, 6500],
  [/cabinet/i, 6250],
  [/average|stat/i, MINIMUM_AVERAGE_PROJECT_PRICE]
];

function minimumForPricingKey(key: string): number {
  const exactMinimum = PRICING_KEY_MINIMUMS[key];

  if (exactMinimum) {
    return exactMinimum;
  }

  const patternMinimum = PRICING_KEY_PATTERN_MINIMUMS.find(([pattern]) => pattern.test(key))?.[1];
  return Math.max(patternMinimum || DEFAULT_VISIBLE_PROJECT_PRICE, ABSOLUTE_MINIMUM_PROJECT_PRICE);
}

function formatCurrency(value: number): string {
  return `$${value.toLocaleString('en-US')}`;
}

function normalizePriceData(price: PriceData, minimumVisiblePrice: number): PriceData {
  const normalizePriceText = (value: string) => value.replace(
    /\$([0-9][0-9,]*)(\+)?(?:\s*(?:-|–|—|to)\s*\$?([0-9][0-9,]*)(\+)?)?/g,
    (match, lowValue: string, _lowPlus: string | undefined, highValue?: string) => {
      const low = Number(lowValue.replace(/,/g, ''));
      const high = highValue ? Number(highValue.replace(/,/g, '')) : undefined;

      if (low >= minimumVisiblePrice && (!high || high >= minimumVisiblePrice)) {
        return match;
      }

      if (high) {
        if (high <= minimumVisiblePrice) {
          return `${formatCurrency(minimumVisiblePrice)}+`;
        }

        return `${formatCurrency(minimumVisiblePrice)} - ${formatCurrency(high)}`;
      }

      return `${formatCurrency(minimumVisiblePrice)}+`;
    }
  );

  return {
    ...price,
    min: Math.max(price.min, minimumVisiblePrice),
    max: price.max && price.max > minimumVisiblePrice ? price.max : undefined,
    formatted: normalizePriceText(price.formatted),
    description: normalizePriceText(price.description)
  };
}

function normalizePricingResponse(response: PricingDataResponse): PricingDataResponse {
  return {
    ...response,
    data: Object.fromEntries(
      Object.entries(response.data).map(([key, price]) => [key, normalizePriceData(price, minimumForPricingKey(key))])
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
