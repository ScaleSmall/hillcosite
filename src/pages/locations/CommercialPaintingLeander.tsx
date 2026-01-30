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
  content: {
    heroSubtitle: 'Professional commercial painting for Leander businesses. Supporting Leander\'s rapid growth with quality commercial painting services.',
    introText: `Leander's explosive growth includes a thriving business community that needs professional commercial painting. From H-E-B Plus anchored retail to new office developments and the expanding 183A corridor, we provide quality commercial painting for Leander businesses. Our team understands growth-phase businesses need efficient, professional service.`,
    benefits: [
      'Growth-area expertise',
      '183A corridor coverage',
      'New construction experience',
      'Retail and office painting',
      'Flexible scheduling',
      'Efficient completion',
      'Licensed and insured',
      'Competitive commercial rates'
    ],
    processSteps: [
      { title: 'Site Assessment', description: 'Evaluate your Leander commercial space and project scope.' },
      { title: 'Growth-Phase Scheduling', description: 'Timeline that supports your Leander business momentum.' },
      { title: 'Professional Preparation', description: 'Thorough prep for quality, lasting commercial results.' },
      { title: 'Quality Execution', description: 'Professional painting meeting commercial standards.' },
      { title: 'Standards Review', description: 'Ensure all work meets quality and durability requirements.' },
      { title: 'Business Launch/Relaunch', description: 'Your Leander business ready to serve customers.' }
    ],
    faqs: [
      { question: 'How much does commercial painting cost in Leander?', answer: 'Leander commercial painting typically ranges from $1.50-$3.75 per square foot. New construction and tenant improvements may vary. We provide detailed quotes.' },
      { question: 'Do you paint new construction in Leander?', answer: 'Yes! We work with builders and business owners on new commercial construction throughout Leander\'s expanding business areas.' },
      { question: 'What about the 183A corridor businesses?', answer: 'We serve the entire 183A corridor from retail centers to office parks. We understand the growth-phase business environment.' },
      { question: 'Can you meet tight opening deadlines?', answer: 'Yes! We understand new businesses have opening dates to meet. We schedule and staff to meet your Leander business launch timeline.' },
      { question: 'Do you offer tenant improvement painting?', answer: 'Absolutely. We work with landlords and tenants on build-outs and improvements for Leander commercial spaces.' }
    ],
    testimonials: [
      { name: 'New Business Owner', location: 'Leander', rating: 5, text: 'They met our opening deadline with quality work. Professional painters who understand new business needs.', initials: 'NB' },
      { name: 'Property Developer', location: 'Leander', rating: 5, text: 'Reliable commercial painters for our Leander developments. Quality work, competitive pricing, and they deliver on time.', initials: 'PD' },
      { name: 'Retail Manager', location: 'Leander', rating: 5, text: 'Efficient and professional. They painted our store during off-hours without any disruption. Great results!', initials: 'RM' }
    ]
  },
  images: {
    hero: '/commercial-painting-services-austin.jpg',
    heroAlt: 'Commercial painting in Leander Texas',
    secondary: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Leander commercial painting services'
  }
};

const CommercialPaintingLeander = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingLeander;
