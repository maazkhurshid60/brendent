import { ArrowDown, Building2 } from 'lucide-react';
import { rentalsHero } from '@/mocks/rentalsData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

export default function RentalsHero() {
  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden bg-foreground-950">
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={rentalsHero.image}
        alt="A modern DMV condo tower glowing at dusk — condos and rentals with BW Metro Properties"
        title="Condo and Rental Hub — BW Metro Properties"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Rentals — DC · MD · VA
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1500px] flex-col justify-end gap-12 px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="v2-rise max-w-3xl">
            <Eyebrow tone="light">{rentalsHero.eyebrow}</Eyebrow>
            <h1 className="text-scrim mt-7 font-heading text-[46px] font-normal leading-[0.98] tracking-[-0.03em] text-background-50 md:text-[78px] lg:text-[96px]">
              {rentalsHero.titleLead}{' '}
              <em className="italic text-background-100">{rentalsHero.titleAccent}</em>
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.45)] md:text-[16.5px]">
              {rentalsHero.text}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CtaButton href={rentalsHero.primaryCta.href}>{rentalsHero.primaryCta.label}</CtaButton>
              <GhostButton href={rentalsHero.secondaryCta.href} tone="light">
                {rentalsHero.secondaryCta.label}
              </GhostButton>
            </div>
            <span className="mt-9 flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-background-200/80">
              <Building2 className="h-4 w-4" aria-hidden="true" />
              Low-Maintenance Living Across the DMV
            </span>
          </div>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-background-200/80">
              Scroll to explore
            </span>
            <span className="v2-scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-background-50/30 text-background-50">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}