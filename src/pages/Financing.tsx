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
        canonical="/financing"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deep-900 via-deep-800 to-deep-700 text-white py-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZNMTggMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Content - Left Side */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Flexible Payment Options
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-6">
                Up to 24 months interest-free financing through Wisetack
              </p>
              <ul className="space-y-2 text-base md:text-lg">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent-400 flex-shrink-0 mt-1" size={20} />
                  <span>Financing from $500 to $25,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent-400 flex-shrink-0 mt-1" size={20} />
                  <span>Fast approval with soft credit check</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent-400 flex-shrink-0 mt-1" size={20} />
                  <span>Flexible terms from 3 to 60 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-accent-400 flex-shrink-0 mt-1" size={20} />
                  <span>No hidden fees or prepayment penalties</span>
                </li>
              </ul>
            </div>

            {/* Financing Badge - Right Side */}
            <div className="flex-shrink-0">
              <img
                src="/24mo_blue_badge.png"
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
