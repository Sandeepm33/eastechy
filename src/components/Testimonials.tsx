import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-8 lg:px-14 bg-[#f8f9fa] dark:bg-[#18181b] border-t border-zinc-200/60 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading matching Shiftwave .heading.strt */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#222] dark:text-white flex items-center gap-3">
            <span className="w-11 h-11 min-w-[44px] rounded-full bg-[#2563EB] border-2 border-[#1D4ED8] flex items-center justify-center text-white shadow-md">
              <UserCheck className="w-6 h-6" />
            </span>
            <span>Testimonials</span>
          </h2>

          <Link
            to="/testimonials"
            className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1"
          >
            <span>All Reviews</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Review Details matching Shiftwave .testimonials */}
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            <div className="min-h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#222] dark:text-white mb-3 leading-snug">
                  {current.title}
                </h3>
                <p className="text-sm text-[#666] dark:text-zinc-300 leading-relaxed font-normal">
                  "{current.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#ddd] dark:border-zinc-700">
                <div className="text-base font-medium text-[#2563EB]">
                  {current.company}
                </div>
                <div className="text-xs text-[#888] dark:text-zinc-400 mt-0.5">
                  {current.services}
                </div>
              </div>
            </div>

            {/* Navigation Dots and Arrows */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-7 bg-[#2563EB]'
                        : 'w-2.5 bg-[#ccc] dark:bg-zinc-700'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-full border border-[#ddd] dark:border-zinc-700 hover:border-[#2563EB] hover:text-[#2563EB] flex items-center justify-center text-sm transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-full border border-[#ddd] dark:border-zinc-700 hover:border-[#2563EB] hover:text-[#2563EB] flex items-center justify-center text-sm transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Client Image matching Shiftwave .imgsec with top-right quote badge */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Eastechy Happy Clients"
                className="w-full aspect-[3/2] object-cover rounded-[10px] shadow-lg"
              />
              {/* Blue Circular Quote Mark Badge on Top-Right */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-3xl font-bold font-serif shadow-md select-none">
                "
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
