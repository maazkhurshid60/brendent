'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bath, BedDouble, MapPin, Ruler } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { handpickedListings } from '@/mocks/buyersData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function HandpickedListings() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * (rail.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section id="listings" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="07">New to the Market</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Handpicked <em className="italic">Listings</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              A curated look at homes across the region — explore what is available and see what your next chapter
              could look like.
            </p>
          </Reveal>

          <Reveal className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous listings"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-background-300 text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next listings"
              className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border border-background-300 text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <CtaButton href="#listings">View All</CtaButton>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1280px]">
        <div
          ref={railRef}
          data-product-shop
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {handpickedListings.map((listing) => (
            <article
              key={listing.id}
              className="group flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-[26px] border border-background-200 bg-background-50 transition-colors duration-300 hover:border-foreground-300 sm:w-[360px]"
            >
              <div className="relative h-[260px] w-full overflow-hidden md:h-[300px]">
                <img
              loading="lazy"
              decoding="async"
                  src={listing.image}
                  alt={`${listing.street}, ${listing.city} — home for sale in the DMV`}
                  title={`${listing.street} ${listing.city} home for sale`}
                  className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-background-50/92 px-4 py-1.5 text-[11px] font-semibold text-foreground-900 backdrop-blur">
                  {listing.price}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                <div>
                  <p className="flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.16em] text-foreground-500">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {listing.city}
                  </p>
                  <h3 className="mt-4 font-heading text-[23px] leading-tight text-foreground-950">
                    {listing.street}
                  </h3>
                  <p className="mt-3 font-heading text-[22px] leading-none text-foreground-950">{listing.price}</p>
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-background-200 pt-5">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-foreground-600">
                    <span className="flex items-center gap-1.5">
                      <BedDouble className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                      {listing.beds} Bd
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                      {listing.baths} Ba
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                      {listing.sqft} Sqft
                    </span>
                  </div>
                  <span className="arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground-300 text-foreground-800 transition-colors duration-300 group-hover:border-foreground-950 group-hover:bg-foreground-950 group-hover:text-background-50">
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