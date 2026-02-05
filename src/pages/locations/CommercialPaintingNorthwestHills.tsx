import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['northwest-hills'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial'
  },
  location: location,
  content: {
    heroSubtitle: 'Northwest Hills\' commercial painting specialists. Professional finishes for North Austin businesses.',
    introText: `Northwest Hills commercial properties deserve painters who understand the area\'s professional character. From office buildings to retail spaces, we bring commercial expertise appropriate for this established North Austin corridor. Our team delivers quality finishes that meet commercial durability standards while maintaining professional schedules.`,
    benefits: [
      'Flexible scheduling',
      'After-hours available',
      'Minimal disruption',
      'Commercial durability',
      'Professional finishes',
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
      { question: 'Can you work evenings or weekends?', answer: 'Yes! We understand commercial needs. We offer evening and weekend scheduling to minimize disruption.' },
      { question: 'How do you minimize business interruption?', answer: 'We plan carefully and work efficiently. Many projects are completed with minimal impact to operations.' },
      { question: 'Do you work with property managers?', answer: 'Yes. We regularly work with Northwest Hills property managers and understand their requirements.' },
      { question: 'What about tech company schedules?', answer: 'We understand North Austin\'s tech corridor. We work flexibly around your team\'s needs.' },
      { question: 'What warranty do you provide?', answer: 'We offer warranty coverage appropriate for commercial properties, typically 1-2 years.' }
    ],
    testimonials: [
      { name: 'Ryan Peters', location: 'Northwest Hills', rating: 5, text: 'Perfect for our tech office. They worked around our schedule and delivered professional results!', initials: 'RP' },
      { name: 'Nicole Foster', location: 'Allandale', rating: 5, text: 'Excellent work on our retail space. Professional and efficient throughout!', initials: 'NF' },
      { name: 'Greg Harrison', location: 'Crestview', rating: 5, text: 'Great experience. Minimal disruption and quality work!', initials: 'GH' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Commercial painting in Northwest Hills Austin Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function CommercialPaintingNorthwestHills() {
  return <ServiceLocationPage config={config} />;
}
