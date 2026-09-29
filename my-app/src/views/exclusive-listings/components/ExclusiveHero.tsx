import { ArrowDown, KeyRound } from 'lucide-react';
import { exclusiveHero } from '@/mocks/exclusiveData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

export default function ExclusiveHero() {
  return (
    <section id="top" className="relative min-h-[94svh] w-full overflow-hidden bg-foreground-950">
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={exclusiveHero.image}
        alt="An exclusive, off-market home represented by BW Metro Properties in the DMV"
        title="Exclusive listings across the DMV"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Exclusive — DC · MD · VA
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[94svh] max-w-[1500px] flex-col justify-end gap-12 px-5 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="v2-rise max-w-3xl">
            <Eyebrow tone="light">{exclusiveHero.eyebrow}</Eyebrow>
            <h1 className="text-scrim mt-7 font-heading text-[40px] font-normal leading-[0.98] tracking-[-0.03em] text-background-50 md:text-[64px] lg:text-[82px]">
              {exclusiveHero.titleLead} <em className="italic">{exclusiveHero.titleAccent}</em>
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.45)] md:text-[16.5px]">
              {exclusiveHero.text}
            </p>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <CtaButton href="#exclusive-search">
                <KeyRound className="h-4 w-4" aria-hidden="true" />
                Browse Exclusive Listings
              </CtaButton>
              <GhostButton href="#contact" tone="light">
                Talk to Brandon
              </GhostButton>
            </div>
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

        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-background-50/15 bg-background-50/5 sm:grid-cols-3">
          {exclusiveHero.highlights.map((item) => (
            <div key={item.label} className="bg-foreground-950/25 px-6 py-5 backdrop-blur-sm">
              <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-background-200/80">
                {item.label}
              </dt>
              <dd className="mt-2 text-[13.5px] leading-snug text-background-100">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}