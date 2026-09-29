'use client';

import { useMemo, useState } from 'react';
import { Bath, BedDouble, ChevronDown, MapPin, Ruler } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { Eyebrow } from '@/views/home-v2/components/shared';
import {
  soldListings,
  soldMapMessage,
  soldRegions,
  soldSortOptions,
} from '@/mocks/recentlySoldData';
import type { SoldListing } from '@/mocks/recentlySoldData';

function SoldCard({ listing }: { listing: SoldListing }) {
  const location = `${listing.city}, ${listing.state} ${listing.zip}`;
  return (
    <article className="sold-card group flex h-full flex-col overflow-hidden rounded-[26px] border border-background-200 bg-background-50">
      <div className="relative h-[280px] w-full overflow-hidden md:h-[320px]">
        <img
              loading="lazy"
              decoding="async"
          src={listing.image}
          alt={`Sold: ${listing.address}, ${location}`}
          title={`${listing.address} ${location} recently sold`}
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-accent-500 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-background-50">
          Closed
        </span>
        <span className="absolute bottom-5 right-5 rounded-full bg-background-50/92 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground-700 backdrop-blur">
          {listing.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5 p-7">
        <div>
          <p className="flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.16em] text-foreground-500">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {location}
          </p>
          <h3 className="mt-4 font-heading text-[23px] leading-tight text-foreground-950 md:text-[26px]">
            {listing.address}
          </h3>
          <p className="mt-4 font-heading text-[24px] leading-none text-foreground-950">{listing.price}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-background-200 pt-5 text-[12.5px] text-foreground-600">
          {listing.beds !== null ? (
            <span className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-foreground-400" aria-hidden="true" />
              {listing.beds} Bd
            </span>
          ) : null}
          {listing.baths !== null ? (
            <span className="flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-foreground-400" aria-hidden="true" />
              {listing.baths} Ba
            </span>
          ) : null}
          <span className="flex items-center gap-1.5">
            <Ruler className="h-4 w-4 text-foreground-400" aria-hidden="true" />
            {listing.sqft} Sqft
          </span>
        </div>
      </div>
    </article>
  );
}

export default function SoldListings() {
  const [region, setRegion] = useState('all');
  const [sort, setSort] = useState('recent');

  const filtered = useMemo(() => {
    const list = soldListings.filter((listing) => region === 'all' || listing.region === region);
    if (sort === 'price-desc') return [...list].sort((a, b) => b.priceValue - a.priceValue);
    if (sort === 'price-asc') return [...list].sort((a, b) => a.priceValue - b.priceValue);
    return list;
  }, [region, sort]);

  return (
    <section id="listings" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow index="02">Recently Sold</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            Homes I&rsquo;ve <em className="italic">Helped Close</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            A selection of homes recently sold across Washington, D.C., Maryland and Northern Virginia — proof of what
            strategic pricing, strong negotiation and results-driven execution can achieve.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative h-[400px] w-full overflow-hidden rounded-[30px] border border-background-300 bg-background-100 md:h-[500px]">
            <iframe
              title="Map of recently sold homes across the Washington DC metro"
              src="https://www.google.com/maps?q=Washington%2C%20DC&z=9&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-4 top-4 max-w-[280px] rounded-2xl border border-background-200 bg-background-50/95 p-5 backdrop-blur md:left-6 md:top-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground-500">Sold Map</p>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground-600">{soldMapMessage}</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            {soldRegions.map((option) => {
              const active = region === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setRegion(option.id)}
                  aria-pressed={active}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[12.5px] font-medium transition-colors duration-300 ${
                    active
                      ? 'border-foreground-950 bg-foreground-950 text-background-50'
                      : 'border-background-300 text-foreground-600 hover:border-foreground-400 hover:text-foreground-950'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-5">
            <p className="whitespace-nowrap text-[12.5px] text-foreground-500">
              <span className="font-semibold text-foreground-900">{filtered.length}</span> sold homes
            </p>
            <div className="relative">
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                aria-label="Sort recently sold homes"
                className="cursor-pointer appearance-none rounded-full border border-background-300 bg-background-50 py-2.5 pl-5 pr-11 text-[12.5px] font-medium text-foreground-800 transition-colors duration-300 hover:border-foreground-400 focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                {soldSortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-500"
                aria-hidden="true"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {filtered.map((listing, index) => (
            <Reveal key={listing.id} delay={(index % 3) * 90}>
              <SoldCard listing={listing} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-[15px] text-foreground-500">
            No sold homes match this area yet. Try another area or get in touch for a private market review.
          </p>
        ) : null}
      </div>
    </section>
  );
}