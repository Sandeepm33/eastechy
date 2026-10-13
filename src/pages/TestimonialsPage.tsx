import type React from 'react';
import { PageHeader } from '../components/PageHeader';
import { TESTIMONIALS_DATA } from '../data/siteData';
import { Star, Quote } from 'lucide-react';

interface TestimonialsPageProps {
  onOpenContactModal: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenContactModal }) => {
  return (
    <div>
      <PageHeader
        title="Client Reviews & Testimonials"
        subtitle="Read real, verified feedback from the founders, corporate directors, and digital marketing leaders who partner with Eastechy IT Solutions."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Testimonials' },
        ]}
      />

      <div className="py-16 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto space-y-16">
        {/* Rating Summary Card */}
        <div className="p-8 rounded-2xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Verified Client Satisfaction
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Rated 4.9 / 5.0 Across 400+ Enterprise Engagements
            </h3>
            <p className="text-xs text-zinc-400 max-w-xl">
              From fast-paced startups to large hospitals and real estate brands, our clients value our responsiveness, transparent sprint cadence, and engineering excellence.
            </p>
          </div>

          <div className="flex items-center gap-2 text-amber-400 shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-current" />
            ))}
          </div>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-2xl border border-[#eee] dark:border-zinc-800 bg-white dark:bg-[#1a1a1e] flex flex-col justify-between hover:border-[#2563EB] hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#2563EB]/40" />
                </div>

                <h4 className="text-base font-bold text-[#222] dark:text-white leading-snug">
                  "{t.title}"
                </h4>

                <p className="text-xs sm:text-sm text-[#666] dark:text-zinc-300 leading-relaxed font-normal italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#f0f0f0] dark:border-zinc-800">
                <div className="font-semibold text-sm text-[#2563EB]">
                  {t.name}
                </div>
                <div className="text-xs text-[#888] dark:text-zinc-400">
                  {t.role} • <span className="font-semibold text-[#444] dark:text-zinc-300">{t.company}</span>
                </div>
                <div className="text-[10px] text-[#888] mt-1 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded inline-block">
                  Scope: {t.services}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <button
            onClick={onOpenContactModal}
            className="px-8 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#2563EB]/25 cursor-pointer"
          >
            Become Our Next Success Story
          </button>
        </div>
      </div>
    </div>
  );
};
