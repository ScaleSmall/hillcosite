import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { businessConfig } from '../config/business';

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
    areaServed: string[];
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
}

const SEO = ({ title, description, canonical, robots, pageType, breadcrumbs, service, faq, product, geoPlacename, includeLocalBusiness, aggregateRating }: SEOProps) => {
  const baseUrl = 'https://www.hillcopaint.com';
  // Ensure canonical URL matches sitemap format exactly (no trailing slash unless root)
  // Only compute canonicalStr if canonical prop is provided
  const canonicalStr = canonical
    ? (canonical === '/' ? `${baseUrl}/` : `${baseUrl}${canonical}`)
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

  // Ensure title is optimized for length (50-60 chars ideal)
  const optimizedTitle = String(title).length > 60 ? String(title).slice(0, 57) + '...' : String(title);

  // Ensure description is optimized for length (150-155 chars ideal) - STRICT
  const optimizedDescription = String(description).length > 155 ? String(description).slice(0, 152) + '...' : String(description);

  // Ensure robots is always a string
  const robotsContent = String(robots || "index, follow");

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
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78681',
      addressCountry: 'US'
    },
    sameAs: [
      'https://www.facebook.com/Hillcopaint',
      'https://www.instagram.com/hill_country_painting_austin/',
      'https://x.com/Hill_Co_Paint',
      'https://www.youtube.com/@HillCountryPaintingAustin',
      'https://www.tiktok.com/@hillco_painting_austin'
    ]
  };

  // LocalBusiness schema - only if requested (for homepage or service area pages)
  const localBusinessSchema = includeLocalBusiness ? {
    '@context': 'https://schema.org',
    '@type': 'PaintingContractor',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'Hill Country Painting',
    url: baseUrl,
    telephone: '(512) 240-2246',
    email: 'info@hillcopaint.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78681',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.2672,
      longitude: -97.7431
    },
    areaServed: [
      { '@type': 'City', name: 'Austin' },
      { '@type': 'City', name: 'Round Rock' },
      { '@type': 'City', name: 'Georgetown' },
      { '@type': 'City', name: 'Leander' },
      { '@type': 'City', name: 'Pflugerville' },
      { '@type': 'City', name: 'Lakeway' },
      { '@type': 'City', name: 'Bee Cave' },
      { '@type': 'City', name: 'Taylor' },
      { '@type': 'City', name: 'Barton Creek' },
      { '@type': 'City', name: 'West Lake Hills' }
    ],
    openingHours: 'Mo-Fr 08:00-17:00',
    sameAs: [
      'https://www.facebook.com/Hillcopaint',
      'https://www.instagram.com/hill_country_painting_austin/',
      'https://x.com/Hill_Co_Paint',
      'https://www.youtube.com/@HillCountryPaintingAustin',
      'https://www.tiktok.com/@hillco_painting_austin'
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
  const serviceSchema = service ? (() => {
    // Build base service schema
    const baseSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: 'Hill Country Painting',
        telephone: '(512) 240-2246',
        email: 'info@hillcopaint.com',
        url: baseUrl
      },
      areaServed: service.areaServed.map(area => ({
        '@type': 'City',
        name: area
      })),
      serviceType: service.name,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.name} Services`,
        itemListElement: [{
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name
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
    '@type': 'CollectionPage',
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
  const webpageSchema = canonicalStr && ((pageType !== 'collection' && pageType !== 'website' && canonical !== '/') ||
                        (pageType === 'service' || pageType === 'article')) ? {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
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
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Hill Country Painting - Professional Painting Services in Austin, TX" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
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
      <meta name="geo.position" content="30.2672;-97.7431" />
      <meta name="ICBM" content="30.2672, -97.7431" />

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