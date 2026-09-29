import { ArrowDown } from 'lucide-react';
import { getInTouchHero } from '@/mocks/getInTouchData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function GetInTouchHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[86svh] w-full items-center justify-center overflow-hidden bg-foreground-950"
    >
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={getInTouchHero.image}
        alt="Washington DC at dusk — get in touch with BW Metro Properties"
        title="Get in Touch — BW Metro Properties"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Get in Touch — DC · MD · VA
        </span>
      </div>
      <div className="pointer-events-none absolute left-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Talk to Brandon Wilson
        </span>
      </div>

      <div className="v2-rise relative mx-auto w-full max-w-[1100px] px-5 pb-28 pt-36 text-center md:px-10 md:pb-32 md:pt-44">
        <Eyebrow tone="light" className="justify-center">
          {getInTouchHero.eyebrow}
        </Eyebrow>
        <h1 className="text-scrim mt-7 font-heading text-[56px] font-normal leading-[0.96] tracking-[-0.03em] text-background-50 md:text-[104px] lg:text-[132px]">
          Real <em className="italic">Estate</em>
        </h1>
        <p className="mx-auto mt-9 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_18px_rgba(0,0,0,0.55)] md:text-[17px]">
          {getInTouchHero.text}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-background-200/80">
          Scroll to connect
        </span>
        <span className="v2-scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-background-50/30 text-background-50">
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}