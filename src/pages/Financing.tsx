import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const Financing = () => {
  const financingFAQs = [
    {
      question: 'Can financing be used for Austin exterior painting?',
      answer: 'Yes, financing can be used for eligible Austin exterior painting projects, including larger scopes with washing, scraping, caulking, repairs, primer, trim, siding, and finish coats.'
    },
    {
      question: 'Can financing be used for Austin interior painting?',
      answer: 'Yes, payment options can help Austin homeowners complete multi-room interior painting projects that include walls, ceilings, trim, doors, built-ins, and coordinated color updates.'
    },
    {
      question: 'Can financing be used for cabinet painting or refinishing?',
      answer: 'Yes, eligible cabinet painting and cabinet refinishing projects can use financing when homeowners want a durable kitchen update without paying the full project cost upfront.'
    },
    {
      question: 'Can commercial painting projects use financing?',
      answer: 'Some Austin commercial painting projects may qualify for payment options depending on project details, approval, and the financing terms available through Wisetack.'
    },
    {
      question: 'Do I need a painting estimate before choosing financing?',
      answer: 'A written painting estimate helps match the financing request to the actual project scope, including service type, prep requirements, coatings, timing, and total project cost.'
    },
    {
      question: 'Does checking payment options affect my credit score?',
      answer: 'Wisetack states that checking options uses a soft credit check. Final approval, terms, and available offers are subject to credit approval and Wisetack terms.'
    }
  ];

  const financingServiceLinks = [
    {
      title: 'Exterior Painting Financing',
      description: 'Plan payment options for Austin exterior painting, prep, trim, siding, caulking, primer, and full repaint scopes.',
      href: '/exterior-painting-austin'
    },
    {
      title: 'Interior Painting Financing',
      description: 'Review payment options for multi-room Austin interior painting, walls, ceilings, trim, doors, and color updates.',
      href: '/interior-painting-austin'
    },
    {
      title: 'Cabinet Painting Financing',
      description: 'Use financing context for Austin cabinet painting, cabinet refinishing, sprayed finishes, and kitchen updates.',
      href: '/cabinet-refinishing-austin'
    },
    {
      title: 'Commercial Painting Financing',
      description: 'Discuss payment options for qualifying Austin commercial painting, tenant spaces, offices, and managed properties.',
      href: '/commercial-painting-austin'
    }
  ];

  return (
    <>
      <SEO
        title="Financing Options - Up to 24 Months Interest-Free"
        description="Flexible payment plans with Wisetack financing. Get up to 24 months interest-free on your painting project. Easy approval and competitive rates available."
        canonical="/financing"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Financing', url: '/financing' }
        ]}
        faq={financingFAQs}
        includeLocalBusiness={true}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-gray-900 via-brand-gray-800 to-brand-azureDark text-white py-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZNMTggMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Content - Left Side */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Flexible Payment Options
              </h1>
              <p className="text-lg md:text-xl text-brand-gray-200 mb-6">
                Up to 24 months interest-free financing through Wisetack
              </p>
              <ul className="space-y-2 text-base md:text-lg">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-azure flex-shrink-0 mt-1" size={20} />
                  <span>Financing from $500 to $25,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-azure flex-shrink-0 mt-1" size={20} />
                  <span>Streamlined approval with soft credit check</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-azure flex-shrink-0 mt-1" size={20} />
                  <span>Flexible terms from 3 to 60 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-brand-azure flex-shrink-0 mt-1" size={20} />
                  <span>No hidden fees or prepayment penalties</span>
                </li>
              </ul>
            </div>

            {/* Financing Badge - Right Side */}
            <div className="flex-shrink-0">
              <img
                src="/financing-24-month-interest-free-badge.png"
                alt="Up to 24 months interest-free financing"
                className="w-60 h-60 object-contain drop-shadow-2xl"
                width="240"
                height="240"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              Return to Consultation Page
            </Link>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .section-code-example {
            position: relative;
            display: flex;
            overflow: hidden;
            padding: 40px 6vw;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #334155;
            font-size: 16px;
            line-height: 150%;
            font-weight: 400;
          }

          .box-code-example-11 {
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            background-color: #F8FAFC;
            border-radius: 6px;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            max-width: 50%;
            padding: 30px;
            display: flex;
          }

          .container-code-example {
            z-index: 1;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            justify-content: space-between;
            align-items: center;
            display: flex;
          }

          .content-code-example-11 {
            grid-column-gap: 64px;
            grid-row-gap: 64px;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            display: flex;
            width:100%;
          }

          .iframe-wrapper-code-example {
            flex: 1;
          }

          .margin-bot-24-code-example {
            margin-bottom: 24px;
          }

          .title-code-example-xxsmall {
            margin: 0 0 0;
            font-size: 21px;
            line-height: 140%;
          }

          .list-code-example {
            display: flex;
            flex-direction: column;
            grid-row-gap: 8px;
            margin-bottom: 0;
            font-size: 18px;
          }

          @media screen and (max-width: 767px) {
            .content-code-example-11 {
              grid-row-gap: 20px;
              flex-direction: column-reverse;
            }

            .iframe-wrapper-code-example {
              width: 100%;
            }
          }

          @media screen and (max-width: 479px) {
            .section-code-example {
              padding: 30px 16px;
            }

            .container-code-example {
              flex-direction: column;
              display: flex;
            }

            .box-code-example-11 {
              width: 100%;
              min-width: 100%;
              max-width: none;
            }
          }
        ` }} />

        <div className="section-code-example font-heading">
          <div className="container-code-example">
            <div className="content-code-example-11">
              <div className="iframe-wrapper-code-example">
                <div className="iframe-code-example w-embed w-iframe">
                  <iframe
                    className="myiframe"
                    style={{ border: 'none', width: '100%', height: '100%', minHeight: '500px' }}
                    src="https://wisetack.us/#/payment_calculator?type=HS"
                    title="Wisetack Payment Calculator"
                  />
                </div>
              </div>
              <div className="box-code-example-11">
                <div className="margin-bot-24-code-example">
                  <h3 className="title-code-example-xxsmall">Terms:</h3>
                </div>
                <ul role="list" className="list-code-example">
                  <li className="list-item-code-example">Financing from $500 - $25,000*</li>
                  <li className="list-item-code-example">APRs from 0% to 35.9%*</li>
                  <li className="list-item-code-example">Terms from 3 to 60 months*</li>
                  <li className="list-item-code-example">No penalties, late fees, or compounding interest</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              Return to Consultation Page
            </Link>
          </div>
          <p className="text-center text-sm text-brand-gray-500">
            Subject to credit approval. Terms and conditions apply. Financing provided by Wisetack.
          </p>
        </div>
      </section>

      {/* Pre-Approval CTA */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-azureDark to-brand-azureDark rounded-xl p-6 md:p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Get Pre-Approved?</h2>
            <p className="text-brand-gray-200 mb-6 max-w-2xl mx-auto">
              Check your financing options in minutes with no impact to your credit score.
              See what you qualify for before scheduling your estimate.
            </p>
            <Link
              to="/pre-approval"
              className="inline-flex items-center justify-center bg-white text-brand-azureDark font-semibold px-8 py-3 rounded-lg hover:bg-brand-gray-100 transition-colors"
            >
              Get Pre-Approved Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 text-center">
            Using Financing for Painting Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Exterior Repaints</h3>
              <p className="text-brand-gray-700">
                Financing can help homeowners handle full exterior preparation, trim repair, primer, and premium coatings at the right time instead of delaying until damage spreads.
              </p>
            </div>
            <div className="bg-brand-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Interior Updates</h3>
              <p className="text-brand-gray-700">
                Larger interior projects often include multiple rooms, trim, doors, ceilings, and color changes. Payment options make it easier to complete the full scope in one organized project.
              </p>
            </div>
            <div className="bg-brand-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-3">Cabinet Refinishing</h3>
              <p className="text-brand-gray-700">
                Cabinet refinishing is usually far less than replacement, and financing can spread the cost of a durable sprayed finish, hardware coordination, and careful reassembly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-4">
              Financing by Austin Painting Service
            </h2>
            <p className="text-lg text-brand-gray-700 leading-body">
              Match payment planning to the painting scope you are considering before requesting a written estimate.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {financingServiceLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="rounded-lg border border-brand-gray-200 bg-white p-5 transition-colors hover:border-brand-azure hover:bg-brand-azure/5"
              >
                <h3 className="text-xl font-bold text-brand-gray-900 mb-2">{link.title}</h3>
                <p className="text-brand-gray-700 leading-body">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-6 text-center">
            Painting Financing FAQ
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {financingFAQs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-brand-gray-200 p-5">
                <h3 className="text-lg font-bold text-brand-gray-900 mb-2">{faq.question}</h3>
                <p className="text-brand-gray-700 leading-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 bg-brand-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gray-600 mb-4">
            Questions about financing? Call us at <a href="tel:+15122402246" className="text-brand-azureDark font-semibold hover:underline">(512) 240-2246</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Financing;
