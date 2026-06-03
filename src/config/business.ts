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
  phoneHref: 'tel:+15122402246',
  email: 'info@hillcopaint.com',

  address: {
    streetAddress: '',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '',
    addressCountry: 'US',
    displayShort: 'Greater Austin Area',
    displayFull: 'Greater Austin Area'
  },

  // Service Area
  serviceArea: 'Austin, TX and the Greater Austin area',

  // Ratings - canonical public GBP summary used as the schema fallback.
  // Live display components can still replace these values when verified data is available.
  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 127,
    bestRating: 5,
    worstRating: 1,
    useLiveData: true // Use live data from Supabase gbp_ratings table
  },

  // Business Details
  description: 'Professional painting contractors serving Austin, TX. Interior painting, exterior painting, cabinet painting. 15+ years experience. Insured, 2-year warranty.',
  disambiguatingDescription: 'Austin, Texas service-area painting contractor serving Greater Austin homeowners, property managers, and commercial properties.',
  alternateNames: [
    'Hill Country Painting LLC',
    'Hill Country Painting Austin',
    'Hill Country Painting of Austin'
  ],
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
  socialProfiles: {
    facebook: 'https://www.facebook.com/Hillcopaint',
    instagram: 'https://www.instagram.com/hill_country_painting_austin/',
    x: 'https://x.com/Hill_Co_Paint',
    youtube: 'https://www.youtube.com/@HillCountryPaintingAustin',
    tiktok: 'https://www.tiktok.com/@hillco_painting_austin'
  },
  googleKnowledgeGraphId: '/g/11frssbq6p',
  googleBusinessProfileUrl: 'https://www.google.com/search?q=Hill+Country+Painting&kgmid=/g/11frssbq6p',

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
