import { ArrowDown } from 'lucide-react';
import { buyersHero } from '@/mocks/buyersData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import BuyersSearchBar from '@/views/buyers/components/BuyersSearchBar';

export default function BuyersHero() {
  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden bg-foreground-950">
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={buyersHero.image}
        alt="A contemporary home in the DMV region represented by BW Metro Properties"
        title="Homes for buyers across the DMV"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Buyers — DC · MD · VA
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1500px] flex-col justify-end gap-12 px-5 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="v2-rise max-w-3xl">
            <Eyebrow tone="light">{buyersHero.eyebrow}</Eyebrow>
            <h1 className="text-scrim mt-7 font-heading text-[42px] font-normal leading-[0.98] tracking-[-0.03em] text-background-50 md:text-[68px] lg:text-[86px]">
              Find the Right Home in the <em className="italic">DMV</em>
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.45)] md:text-[16.5px]">
              {buyersHero.text}
            </p>
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

        <BuyersSearchBar />
      </div>
    </section>
  );
}