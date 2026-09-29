import { ArrowDown } from 'lucide-react';
import { resourcesHero } from '@/mocks/resourcesData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

export default function ResourcesHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90svh] w-full items-center justify-center overflow-hidden bg-foreground-950"
    >
      <img
        src={resourcesHero.image}
        alt="The Washington DC region at dusk — the market BW Metro Properties serves"
        title="Resources &amp; Partners — BW Metro Properties"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Resources &amp; Partners — Guides · Checklists · Trusted Pros
        </span>
      </div>
      <div className="pointer-events-none absolute left-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          D.C. · Maryland · Northern Virginia
        </span>
      </div>

      <div className="v2-rise relative mx-auto w-full max-w-[1100px] px-5 pb-28 pt-36 text-center md:px-10 md:pb-32 md:pt-44">
        <Eyebrow tone="light" className="justify-center">
          {resourcesHero.eyebrow}
        </Eyebrow>
        <h1 className="text-scrim mt-7 font-heading text-[56px] font-normal leading-[0.96] tracking-[-0.03em] text-background-50 md:text-[104px] lg:text-[132px]">
          {resourcesHero.titleLead} <em className="italic">{resourcesHero.titleAccent}</em>
        </h1>
        <p className="mx-auto mt-9 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_18px_rgba(0,0,0,0.55)] md:text-[17px]">
          {resourcesHero.text}
        </p>
        <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton href="#buyguide">Our buyers guide Proposition</CtaButton>
          <GhostButton href="#homeloan" tone="light">
            Your home loan toolkit
          </GhostButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-background-200/80">
          Scroll to find your path
        </span>
        <span className="v2-scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-background-50/30 text-background-50">
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}