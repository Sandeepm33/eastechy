import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/siteData';

interface FAQProps {
  onOpenContactModal: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenContactModal }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-8 lg:px-14 bg-white dark:bg-[#121214] border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Heading matching Shiftwave .heading.strt */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-[#222] dark:text-white flex items-center gap-3">
            <span className="w-11 h-11 min-w-[44px] rounded-full bg-[#2563EB] border-2 border-[#1D4ED8] flex items-center justify-center text-white shadow-md">
              <HelpCircle className="w-6 h-6" />
            </span>
            <span>FAQs</span>
          </h2>
        </div>

        {/* FAQ list matching Shiftwave .faqs */}
        <div className="divide-y divide-[#ddd] dark:divide-zinc-800">
          {FAQ_DATA.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div key={faq.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className={`w-full flex items-center justify-between gap-4 text-left font-medium text-sm sm:text-base cursor-pointer transition-colors ${
                    isOpen ? 'text-[#2563EB]' : 'text-[#222] dark:text-white hover:text-[#2563EB]'
                  }`}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-9 h-9 min-w-[36px] rounded-full border-[1.5px] border-current flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 text-xs sm:text-sm text-[#666] dark:text-zinc-300 leading-relaxed max-w-4xl">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Button matching Shiftwave Read Full FAQ */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenContactModal}
            className="px-7 py-2.5 rounded-full border-[1.5px] border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white font-medium text-sm transition-colors cursor-pointer"
          >
            Read Full FAQ
          </button>
        </div>
      </div>
    </section>
  );
};
