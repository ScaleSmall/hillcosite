import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['austin'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Austin\'s trusted exterior painting professionals. From historic bungalows to modern homes, we protect and beautify properties across the capital city.',
    introText: `Austin's diverse architecture demands exterior painters who understand the city's unique character. From Clarksville Victorians to South Austin bungalows, Barton Creek modern homes to Tarrytown revivals, we bring expertise appropriate for every style. Our team navigates Austin's varied microclimates and architectural requirements to deliver lasting exterior protection and beauty.`,
    benefits: [
      'All Austin neighborhoods',
      'Historic preservation experts',
      'Modern home specialists',
      'Tech schedule flexibility',
      'Microclimate understanding',
      'Premium UV protection',
      'Complete preparation',
      '2-year warranty coverage'
    ],
    processSteps: [
      { title: 'Property Assessment', description: 'Thorough evaluation of your Austin home\'s exterior and specific needs.' },
      { title: 'Austin-Appropriate Colors', description: 'Guidance considering your neighborhood character and personal style.' },
      { title: 'Expert Preparation', description: 'Proper prep work suited to your home\'s age, style, and materials.' },
      { title: 'Weather Monitoring', description: 'Scheduling around Austin weather for optimal painting conditions.' },
      { title: 'Professional Application', description: 'Quality painting respecting your home\'s architecture and providing protection.' },
      { title: 'Quality Inspection', description: 'Comprehensive review ensuring lasting results.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Austin?', answer: 'Austin exterior painting ranges from $4,500-$15,000+ depending on home size, location, and complexity. Historic homes and large properties may exceed this range.' },
      { question: 'Do you work with Austin\'s historic neighborhoods?', answer: 'Yes! We specialize in Clarksville, Travis Heights, Tarrytown, and other historic Austin areas. We respect original details while providing modern protection.' },
      { question: 'What about Austin\'s tree coverage and shade?', answer: 'Austin\'s urban forest creates varied conditions. We assess sun and shade patterns to recommend appropriate products and schedule work for optimal results.' },
      { question: 'How do you handle Austin HOA requirements?', answer: 'Many Austin neighborhoods have architectural standards. We help select compliant colors and can assist with approval processes where required.' },
      { question: 'What warranty do you provide?', answer: 'We offer a 2-year warranty on exterior painting covering peeling, flaking, and blistering. Quality prep and premium paint ensure lasting results.' }
    ],
    testimonials: [
      { name: 'Arashk Shirazi', location: 'Austin', rating: 5, text: 'Josh was very professional, honest and informative. The crew were respectful to our outdoor space and very responsible about quality. Highly recommend!', initials: 'AS' },
      { name: 'Jennifer Hayes', location: 'Hyde Park', rating: 5, text: 'They understood our 1920s bungalow needed special care. Period-appropriate colors and excellent prep work. Our home looks stunning!', initials: 'JH' },
      { name: 'Marcus Cole', location: 'Mueller', rating: 5, text: 'Great work on our modern Mueller home. Clean lines, quality finish, and professional crew throughout.', initials: 'MC' }
    ]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Exterior painting in Austin Texas',
    secondary: '/exterior-house-painting-tarrytown-austin.jpg',
    secondaryAlt: 'Austin exterior painting excellence'
  }
};

const ExteriorPaintingAustin = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingAustin;
