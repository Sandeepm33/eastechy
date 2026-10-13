import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Laptop, Calendar, Users } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const stats = [
    {
      target: 4000,
      suffix: '+',
      titleFirst: 'Website',
      titleSecond: 'Projects',
      desc: 'Engineered with responsive UX, pixel precision & rock-solid code across 20+ industries.',
      icon: Laptop,
    },
    {
      target: 19,
      suffix: '+',
      titleFirst: 'Years of',
      titleSecond: 'Experience',
      desc: 'Founded in 2006, guiding enterprise brands through every phase of the digital evolution.',
      icon: Calendar,
    },
    {
      target: 50,
      suffix: '+',
      titleFirst: 'Skilled',
      titleSecond: 'Employees',
      desc: 'In-house strategists, full-stack engineers, SEO authorities, and creative designers.',
      icon: Users,
    },
  ];

  return (
    <section className="py-14 bg-zinc-50 dark:bg-[#161619] border-y border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative p-7 rounded-3xl bg-white dark:bg-[#1d1d22] border border-zinc-200/70 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300"
              >
                {/* Accent top gradient line on hover */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-full" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white leading-none">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                </div>

                <div className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-1.5 flex items-center gap-1.5">
                  <span>{stat.titleFirst}</span>
                  <span className="text-[#2563EB]">{stat.titleSecond}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
