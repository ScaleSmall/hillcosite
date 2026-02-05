import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['tarrytown'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial'
  },
  location: location,
  content: {
    heroSubtitle: 'Tarrytown\'s commercial painting specialists. Professional finishes for businesses in Old Austin\'s premier neighborhood.',
    introText: `Tarrytown commercial properties deserve painters who understand the area\'s refined character. From boutique retail to professional offices, we bring expertise appropriate for this distinguished neighborhood. Our team delivers quality finishes that complement Tarrytown\'s aesthetic while meeting commercial durability requirements.`,
    benefits: [
      'After-hours scheduling',
      'Minimal disruption',
      'Commercial durability',
      'Professional appearance',
      'Quick turnaround',
      'Licensed and insured',
      'Free estimates',
      'Warranty coverage'
    ],
    processSteps: [
      { title: 'Property Assessment', description: 'Evaluation of your commercial space and scheduling requirements.' },
      { title: 'Project Planning', description: 'Detailed plan minimizing disruption to your business operations.' },
      { title: 'Professional Prep', description: 'Thorough preparation ensuring quality and durability.' },
      { title: 'Quality Application', description: 'Commercial-grade painting meeting your schedule and standards.' },
      { title: 'Clean Completion', description: 'Professional cleanup and minimal disruption to your business.' },
      { title: 'Final Walkthrough', description: 'Comprehensive review ensuring your satisfaction.' }
    ],
    faqs: [
      { question: 'Can you work after hours?', answer: 'Yes! We understand Tarrytown businesses need minimal disruption. We offer evening and weekend scheduling.' },
      { question: 'How do you minimize business interruption?', answer: 'We plan carefully and work efficiently. Many projects are completed with minimal impact to your operations.' },
      { question: 'Do you handle retail and office spaces?', answer: 'Yes. We work with various Tarrytown commercial properties including retail, offices, and mixed-use spaces.' },
      { question: 'What about parking and access?', answer: 'We coordinate carefully in Tarrytown\'s urban environment, managing parking and access to minimize impact.' },
      { question: 'What warranty do you provide?', answer: 'We offer warranty coverage appropriate for commercial properties, typically 1-2 years depending on the project scope.' }
    ],
    testimonials: [
      { name: 'Michael Stevens', location: 'Tarrytown', rating: 5, text: 'Perfect for our retail space. They worked around our hours and delivered professional results!', initials: 'MS' },
      { name: 'Jennifer Clark', location: 'Enfield', rating: 5, text: 'Excellent work on our office. Professional, efficient, and minimal disruption to our team.', initials: 'JC' },
      { name: 'Thomas Burke', location: 'Clarksville', rating: 5, text: 'Great experience. They understood our Tarrytown location and delivered quality work.', initials: 'TB' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Commercial painting in Tarrytown Austin Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function CommercialPaintingTarrytown() {
  return <ServiceLocationPage config={config} />;
}
