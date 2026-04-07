import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['north-austin'];

const config: ServiceLocationConfig = {
  service: {
    type: 'interior',
    name: 'Interior Painting',
    slug: 'interior-painting'
  },
  location: location,
  content: {
    heroSubtitle: "North Austin's trusted interior painting professionals. Precise, clean, and delivered on time for homes throughout North Austin.",
    introText: "North Austin homeowners trust Hill Country Painting for interior projects that go beyond a fresh coat — careful prep, clean lines on trim and ceilings, and color guidance that takes the guesswork out of the process. We serve every neighborhood in North Austin including The Domain Area, Balcones, Milwood.",
    benefits: [
    "All North Austin neighborhoods served",
    "Full prep — walls, trim, and ceilings",
    "Premium paint — Sherwin-Williams and Benjamin Moore",
    "Color consultation included",
    "Family-schedule friendly",
    "Trim and door painting available",
    "Cabinet refinishing add-on option",
    "2-year warranty standard"
],
    processSteps: [
    {
        "title": "Free Estimate",
        "description": "We visit your North Austin property, assess the scope, and provide a detailed written estimate."
    },
    {
        "title": "Color Consultation",
        "description": "Expert guidance on product and color selection appropriate for your North Austin home."
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
        "question": "How much does interior painting cost in North Austin?",
        "answer": "Interior painting in North Austin typically ranges from $3,000 to $8,000+ depending on home size, number of rooms, and scope. We provide detailed written estimates after an in-home visit."
    },
    {
        "question": "Do you paint ceilings and trim in North Austin?",
        "answer": "Yes — we offer full interior scope including walls, ceilings, trim, doors, and built-ins. Many North Austin homeowners choose us for complete interior repaints to ensure consistent color and finish quality throughout."
    },
    {
        "question": "How long does an interior repaint take in North Austin?",
        "answer": "A full interior repaint for a typical North Austin home takes 3–5 days depending on size and scope. We work systematically room by room so your family always has usable space during the project."
    },
    {
        "question": "Do you help with paint color selection in North Austin?",
        "answer": "Yes — color consultation is included with every estimate. We bring sample boards and can help narrow down choices based on your home's lighting, flooring, and furnishings. We eliminate the guesswork."
    },
    {
        "question": "What paint brands do you use for interior projects in North Austin?",
        "answer": "We use Sherwin-Williams and Benjamin Moore as our primary interior brands — Sherwin-Williams Emerald Interior and Benjamin Moore Aura for high-traffic and premium applications. We do not use builder-grade or off-brand products."
    }
],
    testimonials: [
    {
        "name": "A. Customer",
        "location": "The Domain Area, North Austin",
        "rating": 5,
        "text": "Hill Country Painting did an excellent job with our interior painting project in North Austin. Professional, reliable, and the results exceeded our expectations.",
        "initials": "AC"
    },
    {
        "name": "B. Homeowner",
        "location": "Balcones, North Austin",
        "rating": 5,
        "text": "We have used Hill Country Painting twice now and they consistently deliver great results in North Austin. Highly recommended.",
        "initials": "BH"
    }
]
  },
  images: {
    hero: '/austin-professional-house-painting-hero.jpg',
    heroAlt: 'Interior Painting in North Austin Texas',
    secondary: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'North Austin interior painting excellence'
  }
};

const InteriorPaintingNorthAustin = () => <ServiceLocationPage config={config} />;

export default InteriorPaintingNorthAustin;
