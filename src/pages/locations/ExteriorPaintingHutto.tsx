import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['hutto'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  canonicalOverride: '/exterior-painting-hutto',
  content: {
    heroSubtitle: 'Quality exterior painting for Hutto\'s growing community. Protect your home with premium finishes designed for Texas conditions.',
    introText: `Hutto's family-friendly communities deserve exterior painting that lasts. From Star Ranch to Emory Farms, our team delivers quality results that enhance curb appeal and protect your investment. We specialize in both new and established homes, upgrading builder-grade finishes to premium paints that withstand Texas weather.`,
    benefits: [
      'New construction expertise',
      'Builder upgrade specialists',
      'Family-safe practices',
      'UV-resistant paints',
      'Efficient completion times',
      'Complete preparation',
      'HOA compliance',
      '2-year warranty standard'
    ],
    processSteps: [
      { title: 'Consultation', description: 'Thorough assessment of your Hutto home\'s exterior with transparent pricing.' },
      { title: 'Color Guidance', description: 'Help selecting colors that meet HOA requirements and your preferences.' },
      { title: 'Proper Preparation', description: 'Complete prep work for maximum paint adhesion and longevity.' },
      { title: 'Weather Monitoring', description: 'Scheduling around Hutto weather for optimal results.' },
      { title: 'Quality Painting', description: 'Professional application with attention to every detail.' },
      { title: 'Final Review', description: 'Walkthrough ensuring your complete satisfaction.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Hutto?', answer: 'Hutto exterior painting typically ranges from $3,600-$10,000 depending on home size and condition. New construction upgrades are often in the $4,500-$7,000 range.' },
      { question: 'Why upgrade from builder exterior paint in Hutto?', answer: 'Builder-grade exterior paint often fades within 3-4 years. Premium paints provide better UV protection, richer color, and can last 7-10+ years.' },
      { question: 'Do you work with Hutto HOAs?', answer: 'Yes! We\'re familiar with Star Ranch, Brushy Creek, and other community requirements. We help select compliant colors and can assist with approval processes.' },
      { question: 'How fast can you complete a Hutto exterior?', answer: 'Most Hutto homes take 3-5 days depending on size and prep needs. We work efficiently to minimize disruption to your family.' },
      { question: 'What warranty do you offer on Hutto exteriors?', answer: 'We provide a 2-year warranty covering peeling, flaking, and blistering. With premium preparation and paint, you\'ll enjoy lasting results.' }
    ],
    testimonials: [
      { name: 'Ryan Peters', location: 'Star Ranch Hutto', rating: 5, text: 'Upgraded our builder paint and the difference is incredible! Much better color and it looks like it will last. Great crew!', initials: 'RP' },
      { name: 'Nicole Brown', location: 'Legends of Hutto', rating: 5, text: 'Professional, efficient, and quality work. They navigated our HOA requirements perfectly. Highly recommend!', initials: 'NB' },
      { name: 'Chris Martin', location: 'Hutto Parke', rating: 5, text: 'Fair pricing and excellent results. Our home looks amazing and the family was impressed with how clean they kept the work site.', initials: 'CM' }
    ]
  },
  images: {
    hero: '/family-home-painting-austin-tx.jpg',
    heroAlt: 'Exterior painting in Hutto Texas',
    secondary: '/residential-painting-project-austin.jpg',
    secondaryAlt: 'Hutto exterior painting quality'
  }
};

const ExteriorPaintingHutto = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingHutto;
