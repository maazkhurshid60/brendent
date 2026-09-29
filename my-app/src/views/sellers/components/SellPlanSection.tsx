import Reveal from '@/components/base/Reveal';
import { positionHome, reachBuyers } from '@/mocks/sellersData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function SellPlanSection() {
  return (
    <section id="marketing" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <Eyebrow index="01">{positionHome.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              the Right <em className="italic">Buyers</em>
            </h2>
            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {positionHome.text}
            </p>
            <div className="mt-10">
              <CtaButton href={positionHome.cta.href}>{positionHome.cta.label}</CtaButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-[440px] w-full overflow-hidden rounded-[30px] md:h-[640px]">
              <img
              loading="lazy"
              decoding="async"
                src={positionHome.image}
                alt="A beautifully staged DMV living room prepared for listing photos"
                title="Staging and positioning your DMV home for sale"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        <div id="channels" className="mt-28 border-t border-background-300 pt-20 md:mt-36 md:pt-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow index="02" className="justify-center">
              {reachBuyers.eyebrow}
            </Eyebrow>
            <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[50px]">
              Across All <em className="italic">Channels</em>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {reachBuyers.text}
            </p>
            <div className="mt-10 flex justify-center">
              <CtaButton href={reachBuyers.cta.href}>{reachBuyers.cta.label}</CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}