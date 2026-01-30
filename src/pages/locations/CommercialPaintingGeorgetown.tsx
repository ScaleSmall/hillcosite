import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['georgetown'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Expert commercial painting for Georgetown businesses. Historic square preservation, modern retail expertise, and professional results that enhance your business image.',
    introText: `Georgetown's business community includes everything from historic square storefronts to modern Wolf Ranch retail. Our commercial painting team understands both heritage preservation and contemporary business needs. We deliver quality results that enhance your business image while working around your operations to minimize disruption.`,
    benefits: [
      'Historic storefront expertise',
      'Modern retail experience',
      'Square district knowledge',
      'Flexible scheduling',
      'Minimal business disruption',
      'Quality commercial finishes',
      'Licensed and insured',
      'Competitive pricing'
    ],
    processSteps: [
      { title: 'Business Consultation', description: 'Assess your Georgetown commercial space and understand your business needs.' },
      { title: 'Heritage-Appropriate Planning', description: 'Develop approach respecting Georgetown\'s character for historic district work.' },
      { title: 'Scheduled Execution', description: 'Work around your business hours to minimize customer and employee disruption.' },
      { title: 'Quality Application', description: 'Professional painting meeting commercial durability standards.' },
      { title: 'Inspection Review', description: 'Ensure all work meets our quality standards and your expectations.' },
      { title: 'Business-Ready Completion', description: 'Your Georgetown business looking its best for customers.' }
    ],
    faqs: [
      { question: 'How much does commercial painting cost in Georgetown?', answer: 'Georgetown commercial painting varies by project scope. Historic square buildings may have specific requirements. We provide detailed quotes after assessment.' },
      { question: 'Do you understand Georgetown Square requirements?', answer: 'Yes! We\'re familiar with historic district guidelines and work within Georgetown\'s preservation standards when required.' },
      { question: 'Can you paint during business hours?', answer: 'When possible, we work before/after hours or during slow periods. For 24-hour operations, we coordinate carefully to minimize impact.' },
      { question: 'What commercial spaces do you paint in Georgetown?', answer: 'We paint offices, retail shops, restaurants, medical facilities, and industrial spaces throughout Georgetown.' },
      { question: 'How do you protect my business during painting?', answer: 'We protect all fixtures, merchandise, and equipment. For active businesses, we create containment zones and maintain clean work areas.' }
    ],
    testimonials: [
      { name: 'Square Shop Owner', location: 'Georgetown Square', rating: 5, text: 'They understood our historic storefront needed special attention. Beautiful results that honor Georgetown\'s heritage.', initials: 'SS' },
      { name: 'Medical Office Manager', location: 'Georgetown', rating: 5, text: 'Professional, clean, and efficient. They painted our medical office with zero disruption to patient care. Excellent!', initials: 'MO' },
      { name: 'Restaurant Owner', location: 'Wolf Ranch', rating: 5, text: 'Completed our restaurant refresh over two nights. We never missed a day of business. Quality work!', initials: 'RO' }
    ]
  },
  images: {
    hero: '/commercial-painting-services-austin.jpg',
    heroAlt: 'Commercial painting in Georgetown Texas',
    secondary: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Georgetown commercial painting quality'
  }
};

const CommercialPaintingGeorgetown = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingGeorgetown;
