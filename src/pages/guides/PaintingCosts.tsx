import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, Home, Calculator, Clock } from 'lucide-react';
import SEO from '../../components/SEO';
import NextStepsSection from '../../components/NextStepsSection';
import SplitSection from '../../components/sections/SplitSection';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import MiniFAQ from '../../components/sections/MiniFAQ';
import CTABanner from '../../components/sections/CTABanner';
import PaintingCostsTable from '../../components/sections/PaintingCostsTable';
import TypicalHomeCosts from '../../components/sections/TypicalHomeCosts';
import { usePricingData } from '../../hooks/usePricingData';
import { canonicalBusinessProvider, siteBaseUrl } from '../../lib/businessSchema';

const costProjectLinks = [
  {
    label: 'Austin house painters',
    href: '/house-painters-austin',
    description: 'Compare the full Austin painting process before choosing exterior, interior, cabinet, or commercial scope.'
  },
  {
    label: 'Austin exterior house painters',
    href: '/exterior-painting-austin',
    description: 'Exterior ranges are shaped by siding, stucco, trim, repairs, access, sun exposure, and coating system.'
  },
  {
    label: 'Austin interior painters',
    href: '/interior-painting-austin',
    description: 'Interior ranges account for room count, ceiling height, trim detail, occupied-home protection, and wall repair.'
  },
  {
    label: 'Austin cabinet painting',
    href: '/cabinet-refinishing-austin',
    description: 'Cabinet ranges are driven by doors, drawers, boxes, prep, coating method, finish quality, and cure time.'
  },
  {
    label: 'Austin commercial painters',
    href: '/commercial-painting-austin',
    description: 'Commercial ranges reflect square footage, access, business-hours scheduling, surfaces, and phasing.'
  },
  {
    label: 'Request a written estimate',
    href: '/free-estimate',
    description: 'Use the planning ranges as guidance, then confirm the final scope with an on-site review.'
  }
] as const;

