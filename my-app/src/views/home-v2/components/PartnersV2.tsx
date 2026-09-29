import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/base/Reveal';
import { partners } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function PartnersV2() {
  return (
    <section id="partners" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index="11">Lenders, Inspectors, and Service Providers</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            Our Trusted <em className="italic">Partners</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            We connect you with trusted lenders, inspectors and service providers across the DMV — so every step of your
            move is handled by people who share our standards.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 80}>
              <Link
                href="/resources#network"
                className="group relative block h-[340px] overflow-hidden rounded-[26px] md:h-[400px]"
              >
                <img
              loading="lazy"
              decoding="async"
                  src={partner.image}
                  alt={`${partner.name} — trusted BW Metro Properties partner in the DMV`}
                  className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/35 to-foreground-950/5"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-7">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-background-200">
                      0{index + 1}
                    </p>
                    <h3 className="text-scrim-sm mt-2 font-heading text-[24px] leading-tight text-background-50 md:text-[28px]">
                      {partner.name}
                    </h3>
                  </div>
                  <span className="arrow-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background-50/40 text-background-50 transition-colors duration-300 group-hover:border-background-50 group-hover:bg-background-50 group-hover:text-foreground-950">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}