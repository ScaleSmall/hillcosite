import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const EULA = () => {
  return (
    <>
      <SEO
        title="End User License Agreement — Hill Country Painting"
        description="End User License Agreement for Hill Country Painting website and services. Review our terms for website usage and digital services."
        canonical="/eula"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'EULA', url: '/eula' }
        ]}
      />

      <div className="min-h-screen bg-white">
        <section className="section-padding bg-brand-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-brand-gray-900 mb-4">End User License Agreement</h1>
            <p className="text-lg text-brand-gray-600">Last Updated: January 31, 2026</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              This End User License Agreement ("Agreement") is between you and Hill Country Painting ("Company," "we," "our," or "us") regarding your use of our website and digital services. By accessing or using our website, you agree to be bound by this Agreement.
            </p>

            <h2>License Grant</h2>
            <p>
              Subject to your compliance with this Agreement, Hill Country Painting grants you a limited, non-exclusive, non-transferable, revocable license to access and use our website for personal, non-commercial purposes.
            </p>

            <h2>Acceptable Use</h2>
            <p>
              You agree to use our website only for lawful purposes and in accordance with this Agreement. You agree not to:
            </p>
            <ul>
              <li>Use the website in any way that violates any applicable law or regulation</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Interfere with or disrupt the website or servers connected to the website</li>
              <li>Use any automated means to access the website for any purpose without our express written permission</li>
              <li>Copy, modify, or distribute any content from the website without authorization</li>
            </ul>

            <h2>Intellectual Property Rights</h2>
            <p>
              The website and its entire contents, features, and functionality are owned by Hill Country Painting and are protected by copyright, trademark, and other intellectual property laws. This includes but is not limited to:
            </p>
            <ul>
              <li>Text, graphics, logos, and images</li>
              <li>Software and code</li>
              <li>Design, layout, and compilation</li>
              <li>Trademarks and service marks</li>
            </ul>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, republish, download, store, or transmit any material from our website without prior written consent.
            </p>

            <h2>User-Generated Content</h2>
            <p>
              Any content you submit through our website, including but not limited to contact forms, reviews, or testimonials, grants us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display such content for business purposes.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by Hill Country Painting. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              The website is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to:
            </p>
            <ul>
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the website will be uninterrupted or error-free</li>
              <li>Warranties regarding the accuracy or reliability of any information obtained through the website</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Hill Country Painting shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the website</li>
              <li>Any conduct or content of any third party on the website</li>
              <li>Any content obtained from the website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Hill Country Painting and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the website or your violation of this Agreement.
            </p>

            <h2>Privacy</h2>
            <p>
              Your use of the website is also governed by our <Link to="/privacy" className="text-brand-azure hover:text-brand-azureDark">Privacy Policy</Link>. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>

            <h2>Modifications to Agreement</h2>
            <p>
              We reserve the right to modify this Agreement at any time. We will notify users of any material changes by updating the "Last Updated" date at the top of this Agreement. Your continued use of the website after such modifications constitutes your acceptance of the updated Agreement.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to the website immediately, without prior notice or liability, for any reason, including if you breach this Agreement. Upon termination, your right to use the website will immediately cease.
            </p>

            <h2>Governing Law</h2>
            <p>
              This Agreement shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any legal action or proceeding arising under this Agreement shall be brought exclusively in the courts located in Travis County, Texas.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of this Agreement is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that this Agreement shall otherwise remain in full force and effect.
            </p>

            <h2>Entire Agreement</h2>
            <p>
              This Agreement, together with our <Link to="/privacy" className="text-brand-azure hover:text-brand-azureDark">Privacy Policy</Link> and <Link to="/terms" className="text-brand-azure hover:text-brand-azureDark">Terms of Service</Link>, constitutes the entire agreement between you and Hill Country Painting regarding the use of the website.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about this End User License Agreement, please contact us:
            </p>
            <ul>
              <li>By email: info@hillcopaint.com</li>
              <li>By phone: (512) 240-2246</li>
              <li>By visiting our <Link to="/contact" className="text-brand-azure hover:text-brand-azureDark">contact page</Link></li>
            </ul>

            <div className="mt-8 p-6 bg-brand-gray-50 rounded-lg border-l-4 border-brand-azure">
              <h3 className="text-xl font-bold text-brand-gray-900 mb-2">Related Documents</h3>
              <div className="space-y-2">
                <Link to="/terms" className="block text-brand-azure hover:text-brand-azureDark">
                  Terms of Service
                </Link>
                <Link to="/privacy" className="block text-brand-azure hover:text-brand-azureDark">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EULA;
