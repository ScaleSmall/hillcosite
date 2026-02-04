import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Award, Home, Sparkles } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';

const WestLakeHills = () => {
  const westLakeHillsFAQs = [
    {
      question: 'Do you specialize in luxury homes and high-end finishes?',
      answer: 'Yes, West Lake Hills is known for luxury properties and we have extensive experience with premium finishes, high-end materials, and the attention to detail required for upscale homes. We work with designers and architects to deliver exceptional results.'
    },
    {
      question: 'Can you work with strict HOA requirements in West Lake Hills?',
      answer: 'Absolutely. West Lake Hills has some of the most stringent HOA guidelines in the Austin area. We navigate these requirements expertly, ensuring all work meets community standards while delivering the premium quality your home deserves.'
    },
    {
      question: 'How do you handle the challenging terrain and hillside properties?',
      answer: 'West Lake Hills\' dramatic hillside locations require special equipment and expertise. We have the experience and tools necessary to safely and effectively paint homes on challenging terrain while protecting your landscaping and property.'
    }
  ];

  return (
    <>
      <SEO
        title="West Lake Hills Luxury Painting | Premium Painters | Hill Country Painting"
        description="Professional luxury painting services in West Lake Hills, TX. Expert interior and exterior painting for high-end homes with premium finishes. Trusted by West Lake Hills homeowners for exceptional craftsmanship."
        canonical="/service-areas/west-lake-hills"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'West Lake Hills', url: '/service-areas/west-lake-hills' }
        ]}
        service={{
          name: 'West Lake Hills Luxury Painting Services',
          description: 'Professional luxury residential painting services throughout West Lake Hills, Texas. Specializing in high-end homes, premium finishes, hillside properties, and strict HOA compliance. Expert painters serving West Lake Hills with exceptional quality.',
          areaServed: ['West Lake Hills', 'Westlake', 'Rob Roy', 'Eanes', 'Rollingwood']
        }}
        faq={westLakeHillsFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Professional West Lake Hills luxury painting services"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'West Lake Hills, TX',
              latitude: 30.2969,
              longitude: -97.8131,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                West Lake Hills Luxury Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Premium painting for West Lake Hills' most distinguished homes. Exceptional craftsmanship for luxury properties with the attention to detail your home deserves. Expert hillside property specialists, premium finishes, and HOA-compliant excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  Get Free West Lake Hills Estimate
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
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">200+</div>,
            value: "200+",
            label: "Luxury Projects"
          },
          {
            icon: <Award className="w-8 h-8 text-brand-azureDark" />,
            value: "Premium",
            label: "Specialists"
          },
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          },
          {
            icon: <Sparkles className="w-8 h-8 text-brand-azureDark" />,
            value: "High-End",
            label: "Finishes"
          }
        ]}
      />

      <ServicesGrid
        title="West Lake Hills Painting Services"
        subtitle="Premium craftsmanship for luxury homes"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-4">
              West Lake Hills Luxury Home Expertise
            </h2>
            <p className="text-xl text-slate-600">
              Premium painting services for West Lake Hills' finest properties
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <Award className="w-12 h-12 text-brand-azure mb-4" />
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Luxury Properties</h3>
              <p className="text-slate-600">Exceptional craftsmanship for high-end homes with premium materials and meticulous attention to detail.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <Home className="w-12 h-12 text-brand-azure mb-4" />
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Hillside Specialists</h3>
              <p className="text-slate-600">Expert painting for challenging hillside locations with proper equipment and safety protocols.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <Sparkles className="w-12 h-12 text-brand-azure mb-4" />
              <h3 className="text-xl font-semibold text-brand-gray-900 mb-2">Designer Collaboration</h3>
              <p className="text-slate-600">Work seamlessly with architects and designers to achieve your vision with precision execution.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your West Lake Hills Home?"
        subtitle="Get a consultation from West Lake Hills' trusted luxury painting professionals"
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

export default WestLakeHills;
