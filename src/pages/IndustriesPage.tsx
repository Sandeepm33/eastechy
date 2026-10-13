import React from 'react';
import { PageHeader } from '../components/PageHeader';
import {
  Building,
  HeartPulse,
  ShoppingBag,
  Utensils,
  Home,
  Truck,
  Plane,
  Coins,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  Sparkles,
  Layers,
} from 'lucide-react';

interface IndustriesPageProps {
  onOpenContactModal: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenContactModal }) => {
  const industries = [
    {
      id: 'flooring',
      name: 'Flooring & Home Services',
      icon: Home,
      stat: '4.8x Lead Volume',
      desc: 'High-intent search funnels, localized Google Maps optimization, and instant quote booking for flooring and interior businesses across India.',
      solutions: ['Zip code targeted PPC campaigns', 'Instant square footage quote calculators', 'Before/after visual portfolio showcases'],
    },
    {
      id: 'real-estate',
      name: 'Real Estate & Infrastructure',
      icon: Building,
      stat: '₹45Cr+ Inquiries',
      desc: 'High-converting property launches, 3D floor plan virtual walkthroughs, and automated buyer qualification funnels for builders and developers.',
      solutions: ['Interactive master plan & floor plan viewers', 'Automated site visit scheduling via CRM', 'High-net-worth investor Facebook/Meta targeting'],
    },
    {
      id: 'healthcare',
      name: 'Education & Health Care',
      icon: HeartPulse,
      stat: '98% Appointment Rate',
      desc: 'HIPAA & privacy-compliant patient acquisition funnels, doctor scheduling integrations, and localized medical SEO.',
      solutions: ['Specialty treatment landing page funnels', 'Verified online consultation booking', 'Reputation management & Google review workflows'],
    },
    {
      id: 'retail',
      name: 'Retail & Consumer Goods',
      icon: ShoppingBag,
      stat: '3.8x ROAS Average',
      desc: 'Omni-channel footfall drivers, catalog synchronization, dynamic Google Shopping ads, and localized retail promotions.',
      solutions: ['In-store inventory locator maps', 'Festival & promotional flash sale funnels', 'WhatsApp loyalty retention drip sequences'],
    },
    {
      id: 'food',
      name: 'Food & Hospitality',
      icon: Utensils,
      stat: '2.4M+ Impressions',
      desc: 'Viral visual reels, digital table reservation funnels, influencer tasting campaigns, and automated Google Business review generation.',
      solutions: ['Direct table reservation integrations', 'Local foodie influencer collaborations', 'Hyper-local geo-fenced Instagram ads'],
    },
    {
      id: 'logistics',
      name: 'Transportation & Logistics',
      icon: Truck,
      stat: 'Enterprise Contracts',
      desc: 'B2B supply chain lead generation, commercial fleet software integration, and high-ticket freight forwarding acquisition.',
      solutions: ['Route-specific freight quote forms', 'Account-Based Marketing for supply chain heads', 'LinkedIn B2B decision-maker outreach'],
    },
    {
      id: 'banking',
      name: 'Banking & Financial Services',
      icon: Coins,
      stat: 'Bank-Grade Security',
      desc: 'Secure lead qualification funnels, financial calculator tools, and regulatory-compliant wealth management campaigns.',
      solutions: ['EMI & loan eligibility simulators', 'Bank-grade encrypted lead capture', 'Audience segmentation by credit intent'],
    },
    {
      id: 'travel',
      name: 'Travel & Hospitality',
      icon: Plane,
      stat: 'Direct Room Bookings',
      desc: 'Zero-commission hotel booking engines, visual resort galleries, and seasonal itinerary landing pages that maximize direct occupancy.',
      solutions: ['Dynamic seasonal rate calendars', 'Virtual resort tour integrations', 'Google Hotel Ads campaign management'],
    },
  ];

  return (
    <div className="bg-white dark:bg-[#121214] text-zinc-700 dark:text-zinc-300">
      <PageHeader
        title="Industries We Serve"
        subtitle="We deliver industry-specific digital marketing strategies, custom software integrations, and targeted acquisition funnels tailored to the nuances of your business vertical."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Industries' },
        ]}
      />

      {/* Trust & Scale Stats Ribbon */}
      <section className="border-b border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 py-6 px-4 sm:px-8 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '20+ Verticals', label: 'Domain Expertise' },
            { value: '$100M+', label: 'Attributed Pipeline' },
            { value: '100% Compliant', label: 'Regulatory Standards' },
            { value: 'Pan-India Reach', label: 'Nationwide Delivery' },
          ].map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-xl sm:text-2xl font-black text-[#2563EB] tracking-tight">
                {item.value}
              </div>
              <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="py-16 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto space-y-24">
        {/* Section 1: Industry Cards Grid */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Tailored Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Specialized Strategies for Every Sector
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              One-size-fits-all digital marketing fails. We engineer acquisition models adapted to the exact buying behavior of your market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-[#1a1a1e] p-6 flex flex-col justify-between hover:border-[#2563EB] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-105 transition-all shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 dark:bg-[#2563EB]/20 px-2.5 py-1 rounded-full">
                        {ind.stat}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-[#2563EB] transition-colors mb-2">
                      {ind.name}
                    </h3>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                      {ind.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                      {ind.solutions.map((sol, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-1.5 text-[11px] text-zinc-700 dark:text-zinc-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={onOpenContactModal}
                      className="w-full py-2.5 rounded-full border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                    >
                      Discuss Vertical Needs
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Why Vertical Specialization Matters (4 Pillars) */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              The Eastechy Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Why Domain Specificity Wins
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Generic marketing agencies waste money on trial and error. We apply pre-validated models specific to your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Nuanced Buyer Psychology',
                desc: 'We understand the specific objections, procurement cycles, and decision triggers unique to your buyers.',
                icon: Target,
              },
              {
                title: 'Pre-Built Industry Funnels',
                desc: 'Access tested landing page structures and qualification calculators that consistently produce high conversion rates.',
                icon: Layers,
              },
              {
                title: 'Regulatory & Data Compliance',
                desc: 'Strict compliance with industry standards including HIPAA for healthcare, PCI-DSS for retail, and GDPR for global B2B.',
                icon: ShieldCheck,
              },
              {
                title: 'Niche Tech Integrations',
                desc: 'Native integrations with vertical CRMs like Propertybase, Practo, Shopify Plus, and Salesforce Financial Cloud.',
                icon: Sparkles,
              },
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {col.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {col.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 3: Vertical Consultation CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#2563EB] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-[#2563EB]/25">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Don’t See Your Exact Vertical Listed?
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              In 19+ years, we have built digital infrastructure for over 20 major industry verticals. Schedule a consultation to explore how our cross-industry playbooks can scale your market share.
            </p>
          </div>
          <button
            onClick={onOpenContactModal}
            className="px-8 py-4 rounded-full bg-white hover:bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider shrink-0 transition-transform hover:scale-105 shadow-lg shadow-black/10 cursor-pointer flex items-center gap-2"
          >
            <span>Book Industry Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </div>
    </div>
  );
};
