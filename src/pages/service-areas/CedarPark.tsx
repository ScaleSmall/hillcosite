import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Trees, Home, Building2 } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';

const CedarPark = () => {
  const cedarParkFAQs = [
    {
      question: 'Do you work with Cedar Park HOA requirements?',
      answer: 'Yes, Cedar Park has many HOA-governed communities like Buttercup Creek, Brushy Creek, and Forest Oaks. We understand HOA approval processes and ensure all exterior work meets community standards and guidelines.'
    },
    {
      question: 'How do you handle painting in Cedar Park\'s growing neighborhoods?',
      answer: 'Cedar Park is one of the fastest-growing cities in Texas. We have extensive experience with both new construction painting and established homes, from the newer developments near Lakeline Mall to older neighborhoods near Cypress Creek.'
    },
    {
      question: 'Can you coordinate around Cedar Park events and festivals?',
      answer: 'Absolutely. We work around major Cedar Park events like the Fourth of July celebration at Elizabeth M. Milburn Park and other community activities to ensure smooth project completion.'
    }
  ];

  return (
    <>
      <SEO
        title="Cedar Park Painting Services | Professional Painters | Hill Country Painting"
        description="Professional painting services in Cedar Park, TX. Expert interior and exterior painting for Buttercup Creek, Brushy Creek, and all Cedar Park neighborhoods. Quality craftsmanship for one of Texas's fastest-growing cities."
        canonical="/service-areas/cedar-park"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Cedar Park', url: '/service-areas/cedar-park' }
        ]}
        service={{
          name: 'Cedar Park Professional Painting Services',
          description: 'Professional residential and commercial painting services throughout Cedar Park, Texas. Specializing in HOA-compliant work, new construction, and established neighborhoods. Expert painters serving Cedar Park with quality craftsmanship.',
          areaServed: ['Cedar Park', 'Buttercup Creek', 'Brushy Creek', 'Forest Oaks', 'Cedar Park Town Center', 'Lakeline', 'Cypress Creek']
        }}
        faq={cedarParkFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Professional Cedar Park painting services"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Cedar Park, TX',
              latitude: 30.5052,
              longitude: -97.8203,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Cedar Park Professional Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Expert painting for one of Texas's fastest-growing cities. From Buttercup Creek to Brushy Creek, we serve all Cedar Park neighborhoods with exceptional craftsmanship. HOA-compliant work, new construction expertise, and quality finishes for established homes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  Get Free Cedar Park Estimate
                </Link>
                <a href="tel:(512)240-2246" className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  <Phone className="w-5 h-5 mr-2" />
                  (512) 240-2246
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsAndTrust
        stats={[
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">400+</div>,
            value: "400+",
            label: "Cedar Park Projects"
          },
          {
            icon: <Trees className="w-8 h-8 text-deep-600" />,
            value: "Local",
            label: "Cedar Park Experts"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          },
          {
            icon: <Home className="w-8 h-8 text-deep-600" />,
            value: "HOA",
            label: "Compliant"
          }
        ]}
      />

      <ServicesGrid
        title="Cedar Park Painting Services"
        subtitle="Professional craftsmanship for every Cedar Park home"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-900 mb-4">
              Cedar Park Neighborhoods We Serve
            </h2>
            <p className="text-xl text-slate-600">
              Expert painting throughout Cedar Park's diverse communities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <Trees className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-deep-900 mb-2">Buttercup Creek</h3>
              <p className="text-slate-600">Professional painting for Buttercup Creek homes with HOA compliance and quality finishes.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <Home className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-deep-900 mb-2">Brushy Creek</h3>
              <p className="text-slate-600">Expert painting for established Brushy Creek neighborhoods and new developments.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <Building2 className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-deep-900 mb-2">Cedar Park Town Center</h3>
              <p className="text-slate-600">Commercial and residential painting near Cedar Park's vibrant town center area.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Cedar Park Home?"
        subtitle="Get a consultation from Cedar Park's trusted painting professionals"
        primaryCTA={{
          text: "Get Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Call (512) 240-2246",
          href: "tel:(512)240-2246"
        }}
      />
    </>
  );
};

export default CedarPark;
