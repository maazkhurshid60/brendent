import Reveal from '@/components/base/Reveal';
import { discoverCopy } from '@/mocks/shawUStreetData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function DiscoverShaw() {
  return (
    <section id="discover" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[26px] border border-background-200">
            <img
              loading="lazy"
              decoding="async"
              src={discoverCopy.image}
              alt="A leafy residential block in Shaw, Washington DC with historic rowhouses"
              title="Shaw / U Street Corridor neighborhood — Washington DC"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>{discoverCopy.eyebrow}</Eyebrow>
          <h2 className="mt-7 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.02em] text-foreground-950 md:text-[46px]">
            {discoverCopy.title}
          </h2>
          <div className="mt-7 space-y-5">
            {discoverCopy.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}