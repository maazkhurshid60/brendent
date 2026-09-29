import Reveal from '@/components/base/Reveal';
import { featuredPartners, featuredPartnersCopy } from '@/mocks/partnersData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import PartnerCard from '@/views/partners/components/PartnerCard';

/**
 * `sectionIndex` lets the combined Resources page renumber this section. On the
 * standalone Partners page it keeps its own number, so nothing changes there.
 */
export default function FeaturedPartners({ sectionIndex = '02' }: { sectionIndex?: string }) {
  return (
    <section id="partners" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow index={sectionIndex}>{featuredPartnersCopy.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[36px] font-normal leading-[1.03] tracking-[-0.025em] text-foreground-950 md:text-[54px]">
              Our Trusted <em className="italic">Partners</em>
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] leading-relaxed text-foreground-600 md:text-[15.5px]">
            Carefully selected lenders, inspectors, title and service providers who share our commitment to quality,
            communication and results.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPartners.map((partner, index) => (
            <Reveal key={partner.name} delay={(index % 3) * 90}>
              <PartnerCard partner={partner} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}