import { MapPin } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { mortgageHero, mortgageStates } from '@/mocks/mortgageData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function MortgageRegions() {
  return (
    <section className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow index="04">Local impact</Eyebrow>
            <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[46px]">
              Where you buy changes <em className="italic">what you pay</em>
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              Property taxes are collected monthly as part of your payment, and effective rates vary widely from state to
              state. A rate difference of one percent can shift your monthly figure by hundreds. These are the
              representative rates our calculator applies.
            </p>

            <div className="mt-9 overflow-hidden rounded-[26px] border border-background-300">
              <div className="h-[240px] w-full overflow-hidden md:h-[300px]">
                <img
              loading="lazy"
              decoding="async"
                  src={mortgageHero.image}
                  alt="A DMV home at golden hour — where local property taxes shape your monthly payment"
                  title="State property tax regions — Mortgage Calculator"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {mortgageStates.map((state, index) => (
              <Reveal key={state.id} delay={index * 60}>
                <div className="group flex h-full flex-col justify-between rounded-[22px] border border-background-300 bg-background-50 p-6 transition-colors duration-300 hover:border-foreground-400">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex items-center gap-2 text-[15px] font-medium text-foreground-950">
                      <MapPin className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                      {state.name}
                    </span>
                    <span className="font-heading text-[26px] leading-none text-primary-600">
                      {state.taxRate.toFixed(2)}%
                    </span>
                  </div>
                  <p className="mt-6 text-[13px] leading-relaxed text-foreground-500">{state.note}</p>
                  <p className="mt-3 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground-400">
                    Effective property tax rate
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}