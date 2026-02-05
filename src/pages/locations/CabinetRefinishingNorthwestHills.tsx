import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['northwest-hills'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Northwest Hills\' cabinet refinishing experts. Transform your kitchen with professional quality and modern finishes.',
    introText: `Northwest Hills kitchens deserve cabinet refinishing that matches the quality of these established homes. Whether updating a mid-century kitchen or refreshing a traditional space, we bring expertise in both classic and contemporary finishes. Our process transforms your cabinets with lasting, beautiful results.`,
    benefits: [
      'Custom colors',
      'Factory-quality finishes',
      'Quick turnaround',
      'Minimal disruption',
      'All cabinet styles',
      'Modern techniques',
      'Professional results',
      '2-year warranty'
    ],
    processSteps: [
      { title: 'Kitchen Assessment', description: 'Evaluation of your cabinets and finish options for your home.' },
      { title: 'Design Consultation', description: 'Color and finish selection to complement your style.' },
      { title: 'Professional Prep', description: 'Thorough cleaning, sanding, and preparation.' },
      { title: 'Expert Application', description: 'Multiple coats applied with professional equipment.' },
      { title: 'Quality Finishing', description: 'Smooth, durable finish with attention to detail.' },
      { title: 'Final Inspection', description: 'Comprehensive review ensuring exceptional results.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Northwest Hills?', answer: 'Cabinet refinishing in Northwest Hills typically ranges from $3,500-$10,000 depending on kitchen size and finish complexity.' },
      { question: 'How long does the process take?', answer: 'Most Northwest Hills kitchens take 5-7 days from start to finish. We work efficiently while maintaining quality.' },
      { question: 'Can you update our mid-century kitchen?', answer: 'Yes! We love working with mid-century kitchens. We can modernize while respecting the original character.' },
      { question: 'Will we need to move out?', answer: 'No. While we recommend staying out of the kitchen during application, you can remain in your home.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on cabinet refinishing covering finish quality and durability.' }
    ],
    testimonials: [
      { name: 'Christine Baker', location: 'Allandale', rating: 5, text: 'Our mid-century kitchen looks amazing! The finish quality is exceptional.', initials: 'CB' },
      { name: 'Mark Wilson', location: 'Northwest Hills', rating: 5, text: 'Professional work and great results. Our cabinets look brand new!', initials: 'MW' },
      { name: 'Lisa Turner', location: 'Crestview', rating: 5, text: 'Excellent experience! They were efficient, professional, and delivered beautiful results.', initials: 'LT' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Cabinet refinishing in Northwest Hills Austin Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function CabinetRefinishingNorthwestHills() {
  return <ServiceLocationPage config={config} />;
}
