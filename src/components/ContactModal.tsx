import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import type { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    websiteUrl: '',
    businessType: 'Real Estate',
    companyTurnover: '0CR To 5CR',
    servicesRequired: ['Website Design'],
    monthlyBudget: '1 lakh to 2 lakh',
    expectedStartDate: 'Immediately',
    meetingDateTime: '',
    timeZone: 'IST',
    preferredMode: 'virtual-meeting',
    message: '',
    privacyAgreed: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const availableServices = [
    'SEO',
    'Lead Generation/PPC',
    'Social Media Management',
    'Website Design',
    'E-Commerce',
    'Other',
  ];

  const handleServiceToggle = (s: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(s);
      return {
        ...prev,
        servicesRequired: exists
          ? prev.servicesRequired.filter((item) => item !== s)
          : [...prev.servicesRequired, s],
      };
    });
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Name is required';
    if (!formData.phoneNumber.trim()) errs.phoneNumber = 'Phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email is required';
    }
    if (formData.servicesRequired.length === 0) {
      errs.services = 'Select at least one service';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white dark:bg-[#1a1a1e] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 my-8 max-h-[92vh] flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image & Value Prop (hidden on very small screens) */}
            <div className="hidden md:flex md:w-5/12 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 text-white flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center font-bold text-sm text-white">
                    E
                  </div>
                  <span className="font-extrabold tracking-tight text-lg">
                    EAS<span className="text-[#2563EB]">TECHY</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold leading-tight mb-3">
                  Let's Discuss Your Digital Growth
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Join 4,000+ satisfied businesses that have scaled with Eastechy's enterprise IT development and high-intent acquisition campaigns.
                </p>

                <div className="mt-8 space-y-3 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span>Free 30-minute discovery with Sandeep</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span>Custom website & IT architecture audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span>Transparent timeline & budget roadmap</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-1 text-[11px] text-zinc-400">
                <div>Direct Hotline / WhatsApp: +91 99638 87021</div>
                <div>Direct Email: murarishettysandeep688@gmail.com</div>
              </div>
            </div>

            {/* Right Form Container */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 overflow-y-auto max-h-[85vh]">
              <div className="mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB]">
                  Schedule Discovery Session
                </span>
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Get in Touch with Us
                </h4>
              </div>

              {isSuccess ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h5 className="font-bold text-xl text-zinc-900 dark:text-white">
                    Request Received!
                  </h5>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                    Thank you! An account manager will reach out within 24 hours to schedule your strategy session.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2 rounded-full bg-[#2563EB] text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]"
                      />
                      {errors.fullName && <p className="text-[10px] text-red-500">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 93913 42993"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]"
                      />
                      {errors.phoneNumber && <p className="text-[10px] text-red-500">{errors.phoneNumber}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]"
                      />
                      {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>

                  {/* Services pills */}
                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Required Services *
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {availableServices.map((s) => {
                        const isSelected = formData.servicesRequired.includes(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => handleServiceToggle(s)}
                            className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${
                              isSelected
                                ? 'bg-[#2563EB] text-white'
                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                        Monthly Budget
                      </label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none"
                      >
                        <option>50k to 1 lakh</option>
                        <option>1 lakh to 2 lakh</option>
                        <option>Above 2 lakhs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                        Timeline
                      </label>
                      <select
                        value={formData.expectedStartDate}
                        onChange={(e) => setFormData({ ...formData, expectedStartDate: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none"
                      >
                        <option>Immediately</option>
                        <option>15 Days</option>
                        <option>1 Month</option>
                        <option>New Quarter</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                      Brief Message
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us what you'd like to achieve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md shadow-[#2563EB]/20 flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? 'Transmitting...' : 'Schedule My Discovery Session'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
