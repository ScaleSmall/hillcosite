import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import SEO from '../components/SEO';

const Financing = () => {
  return (
    <>
      <SEO
        title="Financing Options - Up to 24 Months Interest-Free"
        description="Flexible payment plans with Wisetack financing. Get up to 24 months interest-free on your painting project. Easy approval and competitive rates available."
        canonicalUrl="https://hillcopaint.com/financing"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-900 via-deep-800 to-deep-700 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZNMTggMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img
                src="/24mo_blue_badge.png"
                alt="Up to 24 months interest-free financing"
                className="w-32 h-auto drop-shadow-xl"
                width="128"
                height="128"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Flexible Payment Options for Your Painting Project
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8">
              Get up to 24 months interest-free financing through our trusted partner, Wisetack
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(512)240-2246"
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
              >
                <Phone size={20} />
                Call Now: (512) 240-2246
              </a>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center justify-center text-lg"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-8 text-center">
              Why Choose Wisetack Financing?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-lg">
                <CheckCircle2 className="text-accent-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fast & Easy Approval</h3>
                  <p className="text-slate-600">Get approved in minutes with a soft credit check that won't impact your credit score</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-lg">
                <CheckCircle2 className="text-accent-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Flexible Terms</h3>
                  <p className="text-slate-600">Choose from multiple payment plans that fit your budget, up to 24 months</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-lg">
                <CheckCircle2 className="text-accent-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">No Hidden Fees</h3>
                  <p className="text-slate-600">Transparent pricing with no prepayment penalties or hidden charges</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-lg">
                <CheckCircle2 className="text-accent-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Start Right Away</h3>
                  <p className="text-slate-600">Once approved, we can begin your project immediately</p>
                </div>
              </div>
            </div>

            {/* Financing Details */}
            <div className="bg-gradient-to-br from-deep-900 to-deep-800 text-white p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bold mb-4">Financing Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-400 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Up to 24 months interest-free</strong> on qualifying purchases</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-400 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Competitive rates</strong> for extended term options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-400 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Flexible payment plans</strong> designed for your budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-400 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Quick online application</strong> with instant decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-slate-50">
        <style dangerouslySetInnerHTML={{ __html: `
          .section-code-example {
            position: relative;
            font-family: Montserrat, Arial, sans-serif;
            display: flex;
            overflow: hidden;
            padding: 80px 6vw;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #31364c;
            font-size: 16px;
            line-height: 150%;
            font-weight: 400;
          }

          .box-code-example-11 {
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            background-color: #f8f8f8;
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
              padding: 60px 16px;
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

        <div className="section-code-example">
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

        <p className="text-center text-sm text-slate-500 mt-6">
          Subject to credit approval. Terms and conditions apply. Financing provided by Wisetack.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Your Estimate</h3>
              <p className="text-slate-600">
                Contact us for a free, no-obligation estimate for your painting project
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply for Financing</h3>
              <p className="text-slate-600">
                Complete a quick online application and receive an instant decision
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Your Project</h3>
              <p className="text-slate-600">
                Once approved, we'll schedule your project and get started right away
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-deep-900 to-deep-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Don't let budget constraints hold you back. With flexible financing, your dream paint job is more affordable than you think.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(512)240-2246"
              className="btn-primary inline-flex items-center justify-center gap-2 text-lg bg-white text-deep-900 hover:bg-slate-100"
            >
              <Phone size={20} />
              Call: (512) 240-2246
            </a>
            <Link
              to="/contact"
              className="btn-secondary inline-flex items-center justify-center text-lg border-white text-white hover:bg-white hover:text-deep-900"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Financing;
