import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Home, CheckCircle, Building2 } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';
import MiniFAQ from '../../components/sections/MiniFAQ';
import TestimonialsSection from '../../components/sections/TestimonialsSection';

const NorthAustin = () => {
  const northAustinFAQs = [
    {
      question: 'Do you serve the Domain area and North Austin tech corridor neighborhoods?',
      answer: 'Yes — we work throughout North Austin including neighborhoods near The Domain, Balcones, Milwood, Jollyville, and Anderson Mill. We schedule around tech-worker schedules, which often means evening consultations and projects planned for when homeowners are traveling or working remotely.'
    },
    {
      question: 'What are the most common painting projects in North Austin?',
      answer: 'North Austin has a mix of mid-century modern homes (1960s–1980s) in Balcones and Milwood that often need exterior repaints to restore their clean-line aesthetic, and newer townhomes and condos near The Domain that need interior work. We handle both contexts well — mid-century ranch homes need careful prep of older surfaces, while condo interiors require good coordination with building management.'
    },
    {
      question: 'Do you paint commercial spaces near The Domain?',
      answer: 'Yes. The North Austin/Domain corridor has a concentration of tech offices, co-working spaces, and retail that periodically needs interior repaints. We work during off-hours to minimize disruption, and we have experience with the kind of clean, neutral palette most tech office environments prefer.'
    },
    {
      question: 'How do you handle interior painting in North Austin townhomes and condos?',
      answer: 'Townhomes and condos near The Domain and North Loop have unique logistics — limited parking, elevator coordination, and often stricter noise hours. We plan every condo project around these constraints, bring the right-sized crew and equipment, and communicate with building management when required. We\'ve done enough of this work that none of it surprises us.'
    },
    {
      question: 'Can you match paint on mid-century homes in Balcones and Milwood where the original colors are unknown?',
      answer: 'Yes — we use spectrophotometric color matching to identify existing paint colors precisely. For mid-century homes where the original exterior color has shifted due to weathering, we can either match the current faded color or, if you have historic photos or period-correct color references, advise on what the original scheme likely was. We genuinely enjoy working on mid-century properties.'
    }
  ];

  const testimonials = [
    {
      name: 'Kevin L.',
      location: 'Balcones, North Austin',
      rating: 5,
      text: 'I have a 1970s ranch home in Balcones that needed a full exterior repaint. Hill Country Painting knew exactly how to prep the older surfaces, matched the colors I wanted perfectly, and the result looks better than the house has looked in years. Highly professional from start to finish.',
      initials: 'KL'
    },
    {
      name: 'Priya & Dan S.',
      location: 'Domain Area, North Austin',
      rating: 5,
      text: 'We live in a townhome near The Domain and had Hill Country Painting do a full interior repaint. They handled the parking and elevator logistics without any issues, completed everything in two days, and left the place spotless. We would definitely use them again.',
      initials: 'PS'
    }
  ];

  return (
    <>
      <SEO
        title="North Austin Painting Services | Interior & Exterior | Hill Country Painting"
        description="Professional painting services in North Austin, TX. Interior and exterior painting for Balcones, Milwood, Jollyville, Anderson Mill, and the Domain corridor. Expert painters for mid-century homes, townhomes, and commercial spaces."
        canonical="/service-areas/north-austin"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'North Austin', url: '/service-areas/north-austin' }
        ]}
        service={{
          name: 'North Austin Painting Services',
          description: 'Professional interior and exterior painting throughout North Austin, Texas. Specialists in mid-century modern homes, tech corridor townhomes and condos, and commercial spaces near The Domain. Serving Balcones, Milwood, Jollyville, Anderson Mill, and the Domain area.',
          areaServed: ['North Austin', 'Balcones', 'Milwood', 'Jollyville', 'Anderson Mill', 'The Domain Area']
        }}
        localBusiness={{
          name: 'Hill Country Painting - North Austin',
          address: 'North Austin, TX 78750',
          telephone: '+15127601334'
        }}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Professional home painting in North Austin Texas"
            className="w-full h-full object-cover"
            location="North Austin, TX"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-900/85 via-brand-gray-900/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-green-400" />
              <span className="text-brand-green-400 font-medium">North Austin, TX · 78750 · 78758 · 78727 · 78729</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              North Austin<br />
              <span className="text-brand-green-400">Painting Services</span>
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8 leading-relaxed">
              Interior and exterior painting for North Austin's mid-century homes, tech-corridor townhomes, and Domain-area commercial spaces. Flexible scheduling built around how North Austin residents actually live and work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold rounded-lg transition-colors">
                Get a Free Estimate
              </Link>
              <a href="tel:+15127601334" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-brand-gray-900 font-semibold rounded-lg transition-colors">
                <Phone className="w-5 h-5" />
                (512) 760-1334
              </a>
            </div>
          </div>
        </div>
      </section>

      <StatsAndTrust />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">
            North Austin's Two Distinct Painting Contexts
          </h2>
          <div className="space-y-5 text-lg text-brand-gray-700">
            <p>
              North Austin splits roughly into two eras of development: the established neighborhoods of Balcones, Milwood, and Jollyville built predominantly in the 1960s through 1980s, and the newer density around The Domain and North Loop — townhomes, condos, and mixed-use buildings developed in the last 15 years. Each context calls for a different set of skills and logistics.
            </p>
            <p>
              Mid-century ranch homes in Balcones and Milwood often need more involved exterior prep — older surfaces with chalking or surface oxidation, wood trim that needs spot replacement or consolidation before painting, and vintage architectural details worth preserving. Townhomes and condos near The Domain need interior painters who know how to coordinate with building management, work within noise windows, and handle limited staging space professionally.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">What We Paint in North Austin</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Home, title: 'Mid-Century Ranch Home Exteriors', description: 'Balcones and Milwood ranch homes from the 1960s–80s have their own exterior prep requirements — older surfaces, wood trim, and a clean architectural aesthetic that rewards proper technique. We prep thoroughly and apply products appropriate for aged substrates.' },
              { icon: Building2, title: 'Townhomes and Condos', description: 'Interior repaints for Domain-area townhomes and condos require coordination with building management, elevator scheduling, and work within community noise rules. We handle all of this routinely.' },
              { icon: CheckCircle, title: 'Full Interior Repaints', description: 'Whole-home interior repaints are popular in North Austin for both long-term homeowners refreshing dated colors and new buyers personalizing a recently purchased home. We handle walls, ceilings, trim, and doors as a single coordinated project.' },
              { icon: Home, title: 'Cabinet Refinishing', description: 'Kitchen and bathroom cabinet refinishing gives North Austin homeowners a high-impact update without full renovation cost. Our spray-applied finish produces factory-quality results on kitchens of any size.' }
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-brand-gray-100">
                <Icon className="w-8 h-8 text-brand-green-500 mb-3" />
                <h3 className="text-lg font-bold text-brand-gray-900 mb-2">{title}</h3>
                <p className="text-brand-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">North Austin Painting — Frequently Asked Questions</h2>
          <MiniFAQ faqs={northAustinFAQs} />
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-gray-900 mb-6">North Austin Neighborhoods and Nearby Areas</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Allandale & Northwest Hills', href: '/areas/allandale-and-northwest-hills' },
              { label: 'Northwest Hills', href: '/service-areas/northwest-hills' },
              { label: 'Leander', href: '/service-areas/leander' },
              { label: 'Cedar Park', href: '/service-areas/cedar-park' },
              { label: 'Round Rock', href: '/service-areas/round-rock' },
              { label: 'Austin Service Area', href: '/service-areas/austin' },
            ].map(({ label, href }) => (
              <Link key={href} to={href} className="text-brand-green-600 hover:text-brand-green-700 font-medium underline-offset-2 hover:underline">{label}</Link>
            ))}
          </div>
          <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Helpful Guides</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/guides/painting-costs-austin" className="text-brand-green-600 hover:text-brand-green-700 font-medium hover:underline underline-offset-2">Austin Area Painting Costs</Link>
            <Link to="/guides/best-paint-texas-heat" className="text-brand-green-600 hover:text-brand-green-700 font-medium hover:underline underline-offset-2">Best Paint for Texas Heat</Link>
            <Link to="/guides/how-often-paint-central-texas" className="text-brand-green-600 hover:text-brand-green-700 font-medium hover:underline underline-offset-2">How Often to Paint in Central Texas</Link>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />
      <CTABanner />
    </>
  );
};

export default NorthAustin;
