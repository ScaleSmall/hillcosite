import { businessConfig } from '../config/business';

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

export const canonicalBusinessProvider = {
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'HousePainter'],
  '@id': `${siteBaseUrl}/#localbusiness`,
  name: businessConfig.name,
  url: siteBaseUrl,
  telephone: businessConfig.phone,
  logo: businessLogoImage,
  image: [
    `${siteBaseUrl}/hill-country-painting-austin-homepage-hero.jpg`,
    { '@id': `${siteBaseUrl}/#logo` }
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: businessConfig.address.addressLocality,
    addressRegion: businessConfig.address.addressRegion,
    addressCountry: businessConfig.address.addressCountry
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Greater Austin Area'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: businessConfig.geo.latitude,
    longitude: businessConfig.geo.longitude
  },
  hasMap: businessConfig.googleBusinessProfileUrl,
  sameAs: [
    businessConfig.googleBusinessProfileUrl,
    ...Object.values(businessConfig.socialProfiles)
  ],
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'kgmid',
    value: businessConfig.googleKnowledgeGraphId,
    url: businessConfig.googleBusinessProfileUrl
  }
} as const;
