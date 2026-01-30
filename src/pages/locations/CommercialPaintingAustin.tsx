import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['austin'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Austin\'s trusted commercial painting professionals. From downtown high-rises to South Congress retail, we deliver quality results across the capital city.',
    introText: `Austin's diverse commercial landscape demands painters who understand every environment. From downtown office towers to South Congress boutiques, East Austin creative spaces to Domain retail, we deliver professional commercial painting throughout the capital. Our team navigates Austin's unique business culture while meeting the highest professional standards.`,
    benefits: [
      'All Austin areas served',
      'Downtown high-rise experience',
      'Creative space specialists',
      'Retail expertise',
      'Restaurant experience',
      'Tech office familiarity',
      'Licensed and insured',
      'Competitive commercial rates'
    ],
    processSteps: [
      { title: 'Site Assessment', description: 'Evaluate your Austin commercial space and understand project requirements.' },
      { title: 'Austin-Smart Scheduling', description: 'Plan work around Austin business rhythms and traffic patterns.' },
      { title: 'Professional Preparation', description: 'Thorough prep protecting your business and ensuring quality.' },
      { title: 'Expert Execution', description: 'Quality commercial painting meeting Austin business standards.' },
      { title: 'Quality Control', description: 'Inspection ensuring professional standards throughout.' },
      { title: 'Business-Ready Completion', description: 'Your Austin business looking its best.' }
    ],
    faqs: [
      { question: 'How much does commercial painting cost in Austin?', answer: 'Austin commercial painting varies widely by location and scope, typically $1.75-$5.00 per square foot. Downtown and specialty projects may vary. We provide detailed quotes.' },
      { question: 'Do you work in downtown Austin buildings?', answer: 'Yes! We have experience with downtown Austin office buildings including coordination with building management and tenant requirements.' },
      { question: 'What about Austin\'s creative and tech spaces?', answer: 'We understand Austin\'s unique business culture. We paint creative offices, tech campuses, and innovative workspaces throughout Austin.' },
      { question: 'Can you paint South Congress and boutique retail?', answer: 'Absolutely. We paint retail throughout Austin including SoCo, the Domain, and neighborhood shopping areas.' },
      { question: 'Do you handle restaurant painting in Austin?', answer: 'Yes! We paint restaurants, bars, and hospitality venues across Austin with scheduling that respects your service hours.' }
    ],
    testimonials: [
      { name: 'Tech Company Facilities', location: 'Austin', rating: 5, text: 'They painted our campus buildings professionally with minimal disruption to our employees. Quality commercial painters.', initials: 'TC' },
      { name: 'SoCo Boutique Owner', location: 'South Congress', rating: 5, text: 'They understood our Austin vibe and delivered a perfect finish. Worked around our hours beautifully.', initials: 'SB' },
      { name: 'Downtown Building Manager', location: 'Downtown Austin', rating: 5, text: 'Professional, reliable, and quality work. They\'ve painted multiple floors in our building. Highly recommend.', initials: 'DB' }
    ]
  },
  images: {
    hero: '/commercial-painting-services-austin.jpg',
    heroAlt: 'Commercial painting in Austin Texas',
    secondary: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Austin commercial painting excellence'
  }
};

const CommercialPaintingAustin = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingAustin;
