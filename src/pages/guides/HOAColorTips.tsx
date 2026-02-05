import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, AlertTriangle, Palette } from 'lucide-react';
import SEO from '../../components/SEO';
import NextStepsSection from '../../components/NextStepsSection';
import SplitSection from '../../components/sections/SplitSection';
import MiniFAQ from '../../components/sections/MiniFAQ';
import CTABanner from '../../components/sections/CTABanner';

const HOAColorTips = () => {
  const commonRequirements = [
    {
      requirement: 'Approved Color Palette',
      description: 'Most HOAs maintain a list of pre-approved paint colors',
      status: 'required',
      tip: 'Request the current approved color list before choosing'
    },
    {
      requirement: 'Architectural Review',
      description: 'Submit paint plans for approval before starting work',
      status: 'required',
      tip: 'Allow 2-4 weeks for review and approval process'
    },
    {
      requirement: 'Professional Application',
      description: 'Some HOAs require professional painters for exterior work',
      status: 'common',
      tip: 'Check if DIY painting is allowed or if professionals required'
    },
    {
      requirement: 'Trim & Accent Colors',
      description: 'Specific requirements for trim, shutters, and door colors',
      status: 'common',
      tip: 'Coordinate all colors, not just main house color'
    },
    {
      requirement: 'Timeline Requirements',
      description: 'Some HOAs specify completion timelines for painting projects',
      status: 'varies',
      tip: 'Plan project timeline to meet HOA requirements'
    }
  ];

  const popularHOAColors = [
    {
      category: 'Neutral Bases',
      colors: [
        { name: 'Accessible Beige', hex: '#D4C5B0' },
        { name: 'Agreeable Gray', hex: '#D1CDC7' },
        { name: 'Classic Gray', hex: '#BDB8B0' },
        { name: 'Natural Linen', hex: '#E8DCC6' }
      ],
      description: 'Safe, widely-approved neutral tones'
    },
    {
      category: 'Warm Whites',
      colors: [
        { name: 'Swiss Coffee', hex: '#F5EFE0' },
        { name: 'Ivory', hex: '#FFFFF0' },
        { name: 'Antique White', hex: '#FAEBD7' },
        { name: 'Cream', hex: '#FFFDD0' }
      ],
      description: 'Clean, fresh options that work with most architectures'
    },
    {
      category: 'Earth Tones',
      colors: [
        { name: 'Balanced Beige', hex: '#C9B59A' },
        { name: 'Latte', hex: '#C5A880' },
        { name: 'Mushroom', hex: '#BEA892' },
        { name: 'Warm Stone', hex: '#C2AE96' }
      ],
      description: 'Natural colors that complement landscaping'
    },
    {
      category: 'Soft Colors',
      colors: [
        { name: 'Misty Sage', hex: '#C5D5C5' },
        { name: 'Dusty Blue', hex: '#B8C5D6' },
        { name: 'Soft Taupe', hex: '#C9B9A8' },
        { name: 'Pale Yellow', hex: '#F5EDBB' }
      ],
      description: 'Subtle color options for added character'
    }
  ];

  const faqs = [
    {
      question: 'Do I need HOA approval to paint my Austin home?',
      answer: 'Most Austin neighborhoods with HOAs require approval for exterior paint colors. Check your HOA covenants or contact your HOA management company to confirm requirements and get the approval process started.'
    },
    {
      question: 'How long does HOA paint approval take in Austin?',
      answer: 'Typical approval time is 2-4 weeks, but can vary by HOA. Submit your paint color request early in your planning process to avoid delays. Some HOAs meet monthly, which can extend the timeline.'
    },
    {
      question: 'What happens if I paint without HOA approval?',
      answer: 'Painting without approval can result in fines, forced repainting at your expense, or legal action. It\'s always better to get approval first, even if it delays your project slightly.'
    },
    {
      question: 'Can Hill Country Painting help with HOA approval?',
      answer: 'Yes! We\'re familiar with Austin HOA requirements and can help you choose pre-approved colors, prepare submission materials, and work within HOA guidelines for your painting project.'
    },
    {
      question: 'What if my desired color isn\'t on the HOA approved list?',
      answer: 'You can sometimes request approval for non-listed colors by submitting a detailed proposal. We can help prepare color samples and justification for your HOA\'s consideration.'
    }
  ];

  return (
    <>
      <SEO
        title="HOA Color Tips for Austin Homes | Paint Approval Guide"
        description="Navigate HOA paint color requirements in Austin. Get approval tips, popular HOA colors, and professional guidance for your painting project compliance."
        canonical="/guides/hoa-color-tips-austin"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides/hoa-color-tips-austin' },
          { name: 'HOA Color Tips', url: '/guides/hoa-color-tips-austin' }
        ]}
      />

      {/* Hero */}
      {/* Hero - Neutral Surface */}
      <section className="section-padding bg-gradient-to-br from-brand-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-brand-coral text-brand-azureDark rounded-full text-sm font-medium mb-4">
              <FileText className="w-4 h-4 mr-2" />
              HOA Compliance Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 leading-heading">
              HOA Color Tips for Austin Homes
            </h1>
            <p className="text-xl text-slate-600 leading-body">
              Navigate Austin HOA paint requirements with confidence. Get approval tips, popular colors, and professional guidance to ensure your painting project meets all neighborhood guidelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Request Color Consultation
              </Link>
              <Link to="/contact" className="btn-outline">
                Schedule Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOA Requirements Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Common Austin HOA Paint Requirements
            </h2>
            <p className="text-xl text-slate-600">
              Understanding what your HOA likely requires
            </p>
          </div>
          
          <div className="space-y-6">
            {commonRequirements.map((req, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {req.status === 'required' && (
                      <div className="w-12 h-12 bg-brand-azureDark10 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-6 h-6 text-brand-azureDark" />
                      </div>
                    )}
                    {req.status === 'common' && (
                      <div className="w-12 h-12 bg-brand-azure10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-brand-azure" />
                      </div>
                    )}
                    {req.status === 'varies' && (
                      <div className="w-12 h-12 bg-brand-regentGray10 rounded-full flex items-center justify-center">
                        <FileText className="w-6 h-6 text-brand-regentGray" />
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-brand-gray-900">{req.requirement}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        req.status === 'required' ? 'bg-brand-azureDark10 text-brand-azureDark' :
                        req.status === 'common' ? 'bg-brand-azure10 text-brand-azure' :
                        'bg-brand-regentGray10 text-brand-regentGray'
                      }`}>
                        {req.status}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-3">{req.description}</p>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <strong>Pro Tip:</strong> {req.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular HOA Colors */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Popular HOA-Approved Colors in Austin
            </h2>
            <p className="text-xl text-slate-600">
              Safe color choices commonly approved by Austin HOAs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularHOAColors.map((category, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Palette className="w-8 h-8 text-brand-azureDark" />
                  <h3 className="text-2xl font-bold text-brand-gray-900">{category.category}</h3>
                </div>
                <p className="text-slate-600 mb-6">{category.description}</p>
                <div className="space-y-3">
                  {category.colors.map((color, colorIndex) => (
                    <div key={colorIndex} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-brand-gray-900">{color.name}</span>
                      <div
                        className="w-8 h-8 rounded-full border-2 border-slate-300"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Approval Process */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              HOA Paint Approval Process
            </h2>
            <p className="text-xl text-slate-600">
              Step-by-step guide to getting your paint colors approved
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Review Your HOA Guidelines',
                  description: 'Check your covenants, restrictions, and architectural guidelines',
                  timeline: 'Day 1'
                },
                {
                  step: 2,
                  title: 'Get Current Approved Color List',
                  description: 'Contact HOA management or architectural committee for latest approved colors',
                  timeline: 'Day 2-3'
                },
                {
                  step: 3,
                  title: 'Choose Colors & Get Samples',
                  description: 'Select colors and obtain large paint samples for submission',
                  timeline: 'Day 4-7'
                },
                {
                  step: 4,
                  title: 'Prepare Application',
                  description: 'Complete architectural review application with color samples and project details',
                  timeline: 'Day 8-10'
                },
                {
                  step: 5,
                  title: 'Submit for Review',
                  description: 'Submit application and wait for committee review (usually monthly meetings)',
                  timeline: 'Day 11-35'
                },
                {
                  step: 6,
                  title: 'Begin Project',
                  description: 'Once approved, schedule your professional painting project',
                  timeline: 'After approval'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-azureDark text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-xl font-bold text-brand-gray-900">{item.title}</h3>
                      <span className="px-3 py-1 bg-brand-gray-100 text-brand-azureDark rounded-full text-sm font-medium">
                        {item.timeline}
                      </span>
                    </div>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Help */}
      <SplitSection
        title="Professional HOA Compliance Assistance"
        description={<>We've worked with dozens of Austin HOAs and understand their specific requirements for <Link to="/services/exterior-painting" className="text-brand-azure hover:underline">exterior painting projects</Link>. Let us help you navigate the approval process and choose colors that will be approved quickly.</>}
        benefits={[
          { text: 'Familiar with Austin HOA requirements' },
          { text: 'Help choose pre-approved colors' },
          { text: 'Prepare professional submission materials' },
          { text: 'Color consultation included with painting services' },
          { text: 'Work within HOA timeline requirements' },
          { text: 'Handle any approval complications' }
        ]}
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="HOA paint approval Austin - Professional painting consultation"
        imageLeft={true}
      />

      {/* Common Mistakes to Avoid */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Common HOA Approval Mistakes to Avoid
            </h2>
            <p className="text-xl text-slate-600">
              Learn from others' mistakes to speed your approval
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="card p-6 border-l-4 border-brand-azureDark">
                <h3 className="text-lg font-bold text-brand-azureDark mb-2">❌ Don't Paint First</h3>
                <p className="text-slate-600">Never start painting before getting HOA approval, even if you think the color is safe.</p>
              </div>
              
              <div className="card p-6 border-l-4 border-brand-azureDark">
                <h3 className="text-lg font-bold text-brand-azureDark mb-2">❌ Don't Submit Tiny Samples</h3>
                <p className="text-slate-600">Small paint chips don't show true color. Use large samples or painted boards.</p>
              </div>
              
              <div className="card p-6 border-l-4 border-brand-azureDark">
                <h3 className="text-lg font-bold text-brand-azureDark mb-2">❌ Don't Forget Trim Colors</h3>
                <p className="text-slate-600">Include all colors in your submission - body, trim, shutters, doors, etc.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6 border-l-4 border-brand-azure">
                <h3 className="text-lg font-bold text-brand-azure mb-2">✅ Submit Complete Applications</h3>
                <p className="text-slate-600">Include all required forms, samples, and documentation in your initial submission.</p>
              </div>
              
              <div className="card p-6 border-l-4 border-brand-azure">
                <h3 className="text-lg font-bold text-brand-azure mb-2">✅ Plan for Processing Time</h3>
                <p className="text-slate-600">Start the approval process 4-6 weeks before you want to begin painting.</p>
              </div>
              
              <div className="card p-6 border-l-4 border-brand-azure">
                <h3 className="text-lg font-bold text-brand-azure mb-2">✅ Follow Up Professionally</h3>
                <p className="text-slate-600">Check on status respectfully and be prepared to provide additional information if needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <MiniFAQ
        title="Austin HOA Paint Color FAQ"
        faqs={faqs}
      />

      {/* Next Steps */}
      <NextStepsSection
        title="Ready to Paint Your HOA Home?"
        description="Get professional guidance through the HOA approval process and expert color selection."
        serviceTitle="Color Consultation Services"
        serviceDescription="Expert color consultation to help navigate HOA requirements and choose the perfect colors."
        serviceLink="/color-consultation"
      />
    </>
  );
};

export default HOAColorTips;