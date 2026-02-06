import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Music, Landmark, Briefcase, MapPin, Home } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import SplitSection from '../../components/sections/SplitSection';
import ServiceAreasSection from '../../components/sections/ServiceAreasSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import MiniFAQ from '../../components/sections/MiniFAQ';
import CTABanner from '../../components/sections/CTABanner';
import { geoAreas } from '../../data/geoAreas';

const Austin = () => {
  const serviceAreas = [
    { name: 'Tarrytown', href: '/service-areas/tarrytown' },
    { name: 'West Lake Hills', href: '/service-areas/west-lake-hills' },
    { name: 'Northwest Hills', href: '/service-areas/northwest-hills' },
    { name: 'Westlake Highlands', href: '/service-areas/west-lake-highlands' },
    { name: 'Lakeway', href: '/service-areas/lakeway' }
  ];

  const realTestimonials = [
    {
      name: 'Jason Hartley',
      location: 'Austin',
      rating: 5,
      text: 'Hill Country Painting did an outstanding job. They painted 7 rooms (one with a two-story ceiling), two staircases, the exterior stucco, and shutters. Everything looks clean and professional. They showed up on time, worked hard, and paid close attention to detail.',
      initials: 'JH'
    },
    {
      name: 'Patricia Perez',
      location: 'Austin',
      rating: 5,
      text: 'This is the second time I hired Hill Country Painting. They are thorough and have great follow-up and follow through to make sure you are completely happy with the work. They are neat and clean and have good communication.',
      initials: 'PP'
    },
    {
      name: 'Arashk Shirazi',
      location: 'Austin',
      rating: 5,
      text: 'Josh was very professional, honest and informative about options and gave the best advice and recommendations. The crew were respectful to our outdoor space and very responsible about the quality of their work.',
      initials: 'AS'
    }
  ];

  const austinSpecificFAQs = [
    {
      question: 'How do you handle Austin\'s unique weather challenges?',
      answer: 'Austin\'s climate requires special consideration. We work around the intense summer heat (often 100°F+), sudden thunderstorms, and high humidity. Our paint selections are specifically chosen to withstand UV exposure, resist fading, and handle temperature fluctuations. We schedule exterior work during optimal weather windows and use premium paints designed for Greater Austin Area conditions.'
    },
    {
      question: 'Do you work with Austin\'s diverse architectural styles?',
      answer: 'Absolutely. Austin features everything from historic Victorian homes in Clarksville to modern contemporary designs in West Lake Hills, mid-century ranches in Allandale, and new construction in Circle C Ranch. We have extensive experience with each architectural style and understand the specific requirements, from period-appropriate colors for historic districts to cutting-edge finishes for modern properties.'
    },
    {
      question: 'Can you coordinate around SXSW, ACL Festival, and other major Austin events?',
      answer: 'Yes. We understand Austin\'s event calendar and how major festivals impact traffic, parking, and access. For downtown and central Austin properties, we coordinate schedules around SXSW in March, ACL Festival in October, Formula 1 races, and UT football games to ensure smooth project completion without event-related delays.'
    },
    {
      question: 'What experience do you have with Austin\'s HOA requirements?',
      answer: 'Many Austin neighborhoods have strict HOA guidelines for exterior colors and finishes. We\'re experienced in navigating HOA approval processes, providing color samples and documentation, and ensuring compliance with community standards. We\'ve successfully completed projects in HOA-governed communities throughout Austin, from Tarrytown to Travis Heights.'
    },
    {
      question: 'How do you handle projects near the University of Texas campus?',
      answer: 'We understand the unique needs of the UT area, including rental properties, student housing, and faculty residences. We coordinate around academic calendars, offer flexible scheduling for professors and students, work efficiently during semester breaks, and maintain quiet, professional service appropriate for the university environment.'
    }
  ];

  return (
    <>
      <SEO
        title="Austin Painting Services | Live Music Capital Painters | Hill Country Painting"
        description="Professional Austin painters serving the Live Music Capital of the World. Expert interior and exterior painting for historic Clarksville, downtown high-rises, West Lake Hills estates, and all Austin neighborhoods. Local specialists understanding Texas Capitol area needs."
        canonical="/service-areas/austin"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Austin', url: '/service-areas/austin' }
        ]}
        service={{
          name: 'Austin Professional Painting Services',
          description: 'Professional residential and commercial painting services throughout Austin, Texas. Specializing in historic district preservation, modern downtown properties, West Lake Hills luxury homes, and all Austin architectural styles. Expert painters serving the Live Music Capital with quality craftsmanship.',
          areaServed: ['Austin', 'Downtown Austin', 'West Lake Hills', 'Tarrytown', 'Clarksville', 'Travis Heights', 'South Congress', 'Zilker', 'Allandale', 'Crestview', 'Rosedale', 'Pemberton Heights', 'University of Texas Area', 'Barton Creek', 'Circle C Ranch']
        }}
        faq={austinSpecificFAQs}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Professional Austin painting services for the Live Music Capital of the World"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Austin, TX',
              latitude: 30.2672,
              longitude: -97.7431,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Austin's Premier Painting Specialists
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Serving the Live Music Capital of the World with exceptional painting craftsmanship. From historic Clarksville Victorians to modern downtown high-rises, West Lake Hills estates to vibrant Tarrytown homes. Expert painters who understand Austin's unique character, climate, and architectural diversity.
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
              <div className="text-base text-white font-semibold drop-shadow">
                Trusted by Austin homeowners and businesses
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsAndTrust
        stats={[
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">100+</div>,
            value: "100+",
            label: "Local Projects"
          },
          {
            icon: <Music className="w-8 h-8 text-brand-azureDark" />,
            value: "Local",
            label: "Austin Experts"
          },
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          },
          {
            icon: <Landmark className="w-8 h-8 text-brand-azureDark" />,
            value: "Historic",
            label: "Preservation"
          }
        ]}
      />

      <ServicesGrid
        title="Austin Painting Services"
        subtitle="Professional craftsmanship for every Austin neighborhood"
      />

      <SplitSection
        title="Austin's Diverse Neighborhoods Demand Expert Painters"
        description="Austin is a city of incredible diversity, from the Victorian charm of Clarksville to the sleek modern architecture of downtown, the luxury estates of West Lake Hills to the creative energy of Tarrytown. Our painters understand the unique requirements of each neighborhood, whether it's preserving historic character in Pemberton Heights, meeting HOA standards in Circle C Ranch, or creating bold contemporary finishes in Barton Creek. We navigate Austin's intense summer heat, sudden storms, and diverse architectural styles with expertise gained from extensive local experience."
        benefits={[
          { text: 'Historic district expertise including Clarksville, Tarrytown, and Travis Heights with period-appropriate colors' },
          { text: 'Modern downtown high-rise and condo painting with minimal disruption to urban environments' },
          { text: 'West Lake Hills luxury home experience with premium finishes and high-end materials' },
          { text: 'Crestview and Allandale mid-century modern painting including vibrant colors and artistic design elements' },
          { text: 'UT campus area coordination with academic calendars and student housing requirements' },
          { text: 'Climate-specific paint selection for Austin\'s extreme heat, UV exposure, and humidity challenges' }
        ]}
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Professional Austin painting services for all architectural styles"
        imageLeft={true}
      />

      <section className="py-16 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-4">
              Neighborhoods We Proudly Serve
            </h2>
            <p className="text-xl text-brand-gray-600">
              Professional painting throughout the Austin metropolitan area
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Downtown Austin',
              'West Lake Hills',
              'Tarrytown',
              'Clarksville',
              'Travis Heights',
              'South Congress',
              'Zilker',
              'Allandale',
              'Crestview',
              'Rosedale',
              'Pemberton Heights',
              'UT Campus Area',
              'Barton Creek',
              'Circle C Ranch',
              'Rollingwood',
              'Steiner Ranch'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-brand-azure flex-shrink-0" />
                  <span className="text-brand-gray-900 font-medium text-sm">{neighborhood}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Austin Neighborhoods We Serve
            </h2>
            <p className="text-xl text-brand-gray-600">
              Explore detailed information about each Austin area we serve
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {geoAreas.map((hub) => (
              <Link
                key={hub.slug}
                to={`/areas/${hub.slug}`}
                className="card p-6 hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Home className="w-6 h-6 text-brand-azure flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-brand-gray-900 group-hover:text-brand-azureDark transition-colors">
                    {hub.name}
                  </h3>
                </div>
                <p className="text-brand-gray-600 mb-4 leading-relaxed">
                  {hub.description}
                </p>
                <div className="text-sm text-brand-azure font-medium">
                  {hub.neighborhoods.length} neighborhoods →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasSection
        title="Serving Greater Austin & Greater Austin Area"
        subtitle="Professional painting throughout the metro area"
        areas={serviceAreas}
      />

      <TestimonialsSection
        title="What Our Austin Customers Say"
        subtitle="Real feedback from satisfied Austin homeowners"
        testimonials={realTestimonials}
      />

      <MiniFAQ
        title="Austin Painting Questions"
        faqs={austinSpecificFAQs}
      />

      <CTABanner
        title="Ready to Transform Your Austin Home?"
        subtitle="Request a consultation from Austin's trusted painting professionals"
        primaryCTA={{
          text: "Request a Consultation",
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

export default Austin;
