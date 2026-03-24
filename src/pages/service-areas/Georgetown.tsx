import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, MapPin, Home } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';
import MiniFAQ from '../../components/sections/MiniFAQ';
import TestimonialsSection from '../../components/sections/TestimonialsSection';

const Georgetown = () => {
  const georgetownFAQs = [
    {
      question: 'Do you work in Georgetown\'s Sun City active adult community?',
      answer: 'Yes — Sun City Georgetown is one of our most requested areas. We understand the Del Webb construction standards, the specific HOA color approval process, and the architectural styles common throughout Sun City. We make the approval process straightforward for homeowners.'
    },
    {
      question: 'Can you paint older homes near Georgetown\'s historic Victorian square?',
      answer: 'Absolutely. Georgetown\'s historic district features some of Texas\'s finest Victorian-era architecture, and we have experience with preservation painting, period-appropriate color selection, and the careful surface preparation these older homes require to achieve a lasting finish.'
    },
    {
      question: 'How do you handle Georgetown\'s weather during exterior painting?',
      answer: 'Georgetown\'s open terrain means more wind exposure than areas south of Austin. We monitor weather closely and avoid painting on high-wind days to prevent dust contamination. We use high-adhesion primers and UV-resistant topcoats rated for North Central Texas conditions.'
    },
    {
      question: 'What other cities near Georgetown do you serve?',
      answer: 'In addition to Georgetown, we regularly serve Round Rock, Cedar Park, Leander, and the broader Austin metro. We are happy to provide estimates across Williamson County.'
    }
  ];

  const testimonials = [
    {
      name: 'Barbara & Tom H.',
      location: 'Sun City Georgetown',
      rating: 5,
      text: 'We\'ve had our home in Sun City painted by Hill Country Painting twice now. They know the HOA process, always bring color samples, and the finish work on our trim is exceptional. The crew is respectful, quiet, and completely professional.',
      initials: 'BH'
    },
    {
      name: 'Sarah M.',
      location: 'Teravista, Georgetown',
      rating: 5,
      text: 'Hired Hill Country Painting for a full interior of our Teravista home. They were meticulous about protecting our floors and furniture, and the wall colors they helped us select look exactly how we envisioned. Fantastic job.',
      initials: 'SM'
    },
    {
      name: 'Robert C.',
      location: 'Georgetown',
      rating: 5,
      text: 'Our historic home near the Georgetown square needed careful surface prep and period-appropriate colors. The team researched the right palettes, matched the trim detail work beautifully, and treated our older home with real care. Excellent.',
      initials: 'RC'
    }
  ];

  const neighborhoods = [
    { name: 'Sun City Georgetown', slug: 'sun-city' },
    { name: 'Berry Creek', slug: 'berry-creek' },
    { name: 'Teravista', slug: 'teravista' },
    { name: 'Wolf Ranch', slug: 'wolf-ranch' },
    { name: 'Georgetown Square Area', slug: 'georgetown-square' },
  ];

  return (
    <>
      <SEO
        title="Georgetown TX Painting Services | Hill Country Painting | Sun City & Teravista"
        description="Professional painting services in Georgetown, TX. Expert interior and exterior painting for Sun City Georgetown, Teravista, Berry Creek, Wolf Ranch, and the historic Victorian square area. HOA color compliance and quality finishes for Williamson County homes."
        canonical="/service-areas/georgetown"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Georgetown', url: '/service-areas/georgetown' }
        ]}
        service={{
          name: 'Georgetown Texas Painting Services',
          description: 'Professional residential and commercial painting services throughout Georgetown, Texas. Expert interior and exterior painting for Sun City Georgetown, Teravista, Berry Creek, Wolf Ranch, and the historic downtown area. Serving Williamson County with quality finishes.',
          areaServed: ['Georgetown', 'Sun City Georgetown', 'Teravista', 'Berry Creek', 'Wolf Ranch', 'Georgetown Square', 'Round Rock', 'Cedar Park']
        }}
        faq={georgetownFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/traditional-home-exterior.jpg"
            alt="Professional Georgetown Texas painting services for Sun City and historic homes"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Georgetown, TX',
              latitude: 30.6328,
              longitude: -97.6774,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4" />
                Serving Georgetown, TX — 78626, 78628 & 78633
              </div>
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Georgetown Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                From Georgetown's Victorian historic district to Sun City's active adult community and Teravista's master-planned homes — professional painting with quality finishes for every Williamson County property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-azure hover:bg-brand-azureDark text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  Request an Estimate
                </Link>
                <a href="tel:(512)240-2246" className="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg transition-colors duration-200 border border-white/40">
                  <Phone className="w-5 h-5 mr-2" />
                  (512) 240-2246
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsAndTrust />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
                Why Georgetown Homeowners Trust Hill Country Painting
              </h2>
              <p className="text-lg text-brand-gray-600 mb-8 leading-body">
                Georgetown's "Most Beautiful Town Square in Texas" sets the standard for how the whole community looks and feels. Whether you're in a Sun City Del Webb home, a Teravista master-planned community, or a Victorian near the historic square, we bring the right expertise for your home.
              </p>
              <div className="space-y-4">
                {[
                  'Sun City HOA color approval knowledge and process guidance',
                  'Historic preservation techniques for Victorian-era homes',
                  'Wind-resistant exterior coatings for open North Texas terrain',
                  'Teravista, Berry Creek, and Wolf Ranch HOA compliance',
                  'Flexible scheduling for Georgetown\'s active adult residents',
                  'Full walkthrough and satisfaction guarantee before final payment'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-azure flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-6">Georgetown Neighborhoods We Serve</h3>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {neighborhoods.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/areas/georgetown/${n.slug}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <Home className="w-5 h-5 text-brand-azure flex-shrink-0" />
                    <span className="font-medium text-brand-gray-800 group-hover:text-brand-azureDark transition-colors">{n.name}</span>
                    <span className="ml-auto text-brand-azure text-sm">→</span>
                  </Link>
                ))}
              </div>
              <Link to="/areas/georgetown" className="btn-primary w-full text-center block">
                View All Georgetown Neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Painting Services in Georgetown"
        subtitle="Complete painting solutions for every Georgetown home and community"
      />

      <TestimonialsSection
        title="What Georgetown Homeowners Say"
        subtitle="Real feedback from Sun City, Teravista, and Georgetown residents"
        testimonials={testimonials}
      />

      <MiniFAQ
        title="Georgetown Painting Questions"
        faqs={georgetownFAQs}
      />

      <CTABanner
        title="Ready to Refresh Your Georgetown Home?"
        subtitle="Request a consultation today — serving Sun City, Teravista, Berry Creek, and all of Williamson County"
        primaryCTA={{ text: 'Request a Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '/gallery' }}
      />
    </>
  );
};

export default Georgetown;
