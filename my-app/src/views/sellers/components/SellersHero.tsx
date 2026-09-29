import { ArrowDown } from 'lucide-react';
import { sellHero } from '@/mocks/sellersData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import SellLeadForm from '@/views/sellers/components/SellLeadForm';

export default function SellersHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-foreground-950"
    >
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={sellHero.image}
        alt="A bright, modern kitchen in a recently listed DMV home"
        title="Sell your DMV home with BW Metro Properties"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Sell With BW Metro — DC · MD · VA
        </span>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center gap-14 px-5 pb-12 pt-32 md:px-10 md:pb-16 md:pt-40">
        <div className="v2-rise max-w-3xl">
          <Eyebrow tone="light">{sellHero.eyebrow}</Eyebrow>
          <h1 className="text-scrim mt-7 font-heading text-[38px] font-normal leading-[0.98] tracking-[-0.03em] text-background-50 md:text-[62px] lg:text-[78px]">
            {sellHero.title}
          </h1>
          <p className="text-scrim-sm mt-7 max-w-2xl text-[15px] leading-relaxed text-background-100 md:text-[17px]">
            {sellHero.text}
          </p>
        </div>

        <div className="v2-rise" style={{ animationDelay: '180ms' }}>
          <SellLeadForm />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
            <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
              src={sellHero.equalHousing}
              alt="Equal Housing Opportunity"
              title="Equal Housing Opportunity"
              className="h-9 w-auto opacity-85"
            />
            <span className="hidden h-8 w-px bg-background-50/25 sm:block" aria-hidden="true" />
            <p className="text-[12px] leading-relaxed text-background-200/80">
              {sellHero.copyright}
              {sellHero.legalLinks.map((link) => (
                <span key={link.label}>
                  <span className="mx-2 text-background-200/40" aria-hidden="true">
                    |
                  </span>
                  <a
                    href={link.href}
                    rel="nofollow"
                    className="text-background-200/80 underline-offset-2 transition-colors duration-300 hover:text-background-50 hover:underline"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </p>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
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