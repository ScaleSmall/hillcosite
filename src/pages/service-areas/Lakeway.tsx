import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Droplets, Sun, Home, Paintbrush, Shield, Anchor } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';

const Lakeway = () => {
  const localFAQs = [
    {
      question: "What makes lakefront home painting different in Lakeway?",
      answer: "Lakefront properties face unique challenges including higher humidity levels, water reflection intensifying UV exposure, and moisture from the lake. We use premium exterior paints with enhanced UV protection and moisture resistance specifically suited for waterfront properties. Proper surface preparation is critical to ensure paint adhesion in these conditions."
    },
    {
      question: "How does Lake Travis humidity affect exterior paint?",
      answer: "The proximity to Lake Travis increases ambient humidity, which can lead to mildew growth and paint adhesion issues if not properly addressed. We recommend mildew-resistant primers and paints, ensure surfaces are completely dry before painting, and typically schedule exterior work during optimal weather windows."
    },
    {
      question: "What exterior paint do you recommend for Hill Country stone homes?",
      answer: "For the stucco and stone exteriors common in Lakeway, we use elastomeric coatings that accommodate the expansion and contraction caused by temperature swings. These breathable coatings allow moisture to escape while protecting against water infiltration."
    },
    {
      question: "How do you protect landscaping during exterior painting?",
      answer: "Lakeway properties often have extensive landscaping and outdoor living areas. We use comprehensive drop cloth coverage, protect plants and hardscaping, and clean up thoroughly each day. For lakefront properties, we take extra precautions to prevent any materials from reaching the water."
    },
    {
      question: "Do you serve Rough Hollow, Bee Cave, and nearby communities?",
      answer: "Yes, we regularly work throughout the Lake Travis area including Rough Hollow, The Peninsula, Serene Hills, and Bee Cave. Our familiarity with these communities helps us understand the architectural styles and HOA requirements common to each area."
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
        additionalSchema={faqSchema}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/hill-country-home-exterior-painting.png"
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

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">
            Painting Considerations for Lake Travis Area Homes
          </h2>
          <div className="space-y-5 text-lg text-brand-gray-700 leading-relaxed">
            <p>
              Lakeway's position along Lake Travis creates a microclimate that affects how paint performs over time. The combination of intense Texas sun, higher humidity from the lake, and seasonal temperature swings requires thoughtful product selection and thorough surface preparation.
            </p>
            <p>
              Many Lakeway homes feature Hill Country architecture with stucco exteriors, stone accents, and large outdoor living spaces. These design elements require specialized coating systems that can handle thermal expansion while providing lasting protection against UV degradation and moisture intrusion.
            </p>
            <p>
              For waterfront properties, we pay special attention to the south and west-facing surfaces that receive the most intense sunlight and reflected UV from the lake. These areas often require premium fade-resistant paints with enhanced durability to maintain their appearance between repaints.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
            What We Paint in Lakeway
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Anchor className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Lakefront Homes</h3>
              <p className="text-brand-gray-600">Specialized exterior coatings for waterfront properties with enhanced UV and moisture protection.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Home className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Hill Country Estates</h3>
              <p className="text-brand-gray-600">Complete interior and exterior painting for custom homes throughout Lakeway's golf course and gated communities.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Sun className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Stucco & Stone</h3>
              <p className="text-brand-gray-600">Elastomeric coatings and proper preparation for stucco exteriors and painted stone surfaces.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Paintbrush className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Cabinet Refinishing</h3>
              <p className="text-brand-gray-600">Transform dated kitchens with professional cabinet painting at a fraction of replacement cost.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Droplets className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Pool Areas & Decks</h3>
              <p className="text-brand-gray-600">Durable coatings for pool houses, pergolas, and deck surfaces exposed to pool chemicals and weather.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">HOA Compliance</h3>
              <p className="text-brand-gray-600">We work within Lakeway community guidelines and can assist with HOA color approval processes.</p>
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
              <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Lake Travis Communities</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/areas/lakeway-bee-cave-and-lake-travis" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Lakeway & Lake Travis Hub
                  </Link>
                </li>
                <li>
                  <Link to="/areas/lakeway-bee-cave-and-lake-travis/rough-hollow" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Rough Hollow
                  </Link>
                </li>
                <li>
                  <Link to="/areas/lakeway-bee-cave-and-lake-travis/bee-cave" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Bee Cave
                  </Link>
                </li>
                <li>
                  <Link to="/areas/lakeway-bee-cave-and-lake-travis/serenity-hills" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Serenity Hills
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
                    Austin Area Painting Costs
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

export default Lakeway;
