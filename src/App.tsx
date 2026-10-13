import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MegaMenu } from './components/MegaMenu';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { ScrollToTop } from './components/ScrollToTop';

// Dedicated Multi-Page Routes
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('eastechy_theme') || localStorage.getItem('shiftwave_theme');
      if (savedTheme) return savedTheme === 'dark';
      return false;
    }
    return false;
  });

  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('eastechy_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark');
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('eastechy_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121214] text-[#666] dark:text-[#ddd] font-poppins selection:bg-[#2563EB] selection:text-white transition-colors duration-300">
      {/* Scroll to Top on every route change */}
      <ScrollToTop />

      {/* Header */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenMegaMenu={() => setMegaMenuOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Fullscreen MegaMenu Overlay matching Shiftwave fullmenu */}
      <MegaMenu
        isOpen={megaMenuOpen}
        onClose={() => setMegaMenuOpen(false)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Multi-Page Route Render Area */}
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenContactModal={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/services"
            element={<ServicesPage onOpenContactModal={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/services/:serviceId"
            element={<ServiceDetailPage onOpenContactModal={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/industries"
            element={<IndustriesPage onOpenContactModal={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/portfolio"
            element={<PortfolioPage onOpenContactModal={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/about-us"
            element={<AboutPage onOpenContactModal={() => setContactModalOpen(true)} />}
          />
          <Route
            path="/testimonials"
            element={<TestimonialsPage onOpenContactModal={() => setContactModalOpen(true)} />}
          />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/faq"
            element={<FaqPage onOpenContactModal={() => setContactModalOpen(true)} />}
          />
          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer matching Shiftwave footer */}
      <Footer onOpenContactModal={() => setContactModalOpen(true)} />

      {/* Floating UI: Middle-Left Share Icons, Bottom-Right Get in Touch button */}
      <FloatingWidgets
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Contact Discovery Modal Popup matching Shiftwave contpopfrm */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

export default App;

