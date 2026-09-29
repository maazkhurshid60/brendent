'use client';

import { useState } from 'react';
import { Bookmark, Compass, MapPin } from 'lucide-react';
import type { PropertyListing } from '@/mocks/propertiesData';
import { formatMoney } from '@/views/properties/utils';

interface PropertiesMapProps {
  listings: PropertyListing[];
  activeId: string | null;
  onActiveChange: (id: string | null) => void;
  onSaveSearch?: () => void;
}

export default function PropertiesMap({ listings, activeId, onActiveChange, onSaveSearch }: PropertiesMapProps) {
  const active = listings.find((listing) => listing.id === activeId) ?? null;
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    onSaveSearch?.();
  };

  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[26px] border border-background-300 bg-background-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.035) 0 1px, transparent 1px 44px), repeating-linear-gradient(90deg, rgba(0,0,0,0.035) 0 1px, transparent 1px 44px)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-background-300"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-background-300"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-100/50"
        aria-hidden="true"
      />

      <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-background-300 bg-background-50/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-600 backdrop-blur">
          DMV Metro Map
        </span>
        <span className="rounded-full border border-background-300 bg-background-50/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-600 backdrop-blur">
          {listings.length} Pins
        </span>
      </div>

      <button
        type="button"
        onClick={handleSave}
        className="absolute right-5 top-5 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-background-300 bg-background-50/95 px-4 py-2.5 text-[12px] font-semibold text-foreground-800 backdrop-blur transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950"
      >
        <Bookmark className={`h-3.5 w-3.5 ${saved ? 'fill-current text-primary-500' : ''}`} aria-hidden="true" />
        {saved ? 'Search Saved' : 'Save Search'}
      </button>

      <div
        className="pointer-events-none absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-background-300 bg-background-50 text-foreground-500"
        aria-hidden="true"
      >
        <Compass className="h-5 w-5" />
      </div>

      {listings.map((listing) => {
        const isActive = listing.id === activeId;
        return (
          <button
            key={listing.id}
            type="button"
            onMouseEnter={() => onActiveChange(listing.id)}
            onMouseLeave={() => onActiveChange(null)}
            onClick={() => onActiveChange(listing.id)}
            aria-label={`${listing.address}, ${listing.city} — ${formatMoney(listing.price)}`}
            aria-pressed={isActive}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${listing.x}%`, top: `${listing.y}%` }}
          >
            <span
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all duration-300 ${
                isActive
                  ? 'border-primary-500 bg-primary-500 text-background-50'
                  : 'border-background-300 bg-background-50/95 text-foreground-800 hover:border-foreground-400 hover:text-foreground-950'
              }`}
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {formatMoney(listing.price)}
            </span>
          </button>
        );
      })}

      {listings.length === 0 ? (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="max-w-sm rounded-2xl border border-background-300 bg-background-50/95 px-6 py-5 text-center text-[13px] leading-relaxed text-foreground-600 backdrop-blur">
            To view listings, please zoom further into your desired area or add a location to the search bar.
          </p>
        </div>
      ) : null}

      {active ? (
        <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center gap-4 overflow-hidden rounded-2xl border border-background-300 bg-background-50/96 p-3 backdrop-blur md:right-auto md:w-[340px]">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
            <img
              loading="lazy"
              decoding="async" src={active.image} alt={active.address} className="h-full w-full object-cover object-top" />
          </div>
          <div className="min-w-0">
            <p className="font-heading text-[19px] leading-none text-foreground-950">{formatMoney(active.price)}</p>
            <p className="mt-1.5 truncate text-[12px] text-foreground-600">{active.address}</p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-foreground-400">
              {active.city}, {active.state} · {active.beds} bd · {active.baths} ba
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}