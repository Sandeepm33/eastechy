import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="pt-16 pb-10 px-4 sm:px-8 lg:px-14 border-t border-zinc-200/80 dark:border-zinc-800 bg-[#f8f9fa] dark:bg-[#161619] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Eastechy IT Solutions Logo & Social Follow Us */}
          <div className="lg:col-span-3 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white font-extrabold text-base shadow-sm">
                E
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#222] dark:text-white leading-none">
                  eas<span className="text-[#2563EB]">techy</span>
                </span>
                <span className="text-[8px] uppercase tracking-widest text-[#777] dark:text-zinc-400 font-semibold mt-0.5">
                  it solutions
                </span>
              </div>
            </Link>

            <div className="space-y-3">
              <div className="text-base font-medium text-[#222] dark:text-white">
                Follow Us
              </div>
              <div className="flex items-center gap-2.5">
                {[
                  { name: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
                  { name: 'Facebook', href: 'https://facebook.com', icon: 'FB' },
                  { name: 'X / Twitter', href: 'https://x.com', icon: '𝕏' },
                  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'IN' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white flex items-center justify-center text-xs font-semibold transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold text-[#222] dark:text-white">
              Quick Links
            </h4>
            <div className="space-y-2 text-xs text-[#666] dark:text-zinc-400">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about-us' },
                { label: 'Our Services', path: '/services' },
                { label: 'Industries We Serve', path: '/industries' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'Careers', path: '/careers' },
                { label: 'Testimonials', path: '/testimonials' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'FAQs', path: '/faq' },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="block hover:text-[#2563EB] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Website Services & Digital Marketing */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-[#222] dark:text-white mb-2">
                Website Services
              </h4>
              <div className="space-y-1.5 text-xs text-[#666] dark:text-zinc-400">
                <Link to="/services/web-design" className="block hover:text-[#2563EB]">Website Design</Link>
                <Link to="/services/ecommerce" className="block hover:text-[#2563EB]">E-Commerce Website</Link>
                <Link to="/services/crm-solutions" className="block hover:text-[#2563EB]">CRM System</Link>
                <Link to="/services/lead-generation" className="block hover:text-[#2563EB]">Lead Management</Link>
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-sm font-semibold text-[#222] dark:text-white mb-2">
                Digital Marketing
              </h4>
              <div className="space-y-1.5 text-xs text-[#666] dark:text-zinc-400">
                <Link to="/services/seo-services" className="block hover:text-[#2563EB]">SEO Services</Link>
                <Link to="/services/lead-generation" className="block hover:text-[#2563EB]">Lead Generation Campaigns</Link>
                <Link to="/services/social-media" className="block hover:text-[#2563EB]">Social Media Marketing</Link>
                <Link to="/services/ppc-advertising" className="block hover:text-[#2563EB]">PPC Services</Link>
                <Link to="/services/conversion-optimization" className="block hover:text-[#2563EB]">Conversion Optimization</Link>
              </div>
            </div>
          </div>

          {/* Column 4: Reach out to us anytime */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-medium text-[#2563EB] leading-tight">
              Reach out to us anytime
            </h3>

            <div className="space-y-3 text-xs text-[#666] dark:text-zinc-400">
              <div>
                <a
                  href="mailto:murarishettysandeep688@gmail.com"
                  className="text-sm font-medium text-[#444] dark:text-zinc-200 hover:text-[#2563EB]"
                >
                  murarishettysandeep688@gmail.com
                </a>
              </div>

              <div className="w-48 h-[1px] bg-[#ddd] dark:bg-zinc-800" />

              <div>
                <a
                  href="tel:+919963887021"
                  className="text-xs font-medium text-[#444] dark:text-zinc-200 hover:text-[#2563EB]"
                >
                  <span className="font-bold text-[#2563EB] mr-2">DIRECT / WHATSAPP</span> +91 99638 87021
                </a>
              </div>

              <div className="pt-2 text-[11px] text-[#888] dark:text-zinc-500 leading-relaxed">
                Contact Lead: Sandeep Murarishetty • Hyderabad & Visakhapatnam, India
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-[#ddd] dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888] dark:text-zinc-500">
          <div>
            © 2026 Eastechy IT Solutions. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-[#2563EB]">Contact</Link>
            <span>•</span>
            <Link to="/about-us" className="hover:text-[#2563EB]">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/about-us" className="hover:text-[#2563EB]">Privacy Policy</Link>
            <span>•</span>
            <Link to="/faq" className="hover:text-[#2563EB]">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
