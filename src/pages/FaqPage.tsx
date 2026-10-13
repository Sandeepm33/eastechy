import type React from 'react';
import { PageHeader } from '../components/PageHeader';
import { FAQ } from '../components/FAQ';

interface FaqPageProps {
  onOpenContactModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenContactModal }) => {
  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Detailed answers regarding our 19-year journey, web engineering stacks, SEO growth timelines, pricing transparency, and client communication cadence."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'FAQs' },
        ]}
      />

      <div className="py-8">
        <FAQ onOpenContactModal={onOpenContactModal} />
      </div>
    </div>
  );
};
