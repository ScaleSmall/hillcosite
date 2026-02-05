import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['west-lake-highlands'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'West Lake Highlands\' trusted exterior painting professionals. Expert service for Hill Country homes with lake views.',
    introText: `West Lake Highlands\' elevated Hill Country homes demand painters who understand both premium finishes and challenging terrain. From Lake Travis proximity to Hill Country architecture, we bring expertise appropriate for these quality properties. Our team specializes in delivering exceptional results that complement the area\'s natural beauty.`,
    benefits: [
      'Hill Country expertise',
      'Elevated terrain specialists',
      'Lake climate understanding',
      'Premium materials',
      'Quality finishes',
      'HOA compliance',
      'Eanes/Lake Travis ISD',
      '2-year warranty coverage'
    ],
    processSteps: [
      { title: 'Property Assessment', description: 'Thorough evaluation of your Hill Country home\'s exterior and terrain challenges.' },
      { title: 'Color Consultation', description: 'Expert guidance considering Hill Country aesthetics and HOA requirements.' },
      { title: 'Expert Preparation', description: 'Proper prep work for elevated terrain and lake climate conditions.' },
      { title: 'Weather Planning', description: 'Scheduling for optimal Hill Country painting conditions.' },
      { title: 'Professional Application', description: 'Premium painting providing lasting protection in lake climate.' },
      { title: 'Quality Inspection', description: 'Comprehensive review ensuring exceptional results.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in West Lake Highlands?', answer: 'West Lake Highlands exterior painting typically ranges from $6,000-$18,000+ depending on home size, terrain complexity, and architectural features.' },
      { question: 'Do you handle steep terrain and elevation changes?', answer: 'Yes! Hill Country homes often have challenging terrain. We have equipment and expertise for elevated properties.' },
      { question: 'How does Lake Travis proximity affect painting?', answer: 'Lake climate creates increased humidity and weather exposure. We use appropriate materials and techniques for these conditions.' },
      { question: 'Can you work with our HOA requirements?', answer: 'Absolutely. We understand West Lake area HOA standards and can help with color selection and approval processes.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on exterior painting covering peeling, flaking, and blistering.' }
    ],
    testimonials: [
      { name: 'Katherine Wells', location: 'West Lake Highlands', rating: 5, text: 'Excellent work on our Hill Country home! They handled the terrain challenges expertly.', initials: 'KW' },
      { name: 'Andrew Mitchell', location: 'Lake Pointe', rating: 5, text: 'Professional crew and outstanding results. Our home looks beautiful!', initials: 'AM' },
      { name: 'Diana Roberts', location: 'Scenic Brook', rating: 5, text: 'They understood the lake climate and Hill Country architecture perfectly!', initials: 'DR' }
    ]
  },
  images: {
    hero: '/hill-country-home-exterior-painting.jpg',
    heroAlt: 'Exterior painting in West Lake Highlands Austin Texas',
    processImage: '/austin-professional-house-painting-hero.jpg'
  }
};

export default function ExteriorPaintingWestLakeHighlands() {
  return <ServiceLocationPage config={config} />;
}
