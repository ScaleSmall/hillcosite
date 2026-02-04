import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Shield, Clock, Star, CheckCircle } from 'lucide-react';
import SEO from '../SEO';
import ImageWithGeo from '../ImageWithGeo';
import ProofPointsSection from '../ProofPointsSection';
import QuickQuoteForm from '../QuickQuoteForm';
import SplitSection from '../sections/SplitSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import MiniFAQ from '../sections/MiniFAQ';
import CTABanner from '../sections/CTABanner';
import NAPMapSection from '../NAPMapSection';
import LocalSignals from '../LocalSignals';
import RelatedServices from '../RelatedServices';

export interface ServiceLocationConfig {
  service: {
    type: 'interior' | 'exterior' | 'cabinet' | 'commercial';
    name: string;
    slug: string;
  };
  location: {
    name: string;
    slug: string;
    zipCodes: string[];
    coordinates: { lat: number; lng: number };
    neighborhoods: string[];
    highlights: string[];
    serviceAreaSlug: string;
  };
  content: {
    heroSubtitle: string;
    introText: string;
    benefits: string[];
    processSteps: Array<{ title: string; description: string }>;
    faqs: Array<{ question: string; answer: string }>;
    testimonials: Array<{
      name: string;
      location: string;
      rating: number;
      text: string;
      initials: string;
    }>;
  };
  images: {
    hero: string;
    heroAlt: string;
    secondary: string;
    secondaryAlt: string;
  };
}

interface Props {
  config: ServiceLocationConfig;
}

const ServiceLocationPage: React.FC<Props> = ({ config }) => {
  const { service, location, content, images } = config;

  const canonicalPath = `/${service.slug}-${location.slug}`;
  const pageTitle = `${service.name} ${location.name} TX | Professional Painters | Hill Country Painting`;
  const metaDescription = `Expert ${service.name.toLowerCase()} services in ${location.name}, Texas. Licensed, insured painters with 2-year warranty. Serving ${location.neighborhoods.slice(0, 3).join(', ')} & more. Consultations available.`;

  const relatedServices = [
    service.type !== 'interior' && {
      title: `Interior Painting ${location.name}`,
      description: `Transform your ${location.name} home's interior with professional painting.`,
      href: `/interior-painting-${location.slug}`
    },
    service.type !== 'exterior' && {
      title: `Exterior Painting ${location.name}`,
      description: `Weather-resistant exterior painting for ${location.name} homes.`,
      href: `/exterior-painting-${location.slug}`
    },
    service.type !== 'cabinet' && {
      title: `Cabinet Refinishing ${location.name}`,
      description: `Professional cabinet painting and refinishing in ${location.name}.`,
      href: `/cabinet-refinishing-${location.slug}`
    },
    service.type !== 'commercial' && {
      title: `Commercial Painting ${location.name}`,
      description: `Professional commercial painting services in ${location.name}.`,
      href: `/commercial-painting-${location.slug}`
    }
  ].filter(Boolean) as Array<{ title: string; description: string; href: string }>;

  return (
    <>
      <SEO
        title={pageTitle}
        description={metaDescription}
        canonical={canonicalPath}
        pageType="service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.name, url: `/services/${service.slug === 'cabinet-refinishing' ? 'cabinet-refinishing' : service.slug === 'commercial-painting' ? 'commercial' : service.slug}` },
          { name: `${location.name}`, url: canonicalPath }
        ]}
        service={{
          name: `${service.name} ${location.name}`,
          description: `Professional ${service.name.toLowerCase()} services in ${location.name}, Texas. Serving ${location.neighborhoods.join(', ')} and surrounding areas.`,
          areaServed: [location.name, ...location.neighborhoods]
        }}
        faq={content.faqs}
      />

      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src={images.hero}
            alt={images.heroAlt}
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: `${location.name}, TX`,
              latitude: location.coordinates.lat,
              longitude: location.coordinates.lng,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="absolute bottom-8 left-8 z-20 hidden lg:flex flex-col items-center gap-2">
          <Link to="/financing" className="group block transition-transform duration-300 hover:scale-105">
            <img
              src="/financing-24-month-interest-free-badge.png"
              alt="Up to 24 months interest-free financing available"
              className="w-48 h-auto drop-shadow-2xl"
              width="192"
              height="192"
            />
          </Link>
        </div>

        <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2">
          <img
            src="/winner_best_of_round_rock_2025_award.jpg"
            alt="Winner Best of Round Rock 2025 Award"
            className="w-48 h-auto drop-shadow-2xl"
            width="192"
            height="192"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Serving {location.name} & {location.neighborhoods[0]}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              {service.name} in {location.name}, TX
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>2-Year Warranty</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Free {location.name} Estimate
              </Link>
              <a
                href="tel:(512)240-2246"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-colors duration-200 border border-white/30"
              >
                <Phone className="w-5 h-5 mr-2" />
                (512) 240-2246
              </a>
            </div>
          </div>
        </div>
      </section>

      <ProofPointsSection />

      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">
                Professional {service.name} in {location.name}
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>{content.introText}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {content.benefits.slice(0, 6).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-azure mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-4">
                  {location.name} Areas We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.neighborhoods.map((neighborhood, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-500">
                  ZIP Codes: {location.zipCodes.join(', ')}
                </p>
              </div>
            </div>
            <div className="lg:col-span-1">
              <QuickQuoteForm service={`${service.name} - ${location.name}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-4">
              Our {service.name} Process in {location.name}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional approach tailored for {location.name} homes and conditions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-brand-gray-300 transition-colors"
              >
                <div className="w-10 h-10 bg-brand-azure text-white rounded-lg flex items-center justify-center font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-brand-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitSection
        title={`Why Choose Hill Country Painting for ${location.name}?`}
        description={`We understand the unique needs of ${location.name} homeowners. From the local climate to neighborhood aesthetics, our team delivers painting solutions that protect and beautify your investment.`}
        benefits={location.highlights.map(text => ({ text }))}
        image={images.secondary}
        imageAlt={images.secondaryAlt}
        imageLeft={true}
      />

      <TestimonialsSection
        title={`${location.name} Customer Reviews`}
        testimonials={content.testimonials}
      />

      <NAPMapSection />

      <LocalSignals areaName={location.name} pageType="service" />

      <MiniFAQ
        title={`${service.name} FAQ - ${location.name}`}
        faqs={content.faqs}
      />

      <RelatedServices
        title={`Complete Painting Services in ${location.name}`}
        location={location.name}
        services={relatedServices}
      />

      <CTABanner
        title={`Ready for Professional ${service.name} in ${location.name}?`}
        subtitle={`Get a consultation from ${location.name}'s trusted painting professionals`}
        primaryCTA={{
          text: `Get ${location.name} Consultation`,
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Call (512) 240-2246',
          href: 'tel:(512)240-2246'
        }}
      />
    </>
  );
};

export default ServiceLocationPage;
