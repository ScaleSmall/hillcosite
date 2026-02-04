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

  // Address - City/State only (no street address per owner decision)
  address: {
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
    displayShort: 'Austin, TX',
    displayFull: 'Austin, TX Metro Area'
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

  // Geo Coordinates (Austin, TX)
  geo: {
    latitude: '30.2672',
    longitude: '-97.7431'
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
    // Return full address only if it's been configured
    return businessConfig.address.displayFull.includes('[')
      ? businessConfig.address.displayShort
      : businessConfig.address.displayFull;
  }
  return businessConfig.address.displayShort;
};
