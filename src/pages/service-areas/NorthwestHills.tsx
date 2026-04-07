import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, Shield, Paintbrush, Home, Building, TreeDeciduous } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';

const NorthwestHills = () => {
  const localFAQs = [
    {
      question: "What makes painting Northwest Hills homes different from newer neighborhoods?",
      answer: "Northwest Hills homes typically have mature landscaping, older trim details, and surfaces that require more extensive prep than newer subdivisions. Many properties feature wood siding, cedar trim, and established trees that create shade patterns affecting paint longevity. We plan every project around access, protection of landscaping, and detailed preparation work."
    },
    {
      question: "How do you handle painting around mature trees and landscaping?",
      answer: "We use protective ground covers, careful drop cloth placement, and work around root zones to protect established plantings. For homes with dense tree coverage, we assess moisture patterns and may recommend specific primer and paint combinations to address humidity-related issues."
    },
    {
      question: "What prep work is needed for older Northwest Hills exteriors?",
      answer: "Older exteriors often require thorough pressure washing, scraping of loose paint, wood repair, caulking of gaps and cracks, and primer application to bare wood. We inspect for rot, especially around windows and trim, and address any wood damage before painting begins."
    },
    {
      question: "How long does exterior paint last in Northwest Hills?",
      answer: "With proper preparation and premium paint, exterior paint in Northwest Hills typically lasts 7-10 years. Homes with significant tree coverage may see slightly shorter lifespans due to moisture and debris. We provide a 2-year warranty on materials and workmanship for all projects."
    },
    {
      question: "Do you coordinate with nearby Allandale and Crestview projects?",
      answer: "Yes, we regularly schedule projects across Northwest Hills, Allandale, Crestview, and Quail Creek. This allows us to optimize crew scheduling and sometimes offer scheduling flexibility when we have multiple projects in the same area."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO
        title="Northwest Hills Painting Services | North Austin Experts | Hill Country Painting"
        description="Professional painting services in Northwest Hills, Austin. Expert interior and exterior painting for established neighborhoods. Trusted by Northwest Hills homeowners for quality craftsmanship."
        canonical="/service-areas/northwest-hills"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Northwest Hills', url: '/service-areas/northwest-hills' }
        ]}
        service={{
          name: 'Northwest Hills Painting Services',
          description: 'Professional residential painting services throughout Northwest Hills, Austin. Specializing in established neighborhoods, mid-century modern homes, and quality finishes. Expert painters serving Northwest Hills with exceptional quality.',
          areaServed: ['Northwest Hills', 'Allandale', 'Crestview', 'Quail Creek']
        }}
        additionalSchema={faqSchema}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/hill-country-home-exterior-painting.png"
            alt="Professional Northwest Hills painting services"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Northwest Hills, Austin, TX',
              latitude: 30.3647,
              longitude: -97.7614,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Northwest Hills Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Professional painting for Northwest Hills' established homes. Quality craftsmanship for North Austin neighborhoods with mid-century modern expertise and flexible scheduling.
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

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">
            Painting Challenges Specific to Northwest Hills Homes
          </h2>
          <div className="space-y-5 text-lg text-brand-gray-700 leading-relaxed">
            <p>
              Many Northwest Hills homes were built in the 1960s through 1980s, featuring architectural styles from mid-century modern to traditional ranch. These established properties often have mature landscaping, partial shade from large oak and pecan trees, and original trim details that require more careful preparation than newer construction.
            </p>
            <p>
              The combination of older building materials and dense tree coverage creates unique moisture patterns. We assess each property for signs of wood rot, peeling paint near roof lines, and areas where shade prevents proper drying. Our prep process addresses these issues before any paint is applied.
            </p>
            <p>
              We also regularly coordinate projects in nearby Allandale, Crestview, and Quail Creek neighborhoods, which share similar architectural characteristics and preparation requirements. This area familiarity helps us plan accurate timelines and efficient crew scheduling.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
            What We Paint in Northwest Hills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Home className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Single-Family Homes</h3>
              <p className="text-brand-gray-600">Complete interior and exterior painting for ranch homes, split-levels, and two-story properties throughout Northwest Hills.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Paintbrush className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Kitchen Cabinets</h3>
              <p className="text-brand-gray-600">Cabinet refinishing and painting to update dated wood cabinets without the cost of full replacement.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <TreeDeciduous className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Wood Trim & Siding</h3>
              <p className="text-brand-gray-600">Specialized preparation and painting for original wood siding, cedar trim, fascia boards, and decorative details.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Building className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Stucco & Masonry</h3>
              <p className="text-brand-gray-600">Proper preparation and coating for stucco exteriors and painted brick common in Northwest Hills architecture.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Deck & Fence Staining</h3>
              <p className="text-brand-gray-600">Protective staining for wooden decks, pergolas, and privacy fences exposed to Central Texas weather.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Clock className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-brand-gray-600">We coordinate around your schedule and work efficiently to minimize disruption to your household.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {localFAQs.map((faq, index) => (
              <div key={index} className="bg-brand-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-gray-900 mb-3">{faq.question}</h3>
                <p className="text-brand-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 text-center">
            Explore Nearby Areas & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Nearby Neighborhoods</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/areas/allandale-and-northwest-hills" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Allandale & Northwest Hills Hub
                  </Link>
                </li>
                <li>
                  <Link to="/areas/allandale-and-northwest-hills/allandale" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Allandale
                  </Link>
                </li>
                <li>
                  <Link to="/areas/allandale-and-northwest-hills/crestview" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Crestview
                  </Link>
                </li>
                <li>
                  <Link to="/areas/allandale-and-northwest-hills/quail-creek" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Quail Creek
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Helpful Guides</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/guides/painting-costs-austin" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Austin Painting Costs Guide
                  </Link>
                </li>
                <li>
                  <Link to="/guides/best-paint-texas-heat" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Best Paint for Texas Heat
                  </Link>
                </li>
                <li>
                  <Link to="/guides/how-often-paint-central-texas" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    How Often to Paint Your Home
                  </Link>
                </li>
                <li>
                  <Link to="/guides/hoa-color-tips-austin" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    HOA Color Approval Tips
                  </Link>
                </li>
              </ul>
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

export default NorthwestHills;
