import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Mountain, Sun, Home, Paintbrush, Shield, TreePine } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';

const WestLakeHighlands = () => {
  const localFAQs = [
    {
      question: "What makes painting homes in Westlake Highlands different?",
      answer: "Westlake Highlands properties often sit on elevated terrain with greater sun and wind exposure than valley homes. Many feature Hill Country architecture with stucco, stone, and wood combinations that require different coating systems. We select products specifically suited to handle the increased UV exposure and temperature swings common at higher elevations."
    },
    {
      question: "How do you handle steep lots and elevated terrain?",
      answer: "We're experienced with the access challenges common to elevated Westlake properties. Our crews use proper scaffolding, extension ladders, and safety equipment for multi-story exteriors and sloped terrain. We also plan projects to protect hillside landscaping and minimize disruption to your property."
    },
    {
      question: "What prep is needed for stucco homes in Westlake Highlands?",
      answer: "Stucco requires thorough inspection for cracks and damage, proper cleaning, crack repair with elastomeric caulk, and priming as needed. We use breathable elastomeric coatings that flex with temperature changes while providing excellent UV protection and moisture resistance."
    },
    {
      question: "How do HOA requirements work in Westlake Highlands communities?",
      answer: "Many Westlake Highlands neighborhoods have HOA color guidelines. We can help you select colors within approved palettes and can provide samples and documentation to support your approval process. Our familiarity with local HOA requirements helps streamline the approval process."
    },
    {
      question: "Do you serve West Lake Hills, Rollingwood, and nearby areas?",
      answer: "Yes, we regularly work throughout the greater Westlake area including West Lake Hills, Rollingwood, Barton Creek, and Spanish Oaks. Our crews know the terrain, the architecture, and the preparation requirements specific to Hill Country properties in this region."
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
        title="West Lake Highlands Painting | Hill Country Experts | Hill Country Painting"
        description="Professional painting services in West Lake Highlands, Austin. Expert interior and exterior painting for Hill Country homes. Trusted by West Lake Highlands homeowners for quality craftsmanship."
        canonical="/service-areas/west-lake-highlands"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'West Lake Highlands', url: '/service-areas/west-lake-highlands' }
        ]}
        service={{
          name: 'West Lake Highlands Painting Services',
          description: 'Professional residential painting services throughout West Lake Highlands, Austin. Specializing in Hill Country homes, elevated terrain, and quality finishes. Expert painters serving West Lake Highlands with exceptional quality.',
          areaServed: ['West Lake Highlands', 'Lake Pointe', 'Hill Country', 'Scenic Brook']
        }}
        additionalSchema={faqSchema}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/hill-country-home-exterior-painting.png"
            alt="Professional West Lake Highlands painting services"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'West Lake Highlands, Austin, TX',
              latitude: 30.3278,
              longitude: -97.8283,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                West Lake Highlands Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Professional painting for West Lake Highlands' Hill Country homes. Expert craftsmanship for elevated properties with lake proximity expertise and premium finishes.
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
            Painting Considerations for Westlake Highlands Properties
          </h2>
          <div className="space-y-5 text-lg text-brand-gray-700 leading-relaxed">
            <p>
              Westlake Highlands sits on elevated terrain along the western edge of Austin, where Hill Country topography creates both stunning views and unique painting challenges. Homes here experience more direct sun exposure, greater temperature swings between day and night, and increased wind exposure compared to lower-lying areas.
            </p>
            <p>
              The architecture in Westlake Highlands often reflects the landscape, with stucco exteriors, stone accents, exposed wood beams, and earth-tone color palettes. These materials require specialized preparation and coating systems that can handle thermal expansion, UV degradation, and the moisture patterns created by the area's microclimate.
            </p>
            <p>
              Many properties also feature extensive outdoor living spaces, including covered patios, pergolas, and deck areas that require durable finishes. We understand how these elements interact with the main structure and plan coating systems that work together for lasting results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
            What We Paint in Westlake Highlands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Mountain className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Hill Country Homes</h3>
              <p className="text-brand-gray-600">Complete interior and exterior painting for homes designed to complement the Texas Hill Country landscape.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Sun className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Stucco & Stone</h3>
              <p className="text-brand-gray-600">Elastomeric coatings for stucco exteriors plus proper treatment for painted stone and masonry surfaces.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <TreePine className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Wood Elements</h3>
              <p className="text-brand-gray-600">Protective finishes for exposed beams, cedar trim, pergolas, and wood accents common to Hill Country architecture.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Paintbrush className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Cabinet Refinishing</h3>
              <p className="text-brand-gray-600">Transform kitchens and bathrooms with professional cabinet painting at a fraction of replacement cost.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Home className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Interior Painting</h3>
              <p className="text-brand-gray-600">Premium interior finishes for bedrooms, living areas, and throughout your home with detailed preparation.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">HOA Compliance</h3>
              <p className="text-brand-gray-600">We work within Westlake community guidelines and assist with HOA color approval documentation.</p>
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
              <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Greater Westlake Area</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/areas/west-lake-hills-and-rollingwood" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    West Lake Hills & Rollingwood Hub
                  </Link>
                </li>
                <li>
                  <Link to="/service-areas/west-lake-hills" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    West Lake Hills
                  </Link>
                </li>
                <li>
                  <Link to="/areas/west-lake-hills-and-rollingwood/rollingwood" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Rollingwood
                  </Link>
                </li>
                <li>
                  <Link to="/areas/barton-creek" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Barton Creek
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Helpful Guides</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/guides/best-paint-texas-heat" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Best Paint for Texas Heat
                  </Link>
                </li>
                <li>
                  <Link to="/guides/painting-costs-austin" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Austin Painting Costs Guide
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

export default WestLakeHighlands;
