/**
 * Business Information Configuration
 *
 * Ratings are fetched live from Google Business Profile via Supabase.
 * The fetch-gbp-rating edge function updates ratings daily.
 * Static fallback values below are only used if live fetch fails.
 */

export const businessConfig = {
  name: 'Hill Country Painting',
  legalName: 'Hill Country Painting LLC',
  phone: '(512) 240-2246',
  email: 'info@hillcopaint.com',

  address: {
    streetAddress: '5000 Plaza on the Lake, Suite 100 #415',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78746',
    addressCountry: 'US',
    displayShort: 'Austin, TX 78746',
    displayFull: '5000 Plaza on the Lake, Ste 100 #415, Austin, TX 78746'
  },

  // Service Area
  serviceArea: 'Austin, TX Metro Area',

  // Ratings - Fetched live from GBP via Supabase
  // These static values are fallback only
  aggregateRating: {
    bestRating: '5',
    worstRating: '1',
    useLiveData: true // Use live data from Supabase gbp_ratings table
  },

  // Business Details
  description: 'Professional painting contractors serving Austin metro area. Interior painting, exterior painting, cabinet painting. 15+ years experience. Insured, 2-year warranty.',
  tagline: 'Clean prep. Crisp lines. Reliable schedules.',

  // Hours
  hours: {
    weekday: {
      opens: '08:00',
      closes: '18:00',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    weekend: null // Closed on weekends
  },

  // Payment
  payment: {
    methods: 'Cash, Check, Credit Card',
    currencies: 'USD'
  },

  // Social & Web
  website: 'https://www.hillcopaint.com',
  logo: '/brand/hill-country-painting-logo-primary.png',
  googleBusinessProfileUrl: 'https://share.google/nnJ8rkOVgGiwe0ys3',

  geo: {
    latitude: '30.3337',
    longitude: '-97.8166'
  }
} as const;

/**
 * Helper to check if aggregate rating should be displayed
 * For live data, this check happens in the component/page level
 * @param ratingValue - Optional live rating value
 */
export const hasValidRating = (ratingValue?: number | string) => {
  if (businessConfig.aggregateRating.useLiveData && ratingValue !== undefined) {
    const rating = typeof ratingValue === 'string' ? parseFloat(ratingValue) : ratingValue;
    return rating >= 4.5;
  }
  return false; // Default to false for safety
};

/**
 * Helper to get display address
 */
export const getDisplayAddress = (format: 'short' | 'full' = 'short') => {
  if (format === 'full') {
    return businessConfig.address.displayFull;
  }
  return businessConfig.address.displayShort;
};
