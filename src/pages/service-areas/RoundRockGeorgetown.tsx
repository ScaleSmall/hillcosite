import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Cpu, GraduationCap, Building2, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import SplitSection from '../../components/sections/SplitSection';
import ServiceAreasSection from '../../components/sections/ServiceAreasSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection';
import MiniFAQ from '../../components/sections/MiniFAQ';
import CTABanner from '../../components/sections/CTABanner';

const RoundRockGeorgetown = () => {
  const serviceAreas = [
    { name: 'Pflugerville & Wells Branch', href: '/service-areas/pflugerville-wells-branch' },
    { name: 'Cedar Park', href: '/service-areas/cedar-park' },
    { name: 'Taylor & Hutto', href: '/service-areas/taylor-hutto' },
    { name: 'Leander', href: '/service-areas/leander' },
    { name: 'Austin', href: '/service-areas' }
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

  const roundRockGeorgetownSpecificFAQs = [
    {
      question: 'How do you coordinate around Dell Diamond events and Round Rock Express season?',
      answer: 'Dell Diamond hosts 70+ Round Rock Express games plus concerts and community events. We track the event calendar and coordinate material deliveries and crew schedules around game days, especially during playoffs and major concerts. For nearby Avery Ranch and Stone Canyon homes, we ensure minimal disruption during peak attendance times.'
    },
    {
      question: 'What\'s your experience with Dell Technologies employee scheduling needs?',
      answer: 'Many Round Rock residents work for Dell Technologies with flexible and remote work schedules. We offer evening consultations, coordinate around important work-from-home calls, and understand the need for quiet during video conferences. Our team respects home office requirements throughout the project.'
    },
    {
      question: 'How do you handle Georgetown\'s historic preservation requirements near the Square?',
      answer: 'Georgetown\'s historic square and surrounding Victorian-era homes have specific preservation guidelines. We use period-appropriate color palettes, understand historic construction methods, and work with the Georgetown Historic Preservation Commission when required. We\'ve completed numerous projects in the historic district.'
    },
    {
      question: 'Do you coordinate with Southwestern University\'s academic calendar?',
      answer: 'Absolutely. Georgetown\'s university town character means rental properties and student housing with specific timing needs. We understand move-in/move-out schedules, coordinate around graduation and major university events, and work efficiently during semester breaks when possible.'
    },
    {
      question: 'What about Sun City Georgetown\'s active adult community requirements?',
      answer: 'Sun City Georgetown is a premium active adult community with specific standards and schedules. We provide quiet, professional service that respects the community\'s lifestyle, coordinate around golf tournaments and community activities, and deliver the quality finishes expected in this upscale 55+ community.'
    }
  ];

  return (
    <>
      <SEO
        title="Round Rock Georgetown Corridor Painting | Dell Diamond to Historic Square"
        description="Professional Round Rock & Georgetown painting. Dell Diamond to historic square. Tech workforce homes & preservation specialists. Consultations available."
        canonical="/service-areas/round-rock-georgetown"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Round Rock & Georgetown', url: '/service-areas/round-rock-georgetown' }
        ]}
        service={{
          name: 'Round Rock Georgetown Corridor Painting Services',
          description: 'Professional residential and commercial painting services spanning Round Rock and Georgetown, Texas. Specializing in Dell Diamond entertainment district, tech workforce communities, Georgetown historic square preservation, and university town requirements.',
          areaServed: ['Round Rock', 'Georgetown', 'Dell Diamond District', 'Avery Ranch', 'Teravista', 'Sun City Georgetown', 'Wolf Ranch', 'Georgetown Historic Square', 'Southwestern University Area', 'Dell Technologies Corridor']
        }}
        faq={roundRockGeorgetownSpecificFAQs}
      />

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Round Rock Georgetown corridor painting from Dell Diamond to historic square"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            priority={true}
            sizes="100vw"
            location={{
              name: 'Round Rock, TX',
              latitude: 30.5083,
              longitude: -97.6789,
              region: 'Texas'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero font-bold text-white leading-heading drop-shadow-lg">
                Round Rock-Georgetown Corridor Painting Specialists
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                From Dell Diamond entertainment to Georgetown's historic square. Tech innovation meets Texas heritage across the I-35 corridor. Specialized in Dell Technologies workforce homes, university town properties, and Victorian preservation. Professional quality for modern growth and historic charm.
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
                Tech corridor innovation meets historic preservation expertise
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsAndTrust
        stats={[
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">580</div>,
            value: "580+",
            label: "Corridor Projects"
          },
          {
            icon: <Cpu className="w-8 h-8 text-brand-azureDark" />,
            value: "Tech Corridor",
            label: "Specialists"
          },
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          },
          {
            icon: <GraduationCap className="w-8 h-8 text-brand-azureDark" />,
            value: "University",
            label: "Town Experts"
          }
        ]}
      />

      <ServicesGrid
        title="Round Rock-Georgetown Corridor Services"
        subtitle="Tech innovation meets historic preservation expertise"
      />

      <SplitSection
        title="I-35 Tech Corridor Meets Victorian Heritage"
        description="The Round Rock-Georgetown corridor represents a fascinating blend of cutting-edge technology and preserved Texas heritage. Round Rock's Dell Technologies campus drives modern growth while Georgetown maintains its Victorian charm as 'Texas's Most Beautiful Town Square.' Our corridor expertise navigates everything from tech workforce scheduling to historic preservation requirements, ensuring quality results whether you're in a modern Avery Ranch estate or a restored Georgetown Victorian."
        benefits={[
          { text: 'Dell Technologies workforce coordination with flexible home office and remote work schedules' },
          { text: 'Dell Diamond entertainment district logistics planning around 70+ annual events and baseball season' },
          { text: 'Georgetown historic square preservation expertise with Victorian architecture and heritage color palettes' },
          { text: 'Southwestern University rental property experience with academic calendar and student housing turnaround' },
          { text: 'Teravista cross-city community coordination serving both Round Rock and Georgetown residents' },
          { text: 'I-35 corridor traffic management with strategic scheduling for efficient material delivery and crew access' }
        ]}
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Round Rock Georgetown I-35 corridor tech and heritage painting expertise"
        imageLeft={true}
      />

      <ServiceAreasSection
        title="Serving the I-35 Corridor & Austin Metro"
        subtitle="Professional painting throughout the tech and heritage corridor"
        areas={serviceAreas}
      />

      <TestimonialsSection
        title="What Our Customers Say"
        subtitle="Real feedback from satisfied corridor residents"
        testimonials={realTestimonials}
      />

      <MiniFAQ
        title="Round Rock-Georgetown Corridor Painting Questions"
        faqs={roundRockGeorgetownSpecificFAQs}
      />

      <CTABanner
        title="Ready to Enhance Your Corridor Home?"
        subtitle="Experience tech innovation and heritage preservation expertise"
        primaryCTA={{
          text: 'Request an Estimate',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Call (512) 240-2246',
          href: 'tel:(512) 240-2246'
        }}
      />
    </>
  );
};

export default RoundRockGeorgetown;
