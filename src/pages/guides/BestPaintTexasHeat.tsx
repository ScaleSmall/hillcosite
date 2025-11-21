import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Thermometer, Shield, Droplets } from 'lucide-react';
import SEO from '../../components/SEO';
import NextStepsSection from '../../components/NextStepsSection';
import SplitSection from '../../components/sections/SplitSection';
import MiniFAQ from '../../components/sections/MiniFAQ';
import CTABanner from '../../components/sections/CTABanner';

const BestPaintTexasHeat = () => {
  const paintTypes = [
    {
      type: 'Acrylic Latex',
      rating: 'Excellent',
      uvResistance: 'High',
      heatTolerance: 'Superior',
      description: 'Top choice for Texas heat. Expands/contracts with temperature changes without cracking.',
      pros: ['UV resistant', 'Flexible', 'Easy cleanup', 'Fade resistant'],
      cons: ['Higher initial cost', 'Requires quality primer']
    },
    {
      type: '100% Acrylic',
      rating: 'Excellent',
      uvResistance: 'Excellent',
      heatTolerance: 'Excellent',
      description: 'Premium option for maximum heat protection. Longest lasting in Texas sun.',
      pros: ['Maximum UV protection', 'Superior adhesion', 'Color retention', '15+ year lifespan'],
      cons: ['Most expensive', 'Professional application recommended']
    },
    {
      type: 'Oil-Based',
      rating: 'Poor',
      uvResistance: 'Poor',
      heatTolerance: 'Poor',
      description: 'Not recommended for Texas exteriors. Chalks and fades quickly in heat.',
      pros: ['Smooth finish', 'Good for trim work'],
      cons: ['Chalks in heat', 'Fades quickly', 'VOC concerns', 'Difficult cleanup']
    }
  ];

  const colorConsiderations = [
    {
      color: 'Light Colors',
      heatReflection: 'High',
      recommendation: 'Best Choice',
      details: 'Whites, creams, and light grays reflect heat and stay cooler',
      lrv: '70-90 LRV'
    },
    {
      color: 'Medium Colors',
      heatReflection: 'Moderate',
      recommendation: 'Good Option',
      details: 'Beiges, soft blues, and sage greens with reflective properties',
      lrv: '40-70 LRV'
    },
    {
      color: 'Dark Colors',
      heatReflection: 'Low',
      recommendation: 'Use Carefully',
      details: 'Require high-quality paint and north-facing surfaces preferred',
      lrv: '10-40 LRV'
    }
  ];

  const faqs = [
    {
      question: 'What is the best exterior paint for Texas heat?',
      answer: '100% acrylic latex paint is the best choice for Texas heat. It offers superior UV resistance, flexibility with temperature changes, and excellent color retention even in extreme temperatures.'
    },
    {
      question: 'Should I choose light or dark colors for my Round Rock home?',
      answer: 'Light colors are generally better for Texas heat as they reflect sunlight and stay cooler. However, high-quality paints allow for medium and even some dark colors if properly applied.'
    },
    {
      question: 'How often should I repaint my house exterior in Texas?',
      answer: 'With quality paint and proper preparation, exterior paint should last 7-12 years in Texas. Signs it\'s time to repaint include fading, chalking, or peeling paint.'
    },
    {
      question: 'Does paint brand matter in Texas heat?',
      answer: 'Yes, brand quality matters significantly in Texas. Premium brands like Sherwin Williams, Benjamin Moore, and PPG offer superior heat and UV resistance compared to budget options.'
    },
    {
      question: 'Can I paint my house in summer in Round Rock?',
      answer: 'Yes, but timing matters. Early morning or late afternoon painting is best. Professional painters know how to work safely and effectively in Texas heat with proper techniques.'
    }
  ];

  return (
    <>
      <SEO
        title="Best Exterior Paint for Texas Heat (2025) | Austin Paint Guide"
        description="Complete guide to choosing exterior paint that withstands Texas heat. UV-resistant paints, color selection, and professional recommendations for Austin homes."
        canonical="/guides/best-paint-texas-heat"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides/best-paint-texas-heat' },
          { name: 'Best Paint for Texas Heat', url: '/guides/best-paint-texas-heat' }
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              <Sun className="w-4 h-4 mr-2" />
              Texas Heat Guide 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-900 leading-heading">
              Best Exterior Paint for Texas Heat
            </h1>
            <p className="text-xl text-slate-600 leading-body">
              Professional guide to choosing exterior paint that withstands Austin's intense heat and UV exposure. Keep your home protected and beautiful year-round.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Expert Consultation
              </Link>
              <Link to="/services/exterior-painting" className="btn-outline">
                Exterior Painting Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Paint Type Comparison */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Paint Types for Texas Heat
            </h2>
            <p className="text-xl text-slate-600">
              How different paint types perform in Round Rock's climate
            </p>
          </div>
          
          <div className="space-y-8">
            {paintTypes.map((paint, index) => (
              <div key={index} className={`card p-8 ${paint.rating === 'Excellent' ? 'border-2 border-green-200 bg-green-50' : paint.rating === 'Poor' ? 'border-2 border-red-200 bg-red-50' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-deep-900 mb-2">{paint.type}</h3>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        paint.rating === 'Excellent' ? 'bg-green-100 text-green-700' :
                        paint.rating === 'Good' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {paint.rating}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>UV Resistance:</span>
                        <span className="font-medium">{paint.uvResistance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Heat Tolerance:</span>
                        <span className="font-medium">{paint.heatTolerance}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-slate-600 mb-4">{paint.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                        <ul className="space-y-1">
                          {paint.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                        <ul className="space-y-1">
                          {paint.cons.map((con, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-center">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    {paint.rating === 'Excellent' && (
                      <div className="bg-green-100 rounded-lg p-4">
                        <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <p className="text-green-700 font-medium text-sm">Recommended for Texas</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Selection Guide */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Color Selection for Texas Heat
            </h2>
            <p className="text-xl text-slate-600">
              How color choice affects heat reflection and paint longevity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {colorConsiderations.map((color, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500">
                  <Thermometer className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-900 mb-4">{color.color}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Heat Reflection:</span>
                    <span className="font-medium">{color.heatReflection}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LRV Range:</span>
                    <span className="font-medium">{color.lrv}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    color.recommendation === 'Best Choice' ? 'bg-green-100 text-green-700' :
                    color.recommendation === 'Good Option' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {color.recommendation}
                  </div>
                </div>
                <p className="text-slate-600">{color.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Tips */}
      <SplitSection
        title="Professional Paint Selection Tips for Austin"
        description="Our 15+ years of experience painting in Texas heat has taught us what works and what doesn't. Here's what we recommend for maximum paint performance in Austin's climate."
        benefits={[
          { text: '100% acrylic latex for maximum UV protection' },
          { text: 'Light Reflective Value (LRV) of 50+ for heat reflection' },
          { text: 'Premium brands: Sherwin Williams, Benjamin Moore, PPG' },
          { text: 'Proper surface prep and high-quality primer essential' },
          { text: 'Cool roof paints for maximum energy efficiency' },
          { text: 'Professional application for warranty coverage' }
        ]}
        image="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Best exterior paint Texas heat Austin - Professional paint selection"
      />

      {/* Heat Protection Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Heat Protection Features to Look For
            </h2>
            <p className="text-xl text-slate-600">
              Key paint technologies that protect against Texas sun
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-deep-900 mb-3">UV Blockers</h3>
              <p className="text-slate-600 text-sm">Titanium dioxide and zinc oxide protect against harmful UV rays</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-deep-900 mb-3">Moisture Resistance</h3>
              <p className="text-slate-600 text-sm">Advanced polymers resist humidity and prevent mold growth</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-deep-900 mb-3">Reflective Pigments</h3>
              <p className="text-slate-600 text-sm">Special pigments reflect infrared heat away from surfaces</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-deep-900 mb-3">Temperature Flex</h3>
              <p className="text-slate-600 text-sm">Flexible resins move with temperature changes without cracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <MiniFAQ
        title="Texas Heat Paint Selection FAQ"
        faqs={faqs}
      />

      {/* Next Steps */}
      <NextStepsSection
        title="Ready to Paint Your Home?"
        description="Get expert guidance on choosing the right paint and professional application for Austin's climate."
        serviceTitle="Exterior Painting Services"
        serviceDescription="Professional exterior painting using weather-resistant paints designed for Texas heat."
        serviceLink="/services/exterior-painting"
      />
    </>
  );
};

export default BestPaintTexasHeat;