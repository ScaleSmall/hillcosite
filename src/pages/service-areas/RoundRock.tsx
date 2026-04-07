import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Home, CheckCircle, Sun } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';
import MiniFAQ from '../../components/sections/MiniFAQ';
import TestimonialsSection from '../../components/sections/TestimonialsSection';

const RoundRock = () => {
  const roundRockFAQs = [
    {
      question: 'Do you serve Forest Creek, Mayfield Ranch, and other Round Rock neighborhoods?',
      answer: 'Yes — we work throughout Round Rock including Forest Creek, Mayfield Ranch, Brushy Creek, Round Rock Ranch, and Vista Oaks. We are familiar with the HOA requirements in these communities and handle color submission paperwork for homeowners who need exterior approval before starting.'
    },
    {
      question: 'What are the most common exterior painting issues for Round Rock homes?',
      answer: 'Round Rock homes range from late 1990s construction in Forest Creek and Brushy Creek to newer builds in Mayfield Ranch and Vista Oaks. The early-2000s homes are starting to show their age — chalky or oxidized brick paint, peeling trim, failed caulk at window and door frames, and builder-grade coatings that have exceeded their service life. We assess every surface during the estimate visit and provide a clear prep and product plan before starting.'
    },
    {
      question: 'How do you schedule painting projects around busy family schedules in Round Rock?',
      answer: 'Round Rock is a dense family community with school schedules, youth sports, and two-career households. We offer estimate appointments in the evenings and on weekends, and we plan project start times and schedules with minimal disruption as an explicit goal. Interior projects are sequenced room by room so your family always has functional space during the work.'
    },
    {
      question: 'Do you handle HOA color approvals for exterior repaints in Round Rock communities?',
      answer: 'Yes — Forest Creek, Brushy Creek, and other Round Rock communities with HOAs require exterior color approval. We prepare complete submissions and aim for first-pass approval. If your community requires a specific color palette, we work from those guidelines and recommend colors within the approved range.'
    },
    {
      question: 'What is the difference between interior painting and cabinet refinishing in terms of cost?',
      answer: 'Interior painting covers walls, ceilings, trim, and doors — typically the most impactful refresh for a home\'s overall look. Cabinet refinishing is a more targeted, precision service focused specifically on cabinet boxes, doors, and drawer fronts using spray-applied finish. Both are popular in Round Rock; cabinet refinishing is typically one-third to one-half the cost of a full kitchen replacement while delivering a dramatic result.'
    }
  ];

  const testimonials = [
    {
      name: 'Marcus & Tanya H.',
      location: 'Forest Creek, Round Rock',
      rating: 5,
      text: 'We had a full exterior repaint done by Hill Country Painting in Forest Creek. They prepped the older surfaces thoroughly, handled our HOA submission, and the job looked exactly like the estimate said it would. Timeline and price were both on target.',
      initials: 'MH'
    },
    {
      name: 'Laura B.',
      location: 'Mayfield Ranch, Round Rock',
      rating: 5,
      text: 'Hill Country Painting repainted our kitchen cabinets and the entire interior. The cabinet finish is genuinely as good as new factory-painted cabinets — smooth, durable, and exactly the color I wanted. Interior walls were done clean and fast. Will use them again.',
      initials: 'LB'
    }
  ];

  return (
    <>
      <SEO
        title="Round Rock TX Painting Services | HOA Specialists | Hill Country Painting"
        description="Professional painting services in Round Rock, TX. Interior, exterior, and cabinet painting for Forest Creek, Mayfield Ranch, Brushy Creek, Round Rock Ranch, and Vista Oaks. HOA color approval experts."
        canonical="/service-areas/round-rock"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Round Rock', url: '/service-areas/round-rock' }
        ]}
        service={{
          name: 'Round Rock TX Painting Services',
          description: 'Professional interior and exterior painting throughout Round Rock, Texas. Serving Forest Creek, Mayfield Ranch, Brushy Creek, Round Rock Ranch, and Vista Oaks with interior repaints, exterior painting, and cabinet refinishing.',
          areaServed: ['Round Rock', 'Forest Creek', 'Mayfield Ranch', 'Brushy Creek', 'Round Rock Ranch', 'Vista Oaks']
        }}
        localBusiness={{
          name: 'Hill Country Painting - Round Rock',
          address: 'Round Rock, TX 78664',
          telephone: '+15127601334'
        }}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Professional home painting in Round Rock Texas"
            className="w-full h-full object-cover"
            location="Round Rock, TX"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-900/85 via-brand-gray-900/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-green-400" />
              <span className="text-brand-green-400 font-medium">Round Rock, TX 78664 · 78665 · 78681</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Round Rock<br />
              <span className="text-brand-green-400">Painting Services</span>
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8 leading-relaxed">
              Interior, exterior, and cabinet painting for Round Rock's established and growing neighborhoods. Reliable scheduling, HOA color approval handling, and professional results for every home in Forest Creek, Mayfield Ranch, and beyond.
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
            Painting Round Rock's Established Neighborhoods
          </h2>
          <div className="space-y-5 text-lg text-brand-gray-700">
            <p>
              Round Rock's major residential neighborhoods were built in waves: the late 1990s build-out in Forest Creek and Brushy Creek, mid-2000s growth in Round Rock Ranch and Vista Oaks, and more recent expansion in Mayfield Ranch. Each era has a distinct set of exterior characteristics — older homes in the 1990s wave are now showing the kind of surface wear that requires proper prep before repainting, not just a fresh coat over deteriorating surfaces.
            </p>
            <p>
              Round Rock sits on Blackland prairie with hot summers and limited natural shade in the newer subdivisions. Exterior paint here faces direct UV exposure and the thermal cycling common to Central Texas. We use products rated for this environment and pay close attention to caulk joints at windows and doors, which are the most common early failure point on homes of this age.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">What We Paint in Round Rock</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Home, title: 'Established Neighborhood Exterior Repaints', description: 'Forest Creek and Brushy Creek homes from the late 1990s are entering their second or third repaint cycle. We assess surface condition, prep chalking or oxidized areas properly, and use products appropriate for older substrates.' },
              { icon: Sun, title: 'UV-Resistant Exterior Coatings', description: 'Round Rock\'s open-terrain sun exposure means exterior paint needs real UV resistance. We recommend and use premium products — not builder-grade exterior lines — for repaints that hold their color and sheen for years rather than seasons.' },
              { icon: CheckCircle, title: 'Full Interior Repaints', description: 'Interior repaints are the most common project in Round Rock — both color refreshes for long-term homeowners and full repaints for new buyers. We work efficiently around family schedules and deliver clean, precise results.' },
              { icon: Home, title: 'Cabinet Refinishing', description: 'Cabinet refinishing transforms Round Rock kitchens at a fraction of replacement cost. We spray-apply multiple coats of premium cabinet finish for a result that looks new — popular in homes where the kitchen layout is good but the cabinets look dated.' }
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
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">Round Rock Painting — Frequently Asked Questions</h2>
          <MiniFAQ faqs={roundRockFAQs} />
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-gray-900 mb-6">Round Rock Neighborhoods and Nearby Areas</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Round Rock Area Hub', href: '/areas/round-rock' },
              { label: 'Georgetown', href: '/service-areas/georgetown' },
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

export default RoundRock;