const PaintingCosts = () => {
  const { data: pricingData, loading } = usePricingData('painting-costs');
  const baseUrl = siteBaseUrl;
  const costProjectItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${baseUrl}/guides/painting-costs-austin#cost-project-paths`,
    name: 'Austin painting cost guide project paths',
    about: canonicalBusinessProvider,
    itemListElement: costProjectLinks.map((link, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: link.label,
      url: `${baseUrl}${link.href}`,
      item: {
        '@type': link.href === '/free-estimate' ? 'WebPage' : 'Service',
        name: link.label,
        url: `${baseUrl}${link.href}`,
        provider: link.href === '/free-estimate' ? undefined : canonicalBusinessProvider,
        description: link.description
      }
    }))
  };

  const getCostFactor = (key: string, fallback: string) => {
    if (pricingData && pricingData[key]) {
      return pricingData[key].formatted;
    }
    return fallback;
  };

  const getFAQAnswer = () => {
    const interiorPrice = getCostFactor('faq_2000sqft_interior', '$6,500-$10,500');
    const exteriorPrice = getCostFactor('faq_2000sqft_exterior', '$8,500-$14,000');
    return `For a typical 2,000 sq ft Austin home, full-scope interior painting commonly ranges from ${interiorPrice}, while full-scope exterior painting often ranges from ${exteriorPrice}. Hill Country Painting prices professional repaint projects from a $6,000 minimum so the estimate can include proper prep, protection, coatings, cleanup, and a clear written scope.`;
  };

  const faqs = [
    {
      question: 'How much does it cost to paint a 2,000 sq ft house in Austin?',
      answer: getFAQAnswer()
    },
    {
      question: 'What factors affect painting costs in Austin?',
      answer: 'Key factors include home size, paint quality, surface preparation needs, number of colors, accessibility, repairs, masking requirements, and timeline. Austin\'s climate also affects exterior prep requirements.'
    },
    {
      question: 'Does season affect painting pricing in Austin?',
      answer: 'Interior painting rates are consistent year-round. Exterior painting may have slight seasonal differences, but proper weather windows and surface conditions matter more than chasing a small seasonal change in Austin\'s variable climate.'
    },
    {
      question: 'Do Austin painting contractors charge more for two-story homes?',
      answer: 'Yes, two-story homes typically cost 20-40% more due to additional equipment, safety requirements, and time needed for scaffolding and ladder work.'
    },
    {
      question: 'What\'s included in a professional painting estimate?',
      answer: 'Quality estimates include materials, labor, surface prep, priming, masking, cleanup, and warranty. At Hill Country Painting, full professional projects have a $6,000 minimum, and every estimate explains exactly what is included.'
    }
  ];

  return (
    <>
      <SEO
        title="Cost to Paint a House in Austin (2026) | Painting Cost Guide"
        description="Complete guide to house painting costs in Austin TX. Interior, exterior, and cabinet painting pricing. Get accurate estimates for your home."
        canonical="/guides/painting-costs-austin"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides/painting-costs-austin' },
          { name: 'Painting Costs', url: '/guides/painting-costs-austin' }
        ]}
        faq={faqs}
        additionalSchema={costProjectItemList}
      />

      {/* Hero */}
      {/* Hero - Neutral Surface */}
      <section className="section-padding bg-gradient-to-br from-brand-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-brand-azure10 text-brand-azureDark rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              2026 Pricing Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 leading-heading">
              Cost to Paint a House in Austin (2026)
            </h1>
            <p className="text-xl text-brand-gray-600 leading-body">
              Complete pricing guide for Austin homeowners comparing full-scope professional projects, with prep, protection, materials, cleanup, and written scope included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Request a Consultation
              </Link>
              <Link to="/services" className="btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <PaintingCostsTable />

      {/* House Size Examples */}
      <TypicalHomeCosts />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Match the Price Range to the Right Austin Painting Scope
            </h2>
            <p className="text-xl text-brand-gray-600 leading-body">
              The $6,000 minimum is for complete professional projects, not quick touch-ups. Use these Austin project paths to compare what changes the estimate: prep, surface condition, access, protection, coatings, scheduling, and finish expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {costProjectLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-lg border border-brand-gray-200 bg-white p-5 transition-colors hover:border-brand-azure hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-brand-gray-900 mb-2">{link.label}</h3>
                    <p className="text-brand-gray-600 leading-body">{link.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-brand-azureDark" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Split Section - Value Explanation */}
      <SplitSection
        title="Why Professional Painting Costs What It Does"
        description="Understanding painting costs helps you make informed decisions. A professional painting estimate is built around specialized materials, skilled labor, proper preparation, protection, project management, and comprehensive cleanup that DIY simply cannot match."
        benefits={[
          { text: 'Professional-grade materials that last 2-3x longer' },
          { text: 'Comprehensive surface preparation and priming' },
          { text: '15+ years experience with proper techniques' },
          { text: 'Full insurance coverage and 2-year warranty' },
          { text: 'Complete cleanup and project management' },
          { text: 'Time savings - 3-5 days vs 3-4 weekends DIY' }
        ]}
        image="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Professional painting preparation Austin - Hill Country Painting value"
        imageLeft={true}
      />

      {/* Cost Saving Tips */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Smart Ways to Save on Painting Costs
            </h2>
            <p className="text-xl text-brand-gray-600">
              Professional tips to maximize your painting investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-azure10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-azure font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-2">Bundle Interior & Exterior</h3>
                  <p className="text-brand-gray-600">Combining <Link to="/services/interior-painting" className="text-brand-azure hover:underline">interior painting</Link> and <Link to="/services/exterior-painting" className="text-brand-azure hover:underline">exterior painting</Link> can reduce duplicate setup while keeping the estimate tied to one complete professional project.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-azure10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-azure font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-2">Choose Standard Colors</h3>
                  <p className="text-brand-gray-600">Custom color matching adds 5-10% to material costs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-azure10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-azure font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-2">Schedule Off-Season</h3>
                  <p className="text-brand-gray-600">Interior painting in summer can create more scheduling flexibility, which helps keep a full-scope estimate efficient.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-azure10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-azure font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-2">Clear Access</h3>
                  <p className="text-brand-gray-600">Easy access reduces labor time and setup costs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-azure10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-azure font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-2">Address Repairs First</h3>
                  <p className="text-brand-gray-600">Fixing issues before painting prevents change orders.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-brand-azure10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-azure font-bold">6</span>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-gray-900 mb-2">Maintain Your Paint</h3>
                  <p className="text-brand-gray-600">Regular cleaning and touch-ups extend paint life by 3-5 years.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <MiniFAQ
        title="Austin Painting Cost FAQ"
        faqs={faqs}
      />

      {/* Trust Stats */}
      <StatsAndTrust
        stats={[
          {
            icon: <DollarSign className="w-8 h-8 text-brand-azureDark" />,
            value: pricingData?.stat_average_project?.formatted || "$8,500",
            label: "Average Project"
          },
          {
            icon: <Clock className="w-8 h-8 text-brand-azureDark" />,
            value: "3-5 Days",
            label: "Typical Timeline"
          },
          {
            icon: <Home className="w-8 h-8 text-brand-azureDark" />,
            value: "100+",
            label: "Homes Painted"
          },
          {
            icon: <div className="w-8 h-8 bg-brand-azureDark rounded-full flex items-center justify-center text-white font-bold">✓</div>,
            value: "2-Year",
            label: "Warranty"
          }
        ]}
      />

      {/* Next Steps */}
      <NextStepsSection
        title="Request a Clear Written Estimate"
        description="We'll visit your property, review the scope, and provide transparent pricing with detailed line items."
        serviceTitle="View Our Services"
        serviceDescription="Explore our complete range of interior, exterior, and cabinet painting services."
        serviceLink="/services"
      />
    </>
  );
};

export default PaintingCosts;
