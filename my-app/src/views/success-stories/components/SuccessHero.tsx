import { ArrowDown } from 'lucide-react';
import { successStoriesHero } from '@/mocks/successStoriesData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function SuccessHero() {
  return (
    <section id="top" className="relative min-h-[88svh] w-full overflow-hidden bg-foreground-950">
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={successStoriesHero.image}
        alt="A happy BW Metro Properties client — the people behind the success stories"
        title="BW Metro Properties Success Stories"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Success Stories — DC · MD · VA
        </span>
      </div>
      <div className="pointer-events-none absolute left-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Rated 5.0 · Google Verified
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[88svh] max-w-[1500px] flex-col justify-between gap-12 px-5 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
        <div className="v2-rise max-w-4xl">
          <Eyebrow tone="light">{successStoriesHero.eyebrow}</Eyebrow>
          <h1 className="text-scrim mt-7 font-heading text-[56px] font-normal leading-[0.96] tracking-[-0.03em] text-background-50 md:text-[104px] lg:text-[132px]">
            Success <em className="italic">stories</em>
          </h1>
          <p className="mt-9 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_18px_rgba(0,0,0,0.55)] md:text-[17px]">
            {successStoriesHero.text}
          </p>
        </div>

        <div className="v2-rise flex items-center gap-4" style={{ animationDelay: '300ms' }}>
          <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-background-200/80">
            Scroll to read the reviews
          </span>
          <span className="v2-scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-background-50/30 text-background-50">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}