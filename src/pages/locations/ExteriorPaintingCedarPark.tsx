import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['cedar-park'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  canonicalOverride: '/exterior-painting-cedar-park',
  content: {
    heroSubtitle: 'Protect your Cedar Park home with professional exterior painting. Quality preparation, premium paints, and lasting results for Hill Country homes.',
    introText: `Cedar Park homes face unique Hill Country challenges - intense sun exposure, variable terrain, and active family lifestyles. Our exterior painting services address these needs with thorough preparation, premium UV-resistant paints, and efficient execution. Whether you're in Avery Ranch or Brushy Creek, we deliver protection and beauty that lasts.`,
    benefits: [
      'Hill Country weather expertise',
      'Premium UV-resistant finishes',
      'Efficient family scheduling',
      'Complete surface preparation',
      'Stucco and HardiePlank experts',
      'Trim and fascia included',
      'Power washing standard',
      '2-year warranty protection'
    ],
    processSteps: [
      { title: 'Detailed Assessment', description: 'Thorough evaluation of your Cedar Park home\'s exterior condition and sun exposure.' },
      { title: 'Color Consultation', description: 'Help selecting colors that enhance curb appeal and complement the neighborhood.' },
      { title: 'Complete Preparation', description: 'Power washing, repairs, caulking, and priming for maximum paint longevity.' },
      { title: 'Optimal Scheduling', description: 'Weather-smart timing for Cedar Park\'s variable Hill Country conditions.' },
      { title: 'Quality Application', description: 'Professional painting with attention to every surface and detail.' },
      { title: 'Final Walkthrough', description: 'Comprehensive inspection ensuring your complete satisfaction.' }
    ],
    faqs: [
      { question: 'How much does exterior painting cost in Cedar Park?', answer: 'Cedar Park exterior painting typically ranges from $4,200-$11,000 depending on home size, condition, and materials. We provide detailed quotes after assessment.' },
      { question: 'What paint works best for Cedar Park sun exposure?', answer: 'Cedar Park\'s Hill Country location means intense sun. We use premium paints with advanced UV protection and fade resistance for lasting color.' },
      { question: 'How long does Cedar Park exterior painting take?', answer: 'Most Cedar Park exteriors take 3-5 days depending on home size and prep needs. We work efficiently while maintaining quality.' },
      { question: 'Do you paint HardiePlank siding?', answer: 'Yes! Many Cedar Park homes have HardiePlank or similar fiber cement siding. We use appropriate primers and paints for excellent adhesion and longevity.' },
      { question: 'What warranty do you offer?', answer: 'We provide a 2-year warranty covering peeling, flaking, and blistering. With proper preparation and premium paint, you\'ll enjoy your results for many years beyond.' }
    ],
    testimonials: [
      { name: 'Mike Johnson', location: 'Buttercup Creek', rating: 5, text: 'Our stucco home looks amazing! They did excellent prep work and the paint is holding up great through the summer heat. Highly recommend!', initials: 'MJ' },
      { name: 'Karen White', location: 'Twin Creeks Cedar Park', rating: 5, text: 'Professional crew, quality work, and they finished on schedule. Our Twin Creeks home has never looked better.', initials: 'KW' },
      { name: 'David Chen', location: 'Ranch at Brushy Creek', rating: 5, text: 'Great experience! Fair pricing, quality materials, and excellent workmanship. The curb appeal improvement is remarkable.', initials: 'DC' }
    ]
  },
  images: {
    hero: '/exterior-painting-services-austin.jpg',
    heroAlt: 'Exterior painting in Cedar Park Texas',
    secondary: '/home-exterior-painting-detail-austin.jpg',
    secondaryAlt: 'Cedar Park exterior painting quality'
  }
};

const ExteriorPaintingCedarPark = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingCedarPark;
