import { useState, useEffect } from 'react';
import { getLatestRating } from '../lib/gbpRatings';

interface GBPRating {
  ratingValue: string;
  reviewCount: string;
  shouldDisplay: boolean;
  isLoading: boolean;
}

/**
 * Hook to fetch and use live GBP rating data
 * Returns null if no rating or rating < 4.5
 */
export function useGBPRating(): GBPRating | null {
  const [rating, setRating] = useState<GBPRating | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRating() {
      try {
        const data = await getLatestRating();

        if (data && data.shouldDisplay) {
          setRating({
            ...data,
            isLoading: false
          });
        } else {
          setRating(null);
        }
      } catch (error) {
        console.error('Error fetching GBP rating:', error);
        setRating(null);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRating();
  }, []);

  if (isLoading) {
    return { ratingValue: '', reviewCount: '', shouldDisplay: false, isLoading: true };
  }

  return rating;
}
