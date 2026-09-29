'use client';

import { useCallback, useRef, useState } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import SectionHeading from '@/components/base/SectionHeading';
import { communities } from '@/mocks/homeData';

export default function Communities() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanPrev(rail.scrollLeft > 8);
    setCanNext(rail.scrollLeft < rail.scrollWidth - rail.clientWidth - 8);
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector('a') as HTMLElement | null;
    const gap = 20;
    const distance = (card?.offsetWidth ?? 400) + gap;
    rail.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  return (
    <section id="communities" className="py-20 md:py-28">
      <div className="mx-auto max-w-shell px-4 md:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Explore the"
            title="Communities We Serve"
            description="Discover insights, photos, market trends, and what life is really like in each area."
          />
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous communities"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-colors duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-background-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-background-300 disabled:hover:bg-transparent disabled:hover:text-foreground-700"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next communities"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-colors duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-background-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-background-300 disabled:hover:bg-transparent disabled:hover:text-foreground-700"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          onScroll={updateArrows}
          className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          {communities.map((community, index) => (
            <Reveal
              key={community.name}
              delay={index * 45}
              className="w-[82%] shrink-0 snap-start sm:w-[48%] lg:w-[calc(33.333%-14px)]"
            >
              <a
                href="#areas"
                className="group relative block h-[340px] w-full overflow-hidden rounded-[24px] md:h-[440px]"
              >
                <img
              loading="lazy"
              decoding="async"
                  src={community.image}
                  alt={`${community.name} neighborhood guide — homes, photos and market trends`}
                  title={`${community.name} real estate and community guide`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/40 to-foreground-950/10"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 md:p-5">
                  <div>
                    <p className="eyebrow text-[9px] text-accent-300 md:text-[10px]">Explore</p>
                    <h3 className="text-scrim-sm mt-2 font-heading text-[18px] leading-tight text-background-50 md:text-[22px]">
                      {community.name}
                    </h3>
                  </div>
                  <span className="arrow-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-background-50/40 text-background-50 transition-colors duration-300 group-hover:border-primary-500 group-hover:bg-primary-500 md:h-10 md:w-10">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}