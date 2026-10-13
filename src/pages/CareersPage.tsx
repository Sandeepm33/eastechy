import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { JOB_OPENINGS } from '../data/siteData';
import type { JobOpening } from '../types';
import { MapPin, CheckCircle2, Send, X } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageHeader
        title="Careers & Opportunities"
        subtitle="Be a part of our high-performing team. We build scalable web architectures and high-ROI digital campaigns for leading enterprises across India."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Careers' },
        ]}
      />

      <div className="py-16 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto space-y-20">
        {/* Culture / Perks Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Life At Eastechy IT Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222] dark:text-white">
              Why Engineers & Marketers Thrive Here
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Enterprise Impact', desc: 'Work directly on mission-critical digital projects for leading enterprises and startups across India.' },
              { title: 'Continuous Growth', desc: 'Dedicated training stipends, conferences, and certifications in modern cloud & marketing AI.' },
              { title: 'Healthy Work-Life', desc: 'Flexible hybrid workflows, paid personal time off, and wellness benefits.' },
              { title: 'Competitive Compensation', desc: 'Performance bonuses, annual appraisals, and attractive incentive structures.' },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[#eee] dark:border-zinc-800 bg-white dark:bg-[#1a1a1e] space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center font-bold">
                  ✓
                </div>
                <h4 className="text-base font-semibold text-[#222] dark:text-white">{p.title}</h4>
                <p className="text-xs text-[#666] dark:text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Current Vacancies
            </span>
            <h3 className="text-2xl font-bold text-[#222] dark:text-white">
              Open Positions (Immediate Joining)
            </h3>
          </div>

          <div className="space-y-4">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl border border-[#e5e5e5] dark:border-zinc-800 bg-white dark:bg-[#1a1a1e] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#2563EB] transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-0.5 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-xs text-[#888]">{job.type}</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#222] dark:text-white">
                    {job.title}
                  </h4>
                  <p className="text-xs text-[#666] dark:text-zinc-400 max-w-2xl leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#888] pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#2563EB]" /> {job.location}
                    </span>
                    <span>•</span>
                    <span>Experience: {job.experience}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-6 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#1a1a1e] rounded-2xl p-7 shadow-2xl border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-semibold text-[#2563EB]">
                {selectedJob.department}
              </span>
              <h3 className="text-xl font-bold text-[#222] dark:text-white mt-1">
                {selectedJob.title}
              </h3>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-lg text-[#222] dark:text-white">Application Received!</h4>
                <p className="text-xs text-[#666]">Our HR team will get in touch with you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  setTimeout(() => {
                    setSubmitted(false);
                    setSelectedJob(null);
                  }, 2000);
                }}
                className="space-y-3"
              >
                <div>
                  <label className="block text-xs font-medium text-[#222] dark:text-zinc-300 mb-1">Full Name *</label>
                  <input type="text" required placeholder="John Doe" className="w-full px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#222] dark:text-zinc-300 mb-1">Email *</label>
                  <input type="email" required placeholder="john@example.com" className="w-full px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#222] dark:text-zinc-300 mb-1">Portfolio / LinkedIn *</label>
                  <input type="url" required placeholder="https://..." className="w-full px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white" />
                </div>
                <button type="submit" className="w-full py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2">
                  <span>Submit Profile</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
