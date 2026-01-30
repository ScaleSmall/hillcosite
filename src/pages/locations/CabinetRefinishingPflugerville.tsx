import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['pflugerville'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Professional cabinet refinishing for Pflugerville kitchens. Upgrade builder-grade cabinets or refresh your existing finish at a fraction of replacement cost.',
    introText: `Pflugerville homeowners are transforming their kitchens with cabinet refinishing. Many newer Pflugerville homes came with basic builder cabinets ready for upgrades, while established homes often need refresh. Our team delivers factory-quality finishes that modernize your kitchen, increase home value, and make daily life more enjoyable.`,
    benefits: [
      'Builder cabinet upgrades',
      'Established home refresh',
      'Modern color options',
      'Factory-smooth finishes',
      'Minimal disruption',
      'Affordable transformation',
      'Durable, easy-clean',
      '2-year warranty included'
    ],
    processSteps: [
      { title: 'Kitchen Assessment', description: 'Evaluate your Pflugerville cabinets and discuss finish options.' },
      { title: 'Color Guidance', description: 'Help selecting colors that transform and brighten your kitchen.' },
      { title: 'Thorough Preparation', description: 'Complete prep ensuring optimal finish adhesion and smoothness.' },
      { title: 'Expert Finishing', description: 'Professional spray application for consistent, quality results.' },
      { title: 'Hardware Update', description: 'Install new hardware or reinstall existing pieces as preferred.' },
      { title: 'Quality Review', description: 'Detailed inspection ensuring your complete satisfaction.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Pflugerville?', answer: 'Pflugerville cabinet refinishing typically ranges from $3,000-$7,200 depending on kitchen size. Builder-grade cabinets often refinish beautifully at lower cost.' },
      { question: 'Can you upgrade my Pflugerville builder cabinets?', answer: 'Absolutely! Many Pflugerville homes have solid builder cabinets that just need premium finishes. We transform basic into beautiful.' },
      { question: 'How long does the project take?', answer: 'Most Pflugerville kitchens take 4-6 days. We work efficiently while ensuring proper preparation and cure times.' },
      { question: 'What about my granite or quartz countertops?', answer: 'We carefully protect all surfaces including countertops, appliances, and flooring. Your countertops will look great with refreshed cabinets!' },
      { question: 'Will refinishing increase my home value?', answer: 'Yes! Updated kitchens are a top factor for home buyers. Cabinet refinishing provides excellent return on investment.' }
    ],
    testimonials: [
      { name: 'Nicole Wang', location: 'Falcon Pointe', rating: 5, text: 'Upgraded our builder cabinets to a beautiful premium finish. The kitchen looks like a custom renovation at a fraction of the price!', initials: 'NW' },
      { name: 'Jason Miller', location: 'Blackhawk Pflugerville', rating: 5, text: 'Transformed our dated kitchen into something modern and beautiful. Professional team and excellent results.', initials: 'JM' },
      { name: 'Priya Sharma', location: 'Highland Park', rating: 5, text: 'They did an amazing job on our cabinets. Smooth finish, great color, and the crew was respectful and efficient.', initials: 'PS' }
    ]
  },
  images: {
    hero: '/kitchen-cabinet-painting-west-lake-hills.jpg',
    heroAlt: 'Cabinet refinishing in Pflugerville Texas',
    secondary: '/kitchen-cabinet-refinishing-austin.jpg',
    secondaryAlt: 'Pflugerville cabinet painting quality'
  }
};

const CabinetRefinishingPflugerville = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingPflugerville;
