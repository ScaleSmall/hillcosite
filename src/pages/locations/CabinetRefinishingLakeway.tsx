import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['lakeway'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Lakeway\'s cabinet refinishing experts. Transform your kitchen with professional quality.',
    introText: `Lakeway kitchens deserve cabinet refinishing that matches the quality of these Lake Travis homes. Whether updating a lakefront kitchen or refreshing cabinetry in your Hill Country home, we bring expertise in both contemporary and traditional finishes. Our process transforms your cabinets with results built for lake living.`,
    benefits: [
      'Custom colors',
      'Premium finishes',
      'Factory-quality results',
      'Lake climate durability',
      'Quick turnaround',
      'Minimal disruption',
      'Professional service',
      '2-year warranty'
    ],
    processSteps: [
      { title: 'Kitchen Assessment', description: 'Evaluation of your cabinets and finish options for your Lakeway home.' },
      { title: 'Design Consultation', description: 'Color and finish selection to complement your lakeside lifestyle.' },
      { title: 'Professional Prep', description: 'Thorough cleaning, sanding, and preparation.' },
      { title: 'Expert Application', description: 'Multiple coats applied with professional equipment.' },
      { title: 'Quality Finishing', description: 'Smooth, durable finish built for lake climate.' },
      { title: 'Final Inspection', description: 'Comprehensive review ensuring exceptional results.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Lakeway?', answer: 'Cabinet refinishing in Lakeway typically ranges from $4,500-$13,000 depending on kitchen size and finish complexity.' },
      { question: 'How long does the process take?', answer: 'Most Lakeway kitchens take 5-7 days from start to finish. We work efficiently while maintaining quality standards.' },
      { question: 'Can you handle lake climate challenges?', answer: 'Yes! We use finishes specifically designed to withstand Lake Travis humidity and climate conditions.' },
      { question: 'Will we need to leave our home?', answer: 'No. While we recommend staying out of the kitchen during application, you can remain in your home.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on cabinet refinishing covering finish quality and durability.' }
    ],
    testimonials: [
      { name: 'Barbara Anderson', location: 'Lakeway', rating: 5, text: 'Our kitchen looks incredible! The finish quality is exceptional and perfect for lake living.', initials: 'BA' },
      { name: 'Steven Martinez', location: 'The Hills', rating: 5, text: 'Professional work and beautiful results. Our cabinets look brand new!', initials: 'SM' },
      { name: 'Carol Wright', location: 'Rough Hollow', rating: 5, text: 'Excellent experience! They delivered outstanding quality on time.', initials: 'CW' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Cabinet refinishing in Lakeway Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function CabinetRefinishingLakeway() {
  return <ServiceLocationPage config={config} />;
}
