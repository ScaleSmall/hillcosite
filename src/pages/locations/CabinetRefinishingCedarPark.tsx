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
  canonicalOverride: '/cabinet-refinishing-leander',
  content: {
    heroSubtitle: 'Transform your Leander kitchen with professional cabinet refinishing. Modern updates, factory-quality finishes, family-friendly scheduling.',
    introText: `Leander families are updating their kitchens with cabinet refinishing - achieving modern looks at a fraction of new cabinet costs. Whether your Crystal Falls kitchen has dated oak or your Mason Hills cabinets need a color refresh, our team delivers smooth, durable finishes that transform your space while working around your family's schedule.`,
    benefits: [
      'Family schedule flexibility',
      'Modern color transformations',
      'Factory-smooth finishes',
      'Quick project completion',
      'Minimal kitchen downtime',
      'Hardware upgrade options',
      'Durable, cleanable surfaces',
      '2-year warranty protection'
    ],
    processSteps: [
      { title: 'Free Consultation', description: 'Evaluate your Leander cabinets and discuss transformation options.' },
      { title: 'Color Selection', description: 'Help choosing colors that modernize your Leander kitchen.' },
      { title: 'Efficient Preparation', description: 'Thorough prep while minimizing disruption to your family.' },
      { title: 'Professional Finishing', description: 'Expert spray application for smooth, factory-quality results.' },
      { title: 'Hardware Installation', description: 'New or existing hardware installed to complete the transformation.' },
      { title: 'Final Walkthrough', description: 'Review ensuring every cabinet meets your expectations.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Leander?', answer: 'Leander cabinet refinishing typically ranges from $3,200-$7,500 depending on kitchen size and cabinet condition. Much less than replacement!' },
      { question: 'How long will the project take?', answer: 'Most Leander cabinet projects take 4-6 days. We work efficiently to get your kitchen back to full function quickly.' },
      { question: 'Can you work around our family schedule?', answer: 'Absolutely! We coordinate timing to minimize disruption. Many Leander families appreciate our efficiency and respect for their routines.' },
      { question: 'What colors are popular in Leander?', answer: 'White, greige, and soft gray are popular choices. We help select colors that brighten your kitchen and complement your home.' },
      { question: 'Is the finish durable for busy families?', answer: 'Yes! Our finishes withstand daily use including cleaning, moisture, and normal kitchen activity. We use premium products designed for durability.' }
    ],
    testimonials: [
      { name: 'Stephanie Young', location: 'Buttercup Creek', rating: 5, text: 'Our kitchen looks like we spent $20,000 on new cabinets! They worked around our kids\' schedules and delivered amazing results.', initials: 'SY' },
      { name: 'Kevin Park', location: 'Twin Creeks', rating: 5, text: 'Transformed our dated 90s oak to modern white. The crew was professional and fast. Kitchen of our dreams!', initials: 'KP' },
      { name: 'Amy Rodriguez', location: 'Anderson Mill', rating: 5, text: 'Best home improvement decision we\'ve made. Quality finish, fair price, and they cleaned up perfectly every day.', initials: 'AR' }
    ]
  },
  images: {
    hero: '/kitchen-cabinet-refinishing-austin.jpg',
    heroAlt: 'Cabinet refinishing in Leander Texas',
    secondary: '/circle-c-ranch-kitchen-painting-austin.jpg',
    secondaryAlt: 'Leander cabinet painting services'
  }
};

const CabinetRefinishingCedarPark = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingCedarPark;
