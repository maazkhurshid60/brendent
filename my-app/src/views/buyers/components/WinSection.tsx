import Reveal from '@/components/base/Reveal';
import { winTheRightHome } from '@/mocks/buyersData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function WinSection() {
  return (
    <section className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="h-[420px] w-full overflow-hidden rounded-[30px] md:h-[620px]">
              <img
              loading="lazy"
              decoding="async"
                src={winTheRightHome.image}
                alt="A resolute DMV front door representing a strong offer strategy"
                title="Win the right home with BW Metro Properties"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <Eyebrow index="05">{winTheRightHome.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Win the Right <em className="italic">Home</em>
            </h2>
            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {winTheRightHome.text}
            </p>
            <div className="mt-10">
              <CtaButton href={winTheRightHome.cta.href}>{winTheRightHome.cta.label}</CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}