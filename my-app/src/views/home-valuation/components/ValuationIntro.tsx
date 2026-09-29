import { Check } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';
import { valuationBenefits, valuationIntro } from '@/mocks/valuationData';

export default function ValuationIntro() {
  return (
    <section className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[30px] border border-background-200 bg-background-50">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-7 py-14 md:px-14 md:py-20">
            <Reveal>
              <Eyebrow index="01">{valuationIntro.eyebrow}</Eyebrow>
              <h2 className="mt-7 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.02em] text-foreground-950 md:text-[50px]">
                Know Your Home&rsquo;s <em className="italic">Value</em>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
                {valuationIntro.text}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-9 space-y-3.5">
                {valuationBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-900">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-[14.5px] leading-relaxed text-foreground-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10">
                <CtaButton href="#top">{valuationIntro.cta}</CtaButton>
              </div>
            </Reveal>
          </div>

          <div className="relative min-h-[340px] lg:min-h-full">
            <img
              loading="lazy"
              decoding="async"
              src="https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg"
              alt="Arlington Virginia neighborhood — home values across the DMV"
              title="Home value estimates across the DMV market"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-foreground-950/65 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-background-200">
                Instant Estimate
              </p>
              <p className="mt-2 font-heading text-[22px] text-background-50 md:text-[26px]">
                Built for the DMV market
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}