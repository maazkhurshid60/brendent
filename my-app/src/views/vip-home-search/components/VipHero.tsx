import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Eyebrow } from '@/views/home-v2/components/shared';
import VipSteps from '@/views/vip-home-search/components/VipSteps';
import VipSearchPanel from '@/views/vip-home-search/components/VipSearchPanel';
import { vipDescribe, vipIntro } from '@/mocks/vipSearchData';

export default function VipHero() {
  return (
    <section className="relative w-full overflow-hidden bg-foreground-950">
      <div className="grid min-h-[100svh] grid-cols-1 lg:grid-cols-[1.02fr_0.98fr]">
        {/* Left — VIP introduction + private-search timeline */}
        <div className="relative flex flex-col justify-center overflow-hidden px-6 py-24 md:px-14 md:py-28 lg:pr-16">
          <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
            src="https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-1568.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-foreground-950/85" aria-hidden="true" />
          <div className="v2-grain absolute inset-0" aria-hidden="true" />
          <div
            className="absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-background-50/20 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="relative max-w-xl">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-background-50/25 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-background-100 transition-colors duration-300 hover:border-background-50/70 hover:bg-background-50/10"
            >
              <ArrowLeft
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Back
            </Link>

            <div className="v2-rise mt-10">
              <Eyebrow tone="light">{vipIntro.eyebrow}</Eyebrow>
              <h1 className="text-scrim mt-6 font-heading text-[44px] font-normal leading-[0.98] tracking-[-0.03em] text-background-50 md:text-[70px]">
                {vipIntro.title}
              </h1>
              <p className="text-scrim-sm mt-6 max-w-md text-[15px] leading-relaxed text-background-200 md:text-[16.5px]">
                {vipIntro.text}
              </p>
            </div>

            <VipSteps />
          </div>
        </div>

        {/* Right — describe your dream home / AI search */}
        <div className="relative flex flex-col justify-center overflow-hidden px-6 py-24 md:px-14 md:py-28">
          <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
            src="https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg"
            alt="Tree-lined residential street in Alexandria, Virginia — the kind of neighborhood BW Metro Properties buyers search"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-foreground-950/80 via-foreground-950/55 to-foreground-950/85"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-foreground-950/25" aria-hidden="true" />

          <div className="relative mx-auto w-full max-w-xl">
            <div className="v2-rise" style={{ animationDelay: '160ms' }}>
              <Eyebrow tone="light">{vipDescribe.eyebrow}</Eyebrow>
              <h2 className="text-scrim mt-6 font-heading text-[34px] leading-[1.02] tracking-[-0.025em] text-background-50 md:text-[50px]">
                {vipDescribe.title}
              </h2>
              <p className="text-scrim-sm mt-5 max-w-lg text-[15px] leading-relaxed text-background-100 md:text-[16px]">
                {vipDescribe.text}
              </p>
            </div>

            <div className="v2-rise" style={{ animationDelay: '320ms' }}>
              <VipSearchPanel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}