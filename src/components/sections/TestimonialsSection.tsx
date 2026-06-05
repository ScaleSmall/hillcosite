import React from 'react';
import { Star } from 'lucide-react';
import { businessConfig } from '../../config/business';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  structuredReviews?: boolean;
  reviewedItem?: {
    type?: 'LocalBusiness' | 'Service';
    name: string;
    url?: string;
    serviceType?: string;
    areaServed?: string;
  };
}

const toAbsoluteUrl = (url?: string) => {
  if (!url) return businessConfig.website;
  if (/^https?:\/\//i.test(url)) return url;
  return `${businessConfig.website}${url.startsWith('/') ? url : `/${url}`}`;
};

const TestimonialsSection = ({ title, subtitle, testimonials, structuredReviews = false, reviewedItem }: TestimonialsSectionProps) => {
  const reviewTarget = reviewedItem || {
    type: 'LocalBusiness' as const,
    name: businessConfig.name,
    url: businessConfig.website,
    areaServed: businessConfig.serviceArea
  };

  return (
    <section className="section-padding bg-brand-coral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-brand-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="card p-6 relative group overflow-hidden border-b-4 border-brand-regentGray20 hover:border-brand-azure transition-colors duration-300"
              itemScope={structuredReviews || undefined}
              itemType={structuredReviews ? 'https://schema.org/Review' : undefined}
            >
              {/* Highlight bar on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-azure to-brand-azureDark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {structuredReviews && (
                reviewTarget.type === 'Service' ? (
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service" itemID={toAbsoluteUrl(reviewTarget.url)} className="sr-only">
                    <span itemProp="name">{reviewTarget.name}</span>
                    <span itemProp="url">{toAbsoluteUrl(reviewTarget.url)}</span>
                    {reviewTarget.serviceType && <span itemProp="serviceType">{reviewTarget.serviceType}</span>}
                    <span itemProp="areaServed">{reviewTarget.areaServed || businessConfig.serviceArea}</span>
                    <span itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness" itemID={`${businessConfig.website}/#localbusiness`}>
                      <span itemProp="name">{businessConfig.name}</span>
                      <span itemProp="url">{businessConfig.website}</span>
                      <span itemProp="telephone">{businessConfig.phone}</span>
                      <span itemProp="sameAs">{businessConfig.googleBusinessProfileUrl}</span>
                      <span itemProp="hasMap">{businessConfig.googleBusinessProfileUrl}</span>
                      <span itemProp="identifier" itemScope itemType="https://schema.org/PropertyValue">
                        <span itemProp="name">Google Knowledge Graph ID</span>
                        <span itemProp="propertyID">kgmid</span>
                        <span itemProp="value">{businessConfig.googleKnowledgeGraphId}</span>
                        <span itemProp="url">{businessConfig.googleBusinessProfileUrl}</span>
                      </span>
                    </span>
                  </div>
                ) : (
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness" itemID={`${businessConfig.website}/#localbusiness`} className="sr-only">
                    <span itemProp="name">{businessConfig.name}</span>
                    <span itemProp="url">{businessConfig.website}</span>
                    <span itemProp="telephone">{businessConfig.phone}</span>
                    <span itemProp="areaServed">{reviewTarget.areaServed || 'Greater Austin Area'}</span>
                    <span itemProp="sameAs">{businessConfig.googleBusinessProfileUrl}</span>
                    <span itemProp="hasMap">{businessConfig.googleBusinessProfileUrl}</span>
                    <span itemProp="identifier" itemScope itemType="https://schema.org/PropertyValue">
                      <span itemProp="name">Google Knowledge Graph ID</span>
                      <span itemProp="propertyID">kgmid</span>
                      <span itemProp="value">{businessConfig.googleKnowledgeGraphId}</span>
                      <span itemProp="url">{businessConfig.googleBusinessProfileUrl}</span>
                    </span>
                  </div>
                )
              )}

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-azureDark to-brand-azure text-white rounded-full flex items-center justify-center font-semibold mr-4 shadow-md">
                  {testimonial.initials}
                </div>
                <div itemProp={structuredReviews ? 'author' : undefined} itemScope={structuredReviews || undefined} itemType={structuredReviews ? 'https://schema.org/Person' : undefined}>
                  <div className="font-semibold text-brand-gray-900" itemProp={structuredReviews ? 'name' : undefined}>{testimonial.name}</div>
                  <div className="text-sm text-brand-gray-600">{testimonial.location}</div>
                </div>
              </div>
              <div className="flex items-center mb-4" itemProp={structuredReviews ? 'reviewRating' : undefined} itemScope={structuredReviews || undefined} itemType={structuredReviews ? 'https://schema.org/Rating' : undefined}>
                {structuredReviews && (
                  <>
                    <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                    <meta itemProp="bestRating" content="5" />
                    <meta itemProp="worstRating" content="1" />
                  </>
                )}
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-coral fill-current" />
                ))}
              </div>
              <p className="text-brand-gray-700 leading-body" itemProp={structuredReviews ? 'reviewBody' : undefined}>
                "{testimonial.text}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
