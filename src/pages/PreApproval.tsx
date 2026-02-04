import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PreApproval = () => {
  return (
    <>
      <SEO
        title="Get Pre-Approved for Financing - Hill Country Painting"
        description="Check your financing options with no impact to your credit score. Get pre-approved in minutes for your painting project with Wisetack financing."
        canonical="/pre-approval"
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .section-prequal {
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

        .title-prequal-small {
          margin-top: 0px;
          margin-bottom: 0px;
          font-size: 40px;
          line-height: 140%;
        }

        .paragraph-prequal-lg {
          margin-bottom: 0;
          font-size: 18px;
          font-weight: 400;
          line-height: 150%;
        }

        .container-prequal {
          z-index: 1;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .content-prequal-10 {
          grid-column-gap: 64px;
          grid-row-gap: 64px;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          display: flex;
        }

        .iframe-wrapper-prequal {
          flex: 1;
        }

        .box-prequal {
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          max-width: 55%;
          display: flex;
        }

        .margin-bot-24-prequal {
          margin-bottom: 24px;
        }

        .title-prequal-xxsmall {
          margin: 0 0 8px 0;
          font-size: 21px;
          line-height: 140%;
          font-weight: 600;
        }

        @media screen and (max-width: 991px) {
          .title-prequal-small {
            font-size: 32px;
          }
        }

        @media screen and (max-width: 767px) {
          .title-prequal-small {
            font-size: 26px;
          }

          .content-prequal-10 {
            grid-row-gap: 20px;
            flex-direction: column-reverse;
          }

          .iframe-wrapper-prequal {
            width: 100%;
          }
        }

        @media screen and (max-width: 479px) {
          .section-prequal {
            padding: 60px 16px;
          }

          .container-prequal {
            flex-direction: column;
            display: flex;
          }

          .title-prequal-small {
            font-size: 24px;
          }

          .box-prequal {
            width: 100%;
            min-width: 100%;
            max-width: none;
          }
        }
      ` }} />

      <section className="section-prequal bg-slate-50">
        <div className="container-prequal">
          <div className="content-prequal-10">
            <div className="iframe-wrapper-prequal">
              <iframe
                style={{ border: 'none', width: '100%', height: '100%', minHeight: '600px' }}
                src="https://wisetack.us/#/prequalify/6LPWMJ"
                title="Wisetack Pre-Qualification Form"
              />
            </div>

            <div className="box-prequal">
              <div className="margin-bot-24-prequal">
                <h2 className="title-prequal-small">
                  How our financing option works
                </h2>
              </div>

              <div className="margin-bot-24-prequal">
                <h3 className="title-prequal-xxsmall">Fast and easy</h3>
                <p className="paragraph-prequal-lg">
                  The application takes about a minute to complete.
                </p>
              </div>

              <div className="margin-bot-24-prequal">
                <h3 className="title-prequal-xxsmall">No hidden fees</h3>
                <p className="paragraph-prequal-lg">
                  There are no penalties, fees, or compounding interest.
                </p>
              </div>

              <div className="margin-bot-24-prequal">
                <h3 className="title-prequal-xxsmall">Options for you</h3>
                <p className="paragraph-prequal-lg">
                  You can choose the monthly payment amount that works best for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 mb-4">
            Questions about financing? Call us at{' '}
            <a href="tel:(512)240-2246" className="text-brand-azureDark font-semibold hover:underline">
              (512) 240-2246
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request Consultation
            </Link>
            <Link to="/financing" className="btn-secondary">
              View Payment Calculator
            </Link>
          </div>
        </div>
      </section>

      <section className="py-6 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-slate-500">
            Subject to credit approval. Terms and conditions apply. Financing provided by Wisetack.
            All financing is subject to credit approval. Your terms may vary. Payment options through Wisetack are provided by our lending partners.
          </p>
        </div>
      </section>
    </>
  );
};

export default PreApproval;
