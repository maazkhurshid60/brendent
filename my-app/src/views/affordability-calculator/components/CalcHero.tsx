import { ArrowDown, Calculator } from 'lucide-react';
import { affordabilityHero, calcStatStrip } from '@/mocks/calcData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function CalcHero() {
  return (
    <section id="top" className="relative min-h-[80svh] w-full overflow-hidden bg-foreground-950">
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={affordabilityHero.image}
        alt="A warm modern home exterior at golden hour — estimating what you can afford in the DMV"
        title="Affordability Calculator — BW Metro Properties"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Calculators — DC · MD · VA
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[80svh] max-w-[1500px] flex-col justify-end gap-12 px-5 pb-14 pt-36 md:px-10 md:pb-20 md:pt-44">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="v2-rise max-w-3xl">
            <Eyebrow tone="light">{affordabilityHero.eyebrow}</Eyebrow>
            <h1 className="text-scrim mt-7 font-heading text-[46px] font-normal leading-[0.98] tracking-[-0.03em] text-background-50 md:text-[78px] lg:text-[92px]">
              {affordabilityHero.titleLead}{' '}
              <em className="italic text-background-100">{affordabilityHero.titleAccent}</em>
            </h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.45)] md:text-[16.5px]">
              {affordabilityHero.text}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <CtaButton href="#calculator">Estimate My Budget</CtaButton>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-50/35 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:border-background-50/80 hover:bg-background-50/10"
              >
                <Calculator className="h-4 w-4" aria-hidden="true" />
                Talk to Brandon
              </a>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-background-200/80">
              Scroll to calculate
            </span>
            <span className="v2-scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-background-50/30 text-background-50">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="v2-rise grid grid-cols-2 gap-x-6 gap-y-6 border-t border-background-50/20 pt-8 sm:grid-cols-4 md:gap-10">
          {calcStatStrip.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-[26px] leading-none text-background-50 md:text-[32px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-background-200/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}