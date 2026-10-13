import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  const fullText = 'Empowering your Digital Growth with Expert Solutions';
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="pt-24 sm:pt-28 pb-10 px-3 sm:px-8 lg:px-14 bg-white dark:bg-[#121214] transition-colors duration-300">
      {/* Framed Cinematic Hero Banner matching .homebanner */}
      <div className="relative w-full h-[580px] sm:h-[550px] rounded-[20px] sm:rounded-[25px] overflow-hidden text-white shadow-2xl bg-zinc-950">
        {/* Background Video / Ambient Tech Motion */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.45] contrast-125"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-31912-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Shiftwave Gradient Overlay */}
        <div className="absolute inset-0 z-[5] bg-gradient-to-r from-black/85 via-black/60 to-transparent sm:to-black/30" />

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between sm:justify-center p-6 sm:p-10 lg:p-14">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10">
            {/* Left Column: Typewriter Title, Description, and CTA */}
            <div className="w-full lg:max-w-[540px] space-y-4 sm:space-y-5">
              <div className="min-h-[75px] sm:min-h-[85px] lg:min-h-[110px]">
                <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-medium leading-[1.2] tracking-tight text-white">
                  <span>{displayText}</span>
                  <span
                    className={`inline-block w-[3px] h-[26px] sm:h-[30px] lg:h-[34px] bg-[#2563EB] ml-1.5 align-middle transition-opacity duration-150 ${
                      cursorVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </h1>
              </div>

              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed max-w-xl font-normal">
                Eastechy IT Solutions blends smart marketing with powerful web and software development to help your brand grow through{' '}
                <span className="text-white font-medium underline decoration-1 underline-offset-4 decoration-white/40">
                  tailored solutions.
                </span>
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#2563EB] hover:bg-transparent text-white hover:text-[#2563EB] border-[1.5px] border-[#2563EB] font-medium text-sm transition-all duration-300 shadow-lg shadow-[#2563EB]/30 cursor-pointer group"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-zinc-900 border border-white/20 font-medium text-sm transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Exact Shiftwave numbersec 3-Stat Cards with Multi-Page Links */}
            <div className="w-full lg:w-[240px] flex flex-row lg:flex-col gap-2.5 sm:gap-3 shrink-0">
              {/* Stat 1: 4000+ Projects -> /portfolio */}
              <Link
                to="/portfolio"
                className="flex-1 lg:flex-none border-[1.5px] border-[#1D4ED8] bg-[#2563EB]/85 hover:bg-[#2563EB] backdrop-blur-sm rounded-[8px] p-3 sm:p-4 text-white transition-all hover:-translate-y-1 hover:shadow-lg group block"
                title="View Portfolio and Client Projects"
              >
                <div className="text-2xl sm:text-4xl lg:text-[46px] font-semibold leading-none mb-1">
                  4000<span className="text-white font-medium">+</span>
                </div>
                <div className="text-xs sm:text-sm lg:text-[16px] font-medium leading-tight group-hover:underline">
                  Website <span className="font-semibold block sm:inline lg:inline">Projects →</span>
                </div>
              </Link>

              {/* Stat 2: 19+ Years -> /about-us */}
              <Link
                to="/about-us"
                className="flex-1 lg:flex-none border-[1.5px] border-[#1D4ED8] bg-[#2563EB]/85 hover:bg-[#2563EB] backdrop-blur-sm rounded-[8px] p-3 sm:p-4 text-white transition-all hover:-translate-y-1 hover:shadow-lg group block"
                title="Learn About Our 19-Year Journey"
              >
                <div className="text-2xl sm:text-4xl lg:text-[46px] font-semibold leading-none mb-1">
                  19<span className="text-white font-medium">+</span>
                </div>
                <div className="text-xs sm:text-sm lg:text-[16px] font-medium leading-tight group-hover:underline">
                  Years of <span className="font-semibold block sm:inline lg:inline">Experience →</span>
                </div>
              </Link>

              {/* Stat 3: 50+ Employees -> /careers */}
              <Link
                to="/careers"
                className="flex-1 lg:flex-none border-[1.5px] border-[#1D4ED8] bg-[#2563EB]/85 hover:bg-[#2563EB] backdrop-blur-sm rounded-[8px] p-3 sm:p-4 text-white transition-all hover:-translate-y-1 hover:shadow-lg group block"
                title="Explore Careers and Meet Our Team"
              >
                <div className="text-2xl sm:text-4xl lg:text-[46px] font-semibold leading-none mb-1">
                  50<span className="text-white font-medium">+</span>
                </div>
                <div className="text-xs sm:text-sm lg:text-[16px] font-medium leading-tight group-hover:underline">
                  Skilled <span className="font-semibold block sm:inline lg:inline">Employees →</span>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
