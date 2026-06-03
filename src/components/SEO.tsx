import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { businessConfig } from '../config/business';
import { greaterAustinServiceAreas } from '../config/localSeo';
import { useRefParamGuard } from '../hooks/useRefParamGuard';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  pageType?: 'website' | 'collection' | 'service' | 'article';
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  service?: {
    name: string;
    description: string;
    areaServed: readonly string[];
  };
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  product?: {
    name: string;
    description: string;
    brand: string;
    category: string;
    sku: string;
    priceRange: string;
    priceCurrency: string;
    availability: string;
    warranty: string;
    areaServed: string[];
    url: string;
  };
  geoPlacename?: string;
  includeLocalBusiness?: boolean;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  additionalSchema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const truncateAtWordBoundary = (value: string, maxLength: number) => {
  const normalized = String(value).replace(/\s+/g, ' ').trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const sliced = normalized.slice(0, maxLength + 1);
  const lastWhitespace = sliced.search(/\s+\S*$/);
  const candidate = lastWhitespace > 0
    ? sliced.slice(0, lastWhitespace)
    : normalized.slice(0, maxLength);

  return candidate.replace(/[\s|,:;\u2014-]+$/g, '').trim();
};

const optimizeTitle = (value: string) => {
  const normalized = String(value).replace(/\s+/g, ' ').trim();

  if (normalized.length <= 70) {
    return normalized;
  }

  const withoutTrailingBrand = normalized
    .replace(/\s+\|\s+Hill Country Painting$/i, '')
    .replace(/\s+\u2014\s+Hill Country Painting$/i, '');

  return truncateAtWordBoundary(withoutTrailingBrand, 70);
};

