import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['hutto'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial-painting'
  },
  location: location,
  canonicalOverride: '/commercial-painting-hutto',
  content: {
    heroSubtitle: 'Professional commercial painting for Hutto businesses. Supporting Hutto\'s rapid growth with quality commercial painting services.',
    introText: `Hutto's booming growth includes a expanding business community that needs professional commercial painting. From new retail developments to professional offices and restaurants, we provide quality commercial painting for Hutto businesses. Our team delivers efficient, professional results that help Hutto businesses succeed.`,
    benefits: [
      'Growth-community expertise',
      'New business experience',
      'Retail and office painting',
      'Restaurant specialists',
      'Flexible scheduling',
      'Efficient completion',
      'Licensed and insured',
      'Competitive rates'
    ],
    processSteps: [
      { title: 'Project Evaluation', description: 'Assess your Hutto commercial space and business requirements.' },
      { title: 'Business-Friendly Schedule', description: 'Timeline supporting your Hutto business operations.' },
      { title: 'Professional Preparation', description: 'Thorough prep for quality, durable results.' },
      { title: 'Quality Painting', description: 'Professional commercial application meeting standards.' },
      { title: 'Quality Assurance', description: 'Review ensuring all work meets commercial standards.' },
      { title: 'Business-Ready Finish', description: 'Your Hutto business looking professional.' }
    ],
    faqs: [
      { question: 'How much does commercial painting cost in Hutto?', answer: 'Hutto commercial painting typically ranges from $1.35-$3.50 per square foot depending on project scope. We provide detailed quotes after assessment.' },
      { question: 'Do you serve Hutto\'s new developments?', answer: 'Yes! We work with new business owners and developers throughout Hutto\'s expanding commercial areas.' },
      { question: 'Can you paint restaurants and food service?', answer: 'Absolutely. We paint restaurants, cafes, and food service establishments with proper scheduling to avoid disruption.' },
      { question: 'What about Hutto retail spaces?', answer: 'We paint retail stores, shopping centers, and service businesses throughout Hutto. We can work around business hours.' },
      { question: 'Do you handle tenant improvements?', answer: 'Yes! We work with landlords and tenants on commercial space build-outs and improvements in Hutto.' }
    ],
    testimonials: [
      { name: 'New Restaurant Owner', location: 'Hutto', rating: 5, text: 'They helped us meet our grand opening date with quality work. Professional commercial painters!', initials: 'NR' },
      { name: 'Office Manager', location: 'Hutto', rating: 5, text: 'Painted our office space efficiently with minimal disruption. Quality results and professional crew.', initials: 'OM' },
      { name: 'Retail Shop Owner', location: 'Hutto', rating: 5, text: 'Great transformation of our store. They worked around our hours and delivered quality results.', initials: 'RS' }
    ]
  },
  images: {
    hero: '/commercial-painting-services-austin.jpg',
    heroAlt: 'Commercial painting in Hutto Texas',
    secondary: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Hutto commercial painting services'
  }
};

const CommercialPaintingHutto = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingHutto;
