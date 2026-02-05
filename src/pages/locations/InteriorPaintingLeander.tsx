import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['leander'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Expert interior painting for Leander\'s fastest-growing community. From Crystal Falls to Travisso, we deliver quality results for your new home.',
    introText: `Leander's incredible growth means beautiful new homes ready for personalization. Many homeowners want to upgrade from builder-grade finishes to premium paints with custom colors. Our team specializes in Leander's modern floor plans, Hill Country views, and the specific needs of this thriving community. From Crystal Falls estates to cozy Summerlyn homes, we deliver excellence.`,
    benefits: [
      'New construction specialists',
      'Builder upgrade expertise',
      'Hill Country color guidance',
      'Modern floor plan experience',
      'Austin commuter flexibility',
      'Premium finish upgrades',
      'Efficient service',
      '2-year warranty included'
    ],
    processSteps: [
      { title: 'Free Consultation', description: 'Visit your Leander home to understand your vision and provide accurate pricing.' },
      { title: 'Custom Color Selection', description: 'Expert help choosing colors that complement Leander\'s Hill Country light and views.' },
      { title: 'Thorough Preparation', description: 'Complete prep work ensuring perfect adhesion and smooth finishes.' },
      { title: 'Professional Application', description: 'Skilled painters deliver flawless results throughout your Leander home.' },
      { title: 'Detailed Review', description: 'Comprehensive walkthrough ensuring every detail meets your expectations.' },
      { title: 'Clean Completion', description: 'Full cleanup with your transformed home ready to enjoy.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Leander?', answer: 'Leander interior painting typically ranges from $3,000-$7,000 depending on home size. New construction upgrades often cost $3,500-$5,500 for a full interior.' },
      { question: 'Do you work with new Leander homeowners?', answer: 'Yes! Many clients come to us right after closing to upgrade builder paint. We can start as soon as you have the keys.' },
      { question: 'What colors work best for Leander\'s Hill Country light?', answer: 'Leander\'s abundant natural light calls for carefully selected neutrals and colors that won\'t wash out. We help choose shades that look beautiful in Hill Country lighting.' },
      { question: 'Can you work around my Austin commute?', answer: 'Absolutely. Many Leander residents commute to Austin. We can work while you\'re away and keep you updated via text and photos.' },
      { question: 'What about high ceilings in Leander homes?', answer: 'We\'re equipped for the dramatic ceiling heights common in newer Leander homes. Our team has professional equipment for safe, quality work at any height.' }
    ],
    testimonials: [
      { name: 'Ashley Thompson', location: 'Crystal Falls Leander', rating: 5, text: 'Transformed our new construction from bland to beautiful! They helped us choose colors that look amazing with our Hill Country views. Excellent work!', initials: 'AT' },
      { name: 'Brian Murphy', location: 'Travisso', rating: 5, text: 'Professional, on time, and quality work. Our Travisso home looks incredible. Would absolutely hire again.', initials: 'BM' },
      { name: 'Rachel Kim', location: 'Mason Hills', rating: 5, text: 'Great experience from start to finish. They worked efficiently while maintaining excellent quality. Love our new colors!', initials: 'RK' }
    ]
  },
  images: {
    hero: '/living-room-painting-transformation-austin.jpg',
    heroAlt: 'Interior painting in Leander Texas home',
    secondary: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Leander interior painting expertise'
  }
};

const InteriorPaintingLeander = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingLeander;
