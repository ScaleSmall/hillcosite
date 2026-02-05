import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ServiceAreasSection from '../components/sections/ServiceAreasSection';
import SplitSection from '../components/sections/SplitSection';
import CTABanner from '../components/sections/CTABanner';

const Testimonials = () => {
  const allTestimonials = [
    {
      name: 'Jason Hartley',
      location: 'Austin',
      rating: 5,
      text: 'Hill Country Painting did an outstanding job. They painted 7 rooms (one with a two-story ceiling), two staircases, the exterior stucco, and shutters. Everything looks clean and professional. They showed up on time, worked hard, and paid close attention to detail. I kept a short list of minor issues during the two-day job, but they had already fixed them before I even had to say anything. The project manager came by each day to check on things, which I appreciated. Great experience all around.',
      initials: 'JH'
    },
    {
      name: 'Patricia Perez',
      location: 'Austin',
      rating: 5,
      text: 'This is the second time I hired Hill Country Painting. They are thorough and have great follow-up and follow through to make sure you are completely happy with the work. They are neat and clean and have good communication. Both times, their crews were friendly, respectful, and trustworthy. Their bid came in below others, but the quality of work did not suffer at all. They do nice price gouge, which is rare these days.',
      initials: 'PP'
    },
    {
      name: 'leslie lyon-house',
      location: 'Austin',
      rating: 5,
      text: 'So happy with the beautiful paint job Netty, Edgar, and Chuy did for the entire interior of our home. Their service went above and beyond our expectations. Everyone who we worked with at Hill Country Painting was great. Fantastic value - the price point is beyond fair.',
      initials: 'LL'
    },
    {
      name: 'Kara Steenhoek',
      location: 'Austin',
      rating: 5,
      text: 'Fantastic folks to work with! They made the process so easy. I would recommend them to anybody. Great price and quality workmanship. Mel and Justin were the leads who were very professional and kind.',
      initials: 'KS'
    },
    {
      name: 'Arashk Shirazi',
      location: 'Austin',
      rating: 5,
      text: 'Josh was very professional, honest and informative about options and gave the best advice and recommendations. The services were reasonably priced. The crew were respectful to our outdoor space and very responsible about the quality of their work. After two years, I still look at their beautiful work from every angle, and admire the work they did.',
      initials: 'AS'
    },
    {
      name: 'June Ruda',
      location: 'Austin',
      rating: 5,
      text: 'Mel and Justin were very easy to work with. If any questionable events came up, they were quick to resolve it. Their team was detail-oriented, had English speaking support if needed, truly cared about the work, and it was priced fairly. I would recommend them.',
      initials: 'JR'
    },
    {
      name: 'Steven Smallfield',
      location: 'Austin',
      rating: 5,
      text: 'The guys know their way around some paint. We picked chantilly lace which is the worst for coverage. Most companies wont even entertain the thought of that paint color. They did a great job spraying walls and ceilings. The house was dark and depressing now its bright and we love it. They managed to get great coverage after a solid coat of primer.',
      initials: 'SS'
    },
    {
      name: 'Chris Morgan',
      location: 'Austin',
      rating: 5,
      text: 'Great attention to detail, good communication and follow up - Lalo\'s crew was exceptional! Highly recommend. The house looks FANTASTIC.',
      initials: 'CM'
    },
    {
      name: 'paul budreau',
      location: 'Austin',
      rating: 5,
      text: 'Hill Country Painting made my whole house beautiful, first I had them paint the outside house, they did such a excellent job at a good price that I had them also paint inside the house, which wasn\'t planed but I wanted to take advantage of their quality work, they are artist, I love the results. The whole team where a delight to work with, Forrest, Justin, Rob, Low and the quality painters, Fernando, Jesus and Hidalgo.',
      initials: 'PB'
    },
    {
      name: 'Janet Martin',
      location: 'Austin',
      rating: 5,
      text: 'We selected Hill Country Painting after a bid process and we are so happy with our choice! Josh provided a very detailed, professional proposal and quote. Melissa consulted with us on our colors and was instrumental in helping us choose the perfect color palate for our new home. Justin, our project manager, and his great team of painters completed our job in 2 days instead of the anticipated 3 days. Only minor touch-ups were discovered during our final walk-through and these were handled immediately. Excellence from beginning to the end!',
      initials: 'JM'
    },
    {
      name: 'Richard Miller',
      location: 'Austin',
      rating: 5,
      text: 'We just moved to Austin and needed to paint the interior of our new home. Robert came to our home and was very professional and thorough in his review of what we needed and his quote was clear and precise. A team of 4 painters arrived on the promised day and time and quickly prepared our home. The lead painter (Jose) was very helpful and provided us with great customer service. And his team did a fantastic job! We are 100% satisfied with their team, their professional approach, and the final results!',
      initials: 'RM'
    },
    {
      name: 'Stacey Applegate',
      location: 'Austin',
      rating: 5,
      text: 'Hill Country Painting was a great choice for my exterior home paint project. Although they were more expensive, I am delighted with the service I received and it was worth every penny! From the beginning, the people I was in contact with were courteous, friendly, and professional. Everyone answered each and every question I had, and always made sure I was happy. The painters were so thorough and skilled.',
      initials: 'SA'
    }
  ];

  const serviceAreas = [
    { name: 'Round Rock & Georgetown', href: '/service-areas/round-rock-georgetown' },
    { name: 'Pflugerville', href: '/service-areas/pflugerville' },
    { name: 'Cedar Park', href: '/service-areas/cedar-park' },
    { name: 'Hutto', href: '/service-areas/taylor-hutto' },
    { name: 'Leander', href: '/service-areas/leander' },
    { name: 'Taylor', href: '/service-areas/taylor-hutto' },
    { name: 'Austin', href: '/service-areas' }
  ];

  return (
    <>
      <SEO
        title="Testimonials — Hill Country Painting"
        description="Read reviews from satisfied Austin customers. See why Hill Country Painting is trusted for interior, exterior painting and cabinet painting. 5-star service."
        canonical="/testimonials"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Testimonials', url: '/testimonials' }
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-gray-900 leading-heading">
              What Our Customers Say
            </h1>
            <p className="text-xl text-brand-gray-600 leading-body">
              Don't just take our word for it. Read what Austin homeowners and business owners say about their experience with Hill Country Painting's professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Request a Consultation
              </Link>
              <Link to="/gallery" className="btn-outline">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern G: Testimonials Grid */}
      <TestimonialsSection
        title="Real Reviews from Real Customers"
        subtitle="Honest feedback from Austin area homeowners and businesses"
        testimonials={allTestimonials}
      />

      {/* Pattern H: Service Areas */}
      <ServiceAreasSection
        title="Serving Austin & Surrounding Areas"
        subtitle="Trusted painting professionals throughout the Austin metro"
        areas={serviceAreas}
      />

      {/* Pattern C: Split Section */}
      <SplitSection
        title="Building Trust Through Quality Work"
        description="Our reputation in Austin is built on consistently delivering exceptional results. Every testimonial represents a commitment to clean prep, crisp lines, and reliable schedules that Austin homeowners have come to expect."
        benefits={[
          { text: 'Satisfied customers throughout Austin metro' },
          { text: 'Consistent 5-star reviews across all platforms' },
          { text: 'Strong referral network from happy clients' },
          { text: 'Long-term relationships with repeat customers' },
          { text: 'Transparent communication throughout projects' },
          { text: 'Standing behind our work with 2-year warranty' }
        ]}
        image="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        imageAlt="Hill Country Painting satisfied customers Austin"
      />

      {/* Pattern I: CTA Banner */}
      <CTABanner
        title="Join Our Satisfied Customers"
        subtitle="Experience the Hill Country Painting difference for yourself"
        primaryCTA={{
          text: 'Request a Consultation',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Call (512) 240-2246',
          href: 'tel:(512) 240-2246'
        }}
      />
    </>
  );
};

export default Testimonials;