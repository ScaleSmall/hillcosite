import { canonicalBusinessProvider, siteBaseUrl } from './businessSchema';

export const priorityAustinServiceLinks = [
  {
    title: 'Austin House Painters',
    schemaName: 'Austin House Painters',
    href: '/house-painters-austin',
    serviceType: 'House painting services',
    description: 'Compare exterior, interior, cabinet, and commercial painting options for Austin properties.'
  },
  {
    title: 'Exterior Painting in Austin',
    schemaName: 'Austin Exterior House Painters',
    href: '/exterior-painting-austin',
    serviceType: 'Exterior painting',
    description: 'Prep, coatings, and weather-aware exterior painting for Central Texas homes.'
  },
  {
    title: 'Interior Painting in Austin',
    schemaName: 'Austin Interior Painters',
    href: '/interior-painting-austin',
    serviceType: 'Interior painting',
    description: 'Clean, careful interior painting for living spaces, trim, walls, and ceilings.'
  },
  {
    title: 'Cabinet Painting Austin',
    schemaName: 'Austin Cabinet Painting',
    href: '/cabinet-refinishing-austin',
    serviceType: 'Cabinet painting and refinishing',
    description: 'Durable cabinet painting and refinishing for Austin kitchens, baths, and built-ins.'
  },
  {
    title: 'Commercial Painting Austin',
    schemaName: 'Austin Commercial Painters',
    href: '/commercial-painting-austin',
    serviceType: 'Commercial painting',
    description: 'Professional painting for Austin offices, retail spaces, and commercial properties.'
  }
] as const;

export const priorityAustinServiceSchema = priorityAustinServiceLinks.map(service => ({
  '@type': 'Service',
  '@id': `${siteBaseUrl}${service.href}#service`,
  name: service.schemaName,
  serviceType: service.serviceType,
  url: `${siteBaseUrl}${service.href}`,
  provider: canonicalBusinessProvider,
  areaServed: {
    '@type': 'City',
    name: 'Austin'
  }
}));
