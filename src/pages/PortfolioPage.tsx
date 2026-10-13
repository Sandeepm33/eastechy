import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { CLIENT_PROJECTS, CLIENT_LOGOS } from '../data/siteData';
import type { ProjectItem } from '../types';
import { ArrowUpRight, X } from 'lucide-react';

interface PortfolioPageProps {
  onOpenContactModal: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenContactModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Real Estate', 'Healthcare', 'Retail', 'Food', 'E-Commerce'];

  const filteredProjects =
    activeCategory === 'All'
      ? CLIENT_PROJECTS
      : CLIENT_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      <PageHeader
        title="Portfolio & Success Stories"
        subtitle="Explore our track record of helping over 4,000+ brands achieve digital dominance through high-converting website design, search engine optimization, and lead generation campaigns."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Portfolio' },
        ]}
      />

      <div className="py-16 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto space-y-16">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/20'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-[#444] dark:text-zinc-300 hover:bg-[#2563EB]/10 hover:text-[#2563EB]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="rounded-2xl border border-[#ddd] dark:border-zinc-800 bg-white dark:bg-[#1a1a1e] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#2563EB] text-white text-[11px] font-bold">
                      {project.resultMetric}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-medium uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-xs font-semibold text-[#2563EB]">
                    Target – {project.targetAudience}
                  </div>
                  <h3 className="text-lg font-bold text-[#222] dark:text-white group-hover:text-[#2563EB] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#666] dark:text-zinc-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] text-[#555] dark:text-zinc-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#f0f0f0] dark:border-zinc-800 flex items-center justify-between mt-4">
                <span className="text-xs font-bold text-[#2563EB] flex items-center gap-1 group-hover:underline">
                  <span>View Case Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] text-[#888]">100% Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Marquee */}
        <div className="pt-12 border-t border-[#eee] dark:border-zinc-800 text-center space-y-6">
          <div className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            Trusted By Over 4,000+ Brands
          </div>
          <div className="relative overflow-hidden w-full py-2">
            <div className="animate-marquee-left flex gap-6">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  className="w-[150px] shrink-0 py-2.5 px-3 rounded-[3px] bg-[#f4f4f4] dark:bg-zinc-800 text-center flex flex-col items-center justify-center border border-[#e5e5e5] dark:border-zinc-700 select-none"
                >
                  <span className="font-semibold text-xs text-[#444] dark:text-zinc-200 truncate w-full">
                    {logo.name}
                  </span>
                  <span className="text-[9px] text-[#888] dark:text-zinc-400">
                    {logo.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#1a1a1e] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
            <div className="h-64 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-[#2563EB] text-white text-xs font-bold">
                  {selectedProject.resultMetric}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-7 space-y-4">
              <div className="flex items-center gap-3 text-xs text-[#888] font-medium">
                <span>Client: {selectedProject.client}</span>
                <span>•</span>
                <span>Vertical: {selectedProject.category}</span>
                <span>•</span>
                <span>Target: {selectedProject.targetAudience}</span>
              </div>

              <p className="text-sm text-[#555] dark:text-zinc-300 leading-relaxed">
                {selectedProject.description} Through customized UX design, automated lead routing, and precision keyword acquisition, Eastechy IT Solutions helped this brand scale its qualified inbound inquiries and market share.
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#888] mb-2">
                  Key Deliverables
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-[#444] dark:text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#eee] dark:border-zinc-800">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenContactModal();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Request Similar Results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
