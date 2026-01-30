import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['taylor'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Professional exterior painting for Taylor, Texas. Historic preservation and modern protection with small-town values and big-city quality.',
    introText: `Taylor's exciting growth brings new opportunities while preserving small-town charm. Whether you're maintaining a historic downtown home or protecting a newer residence from Blackland prairie weather, our team delivers quality exterior painting. We understand Taylor's heritage and its future, providing appropriate solutions for every property.`,
    benefits: [
      'Historic home expertise',
      'Blackland prairie protection',
      'Temperature-resistant paints',
      'Agricultural dust resistance',
      'Small-town service values',
      'Honest, fair pricing',
      'Quality craftsmanship',
      '2-year warranty included'
    ],
    processSteps: [
      { title: 'Personal Consultation', description: 'Thorough assessment of your Taylor home\'s exterior needs and challenges.' },
      { title: 'Appropriate Solutions', description: 'Color and product recommendations suited for your home\'s age and style.' },
      { title: 'Careful Preparation', description: 'Proper prep work respecting historic details while ensuring durability.' },
      { title: 'Weather Awareness', description: 'Scheduling around Taylor\'s weather for optimal painting conditions.' },
      { title: 'Quality Application', description: 'Expert painting using techniques appropriate for your Taylor home.' },
      { title: 'Satisfaction Review', description: 'Walkthrough ensuring every detail meets our standards and yours.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Taylor?', answer: 'Taylor exterior painting typically ranges from $3,500-$9,500 depending on home size, age, and condition. Historic homes may require additional preparation.' },
      { question: 'Do you work with Taylor\'s older historic homes?', answer: 'Yes! We respect Taylor\'s heritage. We use period-appropriate techniques and colors while providing modern protection for historic exteriors.' },
      { question: 'What about Taylor\'s extreme temperatures?', answer: 'Blackland prairie weather means hot summers and variable temperatures. We use flexible, durable paints designed to expand and contract without cracking.' },
      { question: 'How do you handle agricultural dust?', answer: 'Taylor\'s agricultural surroundings mean dust considerations. We schedule around conditions and use paints that clean easily and resist dust accumulation.' },
      { question: 'Do you serve all of Taylor?', answer: 'Yes! From downtown Taylor to the newest developments, we provide quality exterior painting throughout the Taylor area.' }
    ],
    testimonials: [
      { name: 'Bill Thompson', location: 'Downtown Taylor', rating: 5, text: 'They respected our 1920s home while giving it excellent protection. Period-appropriate colors and quality work. True professionals!', initials: 'BT' },
      { name: 'Rosa Martinez', location: 'Taylor', rating: 5, text: 'Fair pricing and honest work. They treated us like neighbors. Our home looks wonderful and the paint is holding up great.', initials: 'RM' },
      { name: 'Steve Williams', location: 'North Taylor', rating: 5, text: 'Great experience working with a local company that cares about quality. Recommend to all Taylor homeowners!', initials: 'SW' }
    ]
  },
  images: {
    hero: '/traditional-exterior-painting-austin-tx.jpg',
    heroAlt: 'Exterior painting in Taylor Texas',
    secondary: '/classic-exterior-home-painting-austin.jpg',
    secondaryAlt: 'Taylor exterior painting craftsmanship'
  }
};

const ExteriorPaintingTaylor = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingTaylor;
