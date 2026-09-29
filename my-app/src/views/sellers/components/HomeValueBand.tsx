import Reveal from '@/components/base/Reveal';
import { homeValue } from '@/mocks/sellersData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function HomeValueBand() {
  return (
    <section id="value" className="bg-background-100 px-5 py-6 md:px-10 md:py-8">
      <div className="relative mx-auto flex max-w-[1420px] flex-col items-center overflow-hidden rounded-[30px] px-6 py-24 text-center md:px-14 md:py-32">
        <img
              loading="lazy"
              decoding="async"
          src={homeValue.image}
          alt="The DMV region at dusk — home values across the market served by BW Metro Properties"
          title="Know your DMV home's value"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-foreground-950/82" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-foreground-950/55 via-transparent to-foreground-950/75"
          aria-hidden="true"
        />
        <div className="v2-grain absolute inset-0" aria-hidden="true" />

        <Reveal className="relative max-w-3xl">
          <Eyebrow tone="light" className="justify-center">
            {homeValue.eyebrow}
          </Eyebrow>
          <h2 className="mt-8 font-heading text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-background-50 [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] md:text-[60px]">
            Know Your Home&rsquo;s <em className="italic">Value</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.5)] md:text-[16.5px]">
            {homeValue.text}
          </p>
          <div className="mt-10 flex justify-center">
            <CtaButton href={homeValue.cta.href}>{homeValue.cta.label}</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}