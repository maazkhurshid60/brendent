import { ArrowDown, MapPin } from 'lucide-react';
import { areas, exploreHero } from '@/mocks/exploreAreaData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function ExploreHero() {
  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden bg-foreground-950">
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={exploreHero.image}
        alt="The Washington, DC region skyline at dusk — neighborhoods served by BW Metro Properties"
        title="Explore Areas — BW Metro Properties"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Areas — DC · MD · VA
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1500px] flex-col justify-end gap-12 px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="v2-rise max-w-3xl">
            <Eyebrow tone="light">{exploreHero.eyebrow}</Eyebrow>
            <h1 className="text-scrim mt-7 font-heading text-[52px] font-normal leading-[0.95] tracking-[-0.03em] text-background-50 md:text-[86px] lg:text-[104px]">
              {exploreHero.titleLead}{' '}
              <em className="italic text-background-100">{exploreHero.titleAccent}</em>
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.45)] md:text-[16.5px]">
              {exploreHero.text}
            </p>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {areas.map((area) => (
                <a
                  key={area.id}
                  href={`#area-${area.id}`}
                  className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-background-50/25 bg-background-50/5 px-4 py-2 text-[12px] font-medium text-background-100 backdrop-blur-sm transition-colors duration-300 hover:border-background-50/70 hover:bg-background-50/15"
                >
                  <MapPin className="h-3.5 w-3.5 text-background-200" aria-hidden="true" />
                  {area.name}
                </a>
              ))}
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
      </div>
    </section>
  );
}