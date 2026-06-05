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
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'kgmid',
    value: businessConfig.googleKnowledgeGraphId,
    url: businessConfig.googleBusinessProfileUrl
  }
} as const;
