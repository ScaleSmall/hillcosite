import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['west-lake-highlands'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'West Lake Highlands\' premier interior painting specialists. Quality finishes for Hill Country homes.',
    introText: `West Lake Highlands interiors deserve painters who understand quality finishes and contemporary design. From open floor plans to detailed architectural elements, we bring expertise appropriate for these Hill Country homes. Our team creates beautiful, lasting interiors that complement the area\'s elevated setting and lifestyle.`,
    benefits: [
      'Quality finishes',
      'Contemporary expertise',
      'Hill Country aesthetics',
      'Zero-VOC options',
      'Furniture protection',
      'Flexible scheduling',
      'Clean work practices',
      '2-year warranty coverage'
    ],
    processSteps: [
      { title: 'Interior Assessment', description: 'Evaluation of your West Lake Highlands home\'s interior and requirements.' },
      { title: 'Color Consultation', description: 'Expert guidance on colors that complement Hill Country living.' },
      { title: 'Careful Preparation', description: 'Thorough prep ensuring smooth, lasting finishes.' },
      { title: 'Quality Application', description: 'Professional painting with attention to detail and quality.' },
      { title: 'Detail Work', description: 'Precise work on trim, doors, and architectural features.' },
      { title: 'Final Walkthrough', description: 'Comprehensive review ensuring your complete satisfaction.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in West Lake Highlands?', answer: 'West Lake Highlands interior painting typically ranges from $4,500-$14,000 depending on home size, detail work, and finish requirements.' },
      { question: 'Can you work around our schedule?', answer: 'Yes! We understand West Lake families are busy. We offer flexible scheduling to minimize disruption.' },
      { question: 'Do you use low-VOC paints?', answer: 'Yes. We offer zero-VOC and low-VOC options for healthier indoor air quality.' },
      { question: 'How do you handle open floor plans?', answer: 'We plan carefully for open spaces, ensuring color flow and efficient completion of connected areas.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on interior painting covering application quality and finish durability.' }
    ],
    testimonials: [
      { name: 'Michelle Anderson', location: 'West Lake Highlands', rating: 5, text: 'Beautiful work! They understood our contemporary home and delivered perfect results.', initials: 'MA' },
      { name: 'Paul Davidson', location: 'Hill Country', rating: 5, text: 'Professional, clean, and excellent quality. Highly recommend!', initials: 'PD' },
      { name: 'Laura Stevens', location: 'Westlake Drive', rating: 5, text: 'Great experience from start to finish. Our home looks stunning!', initials: 'LS' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Interior painting in West Lake Highlands Austin Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function InteriorPaintingWestLakeHighlands() {
  return <ServiceLocationPage config={config} />;
}
