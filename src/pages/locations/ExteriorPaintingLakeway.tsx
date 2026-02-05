import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['lakeway'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Lakeway\'s trusted exterior painting professionals. Expert service for Lake Travis area homes.',
    introText: `Lakeway\'s lakefront and Hill Country homes demand painters who understand both lake climate challenges and premium finishes. From Rough Hollow to The Hills, we bring expertise appropriate for these quality properties. Our team specializes in protecting and beautifying Lakeway homes with finishes built for lake living.`,
    benefits: [
      'Lake Travis specialists',
      'Waterfront expertise',
      'Hill Country knowledge',
      'Premium materials',
      'Weather-resistant finishes',
      'HOA compliance',
      'Resort area experience',
      '2-year warranty coverage'
    ],
    processSteps: [
      { title: 'Property Assessment', description: 'Thorough evaluation of your Lakeway home\'s exterior and lake exposure.' },
      { title: 'Color Consultation', description: 'Expert guidance considering lake climate and HOA requirements.' },
      { title: 'Expert Preparation', description: 'Proper prep work for lake climate and weather exposure.' },
      { title: 'Weather Monitoring', description: 'Scheduling for optimal Lake Travis painting conditions.' },
      { title: 'Professional Application', description: 'Premium painting providing lasting protection in lake climate.' },
      { title: 'Quality Inspection', description: 'Comprehensive review ensuring exceptional results.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Lakeway?', answer: 'Lakeway exterior painting typically ranges from $6,500-$20,000+ depending on home size, lakefront location, and architectural complexity.' },
      { question: 'How does Lake Travis affect exterior painting?', answer: 'Lake climate creates increased moisture, humidity, and wind exposure. We use premium materials specifically suited for these conditions.' },
      { question: 'Do you work with waterfront properties?', answer: 'Yes! We specialize in lakefront homes and understand the unique challenges of painting near Lake Travis.' },
      { question: 'Can you help with HOA color requirements?', answer: 'Absolutely. Lakeway communities often have HOA standards. We help with color selection and approval processes.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on exterior painting covering peeling, flaking, and blistering.' }
    ],
    testimonials: [
      { name: 'William Carter', location: 'Lakeway', rating: 5, text: 'Excellent work on our lakefront home! They understood the challenges and delivered outstanding results.', initials: 'WC' },
      { name: 'Sharon Douglas', location: 'Rough Hollow', rating: 5, text: 'Professional crew and beautiful finish. Our home looks amazing!', initials: 'SD' },
      { name: 'Michael Torres', location: 'The Hills', rating: 5, text: 'They know Lake Travis homes. Quality work and great communication!', initials: 'MT' }
    ]
  },
  images: {
    hero: '/hill-country-home-exterior-painting.jpg',
    heroAlt: 'Exterior painting in Lakeway Texas',
    processImage: '/austin-professional-house-painting-hero.jpg'
  }
};

export default function ExteriorPaintingLakeway() {
  return <ServiceLocationPage config={config} />;
}
