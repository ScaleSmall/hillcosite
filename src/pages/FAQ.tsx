import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import MiniFAQ from '../components/sections/MiniFAQ';
import SplitSection from '../components/sections/SplitSection';
import CTABanner from '../components/sections/CTABanner';

const FAQ = () => {
  const allFAQs = [
    {
      question: 'Do you provide consultations?',
      answer: 'Yes, we provide detailed consultations for all our painting services. We\'ll assess your project, discuss your needs, and provide transparent pricing with no hidden fees.'
    },
    {
      question: 'Are you insured?',
      answer: 'Yes, Hill Country Painting is fully insured to protect your property and provide complete peace of mind during your project.'
    },
    {
      question: 'What is your warranty?',
      answer: 'We stand behind our work with a 2-year warranty on all painting and cabinet painting services, covering both materials and workmanship.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve Austin and the surrounding metro area, including Tarrytown, West Lake Hills, Northwest Hills, Westlake Highlands, Lakeway, and other nearby neighborhoods.'
    },
    {
      question: 'How long do painting projects typically take?',
      answer: 'Interior painting usually takes 2-5 days, exterior painting 3-7 days, and cabinet painting 3-5 days. Timeline depends on project size and scope. We provide detailed schedules during consultation.'
    },
    {
      question: 'Do I need to move furniture?',
      answer: 'No, our professional crew will carefully move and protect all furniture and belongings. We handle all preparation so you don\'t have to worry about it.'
    },
    {
      question: 'What paint brands do you use?',
      answer: 'We use premium paint brands selected for durability, coverage, and finish quality. We\'ll recommend the right options for your specific project and budget requirements.'
    },
    {
      question: 'Can you match any color?',
      answer: 'Yes, we offer complete custom color matching services and provide professional color consultation to help you choose the perfect colors for your space.'
    },
    {
      question: 'Do you work nights or weekends?',
      answer: 'For commercial projects, we offer flexible scheduling including nights and weekends to minimize business disruption. Residential projects are typically scheduled during regular business hours.'
    },
    {
      question: 'What makes your cabinet painting different?',
      answer: 'Our cabinet painting process includes complete disassembly and professional spray finishing in controlled conditions. Results look like new cabinets at a fraction of replacement cost.'
    },
    {
      question: 'Do you handle exterior painting for Austin homes?',
      answer: 'Yes, our Austin exterior painting process is built around Central Texas sun, moisture swings, substrate prep, caulking, primer selection, and durable finish systems for homes across Greater Austin.'
    },
    {
      question: 'Do you paint occupied interiors in Austin homes?',
      answer: 'Yes, our Austin interior painters work in occupied homes with furniture protection, floor protection, room-by-room scheduling, dust control, and daily cleanup so the project is easier to live through.'
    },
    {
      question: 'Can you refinish cabinets without replacing them?',
      answer: 'Yes, our Austin cabinet painting and cabinet refinishing service is designed for homeowners who want a cleaner, updated kitchen look without the disruption and cost of full cabinet replacement.'
    },
    {
      question: 'Do you offer commercial painting in Austin?',
      answer: 'Yes, we provide Austin commercial painting for offices, retail spaces, common areas, and managed properties, with scheduling options that help reduce disruption for tenants, staff, and customers.'
    },
    {
      question: 'Which Austin service areas can request an estimate?',
      answer: 'Homeowners and businesses can request painting estimates across Austin, West Lake Hills, Tarrytown, Northwest Hills, Lakeway, Bee Cave, Cedar Park, Round Rock, Georgetown, Leander, North Austin, and nearby Greater Austin communities.'
    },
    {
      question: 'How do you prepare a painting estimate?',
      answer: 'We review the surfaces, access, repairs, prep needs, finish expectations, timing, and service type before preparing a written estimate for interior painting, exterior painting, cabinet painting, or commercial painting.'
    },
    {
      question: 'How do you handle weather delays?',
      answer: 'We carefully monitor weather conditions and adjust schedules as needed for exterior work. We\'ll communicate any necessary changes promptly and work with you to minimize project delays.'
    },
    {
      question: 'Do you offer color consultation?',
      answer: 'Yes, we provide free color consultation services to help you choose colors that complement your space, lighting, and personal style preferences.'
    }
  ];

  const priorityFAQLinks = [
    {
      title: 'Austin Exterior Painting FAQ',
      description: 'Prep, weather timing, siding, trim, caulking, and durable exterior paint systems for Austin homes.',
      href: '/exterior-painting-austin'
    },
    {
      title: 'Austin Interior Painting FAQ',
      description: 'Room-by-room scheduling, furniture protection, walls, ceilings, trim, doors, and occupied-home painting.',
      href: '/interior-painting-austin'
    },
    {
      title: 'Austin Cabinet Painting FAQ',
      description: 'Cabinet refinishing, spray finishes, kitchen updates, prep steps, and alternatives to cabinet replacement.',
      href: '/cabinet-refinishing-austin'
    },
    {
      title: 'Austin Commercial Painting FAQ',
      description: 'Office, retail, managed-property, tenant-space, and schedule-sensitive commercial repaint questions.',
      href: '/commercial-painting-austin'
    },
    {
      title: 'Austin House Painters FAQ',
      description: 'Service-area coverage, local estimate options, trust signals, reviews, and Greater Austin painting support.',
      href: '/service-areas/austin'
    }
  ];

  return (
    <>
      <SEO
        title="FAQ — Hill Country Painting"
        description="Answers to painting questions. Warranty info, service areas, timelines. Hill Country Painting FAQ for Austin homeowners. Get answers now."
        canonical="/faq"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' }
        ]}
        faq={allFAQs}
        includeLocalBusiness={true}
      />

      {/* Hero */}
      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 leading-heading">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-brand-gray-600 leading-body">
              Get answers to common questions about our painting services, warranty, process, and more. Don't see your question? Contact us for personalized answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Request a Consultation
              </Link>
              <a href="tel:+15122402246" className="btn-outline">
                Call (512) 240-2246
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <MiniFAQ faqs={allFAQs} />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-4">
              Austin Painting FAQ Topics
            </h2>
            <p className="text-lg text-brand-gray-700 leading-body">
              For service-specific answers, review the Austin painting page that matches your project type.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {priorityFAQLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-lg border border-brand-gray-200 p-5 transition-colors hover:border-brand-azure hover:bg-brand-azure/5"
              >
                <h3 className="text-lg font-bold text-brand-gray-900 mb-2">{link.title}</h3>
                <p className="text-brand-gray-700 leading-body">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pattern C: Split Section */}
      <SplitSection
        title="Still Have Questions About Your Project?"
        description="Every painting project is unique, and we understand you may have specific questions about your Austin home. Our experienced team is here to provide detailed answers and expert guidance tailored to your specific needs."
        benefits={[
          { text: 'Free on-site consultations and estimates' },
          { text: 'Detailed project planning and timeline discussions' },
          { text: 'Color consultation and design advice' },
          { text: 'Transparent pricing with no hidden fees' },
          { text: 'Clear communication throughout your project' },
          { text: 'Follow-up support after project completion' }
        ]}
        image="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Hill Country Painting consultation Austin"
        imageLeft={true}
      />

      {/* CTA Banner */}
      <CTABanner
        title="Still Have Questions?"
        subtitle="Contact us for personalized answers about your painting project"
        primaryCTA={{
          text: 'Request a Consultation',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Call Us Now',
          href: 'tel:+15122402246'
        }}
      />
    </>
  );
};

export default FAQ;
