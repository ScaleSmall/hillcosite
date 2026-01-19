/**
 * Business Information Configuration
 *
 * IMPORTANT: Replace placeholder values with actual business data
 * DO NOT use fabricated data for reviews, ratings, or addresses
 */

export const businessConfig = {
  name: 'Hill Country Painting',
  legalName: 'Hill Country Painting LLC',
  phone: '(512) 240-2246',
  email: 'info@hillcopaint.com',

  // Address - REPLACE WITH ACTUAL ADDRESS
  address: {
    streetAddress: '[YOUR STREET ADDRESS]', // e.g., "123 Main St"
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '[YOUR ZIP CODE]', // e.g., "78701"
    addressCountry: 'US',
    displayShort: 'Austin, TX Metro Area',
    displayFull: '[YOUR FULL ADDRESS]' // e.g., "123 Main St, Austin, TX 78701"
  },

  // Service Area
  serviceArea: 'Austin, TX Metro Area',
  servingSince: '2019',

  // Ratings - REPLACE WITH ACTUAL DATA FROM GOOGLE/REVIEWS
  // DO NOT fabricate these values
  aggregateRating: {
    ratingValue: '[ACTUAL RATING]', // e.g., "4.9" - Get from Google Business Profile
    reviewCount: '[ACTUAL COUNT]', // e.g., "127" - Get from Google Business Profile
    bestRating: '5',
    worstRating: '1',
    enabled: false // Set to true only when you have real data
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
  website: 'https://hillcopaint.com',
  logo: '/logo.png',

  // Geo Coordinates (Austin, TX)
  geo: {
    latitude: '30.2672',
    longitude: '-97.7431'
  }
} as const;

/**
 * Helper to check if aggregate rating should be displayed
 */
export const hasValidRating = () => {
  return businessConfig.aggregateRating.enabled &&
         !businessConfig.aggregateRating.ratingValue.includes('[') &&
         !businessConfig.aggregateRating.reviewCount.includes('[');
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
