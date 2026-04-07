import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Clock, History, Home, Paintbrush, Shield, Landmark } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';

const Tarrytown = () => {
  const localFAQs = [
    {
      question: "What special considerations apply to painting historic Tarrytown homes?",
      answer: "Historic Tarrytown homes often have original wood siding, decorative millwork, and architectural details that require careful preservation. We assess each element individually, using appropriate preparation techniques and compatible paint systems. For homes in designated historic districts, we can work within preservation guidelines while still achieving excellent results."
    },
    {
      question: "How do you handle lead paint on older Tarrytown homes?",
      answer: "Many homes built before 1978 may have lead-based paint. We follow EPA RRP (Renovation, Repair, and Painting) protocols when working on pre-1978 homes, including proper containment, careful removal techniques, and thorough cleanup. Safety for your family and our crew is always the priority."
    },
    {
      question: "Can you match original paint colors on historic homes?",
      answer: "Yes, we can color-match existing paint or help you select period-appropriate colors. We work with high-quality paints that provide modern durability while maintaining the authentic appearance of historic architecture. We can also consult historical color palettes appropriate to your home's era."
    },
    {
      question: "What prep work is needed for older wood siding in Tarrytown?",
      answer: "Older wood siding typically requires thorough cleaning, scraping of loose paint, sanding rough areas, caulking gaps, priming bare wood, and addressing any rot or damage. We take extra care with original wood details to preserve their character while ensuring proper paint adhesion."
    },
    {
      question: "Do you work in Old Enfield, Pemberton Heights, and Bryker Woods too?",
      answer: "Absolutely. We regularly serve the entire Central Austin historic corridor including Old Enfield, Pemberton Heights, Bryker Woods, and Clarksville. These neighborhoods share similar architectural heritage and preparation requirements, and our experience in one helps us serve all of them better."
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
        title="Tarrytown Painting Services | Historic District Experts | Hill Country Painting"
        description="Professional painting services in Tarrytown, Austin. Expert interior and exterior painting for historic homes. Trusted by Tarrytown homeowners for exceptional craftsmanship and historic preservation."
        canonical="/service-areas/tarrytown"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Tarrytown', url: '/service-areas/tarrytown' }
        ]}
        service={{
          name: 'Tarrytown Painting Services',
          description: 'Professional residential painting services throughout Tarrytown, Austin. Specializing in historic homes, luxury properties, and Old Austin architecture. Expert painters serving Tarrytown with exceptional quality and care.',
          areaServed: ['Tarrytown', 'Old Enfield', 'Pemberton Heights', 'Bryker Woods', 'Clarksville']
        }}
        additionalSchema={faqSchema}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/exterior-tarrytown.jpg"
            alt="Professional Tarrytown painting services"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Tarrytown, Austin, TX',
              latitude: 30.2969,
              longitude: -97.7717,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Tarrytown Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Professional painting for Tarrytown's historic and luxury homes. Exceptional craftsmanship for Old Austin's distinguished properties with historic preservation expertise and premium finishes.
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
            Painting Historic Tarrytown Homes
          </h2>
          <div className="space-y-5 text-lg text-brand-gray-700 leading-relaxed">
            <p>
              Tarrytown is one of Austin's most prestigious and historically significant neighborhoods, with homes dating from the 1920s through mid-century. Many properties feature original wood siding, decorative trim, built-in cabinetry, and architectural details that reflect the craftsmanship of their era.
            </p>
            <p>
              Painting these homes requires understanding how older materials behave differently than modern construction. Original wood may have multiple layers of paint, potential lead content in pre-1978 homes, and areas of weather damage that need repair before painting. We approach each project with the care these distinguished properties deserve.
            </p>
            <p>
              Beyond technical considerations, we understand that Tarrytown homeowners value their neighborhood's character. We work to preserve architectural integrity while providing modern protection, helping your home maintain its place in the streetscape that makes Tarrytown special.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
            What We Paint in Tarrytown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Landmark className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Historic Exteriors</h3>
              <p className="text-brand-gray-600">Careful preparation and premium coatings for wood siding, trim, shutters, and decorative millwork on historic homes.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Home className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Period Interiors</h3>
              <p className="text-brand-gray-600">Interior painting that respects original plaster, crown molding, built-ins, and architectural details while providing fresh finishes.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <History className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Wood Restoration</h3>
              <p className="text-brand-gray-600">Repair and refinishing of original wood windows, doors, trim, and siding to preserve historic character.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Paintbrush className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Cabinet Refinishing</h3>
              <p className="text-brand-gray-600">Update kitchens and bathrooms while preserving or complementing original built-in cabinetry and millwork.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Lead-Safe Practices</h3>
              <p className="text-brand-gray-600">EPA RRP-certified work for pre-1978 homes with proper containment, removal techniques, and safety protocols.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Clock className="w-10 h-10 text-brand-azure mb-4" />
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Respectful Service</h3>
              <p className="text-brand-gray-600">Professional crews who understand the importance of these homes and treat your property with appropriate care.</p>
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
              <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Central Austin Historic Neighborhoods</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/areas/tarrytown" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Tarrytown Area Hub
                  </Link>
                </li>
                <li>
                  <Link to="/areas/tarrytown/old-enfield" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Old Enfield
                  </Link>
                </li>
                <li>
                  <Link to="/areas/tarrytown/pemberton-heights" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Pemberton Heights
                  </Link>
                </li>
                <li>
                  <Link to="/areas/tarrytown/bryker-woods" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Bryker Woods
                  </Link>
                </li>
                <li>
                  <Link to="/areas/tarrytown/clarksville" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Clarksville
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
                  <Link to="/services/interior-painting" className="text-brand-azure hover:text-brand-azureDark font-medium flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Interior Painting Services
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

export default Tarrytown;
