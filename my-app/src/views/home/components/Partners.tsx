import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import SectionHeading from '@/components/base/SectionHeading';
import { partners } from '@/mocks/homeData';

export default function Partners() {
  return (
    <section id="partners" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-shell">
        <SectionHeading
          eyebrow="Lenders, Inspectors, and Service Providers"
          title="Our Trusted Partners"
          description="We connect you with trusted lenders, inspectors and service providers across the DMV — so every step of your move is handled by people who share our standards."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 80}>
              <a
                href="#contact"
                className="group relative block h-[320px] overflow-hidden rounded-[26px] md:h-[380px]"
              >
                <img
              loading="lazy"
              decoding="async"
                  src={partner.image}
                  alt={`${partner.name} — trusted BW Metro Properties partner in the DMV`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/45 to-foreground-950/15"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-7">
                  <h3 className="text-scrim-sm font-heading text-[24px] leading-tight text-background-50 md:text-[28px]">
                    {partner.name}
                  </h3>
                  <span className="arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-background-50/40 text-background-50 transition-colors duration-300 group-hover:border-primary-500 group-hover:bg-primary-500">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}