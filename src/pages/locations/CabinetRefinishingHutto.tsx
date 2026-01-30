import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['hutto'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Transform your Hutto kitchen with professional cabinet refinishing. Upgrade builder cabinets to premium finishes at a fraction of replacement cost.',
    introText: `Hutto families are discovering cabinet refinishing as the smart way to upgrade their kitchens. Many Hutto homes have solid builder-grade cabinets that just need premium finishes to look custom. Our team transforms Star Ranch, Legends of Hutto, and area kitchens with factory-smooth finishes that make daily life more enjoyable.`,
    benefits: [
      'Builder cabinet upgrades',
      'Family-friendly scheduling',
      'Quick completion times',
      'Modern color choices',
      'Durable, cleanable finish',
      'Hardware updates available',
      'Minimal kitchen disruption',
      '2-year warranty protection'
    ],
    processSteps: [
      { title: 'Free Estimate', description: 'Assess your Hutto kitchen cabinets and discuss transformation options.' },
      { title: 'Color Selection', description: 'Help choosing colors that brighten and modernize your kitchen.' },
      { title: 'Efficient Preparation', description: 'Thorough prep while minimizing family disruption.' },
      { title: 'Quality Finishing', description: 'Professional spray application for smooth, even results.' },
      { title: 'Hardware Installation', description: 'New or existing hardware professionally installed.' },
      { title: 'Final Review', description: 'Walkthrough ensuring your complete satisfaction.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Hutto?', answer: 'Hutto cabinet refinishing typically ranges from $2,900-$6,800 depending on kitchen size. Builder-grade cabinets often refinish beautifully at competitive prices.' },
      { question: 'Why refinish instead of replace in Hutto?', answer: 'Most Hutto homes have quality cabinet boxes. Refinishing provides a custom look at 1/3 to 1/5 the cost of new cabinets with far less disruption.' },
      { question: 'How long does the process take?', answer: 'Most Hutto kitchen projects take 4-5 days. We work efficiently to restore your kitchen function quickly.' },
      { question: 'Is the finish family-friendly?', answer: 'Yes! Our finishes are durable and easy to clean - perfect for busy Hutto families with kids.' },
      { question: 'What colors are trending in Hutto?', answer: 'White remains most popular, with soft gray and navy blue gaining popularity. We help select colors that suit your taste and home.' }
    ],
    testimonials: [
      { name: 'Courtney Smith', location: 'Star Ranch Hutto', rating: 5, text: 'Our builder cabinets now look custom! They worked fast and the finish is beautiful. Kitchen of our dreams at an affordable price.', initials: 'CS' },
      { name: 'Mike Thompson', location: 'Legends of Hutto', rating: 5, text: 'Great transformation! Professional crew, quality work, and they respected our home. Highly recommend for Hutto families.', initials: 'MT' },
      { name: 'Jenny Lee', location: 'Hutto Parke', rating: 5, text: 'They upgraded our basic kitchen to something special. Fair price, great results, and minimal disruption. Love it!', initials: 'JL' }
    ]
  },
  images: {
    hero: '/kitchen-cabinet-painting-west-lake-hills.jpg',
    heroAlt: 'Cabinet refinishing in Hutto Texas',
    secondary: '/circle-c-ranch-kitchen-painting-austin.jpg',
    secondaryAlt: 'Hutto cabinet painting services'
  }
};

const CabinetRefinishingHutto = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingHutto;
