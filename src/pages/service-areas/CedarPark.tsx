import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Sun, Home, CheckCircle, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';
import MiniFAQ from '../../components/sections/MiniFAQ';
import TestimonialsSection from '../../components/sections/TestimonialsSection';

const CedarPark = () => {
  const cedarParkFAQs = [
    {
      question: 'Do you serve all Cedar Park neighborhoods including Avery Ranch and Ranch at Brushy Creek?',
      answer: 'Yes — we work throughout Cedar Park including Avery Ranch, Ranch at Brushy Creek, Buttercup Creek, Lakeline, and Twin Creeks. We know the HOA requirements for these communities and regularly help homeowners navigate the color approval process. Each of these master-planned communities has its own architectural review board and submission timeline, and we have experience with all of them.'
    },
    {
      question: 'What makes exterior painting in Cedar Park different from other areas?',
      answer: 'Cedar Park sits northwest of Austin with intense summer heat and significant UV exposure. Homes here face sun from multiple angles throughout the day, and the limestone-heavy terrain amplifies heat retention. We use premium UV-resistant exterior paints with higher opacity and heat-reflective properties. We also time exterior projects to avoid peak summer heat where possible, which improves application quality and early cure conditions.'
    },
    {
      question: 'How do you handle Cedar Park HOA color approval submissions?',
      answer: 'Most Cedar Park master-planned communities require pre-approval before exterior painting. We prepare complete submissions with paint manufacturer color chips, product data sheets, and accurate description of the surfaces being painted. We have a strong approval rate on first submission because we understand what each committee is looking for and we do not guess at acceptable color families.'
    },
    {
      question: 'Can you help with new construction paint upgrades in Cedar Park communities?',
      answer: 'Yes — new construction in Cedar Park often uses builder-grade paint that fades, scuffs, and shows wear quickly. We upgrade interior and exterior paint to professional-grade products that look better immediately and hold up for years longer. Many Cedar Park homeowners have us repaint within the first 2–3 years of a new build, before the builder paint degrades completely.'
    },
    {
      question: 'Do you offer cabinet painting in Cedar Park?',
      answer: 'Cabinet refinishing is extremely popular in Cedar Park — it is the most cost-effective way to transform a kitchen without a full renovation. We use a spray-application process with multiple coats and light sanding between coats for a smooth, durable finish that rivals factory-painted cabinets. White and off-white shaker cabinets are the most common request, but we work in any color.'
    }
  ];

  const testimonials = [
    {
      name: 'Tyler & Megan B.',
      location: 'Avery Ranch, Cedar Park',
      rating: 5,
      text: 'Used Hill Country Painting for our exterior in Avery Ranch. They helped us pick a color that HOA approved on the first submission and the paint job itself is flawless. Neighbors have asked us who we used. Will use them again.',
      initials: 'TB'
    },
    {
      name: 'Sarah K.',
      location: 'Buttercup Creek, Cedar Park',
      rating: 5,
      text: 'We had builder-grade paint on everything from when the house was built in 2019. Hill Country Painting transformed every room with proper paint and the difference is remarkable. They were on schedule, on budget, and cleaned up perfectly every day.',
      initials: 'SK'
    }
  ];

  return (
    <>
      <SEO
        title="Cedar Park Painting Services | HOA Specialists | Hill Country Painting"
        description="Professional painting services in Cedar Park, TX. Interior, exterior, and cabinet painting for Cedar Park homes. HOA color approval experts serving Avery Ranch, Ranch at Brushy Creek, Buttercup Creek, and all Cedar Park communities."
        canonical="/service-areas/cedar-park"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Cedar Park', url: '/service-areas/cedar-park' }
        ]}
        service={{
          name: 'Cedar Park Painting Services',
          description: 'Professional interior and exterior painting services throughout Cedar Park, Texas. HOA color compliance specialists for master-planned communities including Avery Ranch, Ranch at Brushy Creek, Buttercup Creek, Lakeline, and Twin Creeks.',
          areaServed: ['Cedar Park', 'Avery Ranch', 'Ranch at Brushy Creek', 'Buttercup Creek', 'Lakeline', 'Twin Creeks']
        }}
        localBusiness={{
          name: 'Hill Country Painting - Cedar Park',
          address: 'Cedar Park, TX 78613',
          telephone: '+15127601334'
        }}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Professional home painting in Cedar Park Texas"
            className="w-full h-full object-cover"
            location="Cedar Park, TX"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-900/85 via-brand-gray-900/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-green-400" />
              <span className="text-brand-green-400 font-medium">Cedar Park, TX 78613</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Cedar Park<br />
              <span className="text-brand-green-400">Painting Services</span>
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8 leading-relaxed">
              Interior, exterior, and cabinet painting for Cedar Park's master-planned communities. HOA color approval experts for Avery Ranch, Ranch at Brushy Creek, Buttercup Creek, and all Cedar Park neighborhoods.
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
            Painting Challenges Specific to Cedar Park Homes
          </h2>
          <div className="space-y-5 text-lg text-brand-gray-700">
            <p>
              Cedar Park's rapid growth means the housing stock spans a wide age range — from early 2000s tract homes to new construction in Avery Ranch and Twin Creeks completed in the last few years. Each era has its own set of exterior surface characteristics, common failure modes, and prep requirements. Homes from the early 2000s often have chalky or oxidized paint on Hardiplank or older stucco; new construction frequently has builder-grade exterior coatings that start showing wear within 3–5 years.
            </p>
            <p>
              Cedar Park's position northwest of Austin also means more consistent UV exposure than inner-Austin neighborhoods shaded by canopy. We account for this in product selection — specifically using higher-sheen exterior products on west and south-facing elevations, and recommending lighter LRV colors for surfaces that absorb significant direct sun.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">What We Paint in Cedar Park</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Home, title: 'Master-Planned Community Exteriors', description: 'Fiber cement, brick veneer, and stucco exterior painting with HOA-compliant color schemes. We handle full exterior projects including body, trim, doors, and garage doors as a single coordinated job.' },
              { icon: Sun, title: 'Heat-Exposed Exterior Surfaces', description: 'Cedar Park homes face intense UV from the northwest corridor. We use products rated for Central Texas heat — not interior-grade or lower-spec exterior paints that fade and chalk within a few seasons.' },
              { icon: CheckCircle, title: 'Interior Full-Home Repaints', description: 'New homeowners and long-term residents both choose us for full interior repaints. We handle walls, ceilings, trim, doors, and built-ins as a coordinated project with minimal disruption to daily family schedules.' },
              { icon: Home, title: 'Kitchen and Bath Cabinet Refinishing', description: 'Cedar Park kitchens are frequently the first upgrade homeowners make. Cabinet refinishing gives a fresh-kitchen look without the cost or disruption of a full remodel. We also refinish bathroom vanities and laundry room cabinetry.' }
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
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">Cedar Park Painting — Frequently Asked Questions</h2>
          <MiniFAQ faqs={cedarParkFAQs} />
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-gray-900 mb-6">Cedar Park Neighborhoods and Nearby Areas</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Cedar Park Area Hub', href: '/areas/cedar-park' },
              { label: 'Leander', href: '/service-areas/leander' },
              { label: 'Round Rock', href: '/service-areas/round-rock' },
              { label: 'North Austin', href: '/service-areas/north-austin' },
              { label: 'Georgetown', href: '/service-areas/georgetown' },
              { label: 'Austin Service Area', href: '/service-areas/austin' },
            ].map(({ label, href }) => (
              <Link key={href} to={href} className="text-brand-green-600 hover:text-brand-green-700 font-medium underline-offset-2 hover:underline">{label}</Link>
            ))}
          </div>
          <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Helpful Guides</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/guides/hoa-color-tips-austin" className="text-brand-green-600 hover:text-brand-green-700 font-medium hover:underline underline-offset-2">HOA Color Approval Guide</Link>
            <Link to="/guides/best-paint-texas-heat" className="text-brand-green-600 hover:text-brand-green-700 font-medium hover:underline underline-offset-2">Best Paint for Texas Heat</Link>
            <Link to="/guides/painting-costs-austin" className="text-brand-green-600 hover:text-brand-green-700 font-medium hover:underline underline-offset-2">Austin Area Painting Costs</Link>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />
      <CTABanner />
    </>
  );
};

export default CedarPark;
