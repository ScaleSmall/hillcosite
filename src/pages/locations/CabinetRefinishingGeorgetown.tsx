import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['georgetown'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Expert cabinet refinishing for Georgetown kitchens. From Sun City updates to historic home transformations, quality results at a fraction of replacement cost.',
    introText: `Georgetown kitchens deserve beautiful cabinets, and refinishing offers the transformation without the disruption or cost of replacement. Whether you're updating a Sun City kitchen for easier maintenance or preserving the character of a historic downtown home, our team delivers finishes that honor your home's style while providing modern durability.`,
    benefits: [
      'Sun City kitchen expertise',
      'Historic cabinet preservation',
      'Factory-smooth finishes',
      'Minimal disruption',
      'Modern color updates',
      'Easy-clean surfaces',
      'Quality preparation',
      '2-year warranty included'
    ],
    processSteps: [
      { title: 'Kitchen Consultation', description: 'Assessment of your Georgetown cabinets with finish and color recommendations.' },
      { title: 'Style-Appropriate Colors', description: 'Guidance on colors that suit your Georgetown home\'s character.' },
      { title: 'Careful Preparation', description: 'Thorough prep work ensuring adhesion while protecting your kitchen.' },
      { title: 'Expert Application', description: 'Professional spray finishing for smooth, durable results.' },
      { title: 'Hardware Options', description: 'Update hardware or reinstall existing pieces to your preference.' },
      { title: 'Quality Review', description: 'Detailed inspection ensuring complete satisfaction.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Georgetown?', answer: 'Georgetown cabinet refinishing typically ranges from $3,800-$8,500 depending on kitchen size. Historic homes with detailed cabinetry may require additional care.' },
      { question: 'Do you work in Sun City Georgetown?', answer: 'Yes! We have extensive Sun City experience. Our process minimizes disruption, and we understand the preferences of active adult homeowners.' },
      { question: 'Can you preserve historic cabinet character?', answer: 'Absolutely. For Georgetown\'s older homes, we can maintain period character while providing modern finish durability. We discuss options during consultation.' },
      { question: 'What about cabinet hardware?', answer: 'We can reinstall your existing hardware or help select updates. Many Georgetown homeowners take this opportunity to modernize their pulls and knobs.' },
      { question: 'How durable is the finish?', answer: 'Our finishes withstand daily kitchen use including cleaning, moisture, and normal wear. With proper care, expect 8-12+ years of beautiful cabinets.' }
    ],
    testimonials: [
      { name: 'Martha Collins', location: 'Sun City Georgetown', rating: 5, text: 'They refreshed our Sun City kitchen beautifully. Easy to clean and modern looking. Minimal disruption and professional service throughout.', initials: 'MC' },
      { name: 'George Harrison', location: 'Georgetown Village', rating: 5, text: 'Our dated oak cabinets are now beautiful white. The kitchen feels completely new! Excellent work and fair price.', initials: 'GH' },
      { name: 'Patricia Lane', location: 'Berry Creek', rating: 5, text: 'Professional process from start to finish. They protected everything and the results exceeded our expectations.', initials: 'PL' }
    ]
  },
  images: {
    hero: '/kitchen-cabinet-painting-west-lake-hills.jpg',
    heroAlt: 'Cabinet refinishing in Georgetown Texas',
    secondary: '/kitchen-cabinet-refinishing-austin.jpg',
    secondaryAlt: 'Georgetown cabinet painting quality'
  }
};

const CabinetRefinishingGeorgetown = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingGeorgetown;
