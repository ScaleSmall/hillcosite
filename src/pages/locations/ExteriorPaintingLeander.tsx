import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['leander'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Expert exterior painting for Leander\'s Hill Country homes. Protect your new construction or refresh your established home with premium finishes.',
    introText: `Leander's rapid growth means many homes ready for exterior painting upgrades. From new construction needing premium finishes to established homes requiring refresh, our team delivers Hill Country expertise. We understand Leander's elevated terrain, increased wind exposure, and intense sun - factors that demand quality preparation and premium paints.`,
    benefits: [
      'Hill Country conditions expertise',
      'New construction specialists',
      'Wind-resistant application',
      'UV-protected finishes',
      'Efficient project completion',
      'Premium paint selection',
      'Complete preparation',
      '2-year warranty standard'
    ],
    processSteps: [
      { title: 'Free Assessment', description: 'Evaluation of your Leander home\'s exterior and Hill Country exposure factors.' },
      { title: 'Color Selection', description: 'Expert guidance on colors that complement Hill Country surroundings and your style.' },
      { title: 'Surface Preparation', description: 'Thorough prep addressing Leander\'s specific environmental challenges.' },
      { title: 'Weather-Smart Timing', description: 'Scheduling around Hill Country weather patterns for optimal results.' },
      { title: 'Professional Application', description: 'Quality painting using techniques suited for elevated, exposed locations.' },
      { title: 'Final Inspection', description: 'Comprehensive review ensuring lasting protection and beauty.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Leander?', answer: 'Leander exterior painting typically ranges from $4,000-$11,500 depending on home size and condition. New construction upgrades are often more cost-effective.' },
      { question: 'How do you handle Leander\'s wind exposure?', answer: 'Leander\'s higher elevation means more wind. We use quality primers, proper application thickness, and premium paints for maximum adhesion and durability.' },
      { question: 'Can you upgrade new construction paint in Leander?', answer: 'Yes! Many Leander homeowners want to replace builder-grade paint with premium finishes. This provides better color, durability, and longer life.' },
      { question: 'What colors work well with Hill Country landscaping?', answer: 'Earth tones, warm neutrals, and natural stone colors complement Hill Country surroundings beautifully. We help select colors that enhance your home\'s setting.' },
      { question: 'How long does Leander exterior painting last?', answer: 'With proper preparation and premium paint, Leander exterior painting should last 7-10 years. We provide a 2-year warranty covering workmanship.' }
    ],
    testimonials: [
      { name: 'Scott Henderson', location: 'Crystal Falls Leander', rating: 5, text: 'Beautiful exterior work on our Crystal Falls home. They understood the Hill Country challenges and delivered excellent results. Highly recommend!', initials: 'SH' },
      { name: 'Amy Wright', location: 'Travisso', rating: 5, text: 'Upgraded our builder paint and the difference is remarkable. Professional crew and quality materials. Our Travisso home stands out!', initials: 'AW' },
      { name: 'James Cooper', location: 'Mason Hills', rating: 5, text: 'Great experience from estimate to completion. Fair pricing, quality work, and excellent communication throughout.', initials: 'JC' }
    ]
  },
  images: {
    hero: '/hill-country-home-exterior-painting.jpg',
    heroAlt: 'Exterior painting in Leander Texas',
    secondary: '/texas-sun-exterior-paint-maintenance.jpg',
    secondaryAlt: 'Leander exterior painting expertise'
  }
};

const ExteriorPaintingLeander = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingLeander;
