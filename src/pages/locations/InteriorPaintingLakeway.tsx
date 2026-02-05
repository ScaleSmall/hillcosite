import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['lakeway'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Lakeway\'s premier interior painting specialists. Quality finishes for Lake Travis area homes.',
    introText: `Lakeway interiors deserve painters who understand quality finishes and lake living aesthetics. From contemporary open plans to traditional Hill Country charm, we bring expertise appropriate for these lakeside homes. Our team creates beautiful, lasting interiors that complement Lakeway\'s resort lifestyle and natural setting.`,
    benefits: [
      'Lake living expertise',
      'Quality finishes',
      'Contemporary styles',
      'Zero-VOC options',
      'Furniture protection',
      'Flexible scheduling',
      'Resort area experience',
      '2-year warranty coverage'
    ],
    processSteps: [
      { title: 'Interior Assessment', description: 'Evaluation of your Lakeway home\'s interior and requirements.' },
      { title: 'Color Consultation', description: 'Expert guidance on colors that complement lake living.' },
      { title: 'Careful Preparation', description: 'Thorough prep ensuring smooth, lasting finishes.' },
      { title: 'Quality Application', description: 'Professional painting with attention to detail and quality.' },
      { title: 'Detail Work', description: 'Precise work on trim, doors, and architectural features.' },
      { title: 'Final Walkthrough', description: 'Comprehensive review ensuring your complete satisfaction.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Lakeway?', answer: 'Lakeway interior painting typically ranges from $5,000-$15,000 depending on home size, detail work, and finish requirements.' },
      { question: 'Can you work around our vacation home schedule?', answer: 'Yes! Many Lakeway homes are vacation properties. We offer flexible scheduling to accommodate your needs.' },
      { question: 'Do you use low-VOC paints?', answer: 'Yes. We offer zero-VOC and low-VOC options for healthier indoor air quality, especially important for lakefront living.' },
      { question: 'How do you handle lake humidity?', answer: 'We understand Lake Travis climate. We use appropriate materials and techniques for moisture management.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on interior painting covering application quality and finish durability.' }
    ],
    testimonials: [
      { name: 'Patricia Wilson', location: 'Lakeway', rating: 5, text: 'Beautiful work! They understood our lakefront home and delivered perfect results.', initials: 'PW' },
      { name: 'Daniel Clark', location: 'Rough Hollow', rating: 5, text: 'Professional, clean, and excellent quality. Our home looks stunning!', initials: 'DC' },
      { name: 'Michelle Garcia', location: 'Serene Hills', rating: 5, text: 'Great experience from start to finish. Highly recommend for Lake Travis homes!', initials: 'MG' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Interior painting in Lakeway Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function InteriorPaintingLakeway() {
  return <ServiceLocationPage config={config} />;
}
