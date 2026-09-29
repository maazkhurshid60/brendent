import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { directoryEntries, partnersIntro } from '@/mocks/partnersData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

/**
 * `sectionIndex` lets the combined Resources page renumber this section. On the
 * standalone Partners page it keeps its own number, so nothing changes there.
 */
export default function PartnersIntro({ sectionIndex = '01' }: { sectionIndex?: string }) {
  return (
    <section id="network" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal className="flex flex-col">
            <Eyebrow index={sectionIndex}>{partnersIntro.eyebrow}</Eyebrow>
            <h2 className="mt-7 font-heading text-[38px] font-normal leading-[1.02] tracking-[-0.025em] text-foreground-950 md:text-[58px]">
              My Go-To <em className="italic">Partners</em>
            </h2>
            <div className="mt-7 flex flex-col gap-5">
              {partnersIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="max-w-xl text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton href="#partners">Meet the Partners</CtaButton>
              <GhostButton href="/get-in-touch">
                Become a partner
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </GhostButton>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative">
              <div className="relative h-[460px] w-full overflow-hidden rounded-[30px] bg-background-100 md:h-[620px]">
                <img
              loading="lazy"
              decoding="async"
                  src={partnersIntro.image}
                  alt="Brandon Wilson, the realtor behind the BW Metro Properties partner network"
                  title="Brandon Wilson — BW Metro Properties Partners"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/45 via-transparent to-transparent" aria-hidden="true" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl border border-background-50/20 bg-foreground-950/65 px-5 py-4 backdrop-blur-md">
                {/* Counted from the directory, not typed in. It read "14+" against a
                    list of 8, because the number was written once and the list
                    changed underneath it. */}
                <span className="font-heading text-[30px] leading-none text-background-50">
                  {directoryEntries.length}
                </span>
                <span className="text-[11.5px] leading-snug text-background-100">
                  Vetted professionals across lending, inspection, title, trades and insurance.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}