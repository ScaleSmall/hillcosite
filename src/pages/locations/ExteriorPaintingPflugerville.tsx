import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['pflugerville'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Professional exterior painting for Pflugerville homes. Protect against Texas sun and clay soil challenges with quality preparation and premium finishes.',
    introText: `Pflugerville's growing communities deserve exterior painting that addresses local challenges. The Blackland prairie climate and clay soil conditions can stress home exteriors. Our team provides thorough preparation and premium paints designed to protect Pflugerville homes from sun damage while maintaining beautiful curb appeal through every season.`,
    benefits: [
      'Clay soil movement expertise',
      'UV-resistant premium paints',
      'New construction finishing',
      'Established home refresh',
      'Crack and settlement repair',
      'Complete surface preparation',
      'Efficient scheduling',
      '2-year warranty included'
    ],
    processSteps: [
      { title: 'Property Evaluation', description: 'Assessment of your Pflugerville home\'s exterior including any settlement or movement issues.' },
      { title: 'Color Planning', description: 'Expert guidance on colors that enhance your home and meet any community standards.' },
      { title: 'Thorough Preparation', description: 'Addressing cracks, settlement issues, power washing, and proper priming.' },
      { title: 'Weather Monitoring', description: 'Scheduling around Pflugerville weather for optimal painting conditions.' },
      { title: 'Professional Application', description: 'Quality painting using products designed for Pflugerville conditions.' },
      { title: 'Quality Assurance', description: 'Detailed inspection ensuring complete coverage and lasting results.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Pflugerville?', answer: 'Pflugerville exterior painting typically ranges from $3,800-$10,500 depending on home size and condition. New construction homes often need less prep.' },
      { question: 'How do you handle clay soil movement cracks?', answer: 'Pflugerville\'s clay soil can cause settling. We use flexible caulks and proper repair techniques that accommodate minor movement while providing a sealed surface.' },
      { question: 'What about new Pflugerville homes needing exterior refresh?', answer: 'Many newer Pflugerville homes have builder-grade exterior paint that fades quickly. We can upgrade to premium paints that last significantly longer.' },
      { question: 'How do you protect landscaping during exterior painting?', answer: 'We carefully cover plants, patios, and walkways. Our crews are trained to protect your property while working efficiently.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on exterior painting covering peeling, flaking, and blistering. Premium prep and paint mean lasting results.' }
    ],
    testimonials: [
      { name: 'Justin Moore', location: 'Falcon Pointe', rating: 5, text: 'Great job on our Falcon Pointe home! They addressed some settling cracks before painting and everything looks perfect.', initials: 'JM' },
      { name: 'Michelle Davis', location: 'Blackhawk Pflugerville', rating: 5, text: 'Professional team, quality work, and fair pricing. Our Blackhawk home looks brand new. Highly recommend!', initials: 'MD' },
      { name: 'Robert Kim', location: 'Highland Park', rating: 5, text: 'Upgraded from builder paint to premium finish. The difference is night and day. Great experience overall.', initials: 'RK' }
    ]
  },
  images: {
    hero: '/modern-home-painting-austin-tx.jpg',
    heroAlt: 'Exterior painting in Pflugerville Texas',
    secondary: '/family-home-painting-austin-tx.jpg',
    secondaryAlt: 'Pflugerville exterior painting services'
  }
};

const ExteriorPaintingPflugerville = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingPflugerville;
