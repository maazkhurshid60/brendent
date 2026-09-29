'use client';

import { ArrowUpRight, Bath, BedDouble, MapPin, Ruler } from 'lucide-react';
import type { ExclusiveListing } from '@/mocks/exclusiveData';
import { formatMoney } from '@/views/exclusive-listings/utils';

interface ExclusiveCardProps {
  listing: ExclusiveListing;
  onHover?: (id: string | null) => void;
  highlighted?: boolean;
}

export default function ExclusiveListingCard({ listing, onHover, highlighted = false }: ExclusiveCardProps) {
  return (
    <article
      onMouseEnter={() => onHover?.(listing.id)}
      onMouseLeave={() => onHover?.(null)}
      className={`group flex h-full flex-col overflow-hidden rounded-[26px] border bg-background-50 transition-colors duration-300 ${
        highlighted ? 'border-primary-400' : 'border-background-200 hover:border-foreground-300'
      }`}
    >
      <div className="relative h-[240px] w-full overflow-hidden md:h-[260px]">
        <img
              loading="lazy"
              decoding="async"
          src={listing.image}
          alt={`${listing.address}, ${listing.city} ${listing.state} — exclusive listing`}
          title={`${listing.address} ${listing.city} exclusive listing`}
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground-950/55 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span className="absolute left-5 top-5 rounded-full bg-primary-500 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-background-50">
          {listing.tag}
        </span>
        <span className="absolute right-5 top-5 rounded-full bg-background-50/92 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground-800 backdrop-blur">
          {listing.status}
        </span>
        <p className="text-scrim-sm absolute bottom-4 left-5 font-heading text-[26px] leading-none text-background-50">
          {formatMoney(listing.price)}
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-7">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-foreground-500">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {listing.city}, {listing.state}
          </p>
          <h3 className="mt-3.5 font-heading text-[22px] leading-tight text-foreground-950 md:text-[24px]">
            {listing.address}
          </h3>
          <p className="mt-3 text-[12.5px] text-foreground-500">
            {listing.propertyType} · Built {listing.yearBuilt} · {listing.daysOnMarket} days on market
          </p>
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
              {listing.sqft.toLocaleString('en-US')} Sqft
            </span>
          </div>
          <span className="arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground-300 text-foreground-800 transition-colors duration-300 group-hover:border-foreground-950 group-hover:bg-foreground-950 group-hover:text-background-50">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}