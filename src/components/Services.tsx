import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layout,
  ShoppingCart,
  Search,
  Target,
  Share2,
  TrendingUp,
  DollarSign,
  Database,
  X,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import type { ServiceItem } from '../types';

interface ServicesProps {
  onOpenContactModal: () => void;
}

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

export const Services: React.FC<ServicesProps> = ({ onOpenContactModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 px-4 sm:px-8 lg:px-14 bg-[#f8f9fa] dark:bg-[#18181b] border-t border-zinc-200/60 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Column matching Shiftwave .stickyblock */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-[30px] h-[1.5px] bg-[#2563EB]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                Our Services
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-medium leading-[1.25] text-[#222] dark:text-white">
              Leading Digital Marketing Agency & Web Development Company in{' '}
              <span className="text-[#2563EB] font-semibold">India</span>
            </h2>

            <p className="text-sm text-[#666] dark:text-zinc-300 leading-relaxed">
              From strategy to execution, we offer a full range of digital marketing and web development services tailored to help your brand thrive online.
            </p>

            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-[1.5px] border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white font-medium text-sm transition-all duration-300 cursor-pointer"
              >
                <span>All Services</span>
                <span className="text-sm font-bold -rotate-45 inline-block">→</span>
              </Link>
            </div>
          </div>

          {/* Right Scroll Block matching Shiftwave .homeservices & .cardserv */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {SERVICES_DATA.map((service) => {
                const IconComponent = iconMap[service.iconName] || Layout;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className="group relative flex flex-col justify-between p-6 rounded-[12px] bg-white dark:bg-[#1a1a1e] border border-[#e5e5e5] dark:border-zinc-800 hover:border-[#2563EB]/60 hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[240px]"
                  >
                    <div>
                      {/* Red Icon Wrap */}
                      <div className="w-10 h-10 mb-4 text-[#2563EB] flex items-center justify-center">
                        <IconComponent className="w-8 h-8" />
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-semibold text-[#222] dark:text-white group-hover:text-[#2563EB] transition-colors mb-2 leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#666] dark:text-zinc-400 leading-relaxed mb-4">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Circular Red Outline Link Button on Bottom-Right - Direct multi-page link */}
                    <div className="pt-2 flex justify-end">
                      <Link
                        to={`/services/${service.id}`}
                        onClick={(e) => e.stopPropagation()}
                        title={`View ${service.title} details`}
                        className="w-8 h-8 rounded-full border-[1.5px] border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white flex items-center justify-center transition-colors"
                      >
                        <span className="text-xs font-bold -rotate-45 inline-block leading-none">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-white dark:bg-[#1a1a1e] rounded-2xl p-7 shadow-2xl border border-zinc-200 dark:border-zinc-800"
            >
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:text-black dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center">
                  {React.createElement(iconMap[selectedService.iconName] || Layout, {
                    className: 'w-5 h-5',
                  })}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#2563EB]">
                    {selectedService.metrics}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                {selectedService.longDesc}
              </p>

              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                  Core Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-800/60 p-2 rounded-lg border border-zinc-100 dark:border-zinc-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <Link
                  to={`/services/${selectedService.id}`}
                  className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1"
                >
                  <span>View Full Service Page & Scope</span>
                  <span>→</span>
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onOpenContactModal();
                    }}
                    className="px-5 py-2 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-medium uppercase tracking-wider cursor-pointer"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
