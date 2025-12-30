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
      <section className="relative bg-gradient-to-br from-deep-900 via-deep-800 to-deep-700 text-white py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <img
                src="/24mo_blue_badge.png"
                alt="Up to 24 months interest-free financing"
                className="w-20 h-auto"
                width="80"
                height="80"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Flexible Payment Options
            </h1>
            <p className="text-base text-slate-200">
              Up to 24 months interest-free financing through Wisetack
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              Return to Free Estimate Page
            </Link>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .section-code-example {
            position: relative;
            font-family: Montserrat, Arial, sans-serif;
            display: flex;
            overflow: hidden;
            padding: 40px 6vw;
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              Return to Free Estimate Page
            </Link>
          </div>
          <p className="text-center text-sm text-slate-500">
            Subject to credit approval. Terms and conditions apply. Financing provided by Wisetack.
          </p>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 mb-4">
            Questions about financing? Call us at <a href="tel:(512)240-2246" className="text-deep-600 font-semibold hover:underline">(512) 240-2246</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Financing;
