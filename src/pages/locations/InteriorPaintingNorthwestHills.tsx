import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['northwest-hills'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Northwest Hills\' premier interior painting specialists. Quality finishes for North Austin\'s established homes.',
    introText: `Northwest Hills interiors benefit from painters who understand both classic and contemporary styles. From mid-century modern to updated traditional, we bring expertise appropriate for these quality homes. Our team creates beautiful, lasting interiors that honor your home\'s character while meeting modern standards.`,
    benefits: [
      'All home styles',
      'Mid-century expertise',
      'Zero-VOC options',
      'Flexible scheduling',
      'Furniture protection',
      'Clean work practices',
      'Family-friendly',
      '2-year warranty coverage'
    ],
    processSteps: [
      { title: 'Interior Assessment', description: 'Evaluation of your Northwest Hills home\'s interior and requirements.' },
      { title: 'Color Consultation', description: 'Expert guidance on colors that complement your home\'s style.' },
      { title: 'Careful Preparation', description: 'Thorough prep ensuring smooth, lasting finishes.' },
      { title: 'Quality Application', description: 'Professional painting with attention to detail and clean techniques.' },
      { title: 'Detail Work', description: 'Precise work on trim, doors, and architectural elements.' },
      { title: 'Final Walkthrough', description: 'Comprehensive review ensuring your complete satisfaction.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Northwest Hills?', answer: 'Northwest Hills interior painting typically ranges from $3,500-$12,000 depending on home size, detail work, and finish requirements.' },
      { question: 'Can you work around our family schedule?', answer: 'Yes! We understand Northwest Hills families are busy. We offer flexible scheduling and work efficiently.' },
      { question: 'Do you use low-VOC paints?', answer: 'Yes. We offer zero-VOC and low-VOC options, perfect for families and those sensitive to paint odors.' },
      { question: 'How do you protect our furniture and floors?', answer: 'We use drop cloths, plastic protection, and careful techniques to protect your belongings throughout the project.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on interior painting covering application quality and finish durability.' }
    ],
    testimonials: [
      { name: 'Amanda Collins', location: 'Allandale', rating: 5, text: 'Excellent work! They were professional, clean, and our home looks beautiful.', initials: 'AC' },
      { name: 'Steve Richardson', location: 'Northwest Hills', rating: 5, text: 'Great experience from start to finish. Quality work and respectful crew!', initials: 'SR' },
      { name: 'Maria Gonzales', location: 'Crestview', rating: 5, text: 'They worked around our schedule with kids and delivered fantastic results!', initials: 'MG' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Interior painting in Northwest Hills Austin Texas',
    processImage: '/hill-country-home-exterior-painting.jpg'
  }
};

export default function InteriorPaintingNorthwestHills() {
  return <ServiceLocationPage config={config} />;
}
