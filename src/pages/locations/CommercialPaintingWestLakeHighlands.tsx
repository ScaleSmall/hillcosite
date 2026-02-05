import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['west-lake-highlands'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial'
  },
  location: location,
  content: {
    heroSubtitle: 'West Lake Highlands\' commercial painting specialists. Professional finishes for West Austin businesses.',
    introText: `West Lake Highlands commercial properties deserve painters who understand quality standards and professional service. From office spaces to retail locations, we bring commercial expertise appropriate for this West Austin corridor. Our team delivers quality finishes that meet commercial durability requirements while maintaining professional schedules.`,
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
      { question: 'Can you work after hours?', answer: 'Yes! We offer evening and weekend scheduling to minimize disruption to your business.' },
      { question: 'How do you minimize business interruption?', answer: 'We plan carefully and work efficiently. Many projects are completed with minimal impact.' },
      { question: 'Do you work in the West Austin area?', answer: 'Yes. We regularly serve West Lake Highlands and surrounding West Austin commercial properties.' },
      { question: 'What types of properties do you paint?', answer: 'We work with offices, retail spaces, medical facilities, and other commercial properties.' },
      { question: 'What warranty do you provide?', answer: 'We offer warranty coverage appropriate for commercial properties, typically 1-2 years.' }
    ],
    testimonials: [
      { name: 'Karen Phillips', location: 'West Lake Highlands', rating: 5, text: 'Perfect for our office space. Professional work and minimal disruption!', initials: 'KP' },
      { name: 'Richard Santos', location: 'Westlake Drive', rating: 5, text: 'Excellent service and quality work. They worked around our schedule perfectly.', initials: 'RS' },
      { name: 'Tracy Nelson', location: 'Hill Country', rating: 5, text: 'Great experience! Professional crew and quality results.', initials: 'TN' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Commercial painting in West Lake Highlands Austin Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function CommercialPaintingWestLakeHighlands() {
  return <ServiceLocationPage config={config} />;
}
