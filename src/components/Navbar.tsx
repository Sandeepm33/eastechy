import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
  onOpenMegaMenu: () => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenMegaMenu,
  onOpenContactModal,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVanish, setIsVanish] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll === 0) {
        setIsSticky(false);
        setIsVanish(false);
      } else if (currentScroll < lastScrollTop) {
        setIsSticky(true);
        setIsVanish(false);
      } else {
        setIsSticky(false);
        if (currentScroll > 200) {
          setIsVanish(true);
        }
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = () => location.pathname.startsWith('/services');
  const isIndustriesActive = () => location.pathname.startsWith('/industries');

  const navLinkClass = (active: boolean) =>
    `px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
      active
        ? 'bg-[#2563EB] text-white shadow-sm shadow-[#2563EB]/25 font-semibold'
        : 'text-zinc-700 dark:text-zinc-200 hover:text-[#2563EB] dark:hover:text-blue-400 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVanish ? '-top-28' : 'top-0'
      } ${
        isSticky
          ? 'bg-white/95 dark:bg-[#121214]/95 shadow-sm border-b border-zinc-100 dark:border-zinc-800/60 backdrop-blur-md py-2.5'
          : 'bg-white/98 dark:bg-[#121214]/98 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 xl:gap-6">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="flex items-center gap-2.5 group">
              {/* Eastechy Tech Logo Icon */}
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white font-extrabold shadow-md shadow-[#2563EB]/25 group-hover:scale-105 transition-transform">
                <span className="text-lg font-black tracking-tighter">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#222] dark:text-white leading-none">
                  eas<span className="text-[#2563EB]">techy</span>
                </span>
                <span className="text-[8px] uppercase tracking-widest text-[#777] dark:text-zinc-400 font-semibold mt-0.5">
                  it solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Menubar with real multi-page links - Desktop view */}
          <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 flex-1">
            <Link to="/" className={navLinkClass(isActive('/'))}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/services"
                className={`inline-flex items-center gap-1 ${navLinkClass(
                  isServicesActive()
                )}`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  } ${isServicesActive() ? 'text-white' : 'text-zinc-400 group-hover:text-[#2563EB]'}`}
                />
              </Link>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 pt-2 z-50 w-[270px]"
                  >
                    <div className="bg-white/95 dark:bg-[#1a1a1e]/95 backdrop-blur-md p-2 rounded-2xl shadow-xl shadow-black/10 border border-zinc-200/80 dark:border-zinc-800">
                      {[
                        { title: 'Website Design', path: '/services/web-design' },
                        { title: 'SEO Services', path: '/services/seo-services' },
                        { title: 'Lead Generation Campaigns', path: '/services/lead-generation' },
                        { title: 'Social Media Marketing', path: '/services/social-media' },
                        { title: 'E-Commerce Websites', path: '/services/ecommerce' },
                        { title: 'Conversion Optimization', path: '/services/conversion-optimization' },
                        { title: 'PPC Advertising', path: '/services/ppc-advertising' },
                        { title: 'CRM Solutions', path: '/services/crm-solutions' },
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between py-2 px-3 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#2563EB] dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-950/40 rounded-lg transition-colors group/item"
                        >
                          <span>{item.title}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#2563EB]" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/industries"
                className={`inline-flex items-center gap-1 ${navLinkClass(
                  isIndustriesActive()
                )}`}
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'industries' ? 'rotate-180' : ''
                  } ${isIndustriesActive() ? 'text-white' : 'text-zinc-400 group-hover:text-[#2563EB]'}`}
                />
              </Link>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 pt-2 z-50 w-[260px]"
                  >
                    <div className="bg-white/95 dark:bg-[#1a1a1e]/95 backdrop-blur-md p-2 rounded-2xl shadow-xl shadow-black/10 border border-zinc-200/80 dark:border-zinc-800">
                      {[
                        'Flooring Business',
                        'Real Estate & Infra',
                        'Banking & Financial',
                        'Consumer Goods',
                        'Education & Health Care',
                        'Retail & Manufacturing',
                        'Transportation & Logistics',
                        'Travel & Hospitality',
                      ].map((item, idx) => (
                        <Link
                          key={idx}
                          to="/industries"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between py-2 px-3 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-[#2563EB] dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-950/40 rounded-lg transition-colors group/item"
                        >
                          <span>{item}</span>
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#2563EB]" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Portfolio Link */}
            <Link to="/portfolio" className={navLinkClass(isActive('/portfolio'))}>
              Portfolio
            </Link>

            {/* About Us Link */}
            <Link to="/about-us" className={navLinkClass(isActive('/about-us'))}>
              About Us
            </Link>

            {/* Testimonials */}
            <Link
              to="/testimonials"
              className={navLinkClass(isActive('/testimonials'))}
            >
              Testimonials
            </Link>

            {/* Careers */}
            <Link to="/careers" className={navLinkClass(isActive('/careers'))}>
              Careers
            </Link>

            {/* FAQs */}
            <Link to="/faq" className={navLinkClass(isActive('/faq'))}>
              FAQs
            </Link>

            {/* Contact Us */}
            <Link to="/contact" className={navLinkClass(isActive('/contact'))}>
              Contact Us
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <button
              onClick={onOpenContactModal}
              className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#2563EB]/25 hover:shadow-lg hover:shadow-[#2563EB]/35 hover:-translate-y-0.5 cursor-pointer shrink-0 whitespace-nowrap"
            >
              Book a Call
            </button>

            {/* Hamburger Button - Only visible on mobile/tablet view (< lg) */}
            <button
              onClick={onOpenMegaMenu}
              aria-label="Open navigation menu"
              className="lg:hidden w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-[#2563EB] flex flex-col items-center justify-center gap-1.5 p-2 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-[#2563EB]/10 text-zinc-800 dark:text-white transition-colors cursor-pointer shrink-0"
            >
              <span className="block w-4.5 h-[2px] bg-current rounded-full" />
              <span className="block w-4.5 h-[2px] bg-current rounded-full" />
              <span className="block w-4.5 h-[2px] bg-current rounded-full" />
            </button>

            {/* Theme Toggle Pill Switch (placed at the VERY LAST position) */}
            {onToggleDarkMode && (
              <button
                type="button"
                role="switch"
                aria-checked={darkMode}
                onClick={onToggleDarkMode}
                aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="relative inline-flex items-center w-[58px] h-[30px] rounded-full p-0.5 cursor-pointer shadow-sm select-none transition-colors duration-300 shrink-0 border border-zinc-200/80 dark:border-zinc-700/80"
                style={{
                  backgroundColor: darkMode ? '#2d2d2d' : '#2563EB',
                }}
              >
                <div className="w-full h-full flex items-center justify-between px-1.5 text-[11px] leading-none select-none pointer-events-none">
                  {/* Sun Icon */}
                  <span
                    className={`transition-opacity duration-200 ${
                      darkMode ? 'opacity-30' : 'opacity-100'
                    }`}
                  >
                    ☀️
                  </span>
                  {/* Moon Icon */}
                  <span
                    className={`transition-opacity duration-200 ${
                      darkMode ? 'opacity-100' : 'opacity-30'
                    }`}
                  >
                    🌙
                  </span>
                </div>
                {/* Toggle thumb slider */}
                <div
                  className={`absolute top-[2.5px] left-[3px] w-[25px] h-[25px] rounded-full bg-white shadow-md transition-transform duration-300 pointer-events-none flex items-center justify-center ${
                    darkMode ? 'translate-x-[27px]' : 'translate-x-0'
                  }`}
                >
                  {darkMode ? (
                    <Moon className="w-3 h-3 text-zinc-900 fill-zinc-900" />
                  ) : (
                    <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  )}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
