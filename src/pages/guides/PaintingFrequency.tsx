import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Sun, Home } from 'lucide-react';
import SEO from '../../components/SEO';
import NextStepsSection from '../../components/NextStepsSection';
import SplitSection from '../../components/sections/SplitSection';
import MiniFAQ from '../../components/sections/MiniFAQ';
import CTABanner from '../../components/sections/CTABanner';

const PaintingFrequency = () => {
  const paintingSchedule = [
    {
      surface: 'Exterior Siding (Wood)',
      frequency: '5-7 years',
      factors: 'Weather exposure, sun direction, paint quality',
      signs: 'Peeling, fading, chalking',
      roundRockNote: 'Texas heat accelerates wear on south/west sides'
    },
    {
      surface: 'Exterior Siding (Fiber Cement)',
      frequency: '8-12 years',
      factors: 'Superior durability, paint quality matters most',
      signs: 'Fading, minor chalking',
      roundRockNote: 'Excellent for Texas climate with quality paint'
    },
    {
      surface: 'Exterior Trim & Windows',
      frequency: '4-6 years',
      factors: 'High wear areas, moisture exposure',
      signs: 'Cracking around joints, bare wood showing',
      roundRockNote: 'Check annually for early wear signs'
    },
    {
      surface: 'Interior Walls (High Traffic)',
      frequency: '3-5 years',
      factors: 'Kids, pets, cooking areas',
      signs: 'Scuff marks, stains, worn appearance',
      roundRockNote: 'Kitchens and hallways need more frequent touch-ups'
    },
    {
      surface: 'Interior Walls (Low Traffic)',
      frequency: '7-10 years',
      factors: 'Adult bedrooms, formal rooms',
      signs: 'Gradual fading, minor scuffs',
      roundRockNote: 'Master bedrooms can go longest between repaints'
    },
    {
      surface: 'Cabinets',
      frequency: '8-15 years',
      factors: 'Quality of finish, daily use, cleaning habits',
      signs: 'Chips around handles, worn high-touch areas',
      roundRockNote: 'Professional cabinet painting lasts much longer than DIY'
    }
  ];

  const seasonalFactors = [
    {
      season: 'Spring',
      icon: '🌱',
      painting: 'Excellent',
      exterior: 'Perfect weather, mild temperatures',
      interior: 'Good ventilation, moderate humidity',
      roundRockTip: 'Best time for large exterior projects'
    },
    {
      season: 'Summer',
      icon: '☀️',
      painting: 'Pro Recommended',
      exterior: 'Pros watch surface temps and dry time for clean results',
      interior: 'AC helps with ventilation and drying',
      roundRockTip: 'Pros adjust start times to avoid peak heat'
    },
    {
      season: 'Fall',
      icon: '🍂',
      painting: 'Excellent',
      exterior: 'Great temps, low humidity perfect for painting',
      interior: 'Ideal conditions, preparing for holidays',
      roundRockTip: 'Second best time for all painting projects'
    },
    {
      season: 'Winter',
      icon: '❄️',
      painting: 'Limited',
      exterior: 'Cold weather affects paint curing',
      interior: 'Good for interior projects, dry air helps',
      roundRockTip: 'Focus on interior projects, avoid freezing days'
    }
  ];

  const faqs = [
    {
      question: 'How often should I paint my house exterior in Austin?',
      answer: 'In Austin\'s hot climate, most homes need exterior painting every 7-10 years with quality paint, or 5-7 years with standard paint. South and west-facing sides may need attention sooner due to intense sun exposure.'
    },
    {
      question: 'What are the signs it\'s time to repaint my Austin home?',
      answer: 'Look for fading colors, chalking (powdery residue), peeling or cracking paint, bare wood showing through, or paint that feels brittle. In Texas, these signs often appear first on sun-exposed surfaces.'
    },
    {
      question: 'Do I need to paint more often because of Austin\'s climate?',
      answer: 'Yes, Texas heat, intense UV rays, and humidity can accelerate paint deterioration. Quality paint and proper preparation help extend the time between repaints, but expect slightly more frequent maintenance than cooler climates.'
    },
    {
      question: 'What\'s the best time of year to paint in Austin?',
      answer: 'Spring (March-May) and fall (October-November) offer the best conditions. Summer can work for interior projects or early morning exterior work, but avoid painting in direct sunlight or temperatures above 85°F.'
    },
    {
      question: 'How can I make paint last longer in Texas heat?',
      answer: 'Use high-quality 100% acrylic paint, ensure proper surface preparation, choose lighter colors that reflect heat, and maintain your home (clean gutters, trim vegetation) to reduce moisture and damage.'
    },
    {
      question: 'Should I paint all sides of my house at the same time?',
      answer: 'Ideally yes, for color consistency and efficiency. However, you can prioritize the most sun-damaged sides (usually south and west) first if budget requires staged painting.'
    }
  ];

  return (
    <>
      <SEO
        title="How Often to Paint in Central Texas (2026) | Austin Paint Schedule"
        description="Complete guide to painting frequency in Central Texas. Learn when to repaint your Austin home interior, exterior, and cabinets for protection."
        canonical="/guides/how-often-paint-central-texas"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides/how-often-paint-central-texas' },
          { name: 'Painting Frequency', url: '/guides/how-often-paint-central-texas' }
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Texas Climate Guide 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-900 leading-heading">
              How Often to Paint in Central Texas
            </h1>
            <p className="text-xl text-slate-600 leading-body">
              Professional maintenance schedule for Austin homes. Learn when to repaint interior, exterior, and cabinets to protect your investment in Texas's demanding climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Schedule Assessment
              </Link>
              <Link to="/services" className="btn-outline">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Painting Schedule Table */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Austin Painting Maintenance Schedule
            </h2>
            <p className="text-xl text-slate-600">
              Based on Central Texas climate and local Austin projects
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-deep-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Surface Type</th>
                  <th className="px-6 py-4 text-center">Frequency</th>
                  <th className="px-6 py-4 text-left">Key Factors</th>
                  <th className="px-6 py-4 text-left">Warning Signs</th>
                  <th className="px-6 py-4 text-left">Round Rock Notes</th>
                </tr>
              </thead>
              <tbody>
                {paintingSchedule.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-deep-900">{item.surface}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                        {item.frequency}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{item.factors}</td>
                    <td className="px-6 py-4 text-slate-600">{item.signs}</td>
                    <td className="px-6 py-4 text-slate-600 italic">{item.roundRockNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Seasonal Considerations */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Best Times to Paint in Round Rock
            </h2>
            <p className="text-xl text-slate-600">
              Seasonal factors affecting paint performance and application
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalFactors.map((season, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{season.icon}</div>
                <h3 className="text-xl font-bold text-deep-900 mb-2">{season.season}</h3>
                <div className={`px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  season.painting === 'Excellent' ? 'bg-green-100 text-green-700' :
                  season.painting === 'Good' ? 'bg-blue-100 text-blue-700' :
                  season.painting === 'Pro Recommended' ? 'bg-orange-100 text-orange-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {season.painting}
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-deep-900 mb-1">Exterior:</p>
                    <p className="text-slate-600">{season.exterior}</p>
                  </div>
                  <div>
                    <p className="font-medium text-deep-900 mb-1">Interior:</p>
                    <p className="text-slate-600">{season.interior}</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-3 mt-4">
                    <p className="font-medium text-deep-900 mb-1">Round Rock Tip:</p>
                    <p className="text-slate-600">{season.roundRockTip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texas Climate Impact */}
      <SplitSection
        title="How Central Texas Climate Affects Paint Longevity"
        description="Austin's climate presents specific challenges for paint durability. Understanding these factors helps you plan maintenance schedules and choose the right materials for maximum longevity."
        benefits={[
          { text: 'Intense UV rays cause faster fading and breakdown' },
          { text: 'High summer temperatures stress paint film' },
          { text: 'Humidity and sudden weather changes affect adhesion' },
          { text: 'Quality paint and preparation extend lifespan significantly' },
          { text: 'South and west-facing surfaces need more frequent attention' },
          { text: 'Professional application helps paint last longer in Texas heat' }
        ]}
        image="/texas-sun-exterior-paint-maintenance.jpg"
        imageAlt="Texas climate paint maintenance Austin - Professional painting longevity"
        imageLeft={true}
      />

      {/* Warning Signs Checklist */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              When to Schedule Repainting: Warning Signs
            </h2>
            <p className="text-xl text-slate-600">
              Early detection saves money and protects your home
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-deep-900 mb-3 text-center">Immediate Action Needed</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Peeling or flaking paint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Bare wood or metal showing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Cracks allowing moisture in</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Mold or mildew stains</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-deep-900 mb-3 text-center">Plan Within 6-12 Months</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Noticeable fading or color change</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Chalking (powdery residue)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Minor cracking in paint film</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Paint feeling brittle or thin</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-deep-900 mb-3 text-center">Good Condition</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Rich, vibrant colors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Smooth, intact surface</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>No visible wear or damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Continue annual inspections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-4">
              Extend Paint Life in Texas Heat
            </h2>
            <p className="text-xl text-slate-600">
              Simple maintenance steps to maximize your paint investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-deep-900 mb-6">Annual Maintenance</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-deep-900">Clean Exterior Surfaces</p>
                    <p className="text-slate-600 text-sm">Pressure wash annually to remove dirt, mildew, and pollutants</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-deep-900">Inspect for Damage</p>
                    <p className="text-slate-600 text-sm">Check for cracks, peeling, or bare spots, especially on sun-exposed areas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-deep-900">Touch Up Early</p>
                    <p className="text-slate-600 text-sm">Address minor issues before they become major problems</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-medium text-deep-900">Maintain Caulking</p>
                    <p className="text-slate-600 text-sm">Keep caulk around windows and trim in good condition to prevent moisture</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-deep-900 mb-6">Protective Measures</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <div>
                    <p className="font-medium text-deep-900">Trim Vegetation</p>
                    <p className="text-slate-600 text-sm">Keep bushes and trees away from painted surfaces to improve air circulation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">B</span>
                  </div>
                  <div>
                    <p className="font-medium text-deep-900">Clean Gutters</p>
                    <p className="text-slate-600 text-sm">Ensure proper drainage to prevent water damage and staining</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  <div>
                    <p className="font-medium text-deep-900">Control Sprinklers</p>
                    <p className="text-slate-600 text-sm">Avoid spraying painted surfaces with irrigation systems</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">D</span>
                  </div>
                  <div>
                    <p className="font-medium text-deep-900">Shade Planning</p>
                    <p className="text-slate-600 text-sm">Consider awnings or strategic landscaping for extreme sun exposure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <MiniFAQ
        title="Austin Painting Frequency FAQ"
        faqs={faqs}
      />

      {/* Next Steps */}
      <NextStepsSection
        title="Keep Your Home Looking Its Best"
        description="Schedule a professional assessment to determine your home's painting schedule."
        serviceTitle="Professional Painting Services"
        serviceDescription="Interior and exterior painting services to keep your Austin home protected and beautiful."
        serviceLink="/services"
      />
    </>
  );
};

export default PaintingFrequency;