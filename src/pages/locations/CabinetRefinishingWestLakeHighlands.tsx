import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['west-lake-highlands'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'West Lake Highlands\' cabinet refinishing experts. Transform your kitchen with professional quality.',
    introText: `West Lake Highlands kitchens deserve cabinet refinishing that matches the quality of these Hill Country homes. Whether updating a contemporary kitchen or refreshing cabinetry, we bring expertise in modern finishes and quality results. Our process transforms your cabinets with lasting beauty that complements your home\'s style.`,
    benefits: [
      'Custom colors',
      'Contemporary finishes',
      'Factory-quality results',
      'Quick turnaround',
      'Minimal disruption',
      'Modern techniques',
      'Professional service',
      '2-year warranty'
    ],
    processSteps: [
      { title: 'Kitchen Assessment', description: 'Evaluation of your cabinets and finish options.' },
      { title: 'Design Consultation', description: 'Color and finish selection to complement your home.' },
      { title: 'Professional Prep', description: 'Thorough cleaning, sanding, and preparation.' },
      { title: 'Expert Application', description: 'Multiple coats applied with professional equipment.' },
      { title: 'Quality Finishing', description: 'Smooth, durable finish with attention to detail.' },
      { title: 'Final Inspection', description: 'Comprehensive review ensuring exceptional results.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in West Lake Highlands?', answer: 'Cabinet refinishing in West Lake Highlands typically ranges from $4,500-$12,000 depending on kitchen size and finish complexity.' },
      { question: 'How long does the process take?', answer: 'Most kitchens take 5-7 days from start to finish. We work efficiently while maintaining quality standards.' },
      { question: 'Can you match contemporary finishes?', answer: 'Yes! We offer various contemporary finish options from matte to high-gloss in any color.' },
      { question: 'Will we need to leave our home?', answer: 'No. While we recommend staying out of the kitchen during application, you can remain in your home.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on cabinet refinishing covering finish quality and durability.' }
    ],
    testimonials: [
      { name: 'Rebecca Hayes', location: 'West Lake Highlands', rating: 5, text: 'Our kitchen looks incredible! The finish quality is exceptional.', initials: 'RH' },
      { name: 'Christopher Lee', location: 'Lake Pointe', rating: 5, text: 'Professional work and beautiful results. Highly recommend!', initials: 'CL' },
      { name: 'Jennifer Moore', location: 'Hill Country', rating: 5, text: 'Excellent experience! They were efficient and delivered outstanding quality.', initials: 'JM' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Cabinet refinishing in West Lake Highlands Austin Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function CabinetRefinishingWestLakeHighlands() {
  return <ServiceLocationPage config={config} />;
}
