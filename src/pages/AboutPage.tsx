import type React from 'react';
import { PageHeader } from '../components/PageHeader';

interface AboutPageProps {
  onOpenContactModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContactModal }) => {
  const milestones = [
    { year: '2006', title: 'Foundation & Tech Vision', desc: 'Sandeep Murarishetty founded Eastechy IT Solutions with an ambition to bridge the gap between high-performance software engineering and performance digital growth.' },
    { year: '2007', title: 'Corporate Incorporation', desc: 'Registered our primary corporate legal entity on January 6, 2007, delivering enterprise web solutions, ERP software, and marketing funnels in South India.' },
    { year: '2012', title: 'Pan-India Enterprise Expansion', desc: 'Expanded delivery operations across key metropolitan centers in India, deploying high-volume SEO, custom web portals, and scalable cloud architectures.' },
    { year: '2018', title: '1,000+ Enterprise Milestone', desc: 'Scaled delivery team to 50+ in-house engineers, handling lead generation campaigns and software deployments exceeding $100M in client revenue impact.' },
    { year: '2026', title: '19+ Years of Excellence', desc: 'Over 4,000+ IT and website projects successfully launched across India, maintaining an exceptional 94%+ client retention rate.' },
  ];

  return (
    <div>
      <PageHeader
        title="About Eastechy IT Solutions"
        subtitle="Founded under the leadership of Sandeep Murarishetty, Eastechy IT Solutions is a premier digital strategy, IT software, and web development agency committed to engineering high-growth digital solutions."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' },
        ]}
      />

      <div className="py-16 px-4 sm:px-8 lg:px-14 max-w-7xl mx-auto space-y-20">
        {/* Two-Column Story and Impression Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              19+ Years of Proven Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222] dark:text-white leading-tight">
              Driving Business Growth & Sustainable Digital Innovation
            </h2>
            <p className="text-sm text-[#666] dark:text-zinc-300 leading-relaxed">
              At Eastechy IT Solutions, we do not believe in superficial vanity metrics. Instead, we design and engineer end-to-end digital growth engines that turn web visitors into loyal enterprise customers.
            </p>
            <p className="text-sm text-[#666] dark:text-zinc-300 leading-relaxed">
              From our core delivery centers in Hyderabad and Visakhapatnam to our technology operations across India, our multi-disciplinary team of full-stack developers, SEO masters, and conversion copywriters delivers measurable ROI on every investment.
            </p>

            <div className="pt-2 flex items-center gap-6 text-sm font-semibold text-[#222] dark:text-white">
              <div>
                <span className="text-2xl font-bold text-[#2563EB] block">4,000+</span>
                <span className="text-xs text-[#888]">IT & Web Projects</span>
              </div>
              <div className="w-[1px] h-10 bg-[#ddd]" />
              <div>
                <span className="text-2xl font-bold text-[#2563EB] block">19+</span>
                <span className="text-xs text-[#888]">Years Experience</span>
              </div>
              <div className="w-[1px] h-10 bg-[#ddd]" />
              <div>
                <span className="text-2xl font-bold text-[#2563EB] block">50+</span>
                <span className="text-xs text-[#888]">Skilled Employees</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[15px] overflow-hidden shadow-2xl bg-zinc-100 border border-[#eee] dark:border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Eastechy Team Collaboration"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* CEO Message */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#f8f9fa] dark:bg-zinc-900 border border-[#eee] dark:border-zinc-800 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#2563EB] shrink-0 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
              alt="Sandeep Murarishetty, Founder & Managing Director"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Founder & Managing Director
            </div>
            <h3 className="text-2xl font-bold text-[#222] dark:text-white">
              Sandeep Murarishetty
            </h3>
            <p className="text-sm sm:text-base text-[#555] dark:text-zinc-300 italic leading-relaxed max-w-2xl">
              "Success in digital isn’t just about having an online presence — it is about delivering measurable, compounding enterprise velocity. Since founding Eastechy IT Solutions, our relentless focus has always been creating lasting commercial value for our partners."
            </p>
          </div>
        </div>

        {/* Timeline Journey */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Our History
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#222] dark:text-white">
              19+ Years of Milestones & Innovation
            </h3>
          </div>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[#eee] dark:border-zinc-800 bg-white dark:bg-[#1a1a1e] flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:border-[#2563EB]/50 transition-colors"
              >
                <div className="w-20 text-2xl font-extrabold text-[#2563EB] shrink-0">
                  {m.year}
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-semibold text-[#222] dark:text-white">
                    {m.title}
                  </h4>
                  <p className="text-xs text-[#666] dark:text-zinc-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <button
            onClick={onOpenContactModal}
            className="px-8 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#2563EB]/25 cursor-pointer"
          >
            Partner with Eastechy IT Solutions
          </button>
        </div>
      </div>
    </div>
  );
};
