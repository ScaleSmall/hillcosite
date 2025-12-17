import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Home, Calculator, Clock } from 'lucide-react';
import SEO from '../../components/SEO';
import NextStepsSection from '../../components/NextStepsSection';
import SplitSection from '../../components/sections/SplitSection';
import StatsAndTrust from '../../components/sections/StatsAndTrust';
import MiniFAQ from '../../components/sections/MiniFAQ';
import CTABanner from '../../components/sections/CTABanner';
import { usePricingData } from '../../hooks/usePricingData';

const PaintingCosts = () => {
  const { data: pricingData, loading } = usePricingData('painting-costs');

  const getCostFactor = (key: string, fallback: string) => {
    if (pricingData && pricingData[key]) {
      return pricingData[key].formatted;
    }
    return fallback;
  };

  const costFactors = [
    {
      factor: 'Home Size',
      interior: getCostFactor('cost_factor_home_size_interior', '$2,500 - $6,000'),
      exterior: getCostFactor('cost_factor_home_size_exterior', '$4,000 - $10,000'),
      details: 'Based on square footage and room count'
    },
    {
      factor: 'Paint Quality',
      interior: getCostFactor('cost_factor_paint_quality_interior', '+$300 - $800'),
      exterior: getCostFactor('cost_factor_paint_quality_exterior', '+$500 - $1,200'),
      details: 'Premium paints last longer, better coverage'
    },
    {
      factor: 'Preparation Work',
      interior: getCostFactor('cost_factor_prep_work_interior', '+$200 - $600'),
      exterior: getCostFactor('cost_factor_prep_work_exterior', '+$800 - $2,000'),
      details: 'Repairs, priming, surface prep requirements'
    },
    {
      factor: 'Color Changes',
      interior: getCostFactor('cost_factor_color_changes_interior', '+$150 - $400'),
      exterior: getCostFactor('cost_factor_color_changes_exterior', '+$300 - $800'),
      details: 'Dark to light colors require additional coats'
    }
  ];

  const getFAQAnswer = () => {
    const interiorPrice = getCostFactor('faq_2000sqft_interior', '$4,000-$8,000');
    const exteriorPrice = getCostFactor('faq_2000sqft_exterior', '$6,000-$12,000');
    return `For a typical 2,000 sq ft Austin home, interior painting ranges from ${interiorPrice}, exterior painting from ${exteriorPrice}. Final cost depends on paint quality, prep work needed, and number of stories.`;
  };

  const faqs = [
    {
      question: 'How much does it cost to paint a 2,000 sq ft house in Austin?',
      answer: getFAQAnswer()
    },
    {
      question: 'What factors affect painting costs in Austin?',
      answer: 'Key factors include home size, paint quality, surface preparation needs, number of colors, accessibility, and timeline. Austin\'s climate also affects exterior prep requirements.'
    },
    {
      question: 'Is it cheaper to paint in winter in Austin?',
      answer: 'Interior painting rates are consistent year-round. Exterior painting may have slight seasonal pricing, but weather windows are more important than minor savings in Austin\'s variable climate.'
    },
    {
      question: 'Do Austin painting contractors charge more for two-story homes?',
      answer: 'Yes, two-story homes typically cost 20-40% more due to additional equipment, safety requirements, and time needed for scaffolding and ladder work.'
    },
    {
      question: 'What\'s included in a professional painting estimate?',
      answer: 'Quality estimates include materials, labor, surface prep, priming, cleanup, and warranty. At Hill Country Painting, we provide detailed breakdowns with no hidden fees.'
    }
  ];

  return (
    <>
      <SEO
        title="Cost to Paint a House in Austin (2025) | Painting Cost Guide"
        description="Complete guide to house painting costs in Austin TX. Interior painting, exterior painting, and cabinet painting pricing. Get accurate estimates for your Austin home."
        canonical="/guides/painting-costs-round-rock"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides/painting-costs-round-rock' },
          { name: 'Painting Costs', url: '/guides/painting-costs-round-rock' }
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-deep-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              <Calculator className="w-4 h-4 mr-2" />
              2025 Pricing Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-900 leading-heading">
              Cost to Paint a House in Austin (2025)
            </h1>
            <p className="text-xl text-slate-600 leading-body">
              Complete pricing guide for Austin homeowners. Get accurate estimates for interior painting, exterior painting, and cabinet painting from local professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Free Estimate
              </Link>
              <Link to="/services" className="btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Austin Painting Costs by Project Type
            </h2>
            <p className="text-xl text-slate-600">
              Based on 500+ completed projects in Austin
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-deep-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Cost Factor</th>
                  <th className="px-6 py-4 text-center">Interior Range</th>
                  <th className="px-6 py-4 text-center">Exterior Range</th>
                  <th className="px-6 py-4 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {costFactors.map((factor, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-deep-900">{factor.factor}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-medium">{factor.interior}</td>
                    <td className="px-6 py-4 text-center text-blue-600 font-medium">{factor.exterior}</td>
                    <td className="px-6 py-4 text-slate-600">{factor.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* House Size Examples */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Typical Austin Home Painting Costs
            </h2>
            <p className="text-xl text-slate-600">
              Real examples from Austin neighborhoods
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <Home className="w-12 h-12 text-deep-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-deep-900 mb-2">1,500 sq ft</h3>
              <p className="text-slate-600 mb-4">Typical Austin Ranch</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Interior:</span>
                  <span className="font-semibold text-green-600">{getCostFactor('house_1500_interior', '$3,200 - $5,800')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Exterior:</span>
                  <span className="font-semibold text-blue-600">{getCostFactor('house_1500_exterior', '$5,200 - $8,500')}</span>
                </div>
              </div>
            </div>

            <div className="card p-8 text-center border-2 border-deep-600">
              <Home className="w-12 h-12 text-deep-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-deep-900 mb-2">2,200 sq ft</h3>
              <p className="text-slate-600 mb-4">Average Austin Home</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Interior:</span>
                  <span className="font-semibold text-green-600">{getCostFactor('house_2200_interior', '$4,400 - $7,200')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Exterior:</span>
                  <span className="font-semibold text-blue-600">{getCostFactor('house_2200_exterior', '$6,800 - $11,000')}</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="bg-deep-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
            </div>

            <div className="card p-8 text-center">
              <Home className="w-12 h-12 text-deep-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-deep-900 mb-2">3,000+ sq ft</h3>
              <p className="text-slate-600 mb-4">Larger Austin Homes</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Interior:</span>
                  <span className="font-semibold text-green-600">{getCostFactor('house_3000_interior', '$6,000 - $10,500')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Exterior:</span>
                  <span className="font-semibold text-blue-600">{getCostFactor('house_3000_exterior', '$9,500 - $16,000')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Section - Value Explanation */}
      <SplitSection
        title="Why Professional Painting Costs What It Does"
        description="Understanding painting costs helps you make informed decisions. Professional painting involves specialized materials, skilled labor, proper preparation, and comprehensive cleanup that DIY simply cannot match."
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
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Smart Ways to Save on Painting Costs
            </h2>
            <p className="text-xl text-slate-600">
              Professional tips to maximize your painting investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-900 mb-2">Bundle Interior & Exterior</h3>
                  <p className="text-slate-600">Save 10-15% when combining multiple services in one project.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-900 mb-2">Choose Standard Colors</h3>
                  <p className="text-slate-600">Custom color matching adds 5-10% to material costs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-900 mb-2">Schedule Off-Season</h3>
                  <p className="text-slate-600">Interior painting in summer may offer slight discounts.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-900 mb-2">Clear Access</h3>
                  <p className="text-slate-600">Easy access reduces labor time and setup costs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-900 mb-2">Address Repairs First</h3>
                  <p className="text-slate-600">Fixing issues before painting prevents change orders.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">6</span>
                </div>
                <div>
                  <h3 className="font-semibold text-deep-900 mb-2">Maintain Your Paint</h3>
                  <p className="text-slate-600">Regular cleaning and touch-ups extend paint life by 3-5 years.</p>
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
            icon: <DollarSign className="w-8 h-8 text-deep-600" />,
            value: pricingData?.stat_average_project?.formatted || "$6,500",
            label: "Average Project"
          },
          {
            icon: <Clock className="w-8 h-8 text-deep-600" />,
            value: "3-5 Days",
            label: "Typical Timeline"
          },
          {
            icon: <Home className="w-8 h-8 text-deep-600" />,
            value: "500+",
            label: "Homes Painted"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>,
            value: "2-Year",
            label: "Warranty"
          }
        ]}
      />

      {/* Next Steps */}
      <NextStepsSection
        title="Get Your Accurate Painting Estimate"
        description="Receive transparent, detailed pricing for your specific project with no hidden fees or surprises."
        serviceTitle="View Our Services"
        serviceDescription="Explore our complete range of interior, exterior, and cabinet painting services."
        serviceLink="/services"
      />
    </>
  );
};

export default PaintingCosts;