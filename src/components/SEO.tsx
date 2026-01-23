import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { businessConfig, hasValidRating } from '../config/business';

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
  business?: {
    name: string;
    type?: string;
    telephone?: string;
    email?: string;
    address?: {
      streetAddress?: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;
      addressCountry?: string;
    };
    aggregateRating?: {
      ratingValue: string;
      reviewCount: string;
    };
    reviews?: Array<{
      author: string;
      rating: string;
      text: string;
    }>;
  };
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
  testimonials?: Array<{
    name: string;
    rating: number;
    text: string;
    location?: string;
  }>;
  geoPlacename?: string;
}

const SEO = ({ title, description, canonical, robots, pageType, breadcrumbs, service, faq, business, product, testimonials, geoPlacename }: SEOProps) => {
  const baseUrl = 'https://www.hillcopaint.com';
  // Ensure canonical URL matches sitemap format exactly (no trailing slash unless root)
  const canonicalStr = canonical === '/'
    ? `${baseUrl}/`
    : `${baseUrl}${canonical}`;

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
    name: 'Hill Country Painting',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    telephone: '(512) 240-2246',
    email: 'info@hillcopaint.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US'
    },
    sameAs: [
      businessConfig.googleBusinessProfileUrl,
      'https://www.facebook.com/Hillcopaint',
      'https://www.instagram.com/hill_country_painting_austin/',
      'https://x.com/Hill_Co_Paint',
      'https://www.youtube.com/@HillCountryPaintingAustin',
      'https://www.tiktok.com/@hillco_painting_austin',
      'https://www.hillcopaint.com'
    ]
  };

  const localBusinessSchema = canonical === '/' ? {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'Hill Country Painting',
    image: `${baseUrl}/logo.png`,
    logo: `${baseUrl}/logo.png`,
    url: baseUrl,
    telephone: '(512) 240-2246',
    email: 'info@hillcopaint.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.5083,
      longitude: -97.6789
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Austin',
        '@id': 'https://en.wikipedia.org/wiki/Austin,_Texas'
      },
      {
        '@type': 'City',
        name: 'Round Rock',
        '@id': 'https://en.wikipedia.org/wiki/Round_Rock,_Texas'
      },
      {
        '@type': 'City',
        name: 'Georgetown',
        '@id': 'https://en.wikipedia.org/wiki/Georgetown,_Texas'
      },
      {
        '@type': 'City',
        name: 'Cedar Park',
        '@id': 'https://en.wikipedia.org/wiki/Cedar_Park,_Texas'
      },
      {
        '@type': 'City',
        name: 'Leander',
        '@id': 'https://en.wikipedia.org/wiki/Leander,_Texas'
      },
      {
        '@type': 'City',
        name: 'Pflugerville',
        '@id': 'https://en.wikipedia.org/wiki/Pflugerville,_Texas'
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      }
    ],
    paymentAccepted: 'Cash, Check, Credit Card',
    currenciesAccepted: 'USD'
  } : null;

  // BreadcrumbList schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => {
      const listItem: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name
      };

      if (crumb.url) {
        listItem.item = `${baseUrl}${crumb.url}`;
      }

      return listItem;
    })
  } : null;

  // Service schema - only if service data is provided
  const serviceSchema = service ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Hill Country Painting',
      telephone: '(512) 240-2246',
      email: 'info@hillcopaint.com'
    },
    areaServed: service.areaServed.map(area => ({
      '@type': 'City',
      name: area
    })),
    serviceType: service.name
  } : null;

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

  // CollectionPage schema for index pages
  const collectionSchema = pageType === 'collection' ? {
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

  // WebPage schema for standard pages (not website or collection types)
  // Default to WebPage if no pageType is specified, unless it's the homepage
  const webpageSchema = (pageType !== 'collection' && pageType !== 'website' && canonical !== '/') ||
                        (pageType === 'service' || pageType === 'article') ? {
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

  // Business schema - only if business data is provided
  const businessSchema = business ? {
    '@context': 'https://schema.org',
    '@type': business.type || 'LocalBusiness',
    name: business.name,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    ...(business.telephone && { telephone: business.telephone }),
    ...(business.email && { email: business.email }),
    ...(business.address && {
      address: {
        '@type': 'PostalAddress',
        ...(business.address.streetAddress && { streetAddress: business.address.streetAddress }),
        ...(business.address.addressLocality && { addressLocality: business.address.addressLocality }),
        ...(business.address.addressRegion && { addressRegion: business.address.addressRegion }),
        ...(business.address.postalCode && { postalCode: business.address.postalCode }),
        ...(business.address.addressCountry && { addressCountry: business.address.addressCountry })
      }
    }),
    ...(business.aggregateRating && hasValidRating(business.aggregateRating.ratingValue) && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: business.aggregateRating.ratingValue,
        reviewCount: business.aggregateRating.reviewCount,
        bestRating: '5',
        worstRating: '1'
      }
    }),
    ...(business.reviews && business.reviews.length > 0 && {
      review: business.reviews.map(review => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating,
          bestRating: '5'
        },
        reviewBody: review.text
      }))
    })
  } : null;

  // Product schema - only if product data is provided
  const productSchema = product ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    category: product.category,
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      price: product.priceRange,
      priceCurrency: product.priceCurrency,
      availability: product.availability,
      url: `${baseUrl}${product.url}`,
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: product.priceRange,
        priceCurrency: product.priceCurrency
      },
      seller: {
        '@type': 'Organization',
        name: product.brand,
        telephone: '(512) 240-2246',
        email: 'info@hillcopaint.com'
      }
    },
    warranty: {
      '@type': 'WarrantyPromise',
      durationOfWarranty: {
        '@type': 'QuantitativeValue',
        value: '2',
        unitText: 'year'
      },
      warrantyScope: product.warranty
    },
    areaServed: product.areaServed.map(area => ({
      '@type': 'City',
      name: area
    })),
    ...(testimonials && testimonials.length > 0 && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1),
        reviewCount: String(testimonials.length),
        bestRating: '5',
        worstRating: '1'
      },
      review: testimonials.map(testimonial => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: testimonial.name
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(testimonial.rating),
          bestRating: '5'
        },
        reviewBody: testimonial.text,
        ...(testimonial.location && {
          locationCreated: {
            '@type': 'Place',
            name: testimonial.location
          }
        })
      }))
    })
  } : null;

  return (
    <Helmet>
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      <link rel="canonical" href={canonicalStr} />
      
      {/* Open Graph */}
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:type" content={pageType === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalStr} />
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

      {businessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      )}

      {localBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}

      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;