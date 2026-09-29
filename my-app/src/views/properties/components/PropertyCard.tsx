'use client';

import { useState } from 'react';
import { Bath, BedDouble, Heart, MapPin, Ruler } from 'lucide-react';
import type { PropertyListing } from '@/mocks/propertiesData';
import { formatMoney } from '@/views/properties/utils';

interface PropertyCardProps {
  listing: PropertyListing;
  onHover?: (id: string | null) => void;
  highlighted?: boolean;
}

export default function PropertyCard({ listing, onHover, highlighted = false }: PropertyCardProps) {
  const [saved, setSaved] = useState(false);

  return (
    <article
      onMouseEnter={() => onHover?.(listing.id)}
      onMouseLeave={() => onHover?.(null)}
      className={`group flex flex-col overflow-hidden rounded-[22px] border bg-background-50 transition-colors duration-300 sm:flex-row ${
        highlighted ? 'border-primary-400' : 'border-background-200 hover:border-foreground-300'
      }`}
    >
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-auto sm:w-[184px]">
        <img
              loading="lazy"
              decoding="async"
          src={listing.image}
          alt={`${listing.address}, ${listing.city} ${listing.state} ${listing.zip} — property listing`}
          title={`${listing.address} ${listing.city} ${listing.state} property`}
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground-950/45 via-transparent to-transparent"
          aria-hidden="true"
        />
        {listing.openHouse ? (
          <span className="absolute left-4 top-4 rounded-full bg-primary-500 px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-background-50">
            Open House
          </span>
        ) : null}
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setSaved((prev) => !prev);
          }}
          aria-label={saved ? 'Remove from favorites' : 'Save this property'}
          aria-pressed={saved}
          className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full border border-background-50/40 bg-foreground-950/35 text-background-50 backdrop-blur-sm transition-colors duration-300 hover:bg-foreground-950/60"
        >
          <Heart className={`h-4 w-4 ${saved ? 'fill-current text-primary-400' : ''}`} aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5 p-5 md:p-6">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-heading text-[24px] leading-none text-foreground-950 md:text-[27px]">
              {formatMoney(listing.price)}
            </p>
            <span className="rounded-full bg-secondary-100 px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-secondary-900">
              {listing.status}
            </span>
          </div>
          <h3 className="mt-3.5 text-[14.5px] font-semibold leading-snug text-foreground-900">{listing.address}</h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-foreground-500">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {listing.city}, {listing.state} {listing.zip}
          </p>
        </div>

        <div className="border-t border-background-200 pt-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] text-foreground-600">
            <span className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-foreground-400" aria-hidden="true" />
              {listing.beds} Beds
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-foreground-400" aria-hidden="true" />
              {listing.baths} Baths
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler className="h-4 w-4 text-foreground-400" aria-hidden="true" />
              {listing.sqft.toLocaleString('en-US')} Sqft
            </span>
          </div>
          <p className="mt-2.5 text-[11.5px] text-foreground-400">
            {listing.propertyType} · Built {listing.yearBuilt} · {listing.daysOnMarket} days on market
          </p>
        </div>
      </div>
    </article>
  );
}