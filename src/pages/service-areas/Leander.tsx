import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Home, Sun, CheckCircle } from 'lucide-react';
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
      question: 'Do you serve all Leander neighborhoods including Crystal Falls, Travisso, and Mason Hills?',
      answer: 'Yes — we work throughout Leander including Crystal Falls, Travisso, Mason Hills, Devine Lake, and Bryson. Each of these master-planned communities has its own HOA and architectural review process, and we have experience navigating all of them. We know which color families are generally pre-approved and which require a more detailed submission.'
    },
    {
      question: 'What exterior coating do you recommend for new construction homes in Leander?',
      answer: 'Most new construction in Leander uses builder-grade exterior paint that performs well for the first 3–5 years, then chalks and fades — especially on west and south elevations with Leander\'s intense sun exposure. We recommend upgrading to Sherwin-Williams Duration Exterior or Emerald Exterior, which provide significantly longer service life. The cost difference upfront is modest compared to the extra years between repaints.'
    },
    {
      question: 'How do HOA color approvals work in Leander master-planned communities?',
      answer: 'Leander HOAs like Crystal Falls and Travisso require a formal color approval before exterior painting. We prepare complete submissions — color chips, product specs, description of surfaces — and submit on your behalf. We aim for first-pass approval by choosing colors that align with each community\'s published color palette guidelines. Approvals typically take 2–4 weeks, so we factor this into project scheduling.'
    },
    {
      question: 'Can you match and repair areas of existing paint without doing a full repaint?',
      answer: 'Yes, though it depends on the age and fade level of the existing paint. On newer homes (under 5 years) with limited sun damage, touch-up matching is often feasible. On homes where the exterior has chalked, faded, or shows significant UV shift, a full repaint is usually the more cost-effective approach because touch-ups will remain visible. We assess this during the estimate visit and give you an honest recommendation.'
    },
    {
      question: 'Do you do interior painting for new construction upgrades in Leander?',
      answer: 'Yes — this is one of the most popular services in Leander. Builders in Crystal Falls, Bryson, and other new communities use flat builder-grade interior paint across all walls. It looks fine initially but scuffs and marks easily. We upgrade to eggshell or satin finishes in high-traffic areas and repaint accent walls, trim, and built-ins to create the personalized interior the builder version didn\'t deliver.'
    }
  ];

  const testimonials = [
    {
      name: 'Jason & Emily W.',
      location: 'Crystal Falls, Leander',
      rating: 5,
      text: 'We had Hill Country Painting do our full exterior in Crystal Falls. They handled the HOA submission start to finish, got approved on the first try, and completed the job in three days. The crew was professional and the result is exactly what we wanted.',
      initials: 'JW'
    },
    {
      name: 'Amanda P.',
      location: 'Travisso, Leander',
      rating: 5,
      text: 'Our builder-grade interior was starting to show wear everywhere. Hill Country Painting repainted the whole house with upgraded paint and it looks like a completely different home. They were respectful of our space and everything was cleaned up perfectly.',
      initials: 'AP'
    }
  ];

  return (
    <>
      <SEO
        title="Leander TX Painting Services | HOA Specialists | Hill Country Painting"
        description="Professional painting services in Leander, TX. Interior, exterior, and cabinet painting for Crystal Falls, Travisso, Mason Hills, Devine Lake, and Bryson. HOA color approval experts for Leander master-planned communities."
        canonical="/service-areas/leander"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'Leander', url: '/service-areas/leander' }
        ]}
        service={{
          name: 'Leander TX Painting Services',
          description: 'Professional interior and exterior painting throughout Leander, Texas. Specialists in master-planned community HOA compliance, new construction upgrades, and premium exterior coatings for Crystal Falls, Travisso, Mason Hills, Devine Lake, and Bryson.',
          areaServed: ['Leander', 'Crystal Falls', 'Travisso', 'Mason Hills', 'Devine Lake', 'Bryson']
        }}
        localBusiness={{
          name: 'Hill Country Painting - Leander',
          address: 'Leander, TX 78641',
          telephone: '+15127601334'
        }}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Professional home painting in Leander Texas"
            className="w-full h-full object-cover"
            location="Leander, TX"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-900/85 via-brand-gray-900/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-green-400" />
              <span className="text-brand-green-400 font-medium">Leander, TX 78641 · 78646</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Leander<br />
              <span className="text-brand-green-400">Painting Services</span>
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8 leading-relaxed">
              Interior, exterior, and cabinet painting for Leander's fastest-growing master-planned communities. HOA color approval experts for Crystal Falls, Travisso, Mason Hills, and all Leander neighborhoods.
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
            Painting in Leander's Fast-Growing Communities
          </h2>
          <div className="space-y-5 text-lg text-brand-gray-700">
            <p>
              Leander has been one of the fastest-growing cities in the country for several consecutive years, and the housing stock reflects that — predominantly master-planned communities built in the last 10–15 years, with new phases still under construction in Bryson, Travisso, and Crystal Falls. This creates two distinct painting contexts: newer homes with builder-grade finishes ready for an upgrade, and slightly older homes from the early build-out phases showing weather wear.
            </p>
            <p>
              Leander's position on Central Texas limestone terrain means significant UV intensity and temperature swings — over 100°F in summer, with occasional freeze events in winter. Exterior coatings here need to handle thermal cycling that can crack cheaper products at caulk joints and seams. We prep these areas carefully and use flexible, high-adhesion caulk before applying premium exterior paint.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">What We Paint in Leander</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Home, title: 'New Construction Exterior Upgrades', description: 'Builder-grade exterior paint starts showing fade and chalk faster than homeowners expect. We upgrade to premium UV-resistant coatings that significantly extend the time between repaints, with HOA color approval handled.' },
              { icon: Sun, title: 'Heat and UV Resilient Exterior Coatings', description: 'Leander\'s sun exposure is real. We use products rated specifically for Central Texas heat — Sherwin-Williams Duration and Emerald Exterior being the most common — with higher opacity for better UV blocking on south and west elevations.' },
              { icon: CheckCircle, title: 'Interior Builder-Grade Upgrades', description: 'Every Leander new construction home can benefit from upgraded interior paint. We replace flat builder paint with scrubbable finishes in living areas and premium sheen in kitchens and baths, with precise trim and ceiling work.' },
              { icon: Home, title: 'Cabinet Refinishing', description: 'Kitchen cabinet refinishing is the single highest-impact update for most Leander homes. We spray-apply multiple coats of premium cabinet finish for a result that looks factory-painted at a fraction of replacement cost.' }
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
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">Leander Painting — Frequently Asked Questions</h2>
          <MiniFAQ faqs={leanderFAQs} />
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-gray-900 mb-6">Leander Neighborhoods and Nearby Areas</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Leander Area Hub', href: '/areas/leander' },
              { label: 'Cedar Park', href: '/service-areas/cedar-park' },
              { label: 'Round Rock', href: '/service-areas/round-rock' },
              { label: 'Georgetown', href: '/service-areas/georgetown' },
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

export default Leander;
