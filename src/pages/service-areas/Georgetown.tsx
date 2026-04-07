import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Home, CheckCircle, Wind } from 'lucide-react';
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
      question: 'Do you serve Sun City Georgetown and other Del Webb communities?',
      answer: "Yes — Sun City Georgetown is one of our most active service areas. We understand the specific HOA requirements for Del Webb active adult communities and have a strong track record of first-pass color approvals with the Sun City architectural review committee. We work around residents' schedules, communicate clearly about project timelines, and deliver the kind of clean, professional results that matter to Sun City homeowners."
    },
    {
      question: 'What are the most common exterior painting challenges for Georgetown homes?',
      answer: 'Georgetown sits north of Austin on more open terrain with less tree canopy than inner-Austin neighborhoods. That means more wind exposure, more direct UV, and greater thermal cycling across seasons. Homes here — especially in Wolf Ranch and Teravista — often show faster paint degradation on west and south elevations. We address this with premium UV-resistant products and thorough prep of any chalking or oxidized surfaces before repainting.'
    },
    {
      question: 'Can you paint or restore the historic Victorian homes in Georgetown Square?',
      answer: 'Yes. Georgetown Square has some of the most architecturally interesting homes in the Austin metro — Victorian-era construction with intricate wood trim, corbels, porch details, and multi-color paint schemes. This is specialty work that requires patience, careful prep, and an eye for color harmony. We love these projects and have experience matching period-appropriate color palettes.'
    },
    {
      question: 'Do you handle Berry Creek and Teravista HOA submissions?',
      answer: 'Yes — Berry Creek and Teravista both have HOA requirements for exterior painting. We prepare complete submissions with color chips and product specs, and we are familiar with the general color parameters that each community allows. First-pass approval is our goal on every submission.'
    },
    {
      question: 'How long does a full exterior repaint take for a typical Georgetown home?',
      answer: 'Most Georgetown single-family homes take 2–4 days for a full exterior repaint, depending on size, number of stories, surface condition, and weather. Homes with significant prep work — extensive caulking, wood rot repair, or surface washing — add 1–2 days. We provide a detailed scope and timeline before starting so you know exactly what to expect.'
    }
  ];

  const testimonials = [
    {
      name: 'Robert & Linda F.',
      location: 'Sun City, Georgetown',
      rating: 5,
      text: 'Hill Country Painting did our exterior in Sun City and the process was completely smooth. They knew the HOA requirements, got approved quickly, and the work was done in three days exactly as scheduled. The crew was respectful and left the site spotless every evening.',
      initials: 'RF'
    },
    {
      name: 'Margaret C.',
      location: 'Georgetown Square',
      rating: 5,
      text: 'My Victorian home in Georgetown Square needed a full exterior repaint with the original four-color scheme preserved. Hill Country Painting researched the period-correct approach, matched the colors beautifully, and handled the detailed trim work with real skill. Could not be happier.',
      initials: 'MC'
    }
  ];

  return (
    <>
      <SEO
        title="Georgetown TX Painting Services | Sun City Specialists | Hill Country Painting"
        description="Professional painting services in Georgetown, TX. Interior and exterior painting for Sun City, Berry Creek, Wolf Ranch, Teravista, and historic Georgetown Square. HOA color approval experts."
        canonical="/service-areas/georgetown"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Georgetown', url: '/service-areas/georgetown' }
        ]}
        service={{
          name: 'Georgetown TX Painting Services',
          description: 'Professional residential and commercial painting throughout Georgetown, Texas. Specialists in Sun City Del Webb HOA compliance, historic Victorian preservation, and master-planned community exteriors in Wolf Ranch, Berry Creek, and Teravista.',
          areaServed: ['Georgetown', 'Sun City Georgetown', 'Berry Creek', 'Teravista', 'Wolf Ranch', 'Georgetown Square']
        }}
        localBusiness={{
          name: 'Hill Country Painting - Georgetown',
          address: 'Georgetown, TX 78626',
          telephone: '+15127601334'
        }}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Professional home painting in Georgetown Texas"
            className="w-full h-full object-cover"
            location="Georgetown, TX"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-900/85 via-brand-gray-900/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-green-400" />
              <span className="text-brand-green-400 font-medium">Georgetown, TX 78626 · 78628 · 78633</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Georgetown<br />
              <span className="text-brand-green-400">Painting Services</span>
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8 leading-relaxed">
              From Sun City's active adult communities to the Victorian homes of Georgetown Square, we bring the right skills and local knowledge to every Georgetown painting project.
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
            Georgetown's Unique Painting Landscape
          </h2>
          <div className="space-y-5 text-lg text-brand-gray-700">
            <p>
              Georgetown spans a wider range of home types than most Austin-area markets: Victorian and Craftsman homes in the historic downtown square, large Del Webb active adult communities in Sun City, newer master-planned developments in Wolf Ranch and Teravista, and established golf-course homes in Berry Creek. Each context has distinct requirements for colors, materials, prep approach, and HOA compliance.
            </p>
            <p>
              Georgetown's location north of Austin on open Blackland prairie and limestone terrain means more wind exposure and UV intensity than inner-Austin neighborhoods. Exterior paint degrades faster here without the benefit of mature tree shade. We factor this into every product recommendation — using top-tier exterior coatings rather than mid-grade products that will chalk or fade within a few years in Georgetown's climate.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">Georgetown Communities We Serve</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Home, title: 'Sun City Georgetown (Del Webb)', description: 'Active adult community with defined HOA requirements. We know the color approval process and have a strong first-pass submission record. We schedule around residents\' routines and communicate proactively throughout every project.' },
              { icon: CheckCircle, title: 'Historic Georgetown Square', description: 'Victorian-era homes with complex multi-color paint schemes, intricate wood trim, and historical character that deserves preservation. We approach these homes with the patience and skill they require.' },
              { icon: Wind, title: 'Wolf Ranch and Teravista', description: 'Newer master-planned communities with HOA exterior requirements and homes exposed to Georgetown\'s open-terrain wind and UV. We use premium products appropriate for this exposure level.' },
              { icon: Home, title: 'Berry Creek Golf Community', description: 'Established golf-course neighborhood homes with a mix of architectural styles. Exterior and interior repaints, cabinet refinishing, and new construction upgrades all in demand here.' }
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
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">Georgetown Painting — Frequently Asked Questions</h2>
          <MiniFAQ faqs={georgetownFAQs} />
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-gray-900 mb-6">Georgetown Neighborhoods and Nearby Areas</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Georgetown Area Hub', href: '/areas/georgetown' },
              { label: 'Round Rock', href: '/service-areas/round-rock' },
              { label: 'Cedar Park', href: '/service-areas/cedar-park' },
              { label: 'Leander', href: '/service-areas/leander' },
              { label: 'North Austin', href: '/service-areas/north-austin' },
              { label: 'Austin Service Area', href: '/service-areas/austin' },
            ].map(({ label, href }) => (
              <Link key={href} to={href} className="text-brand-green-600 hover:text-brand-green-700 font-medium underline-offset-2 hover:underline">{label}</Link>
            ))}
          </div>
          <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Helpful Guides</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/guides/hoa-color-tips-austin" className="text-brand-green-600 hover:text-brand-green-700 font-medium hover:underline underline-offset-2">HOA Color Approval Guide</Link>
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

export default Georgetown;
