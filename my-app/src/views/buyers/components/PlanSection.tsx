import Reveal from '@/components/base/Reveal';
import { closingHandled, planControl } from '@/mocks/buyersData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function PlanSection() {
  return (
    <section className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="flex flex-col justify-center">
            <Eyebrow index="01">{planControl.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              You in <em className="italic">Control</em>
            </h2>
            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {planControl.text}
            </p>
            <div className="mt-10 flex flex-col gap-5">
              <div>
                <CtaButton href={planControl.cta.href}>{planControl.cta.label}</CtaButton>
              </div>
              <p className="text-[14px] leading-relaxed text-foreground-600">
                {planControl.notePrefix}{' '}
                <a
                  href={planControl.noteLinkHref}
                  className="font-medium text-foreground-950 underline decoration-primary-400 decoration-2 underline-offset-4 transition-colors duration-300 hover:text-primary-600"
                >
                  {planControl.noteLinkLabel}
                </a>{' '}
                {planControl.noteSuffix}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-[420px] w-full overflow-hidden rounded-[30px] md:h-[620px]">
              <img
              loading="lazy"
              decoding="async"
                src={planControl.image}
                alt="A happy family at the front of their new DMV home"
                title="Buying a home in the DMV with BW Metro Properties"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        <div id="guide" className="mt-28 border-t border-background-300 pt-20 md:mt-36 md:pt-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow index="02" className="justify-center">
              {closingHandled.eyebrow}
            </Eyebrow>
            <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[50px]">
              Closing Day—<em className="italic">Handled</em>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {closingHandled.text}
            </p>
            <div className="mt-10 flex justify-center">
              <CtaButton href={closingHandled.cta.href}>{closingHandled.cta.label}</CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}