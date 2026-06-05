/**
 * Service Product Configuration for Schema Markup
 *
 * This file contains Product schema metadata for each painting service.
 * Used to generate rich snippets in Google search results.
 *
 * Pricing is kept general as "contact for quote" with typical range indicators.
 * These are hardcoded values that can be updated when GHL integration is ready.
 */

import { greaterAustinServiceAreas } from './localSeo';

export interface ServiceProduct {
  name: string;
  description: string;
  brand: string;
  category: string;
  sku: string;
  priceRange: string;
  priceCurrency: string;
  availability: string;
  warranty: string;
  areaServed: readonly string[];
  url: string;
}

export const serviceProducts: Record<string, ServiceProduct> = {
  'interior-painting': {
    name: 'Interior House Painting',
    description: 'Full-scope professional interior painting services for homes in Austin, TX. Complete surface preparation, premium paint application, protection, cleanup, written scope, and 2-year warranty.',
    brand: 'Hill Country Painting',
    category: 'Interior Painting Service',
    sku: 'HCP-INT-001',
    priceRange: '$6,500 - $10,500',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    warranty: '2-year warranty on materials and workmanship',
    areaServed: greaterAustinServiceAreas,
    url: '/services/interior-painting'
  },

  'exterior-painting': {
    name: 'Exterior House Painting',
    description: 'Full-scope professional exterior painting services for homes in Austin, TX. Weather-resistant finishes designed for Texas climate with washing, repairs, prep, premium coatings, cleanup, written scope, and 2-year warranty.',
    brand: 'Hill Country Painting',
    category: 'Exterior Painting Service',
    sku: 'HCP-EXT-001',
    priceRange: '$7,000 - $14,000',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    warranty: '2-year warranty on materials and workmanship',
    areaServed: greaterAustinServiceAreas,
    url: '/services/exterior-painting'
  },

  'cabinet-refinishing': {
    name: 'Cabinet Painting & Refinishing',
    description: 'Full-scope professional cabinet painting services for kitchens and bathrooms in Austin, TX. Includes cleaning, sanding, masking, premium finish application, cleanup, written scope, and 2-year warranty.',
    brand: 'Hill Country Painting',
    category: 'Cabinet Painting Service',
    sku: 'HCP-CAB-001',
    priceRange: '$6,250 - $12,000',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    warranty: '2-year warranty on materials and workmanship',
    areaServed: greaterAustinServiceAreas,
    url: '/services/cabinet-refinishing'
  },

  'commercial-painting': {
    name: 'Commercial Painting',
    description: 'Full-scope professional commercial painting services for Austin businesses. Includes scheduling coordination, site protection, prep, premium coatings, cleanup, written scope, and a 2-year warranty where applicable.',
    brand: 'Hill Country Painting',
    category: 'Commercial Painting Service',
    sku: 'HCP-COM-001',
    priceRange: '$7,500 - $25,000',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    warranty: '2-year warranty on materials and workmanship',
    areaServed: greaterAustinServiceAreas,
    url: '/services/commercial'
  }
};

/**
 * Helper function to get service product by key
 */
export const getServiceProduct = (serviceKey: string): ServiceProduct | undefined => {
  return serviceProducts[serviceKey];
};
