import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mountain, Waves, Home } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';

const Leander = () => {
  const leanderFAQs = [
    {
      question: 'Do you work with Leander\'s lakefront properties?',
      answer: 'Yes, we have extensive experience painting homes near Lake Travis and other Hill Country waterfront properties. We use moisture-resistant paints and understand the unique challenges of lakefront homes including humidity and UV exposure.'
    },
    {
      question: 'Can you handle Leander\'s HOA requirements?',
      answer: 'Absolutely. Many Leander neighborhoods like Crystal Falls, Summerlyn, and Travisso have HOA guidelines. We work closely with homeowners to ensure all color selections and work meet community standards.'
    },
    {
      question: 'How do you handle Leander\'s rapid growth?',
      answer: 'Leander is one of the fastest-growing cities in the nation. We serve both new construction homes and established properties, from historic Old Town Leander to the newest developments along Crystal Falls Parkway.'
    }
  ];

  return (
    <>
      <SEO
        title="Leander Painting Services | Hill Country Painters | Hill Country Painting"
        description="Professional painting services in Leander, TX. Expert interior and exterior painting for Crystal Falls, Summerlyn, and all Leander neighborhoods. Quality craftsmanship for Hill Country homes and lakefront properties."
        canonical="/service-areas/leander"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Leander', url: '/service-areas/leander' }
        ]}
        service={{
          name: 'Leander Professional Painting Services',
          description: 'Professional residential and commercial painting services throughout Leander, Texas. Specializing in Hill Country homes, lakefront properties, HOA-compliant work, and new construction. Expert painters serving Leander with quality craftsmanship.',
          areaServed: ['Leander', 'Crystal Falls', 'Summerlyn', 'Travisso', 'Old Town Leander', 'Mason Hills', 'Benbrook Ranch']
        }}
        faq={leanderFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/IMG_4398_result_result.jpg"
            alt="Professional Leander Hill Country painting services"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Leander, TX',
              latitude: 30.5788,
              longitude: -97.8531,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Leander Hill Country Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Expert painting for Leander's Hill Country homes. From Crystal Falls to Summerlyn, we serve all Leander neighborhoods with exceptional craftsmanship. Lakefront property specialists, HOA-compliant work, and quality finishes for one of America's fastest-growing cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  Get Free Leander Estimate
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
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">300+</div>,
            value: "300+",
            label: "Leander Projects"
          },
          {
            icon: <Mountain className="w-8 h-8 text-deep-600" />,
            value: "Hill Country",
            label: "Specialists"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          },
          {
            icon: <Waves className="w-8 h-8 text-deep-600" />,
            value: "Lakefront",
            label: "Experts"
          }
        ]}
      />

      <ServicesGrid
        title="Leander Painting Services"
        subtitle="Professional craftsmanship for every Leander home"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-900 mb-4">
              Leander Neighborhoods We Serve
            </h2>
            <p className="text-xl text-slate-600">
              Expert painting throughout Leander's Hill Country communities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <Mountain className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-deep-900 mb-2">Crystal Falls</h3>
              <p className="text-slate-600">Professional painting for Crystal Falls master-planned community with HOA compliance and premium finishes.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <Waves className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-deep-900 mb-2">Lakefront Properties</h3>
              <p className="text-slate-600">Expert painting for homes near Lake Travis with moisture-resistant and UV-protective coatings.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <Home className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-deep-900 mb-2">Old Town Leander</h3>
              <p className="text-slate-600">Quality painting for established Leander neighborhoods and historic homes.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Leander Home?"
        subtitle="Get a free estimate from Leander's trusted Hill Country painting professionals"
        primaryCTA={{
          text: "Get Free Estimate",
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

export default Leander;
