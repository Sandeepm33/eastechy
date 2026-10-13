import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { JOB_OPENINGS } from '../data/siteData';
import type { JobOpening } from '../types';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="careers" className="py-20 px-4 sm:px-8 lg:px-14 bg-[#f8f9fa] dark:bg-[#18181b] border-t border-zinc-200/60 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Banner matching Shiftwave .hiring */}
        <div className="rounded-[20px] bg-gradient-to-r from-[#787878] to-[#BCB1B1] dark:from-[#333333] dark:to-[#574a4a] text-white p-8 sm:p-14 lg:px-20 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden relative">
          {/* Content */}
          <div className="w-full lg:max-w-xl space-y-3 z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white leading-tight">
              Be a part of our team
            </h2>
            <p className="text-sm text-white/90 leading-relaxed font-normal">
              Our services are crafted by experts who are deeply into any industry.
            </p>

            <div className="pt-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-medium text-white">
                  Available Positions
                </h3>
                <Link
                  to="/careers"
                  className="text-xs font-semibold text-white hover:underline flex items-center gap-1"
                >
                  <span>Explore All Careers</span>
                  <span>→</span>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {JOB_OPENINGS.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className="px-5 py-2 rounded-full border-2 border-white hover:bg-white hover:text-zinc-900 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    {job.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Graphic matching Shiftwave mission-man */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0 z-10">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Eastechy Careers"
              className="w-72 sm:w-84 object-cover rounded-2xl shadow-lg border-2 border-white/20"
            />
          </div>
        </div>
      </div>

      {/* Application Modal */}
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
                {selectedJob.department} • {selectedJob.location}
              </span>
              <h3 className="text-xl font-bold text-[#222] dark:text-white mt-1">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-[#666] dark:text-zinc-400 mt-1">
                {selectedJob.description}
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-lg text-[#222] dark:text-white">
                  Application Submitted
                </h4>
                <p className="text-xs text-[#666]">
                  Thank you! Our recruitment team will review your application.
                </p>
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
                  <label className="block text-xs font-medium text-[#222] dark:text-zinc-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#222] dark:text-zinc-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#222] dark:text-zinc-300 mb-1">
                    Resume / Portfolio Link *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-3 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-900 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 mt-2"
                >
                  <span>Submit Application</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
