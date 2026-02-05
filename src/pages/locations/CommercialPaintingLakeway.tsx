import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['lakeway'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial'
  },
  location: location,
  content: {
    heroSubtitle: 'Lakeway\'s commercial painting specialists. Professional finishes for Lake Travis area businesses.',
    introText: `Lakeway commercial properties deserve painters who understand both quality standards and resort area aesthetics. From retail spaces to office buildings, we bring commercial expertise appropriate for this Lake Travis corridor. Our team delivers quality finishes that meet commercial durability requirements while complementing Lakeway\'s upscale character.`,
    benefits: [
      'Flexible scheduling',
      'After-hours available',
      'Minimal disruption',
      'Commercial durability',
      'Resort area experience',
      'Licensed and insured',
      'Free estimates',
      'Warranty coverage'
    ],
    processSteps: [
      { title: 'Property Assessment', description: 'Evaluation of your commercial space and scheduling needs.' },
      { title: 'Project Planning', description: 'Detailed plan minimizing disruption to operations.' },
      { title: 'Professional Prep', description: 'Thorough preparation ensuring quality and durability.' },
      { title: 'Quality Application', description: 'Commercial-grade painting meeting your schedule.' },
      { title: 'Clean Completion', description: 'Professional cleanup and minimal business impact.' },
      { title: 'Final Walkthrough', description: 'Comprehensive review ensuring satisfaction.' }
    ],
    faqs: [
      { question: 'Can you work around tourist season?', answer: 'Yes! We understand Lakeway\'s busy seasons. We offer flexible scheduling to accommodate your business needs.' },
      { question: 'How do you minimize business interruption?', answer: 'We plan carefully and work efficiently. Many projects are completed with minimal impact to operations.' },
      { question: 'Do you work with resort properties?', answer: 'Yes. We have experience with Lake Travis area resorts, retail, and hospitality properties.' },
      { question: 'What about lake climate considerations?', answer: 'We use commercial-grade materials specifically designed for Lake Travis humidity and weather conditions.' },
      { question: 'What warranty do you provide?', answer: 'We offer warranty coverage appropriate for commercial properties, typically 1-2 years.' }
    ],
    testimonials: [
      { name: 'Robert King', location: 'Lakeway', rating: 5, text: 'Perfect for our retail space. Professional work and they understood our tourist season needs!', initials: 'RK' },
      { name: 'Jessica Lane', location: 'The Hills', rating: 5, text: 'Excellent service and quality work. Minimal disruption to our operations.', initials: 'JL' },
      { name: 'Timothy Ross', location: 'Bee Cave', rating: 5, text: 'Great experience! They delivered quality results on schedule.', initials: 'TR' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Commercial painting in Lakeway Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function CommercialPaintingLakeway() {
  return <ServiceLocationPage config={config} />;
}
