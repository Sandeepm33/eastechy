import React, { useState } from 'react';
import { Phone, MapPin, Building2 } from 'lucide-react';
import { GLOBAL_LOCATIONS } from '../data/siteData';

export const GlobalPresence: React.FC = () => {
  const [activeLoc, setActiveLoc] = useState(GLOBAL_LOCATIONS[0]);

  const indianHubs = [
    {
      name: 'Hyderabad',
      state: 'Telangana',
      tag: 'Main Headquarters',
      flag: '🇮🇳',
      img: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Visakhapatnam',
      state: 'Andhra Pradesh',
      tag: 'Engineering SEZ',
      flag: '🇮🇳',
      img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Bengaluru',
      state: 'Karnataka',
      tag: 'Tech Innovation',
      flag: '🇮🇳',
      img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=500&q=80',
    },
    {
      name: 'Mumbai',
      state: 'Maharashtra',
      tag: 'Commercial Operations',
      flag: '🇮🇳',
      img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=500&q=80',
    },
  ];

  return (
    <section id="presence" className="py-20 px-4 sm:px-8 lg:px-14 bg-[#f0f5ff] dark:bg-[#131722] border-t border-blue-100/60 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Pan-India Tech Hub Details */}
          <div className="w-full lg:w-[45%] space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-900 text-[#2563EB] text-xs font-semibold">
              <span>🇮🇳</span>
              <span>Serving Enterprises Across India</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-medium text-[#2563EB] leading-snug">
              Pan-India Presence, <span className="text-[#222] dark:text-white">Local Engineering</span>
            </h2>

            <p className="text-sm text-[#666] dark:text-zinc-400">
              Strategic technology delivery and client operations hubs across major Indian tech centers
            </p>

            {/* Pill Buttons for Indian Cities */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {GLOBAL_LOCATIONS.map((loc) => {
                const isSelected = activeLoc.city === loc.city;
                return (
                  <button
                    key={loc.city}
                    onClick={() => setActiveLoc(loc)}
                    className={`px-5 py-2 rounded-full border text-xs sm:text-sm font-medium tracking-wide transition-colors cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'border-[#2563EB] bg-[#2563EB] text-white shadow-sm'
                        : 'border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10'
                    }`}
                  >
                    <span>🇮🇳</span>
                    <span>{loc.city}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Location Office Info Card */}
            <div className="pt-4 p-5 rounded-2xl bg-[#f8f9fa] dark:bg-zinc-900 border border-[#eee] dark:border-zinc-800 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="font-semibold text-sm text-[#222] dark:text-white flex items-center gap-2">
                  <span className="text-xl">{activeLoc.flag}</span>
                  <span>{activeLoc.city} Tech Center ({activeLoc.state})</span>
                </div>
                <a
                  href={`tel:${activeLoc.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-xs text-[#2563EB] font-semibold flex items-center gap-1 hover:underline"
                >
                  <Phone className="w-3 h-3" />
                  <span>{activeLoc.phone}</span>
                </a>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#666] dark:text-zinc-400">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <p className="leading-relaxed">{activeLoc.address}</p>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#2563EB] font-medium pt-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>{activeLoc.role}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Indian Hub Cards */}
          <div className="w-full lg:w-[50%] relative">
            {/* 4 Indian City Cards in Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
              {indianHubs.map((c) => (
                <div
                  key={c.name}
                  onClick={() => {
                    const match = GLOBAL_LOCATIONS.find((l) => l.city === c.name);
                    if (match) setActiveLoc(match);
                  }}
                  className={`rounded-2xl overflow-hidden border bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                    activeLoc.city === c.name
                      ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20'
                      : 'border-zinc-200/80 dark:border-zinc-800'
                  }`}
                >
                  <div className="h-28 overflow-hidden bg-zinc-200 relative">
                    <img
                      src={c.img}
                      alt={`${c.name}, India`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-xs font-semibold">
                      {c.flag}
                    </span>
                  </div>
                  <div className="p-3 text-center space-y-0.5">
                    <div className="text-xs sm:text-sm font-bold text-[#222] dark:text-white truncate">
                      {c.name}
                    </div>
                    <div className="text-[10px] text-[#2563EB] font-semibold truncate">
                      {c.tag}
                    </div>
                    <div className="text-[9px] text-[#888] dark:text-zinc-400 truncate">
                      {c.state}, India
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
