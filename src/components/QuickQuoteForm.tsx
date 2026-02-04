import React, { useState } from 'react';
import { Phone, Palette, Home } from 'lucide-react';

interface QuickQuoteFormProps {
  service?: string;
  className?: string;
}

const QuickQuoteForm = ({ service = 'Painting Services', className = '' }: QuickQuoteFormProps) => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: service
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const params = new URLSearchParams({
      service: formData.service,
      name: formData.name,
      phone: formData.phone,
      email: formData.email
    });
    window.location.href = `/contact?${params.toString()}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <div className={`bg-gradient-to-br from-brand-azureDark to-brand-gray-800 rounded-2xl p-8 shadow-2xl ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
          <Palette className="w-8 h-8 text-white" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Get Project Evaluation</h3>
        <p className="text-white/90">Quick estimate for your Austin project</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label htmlFor="quote-name" className="sr-only">
            Your Name
          </label>
          <input
            type="text"
            id="quote-name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'quote-name-error' : undefined}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:border-brand-azure"
          />
          {errors.name && (
            <p id="quote-name-error" className="mt-1 text-sm text-white/80" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-phone" className="sr-only">
            Phone Number
          </label>
          <input
            type="tel"
            id="quote-phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'quote-phone-error' : undefined}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:border-brand-azure"
          />
          {errors.phone && (
            <p id="quote-phone-error" className="mt-1 text-sm text-white/80" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="quote-email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'quote-email-error' : undefined}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:border-brand-azure"
          />
          {errors.email && (
            <p id="quote-email-error" className="mt-1 text-sm text-white/80" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-service" className="sr-only">
            Select Service
          </label>
          <select
            id="quote-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            aria-label="Select painting service"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-azure focus:border-brand-azure [&>option]:text-brand-azureDark [&>option]:bg-white"
          >
            <option value="Interior Painting">Interior Painting</option>
            <option value="Exterior Painting">Exterior Painting</option>
            <option value="Cabinet Painting">Cabinet Painting</option>
            <option value="Commercial Painting">Commercial Painting</option>
            <option value="Color Consultation">Color Consultation</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-white text-brand-azureDark font-semibold py-4 px-6 rounded-lg hover:bg-brand-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2 focus:ring-offset-brand-azureDark"
        >
          <Home className="w-5 h-5" aria-hidden="true" />
          <span>Get Consultation</span>
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="text-center">
          <div className="flex justify-center gap-4 text-white/90 text-sm font-medium">
            <span>350+ Projects</span>
            <span>Insured</span>
            <span>2-Year Warranty</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <a
          href="tel:(512)240-2246"
          className="inline-flex items-center text-white/90 hover:text-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-brand-azure focus:ring-offset-2 focus:ring-offset-brand-azureDark rounded px-2 py-1"
        >
          <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
          Or call (512) 240-2246
        </a>
      </div>
    </div>
  );
};

export default QuickQuoteForm;
