import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service — Hill Country Painting"
        description="Terms of service for Hill Country Painting. Review our service terms, conditions, and policies for painting services in the Austin area."
        canonical="/terms"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Terms of Service', url: '/terms' }
        ]}
      />

      <div className="min-h-screen bg-white">
        <section className="section-padding bg-gradient-to-br from-deep-50 to-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-deep-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-slate-600">Last Updated: January 2, 2026</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the services of Hill Country Painting ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>Services</h2>
            <p>
              Hill Country Painting provides professional painting services including but not limited to:
            </p>
            <ul>
              <li>Interior painting</li>
              <li>Exterior painting</li>
              <li>Cabinet painting</li>
              <li>Commercial painting</li>
            </ul>
            <p>
              All services are subject to availability and acceptance by Hill Country Painting. We reserve the right to refuse service to anyone for any reason at any time.
            </p>

            <h2>Estimates and Quotes</h2>
            <p>
              All estimates and quotes provided are approximations based on the information available at the time. Final pricing may vary based on:
            </p>
            <ul>
              <li>Actual condition of surfaces to be painted</li>
              <li>Additional preparation work required</li>
              <li>Changes in project scope</li>
              <li>Unforeseen complications or repairs needed</li>
            </ul>
            <p>
              We will communicate any significant changes in pricing before proceeding with work.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Payment terms will be outlined in your service agreement. Typical payment structure:
            </p>
            <ul>
              <li>Deposit may be required to schedule work</li>
              <li>Progress payments may be requested for larger projects</li>
              <li>Final payment is due upon project completion</li>
            </ul>
            <p>
              We accept payment via check, cash, or electronic transfer as specified in your service agreement.
            </p>

            <h2>Cancellation and Rescheduling</h2>
            <p>
              If you need to cancel or reschedule your painting project:
            </p>
            <ul>
              <li>Please provide at least 48 hours notice when possible</li>
              <li>Deposits may be non-refundable if materials have been purchased</li>
              <li>Cancellation fees may apply if work has already commenced</li>
            </ul>

            <h2>Warranty</h2>
            <p>
              Hill Country Painting provides a 2-year warranty on workmanship for all painting services. This warranty covers:
            </p>
            <ul>
              <li>Peeling or blistering due to improper application</li>
              <li>Paint failure resulting from our workmanship</li>
            </ul>
            <p>
              The warranty does not cover:
            </p>
            <ul>
              <li>Normal wear and tear</li>
              <li>Damage from external factors (weather, moisture, settling)</li>
              <li>Damage caused by homeowner or third parties</li>
              <li>Surfaces not properly maintained</li>
              <li>Color fading due to sun exposure (normal for all paint)</li>
            </ul>

            <h2>Property Access and Preparation</h2>
            <p>
              The client agrees to:
            </p>
            <ul>
              <li>Provide clear access to work areas</li>
              <li>Remove or protect valuable items and furniture</li>
              <li>Secure pets during work hours</li>
              <li>Provide access to electricity and water as needed</li>
              <li>Inform us of any hazards or special conditions</li>
            </ul>

            <h2>Liability</h2>
            <p>
              Hill Country Painting carries appropriate insurance for painting services. However:
            </p>
            <ul>
              <li>We are not liable for damage to improperly secured items</li>
              <li>Pre-existing damage will be noted and is not our responsibility</li>
              <li>We recommend removing or properly protecting all valuables</li>
              <li>Client is responsible for securing pets and ensuring safe access</li>
            </ul>

            <h2>Changes to Project Scope</h2>
            <p>
              Any changes to the agreed-upon scope of work must be documented in writing. Additional work will be quoted separately and requires approval before proceeding.
            </p>

            <h2>Weather and Delays</h2>
            <p>
              For exterior painting projects, weather conditions may cause delays. We will:
            </p>
            <ul>
              <li>Monitor weather forecasts and plan accordingly</li>
              <li>Communicate any necessary schedule changes promptly</li>
              <li>Resume work as soon as conditions are suitable</li>
            </ul>
            <p>
              Weather-related delays are beyond our control and do not constitute a breach of agreement.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              In the event of any dispute, both parties agree to:
            </p>
            <ul>
              <li>Attempt to resolve the matter through direct communication</li>
              <li>Document all concerns in writing</li>
              <li>Allow reasonable opportunity for corrective action</li>
            </ul>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of Texas. Any disputes will be resolved in the appropriate courts of Travis County, Texas.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of modified terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <p>
              <strong>Hill Country Painting</strong><br />
              Phone: <a href="tel:(512)240-2246">(512) 240-2246</a><br />
              Email: <a href="mailto:info@hillcopaint.com">info@hillcopaint.com</a>
            </p>

            <div className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Consultation
                </Link>
                <a href="tel:(512)240-2246" className="btn-outline">
                  Call (512) 240-2246
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;
