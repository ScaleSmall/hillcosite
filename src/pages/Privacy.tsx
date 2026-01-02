import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy — Hill Country Painting"
        description="Privacy Policy for HillCo Paint. How we collect, use, and protect your personal information. Compliant with Meta Ads, CCPA, GDPR requirements."
        canonical="/privacy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy' }
        ]}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-deep-900 mb-4">
                Privacy Policy for HillCo Paint
              </h1>
              <p className="text-lg text-slate-600 mb-2">
                Website: <a href="https://www.hillcopaint.com" className="text-deep-600 hover:text-deep-700">https://www.hillcopaint.com</a>
              </p>
              <p className="text-lg text-slate-600">
                Last updated: January 2, 2026
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              
              {/* Who We Are */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Who We Are</h2>
                <p className="text-slate-700 mb-4">
                  HillCo Paint is a professional painting company serving Austin, Texas and surrounding areas. 
                  Our website is located at <a href="https://www.hillcopaint.com" className="text-deep-600 hover:text-deep-700">https://www.hillcopaint.com</a>.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>Contact us:</strong> <a href="mailto:info@hillcopaint.com" className="text-deep-600 hover:text-deep-700">info@hillcopaint.com</a>
                </p>
              </section>

              {/* What We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">What Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-deep-800 mb-3">Information You Give Us</h3>
                <p className="text-slate-700 mb-4">When you contact us or request services, you may provide:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-1">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Property address and location</li>
                  <li>Project details and service requests</li>
                  <li>Communications and preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-deep-800 mb-3">Information We Collect Automatically</h3>
                <p className="text-slate-700 mb-4">When you visit our website, we automatically collect:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-1">
                  <li>IP address and general location</li>
                  <li>Device and browser information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>How you found our website</li>
                </ul>

                <h3 className="text-xl font-semibold text-deep-800 mb-3">Cookies, Pixels & Tracking</h3>
                <p className="text-slate-700 mb-4">We use various tracking technologies, including:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                  <li><strong>Meta Pixel & Conversions API</strong> - to measure ad performance and show relevant ads</li>
                  <li><strong>Google Analytics 4</strong> - to understand website usage</li>
                  <li><strong>Email delivery services</strong> (SendLayer/SMTP) - to send communications</li>
                  <li><strong>Website cookies</strong> - for functionality and preferences</li>
                </ul>
                <p className="text-slate-700 mb-4">
                  We may use hashed identifiers (encrypted versions of your email or phone) for ads measurement and creating custom audiences for advertising.
                </p>
              </section>

              {/* How and Why We Use Information */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">How and Why We Use Your Information</h2>
                <p className="text-slate-700 mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-1">
                  <li>Respond to your inquiries and provide quotes</li>
                  <li>Provide our painting services</li>
                  <li>Improve our website and services</li>
                  <li>Analyze website usage and performance</li>
                  <li>Show you relevant ads and measure their effectiveness</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Comply with legal requirements</li>
                </ul>
              </section>

              {/* Cookies & Tracking */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Cookies & Tracking Technologies</h2>
                <p className="text-slate-700 mb-4">
                  We use cookies, pixels, and similar technologies to enhance your experience and understand how you use our website. 
                  Third-party partners (like Meta and Google) may also set and read their own tracking technologies.
                </p>
                <p className="text-slate-700 mb-4">
                  <strong>Your Controls:</strong> You can manage cookies through our Cookie Preferences (if available) or your browser settings. 
                  Most browsers allow you to block or delete cookies, though this may affect website functionality.
                </p>
              </section>

              {/* Sharing & Disclosure */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">How We Share Your Information</h2>
                
                <h3 className="text-xl font-semibold text-deep-800 mb-3">Service Providers</h3>
                <p className="text-slate-700 mb-4">We share information with trusted companies that help us operate, including:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-6 space-y-1">
                  <li>Website hosting and technical services</li>
                  <li>Analytics providers (Google Analytics)</li>
                  <li>Email and communication services (SendLayer/SMTP)</li>
                  <li>Customer relationship management (CRM) tools</li>
                  <li>Payment processors (if used)</li>
                </ul>

                <h3 className="text-xl font-semibold text-deep-800 mb-3">Advertising Partners</h3>
                <p className="text-slate-700 mb-4">
                  We share information with advertising partners like Meta (Facebook/Instagram) and other platforms for targeted advertising and measurement. 
                  This includes creating Custom Audiences using hashed (encrypted) versions of your contact information.
                </p>
                
                <h3 className="text-xl font-semibold text-deep-800 mb-3">Important Note for California and Other States</h3>
                <p className="text-slate-700 mb-4">
                  Under some state privacy laws, sharing data for cross-context behavioral advertising may be considered "selling" or "sharing" personal information. 
                  We provide ways for you to opt out (see "Your Choices" below).
                </p>
              </section>

              {/* Your Choices */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Your Choices & Opt-Outs</h2>
                
                <h3 className="text-xl font-semibold text-deep-800 mb-3">Cookie & Tracking Controls</h3>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                  <li>Use our Cookie Preferences tool (if available) to manage consent</li>
                  <li>Adjust your browser settings to block or delete cookies</li>
                  <li>Use device settings to limit ad tracking</li>
                </ul>

                <h3 className="text-xl font-semibold text-deep-800 mb-3">Advertising Opt-Outs</h3>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                  <li>Visit <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-deep-600 hover:text-deep-700">Meta Ad Preferences</a> to control ads on Facebook and Instagram</li>
                  <li>Email us at <a href="mailto:info@hillcopaint.com" className="text-deep-600 hover:text-deep-700">info@hillcopaint.com</a> to opt out of Custom Audiences</li>
                </ul>

                <h3 className="text-xl font-semibold text-deep-800 mb-3">Do Not Sell or Share</h3>
                <p className="text-slate-700 mb-4">
                  If you're a resident of California or another state with "Do Not Sell/Share" rights, you can opt out:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                  <li>Visit our <Link to="/do-not-sell" className="text-deep-600 hover:text-deep-700">Do Not Sell or Share</Link> page</li>
                  <li>Email us at <a href="mailto:info@hillcopaint.com" className="text-deep-600 hover:text-deep-700">info@hillcopaint.com</a></li>
                  <li>We honor Global Privacy Control (GPC) signals where required by law</li>
                </ul>
              </section>

              {/* Legal Bases (EEA/UK) */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Legal Bases for Processing (EEA/UK)</h2>
                <p className="text-slate-700 mb-4">If you're in the European Economic Area or UK, we process your data based on:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                  <li><strong>Consent</strong> - for advertising cookies and analytics (you can withdraw consent)</li>
                  <li><strong>Contract</strong> - to provide quotes and services you request</li>
                  <li><strong>Legitimate interests</strong> - for security, fraud prevention, and website operations</li>
                  <li><strong>Legal obligation</strong> - to comply with applicable laws</li>
                </ul>
                <p className="text-slate-700 mb-4">
                  You can withdraw consent at any time by contacting us or adjusting your settings.
                </p>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Your Privacy Rights</h2>
                <p className="text-slate-700 mb-4">Depending on where you live, you may have rights to:</p>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                  <li><strong>Access</strong> - see what personal information we have about you</li>
                  <li><strong>Correct</strong> - fix inaccurate information</li>
                  <li><strong>Delete</strong> - request removal of your information</li>
                  <li><strong>Portability</strong> - get a copy of your data in a standard format</li>
                  <li><strong>Restrict or opt out</strong> - limit how we use your information</li>
                  <li><strong>Object</strong> - oppose certain types of processing</li>
                  <li><strong>Withdraw consent</strong> - for activities based on your permission</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-deep-800 mb-3">How to Submit Requests</h3>
                <p className="text-slate-700 mb-4">
                  Email us at <a href="mailto:info@hillcopaint.com" className="text-deep-600 hover:text-deep-700">info@hillcopaint.com</a> with your request. 
                  We may need to verify your identity and will respond within the timeframes required by law (typically 30-45 days).
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">How Long We Keep Your Information</h2>
                <p className="text-slate-700 mb-4">
                  We keep your information only as long as needed for business purposes or as required by law. For example:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                  <li>Inquiry and quote data: typically 24 months unless we have an ongoing relationship</li>
                  <li>Service records: duration of warranty plus applicable legal requirements</li>
                  <li>Website analytics: as configured in our tools (usually 2-4 years)</li>
                </ul>
              </section>

              {/* Security */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Security</h2>
                <p className="text-slate-700 mb-4">
                  We use reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. 
                  However, no system is completely secure, and we cannot guarantee absolute protection.
                </p>
              </section>

              {/* Children */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Children's Privacy</h2>
                <p className="text-slate-700 mb-4">
                  Our services are not directed to children. We do not knowingly collect personal information from anyone under 13 
                  (or 16 in some jurisdictions). If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">International Data Transfers</h2>
                <p className="text-slate-700 mb-4">
                  Your information may be transferred to and processed in countries other than where you live. 
                  When we transfer data internationally, we use appropriate safeguards such as EU Standard Contractual Clauses 
                  or other legally recognized mechanisms.
                </p>
              </section>

              {/* Lead Ads & Forms */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Facebook/Instagram Lead Ads</h2>
                <p className="text-slate-700 mb-4">
                  We may use Facebook and Instagram Lead Ads to collect inquiries. When you submit information through these forms:
                </p>
                <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-1">
                  <li>We use your information to respond to your inquiry and provide quotes</li>
                  <li>We may send you marketing communications (with option to unsubscribe)</li>
                  <li>Your submission indicates consent to be contacted about our services</li>
                </ul>
              </section>

              {/* Email Communications */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Email Communications</h2>
                <p className="text-slate-700 mb-4">
                  We use email services (including SendLayer and SMTP providers) to communicate with you. 
                  All marketing emails include an unsubscribe link. You can also email <a href="mailto:info@hillcopaint.com" className="text-deep-600 hover:text-deep-700">info@hillcopaint.com</a> to opt out.
                </p>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Changes to This Policy</h2>
                <p className="text-slate-700 mb-4">
                  We may update this privacy policy from time to time. When we make changes, we'll update the "Last updated" date 
                  and notify you through our website or other appropriate means. The current version always reflects our latest practices.
                </p>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-deep-800 mb-2">Do you sell my personal information?</h3>
                    <p className="text-slate-700">
                      We don't sell personal information in the traditional sense, but sharing data for advertising purposes may be considered 
                      "selling" under some state laws. You can opt out using our <Link to="/do-not-sell" className="text-deep-600 hover:text-deep-700">Do Not Sell or Share</Link> page.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-deep-800 mb-2">How do I stop seeing your ads?</h3>
                    <p className="text-slate-700">
                      Visit <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-deep-600 hover:text-deep-700">Meta Ad Preferences</a> to control Facebook and Instagram ads, 
                      or email us at <a href="mailto:info@hillcopaint.com" className="text-deep-600 hover:text-deep-700">info@hillcopaint.com</a> to opt out of our Custom Audiences.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-deep-800 mb-2">How do I delete my information?</h3>
                    <p className="text-slate-700">
                      Email us at <a href="mailto:info@hillcopaint.com" className="text-deep-600 hover:text-deep-700">info@hillcopaint.com</a> with your deletion request. 
                      We'll verify your identity and delete your information within 30-45 days, subject to legal retention requirements.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-deep-800 mb-2">Do you use my information for anything else?</h3>
                    <p className="text-slate-700">
                      We only use your information for the purposes described in this policy: providing services, improving our website, 
                      advertising, and legal compliance. We don't use it for unrelated purposes without your consent.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-deep-800 mb-2">How can I contact you about privacy?</h3>
                    <p className="text-slate-700">
                      Email us at <a href="mailto:info@hillcopaint.com" className="text-deep-600 hover:text-deep-700">info@hillcopaint.com</a> with any privacy questions, 
                      requests, or concerns. We'll respond as quickly as possible.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-slate-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-deep-900 mb-4">Contact Us About Privacy</h2>
                <p className="text-slate-700 mb-4">
                  If you have questions about this privacy policy or how we handle your information, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-slate-700"><strong>HillCo Paint</strong></p>
                  <p className="text-slate-700">Email: <a href="mailto:info@hillcopaint.com" className="text-deep-600 hover:text-deep-700">info@hillcopaint.com</a></p>
                  <p className="text-slate-700">Website: <a href="https://www.hillcopaint.com" className="text-deep-600 hover:text-deep-700">https://www.hillcopaint.com</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;