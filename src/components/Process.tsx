import React from 'react';
import { GitBranch, Lightbulb, Code2, Palette, Award } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

const iconMap: Record<string, React.ElementType> = {
  Lightbulb,
  Code2,
  Palette,
  Award,
};

interface ProcessProps {
  onOpenContactModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenContactModal }) => {
  return (
    <section id="process" className="py-20 px-4 sm:px-8 lg:px-14 bg-[#f0f5ff] dark:bg-[#131722] border-t border-blue-100/60 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading matching Shiftwave .heading.strt */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#222] dark:text-white flex items-center gap-3">
            <span className="w-11 h-11 min-w-[44px] rounded-full bg-[#2563EB] border-2 border-[#1D4ED8] flex items-center justify-center text-white shadow-md">
              <GitBranch className="w-6 h-6" />
            </span>
            <span>Our Process</span>
          </h2>
        </div>

        {/* 4 Connected Process Grid matching Shiftwave .process */}
        <div className="border border-blue-200/60 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white dark:bg-[#1a1a1e] rounded-2xl overflow-hidden shadow-sm">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || Lightbulb;
            return (
              <div
                key={step.step}
                onClick={onOpenContactModal}
                className={`p-7 sm:p-8 border-b border-[#ddd] dark:border-zinc-800 lg:border-b-0 ${
                  idx < 3 ? 'lg:border-r border-[#ddd] dark:border-zinc-800' : ''
                } hover:bg-[#fcfcfc] dark:hover:bg-zinc-800/40 transition-colors cursor-pointer group`}
              >
                {/* Top: Icon + Step number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-semibold text-[#888] dark:text-zinc-400">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-[#222] dark:text-white group-hover:text-[#2563EB] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666] dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
