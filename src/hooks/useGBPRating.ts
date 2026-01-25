interface GBPRating {
  ratingValue: string;
  reviewCount: string;
  shouldDisplay: boolean;
  isLoading: boolean;
}

/**
 * Hook to return static GBP rating data
 * Using placeholder values until client provides live API credentials
 */
export function useGBPRating(): GBPRating | null {
  return {
    ratingValue: '4.9',
    reviewCount: '150',
    shouldDisplay: true,
    isLoading: false
  };
}
