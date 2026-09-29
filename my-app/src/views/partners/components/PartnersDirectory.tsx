'use client';

import { useMemo, useState } from 'react';
import Reveal from '@/components/base/Reveal';
import { directoryCopy, directoryEntries } from '@/mocks/partnersData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';
import DirectoryCard from '@/views/partners/components/DirectoryCard';

/**
 * `sectionIndex` lets the combined Resources page renumber this section. On the
 * standalone Partners page it keeps its own number, so nothing changes there.
 */
export default function PartnersDirectory({ sectionIndex = '04' }: { sectionIndex?: string }) {
  const categories = useMemo(() => {
    const unique: string[] = [];
    directoryEntries.forEach((entry) => {
      if (!unique.includes(entry.category)) unique.push(entry.category);
    });
    return unique;
  }, []);

  const [active, setActive] = useState('all');
  const filters = ['all', ...categories];
  const visible = active === 'all' ? directoryEntries : directoryEntries.filter((entry) => entry.category === active);

  return (
    <section id="directory" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index={sectionIndex}>{directoryCopy.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-heading text-[36px] font-normal leading-[1.03] tracking-[-0.025em] text-foreground-950 md:text-[54px]">
            The Full Partner <em className="italic">Directory</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">{directoryCopy.text}</p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          {filters.map((filter) => {
            const isActive = filter === active;
            const label = filter === 'all' ? 'All Partners' : filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-[12px] font-semibold tracking-wide transition-colors duration-300 ${
                  isActive
                    ? 'border-foreground-950 bg-foreground-950 text-background-50'
                    : 'border-background-300 text-foreground-700 hover:border-foreground-950 hover:text-foreground-950'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div key={active} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((entry, index) => (
            <div key={`${entry.category}-${entry.name}-${index}`} className="blog-fade" style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}>
              <DirectoryCard entry={entry} />
            </div>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-5 border-t border-background-200 pt-12 text-center">
          <p className="max-w-xl font-heading text-[24px] leading-snug text-foreground-950 md:text-[30px]">
            Great work deserves a great referral. Join the network.
          </p>
          <CtaButton href={directoryCopy.ctaHref}>{directoryCopy.cta}</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}