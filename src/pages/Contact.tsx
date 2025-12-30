import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SplitSection from '../components/sections/SplitSection';
import CTABanner from '../components/sections/CTABanner';
import StatsAndTrust from '../components/sections/StatsAndTrust';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    serviceRequested: '',
    howContacted: 'Google',
    message: ''
  };

  const [formData, setFormData] = useState({
    firstName: new URLSearchParams(window.location.search).get('name')?.split(' ')[0] || '',
    lastName: new URLSearchParams(window.location.search).get('name')?.split(' ').slice(1).join(' ') || '',
    email: new URLSearchParams(window.location.search).get('email') || '',
    phone: new URLSearchParams(window.location.search).get('phone') || '',
    streetAddress: '',
    city: '',
    zipCode: '',
    serviceRequested: new URLSearchParams(window.location.search).get('service') || '',
    howContacted: 'Google',
    message: ''
  });

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const limited = cleaned.substring(0, 10);

    if (limited.length <= 3) {
      return limited;
    } else if (limited.length <= 6) {
      return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
    } else {
      return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Map form field names to state field names
    const fieldMapping: {[key: string]: string} = {
      'first_name': 'firstName',
      'last_name': 'lastName',
      'email': 'email',
      'phone': 'phone',
      'address_street': 'streetAddress',
      'address_city': 'city',
      'address_zip': 'zipCode',
      'service': 'serviceRequested',
      'referral_source': 'howContacted',
      'details': 'message'
    };

    const stateFieldName = fieldMapping[name] || name;

    let processedValue = value;
    if (stateFieldName === 'phone') {
      processedValue = formatPhoneNumber(value);
    }

    setFormData({
      ...formData,
      [stateFieldName]: processedValue
    });

    // Clear error when user starts typing
    if (errors[stateFieldName]) {
      setErrors({
        ...errors,
        [stateFieldName]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    // Required field validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const cleaned = formData.phone.replace(/\D/g, '');
      if (cleaned.length !== 10) {
        newErrors.phone = 'Please enter a 10-digit phone number';
      }
    }
    
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = 'Street address is required';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'Zip code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid zip code (e.g., 78701 or 78701-1234)';
    }
    
    if (!formData.serviceRequested) {
      newErrors.serviceRequested = 'Please select a service';
    }
    
    if (!formData.howContacted) {
      newErrors.howContacted = 'Please select how you found us';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }
    
    setIsSubmitting(true);

    // LeadConnector webhook URL
    const webhookUrl = 'https://services.leadconnectorhq.com/hooks/JjaWKzrXNSMtJKXvvZa7/webhook-trigger/6f4cce8e-35cb-470a-916b-342e8856d7db';

    // Create form data for submission
    const form = formRef.current;
    if (form) {
      const formDataToSubmit = new FormData(form);

      // Submit to LeadConnector
      fetch(webhookUrl, {
        method: 'POST',
        body: formDataToSubmit
      }).then((response) => {
        if (response.ok) {
          // Success - redirect to thank you page
          window.location.href = '/thank-you';
        } else {
          throw new Error('Network response was not ok');
        }
      }).catch((error) => {
        console.error('Form submission error:', error);
        alert('There was an error submitting the form. Please try again or call (512) 240-2246.');
      }).finally(() => {
        setIsSubmitting(false);
      });
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact — Hill Country Painting"
        description="Free estimates on interior, exterior, cabinet painting in Austin. Call (512) 240-2246 or request online. Fast response. Insured crew."
        canonical="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
        business={{
          name: 'Hill Country Painting',
          type: 'PaintingContractor',
          telephone: '(512) 240-2246',
          email: 'info@hillcopaint.com',
          address: {
            addressLocality: 'Austin',
            addressRegion: 'TX',
            addressCountry: 'US'
          }
        }}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-6 md:pt-24 md:pb-8 bg-gradient-to-br from-deep-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Award Badge - Left Side */}
            <div className="hidden lg:flex flex-shrink-0">
              <img
                src="/1000032820.jpg"
                alt="Winner Best of Round Rock 2025 Award"
                className="w-40 h-40 object-contain"
                loading="eager"
              />
            </div>

            {/* Content - Center */}
            <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
              <h1 className="text-3xl md:text-4xl font-bold text-deep-900 mb-2">Contact Us</h1>
              <p className="text-base md:text-lg text-slate-600 mb-4">
                Get your free estimate or reach out with any questions about your painting project.
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-deep-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Professional service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Prompt responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Free estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-deep-600 mt-0.5">✓</span>
                  <span className="text-slate-700">Transparent pricing</span>
                </li>
              </ul>
            </div>

            {/* Financing Badge - Right Side */}
            <div className="hidden lg:flex flex-shrink-0">
              <img
                src="/24mo_blue_badge.png"
                alt="Up to 24 months interest-free financing available"
                className="w-60 h-60 object-contain drop-shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pt-8 pb-16 md:pb-20 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Contact Form */}
            <div className="card p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-deep-900 mb-8 text-center">
                Request Free Estimate
              </h2>
              <form
                id="estimateForm"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                {/* Honeypot (spam trap) */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                  aria-hidden="true"
                />

                {/* Optional metadata */}
                <input type="hidden" name="page_url" value={typeof window !== "undefined" ? window.location.href : ""} />
                <input type="hidden" name="site_env" value={typeof window !== "undefined" && window.location.hostname.includes("bolt.host") ? "staging" : "prod"} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="first_name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-500 focus:border-deep-500 transition-colors ${
                        errors.firstName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="last_name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-500 focus:border-deep-500 transition-colors ${
                        errors.lastName ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-500 focus:border-deep-500 transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(512) 555-1234"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-500 focus:border-deep-500 transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="streetAddress" className="block text-sm font-medium text-slate-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="address_street"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-500 focus:border-deep-500 transition-colors ${
                      errors.streetAddress ? 'border-red-500 bg-red-50' : 'border-slate-300'
                    }`}
                    placeholder="123 Main St"
                  />
                  {errors.streetAddress && (
                    <p className="mt-1 text-sm text-red-600">{errors.streetAddress}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="address_city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-500 focus:border-deep-500 transition-colors ${
                        errors.city ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                      placeholder="Round Rock"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-slate-700 mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="address_zip"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-500 focus:border-deep-500 transition-colors ${
                        errors.zipCode ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                      placeholder="78664"
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceRequested" className="block text-sm font-medium text-slate-700 mb-2">
                      Service Requested *
                    </label>
                    <select
                      id="serviceRequested"
                      name="service"
                      value={formData.serviceRequested}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-500 focus:border-deep-500 transition-colors ${
                        errors.serviceRequested ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="Interior">Interior Painting</option>
                      <option value="Exterior">Exterior Painting</option>
                      <option value="Cabinets">Cabinet Painting</option>
                      <option value="Commercial">Commercial Painting</option>
                    </select>
                    {errors.serviceRequested && (
                      <p className="mt-1 text-sm text-red-600">{errors.serviceRequested}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="howContacted" className="block text-sm font-medium text-slate-700 mb-2">
                      How did you find us? *
                    </label>
                    <select
                      id="howContacted"
                      name="referral_source"
                      value={formData.howContacted}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-deep-500 focus:border-deep-500 transition-colors ${
                        errors.howContacted ? 'border-red-500 bg-red-50' : 'border-slate-300'
                      }`}
                    >
                      <option value="Google">Google</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Thumbtack">Thumbtack</option>
                      <option value="Home Advisor">Home Advisor</option>
                      <option value="Social Media Post">Social Media Post</option>
                      <option value="Social Media Ad (Facebook)">Social Media Ad (Facebook)</option>
                      <option value="Vehicle or Door Hanger">Vehicle or Door Hanger</option>
                      <option value="Referral">Referral</option>
                      <option value="Yard Sign">Yard Sign</option>
                    </select>
                    {errors.howContacted && (
                      <p className="mt-1 text-sm text-red-600">{errors.howContacted}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="details"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-deep-500 focus:border-deep-500 transition-colors"
                    placeholder="Tell us about your painting project... (optional)"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </button>
                <p className="text-sm text-slate-600 text-center">
                  We'll respond promptly to schedule your free on-site estimate
                </p>
              </form>

              {/* Financing Section */}
              <style dangerouslySetInnerHTML={{ __html: `
                .container-code-example {
                  z-index: 1;
                  justify-content: space-between;
                  align-items: center;
                  width: 100%;
                  max-width: 1000px;
                  margin-left: auto;
                  margin-right: auto;
                }

                .content-code-example-3 {
                  color: #fff;
                  font-family: Montserrat, Arial, sans-serif;
                  background-color: #156ed7;
                  border-radius: 8px;
                  flex-direction: column;
                  justify-content: center;
                  align-items: flex-start;
                  padding: 32px 32px 40px;
                  display: flex;
                }

                .box-code-example-3 {
                  grid-column-gap: 24px;
                  grid-row-gap: 24px;
                  text-align: left;
                  flex-direction: row;
                  justify-content: space-between;
                  align-items: flex-end;
                  width: 100%;
                  display: flex;
                }

                .column-left-code-example-3 {
                  flex-direction: column;
                  align-items: flex-start;
                  max-width: 65%;
                  display: flex;
                }

                .margin-bot-8-code-example {
                  margin-bottom: 8px;
                }

                .title-code-example-xsmall {
                  margin-top: 0;
                  margin-bottom: 0;
                  font-size: 32px;
                  line-height: 140%;
                }

                .link-white-code-example {
                  color: #fff;
                }

                @media screen and (max-width: 767px) {
                  .content-code-example-3 {
                    padding: 24px;
                  }

                  .column-left-code-example-3 {
                    text-align: center;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    max-width: 100%;
                  }

                  .box-code-example-3 {
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                  }
                }
              ` }} />

              <Link to="/financing" className="container-code-example mt-8 block hover:opacity-90 transition-opacity cursor-pointer">
                <div className="content-code-example-3">
                  <div className="box-code-example-3 flex-col items-center text-center">
                    <img
                      src="https://cdn.prod.website-files.com/5f194315e6b47c1697925302/63ff658aae810ab61d7481f4_logo%20(1).svg"
                      loading="lazy"
                      alt="The white Wisetack logo"
                      className="logo-code-example mb-4"
                      style={{ maxWidth: '200px', margin: '0 auto' }}
                    />
                    <p className="paragraph-code-example-medium text-white text-lg">
                      <span className="link-white-code-example underline">Click to estimate financing</span>
                    </p>
                  </div>
                </div>
              </Link>

              {showModal && (
                <div
                  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40"
                  onClick={() => setShowModal(false)}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="hc-modal-title"
                >
                  <div
                    className="w-[92%] max-w-[520px] rounded-xl bg-white p-6 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 id="hc-modal-title" className="mb-2 text-center text-[22px] font-bold text-slate-900">
                      Request received ✅
                    </h3>
                    <p className="mb-4 text-center text-slate-700">
                      Thanks! Hill Co Painting will contact you soon.
                    </p>
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information Below Form */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-deep-900 mb-4">
              Other Ways to Contact Us
            </h2>
            <p className="text-slate-600">Prefer to call or email? We're here to help.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Phone className="w-6 h-6 text-deep-600 mt-1 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-semibold text-deep-900">Phone</h3>
                  <a href="tel:(512) 240-2246" className="text-deep-600 hover:text-deep-700 transition-colors">
                    (512) 240-2246
                  </a>
                  <p className="text-sm text-slate-600">Prompt response</p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Mail className="w-6 h-6 text-deep-600 mt-1 flex-shrink-0" />
                </div>
                <div>
                  <h3 className="font-semibold text-deep-900">Email</h3>
                  <a href="mailto:info@hillcopaint.com" className="text-deep-600 hover:text-deep-700 transition-colors">
                    info@hillcopaint.com
                  </a>
                  <p className="text-sm text-slate-600">Prompt response</p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="w-6 h-6 text-deep-600 mt-1 flex-shrink-0" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-deep-900">Service Area</h3>
                  <p className="text-slate-700">Austin Metro Area</p>
                  <p className="text-sm text-slate-600">Including all surrounding communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern A: Stats */}
      <StatsAndTrust 
        stats={[
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>,
            value: "Fast",
            label: "Response Time"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>,
            value: "Insured",
            label: "Professional"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>,
            value: "Free",
            label: "Estimates"
          },
          {
            icon: <div className="w-8 h-8 bg-deep-600 rounded-full flex items-center justify-center text-white font-bold">2</div>,
            value: "2-Year",
            label: "Warranty"
          }
        ]}
      />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Get Started?"
        subtitle="Contact us today for your free estimate and let's transform your space"
        primaryCTA={{
          text: 'Call (512) 240-2246',
          href: 'tel:(512) 240-2246'
        }}
        secondaryCTA={{
          text: 'View Gallery',
          href: '/gallery'
        }}
      />
    </>
  );
};

export default Contact;