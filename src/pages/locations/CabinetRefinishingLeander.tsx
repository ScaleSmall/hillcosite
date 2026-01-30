import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['leander'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Transform your Leander kitchen with professional cabinet refinishing. Upgrade new construction or refresh existing cabinets with factory-quality finishes.',
    introText: `Leander's growing community includes many homes with kitchens ready for cabinet updates. Whether you're personalizing new construction cabinets in Crystal Falls or refreshing established kitchen cabinetry in Mason Hills, our team delivers smooth, durable finishes that transform your most-used room without the cost and disruption of replacement.`,
    benefits: [
      'New construction upgrades',
      'Modern color transformations',
      'Factory-quality finishes',
      'Efficient completion',
      'Kitchen stays functional',
      'Premium paint products',
      'Hardware updates available',
      '2-year warranty standard'
    ],
    processSteps: [
      { title: 'Free Assessment', description: 'Evaluate your Leander kitchen cabinets and discuss transformation options.' },
      { title: 'Color Selection', description: 'Expert guidance on colors that enhance your Leander kitchen.' },
      { title: 'Professional Preparation', description: 'Thorough prep for smooth finishes and lasting adhesion.' },
      { title: 'Expert Application', description: 'Quality spray finishing for consistent, beautiful results.' },
      { title: 'Hardware Installation', description: 'Updated or existing hardware professionally installed.' },
      { title: 'Final Inspection', description: 'Comprehensive review ensuring quality standards are met.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Leander?', answer: 'Leander cabinet refinishing typically ranges from $3,400-$7,800 depending on kitchen size and cabinet condition. New construction cabinets often refinish at lower costs.' },
      { question: 'Can I customize my new construction cabinets?', answer: 'Yes! Many Leander homeowners refinish new construction cabinets to achieve custom colors and premium finishes not available from builders.' },
      { question: 'How long does cabinet refinishing take?', answer: 'Most Leander kitchen projects take 4-6 days. We balance efficiency with proper preparation and cure times for lasting results.' },
      { question: 'What finishes are popular in Leander?', answer: 'White remains most popular, followed by soft gray and greige tones. These colors brighten kitchens and complement Hill Country surroundings.' },
      { question: 'Is refinishing better than replacing?', answer: 'For most Leander homes, refinishing provides a similar transformation at 20-35% of replacement cost with far less disruption.' }
    ],
    testimonials: [
      { name: 'Michelle Adams', location: 'Crystal Falls', rating: 5, text: 'Our new construction cabinets are now beautiful custom white! So much better than the basic builder finish. Worth every penny!', initials: 'MA' },
      { name: 'Ryan Torres', location: 'Travisso', rating: 5, text: 'Professional job transforming our oak cabinets. The kitchen looks completely renovated. Excellent crew and results!', initials: 'RT' },
      { name: 'Laura Peterson', location: 'Mason Hills', rating: 5, text: 'They made our outdated kitchen look modern and fresh. Quality work, fair price, and minimal disruption to our family.', initials: 'LP' }
    ]
  },
  images: {
    hero: '/circle-c-ranch-kitchen-painting-austin.jpg',
    heroAlt: 'Cabinet refinishing in Leander Texas',
    secondary: '/kitchen-cabinet-refinishing-austin.jpg',
    secondaryAlt: 'Leander cabinet painting expertise'
  }
};

const CabinetRefinishingLeander = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingLeander;
