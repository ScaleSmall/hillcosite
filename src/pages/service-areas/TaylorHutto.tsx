import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Wheat, Home, TrendingUp } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';

const TaylorHutto = () => {
  const taylorHuttoFAQs = [
    {
      question: 'Do you serve both Taylor and Hutto?',
      answer: 'Yes, we serve both Taylor and Hutto along the Highway 79 corridor. From historic downtown Taylor to the rapidly growing Hutto communities, we provide consistent quality service throughout both cities.'
    },
    {
      question: 'Can you handle Taylor\'s historic downtown properties?',
      answer: 'Absolutely. Taylor has a rich history and beautiful historic downtown district. We have experience with historic properties and understand preservation techniques while providing modern quality and durability.'
    },
    {
      question: 'How do you handle Hutto\'s rapid growth and new construction?',
      answer: 'Hutto is one of the fastest-growing cities in Texas. We have extensive experience with new construction painting and understand the needs of growing communities, from brand new developments to established neighborhoods.'
    }
  ];

  return (
    <>
      <SEO
        title="Taylor & Hutto Painting Services | Highway 79 Corridor | Hill Country Painting"
        description="Professional painting services in Taylor and Hutto, TX. Expert interior and exterior painting for historic Taylor downtown and growing Hutto neighborhoods. Quality craftsmanship for Williamson County communities."
        canonical="/service-areas/taylor-hutto"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Taylor & Hutto', url: '/service-areas/taylor-hutto' }
        ]}
        service={{
          name: 'Taylor & Hutto Professional Painting Services',
          description: 'Professional residential and commercial painting services throughout Taylor and Hutto, Texas. Specializing in historic properties, new construction, and growing communities. Expert painters serving the Highway 79 corridor with quality craftsmanship.',
          areaServed: ['Taylor', 'Hutto', 'Downtown Taylor', 'Heritage Park', 'Brushy Creek', 'Star Ranch']
        }}
        faq={taylorHuttoFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Professional Taylor and Hutto painting services"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Taylor, TX',
              latitude: 30.5708,
              longitude: -97.4094,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Taylor & Hutto Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Expert painting for Taylor and Hutto communities along Highway 79. From historic downtown Taylor to rapidly growing Hutto neighborhoods, we serve Williamson County with exceptional craftsmanship. Historic preservation expertise and new construction specialists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  Get Free Taylor-Hutto Estimate
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

      <StatsAndTrust
        stats={[
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">250+</div>,
            value: "250+",
            label: "Taylor-Hutto Projects"
          },
          {
            icon: <Wheat className="w-8 h-8 text-brand-azureDark" />,
            value: "Historic",
            label: "Preservation"
          },
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          },
          {
            icon: <TrendingUp className="w-8 h-8 text-brand-azureDark" />,
            value: "Growth",
            label: "Specialists"
          }
        ]}
      />

      <ServicesGrid
        title="Taylor & Hutto Painting Services"
        subtitle="Professional craftsmanship for every community"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-4">
              Taylor & Hutto Communities We Serve
            </h2>
            <p className="text-xl text-brand-gray-600">
              Expert painting throughout the Highway 79 corridor
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-gray-50 p-6 rounded-lg">
              <Wheat className="w-12 h-12 text-brand-azure mb-4" />
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Historic Taylor</h3>
              <p className="text-brand-gray-600">Professional painting for Taylor's historic downtown and established neighborhoods with preservation expertise.</p>
            </div>
            <div className="bg-brand-gray-50 p-6 rounded-lg">
              <TrendingUp className="w-12 h-12 text-brand-azure mb-4" />
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Growing Hutto</h3>
              <p className="text-brand-gray-600">Expert painting for Hutto's rapidly expanding communities and new construction developments.</p>
            </div>
            <div className="bg-brand-gray-50 p-6 rounded-lg">
              <Home className="w-12 h-12 text-brand-azure mb-4" />
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Star Ranch</h3>
              <p className="text-brand-gray-600">Quality painting for Star Ranch and other Hutto master-planned communities.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Taylor or Hutto Home?"
        subtitle="Get a consultation from Taylor-Hutto's trusted painting professionals"
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

export default TaylorHutto;
