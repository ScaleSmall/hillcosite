import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['round-rock'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Transform your Round Rock kitchen with professional cabinet refinishing. Fraction of replacement cost, stunning results, minimal disruption.',
    introText: `Round Rock homeowners are discovering the value of cabinet refinishing - a complete kitchen transformation at a fraction of replacement cost. Whether you're updating dated oak cabinets in a Forest Creek home or refreshing already-painted cabinets in Avery Ranch, our team delivers factory-quality finishes that revitalize your kitchen without the expense and disruption of a full remodel.`,
    benefits: [
      'Fraction of replacement cost',
      'Factory-quality finishes',
      'Minimal kitchen disruption',
      'Modern color options',
      'Oak and wood grain solutions',
      'Hardware upgrade included',
      'Thorough preparation process',
      '2-year cabinet warranty'
    ],
    processSteps: [
      { title: 'Kitchen Assessment', description: 'Evaluate your Round Rock cabinets and discuss finish options and color choices.' },
      { title: 'Color Selection', description: 'Help choosing modern colors that transform your kitchen\'s appearance.' },
      { title: 'Meticulous Preparation', description: 'Door removal, thorough cleaning, sanding, and priming for optimal adhesion.' },
      { title: 'Spray Application', description: 'Professional spray finishing for smooth, factory-quality results.' },
      { title: 'Hardware Installation', description: 'Reinstallation with new or existing hardware as desired.' },
      { title: 'Final Inspection', description: 'Comprehensive review ensuring every cabinet meets our quality standards.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Round Rock?', answer: 'Round Rock cabinet refinishing typically ranges from $3,500-$8,000 depending on kitchen size and cabinet condition. This is typically 1/3 to 1/5 the cost of replacement.' },
      { question: 'How long does cabinet refinishing take?', answer: 'Most Round Rock kitchen cabinet projects take 4-7 days. We work efficiently while ensuring proper cure times between coats.' },
      { question: 'Can you paint over oak cabinets?', answer: 'Absolutely! Many Round Rock homes have dated oak cabinets. Our process eliminates the wood grain for a smooth, modern finish.' },
      { question: 'What finish options are available?', answer: 'We offer various sheens from matte to semi-gloss. Most Round Rock homeowners prefer satin or semi-gloss for durability and easy cleaning.' },
      { question: 'Will refinished cabinets last?', answer: 'With proper preparation and premium finishes, refinished cabinets last 8-12+ years. We provide a 2-year warranty covering peeling and adhesion issues.' }
    ],
    testimonials: [
      { name: 'Lisa Foster', location: 'Avery Ranch', rating: 5, text: 'Our kitchen looks completely new! They transformed our dated oak cabinets into modern white beauties. Amazing transformation at a fraction of new cabinet cost.', initials: 'LF' },
      { name: 'Matt Harrison', location: 'Teravista', rating: 5, text: 'Professional process, minimal disruption, and stunning results. Our Teravista kitchen went from drab to fab. Highly recommend!', initials: 'MH' },
      { name: 'Diana Chen', location: 'Forest Creek', rating: 5, text: 'They knew exactly how to handle our older cabinets. The finish is smooth and durable. Best home improvement decision we\'ve made!', initials: 'DC' }
    ]
  },
  images: {
    hero: '/kitchen-cabinet-refinishing-austin.jpg',
    heroAlt: 'Cabinet refinishing in Round Rock Texas',
    secondary: '/kitchen-cabinet-painting-west-lake-hills.jpg',
    secondaryAlt: 'Round Rock cabinet painting expertise'
  }
};

const CabinetRefinishingRoundRock = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingRoundRock;
