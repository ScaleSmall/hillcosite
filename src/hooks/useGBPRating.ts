import { businessConfig, hasValidRating } from '../config/business';

interface GBPRating {
  ratingValue: string;
  reviewCount: string;
  shouldDisplay: boolean;
  isLoading: boolean;
}

/**
 * Canonical static fallback used only when live GBP rating data is unavailable.
 */
export function useGBPRating(): GBPRating | null {
  const { ratingValue, reviewCount } = businessConfig.aggregateRating;

  return {
    ratingValue: ratingValue.toFixed(1),
    reviewCount: String(reviewCount),
    shouldDisplay: hasValidRating(ratingValue),
    isLoading: false
  };
}
