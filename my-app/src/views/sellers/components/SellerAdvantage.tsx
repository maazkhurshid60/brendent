import Reveal from '@/components/base/Reveal';
import { localMarket, stressFree } from '@/mocks/sellersData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function SellerAdvantage() {
  return (
    <section id="approach" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-24 md:gap-36">
        {/* Secure the Best Terms — copy left, image right */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <Eyebrow index="05">{stressFree.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Stress-<em className="italic">Free</em>
            </h2>
            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {stressFree.text}
            </p>
            <div className="mt-10">
              <CtaButton href={stressFree.cta.href}>{stressFree.cta.label}</CtaButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-[420px] w-full overflow-hidden rounded-[30px] md:h-[600px]">
              <img
              loading="lazy"
              decoding="async"
                src={stressFree.image}
                alt="A calm, beautifully prepared DMV home ready for its next owner"
                title="A stress-free home sale with BW Metro Properties"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        {/* Expertise in the Local Market — image left, copy right */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="h-[420px] w-full overflow-hidden rounded-[30px] md:h-[600px]">
              <img
              loading="lazy"
              decoding="async"
                src={localMarket.image}
                alt="A DMV neighborhood illustrating local market knowledge"
                title="Local market expertise across the DMV"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 flex flex-col justify-center lg:order-2">
            <Eyebrow index="06">{localMarket.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Local <em className="italic">Market</em>
            </h2>
            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {localMarket.text}
            </p>
            <div className="mt-10">
              <CtaButton href={localMarket.cta.href}>{localMarket.cta.label}</CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}