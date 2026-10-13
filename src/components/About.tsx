import type React from 'react';
import { Link } from 'react-router-dom';

interface AboutProps {
  onOpenContactModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContactModal: _onOpenContactModal }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-8 lg:px-14 bg-white dark:bg-[#121214] border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Impression Banner Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-[15px] overflow-hidden shadow-xl bg-zinc-100 dark:bg-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                alt="Eastechy Team and Digital Growth"
                className="w-full h-[360px] sm:h-[420px] object-cover rounded-[15px]"
              />
            </div>
          </div>

          {/* Right Column: Exact Shiftwave Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-medium text-[#222] dark:text-white leading-[1.25]">
              Driving Business Growth & <span className="text-[#2563EB]">Innovation</span>
            </h2>

            <div className="text-sm font-medium text-[#2563EB]">
              19+ years of experience in digital strategy
            </div>

            <p className="text-sm text-[#666] dark:text-zinc-300 leading-relaxed">
              At Eastechy IT Solutions, we believe in more than just delivering services—we build long-term partnerships that drive real growth. With a focus on innovation, strategy, and measurable results, our goal is to help businesses unlock their true potential in the digital space.
            </p>

            {/* CEO Leadership Card matching .imagecard */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8f9fa] dark:bg-zinc-900 border border-[#eee] dark:border-zinc-800 my-4">
              <div className="w-[85px] h-[85px] rounded-full overflow-hidden shrink-0 border-2 border-[#2563EB]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                  alt="Sandeep Murarishetty, Founder & MD"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="text-sm font-semibold text-[#222] dark:text-white">
                  Technology Strategy & Leadership
                </div>
                <p className="text-xs text-[#666] dark:text-zinc-400 italic max-w-sm leading-snug">
                  "Success in digital isn't just about being online — it's about delivering measurable, compounding velocity."
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2563EB] pt-0.5">
                  <span className="w-5 h-[1.5px] bg-[#2563EB] inline-block" />
                  <span>Sandeep Murarishetty, Founder & MD</span>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-[1.5px] border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white font-medium text-sm transition-all duration-300 cursor-pointer"
              >
                <span>More About Us</span>
                <span className="text-sm font-bold -rotate-45 inline-block">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
