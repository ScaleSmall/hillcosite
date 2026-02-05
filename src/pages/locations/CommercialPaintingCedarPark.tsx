import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['leander'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial-painting'
  },
  location: location,
  canonicalOverride: '/commercial-painting-leander',
  content: {
    heroSubtitle: 'Professional commercial painting for Leander businesses. Retail, office, and industrial expertise with scheduling that works around your operations.',
    introText: `Leander's growing business community needs commercial painters who understand local business needs. From Crystal Falls retail to professional offices throughout, we deliver quality commercial painting that enhances your business image. Our team works efficiently around your schedule to minimize disruption.`,
    benefits: [
      'Retail painting expertise',
      'Office space specialists',
      'Commercial space experience',
      'Flexible scheduling options',
      'Efficient turnaround capable',
      'Quality commercial finishes',
      'Licensed and insured',
      'Competitive rates'
    ],
    processSteps: [
      { title: 'Site Evaluation', description: 'Assess your Leander commercial space and project requirements.' },
      { title: 'Business-Friendly Schedule', description: 'Develop timeline minimizing impact on your Leander operations.' },
      { title: 'Professional Preparation', description: 'Protect your business assets while preparing surfaces for quality results.' },
      { title: 'Efficient Painting', description: 'Quality application meeting commercial durability standards.' },
      { title: 'Quality Assurance', description: 'Inspection ensuring professional standards throughout.' },
      { title: 'Clean Handoff', description: 'Your Leander business ready for customers.' }
    ],
    faqs: [
      { question: 'How much does commercial painting cost in Leander?', answer: 'Leander commercial painting typically ranges from $1.50-$4.00 per square foot depending on scope, conditions, and scheduling. We provide detailed quotes after site assessment.' },
      { question: 'Can you work nights and weekends?', answer: 'Yes! We regularly schedule after-hours and weekend work for Leander retail and office spaces to avoid business disruption.' },
      { question: 'What types of businesses do you serve?', answer: 'We paint retail stores, restaurants, offices, medical facilities, gyms, warehouses, and more throughout Leander.' },
      { question: 'How fast can you complete a retail space?', answer: 'Depending on size and complexity, many Leander retail spaces can be completed over a weekend. We discuss timelines during assessment.' },
      { question: 'Do you handle tenant improvements?', answer: 'Yes! We work with landlords and tenants on commercial space improvements and build-outs throughout Leander.' }
    ],
    testimonials: [
      { name: 'Retail Manager', location: '1890 Ranch', rating: 5, text: 'They transformed our store in one weekend. Customers on Monday had no idea we\'d just been painted. Great work!', initials: 'RM' },
      { name: 'Office Building Owner', location: 'Cedar Park', rating: 5, text: 'Professional commercial painters who delivered quality work on schedule. They\'ve painted three of our properties now.', initials: 'OB' },
      { name: 'Restaurant Owner', location: 'Cedar Park', rating: 5, text: 'Painted our restaurant overnight without affecting a single day of service. Quality results and professional crew.', initials: 'RO' }
    ]
  },
  images: {
    hero: '/commercial-painting-services-austin.jpg',
    heroAlt: 'Commercial painting in Leander Texas',
    secondary: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Leander commercial painting services'
  }
};

const CommercialPaintingCedarPark = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingCedarPark;
