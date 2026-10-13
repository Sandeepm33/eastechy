import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import { GLOBAL_LOCATIONS } from '../data/siteData';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us & Technology Hubs Across India"
        subtitle="Connect directly with our engineering and growth teams in Hyderabad, Visakhapatnam, Bengaluru, and Mumbai. We're ready to engineer your brand’s next chapter of scalable growth."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' },
        ]}
      />

      <div className="py-12 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto space-y-16">
        {/* Indian Tech Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GLOBAL_LOCATIONS.slice(0, 4).map((loc) => (
            <div
              key={loc.city}
              className="p-6 rounded-2xl border border-[#eee] dark:border-zinc-800 bg-white dark:bg-[#1a1a1e] space-y-3 hover:border-[#2563EB]/60 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{loc.flag}</span>
                <div>
                  <h4 className="font-bold text-sm text-[#222] dark:text-white">
                    {loc.city}
                  </h4>
                  <span className="text-[10px] text-[#2563EB] font-semibold block">
                    {loc.role}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-[#666] dark:text-zinc-400 pt-2 border-t border-[#f0f0f0] dark:border-zinc-800">
                <p className="leading-snug">{loc.address}</p>
                <a
                  href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`}
                  className="block font-semibold text-[#222] dark:text-white hover:text-[#2563EB] pt-1"
                >
                  {loc.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Capture Form Section */}
        <ContactSection />
      </div>
    </div>
  );
};
