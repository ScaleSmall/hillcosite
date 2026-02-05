import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';

const Lakeway = () => {
  return (
    <>
      <SEO
        title="Lakeway Painting Services | Lake Travis Experts | Hill Country Painting"
        description="Professional painting services in Lakeway, Texas. Expert interior and exterior painting for Lake Travis area homes. Trusted by Lakeway homeowners for lakefront and Hill Country expertise."
        canonical="/service-areas/lakeway"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Lakeway', url: '/service-areas/lakeway' }
        ]}
        service={{
          name: 'Lakeway Painting Services',
          description: 'Professional residential painting services throughout Lakeway, Texas. Specializing in Lake Travis area homes, waterfront properties, and Hill Country architecture. Expert painters serving Lakeway with exceptional quality.',
          areaServed: ['Lakeway', 'Rough Hollow', 'The Hills', 'Serene Hills', 'Bee Cave']
        }}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/hill-country-home-exterior-painting.jpg"
            alt="Professional Lakeway painting services"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Lakeway, TX',
              latitude: 30.3630,
              longitude: -97.9781,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Lakeway Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Professional painting for Lakeway's Lake Travis area homes. Expert craftsmanship for lakefront and Hill Country properties with weather-resistant finishes and resort area experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  Request an Estimate
                </Link>
                <a href="tel:(512)240-2246" className="inline-flex items-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  <Phone className="w-5 h-5 mr-2" />
                  (512) 240-2246
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsAndTrust />
      <ServicesGrid />
      <CTABanner />
    </>
  );
};

export default Lakeway;
