import { ArrowDown } from 'lucide-react';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';
import { recentlySoldHero } from '@/mocks/recentlySoldData';

export default function RecentlySoldHero() {
  return (
    <section id="top" className="relative min-h-[88svh] w-full overflow-hidden bg-foreground-950">
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={recentlySoldHero.image}
        alt="Recently sold home interior in the Washington DC metro area"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Recently Sold — DMV Metro
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[88svh] max-w-[1500px] flex-col justify-between gap-12 px-5 pb-14 pt-32 md:px-10 md:pb-20 md:pt-44">
        <div className="v2-rise max-w-4xl">
          <Eyebrow tone="light">{recentlySoldHero.eyebrow}</Eyebrow>
          <h1 className="text-scrim mt-8 font-heading text-[42px] font-normal leading-[1.0] tracking-[-0.03em] text-background-50 md:text-[72px] lg:text-[88px]">
            {recentlySoldHero.titleLead} <em className="italic">{recentlySoldHero.titleAccent}</em>
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_18px_rgba(0,0,0,0.55)] md:text-[17px]">
            {recentlySoldHero.text}
          </p>
          <div
            className="v2-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '220ms' }}
          >
            <CtaButton href="#listings">View Recently Sold Homes</CtaButton>
            <GhostButton href="/home-valuation" tone="light">
              Get Your Home Value
            </GhostButton>
          </div>
        </div>

        <div className="v2-rise flex items-center gap-4" style={{ animationDelay: '360ms' }}>
          <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-background-200/80">
            Scroll to explore
          </span>
          <span className="v2-scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-background-50/30 text-background-50">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}