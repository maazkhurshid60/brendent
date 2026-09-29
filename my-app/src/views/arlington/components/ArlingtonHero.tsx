import { ArrowDown, MapPin } from 'lucide-react';
import { arlingtonHero } from '@/mocks/arlingtonData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

export default function ArlingtonHero() {
  return (
    <section id="top" className="relative min-h-[94svh] w-full overflow-hidden bg-foreground-950">
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={arlingtonHero.image}
        alt="The Arlington, Virginia skyline and Potomac riverfront at dusk — the area guide market served by BW Metro Properties"
        title="Arlington, VA Area Guide — BW Metro Properties"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Area Guide — Arlington, VA
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[94svh] max-w-[1500px] flex-col justify-between gap-12 px-5 pb-14 pt-36 md:px-10 md:pb-20 md:pt-44">
        <div className="flex flex-col gap-11 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="v2-rise max-w-3xl">
            <Eyebrow tone="light">{arlingtonHero.eyebrow}</Eyebrow>
            <h1 className="text-scrim mt-7 font-heading text-[48px] font-normal leading-[0.96] tracking-[-0.03em] text-background-50 md:text-[88px] lg:text-[108px]">
              Welcome to <em className="italic text-background-100">Arlington</em>
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.45)] md:text-[17px]">
              {arlingtonHero.text}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CtaButton href={arlingtonHero.primaryCta.href}>{arlingtonHero.primaryCta.label}</CtaButton>
              <GhostButton href={arlingtonHero.secondaryCta.href} tone="light">
                {arlingtonHero.secondaryCta.label}
              </GhostButton>
            </div>
          </div>

          <div
            className="v2-rise flex shrink-0 flex-col gap-5 rounded-[26px] border border-background-50/15 bg-foreground-950/45 p-6 backdrop-blur-md lg:max-w-xs"
            style={{ animationDelay: '220ms' }}
          >
            <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-background-200/80">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Now exploring
            </span>
            <p className="font-heading text-[38px] leading-none text-background-50">Arlington, VA</p>
            <p className="text-[13.5px] leading-relaxed text-background-200">{arlingtonHero.areaText}</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div
            className="v2-rise grid w-full max-w-3xl grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4"
            style={{ animationDelay: '340ms' }}
          >
            {arlingtonHero.stats.map((stat) => (
              <div key={stat.label} className="border-t border-background-50/20 pt-4">
                <p className="font-heading text-[30px] leading-none text-background-50 md:text-[34px]">{stat.value}</p>
                <p className="mt-2.5 text-[11px] uppercase tracking-[0.18em] text-background-200/80">{stat.label}</p>
              </div>
            ))}
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