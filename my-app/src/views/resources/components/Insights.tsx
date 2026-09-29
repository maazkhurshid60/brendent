'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';
import { insights, insightsCopy } from '@/mocks/resourcesData';

export default function Insights() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const amount = Math.min(rail.clientWidth * 0.85, 360);
    rail.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  return (
    <section id="condos" className="bg-background-50 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="04">{insightsCopy.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-foreground-950 md:text-[52px]">
              {insightsCopy.titleLead} <em className="italic">{insightsCopy.titleAccent}</em>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground-600">{insightsCopy.text}</p>
          </Reveal>

          <Reveal delay={100} className="shrink-0">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous insights"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-background-300 text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next insights"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-background-300 text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={railRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto pb-2 lg:mt-14"
        >
          {insights.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} className="shrink-0">
              <a
                href={item.href}
                className="group flex h-full w-[300px] snap-start flex-col overflow-hidden rounded-[26px] border border-background-200 bg-background-50 transition-colors duration-300 hover:border-foreground-300 sm:w-[360px]"
              >
                <div className="relative h-[230px] w-full overflow-hidden">
                  <img
              loading="lazy"
              decoding="async"
                    src={item.image}
                    alt={`${item.title} — BW Metro Properties insight`}
                    title={`${item.title} — BW Metro Properties`}
                    className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                  <div>
                    <h3 className="font-heading text-[23px] leading-tight text-foreground-950 md:text-[25px]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-relaxed text-foreground-600">{item.text}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-background-200 pt-5">
                    <span className="text-[11.5px] font-medium uppercase tracking-[0.16em] text-foreground-500">
                      Read article
                    </span>
                    <span className="arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground-300 text-foreground-800 transition-colors duration-300 group-hover:border-foreground-950 group-hover:bg-foreground-950 group-hover:text-background-50">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <CtaButton href="/get-in-touch">{insightsCopy.cta}</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}