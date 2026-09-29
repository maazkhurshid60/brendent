import Reveal from '@/components/base/Reveal';
import { aboutBio } from '@/mocks/aboutData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function MeetBrandon() {
  return (
    <section id="meet" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
          <Reveal className="flex flex-col lg:pt-4">
            <Eyebrow index="02">{aboutBio.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[38px] font-normal leading-[1.02] tracking-[-0.025em] text-foreground-950 md:text-[60px]">
              Brandon <em className="italic">Wilson</em>
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              {aboutBio.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className={`text-[15.5px] leading-relaxed md:text-[16.5px] ${
                    index === 0 ? 'text-foreground-700' : 'text-foreground-600'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-11">
              <CtaButton href={aboutBio.ctaHref}>{aboutBio.cta}</CtaButton>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative">
              <div className="h-[480px] w-full overflow-hidden rounded-[30px] md:h-[760px]">
                <img
              loading="lazy"
              decoding="async"
                  src={aboutBio.portrait}
                  alt="Brandon Wilson, DMV realtor with BW Metro Properties"
                  title="Brandon Wilson — BW Metro Properties"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl border border-background-50/20 bg-foreground-950/60 px-6 py-4 backdrop-blur-md">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-background-200">
                    Brandon Wilson
                  </p>
                  <p className="mt-1.5 font-heading text-lg text-background-50">{aboutBio.designations}</p>
                </div>
                <span className="font-heading text-[46px] leading-none text-background-50/25" aria-hidden="true">
                  02
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}