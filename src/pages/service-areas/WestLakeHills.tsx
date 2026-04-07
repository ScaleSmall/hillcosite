import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Award, Home, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import ImageWithGeo from '../../components/ImageWithGeo';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import ServicesGrid from '../../components/sections/ServicesGrid';
import CTABanner from '../../components/sections/CTABanner';
import MiniFAQ from '../../components/sections/MiniFAQ';
import TestimonialsSection from '../../components/sections/TestimonialsSection';

const WestLakeHills = () => {
  const westLakeHillsFAQs = [
    {
      question: 'Do you specialize in luxury homes and high-end finishes in West Lake Hills?',
      answer: 'Yes. West Lake Hills homes demand premium materials, tight craftsmanship, and painters who understand what a luxury finish actually means at this price point. We use fine-finish products from Benjamin Moore Aura, Sherwin-Williams Emerald, and specialty lines for millwork and cabinetry. Every project includes dedicated prep, careful masking of stone, wood, and metal details, and a final walk-through with the homeowner before we leave the site.'
    },
    {
      question: 'How do you handle hillside access and challenging terrain in West Lake Hills?',
      answer: 'Many West Lake Hills homes sit on steep limestone terrain with limited staging areas and mature landscaping that must be protected. We plan access routes before starting, use smaller equipment footprints when needed, and never take shortcuts with drop cloths or plant protection. Hillside work also requires extra attention to paint runoff and overspray management, which we address in every exterior project plan.'
    },
    {
      question: 'Can you work with HOA requirements in West Lake Hills and the Eanes corridor?',
      answer: 'Absolutely. We regularly navigate HOA color submissions in West Lake Hills, Rob Roy, Davenport Ranch, Lost Creek, and the broader Eanes ISD corridor. We know which communities have architectural review committees, how long approvals typically take, and how to prepare color submissions that get approved on the first pass.'
    },
    {
      question: 'What exterior paint products do you recommend for West Lake Hills limestone and stucco homes?',
      answer: 'Limestone and stucco facades need breathable, UV-resistant coatings that flex with the thermal movement of the substrate. We primarily recommend Sherwin-Williams Duration or Emerald for smooth stucco, and elastomeric coatings for surfaces with micro-cracking or moisture history. We assess each surface individually — there is no single right answer for this area.'
    },
    {
      question: 'Do you offer cabinet refinishing for the high-end kitchens common in West Lake Hills?',
      answer: 'Cabinet refinishing is one of our most requested services in West Lake Hills. Custom cabinetry worth preserving can be transformed with a proper spray refinish — typically at 15–20% of replacement cost. We use spray application, multiple coats, and sanding between each for a factory-quality result.'
    }
  ];

  const testimonials = [
    {
      name: 'Catherine & David M.',
      location: 'West Lake Hills',
      rating: 5,
      text: 'We have a complex hillside home with stucco, cedar siding, and metal roof line details. Hill Country Painting handled every material correctly, protected our landscaping perfectly, and the finished result is exceptional. They clearly understand luxury property work.',
      initials: 'CM'
    },
    {
      name: 'Jennifer T.',
      location: 'Rob Roy, West Lake Hills',
      rating: 5,
      text: 'Our HOA has very specific color requirements. Hill Country Painting walked us through the approval process, submitted everything correctly, and the paint job itself is flawless. No revision requests, no drama.',
      initials: 'JT'
    }
  ];

  return (
    <>
      <SEO
        title="West Lake Hills Luxury Painting | Premium Painters | Hill Country Painting"
        description="Professional luxury painting services in West Lake Hills, TX. Expert interior and exterior painting for high-end homes with premium finishes. Trusted by West Lake Hills homeowners for exceptional craftsmanship."
        canonical="/service-areas/west-lake-hills"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas' },
          { name: 'West Lake Hills', url: '/service-areas/west-lake-hills' }
        ]}
        service={{
          name: 'West Lake Hills Luxury Painting Services',
          description: 'Professional luxury residential painting services throughout West Lake Hills, Texas. Specializing in high-end homes, premium finishes, hillside properties, and strict HOA compliance.',
          areaServed: ['West Lake Hills', 'Westlake', 'Rob Roy', 'Eanes', 'Rollingwood', 'Lost Creek', 'Davenport Ranch', 'Barton Creek']
        }}
        localBusiness={{
          name: 'Hill Country Painting - West Lake Hills',
          address: 'West Lake Hills, TX 78746',
          telephone: '+15127601334'
        }}
      />

      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithGeo
            src="/austin-professional-house-painting-hero.jpg"
            alt="Luxury home painting in West Lake Hills Texas"
            className="w-full h-full object-cover"
            location="West Lake Hills, TX"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-900/85 via-brand-gray-900/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-green-400" />
              <span className="text-brand-green-400 font-medium">West Lake Hills, TX 78746</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              West Lake Hills<br />
              <span className="text-brand-green-400">Luxury Painters</span>
            </h1>
            <p className="text-xl text-brand-gray-200 mb-8 leading-relaxed">
              Premium painting for West Lake Hills' most discerning homeowners. Hillside estates, limestone and stucco facades, and Eanes-corridor properties handled with the care and craftsmanship they deserve.
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
            Why West Lake Hills Homes Require a Different Level of Care
          </h2>
          <div className="space-y-5 text-lg text-brand-gray-700">
            <p>
              West Lake Hills is not a typical Austin suburb. Homes here sit on steep limestone terrain, often with dramatic canyon or lake views, mature live oak canopies, and custom architectural details that reflect significant design investment. The average home value in the 78746 zip code is among the highest in Central Texas — the standard for paint work is correspondingly higher.
            </p>
            <p>
              We approach every West Lake Hills project as a high-stakes engagement: arriving with a detailed access and staging plan for challenging terrain, protecting mature landscaping and hardscaping, understanding how each substrate behaves in the Hill Country microclimate, and using products appropriate for the material rather than whatever is fastest.
            </p>
            <p>
              We work comfortably alongside architects, interior designers, and general contractors — common on larger renovation projects in this area. If you have a project manager or design team involved, we integrate with them directly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">
            Surfaces and Home Types We Paint in West Lake Hills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Home,
                title: 'Limestone and Stucco Exteriors',
                description: 'The dominant exterior materials in 78746. We use breathable, elastomeric, and UV-resistant coatings specifically matched to limestone and smooth or dash stucco substrates. Every crack and joint is addressed in prep before any paint is applied.'
              },
              {
                icon: Award,
                title: 'High-End Interior Millwork',
                description: 'Custom trim, coffered ceilings, built-in cabinetry, and wood paneling common in West Lake Hills homes require fine-finish technique. We use appropriate primers, finish coats, and spray or tip-and-roll methods by surface type.'
              },
              {
                icon: Sparkles,
                title: 'Luxury Kitchen and Bath Cabinetry',
                description: 'Cabinet refinishing is one of our most in-demand services in West Lake Hills. Custom cabinetry can be transformed with a proper spray refinish at 15–20% of replacement cost with a result that rivals new factory-painted cabinets.'
              },
              {
                icon: CheckCircle,
                title: 'Multi-Level Hillside Facades',
                description: 'Many West Lake Hills homes have three or more visible stories with rooflines, exposed beams, and architectural details at difficult heights. We use boom lifts and scaffolding as needed — never ladder shortcuts that compromise quality or safety.'
              }
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
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-8">
            West Lake Hills Painting — Frequently Asked Questions
          </h2>
          <MiniFAQ faqs={westLakeHillsFAQs} />
        </div>
      </section>

      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-gray-900 mb-6">West Lake Hills Neighborhoods and Nearby Areas</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'West Lake Hills & Rollingwood', href: '/areas/west-lake-hills-and-rollingwood' },
              { label: 'Barton Creek', href: '/areas/barton-creek' },
              { label: 'Steiner Ranch', href: '/areas/steiner-ranch-78732' },
              { label: 'Tarrytown', href: '/service-areas/tarrytown' },
              { label: 'Austin Service Area', href: '/service-areas/austin' },
              { label: 'Lakeway', href: '/service-areas/lakeway' },
            ].map(({ label, href }) => (
              <Link key={href} to={href} className="text-brand-green-600 hover:text-brand-green-700 font-medium underline-offset-2 hover:underline">
                {label}
              </Link>
            ))}
          </div>
          <h3 className="text-xl font-bold text-brand-gray-900 mb-4">Helpful Painting Guides</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/guides/best-paint-texas-heat" className="text-brand-green-600 hover:text-brand-green-700 font-medium hover:underline underline-offset-2">Best Paint for Texas Heat</Link>
            <Link to="/guides/hoa-color-tips-austin" className="text-brand-green-600 hover:text-brand-green-700 font-medium hover:underline underline-offset-2">HOA Color Approval Guide</Link>
            <Link to="/guides/painting-costs-austin" className="text-brand-green-600 hover:text-brand-green-700 font-medium hover:underline underline-offset-2">Austin Painting Cost Guide</Link>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />
      <CTABanner />
    </>
  );
};

export default WestLakeHills;
