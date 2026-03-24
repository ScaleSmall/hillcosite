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

const Leander = () => {
  const leanderFAQs = [
    {
      question: 'Do you paint homes in Leander\'s master-planned communities like Crystal Falls and Travisso?',
      answer: 'Yes — we work throughout Crystal Falls, Travisso, Mason Hills, Bryson, and Devine Lake regularly. We know the HOA color requirements and approval processes for these communities and can help guide color selection that meets guidelines while achieving the look you want.'
    },
    {
      question: 'Can you handle new construction paint upgrades in Leander?',
      answer: 'Absolutely. Builder-grade paint is often low quality and designed to look good at closing — not to last. We specialize in upgrading new Leander homes with higher-sheen, better-coverage paints that hold up to Central Texas heat and UV exposure for years longer.'
    },
    {
      question: 'How do you handle the heat during Leander summers?',
      answer: 'We schedule exterior work during early morning hours and avoid painting in direct afternoon sun above 90°F to ensure proper adhesion and cure times. We use heat-resistant primers and paints specifically rated for high-UV environments like Central Texas.'
    },
    {
      question: 'What areas near Leander do you also serve?',
      answer: 'In addition to all of Leander, we regularly serve Cedar Park, Round Rock, Georgetown, and North Austin. For the full Austin metro and Hill Country service area, visit our service areas page.'
    }
  ];

  const testimonials = [
    {
      name: 'Mark & Lisa T.',
      location: 'Crystal Falls, Leander',
      rating: 5,
      text: 'We had Hill Country Painting do our entire exterior in Crystal Falls. They navigated the HOA approval process with us, helped select a color that got approved on the first try, and finished the job ahead of schedule. Neighbors have asked us who did the work.',
      initials: 'MT'
    },
    {
      name: 'Jennifer K.',
      location: 'Travisso, Leander',
      rating: 5,
      text: 'Hired them for a full interior repaint of our Travisso home. Exceptional prep work — they took their time on caulking and patching before a single drop of paint went on. The walls look flawless. Will be using them again for the exterior next spring.',
      initials: 'JK'
    },
    {
      name: 'David R.',
      location: 'Mason Hills, Leander',
      rating: 5,
      text: 'Professional from start to finish. Accurate estimate, showed up on time every day, cleaned up completely each evening. The cabinet painting in our kitchen looks like a professional refinish from a showroom. Highly recommend.',
      initials: 'DR'
    }
  ];

  const neighborhoods = [
    { name: 'Crystal Falls', slug: 'crystal-falls' },
    { name: 'Mason Hills', slug: 'mason-hills' },
    { name: 'Travisso', slug: 'travisso' },
    { name: 'Devine Lake', slug: 'devine-lake' },
    { name: 'Bryson', slug: 'bryson' },
  ];

  return (
    <>
      <SEO
        title="Leander Painting Services | Hill Country Painting | Crystal Falls & Travisso"
        description="Professional painting services in Leander, TX. Expert interior and exterior painting for Crystal Falls, Travisso, Mason Hills, Bryson, and Devine Lake. HOA color compliance, new construction upgrades, and quality finishes for Central Texas."
        canonical="/service-areas/leander"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Leander', url: '/service-areas/leander' }
        ]}
        service={{
          name: 'Leander Painting Services',
          description: 'Professional residential and commercial painting services throughout Leander, Texas. Expert interior and exterior painting for Crystal Falls, Travisso, Mason Hills, Bryson, Devine Lake, and surrounding communities. HOA color compliance and new construction upgrades.',
          areaServed: ['Leander', 'Crystal Falls', 'Travisso', 'Mason Hills', 'Bryson', 'Devine Lake', 'Cedar Park', 'Georgetown']
        }}
        faq={leanderFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/hill-country-painting-austin-homepage-hero.jpg"
            alt="Professional Leander painting services for Crystal Falls and Travisso homes"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Leander, TX',
              latitude: 30.5787,
              longitude: -97.8531,
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
                Serving Leander, TX — 78641 & 78646
              </div>
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Leander Painting Services
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Professional interior and exterior painting for Leander's master-planned communities. HOA-compliant color selection, new construction upgrades, and quality finishes built for Central Texas.
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
                Why Leander Homeowners Choose Hill Country Painting
              </h2>
              <p className="text-lg text-brand-gray-600 mb-8 leading-body">
                Leander has grown into one of Central Texas's most sought-after communities, with master-planned neighborhoods, Hill Country views, and homes that reflect the area's high standards. We bring the same level of care and quality that Leander homeowners expect.
              </p>
              <div className="space-y-4">
                {[
                  'HOA color approval assistance for Crystal Falls, Travisso, and Bryson',
                  'New construction upgrades beyond builder-grade paint',
                  'Heat-resistant exterior coatings for Central Texas summers',
                  'Interior painting with low-VOC options for families',
                  'Reliable scheduling — we show up when we say we will',
                  'Full cleanup and final walkthrough before payment'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-azure flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-6">Leander Neighborhoods We Serve</h3>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {neighborhoods.map((n) => (
                  <Link
                    key={n.slug}
                    to={`/areas/leander/${n.slug}`}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <Home className="w-5 h-5 text-brand-azure flex-shrink-0" />
                    <span className="font-medium text-brand-gray-800 group-hover:text-brand-azureDark transition-colors">{n.name}</span>
                    <span className="ml-auto text-brand-azure text-sm">→</span>
                  </Link>
                ))}
              </div>
              <Link to="/areas/leander" className="btn-primary w-full text-center block">
                View All Leander Neighborhoods
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid
        title="Painting Services in Leander"
        subtitle="Complete painting solutions for every Leander home and community"
      />

      <TestimonialsSection
        title="What Leander Homeowners Say"
        subtitle="Real feedback from Leander, Crystal Falls, and Travisso residents"
        testimonials={testimonials}
      />

      <MiniFAQ
        title="Leander Painting Questions"
        faqs={leanderFAQs}
      />

      <CTABanner
        title="Ready to Transform Your Leander Home?"
        subtitle="Request a consultation today — we serve all of Leander including Crystal Falls, Travisso, and Bryson"
        primaryCTA={{ text: 'Request a Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '/gallery' }}
      />
    </>
  );
};

export default Leander;
