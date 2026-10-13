import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Medal, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLIENT_PROJECTS, CLIENT_LOGOS } from '../data/siteData';

interface PortfolioProps {
  onOpenContactModal: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenContactModal: _onOpenContactModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CLIENT_PROJECTS.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= CLIENT_PROJECTS.length - 3 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-8 lg:px-14 bg-[#f0f5ff] dark:bg-[#131722] border-t border-blue-100/60 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header matching Shiftwave .heading.strt */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-medium text-[#222] dark:text-white flex items-center gap-3">
              <span className="w-11 h-11 min-w-[44px] rounded-full bg-[#2563EB] border-2 border-[#1D4ED8] flex items-center justify-center text-white shadow-md">
                <Medal className="w-6 h-6" />
              </span>
              <span>Our Clients</span>
            </h2>
            <p className="text-sm text-[#666] dark:text-zinc-400 leading-relaxed">
              Our success lies in the results we deliver. From real estate to e-commerce, we’ve helped brands grow through smart digital strategies. Explore how we turn ideas into impact.
            </p>
          </div>

          {/* Navigation Controls & View All Link */}
          <div className="flex items-center gap-3">
            <Link
              to="/portfolio"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white text-xs font-semibold transition-colors"
            >
              <span>All Projects</span>
              <span>→</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous story"
                className="w-10 h-10 rounded-full border border-[#ddd] dark:border-zinc-700 hover:border-[#2563EB] hover:text-[#2563EB] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next story"
                className="w-10 h-10 rounded-full border border-[#ddd] dark:border-zinc-700 hover:border-[#2563EB] hover:text-[#2563EB] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Success Stories Cards Slider matching Shiftwave .successstories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_PROJECTS.slice(currentIndex, currentIndex + 3).map((project) => (
            <Link
              to="/portfolio"
              key={project.id}
              className="rounded-[10px] border border-[#ddd] dark:border-zinc-800 bg-white dark:bg-[#1a1a1e] overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 block"
            >
              <div className="h-52 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="text-sm font-medium text-[#222] dark:text-white group-hover:text-[#2563EB] transition-colors leading-snug">
                  {project.title}
                </h3>
                <div className="text-[11px] font-medium text-[#888] dark:text-zinc-400">
                  Target – {project.targetAudience}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Client Logos Section matching Shiftwave .client-logo-section */}
        <div className="mt-16 pt-10 border-t border-[#eee] dark:border-zinc-800">
          {/* Logo Row 1: Left to Right */}
          <div className="relative overflow-hidden w-full py-2">
            <div className="animate-marquee-left flex gap-6">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
                <div
                  key={`l1-${idx}`}
                  className="w-[150px] shrink-0 py-2.5 px-3 rounded-[3px] bg-[#f4f4f4] dark:bg-zinc-800 text-center flex flex-col items-center justify-center border border-[#e5e5e5] dark:border-zinc-700 select-none"
                >
                  <span className="font-semibold text-xs text-[#444] dark:text-zinc-200 truncate w-full">
                    {logo.name}
                  </span>
                  <span className="text-[9px] text-[#888] dark:text-zinc-400">
                    {logo.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Row 2: Right to Left */}
          <div className="relative overflow-hidden w-full py-2 mt-3">
            <div className="animate-marquee-right flex gap-6">
              {[...CLIENT_LOGOS.slice().reverse(), ...CLIENT_LOGOS.slice().reverse()].map((logo, idx) => (
                <div
                  key={`l2-${idx}`}
                  className="w-[150px] shrink-0 py-2.5 px-3 rounded-[3px] bg-[#f4f4f4] dark:bg-zinc-800 text-center flex flex-col items-center justify-center border border-[#e5e5e5] dark:border-zinc-700 select-none"
                >
                  <span className="font-semibold text-xs text-[#444] dark:text-zinc-200 truncate w-full">
                    {logo.name}
                  </span>
                  <span className="text-[9px] text-[#888] dark:text-zinc-400">
                    {logo.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
