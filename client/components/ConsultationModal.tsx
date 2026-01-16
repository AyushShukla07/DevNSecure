'use client';

import { useState, useEffect } from 'react';

interface FormErrors {
  email?: string;
  whatsapp?: string;
}

// Email validation function
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// WhatsApp validation function (non-empty, at least 7 digits)
const isValidWhatsApp = (whatsapp: string): boolean => {
  const cleaned = whatsapp.replace(/\D/g, '');
  return cleaned.length >= 7;
};

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    email: '',
    whatsapp: '',
    projectContext: '',
  });

  // Listen for open modal events
  useEffect(() => {
    const handleOpenConsultation = () => {
      setIsOpen(true);
      setSubmitted(false);
      setError(null);
      setFormData({ email: '', whatsapp: '', projectContext: '' });
    };

    document.addEventListener('open-consultation', handleOpenConsultation);
    return () => document.removeEventListener('open-consultation', handleOpenConsultation);
  }, []);

  // Close on Esc key and manage body scroll
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate WhatsApp
    if (!formData.whatsapp.trim()) {
      errors.whatsapp = 'WhatsApp number is required';
    } else if (!isValidWhatsApp(formData.whatsapp)) {
      errors.whatsapp = 'Please enter a valid WhatsApp number (at least 7 digits)';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Validate before submitting
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          whatsapp: formData.whatsapp.trim(),
          projectContext: formData.projectContext.trim() || '',
          source: 'Website Consultation Form',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      setSubmitted(true);
      setIsSubmitting(false);
      // Do NOT auto-close - user must manually close
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Container - Centered, Floating */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-devnsecure-charcoal border border-devnsecure-charcoal/50 rounded-lg max-w-xl w-full shadow-2xl flex flex-col max-h-[75vh] pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fixed Header with Close Button */}
          <div className="flex items-start justify-between p-6 md:p-8 border-b border-[#26262C] flex-shrink-0">
            <div className="flex-1 pr-4">
              <h2 className="text-2xl md:text-3xl font-bold text-devnsecure-white mb-1">
                Start a Secure Build
              </h2>
              <p className="text-gray-400 text-sm">
                Share a few details. We'll respond with clarity — not pressure.
              </p>
            </div>
            {/* Close Button - Sticky, Always Visible */}
            <button
              onClick={() => setIsOpen(false)}
              className="flex-shrink-0 text-gray-400 hover:text-devnsecure-teal transition-colors focus:outline-none focus:ring-2 focus:ring-devnsecure-teal/50 rounded p-1"
              aria-label="Close consultation form"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content Area */}
          <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-devnsecure-teal/40 scrollbar-track-transparent">
            <div className="p-6 md:p-8">
              {!submitted ? (
                <>
                  {error && (
                    <div className="mb-5 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Form */}
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full bg-devnsecure-black border rounded px-3 py-2.5 text-devnsecure-white text-sm placeholder-gray-600 focus:outline-none focus:ring-1 transition-all duration-300 disabled:opacity-50 ${
                          formErrors.email
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-devnsecure-charcoal/50 focus:border-devnsecure-teal focus:ring-devnsecure-teal/20'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-xs mt-1.5">{formErrors.email}</p>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        placeholder="+91XXXXXXXXXX"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full bg-devnsecure-black border rounded px-3 py-2.5 text-devnsecure-white text-sm placeholder-gray-600 focus:outline-none focus:ring-1 transition-all duration-300 disabled:opacity-50 ${
                          formErrors.whatsapp
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-devnsecure-charcoal/50 focus:border-devnsecure-teal focus:ring-devnsecure-teal/20'
                        }`}
                      />
                      {formErrors.whatsapp && (
                        <p className="text-red-400 text-xs mt-1.5">{formErrors.whatsapp}</p>
                      )}
                    </div>

                    {/* Project Context */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                        Project Context (Optional)
                      </label>
                      <textarea
                        name="projectContext"
                        placeholder="What are you building or improving? (optional)"
                        rows={3}
                        value={formData.projectContext}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full bg-devnsecure-black border border-devnsecure-charcoal/50 rounded px-3 py-2.5 text-devnsecure-white text-sm placeholder-gray-600 focus:outline-none focus:border-devnsecure-teal focus:ring-1 focus:ring-devnsecure-teal/20 transition-all duration-300 resize-none disabled:opacity-50"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-2.5 border-2 border-devnsecure-teal text-devnsecure-teal font-semibold text-xs uppercase tracking-widest rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:enabled:bg-devnsecure-teal hover:enabled:text-devnsecure-black hover:enabled:shadow-lg hover:enabled:shadow-devnsecure-teal/30"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Request'}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 space-y-6">
                  <div>
                    <div className="mb-4">
                      <svg className="w-12 h-12 text-devnsecure-teal mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-gray-100 text-lg font-semibold mb-2">
                      Your request has been sent.
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Our engineers will reach out shortly. We've received your details and will respond with clarity — not pressure.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full px-6 py-2.5 border-2 border-devnsecure-teal text-devnsecure-teal font-semibold text-xs uppercase tracking-widest rounded transition-all duration-300 hover:bg-devnsecure-teal hover:text-devnsecure-black hover:shadow-lg hover:shadow-devnsecure-teal/30"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
