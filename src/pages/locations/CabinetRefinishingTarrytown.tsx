import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['tarrytown'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Tarrytown\'s cabinet refinishing experts. Transform your kitchen with professional craftsmanship and luxury finishes.',
    introText: `Tarrytown kitchens deserve cabinet refinishing that matches the quality of these distinguished homes. Whether updating a historic kitchen or refreshing a modern space, we bring expertise in both traditional and contemporary finishes. Our process transforms your cabinets with results that complement Tarrytown\'s refined aesthetic.`,
    benefits: [
      'Custom color matching',
      'Premium finish options',
      'Factory-quality results',
      'Historic sensitivity',
      'Modern techniques',
      'Minimal disruption',
      'Quick turnaround',
      '2-year warranty'
    ],
    processSteps: [
      { title: 'Kitchen Assessment', description: 'Evaluation of your cabinets and finish options for your Tarrytown home.' },
      { title: 'Design Consultation', description: 'Color and finish selection to complement your home\'s style.' },
      { title: 'Professional Prep', description: 'Thorough cleaning, sanding, and preparation for lasting results.' },
      { title: 'Expert Application', description: 'Multiple coats applied with professional spray equipment.' },
      { title: 'Quality Finishing', description: 'Smooth, durable finish with attention to every detail.' },
      { title: 'Final Inspection', description: 'Comprehensive review ensuring exceptional results.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Tarrytown?', answer: 'Cabinet refinishing in Tarrytown typically ranges from $4,000-$12,000 depending on kitchen size, cabinet condition, and finish complexity.' },
      { question: 'How long does the process take?', answer: 'Most Tarrytown kitchens take 5-7 days from start to finish. We work efficiently while maintaining high quality standards.' },
      { question: 'Can you match custom colors?', answer: 'Yes! We can match any color and offer various finish options from traditional to contemporary.' },
      { question: 'Will I need to leave my home?', answer: 'No. While we recommend staying out of the kitchen during application, you can remain in your home throughout the process.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on cabinet refinishing covering finish quality and durability.' }
    ],
    testimonials: [
      { name: 'Patricia Graham', location: 'Tarrytown', rating: 5, text: 'Our kitchen looks brand new! The finish quality is exceptional and the process was smooth and professional.', initials: 'PG' },
      { name: 'Robert Hayes', location: 'Pemberton Heights', rating: 5, text: 'Excellent work on our historic kitchen. They matched the quality we expected for our Tarrytown home.', initials: 'RH' },
      { name: 'Susan Lee', location: 'Clarksville', rating: 5, text: 'Beautiful results! Our cabinets look stunning and the team was professional throughout.', initials: 'SL' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Cabinet refinishing in Tarrytown Austin Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function CabinetRefinishingTarrytown() {
  return <ServiceLocationPage config={config} />;
}
