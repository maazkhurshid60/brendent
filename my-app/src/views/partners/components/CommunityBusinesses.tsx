import Reveal from '@/components/base/Reveal';
import { communityBusinesses, communityCopy } from '@/mocks/partnersData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import PartnerCard from '@/views/partners/components/PartnerCard';

/**
 * `sectionIndex` lets the combined Resources page renumber this section. On the
 * standalone Partners page it keeps its own number, so nothing changes there.
 */
export default function CommunityBusinesses({ sectionIndex = '03' }: { sectionIndex?: string }) {
  return (
    <section id="local-favorites" className="bg-background-50 px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow index={sectionIndex}>{communityCopy.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.025em] text-foreground-950 md:text-[50px]">
            Trusted Community <em className="italic">Businesses</em>
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed text-foreground-600 md:text-[15.5px]">
            Local favorites we personally use and recommend — small businesses that take care of our neighbors the way
            they take care of us.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communityBusinesses.map((business, index) => (
            <Reveal key={business.name} delay={index * 90}>
              <PartnerCard partner={business} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}