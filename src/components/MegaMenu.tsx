import type React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowUpRight,
  ChevronRight,
  Briefcase,
  Layers,
  Sparkles,
  Building,
} from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContactModal: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, onOpenContactModal }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-[#121214]/95 backdrop-blur-xl text-white overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto px-6 py-8 min-h-screen flex flex-col justify-between">
            {/* Top Bar inside MegaMenu */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link to="/" onClick={onClose} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center font-black text-xl text-white shadow-lg shadow-[#2563EB]/30">
                  E
                </div>
                <div>
                  <span className="font-extrabold text-2xl tracking-tight text-white">
                    EAS<span className="text-[#2563EB]">TECHY</span>
                  </span>
                  <span className="block text-[10px] tracking-widest text-zinc-400 uppercase font-semibold">
                    IT Solutions
                  </span>
                </div>
              </Link>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContactModal();
                  }}
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-[#2563EB]/25"
                >
                  Book a Consultation
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
              {/* Column 1: Company */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-5">
                  <Building className="w-4 h-4" />
                  Company
                </div>
                <ul className="space-y-3.5 text-sm">
                  {[
                    { label: 'Home', path: '/' },
                    { label: 'About Us', path: '/about-us' },
                    { label: 'Our Services', path: '/services' },
                    { label: 'Industries We Serve', path: '/industries' },
                    { label: 'Portfolio & Success Stories', path: '/portfolio' },
                    { label: 'Client Testimonials', path: '/testimonials' },
                    { label: 'Careers (We are hiring!)', path: '/careers' },
                    { label: 'Frequently Asked Questions', path: '/faq' },
                    { label: 'Contact Us', path: '/contact' },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="text-zinc-300 hover:text-white hover:translate-x-1.5 transition-all flex items-center justify-between group"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#2563EB] transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Website Services */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-5">
                  <Layers className="w-4 h-4" />
                  Website Services
                </div>
                <ul className="space-y-3.5 text-sm">
                  {[
                    { label: 'Website Design', path: '/services/web-design' },
                    { label: 'E-Commerce Development', path: '/services/ecommerce' },
                    { label: 'CRM System Solutions', path: '/services/crm-solutions' },
                    { label: 'SEO Architecture', path: '/services/seo-services' },
                    { label: 'Lead Generation Campaigns', path: '/services/lead-generation' },
                    { label: 'Social Media Marketing', path: '/services/social-media' },
                    { label: 'PPC Advertising', path: '/services/ppc-advertising' },
                    { label: 'Conversion Optimization', path: '/services/conversion-optimization' },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="text-zinc-300 hover:text-white hover:translate-x-1.5 transition-all flex items-center justify-between group"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#2563EB] transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Industries We Serve */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-5">
                  <Sparkles className="w-4 h-4" />
                  Industries We Serve
                </div>
                <ul className="space-y-3.5 text-sm">
                  {[
                    'Flooring Business',
                    'Real Estate & Infra',
                    'Banking & Financial',
                    'Consumer Goods & FMCG',
                    'Education & Health Care',
                    'Retail & Manufacturing',
                    'Transportation & Logistics',
                    'Travel & Hospitality',
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to="/industries"
                        onClick={onClose}
                        className="text-zinc-300 hover:text-white hover:translate-x-1.5 transition-all flex items-center justify-between group"
                      >
                        <span>{item}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#2563EB] transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Quick Office Info */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563EB] mb-5">
                  <Briefcase className="w-4 h-4" />
                  Pan-India Reach
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    Direct Inquiries (Sandeep)
                  </div>
                  <a
                    href="mailto:murarishettysandeep688@gmail.com"
                    className="block text-white font-medium hover:text-[#2563EB] transition-colors text-xs sm:text-sm break-all"
                  >
                    murarishettysandeep688@gmail.com
                  </a>
                  <a
                    href="tel:+919963887021"
                    className="block text-white font-medium hover:text-[#2563EB] transition-colors text-sm"
                  >
                    +91 99638 87021
                  </a>
                  <div className="text-xs text-zinc-400 leading-snug">
                    Hyderabad • Visakhapatnam • Bengaluru • Mumbai
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
              <div>© 2026 Eastechy IT Solutions. All Rights Reserved.</div>
              <div className="flex items-center gap-4">
                <Link to="/contact" onClick={onClose} className="hover:text-white">
                  Contact Us
                </Link>
                <span>•</span>
                <Link to="/about-us" onClick={onClose} className="hover:text-white">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link to="/faq" onClick={onClose} className="hover:text-white">
                  Site Map
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
