'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bath, BedDouble, MapPin, Ruler } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { rentalListings, rentalListingsLead } from '@/mocks/rentalsData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

export default function RentalListings() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * (rail.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section id="rentals" className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="light" index="02">
              {rentalListingsLead.eyebrow}
            </Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[52px]">
              {rentalListingsLead.titleLead} <em className="italic text-background-100">{rentalListingsLead.titleAccent}</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-background-200/80 md:text-[16.5px]">
              {rentalListingsLead.text}
            </p>
          </Reveal>

          <Reveal className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous rentals"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-background-50/25 text-background-100 transition-colors duration-300 hover:border-background-50 hover:bg-background-50/10"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next rentals"
              className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border border-background-50/25 text-background-100 transition-colors duration-300 hover:border-background-50 hover:bg-background-50/10"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <GhostButton href={rentalListingsLead.primaryCta.href} tone="light">
              {rentalListingsLead.primaryCta.label}
            </GhostButton>
            <CtaButton href={rentalListingsLead.secondaryCta.href}>{rentalListingsLead.secondaryCta.label}</CtaButton>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1280px]">
        <div
          ref={railRef}
          data-product-shop
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {rentalListings.map((listing) => (
            <article
              key={listing.id}
              className="group flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-[26px] border border-background-50/10 bg-background-50/[0.05] transition-colors duration-300 hover:border-background-50/30 sm:w-[360px]"
            >
              <div className="relative h-[240px] w-full overflow-hidden md:h-[270px]">
                <img
              loading="lazy"
              decoding="async"
                  src={listing.image}
                  alt={`${listing.street}, ${listing.city} — rental available in the DMV`}
                  title={`${listing.street} ${listing.city} rental`}
                  className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                />
                {listing.tag ? (
                  <span className="absolute left-5 top-5 rounded-full bg-primary-500 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-background-50">
                    {listing.tag}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                <div>
                  <p className="flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.16em] text-background-200/70">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {listing.city}
                  </p>
                  <h3 className="mt-4 font-heading text-[22px] leading-tight text-background-50">{listing.street}</h3>
                  <p className="mt-3 font-heading text-[24px] leading-none text-background-100">{listing.price}</p>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-background-50/10 pt-5">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-background-200/80">
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4 text-background-200/60" aria-hidden="true" />
                      {listing.beds} Bd
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="h-4 w-4 text-background-200/60" aria-hidden="true" />
                      {listing.baths} Ba
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="h-4 w-4 text-background-200/60" aria-hidden="true" />
                      {listing.sqft} Sqft
                    </span>
                  </div>
                  <span className="arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-background-50/25 text-background-100 transition-colors duration-300 group-hover:border-background-50 group-hover:bg-background-50 group-hover:text-foreground-950">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}