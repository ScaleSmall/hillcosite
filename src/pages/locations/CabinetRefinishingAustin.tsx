import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['austin'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Austin\'s trusted cabinet refinishing professionals. From historic bungalow charm to modern condo efficiency, we transform kitchens across the capital.',
    introText: `Austin's diverse housing stock means cabinet refinishing opportunities from East Austin revivals to Hyde Park preservation, Mueller modern updates to South Austin bungalow charm. Our team understands each neighborhood's unique character and delivers finishes that honor your home's style while providing modern durability. Transform your Austin kitchen without the cost and disruption of replacement.`,
    benefits: [
      'All Austin neighborhoods',
      'Historic cabinet expertise',
      'Modern condo experience',
      'Eclectic Austin styles',
      'Factory-quality finishes',
      'Minimal disruption',
      'Premium products',
      '2-year warranty standard'
    ],
    processSteps: [
      { title: 'Kitchen Assessment', description: 'Evaluate your Austin kitchen cabinets and discuss style-appropriate options.' },
      { title: 'Austin-Style Colors', description: 'Color guidance considering your home\'s character and neighborhood aesthetic.' },
      { title: 'Expert Preparation', description: 'Thorough prep appropriate for your cabinet age, style, and condition.' },
      { title: 'Professional Application', description: 'Quality finishing for smooth, durable, beautiful results.' },
      { title: 'Hardware Selection', description: 'Update or preserve existing hardware to complete your vision.' },
      { title: 'Quality Review', description: 'Comprehensive inspection ensuring every detail is right.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Austin?', answer: 'Austin cabinet refinishing typically ranges from $3,500-$9,500 depending on kitchen size, location, and cabinet style. Historic homes and complex designs may vary.' },
      { question: 'Do you work with Austin\'s historic cabinets?', answer: 'Yes! We specialize in preserving character while providing modern function. We discuss options to honor your home\'s heritage.' },
      { question: 'What about downtown Austin condos?', answer: 'We\'re experienced with condo requirements including building access, parking, and HOA coordination. Condo kitchens transform beautifully.' },
      { question: 'Can you match Austin\'s eclectic style?', answer: 'Absolutely! From vintage charm to bold modern, we help select finishes that express your Austin personality.' },
      { question: 'How long does refinishing take?', answer: 'Most Austin kitchens take 4-7 days. We schedule around your needs and work efficiently while maintaining quality.' }
    ],
    testimonials: [
      { name: 'Sarah Mitchell', location: 'Hyde Park', rating: 5, text: 'They preserved the charm of our 1930s kitchen cabinets while making them functional for modern life. True craftsmen!', initials: 'SM' },
      { name: 'David Chen', location: 'Mueller', rating: 5, text: 'Our Mueller kitchen cabinets look custom now. Professional process, quality finish, and the color is perfect.', initials: 'DC' },
      { name: 'Rachel Martinez', location: 'East Austin', rating: 5, text: 'They understood our East Austin vibe and delivered a unique finish. The kitchen is now my favorite room!', initials: 'RM' }
    ]
  },
  images: {
    hero: '/kitchen-cabinet-refinishing-austin.jpg',
    heroAlt: 'Cabinet refinishing in Austin Texas',
    secondary: '/kitchen-cabinet-painting-west-lake-hills.jpg',
    secondaryAlt: 'Austin cabinet painting excellence'
  }
};

const CabinetRefinishingAustin = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingAustin;
