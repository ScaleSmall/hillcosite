import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['pflugerville'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Professional commercial painting for Pflugerville businesses. Growing with Pflugerville\'s economy with quality commercial painting services.',
    introText: `Pflugerville's booming business community needs commercial painting that keeps pace with growth. From Stone Hill Town Center retail to professional offices and the expanding industrial sector near Samsung, our team delivers quality commercial painting. We understand Pflugerville businesses are growing fast - we work efficiently to minimize disruption and meet your timelines.`,
    benefits: [
      'Growing business expertise',
      'Retail center experience',
      'Industrial capabilities',
      'Flexible scheduling',
      'Fast project completion',
      'Quality commercial finishes',
      'Licensed and insured',
      'Competitive pricing'
    ],
    processSteps: [
      { title: 'Project Assessment', description: 'Evaluate your Pflugerville commercial space and understand business requirements.' },
      { title: 'Custom Scheduling', description: 'Develop timeline that works with your Pflugerville business operations.' },
      { title: 'Professional Prep', description: 'Thorough preparation protecting your business while ensuring quality.' },
      { title: 'Efficient Execution', description: 'Quality commercial painting meeting deadlines and standards.' },
      { title: 'Quality Review', description: 'Ensure all work meets professional commercial standards.' },
      { title: 'Business-Ready Finish', description: 'Your Pflugerville business looking professional for customers.' }
    ],
    faqs: [
      { question: 'How much does commercial painting cost in Pflugerville?', answer: 'Pflugerville commercial painting typically ranges from $1.40-$3.50 per square foot depending on project scope. We provide detailed quotes after assessment.' },
      { question: 'Do you serve the industrial area near Samsung?', answer: 'Yes! We paint industrial spaces, warehouses, and manufacturing facilities throughout Pflugerville\'s growing industrial sector.' },
      { question: 'Can you paint during off-hours?', answer: 'Absolutely. We schedule nights, weekends, and even holiday periods to work around Pflugerville business operations.' },
      { question: 'What commercial spaces do you paint?', answer: 'We paint offices, retail, restaurants, medical facilities, warehouses, and industrial spaces throughout Pflugerville.' },
      { question: 'How do you handle new construction vs refresh?', answer: 'We do both! New construction commercial painting and refresh projects for existing Pflugerville businesses.' }
    ],
    testimonials: [
      { name: 'Shopping Center Manager', location: 'Stone Hill', rating: 5, text: 'They painted multiple retail spaces for us with excellent coordination. Professional and reliable commercial painters.', initials: 'SC' },
      { name: 'Warehouse Manager', location: 'Pflugerville', rating: 5, text: 'Quality industrial painting completed on schedule. They understood our operational needs and delivered.', initials: 'WM' },
      { name: 'Office Manager', location: 'Pflugerville', rating: 5, text: 'Refreshed our entire office over a holiday weekend. Employees returned to a transformed space. Great work!', initials: 'OM' }
    ]
  },
  images: {
    hero: '/commercial-painting-services-austin.jpg',
    heroAlt: 'Commercial painting in Pflugerville Texas',
    secondary: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Pflugerville commercial painting services'
  }
};

const CommercialPaintingPflugerville = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingPflugerville;
