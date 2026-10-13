import type React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { Process } from '../components/Process';
import { FAQ } from '../components/FAQ';
import { Careers } from '../components/Careers';
import { GlobalPresence } from '../components/GlobalPresence';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onOpenContactModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenContactModal }) => {
  return (
    <>
      {/* 1. Hero Banner with .homebanner video, typewriter, and 3 .numbersec stat boxes */}
      <Hero onOpenContactModal={onOpenContactModal} />

      {/* 2. Services Section matching .stickyscroll */}
      <Services onOpenContactModal={onOpenContactModal} />

      {/* 3. Client Projects and Portfolio matching .successstories & client logos */}
      <Portfolio onOpenContactModal={onOpenContactModal} />

      {/* 4. About Us & Company Highlights matching .imagecard with Sarath Nalla, CEO */}
      <About onOpenContactModal={onOpenContactModal} />

      {/* 5. Testimonials Section matching .testmbg */}
      <Testimonials />

      {/* 6. Our Process 4-Step matching .process */}
      <Process onOpenContactModal={onOpenContactModal} />

      {/* 7. Frequently Asked Questions matching .faqs */}
      <FAQ onOpenContactModal={onOpenContactModal} />

      {/* 8. Careers Section matching .hiring */}
      <Careers />

      {/* 9. Pan-India Presence */}
      <GlobalPresence />

      {/* 10. Lead Generation Contact Form */}
      <ContactSection />
    </>
  );
};
