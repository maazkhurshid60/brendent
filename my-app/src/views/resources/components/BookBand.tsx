import Reveal from '@/components/base/Reveal';
import { Eyebrow } from '@/views/home-v2/components/shared';
import ResourceBrochureForm from '@/views/resources/components/ResourceBrochureForm';

interface BookBandProps {
  id: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  text: string;
  cover: string;
  bookTitle: string;
  tone?: 'light' | 'muted';
}

export default function BookBand({ id, eyebrow, titleLead, titleAccent, text, cover, bookTitle, tone = 'light' }: BookBandProps) {
  const bg = tone === 'muted' ? 'bg-background-100' : 'bg-background-50';

  return (
    <section id={id} className={`${bg} px-5 py-14 md:px-10 md:py-20`}>
      <div className="relative mx-auto max-w-[1420px] overflow-hidden rounded-[30px] bg-foreground-950 px-6 py-16 md:px-14 md:py-20">
        <div className="v2-grain absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[36px] font-normal leading-[1.04] tracking-[-0.03em] text-background-50 md:text-[56px]">
              {titleLead} <em className="italic">{titleAccent}</em>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-background-200">{text}</p>
            <div className="mt-9">
              <ResourceBrochureForm />
            </div>
          </Reveal>

          <Reveal delay={140} className="order-first lg:order-last">
            <div className="flex justify-center">
              <div className="res-book animate-float-slow relative w-[220px] max-w-full sm:w-[248px]">
                <div className="relative overflow-hidden rounded-l-[4px] rounded-r-[10px] border border-background-50/15">
                  <img
              loading="lazy"
              decoding="async"
                    src={cover}
                    alt={`${bookTitle} guide cover`}
                    title={`${bookTitle} — BW Metro Properties`}
                    className="aspect-[376/500] w-full object-cover"
                  />
                  <span
                    className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/55 via-black/20 to-transparent"
                    aria-hidden="true"
                  />
                </div>
                <span
                  className="absolute -left-1 top-[6%] h-[88%] w-1 rounded-full bg-primary-500/60"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}