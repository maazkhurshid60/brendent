import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources & Partners | BW Metro Properties',
  description:
    'Guides, checklists and answers for buying, selling, condos and investing in the DMV — plus the vetted inspectors, lenders, title companies and trades Brandon works with.',
  alternates: { canonical: '/resources' },
};

export { default } from '@/views/resources/page';
