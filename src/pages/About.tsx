import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SplitSection from '../components/sections/SplitSection';
import StatsAndTrust from '../components/sections/StatsAndTrust';
import CTABanner from '../components/sections/CTABanner';

const About = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us' }
  ];

  const aboutStats = [
    {
      icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">15</div>,
      value: "15+ Years",
      label: "Experience"
    },
    {
      icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">100</div>,
      value: "100+",
      label: "Projects Complete"
    },
    {
      icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">★</div>,
      value: "5-Star",
      label: "Reviews"
    },
    {
      icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>,
      value: "Insured",
      label: "Austin Local"
    }
  ];

  return (
    <>
      <SEO
        title="About — Hill Country Painting"
        description="Austin painting pros. 15+ years experience. 100+ homes painted. Insured crew with 2-year warranty. Clean prep, crisp lines, reliable schedules."
        canonical="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-deep-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-900 leading-heading">
              About Hill Country Painting
            </h1>
            <p className="text-xl text-slate-600 leading-body">
              Austin's trusted painting professionals, committed to transforming homes and commercial spaces with clean prep, crisp lines, and reliable schedules. Insured, experienced, and backed by a 2-year warranty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Consultation
              </Link>
              <Link to="/gallery" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern C: Story */}
      <SplitSection
        title="Our Austin Story"
        description="Hill Country Painting was founded with a simple mission: to provide Austin homeowners with honest, professional painting services they can trust. After 15+ years serving the Austin market, we've built our reputation on quality work, clear communication, and reliable service throughout the metro area."
        benefits={[
          { text: 'Local Austin business, supporting our community' },
          { text: '15+ years of experience in Austin homes' },
          { text: 'Insured crew you can trust in your home' },
          { text: '2-year warranty on all painting services' },
          { text: 'Transparent pricing with no hidden fees' },
          { text: 'Clean prep work and professional execution' }
        ]}
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Austin painting professionals - Hill Country Painting experienced crew at work"
      />

      {/* Pattern A: Years/Projects Stats */}
      <StatsAndTrust stats={aboutStats} />

      {/* Pattern I: CTA Banner */}
      <CTABanner
        title="Ready to Experience the Difference?"
        subtitle="Join hundreds of satisfied Austin homeowners who trust Hill Country Painting"
        primaryCTA={{
          text: 'Get Consultation',
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

export default About;