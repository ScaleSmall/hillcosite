import { businessConfig } from '../config/business';
import {
  greaterAustinServiceAreas,
  greaterAustinServiceCounties,
  priorityLocalSearchTopics
} from '../config/localSeo';

export const siteBaseUrl = 'https://www.hillcopaint.com';

export const businessLogoUrl = `${siteBaseUrl}${businessConfig.logo}`;

export const businessLogoImage = {
  '@type': 'ImageObject',
  '@id': `${siteBaseUrl}/#logo`,
  url: businessLogoUrl,
  contentUrl: businessLogoUrl,
  width: 512,
  height: 512,
  caption: `${businessConfig.name} logo`
} as const;

const weekdayHours = businessConfig.hours.weekday;

export const businessContactPoint = {
  '@type': 'ContactPoint',
  telephone: businessConfig.phone,
  contactType: 'customer service',
  areaServed: 'US-TX',
  availableLanguage: ['English']
} as const;

export const businessOpeningHoursSpecification = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: weekdayHours.days,
  opens: weekdayHours.opens,
  closes: weekdayHours.closes
} as const;

export const businessAggregateRating = {
  '@type': 'AggregateRating',
  ratingValue: businessConfig.aggregateRating.ratingValue,
  reviewCount: businessConfig.aggregateRating.reviewCount,
  bestRating: businessConfig.aggregateRating.bestRating,
  worstRating: businessConfig.aggregateRating.worstRating
} as const;

export const businessAreaServed = [
  ...greaterAustinServiceAreas.map(name => ({
    '@type': 'Place',
    name
  })),
  ...greaterAustinServiceCounties.map(name => ({
    '@type': 'AdministrativeArea',
    name
  }))
] as const;

export const businessServiceArea = [
  {
    '@type': 'AdministrativeArea',
    name: 'Greater Austin Area'
  },
  ...greaterAustinServiceCounties.map(name => ({
    '@type': 'AdministrativeArea',
    name
  }))
] as const;

const businessReference = {
  '@id': `${siteBaseUrl}/#localbusiness`
} as const;

const priorityBusinessServiceOffers = [
  { name: 'Austin house painters', path: '/house-painters-austin' },
  { name: 'Austin painting service area', path: '/service-areas/austin' },
  { name: 'Austin exterior house painters', path: '/exterior-painting-austin' },
  { name: 'Austin interior painters', path: '/interior-painting-austin' },
  { name: 'Austin cabinet painting', path: '/cabinet-refinishing-austin' },
  { name: 'Austin commercial painters', path: '/commercial-painting-austin' },
  { name: 'Interior painting', path: '/services/interior-painting' },
  { name: 'Exterior painting', path: '/services/exterior-painting' },
  { name: 'Cabinet painting and refinishing', path: '/services/cabinet-refinishing' },
  { name: 'Commercial painting', path: '/services/commercial' },
  { name: 'Color consultation', path: '/color-consultation' }
] as const;

const businessServiceCatalogItems = [
  'Interior painting',
  'Exterior painting',
  'Cabinet painting',
  'Cabinet refinishing',
  'Commercial painting',
  'Color consultation'
] as const;

export const canonicalBusinessProvider = {
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'HousePainter'],
  '@id': `${siteBaseUrl}/#localbusiness`,
  name: businessConfig.name,
  legalName: businessConfig.legalName,
  alternateName: businessConfig.alternateNames,
  disambiguatingDescription: businessConfig.disambiguatingDescription,
  description: businessConfig.description,
  slogan: businessConfig.tagline,
  naics: businessConfig.industry.naics,
  industry: businessConfig.industry.naicsDescription,
  url: siteBaseUrl,
  telephone: businessConfig.phone,
  email: businessConfig.email,
  contactPoint: businessContactPoint,
  logo: businessLogoImage,
  image: [
    `${siteBaseUrl}/hill-country-painting-austin-homepage-hero.jpg`,
    { '@id': `${siteBaseUrl}/#logo` }
  ],
  priceRange: '$$',
  paymentAccepted: businessConfig.payment.methods,
  currenciesAccepted: businessConfig.payment.currencies,
  availableLanguage: ['English'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: businessConfig.address.addressLocality,
    addressRegion: businessConfig.address.addressRegion,
    addressCountry: businessConfig.address.addressCountry
  },
  areaServed: businessAreaServed,
  serviceArea: businessServiceArea,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: businessConfig.geo.latitude,
    longitude: businessConfig.geo.longitude
  },
  knowsAbout: [
    ...priorityLocalSearchTopics,
    'Austin house painting',
    'Austin painting contractors',
    'Central Texas exterior paint maintenance',
    'HOA paint color approvals',
    'Cabinet refinishing',
    'Interior repainting',
    'Commercial repaint scheduling'
  ],
  hasMap: businessConfig.googleBusinessProfileUrl,
  openingHours: `Mo-Fr ${weekdayHours.opens}-${weekdayHours.closes}`,
  openingHoursSpecification: businessOpeningHoursSpecification,
  sameAs: [
    businessConfig.googleBusinessProfileUrl,
    ...Object.values(businessConfig.socialProfiles)
  ],
  aggregateRating: businessAggregateRating,
  makesOffer: priorityBusinessServiceOffers.map(offer => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      '@id': `${siteBaseUrl}${offer.path}#service`,
      name: offer.name,
      provider: businessReference,
      areaServed: businessAreaServed
    }
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Austin Painting Services',
    itemListElement: businessServiceCatalogItems.map(serviceName => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: serviceName,
        provider: businessReference,
        areaServed: businessAreaServed
      }
    }))
  },
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'kgmid',
    value: businessConfig.googleKnowledgeGraphId,
    url: businessConfig.googleBusinessProfileUrl
  }
} as const;
