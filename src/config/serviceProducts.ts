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
    description: 'Professional interior painting services for homes in Austin, TX. Complete surface preparation, premium paint application, and clean finish. Includes consultation, furniture protection, and 2-year warranty.',
    brand: 'Hill Country Painting',
    category: 'Interior Painting Service',
    sku: 'HCP-INT-001',
    priceRange: '$6,000 - $10,500',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    warranty: '2-year warranty on materials and workmanship',
    areaServed: greaterAustinServiceAreas,
    url: '/services/interior-painting'
  },

  'exterior-painting': {
    name: 'Exterior House Painting',
    description: 'Professional exterior painting services for homes in Austin, TX. Weather-resistant finishes designed for Texas climate. Includes power washing, surface prep, premium paint application, and 2-year warranty.',
    brand: 'Hill Country Painting',
    category: 'Exterior Painting Service',
    sku: 'HCP-EXT-001',
    priceRange: '$6,000 - $14,000',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    warranty: '2-year warranty on materials and workmanship',
    areaServed: greaterAustinServiceAreas,
    url: '/services/exterior-painting'
  },

  'cabinet-refinishing': {
    name: 'Cabinet Painting & Refinishing',
    description: 'Professional cabinet painting services for kitchens and bathrooms in Austin, TX. Custom colors, professional finish, significantly less than replacement cost. Includes prep, painting, and 2-year warranty.',
    brand: 'Hill Country Painting',
    category: 'Cabinet Painting Service',
    sku: 'HCP-CAB-001',
    priceRange: '$6,000 - $12,000',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    warranty: '2-year warranty on materials and workmanship',
    areaServed: greaterAustinServiceAreas,
    url: '/services/cabinet-refinishing'
  },

  'commercial-painting': {
    name: 'Commercial Painting',
    description: 'Professional commercial painting services for businesses in Austin, TX. Minimal disruption, flexible scheduling, quality finish. Interior and exterior painting for offices, retail, and commercial properties.',
    brand: 'Hill Country Painting',
    category: 'Commercial Painting Service',
    sku: 'HCP-COM-001',
    priceRange: '$6,000 - $25,000',
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
