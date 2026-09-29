'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { condosByArea } from '@/mocks/rentalsData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function CondosByArea() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * (rail.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section id="areas" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="07">{condosByArea.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              {condosByArea.titleLead} <em className="italic">{condosByArea.titleAccent}</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {condosByArea.text}
            </p>
          </Reveal>

          <Reveal className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous areas"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-background-300 text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next areas"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-background-300 text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1280px]">
        <div
          ref={railRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {condosByArea.areas.map((area) => (
            <a
              key={area.name}
              href="#condo-list"
              className="group relative flex h-[420px] w-[280px] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[26px] sm:w-[320px]"
            >
              <img
              loading="lazy"
              decoding="async"
                src={area.image}
                alt={`Condos and rentals in ${area.name}`}
                title={`Explore condos and rentals in ${area.name}`}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1100ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/85 via-foreground-950/25 to-transparent" aria-hidden="true" />
              <div className="relative p-7">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-background-200">
                  Explore
                </span>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <h3 className="font-heading text-[26px] leading-tight text-background-50">{area.name}</h3>
                  <span className="arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-background-50/40 text-background-50 transition-colors duration-300 group-hover:border-background-50 group-hover:bg-background-50 group-hover:text-foreground-950">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}