import React from 'react';
import SEO from '../components/SEO';

const DoNotSell = () => {
  return (
    <>
      <SEO
        title="Do Not Sell or Share — Hill Country Painting"
        description="Opt out of the sale or sharing of your personal information for advertising purposes. Exercise your privacy rights under state privacy laws."
        canonical="/do-not-sell"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Do Not Sell or Share', url: '/do-not-sell' }
        ]}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-deep-900 mb-4">
                Do Not Sell or Share My Personal Information
              </h1>
              <p className="text-lg text-slate-600">
                Exercise your privacy rights under state privacy laws
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Your Privacy Rights</h2>
                <p className="text-slate-700 mb-4">
                  Under certain state privacy laws (including California's CCPA/CPRA and similar laws in other states), 
                  you have the right to opt out of the "sale" or "sharing" of your personal information for advertising purposes.
                </p>
                
                <h3 className="text-xl font-semibold text-deep-800 mb-3">What This Means</h3>
                <p className="text-slate-700 mb-4">
                  While we don't sell your information in the traditional sense, sharing data with advertising partners 
                  (like Meta/Facebook) for targeted advertising may be considered "selling" or "sharing" under some state laws.
                </p>

                <h3 className="text-xl font-semibold text-deep-800 mb-3">How to Opt Out</h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-deep-900 mb-2">Email Us</h4>
                    <p className="text-slate-700 mb-2">
                      Send an email to <a href="mailto:info@hillcopaint.com?subject=Do Not Sell or Share My Personal Information" className="text-deep-600 hover:text-deep-700 font-medium">info@hillcopaint.com</a> with:
                    </p>
                    <ul className="list-disc pl-6 text-slate-700 space-y-1">
                      <li>Subject line: "Do Not Sell or Share My Personal Information"</li>
                      <li>Your name and email address</li>
                      <li>Brief description of your request</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-deep-900 mb-2">Other Controls</h4>
                    <ul className="list-disc pl-6 text-slate-700 space-y-1">
                      <li>Visit <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-deep-600 hover:text-deep-700">Meta Ad Preferences</a> to control Facebook and Instagram ads</li>
                      <li>Use browser settings to block cookies and tracking</li>
                      <li>Enable Global Privacy Control (GPC) in your browser - we honor these signals where required</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-deep-800 mb-3 mt-6">What Happens Next</h3>
                <p className="text-slate-700 mb-4">
                  After you submit your request:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-4">
                  <li>We'll verify your identity to protect your privacy</li>
                  <li>We'll process your opt-out within 15 business days</li>
                  <li>We'll send you a confirmation email</li>
                  <li>Your information won't be shared for targeted advertising purposes going forward</li>
                </ul>

                <div className="border-t border-slate-200 pt-4 mt-6">
                  <p className="text-sm text-slate-600">
                    <strong>Note:</strong> Opting out of data sharing for advertising won't affect our ability to provide quotes 
                    and services you request, or prevent us from sending transactional communications about your projects.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-slate-700 mb-4">
                  Have questions about your privacy rights?
                </p>
                <a 
                  href="mailto:info@hillcopaint.com" 
                  className="btn-primary"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoNotSell;