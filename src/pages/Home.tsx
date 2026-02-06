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
import ProcessSection from '../components/sections/ProcessSection';
import ServiceAreasSection from '../components/sections/ServiceAreasSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import MiniFAQ from '../components/sections/MiniFAQ';
import CTABanner from '../components/sections/CTABanner';
import PaintingCostsTable from '../components/sections/PaintingCostsTable';
import TypicalHomeCosts from '../components/sections/TypicalHomeCosts';
import NAPMapSection from '../components/NAPMapSection';

const Home = () => {
  const serviceAreas = [
    { name: 'Austin', href: '/service-areas/austin' },
    { name: 'Tarrytown', href: '/service-areas/tarrytown' },
    { name: 'West Lake Hills', href: '/service-areas/west-lake-hills' },
    { name: 'Northwest Hills', href: '/service-areas/northwest-hills' },
    { name: 'Westlake Highlands', href: '/service-areas/west-lake-highlands' },
    { name: 'Lakeway', href: '/service-areas/lakeway' }
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
      answer: 'We serve Austin and the surrounding metro area, including Tarrytown, West Lake Hills, Northwest Hills, Westlake Highlands, Lakeway, and other nearby neighborhoods.'
    },
    {
      question: 'Do you offer consultations?',
      answer: 'Yes, we provide no-obligation consultations for all our painting services.'
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
        title="Austin Painters: Interior, Exterior, Cabinet, Commercial"
        description="Professional interior, exterior, cabinet, and commercial painting in Austin. Clean prep, crisp lines, durable results. Insured, backed by a 2-year warranty."
        canonical="/"
        pageType="website"
        breadcrumbs={[
          { name: 'Home', url: '/' }
        ]}
        faq={faqs}
        includeLocalBusiness={true}
        aggregateRating={{
          ratingValue: 4.9,
          reviewCount: 127
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hill-country-painting-austin-homepage-hero.jpg"
            alt="Hill Country Painting professional painter at work on Austin home"
            className="w-full h-full object-cover object-[center_35%]"
            loading="eager"
          />
          {/* Layered gradient overlays with brand colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-azureDark40 via-brand-azureDark20 to-brand-azureDark60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-azure20 via-transparent to-brand-regentGray20"></div>
        </div>
        
        {/* Color Consultation Floating Card - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
          <Link
            to="/color-consultation"
            className="group relative overflow-hidden"
          >
            {/* Ribbon Background */}
            <div className="relative bg-brand-azure px-8 py-4 transform rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-2xl">
              {/* Corner fold effect */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-red-700 transform translate-x-[1px] -translate-y-[1px]"></div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-200">
                  <svg className="w-6 h-6 text-brand-azure" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="text-lg font-bold leading-tight">
                    FREE Color Consultation
                  </div>
                  <div className="text-sm font-semibold">
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
                The New Standard for Stress-Free Home Painting
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium leading-body drop-shadow-md">
                We deliver clear timelines, thoughtful preparation, clean workspaces, and proactive communication—so your project runs smoothly from day one to final walkthrough.
              </p>
              <div className="text-base text-white font-semibold drop-shadow">
                Serving discerning Austin homeowners who value quality, professionalism, and reliability.
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-azureDark hover:bg-brand-azure text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  Request Consultation
                </Link>
                <a href="tel:(512)240-2246" className="inline-flex items-center justify-center px-8 py-4 bg-brand-azureDark hover:bg-brand-azure text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2">
                  <Phone className="w-5 h-5 mr-2" />
                  (512) 240-2246
                </a>
              </div>
          </div>
          </div>
        </div>
      </section>

      {/* Why This Feels Different */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Why This Feels Different
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Most painting projects create anxiety. We've built a process that removes the common frustrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Concern 1 */}
            <div className="bg-brand-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                Proactive & Consistent Communication
              </h3>
              <p className="text-brand-gray-600 mb-3">
                Many contractors go silent after signing the contract. Timelines shift without warning.
              </p>
              <p className="text-brand-gray-900 font-semibold">
                → We confirm schedules in writing, provide daily updates, and respond to calls and texts promptly.
              </p>
            </div>

            {/* Concern 2 */}
            <div className="bg-brand-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                Clean & Organized Work Areas
              </h3>
              <p className="text-brand-gray-600 mb-3">
                Paint spills on floors. Debris left in landscaping. No respect for your property.
              </p>
              <p className="text-brand-gray-900 font-semibold">
                → We protect surfaces before work begins and clean daily. Your home remains organized throughout the project.
              </p>
            </div>

            {/* Concern 3 */}
            <div className="bg-brand-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                Reliable & Punctual Scheduling
              </h3>
              <p className="text-brand-gray-600 mb-3">
                Projects drag on indefinitely. Crews disappear mid-project to work other jobs.
              </p>
              <p className="text-brand-gray-900 font-semibold">
                → We schedule projects realistically and commit our crew to your timeline. If something changes, we notify you immediately.
              </p>
            </div>

            {/* Concern 4 */}
            <div className="bg-brand-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">
                Clear & Transparent Expectations
              </h3>
              <p className="text-brand-gray-600 mb-3">
                Vague contracts. Hidden costs. Disputes about what's included in the scope.
              </p>
              <p className="text-brand-gray-900 font-semibold">
                → We provide written estimates that clearly define the work scope, what's included, and total cost—so there's no confusion later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Working Process */}
      <ProcessSection
        title="A Clear, Step-by-Step Process"
        subtitle="From consultation to completion, you'll know exactly what's happening and when"
        steps={[
          {
            number: 1,
            title: 'Initial Consultation',
            description: 'We visit your property to assess surfaces, discuss your goals, and answer questions. You receive a detailed written estimate with no pressure to commit.'
          },
          {
            number: 2,
            title: 'Project Planning',
            description: 'Once you approve, we confirm dates, review protection protocols, and establish a communication plan so you know exactly what to expect.'
          },
          {
            number: 3,
            title: 'Surface Preparation',
            description: 'Proper prep determines paint longevity. We thoroughly clean, repair, and prime surfaces before any finish coats are applied.'
          },
          {
            number: 4,
            title: 'Application & Progress Updates',
            description: 'Our crew works efficiently while maintaining clean, organized work areas. We provide regular updates and address any questions as they arise.'
          },
          {
            number: 5,
            title: 'Final Review',
            description: 'We walk through the completed work together, address any concerns immediately, and ensure you\'re completely satisfied before we consider the project finished.'
          }
        ]}
      />

      {/* Services Overview - Framed by Outcomes */}
      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              What We Can Help You Accomplish
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              Each service follows the same organized approach—clear planning, thorough prep, and consistent communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Interior Painting */}
            <Link to="/services/interior-painting" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3 group-hover:text-brand-azure transition-colors">
                  Interior Painting
                </h3>
                <p className="text-brand-gray-600 mb-4">
                  Refresh your living spaces without disrupting daily life. Protected furniture, daily cleanup, and minimal inconvenience.
                </p>
                <span className="text-brand-azure font-semibold group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>

            {/* Exterior Painting */}
            <Link to="/services/exterior-painting" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3 group-hover:text-brand-azure transition-colors">
                  Exterior Painting
                </h3>
                <p className="text-brand-gray-600 mb-4">
                  Protect your home from Austin's weather while improving curb appeal. Weather-appropriate materials and proper surface prep.
                </p>
                <span className="text-brand-azure font-semibold group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>

            {/* Cabinet Painting */}
            <Link to="/services/cabinet-refinishing" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3 group-hover:text-brand-azure transition-colors">
                  Cabinet Painting
                </h3>
                <p className="text-brand-gray-600 mb-4">
                  Update your kitchen at a fraction of replacement cost. Durable finish that withstands daily use.
                </p>
                <span className="text-brand-azure font-semibold group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>

            {/* Commercial Painting */}
            <Link to="/services/commercial" className="group">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-xl font-bold text-brand-gray-900 mb-3 group-hover:text-brand-azure transition-colors">
                  Commercial Painting
                </h3>
                <p className="text-brand-gray-600 mb-4">
                  Coordinate around your business hours. Minimize disruption while maintaining professional results.
                </p>
                <span className="text-brand-azure font-semibold group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Financing Options Available
            </h2>
            <p className="text-xl text-brand-gray-600 mb-8 max-w-2xl mx-auto">
              We offer payment plans through established lenders for projects of all sizes
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link to="/financing" className="inline-block transition-transform">
                <img
                  src="/financing-24-month-interest-free-badge.png"
                  alt="Up to 24 months interest-free financing available"
                  className="w-80 h-auto drop-shadow-2xl"
                  width="320"
                  height="320"
                />
              </Link>
              <Link
                to="/financing"
                className="text-brand-azure hover:text-brand-azureDark font-semibold text-lg underline decoration-2 underline-offset-4 transition-colors"
              >
                Click to estimate financing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Painting Costs Table */}
      <PaintingCostsTable />

      {/* Typical Home Costs */}
      <TypicalHomeCosts />

      {/* Neighborhood Trust Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Trusted Throughout Austin
            </h2>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto">
              We bring the same level of care and professionalism to every project—whether it's a home in Tarrytown, West Lake Hills, or Northwest Hills.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-brand-gray-900 mb-4">
                What Makes Our Approach Consistent
              </h3>
              <div className="space-y-4 text-lg text-brand-gray-600">
                <p>
                  <span className="font-semibold text-brand-gray-900">Same crew, start to finish.</span> You won't see different teams showing up each day. The crew that starts your project completes it.
                </p>
                <p>
                  <span className="font-semibold text-brand-gray-900">Same communication standard.</span> Whether you prefer text, email, or phone calls, we establish your preferred method during planning and stick with it.
                </p>
                <p>
                  <span className="font-semibold text-brand-gray-900">Same quality expectations.</span> We don't adjust our prep work or material standards based on project size or location. Proper surface preparation and application techniques apply everywhere.
                </p>
                <p>
                  <span className="font-semibold text-brand-gray-900">Same protection protocols.</span> Drop cloths, plastic sheeting, and daily cleanup happen on every job—whether it's a single room or an entire exterior.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-brand-gray-600 mb-6">
                Serving: Austin, Tarrytown, West Lake Hills, Northwest Hills, Westlake Highlands, Lakeway, and surrounding communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern G: Testimonials */}
      <TestimonialsSection
        title="What Clients Say About Working With Us"
        testimonials={testimonials}
      />

      {/* Pattern A: Stats & Trust */}
      <StatsAndTrust surface="white" />

      {/* NAP & Map Section */}
      <NAPMapSection />

      {/* Pattern H: Service Areas */}
      <ServiceAreasSection
        title="Serving Austin & Surrounding Areas"
        subtitle="Professional painting services throughout the Austin metro"
        areas={serviceAreas}
      />

      {/* Pattern F: Mini-FAQ */}
      <MiniFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />

      {/* Pattern I: CTA Banner */}
      <CTABanner
        title="Let's Talk About Your Project"
        subtitle="We'll assess your space, answer your questions, and provide a detailed estimate—no pressure, no obligation"
        primaryCTA={{
          text: 'Request Consultation',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Call (512) 240-2246',
          href: 'tel:(512) 240-2246'
        }}
        backgroundColor="coral"
      />
    </>
  );
};

export default Home;