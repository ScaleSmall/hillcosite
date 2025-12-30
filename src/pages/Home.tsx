import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import ImageWithGeo from '../components/ImageWithGeo';
import RelatedServices from '../components/RelatedServices';
import StatsAndTrust from '../components/sections/StatsAndTrust';
import ServicesGrid from '../components/sections/ServicesGrid';
import SplitSection from '../components/sections/SplitSection';
import ServiceAreasSection from '../components/sections/ServiceAreasSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import MiniFAQ from '../components/sections/MiniFAQ';
import CTABanner from '../components/sections/CTABanner';

const Home = () => {
  const serviceAreas = [
    { name: 'Round Rock & Georgetown', href: '/service-areas/round-rock-georgetown' },
    { name: 'Pflugerville & Wells Branch', href: '/service-areas/pflugerville-wells-branch' },
    { name: 'Cedar Park', href: '/service-areas/cedar-park' },
    { name: 'Taylor & Hutto', href: '/service-areas/taylor-hutto' },
    { name: 'Leander', href: '/service-areas/leander' },
    { name: 'Austin', href: '/service-areas' }
  ];

  const testimonials = [
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
      text: 'This is the second time I hired Hill Country Painting. They are thorough and have great follow-up and follow through to make sure you are completely happy with the work. They are neat and clean and have good communication. Both times, their crews were friendly, respectful, and trustworthy.',
      initials: 'PP'
    },
    {
      name: 'Arashk Shirazi',
      location: 'Austin',
      rating: 5,
      text: 'Josh was very professional, honest and informative about options and gave the best advice and recommendations. The crew were respectful to our outdoor space and very responsible about the quality of their work. After two years, I still look at their beautiful work from every angle, and admire the work they did.',
      initials: 'AS'
    }
  ];

  const faqs = [
    {
      question: 'What areas do you serve?',
      answer: 'We serve Austin and the surrounding metro area, including Round Rock, Pflugerville, Cedar Park, Georgetown, and other nearby neighborhoods.'
    },
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes, we provide free, no-obligation estimates for all our painting services.'
    },
    {
      question: 'Are you insured?',
      answer: 'Yes, we are fully insured to protect your property and provide peace of mind.'
    },
    {
      question: 'What is your warranty?',
      answer: 'We stand behind our work with a 2-year warranty on all painting services.'
    }
  ];

  return (
    <>
      <SEO
        title="Hill Country Painting — Professional Painting Contractors Austin"
        description="Expert Austin house painters. Interior, exterior, cabinet painting. 15+ years experience. Insured crew. 2-year warranty. Serving Austin metro."
        canonical="/"
        pageType="website"
        breadcrumbs={[
          { name: 'Home', url: '/' }
        ]}
        faq={faqs}
      />
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG_4398_result_result.jpg"
            alt="Professional house painting in Austin, TX"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        </div>
        
        {/* Color Consultation Floating Card - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
          <Link
            to="/color-consultation"
            className="group relative overflow-hidden"
          >
            {/* Ribbon Background */}
            <div className="relative bg-gradient-to-r from-orange-400 to-red-500 px-8 py-4 transform rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-2xl">
              {/* Corner fold effect */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-red-700 transform translate-x-[1px] -translate-y-[1px]"></div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="text-lg font-bold leading-tight">
                    FREE Color Consultation
                  </div>
                  <div className="text-sm font-medium opacity-90">
                    Click to Transform Your Space
                  </div>
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            
            {/* Shadow base */}
            <div className="absolute inset-0 bg-black/20 transform rotate-3 translate-x-1 translate-y-1 -z-10 group-hover:rotate-0 transition-transform duration-300"></div>
          </Link>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                Austin House Painting Done Right
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                Professional interior, exterior, cabinet, and commercial painting in Austin. Clean prep, crisp lines, durable results. Insured, backed by a 2-year warranty.
              </p>
              <div className="text-base text-white/90 font-medium drop-shadow">
                Clean prep. Crisp lines. Reliable schedules.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  Get Free Estimate
                </Link>
                <a href="tel:(512)240-2246" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (512) 240-2246
                </a>
              </div>
              <div className="text-lg text-white/95 font-medium drop-shadow bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 inline-block">
                Austin's most trusted painting contractors since 2019. We've transformed over 500 homes and businesses across the Austin metro area with professional interior painting, exterior painting, cabinet painting, and commercial painting services. Our experienced, insured crew delivers exceptional results with clean preparation, precise application, and reliable scheduling that Austin homeowners and businesses depend on.
              </div>
          </div>
          </div>
        </div>
      </section>

      {/* Pattern A: Stats & Trust */}
      <StatsAndTrust />

      {/* Pattern B: Services Grid */}
      <ServicesGrid
        title="Our Services"
        subtitle="Complete painting solutions for your Austin home"
      />

      {/* Financing Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Flexible Financing Available
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Make your painting project more affordable with our financing options
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link to="/financing" className="inline-block transition-transform hover:scale-105">
                <img
                  src="/24mo_blue_badge.png"
                  alt="Up to 24 months interest-free financing available"
                  className="w-80 h-auto drop-shadow-2xl"
                  width="320"
                  height="320"
                />
              </Link>
              <Link
                to="/financing"
                className="text-accent-600 hover:text-accent-700 font-semibold text-lg underline decoration-2 underline-offset-4 transition-colors"
              >
                Click to estimate financing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern C: Split Section */}
      <SplitSection
        title="Why Choose Hill Country Painting?"
        description="We're Austin's trusted painting professionals, committed to delivering exceptional results that stand the test of time."
        benefits={[
          { text: 'Insured local crew with 15+ years experience' },
          { text: '2-year warranty on all work' },
          { text: 'Clean prep work and precise execution' },
          { text: 'Reliable scheduling and communication' },
          { text: 'Free color consultation and estimates' },
          { text: 'Interior, exterior, cabinet, and commercial specialists' }
        ]}
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Professional Austin house painting - Hill Country Painting crew interior work"
      />

      {/* Pattern H: Service Areas */}
      <ServiceAreasSection
        title="Serving Austin & Surrounding Areas"
        subtitle="Professional painting services throughout the Austin metro"
        areas={serviceAreas}
      />

      {/* Pattern G: Testimonials */}
      <TestimonialsSection
        title="What Our Customers Say"
        testimonials={testimonials}
      />

      {/* Pattern F: Mini-FAQ */}
      <MiniFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      {/* Pattern I: CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Home?"
        subtitle="Get a free estimate today and see why Austin homeowners trust Hill Country Painting"
        primaryCTA={{
          text: 'Get Free Estimate',
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

export default Home;