import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import type { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    websiteUrl: '',
    businessType: '',
    companyTurnover: '',
    servicesRequired: ['Website Design'],
    monthlyBudget: '',
    expectedStartDate: '',
    meetingDateTime: '',
    timeZone: 'IST (India Standard Time)',
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
    'CRM & Automation',
    'Other',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(service);
      const updated = exists
        ? prev.servicesRequired.filter((s) => s !== service)
        : [...prev.servicesRequired, service];
      return { ...prev, servicesRequired: updated };
    });
    if (errors.servicesRequired) {
      setErrors((prev) => ({ ...prev, servicesRequired: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    } else if (!/^[0-9+-\s]{7,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone format (e.g. +91 9876543210)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your business email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.businessType) newErrors.businessType = 'Please select your industry type';
    if (!formData.companyTurnover) newErrors.companyTurnover = 'Please select company turnover';
    if (formData.servicesRequired.length === 0) {
      newErrors.servicesRequired = 'Please choose at least one service';
    }
    if (!formData.monthlyBudget) newErrors.monthlyBudget = 'Please choose an estimated budget';
    if (!formData.expectedStartDate) newErrors.expectedStartDate = 'Please select your timeline';
    if (!formData.privacyAgreed) newErrors.privacyAgreed = 'You must accept the privacy policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real backend transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-[#121214] border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#2563EB]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Let’s Build Together
            </span>
            <span className="w-8 h-[2px] bg-[#2563EB]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Get in Touch with <span className="text-[#2563EB]">Eastechy</span>
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Tell us about your project vision, target timeline, and growth goals. Our enterprise IT architects will craft an actionable strategy within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Agency Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-zinc-900 text-white p-7 sm:p-8 space-y-6 shadow-xl border border-zinc-800">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                  Reach Out Directly
                </div>
                <h3 className="text-2xl font-bold">Eastechy IT Solutions</h3>
                <p className="text-xs text-zinc-400">
                  Lead: Sandeep Murarishetty • Serving 4,000+ happy enterprises across India
                </p>
              </div>

              <div className="space-y-4 pt-2 text-sm">
                <a
                  href="mailto:murarishettysandeep688@gmail.com"
                  className="flex items-start gap-3.5 hover:text-[#2563EB] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400 font-medium">Direct Inquiries</div>
                    <div className="font-semibold text-xs sm:text-sm break-all">murarishettysandeep688@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+919963887021"
                  className="flex items-start gap-3.5 hover:text-[#2563EB] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400 font-medium">Direct Hotline / WhatsApp</div>
                    <div className="font-semibold">+91 99638 87021</div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400 font-medium">Headquarters</div>
                    <div className="font-medium text-xs text-zinc-300 leading-relaxed">
                      1st Floor, Saraswathi Villa, near Timpany School ICSE, CBM Compound, Visakhapatnam 530003, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400 font-medium">Working Hours</div>
                    <div className="text-xs text-zinc-300">
                      Mon – Fri: 09:00 AM – 06:30 PM IST (Support Available 24/7)
                    </div>
                  </div>
                </div>
              </div>

              {/* Security note */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-zinc-400">
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                <span>NDA & complete data privacy guaranteed for every submitted project.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Lead-Gen Form */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-white dark:bg-[#1a1a1e] border border-zinc-200/80 dark:border-zinc-800 p-7 sm:p-10 shadow-xl">
              {isSuccess ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    Proposal Request Received!
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-zinc-900 dark:text-white">{formData.fullName}</strong>. Sandeep Murarishetty and the dedicated solution team from Eastechy IT Solutions will analyze your requirements and reach out via {formData.preferredMode} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        email: '',
                        companyName: '',
                        websiteUrl: '',
                        businessType: '',
                        companyTurnover: '',
                        servicesRequired: ['Website Design'],
                        monthlyBudget: '',
                        expectedStartDate: '',
                        meetingDateTime: '',
                        timeZone: 'IST (India Standard Time)',
                        preferredMode: 'virtual-meeting',
                        message: '',
                        privacyAgreed: true,
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sandeep Murarishetty"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border ${
                          errors.fullName ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'
                        } text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 99638 87021"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border ${
                          errors.phoneNumber ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'
                        } text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. murarishettysandeep688@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border ${
                          errors.email ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'
                        } text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Enterprise Solutions"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border ${
                          errors.companyName ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'
                        } text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Website URL & Business Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Website Link (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="https://yourwebsite.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Business Type / Industry *
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border ${
                          errors.businessType ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'
                        } text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]`}
                      >
                        <option value="">Please select</option>
                        <option value="Real Estate">Real Estate & Construction</option>
                        <option value="Flooring Business">Flooring Business</option>
                        <option value="Health Industry">Health Industry & Clinics</option>
                        <option value="Insurance">Insurance & Finance</option>
                        <option value="Retail & Manufacturing">Retail & Manufacturing</option>
                        <option value="Transport & Logistics">Transport & Logistics</option>
                        <option value="Travel & Hospitality">Travel & Hospitality</option>
                        <option value="E-Commerce / FMCG">E-Commerce / Food & FMCG</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.businessType && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.businessType}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Company Turnover & Monthly Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Company Turnover (₹) *
                      </label>
                      <select
                        value={formData.companyTurnover}
                        onChange={(e) => setFormData({ ...formData, companyTurnover: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border ${
                          errors.companyTurnover ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'
                        } text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]`}
                      >
                        <option value="">Please select turnover</option>
                        <option value="Newly Seeded">Newly Seeded / Bootstrapped</option>
                        <option value="Newly Funded">Newly Funded</option>
                        <option value="0CR To 5CR">₹0 CR to ₹5 CR</option>
                        <option value="5CR To 10CR">₹5 CR to ₹10 CR</option>
                        <option value="10 CR to 50 CR and above">₹10 CR to ₹50 CR and above</option>
                      </select>
                      {errors.companyTurnover && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.companyTurnover}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Monthly Budget Allocation (₹) *
                      </label>
                      <select
                        value={formData.monthlyBudget}
                        onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border ${
                          errors.monthlyBudget ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'
                        } text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]`}
                      >
                        <option value="">Please select monthly budget</option>
                        <option value="50k to 1 lakh">₹50,000 to ₹1,00,000</option>
                        <option value="1 lakh to 2 lakh">₹1,00,000 to ₹2,00,000</option>
                        <option value="Above 2 lakhs">Above ₹2,00,000</option>
                      </select>
                      {errors.monthlyBudget && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.monthlyBudget}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Services Required Checkboxes */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                      What services are you looking for? *
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {availableServices.map((service) => {
                        const isChecked = formData.servicesRequired.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => handleServiceToggle(service)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                              isChecked
                                ? 'bg-[#2563EB] text-white shadow-sm'
                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200'
                            }`}
                          >
                            {isChecked ? '✓ ' : '+ '}
                            {service}
                          </button>
                        );
                      })}
                    </div>
                    {errors.servicesRequired && (
                      <p className="text-[11px] text-red-500 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.servicesRequired}
                      </p>
                    )}
                  </div>

                  {/* Row 5: Timeline & Meeting Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        How soon would you like to get started? *
                      </label>
                      <select
                        value={formData.expectedStartDate}
                        onChange={(e) => setFormData({ ...formData, expectedStartDate: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border ${
                          errors.expectedStartDate ? 'border-red-500' : 'border-zinc-200 dark:border-zinc-700'
                        } text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]`}
                      >
                        <option value="">Please select timeline</option>
                        <option value="Immediately">Immediately (Within 7 Days)</option>
                        <option value="15 Days">Within 15 Days</option>
                        <option value="1 Month">Within 1 Month</option>
                        <option value="New Quarter">Upcoming Quarter</option>
                        <option value="Not Sure">Just Exploring Solutions</option>
                      </select>
                      {errors.expectedStartDate && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.expectedStartDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Preferred Date & Time for Call
                      </label>
                      <input
                        type="datetime-local"
                        value={formData.meetingDateTime}
                        onChange={(e) => setFormData({ ...formData, meetingDateTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>

                  {/* Row 6: Timezone & Mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Preferred Time Zone
                      </label>
                      <select
                        value={formData.timeZone}
                        onChange={(e) => setFormData({ ...formData, timeZone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]"
                      >
                        <option>IST (India Standard Time - UTC+5:30)</option>
                        <option>Morning Slot (10:00 AM - 1:00 PM IST)</option>
                        <option>Afternoon Slot (2:00 PM - 5:00 PM IST)</option>
                        <option>Evening Slot (5:00 PM - 8:00 PM IST)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Preferred Meeting Channel
                      </label>
                      <select
                        value={formData.preferredMode}
                        onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]"
                      >
                        <option value="virtual-meeting">Virtual Video Call (Google Meet / Zoom)</option>
                        <option value="call">Direct Phone Call</option>
                        <option value="whatsapp">WhatsApp Business Chat</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 7: Message Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Project Vision / Additional Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your goals, current bottlenecks, or target competitors..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>

                  {/* Privacy Policy agreement */}
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="privacyAgree"
                      checked={formData.privacyAgreed}
                      onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                      className="mt-1 accent-[#2563EB] rounded"
                    />
                    <label htmlFor="privacyAgree" className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug">
                      By submitting this form, you acknowledge our use of your information in accordance with our{' '}
                      <span className="text-[#2563EB] underline">Privacy Policy</span>. We treat all commercial inquiries with strict non-disclosure security.
                    </label>
                  </div>
                  {errors.privacyAgreed && (
                    <p className="text-[11px] text-red-500">{errors.privacyAgreed}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#2563EB]/25 hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting to Strategy Team...
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
