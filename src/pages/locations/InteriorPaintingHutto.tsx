import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['hutto'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: 'Professional interior painting for Taylor homes. From Heritage Park to Murphy\'s Crossing, we deliver quality results for your growing family.',
    introText: `Taylor's family-friendly communities deserve interior painting that matches your active lifestyle. Whether you're personalizing a newer home or refreshing an established residence, our team delivers beautiful results efficiently. We understand Taylor families are busy - we work around your schedule and keep disruption to a minimum.`,
    benefits: [
      'New home customization experts',
      'Family schedule flexibility',
      'Efficient service',
      'Kid and pet-safe paints available',
      'Open floor plan specialists',
      'Quality workmanship guaranteed',
      'Clean, respectful crews',
      '2-year warranty included'
    ],
    processSteps: [
      { title: 'Project Evaluation', description: 'In-home consultation at your Taylor residence with straightforward pricing.' },
      { title: 'Color Selection', description: 'Help choosing colors perfect for Taylor\'s bright, modern homes.' },
      { title: 'Efficient Prep', description: 'Quick but thorough preparation to minimize family disruption.' },
      { title: 'Quality Application', description: 'Professional painting with attention to every detail.' },
      { title: 'Satisfaction Review', description: 'Walkthrough ensuring everything meets your expectations.' },
      { title: 'Clean Finish', description: 'Full cleanup with your home ready for your family to enjoy.' }
    ],
    faqs: [
      { question: 'How much does interior painting cost in Taylor?', answer: 'Taylor interior painting typically ranges from $2,600-$6,200 depending on home size. New construction homes often require less prep and fall in the lower range.' },
      { question: 'How fast can you complete a Taylor interior?', answer: 'Most Taylor homes take 2-4 days depending on size. We work efficiently to get your family back to normal quickly.' },
      { question: 'Do you offer kid-safe paint options?', answer: 'Yes! We offer low-VOC and zero-VOC paints that are safer for children and have minimal odor. Popular with Taylor families.' },
      { question: 'Can you work while kids are at school?', answer: 'Absolutely. Many Taylor parents prefer we work during school hours. We coordinate scheduling to accommodate family routines.' },
      { question: 'What about Taylor HOA requirements?', answer: 'Interior painting typically doesn\'t require HOA approval, but we can advise on colors that complement your community\'s exterior standards.' }
    ],
    testimonials: [
      { name: 'Stephanie Walsh', location: 'Star Ranch Hutto', rating: 5, text: 'They painted our entire new home in 3 days! Upgraded from builder paint to premium finishes. Looks amazing and the crew was great with our kids around.', initials: 'SW' },
      { name: 'Derek Johnson', location: 'Legends of Hutto', rating: 5, text: 'Professional, efficient, and quality work. They worked around our busy family schedule. Highly recommend for Hutto families!', initials: 'DJ' },
      { name: 'Lisa Nguyen', location: 'Hutto Parke', rating: 5, text: 'Great experience start to finish. Fair price, quality paint, and they cleaned up every day. Our house looks brand new!', initials: 'LN' }
    ]
  },
  images: {
    hero: '/residential-painting-project-austin.jpg',
    heroAlt: 'Interior painting in Taylor Texas home',
    secondary: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Taylor interior painting quality'
  }
};

const InteriorPaintingTaylor = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingTaylor;
