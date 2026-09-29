'use client';

import { useCallback, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { communities } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function CommunitiesV2() {
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
    const distance = (card?.offsetWidth ?? 400) + 20;
    rail.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  return (
    <section id="communities" className="bg-background-50 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="06">Explore the</Eyebrow>
            <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Communities We <em className="italic">Serve</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              Discover insights, photos, market trends, and what life is really like in each area.
            </p>
          </Reveal>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous communities"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground-300 text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-foreground-300 disabled:hover:bg-transparent disabled:hover:text-foreground-800"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next communities"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground-300 text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-foreground-300 disabled:hover:bg-transparent disabled:hover:text-foreground-800"
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
                href={community.href}
                className="group relative block h-[380px] w-full overflow-hidden rounded-[26px] md:h-[480px]"
              >
                <img
              loading="lazy"
              decoding="async"
                  src={community.image}
                  alt={`${community.name} neighborhood guide — homes, photos and market trends`}
                  title={`${community.name} real estate and community guide`}
                  className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/35 to-foreground-950/5"
                  aria-hidden="true"
                />
                <span className="absolute right-5 top-5 font-heading text-[15px] text-background-50/60">
                  0{index + 1 > 9 ? index + 1 : `0${index + 1}`}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-5 md:p-6">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-background-200 md:text-[10px]">
                      Explore
                    </p>
                    <h3 className="text-scrim-sm mt-2 font-heading text-[22px] leading-tight text-background-50 md:text-[26px]">
                      {community.name}
                    </h3>
                  </div>
                  <span className="arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-background-50/40 text-background-50 transition-colors duration-300 group-hover:border-background-50 group-hover:bg-background-50 group-hover:text-foreground-950">
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