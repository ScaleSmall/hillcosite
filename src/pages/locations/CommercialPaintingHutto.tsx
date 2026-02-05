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
  content: {
    heroSubtitle: 'Professional commercial painting for Taylor businesses. Supporting Taylor\'s rapid growth with quality commercial painting services.',
    introText: `Taylor's booming growth includes a expanding business community that needs professional commercial painting. From new retail developments to professional offices and restaurants, we provide quality commercial painting for Taylor businesses. Our team delivers efficient, professional results that help Taylor businesses succeed.`,
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
      { title: 'Project Evaluation', description: 'Assess your Taylor commercial space and business requirements.' },
      { title: 'Business-Friendly Schedule', description: 'Timeline supporting your Taylor business operations.' },
      { title: 'Professional Preparation', description: 'Thorough prep for quality, durable results.' },
      { title: 'Quality Painting', description: 'Professional commercial application meeting standards.' },
      { title: 'Quality Assurance', description: 'Review ensuring all work meets commercial standards.' },
      { title: 'Business-Ready Finish', description: 'Your Taylor business looking professional.' }
    ],
    faqs: [
      { question: 'How much does commercial painting cost in Taylor?', answer: 'Taylor commercial painting typically ranges from $1.35-$3.50 per square foot depending on project scope. We provide detailed quotes after assessment.' },
      { question: 'Do you serve Taylor\'s new developments?', answer: 'Yes! We work with new business owners and developers throughout Taylor\'s expanding commercial areas.' },
      { question: 'Can you paint restaurants and food service?', answer: 'Absolutely. We paint restaurants, cafes, and food service establishments with proper scheduling to avoid disruption.' },
      { question: 'What about Taylor retail spaces?', answer: 'We paint retail stores, shopping centers, and service businesses throughout Taylor. We can work around business hours.' },
      { question: 'Do you handle tenant improvements?', answer: 'Yes! We work with landlords and tenants on commercial space build-outs and improvements in Taylor.' }
    ],
    testimonials: [
      { name: 'New Restaurant Owner', location: 'Hutto', rating: 5, text: 'They helped us meet our grand opening date with quality work. Professional commercial painters!', initials: 'NR' },
      { name: 'Office Manager', location: 'Hutto', rating: 5, text: 'Painted our office space efficiently with minimal disruption. Quality results and professional crew.', initials: 'OM' },
      { name: 'Retail Shop Owner', location: 'Hutto', rating: 5, text: 'Great transformation of our store. They worked around our hours and delivered quality results.', initials: 'RS' }
    ]
  },
  images: {
    hero: '/commercial-painting-services-austin.jpg',
    heroAlt: 'Commercial painting in Taylor Texas',
    secondary: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Taylor commercial painting services'
  }
};

const CommercialPaintingTaylor = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingTaylor;
