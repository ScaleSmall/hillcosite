import { supabase } from './supabase';

/**
 * Fetch the latest GBP rating from Supabase
 * This data is updated daily by the fetch-gbp-rating edge function
 */
export async function getLatestRating(): Promise<{
  ratingValue: string;
  reviewCount: string;
  shouldDisplay: boolean;
} | null> {
  try {
    const { data, error } = await supabase
      .from('gbp_ratings')
      .select('rating_value, review_count')
      .order('fetched_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error || !data) {
      console.error('Error fetching GBP rating:', error);
      return null;
    }

    const ratingValue = data.rating_value.toString();
    const reviewCount = data.review_count.toString();

    // Only display if rating >= 4.5
    const shouldDisplay = parseFloat(ratingValue) >= 4.5;

    return {
      ratingValue,
      reviewCount,
      shouldDisplay
    };
  } catch (err) {
    console.error('Exception fetching GBP rating:', err);
    return null;
  }
}
