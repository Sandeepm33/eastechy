import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { SERVICES_DATA, TESTIMONIALS_DATA } from '../data/siteData';
import {
  Layout,
  ShoppingCart,
  Search,
  Target,
  Share2,
  TrendingUp,
  DollarSign,
  Database,
  CheckCircle2,
  ArrowRight,
  Quote,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layout,
  ShoppingCart,
  Search,
  Target,
  Share2,
  TrendingUp,
  DollarSign,
  Database,
};

interface ServicesPageProps {
  onOpenContactModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContactModal }) => {
  const [filter, setFilter] = useState<'all' | 'web' | 'marketing' | 'tech'>('all');

  const filteredServices =
    filter === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === filter);

  const featuredTestimonial = TESTIMONIALS_DATA[0];

  return (
    <div className="bg-white dark:bg-[#121214] text-zinc-700 dark:text-zinc-300">
      <PageHeader
        title="Our Services & Digital Capabilities"
        subtitle="From enterprise web design and custom ecommerce stores to high-impact SEO, PPC, and CRM automation funnels, explore our full spectrum of growth solutions."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Trust & Authority Ribbon */}
      <section className="border-b border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 py-6 px-4 sm:px-8 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '19+ Years', label: 'Continuous Industry Leadership' },
            { value: '4,000+', label: 'Successful Project Launches' },
            { value: '98.4%', label: 'Long-Term Client Retention' },
            { value: '20+ Verticals', label: 'Cross-Industry Experience' },
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
        {/* Category Filter Pills & Cards Grid */}
        <section className="space-y-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-200/70 dark:border-zinc-800 pb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Explore Core Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Filter by service discipline to find the exact growth driver for your business.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Services (8)' },
                { id: 'web', label: 'Web & E-Commerce' },
                { id: 'marketing', label: 'Performance Marketing' },
                { id: 'tech', label: 'CRO & CRM' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    filter === cat.id
                      ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/25 font-bold'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-[#2563EB]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = iconMap[service.iconName] || Layout;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-[#1a1a1e] p-8 flex flex-col justify-between hover:shadow-2xl hover:border-[#2563EB]/60 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-105 transition-all shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold text-[#2563EB] bg-[#2563EB]/10 dark:bg-[#2563EB]/20 px-3 py-1 rounded-full">
                        {service.metrics}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#2563EB] transition-colors mb-3">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                      {service.longDesc}
                    </p>

                    <div className="space-y-2.5 mb-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                        Key Deliverables
                      </div>
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <Link
                      to={`/services/${service.id}`}
                      className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1 group/link"
                    >
                      <span>Explore Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={onOpenContactModal}
                      className="px-4 py-2 rounded-full bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8] transition-colors shadow-sm cursor-pointer"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Lifecycle Engagement Framework (4 Steps) */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              The Growth Lifecycle
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              How We Partner With Your Team
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              A proven four-stage methodology engineered to eliminate risk, maintain velocity, and scale output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Strategic Audit & Blueprint',
                desc: 'Comprehensive analysis of existing tech infrastructure, competitor positioning, and customer acquisition bottlenecks.',
              },
              {
                step: '02',
                title: 'Architecture & Prototyping',
                desc: 'Figma interactive prototypes, technical schema design, and milestone SLA roadmap approvals.',
              },
              {
                step: '03',
                title: 'High-Velocity Sprints',
                desc: 'Rapid development and campaign staging with weekly video demos and dedicated Slack/Teams collaboration.',
              },
              {
                step: '04',
                title: 'Analytics & Scaling',
                desc: 'Continuous conversion optimization, Core Web Vitals maintenance, and algorithmic ad scaling.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 space-y-4 hover:border-[#2563EB] transition-colors"
              >
                <div className="text-3xl font-black text-[#2563EB]/30">{step.step}</div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Technology Ecosystem Showcase */}
        <section className="p-8 sm:p-12 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-zinc-200/70 dark:border-zinc-800 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                Enterprise Stack
              </span>
              <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-1">
                Technologies & Platforms We Deploy
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
              We leverage modern, industry-standard frameworks and certified toolings to ensure stability, speed, and security.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { name: 'React / Next.js', tag: 'Web & Apps' },
              { name: 'Shopify Plus', tag: 'E-Commerce' },
              { name: 'Google Ads & GA4', tag: 'PPC & Analytics' },
              { name: 'Meta Business API', tag: 'Paid Social' },
              { name: 'HubSpot & Zoho', tag: 'CRM Automation' },
              { name: 'Tailwind & TypeScript', tag: 'Modern Code' },
            ].map((tech, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-[#1a1a1e] border border-zinc-200/70 dark:border-zinc-800 shadow-sm hover:border-[#2563EB] transition-colors"
              >
                <div className="text-xs font-bold text-zinc-900 dark:text-white">
                  {tech.name}
                </div>
                <div className="text-[10px] text-[#2563EB] font-semibold mt-1">
                  {tech.tag}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Client Testimonial Spotlight */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 text-white relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#2563EB]/20 text-[#2563EB] flex items-center justify-center mx-auto">
              <Quote className="w-6 h-6" />
            </div>
            <p className="text-base sm:text-xl text-zinc-200 font-medium leading-relaxed italic">
              "{featuredTestimonial.quote}"
            </p>
            <div className="space-y-1">
              <div className="text-sm font-bold text-white">
                {featuredTestimonial.name}
              </div>
              <div className="text-xs text-[#2563EB] font-semibold">
                {featuredTestimonial.role} — {featuredTestimonial.company}
              </div>
              <div className="text-[11px] text-zinc-400">
                Services Delivered: {featuredTestimonial.services}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Bespoke Growth Package CTA */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#2563EB] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-[#2563EB]/25">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Need a Tailored Multi-Service Solution?
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              We engineer integrated annual growth retainers combining bespoke website engineering, high-intent SEO, paid search, and CRM pipeline automation.
            </p>
          </div>
          <button
            onClick={onOpenContactModal}
            className="px-8 py-4 rounded-full bg-white hover:bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider shrink-0 transition-transform hover:scale-105 shadow-lg shadow-black/10 cursor-pointer"
          >
            Request Custom Scope & Audit
          </button>
        </section>
      </div>
    </div>
  );
};