const SEO = ({ title, description, canonical, robots, pageType, breadcrumbs, service, faq, product, geoPlacename, includeLocalBusiness, aggregateRating, additionalSchema }: SEOProps) => {
  const hasRefParam = useRefParamGuard();
  const baseUrl = 'https://www.hillcopaint.com';
  const defaultSocialImage = `${baseUrl}/hill-country-painting-austin-homepage-hero.jpg`;

  // Build canonical from prop; if not supplied, derive from current pathname (no search/hash).
  const resolvedCanonical = canonical ?? (
    typeof window !== 'undefined' ? window.location.pathname : null
  );
  const canonicalStr = resolvedCanonical
    ? (resolvedCanonical === '/' ? `${baseUrl}/` : `${baseUrl}${resolvedCanonical}`)
    : null;

  // Development mode: Check for duplicate canonical tags
  useEffect(() => {
    if (import.meta.env.DEV) {
      const canonicalTags = document.querySelectorAll('link[rel="canonical"]');
      if (canonicalTags.length > 1) {
        console.error(
          `[SEO WARNING] Multiple canonical tags detected (${canonicalTags.length})! This will hurt SEO.`,
          Array.from(canonicalTags).map(tag => tag.getAttribute('href'))
        );
      }
    }
  }, [canonicalStr]);

  // Keep metadata concise without hard-cut ellipses that can create awkward search snippets.
  const optimizedTitle = optimizeTitle(String(title));

  const optimizedDescription = truncateAtWordBoundary(String(description), 160);

  // When a tracking ?ref= param is present, suppress indexing of this URL variant
  // while still allowing the crawler to follow links.
  const robotsContent = hasRefParam
    ? 'noindex, follow'
    : String(robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'Hill Country Painting',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      '@id': `${baseUrl}/#logo`,
      url: `${baseUrl}/brand/hill-country-painting-logo-primary.png`,
      contentUrl: `${baseUrl}/brand/hill-country-painting-logo-primary.png`,
      width: 512,
      height: 512,
      caption: 'Hill Country Painting Logo'
    },
    image: {
      '@id': `${baseUrl}/#logo`
    },
    telephone: '(512) 240-2246',
    email: 'info@hillcopaint.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: businessConfig.phone,
      contactType: 'customer service',
      areaServed: 'US-TX',
      availableLanguage: ['English']
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: businessConfig.address.addressLocality,
      addressRegion: businessConfig.address.addressRegion,
      addressCountry: businessConfig.address.addressCountry
    },
    sameAs: [
      'https://www.facebook.com/Hillcopaint',
      'https://www.instagram.com/hill_country_painting_austin/',
      'https://x.com/Hill_Co_Paint',
      'https://www.youtube.com/@HillCountryPaintingAustin',
      'https://www.tiktok.com/@hillco_painting_austin',
      businessConfig.googleBusinessProfileUrl
    ]
  };

  const localBusinessAreas = greaterAustinServiceAreas;

  const localBusinessServices = [
    'Interior painting',
    'Exterior painting',
    'Cabinet painting',
    'Cabinet refinishing',
    'Commercial painting',
    'Color consultation'
  ];
  const localBusinessServiceOffers = [
    { name: 'Interior painting', path: '/services/interior-painting' },
    { name: 'Exterior painting', path: '/services/exterior-painting' },
    { name: 'Cabinet painting and refinishing', path: '/services/cabinet-refinishing' },
    { name: 'Commercial painting', path: '/services/commercial' },
    { name: 'Color consultation', path: '/color-consultation' }
  ];

  const weekdayHours = businessConfig.hours.weekday;
  const contactPoint = {
    '@type': 'ContactPoint',
    telephone: businessConfig.phone,
    contactType: 'customer service',
    areaServed: 'US-TX',
    availableLanguage: ['English']
  };
  const openingHoursSpecification = {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: weekdayHours.days,
    opens: weekdayHours.opens,
    closes: weekdayHours.closes
  };

  // LocalBusiness schema - only if requested (for homepage or service area pages)
  const localBusinessSchema = includeLocalBusiness ? {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'PaintingContractor'],
    '@id': `${baseUrl}/#localbusiness`,
    name: 'Hill Country Painting',
    legalName: businessConfig.legalName,
    description: businessConfig.description,
    slogan: businessConfig.tagline,
    url: baseUrl,
    telephone: businessConfig.phone,
    email: businessConfig.email,
    contactPoint,
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'Greater Austin Area'
    },
    image: defaultSocialImage,
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: parseFloat(businessConfig.geo.latitude),
      longitude: parseFloat(businessConfig.geo.longitude)
    },
    areaServed: localBusinessAreas.map(area => ({
      '@type': 'Place',
      name: area
    })),
    knowsAbout: [
      'Austin house painting',
      'Central Texas exterior paint maintenance',
      'HOA paint color approvals',
      'Cabinet refinishing',
      'Interior repainting',
      'Commercial repaint scheduling'
    ],
    hasMap: businessConfig.googleBusinessProfileUrl,
    mainEntityOfPage: {
      '@id': `${baseUrl}/#website`
    },
    subjectOf: [
      {
        '@type': 'WebPage',
        name: 'Hill Country Painting entity facts',
        url: `${baseUrl}/entity-facts.json`
      },
      {
        '@type': 'WebPage',
        name: 'Hill Country Painting citation facts',
        url: `${baseUrl}/citation-facts.json`
      }
    ],
    makesOffer: localBusinessServiceOffers.map(offer => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        '@id': `${baseUrl}${offer.path}#service`,
        name: offer.name,
        provider: {
          '@id': `${baseUrl}/#localbusiness`
        },
        areaServed: localBusinessAreas.map(area => ({
          '@type': 'Place',
          name: area
        }))
      }
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Austin Painting Services',
      itemListElement: localBusinessServices.map(serviceName => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
          provider: {
            '@id': `${baseUrl}/#localbusiness`
          },
          areaServed: localBusinessAreas.map(area => ({
            '@type': 'Place',
            name: area
          }))
        }
      }))
    },
    openingHours: `Mo-Fr ${weekdayHours.opens}-${weekdayHours.closes}`,
    openingHoursSpecification,
    sameAs: [
      'https://www.facebook.com/Hillcopaint',
      'https://www.instagram.com/hill_country_painting_austin/',
      'https://x.com/Hill_Co_Paint',
      'https://www.youtube.com/@HillCountryPaintingAustin',
      'https://www.tiktok.com/@hillco_painting_austin',
      businessConfig.googleBusinessProfileUrl
    ],
    aggregateRating: aggregateRating ? {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1
    } : undefined
  } : null;

  // BreadcrumbList schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => {
      const isLastItem = index === breadcrumbs.length - 1;
      const item: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name
      };

      // Only add item URL for non-last breadcrumbs
      if (!isLastItem && crumb.url) {
        item.item = `${baseUrl}${crumb.url}`;
      }

      return item;
    })
  } : null;

  // Service schema - only if service data is provided
  const serviceSchema = service && canonicalStr ? (() => {
    // Build base service schema
    const serviceAreas = service.areaServed.map(area => ({
      '@type': 'Place',
      name: area,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Greater Austin Area'
      }
    }));

    const baseSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${canonicalStr}#service`,
      url: canonicalStr,
      name: service.name,
      description: service.description,
      provider: {
        '@id': `${baseUrl}/#localbusiness`
      },
      areaServed: serviceAreas,
      serviceType: service.name,
      category: 'Painting contractor',
      audience: {
        '@type': 'Audience',
        audienceType: 'Homeowners, property managers, and commercial property owners in Greater Austin'
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: canonicalStr,
        servicePhone: contactPoint,
        availableLanguage: ['English']
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.name} Services`,
        itemListElement: [{
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            provider: {
              '@id': `${baseUrl}/#localbusiness`
            },
            areaServed: serviceAreas
          }
        }]
      }
    };

    // Add product pricing info if available
    if (product) {
      const priceMatch = product.priceRange.match(/\$?([\d,]+)\s*-\s*\$?([\d,]+)/);

      if (priceMatch) {
        const lowPrice = priceMatch[1].replace(/,/g, '');
        const highPrice = priceMatch[2].replace(/,/g, '');

        baseSchema.offers = {
          '@type': 'AggregateOffer',
          lowPrice: lowPrice,
          highPrice: highPrice,
          priceCurrency: product.priceCurrency,
          availability: product.availability
        };
      } else {
        baseSchema.offers = {
          '@type': 'Offer',
          availability: product.availability,
          priceCurrency: product.priceCurrency
        };
      }
    }

    return baseSchema;
  })() : null;

  // FAQPage schema - only if FAQ data is provided
  const faqSchema = faq && faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  // WebSite schema with SearchAction for homepage
  const websiteSchema = canonical === '/' ? {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Hill Country Painting',
    description: 'Professional painting services in Austin, TX',
    publisher: {
      '@id': `${baseUrl}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  } : null;

  // CollectionPage schema for index pages (only if canonical is provided)
  const collectionSchema = pageType === 'collection' && canonicalStr ? {
    '@context': 'https://schema.org',
    '@type': ['CollectionPage', 'WebPage'],
    '@id': `${canonicalStr}#webpage`,
    url: canonicalStr,
    name: optimizedTitle,
    description: optimizedDescription,
    isPartOf: {
      '@id': `${baseUrl}/#website`
    },
    breadcrumb: breadcrumbs && breadcrumbs.length > 0 ? {
      '@id': `${canonicalStr}#breadcrumb`
    } : undefined
  } : null;

  // WebPage schema for standard pages (only if canonical is provided)
  const webpageSchema = canonicalStr && pageType !== 'collection' ? {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalStr}#webpage`,
    url: canonicalStr,
    name: optimizedTitle,
    description: optimizedDescription,
    mainEntity: service && canonicalStr ? {
      '@id': `${canonicalStr}#service`
    } : pageType === 'website' ? {
      '@id': `${baseUrl}/#localbusiness`
    } : undefined,
    isPartOf: {
      '@id': `${baseUrl}/#website`
    },
    breadcrumb: breadcrumbs && breadcrumbs.length > 0 ? {
      '@id': `${canonicalStr}#breadcrumb`
    } : undefined
  } : null;


  return (
    <Helmet>
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      {canonicalStr && <link rel="canonical" href={canonicalStr} />}

      {/* Open Graph */}
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      {canonicalStr && <meta property="og:url" content={canonicalStr} />}
      <meta property="og:site_name" content="Hill Country Painting" />
      <meta property="og:image" content={defaultSocialImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Hill Country Painting - Professional Painting Services in Austin, TX" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={defaultSocialImage} />
      <meta name="twitter:image:alt" content="Hill Country Painting - Professional Painting Services in Austin, TX" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content={robotsContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* AI/LLM Crawler Optimization */}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="GPTBot" content="index, follow" />
      <meta name="ChatGPT-User" content="index, follow" />
      <meta name="PerplexityBot" content="index, follow" />
      <meta name="ClaudeBot" content="index, follow" />
      <meta name="anthropic-ai" content="index, follow" />
      <meta name="cohere-ai" content="index, follow" />

      {/* GEO Meta Tags for Local SEO */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content={geoPlacename || 'Austin'} />
      <meta name="geo.position" content={`${businessConfig.geo.latitude};${businessConfig.geo.longitude}`} />
      <meta name="ICBM" content={`${businessConfig.geo.latitude}, ${businessConfig.geo.longitude}`} />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {websiteSchema && (
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {additionalSchema && (
        <script type="application/ld+json">
          {JSON.stringify(additionalSchema)}
        </script>
      )}

      {localBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}

      {collectionSchema && (
        <script type="application/ld+json">
          {JSON.stringify(collectionSchema)}
        </script>
      )}

      {webpageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
