import React from 'react';
import ServiceLocationPage, { ServiceLocationConfig } from '../../components/templates/ServiceLocationPage';
import { locations } from '../../config/locations';

const location = locations['north-austin'];

const config: ServiceLocationConfig = {
  service: {
    type: 'exterior',
    name: 'Exterior Painting',
    slug: 'exterior-painting'
  },
  location: location,
  content: {
    heroSubtitle: "Professional exterior painting in North Austin. UV-resistant coatings, thorough prep, and HOA color approval handled for you.",
    introText: "Exterior painting in North Austin demands products and prep methods matched to Central Texas heat, UV intensity, and the specific substrates common in this area — fiber cement, brick veneer, stucco, and wood trim. We serve every North Austin neighborhood including The Domain Area, Balcones, Milwood.",
    benefits: [
    "Central Texas UV-resistant products",
    "Complete surface prep and caulking",
    "HOA color approval assistance",
    "All exterior surfaces — siding, trim, doors",
    "Pressure washing included",
    "Covers all North Austin neighborhoods",
    "Written warranty on all work",
    "Flexible scheduling"
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
        "question": "How much does exterior painting cost in North Austin?",
        "answer": "Exterior painting in North Austin typically ranges from $3,500 to $10,000+ depending on home size, number of stories, surface condition, and complexity. We provide detailed written estimates after an in-person assessment."
    },
    {
        "question": "How long does exterior paint last in North Austin's climate?",
        "answer": "With premium products and proper prep, exterior paint in North Austin should last 8–12 years on most surfaces. Using lower-grade products or skipping prep can cut that to 3–5 years. We always recommend the products that deliver the longest service life."
    },
    {
        "question": "Do you handle HOA color approval for exterior repaints in North Austin?",
        "answer": "Yes — for North Austin communities that require exterior color approval, we prepare and submit the documentation on your behalf. We aim for first-pass approval by working within each community's approved color parameters."
    },
    {
        "question": "What exterior surfaces do you paint in North Austin?",
        "answer": "We paint all exterior surfaces including fiber cement siding (Hardie), brick, stucco, wood siding, trim, fascia, soffits, doors, shutters, and garage doors. We assess each surface type during the estimate and recommend appropriate products for each."
    },
    {
        "question": "When is the best time of year for exterior painting in North Austin?",
        "answer": "Spring and fall are ideal — temperatures between 50°F and 90°F with low humidity. We also work through summer for most projects using morning application windows before peak heat. We track weather forecasts carefully and reschedule if conditions are not right for quality application."
    }
],
    testimonials: [
    {
        "name": "A. Customer",
        "location": "The Domain Area, North Austin",
        "rating": 5,
        "text": "Hill Country Painting did an excellent job with our exterior painting project in North Austin. Professional, reliable, and the results exceeded our expectations.",
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
    heroAlt: 'Exterior Painting in North Austin Texas',
    secondary: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    secondaryAlt: 'North Austin exterior painting excellence'
  }
};

const ExteriorPaintingNorthAustin = () => <ServiceLocationPage config={config} />;

export default ExteriorPaintingNorthAustin;
