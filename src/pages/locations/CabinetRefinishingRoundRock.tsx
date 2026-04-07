import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['round-rock'];

const config: ServiceLocationConfig = {
  service: {
    type: 'cabinet',
    name: 'Cabinet Refinishing',
    slug: 'cabinet-refinishing'
  },
  location: location,
  content: {
    heroSubtitle: "Cabinet refinishing in Round Rock. Factory-quality spray finish on your existing cabinets at a fraction of replacement cost.",
    introText: "Kitchen cabinet refinishing is one of the highest-impact home updates available to Round Rock homeowners — transforming dated or builder-grade cabinets into a fresh, like-new kitchen without the cost and disruption of a full renovation. We serve Forest Creek, Mayfield Ranch, Brushy Creek, and all Round Rock neighborhoods.",
    benefits: [
    "Spray-applied premium cabinet finish",
    "Multiple coats with sanding between",
    "All cabinet styles — shaker, raised panel, flat",
    "Any color — Benjamin Moore and Sherwin-Williams",
    "Bathroom vanities and built-ins also available",
    "All Round Rock neighborhoods served",
    "Durable, scrubbable finish",
    "2-year warranty"
],
    processSteps: [
    {
        "title": "Free Estimate",
        "description": "We visit your Round Rock property, assess the scope, and provide a detailed written estimate."
    },
    {
        "title": "Color Consultation",
        "description": "Expert guidance on product and color selection appropriate for your Round Rock home."
    },
    {
        "title": "Surface Preparation",
        "description": "Thorough prep work — cleaning, patching, caulking, and priming as needed."
    },
    {
        "title": "Professional Application",
        "description": "Skilled application using premium products matched to your surfaces."
    },
    {
        "title": "Quality Inspection",
        "description": "Detailed review of every surface before we consider the project complete."
    },
    {
        "title": "Final Walkthrough",
        "description": "Walk-through with you to confirm everything meets your expectations."
    }
],
    faqs: [
    {
        "question": "How much does cabinet refinishing cost in Round Rock?",
        "answer": "Cabinet refinishing in Round Rock typically ranges from $2,500 to $6,500+ depending on the number of cabinet doors, drawer fronts, and whether you include the boxes. We provide exact pricing after measuring your kitchen."
    },
    {
        "question": "How long does cabinet refinishing take in Round Rock?",
        "answer": "Most Round Rock kitchen cabinet projects take 3–5 days including prep, spray application, and curing. We use quick-dry professional products that allow recoating within hours, minimizing the time your kitchen is out of service."
    },
    {
        "question": "Can you refinish my existing cabinets or do they need to be replaced?",
        "answer": "In almost all cases, existing cabinets can be refinished rather than replaced. The key requirements are solid construction (no swollen or delaminating doors) and a surface that can accept primer and finish properly. We assess this during the estimate visit."
    },
    {
        "question": "What colors are most popular for cabinet refinishing in Round Rock?",
        "answer": "White and off-white remain the most popular choices in Round Rock — Benjamin Moore Chantilly Lace, Simply White, and Sherwin-Williams Pure White are consistent top picks. Navy and soft blue-gray are popular for islands. We can match virtually any color."
    },
    {
        "question": "Do you also refinish bathroom vanities and laundry room cabinets?",
        "answer": "Yes — bathroom vanities and laundry room cabinets are popular add-ons to kitchen refinishing projects. Pricing is typically per cabinet door and drawer front, and we can often schedule these as part of the same project visit."
    }
],
    testimonials: [
    {
        "name": "A. Customer",
        "location": "Forest Creek, Round Rock",
        "rating": 5,
        "text": "Hill Country Painting did an excellent job with our cabinet refinishing project in Round Rock. Professional, reliable, and the results exceeded our expectations.",
        "initials": "AC"
    },
    {
        "name": "B. Homeowner",
        "location": "Mayfield Ranch, Round Rock",
        "rating": 5,
        "text": "We have used Hill Country Painting twice now and they consistently deliver great results in Round Rock. Highly recommended.",
        "initials": "BH"
    }
]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Cabinet Refinishing in Round Rock Texas',
    secondary: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'Round Rock cabinet refinishing excellence'
  }
};

const CabinetRefinishingRoundRock = () => <ServiceLocationPage config={config} />;

export default CabinetRefinishingRoundRock;
