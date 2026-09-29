import Reveal from '@/components/base/Reveal';
import { condoHubIntro } from '@/mocks/rentalsData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

export default function CondoHubIntro() {
  return (
    <section id="condo-hub" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <Eyebrow index="01">{condoHubIntro.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              {condoHubIntro.titleLead} <em className="italic">{condoHubIntro.titleAccent}</em>
            </h2>
            <p className="mt-6 text-[16px] font-medium leading-relaxed text-foreground-900 md:text-[17px]">
              {condoHubIntro.subhead}
            </p>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {condoHubIntro.text}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CtaButton href={condoHubIntro.primaryCta.href}>{condoHubIntro.primaryCta.label}</CtaButton>
              <GhostButton href={condoHubIntro.secondaryCta.href}>{condoHubIntro.secondaryCta.label}</GhostButton>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-[440px] w-full overflow-hidden rounded-[30px] md:h-[640px]">
              <img
              loading="lazy"
              decoding="async"
                src={condoHubIntro.image}
                alt="A bright modern condo living room with city views — the DMV Condo Hub"
                title="DMV Condo Hub — condos and rentals across DC, Maryland and Virginia"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}