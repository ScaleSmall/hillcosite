import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['pflugerville'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Professional interior painting for Pflugerville homes. From Blackhawk to Falcon Pointe, we deliver quality transformations for your growing community.',
    introText: `Pflugerville's dynamic growth means many homeowners are ready to personalize their spaces or refresh existing finishes. Whether you're in a new Falcon Pointe home ready for custom colors or updating an established Blackhawk residence, our experienced team delivers beautiful results. We understand Pflugerville's family-focused communities and work to minimize disruption.`,
    benefits: [
      'New construction color customization',
      'Established home refresh expertise',
      'Samsung corridor schedule flexibility',
      'Family-friendly service approach',
      'Premium paint for lasting results',
      'Open floor plan color flow',
      'Textured ceiling expertise',
      '2-year warranty standard'
    ],
    processSteps: [
      { title: 'Detailed Quote', description: 'Free in-home consultation at your Pflugerville residence with transparent pricing.' },
      { title: 'Color Planning', description: 'Professional guidance on color selection for Pflugerville\'s modern floor plans.' },
      { title: 'Complete Prep', description: 'Thorough preparation including wall repair, priming, and full furniture protection.' },
      { title: 'Expert Painting', description: 'Skilled application with attention to detail throughout your Pflugerville home.' },
      { title: 'Quality Check', description: 'Comprehensive inspection to ensure every surface meets our standards.' },
      { title: 'Clean Finish', description: 'Full cleanup with your home ready to enjoy immediately.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Pflugerville?', answer: 'Pflugerville interior painting typically costs $2,800-$6,500 depending on home size and scope. New construction often requires less prep, while older homes may need more preparation.' },
      { question: 'Do you paint new construction in Pflugerville?', answer: 'Yes! Many Pflugerville homeowners want to personalize builder-grade paint with premium finishes and custom colors. We specialize in new home upgrades.' },
      { question: 'Can you match the existing paint in some rooms?', answer: 'Absolutely. We offer color matching services to blend new work with existing finishes for a seamless look throughout your home.' },
      { question: 'What about textured ceilings in Pflugerville homes?', answer: 'We have extensive experience with textured ceilings common in Pflugerville homes. We can paint existing textures or apply new ones as needed.' },
      { question: 'Do you work around Samsung shift schedules?', answer: 'Yes, many clients work at Samsung and nearby tech facilities. We coordinate scheduling to work around various shift patterns and work-from-home days.' }
    ],
    testimonials: [
      { name: 'Kevin Park', location: 'Falcon Pointe Pflugerville', rating: 5, text: 'Upgraded our builder paint to premium finishes throughout. The difference is incredible! Professional crew and great communication.', initials: 'KP' },
      { name: 'Sarah Mitchell', location: 'Blackhawk Pflugerville', rating: 5, text: 'They refreshed our entire home in under a week. Clean, efficient, and the quality exceeded our expectations.', initials: 'SM' },
      { name: 'Luis Garcia', location: 'Highland Park', rating: 5, text: 'Excellent work on our Pflugerville home. The painters were skilled and respectful. Highly recommend Hill Country Painting.', initials: 'LG' }
    ]
  },
  images: {
    hero: '/premium-interior-painting-austin.jpg',
    heroAlt: 'Interior painting services in Pflugerville Texas',
    secondary: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Pflugerville interior painting quality'
  }
};

const InteriorPaintingPflugerville = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingPflugerville;
