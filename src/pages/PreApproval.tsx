import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Shield, Clock, CreditCard } from 'lucide-react';
import SEO from '../components/SEO';

const PreApproval = () => {
  return (
    <>
      <SEO
        title="Get Pre-Approved for Financing - Hill Country Painting"
        description="Check your financing options with no impact to your credit score. Get pre-approved in minutes for your painting project with Wisetack financing."
        canonical="/pre-approval"
      />

      <section className="relative bg-gradient-to-br from-deep-900 via-deep-800 to-deep-700 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZNMTggMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Get Pre-Approved in Minutes
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-6">
              Check your financing options with no impact to your credit score
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Shield className="text-accent-400 flex-shrink-0" size={20} />
                <span>Soft credit check only</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-accent-400 flex-shrink-0" size={20} />
                <span>Results in seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="text-accent-400 flex-shrink-0" size={20} />
                <span>No obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <Link
              to="/financing"
              className="text-deep-600 hover:text-deep-700 font-medium inline-flex items-center gap-2"
            >
              &larr; Back to Financing Calculator
            </Link>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 md:p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://cdn.prod.website-files.com/5f194315e6b47c1697925302/63ff658aae810ab61d7481f4_logo%20(1).svg"
                alt="Wisetack"
                className="h-8"
                style={{ filter: 'brightness(0) saturate(100%) invert(28%) sepia(98%) saturate(1000%) hue-rotate(195deg) brightness(95%) contrast(101%)' }}
              />
            </div>

            <div className="aspect-[4/5] md:aspect-[16/9] w-full min-h-[600px]">
              <iframe
                src="https://wisetack.us/#/prequalify/6LPWMJ"
                title="Wisetack Pre-Approval Form"
                className="w-full h-full min-h-[600px] border-0 rounded-lg"
                allow="geolocation"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-deep-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="text-deep-600" size={24} />
              </div>
              <h3 className="font-semibold text-deep-900 mb-2">No Credit Impact</h3>
              <p className="text-sm text-slate-600">Pre-qualification uses a soft credit check that won't affect your score</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-deep-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="text-deep-600" size={24} />
              </div>
              <h3 className="font-semibold text-deep-900 mb-2">Quick Decision</h3>
              <p className="text-sm text-slate-600">Get your pre-approval decision in just a few minutes</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-deep-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="text-deep-600" size={24} />
              </div>
              <h3 className="font-semibold text-deep-900 mb-2">Multiple Options</h3>
              <p className="text-sm text-slate-600">See all available financing plans tailored to your situation</p>
            </div>
          </div>

          <div className="bg-deep-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-deep-900 mb-4 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-8 h-8 bg-deep-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                <p className="text-sm text-slate-700">Enter your basic information</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-deep-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                <p className="text-sm text-slate-700">Soft credit check (no impact)</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-deep-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                <p className="text-sm text-slate-700">See your options instantly</p>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-deep-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                <p className="text-sm text-slate-700">Schedule your estimate</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-4">
              Questions about financing? Call us at{' '}
              <a href="tel:(512)240-2246" className="text-deep-600 font-semibold hover:underline">
                (512) 240-2246
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Request Free Estimate
              </Link>
              <Link to="/financing" className="btn-secondary">
                View Payment Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-slate-50">
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
