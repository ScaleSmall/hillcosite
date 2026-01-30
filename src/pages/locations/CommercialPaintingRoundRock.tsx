import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['round-rock'];

const config: ServiceLocationConfig = {
  service: {
    type: 'commercial',
    name: 'Commercial Painting',
    slug: 'commercial-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Professional commercial painting services in Round Rock. Dell corridor expertise, minimal business disruption, and quality results for offices, retail, and industrial spaces.',
    introText: `Round Rock's thriving business community deserves commercial painting that understands local needs. From Dell Technologies corridor offices to La Frontera retail and beyond, our team delivers quality commercial painting with minimal disruption. We work around business hours, meet tight deadlines, and provide the professional results Round Rock businesses expect.`,
    benefits: [
      'Dell corridor experience',
      'After-hours scheduling',
      'Minimal business disruption',
      'Office and retail expertise',
      'Industrial space capable',
      'Fast turnaround available',
      'Licensed and insured',
      'Competitive commercial rates'
    ],
    processSteps: [
      { title: 'Site Assessment', description: 'Evaluate your Round Rock commercial space and discuss project requirements.' },
      { title: 'Custom Schedule', description: 'Develop a timeline that minimizes impact on your Round Rock business operations.' },
      { title: 'Professional Preparation', description: 'Thorough prep work protecting your business assets and ensuring quality results.' },
      { title: 'Efficient Execution', description: 'Quality painting with attention to deadlines and business continuity.' },
      { title: 'Quality Control', description: 'Inspection ensuring professional standards are met throughout.' },
      { title: 'Clean Completion', description: 'Your Round Rock business ready for customers and employees.' }
    ],
    faqs: [
      { question: 'How much does commercial painting cost in Round Rock?', answer: 'Round Rock commercial painting costs vary by square footage, scope, and scheduling requirements. We provide detailed quotes after site assessment. Most projects range from $1.50-$4.00 per square foot.' },
      { question: 'Can you paint after business hours?', answer: 'Yes! We regularly perform after-hours, weekend, and overnight work to minimize disruption to Round Rock businesses.' },
      { question: 'What types of commercial spaces do you paint?', answer: 'We paint offices, retail stores, restaurants, medical facilities, warehouses, and industrial spaces throughout Round Rock.' },
      { question: 'Do you have experience with tech company offices?', answer: 'Yes! We\'ve painted numerous offices in the Dell corridor and understand tech company environments and expectations.' },
      { question: 'How fast can you complete a commercial project?', answer: 'Timelines depend on scope and scheduling, but we\'re known for meeting tight deadlines when needed. We\'ll provide realistic timelines during assessment.' }
    ],
    testimonials: [
      { name: 'Tech Office Manager', location: 'Round Rock', rating: 5, text: 'They painted our 15,000 sq ft office over a weekend with zero disruption to Monday operations. Professional and efficient!', initials: 'TO' },
      { name: 'Retail Store Owner', location: 'La Frontera', rating: 5, text: 'Our store transformation was completed on time and on budget. The crew worked nights so we never closed. Great results!', initials: 'RS' },
      { name: 'Property Manager', location: 'Round Rock', rating: 5, text: 'They\'ve painted multiple properties for us. Reliable, quality work, and competitive pricing. Our go-to commercial painters.', initials: 'PM' }
    ]
  },
  images: {
    hero: '/commercial-painting-services-austin.jpg',
    heroAlt: 'Commercial painting in Round Rock Texas',
    secondary: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Round Rock commercial painting services'
  }
};

const CommercialPaintingRoundRock = () => <ServiceLocationPage config={config} />;

export default CommercialPaintingRoundRock;
