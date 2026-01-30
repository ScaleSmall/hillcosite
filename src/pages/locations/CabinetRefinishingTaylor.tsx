import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['taylor'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: 'Professional cabinet refinishing for Taylor kitchens. Quality craftsmanship at fair prices - small-town values with big-city results.',
    introText: `Taylor homeowners appreciate quality and value, and cabinet refinishing delivers both. Whether you have a historic home with vintage cabinets or a newer residence ready for an upgrade, our team provides honest service and quality results. We transform Taylor kitchens with professional finishes that last, all at a fraction of replacement cost.`,
    benefits: [
      'Fair, honest pricing',
      'Quality craftsmanship',
      'Historic cabinet care',
      'Modern transformations',
      'Durable finishes',
      'Minimal disruption',
      'Small-town service',
      '2-year warranty included'
    ],
    processSteps: [
      { title: 'Personal Consultation', description: 'Honest assessment of your Taylor cabinets with straightforward recommendations.' },
      { title: 'Color Selection', description: 'Guidance on colors appropriate for your Taylor home\'s style.' },
      { title: 'Thorough Preparation', description: 'Proper prep work ensuring quality finish results.' },
      { title: 'Expert Application', description: 'Professional finishing for smooth, durable surfaces.' },
      { title: 'Hardware Options', description: 'Update or reinstall hardware to complete the transformation.' },
      { title: 'Quality Assurance', description: 'Review ensuring every cabinet meets our standards.' }
    ],
    faqs: [
      { question: 'How much does cabinet refinishing cost in Taylor?', answer: 'Taylor cabinet refinishing typically ranges from $2,800-$6,500 depending on kitchen size and condition. We provide honest quotes with no hidden surprises.' },
      { question: 'Can you refinish older Taylor home cabinets?', answer: 'Yes! We have experience with older cabinetry. We assess each situation and recommend whether refinishing will provide good results.' },
      { question: 'What about original character in historic homes?', answer: 'For Taylor\'s older homes, we discuss whether to preserve character or modernize. We respect your home\'s history while meeting your needs.' },
      { question: 'How durable is the finish?', answer: 'Our finishes are designed for daily kitchen use. With proper care, expect 8-12+ years of beautiful, functional cabinets.' },
      { question: 'Do you serve all of Taylor?', answer: 'Yes! From historic downtown Taylor to the newest subdivisions, we provide quality cabinet refinishing throughout the Taylor area.' }
    ],
    testimonials: [
      { name: 'Betty Johnson', location: 'Downtown Taylor', rating: 5, text: 'They treated our old cabinets with care and made them beautiful. Fair price and quality work. Just what Taylor needs!', initials: 'BJ' },
      { name: 'Tom Richards', location: 'Taylor', rating: 5, text: 'Honest quote, quality work, and they cleaned up perfectly. Our kitchen looks great. Would recommend to any Taylor neighbor!', initials: 'TR' },
      { name: 'Maria Gonzalez', location: 'North Taylor', rating: 5, text: 'Transformed our basic kitchen into something special. Professional crew and excellent results at a fair price.', initials: 'MG' }
    ]
  },
  images: {
    hero: '/kitchen-cabinet-refinishing-austin.jpg',
    heroAlt: 'Cabinet refinishing in Taylor Texas',
    secondary: '/kitchen-cabinet-painting-west-lake-hills.jpg',
    secondaryAlt: 'Taylor cabinet painting quality'
  }
};

const CabinetRefinishingTaylor = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingTaylor;
