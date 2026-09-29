import Reveal from '@/components/base/Reveal';
import { whyBrandon } from '@/mocks/rentalsData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function WhyBrandon() {
  return (
    <section id="about" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative h-[460px] w-full overflow-hidden rounded-[30px] bg-secondary-100 md:h-[600px]">
                <img
              loading="lazy"
              decoding="async"
                  src={whyBrandon.image}
                  alt="Brandon Wilson, real estate advisor with BW Metro Properties"
                  title="Why work with Brandon Wilson for condos and rentals"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="mt-10">
                <h3 className="font-heading text-[30px] leading-tight text-foreground-950 md:text-[36px]">
                  {whyBrandon.readyTitleLead} <em className="italic">{whyBrandon.readyTitleAccent}</em>
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-foreground-600">{whyBrandon.readyText}</p>
                <div className="mt-8">
                  <CtaButton href={whyBrandon.readyCta.href}>{whyBrandon.readyCta.label}</CtaButton>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow index="08">{whyBrandon.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              {whyBrandon.titleLead} <em className="italic">{whyBrandon.titleAccent}</em>
            </h2>

            <div className="mt-10 flex flex-col gap-5">
              {whyBrandon.points.map((point, index) => (
                <article
                  key={point.title}
                  className="flex gap-5 rounded-[24px] border border-background-300 bg-background-100 p-7 transition-colors duration-300 hover:border-foreground-300 md:p-8"
                >
                  <span className="font-heading text-[15px] text-foreground-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-[24px] leading-tight text-foreground-950 md:text-[27px]">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-foreground-600">{point.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}