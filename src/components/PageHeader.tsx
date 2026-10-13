import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
}) => {
  return (
    <div className="pt-28 pb-12 px-4 sm:px-8 lg:px-14 bg-zinc-50 dark:bg-[#161619] border-b border-[#eee] dark:border-zinc-800">
      <div className="max-w-7xl mx-auto space-y-3">
        {/* Breadcrumbs matching Shiftwave .breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider font-medium text-[#888] dark:text-zinc-400">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="hover:text-[#2563EB] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#2563EB] font-semibold">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#bbb] dark:bg-zinc-600 inline-block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#222] dark:text-white leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm sm:text-base text-[#666] dark:text-zinc-300 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};
