'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Bath, BedDouble, ChevronDown, MapPin, Ruler } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export interface AreaListing {
  id: string;
  price: string;
  street: string;
  city: string;
  beds: string;
  baths: string;
  sqft: string;
  tag: string;
  image: string;
}

interface AreaListingsProps {
  id: string;
  index: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  text: string;
  listings: AreaListing[];
  viewAllHref: string;
  variant: 'sale' | 'rent';
  tone?: 'light' | 'dark';
  areaName?: string;
}

const sortOptions = ['Newest', 'Lowest Price', 'Highest Price'];

const toNumber = (price: string) => Number(price.replace(/[^0-9]/g, ''));

export default function AreaListings({
  id,
  index,
  eyebrow,
  titleLead,
  titleAccent,
  text,
  listings,
  viewAllHref,
  variant,
  tone = 'light',
  areaName = 'Washington, DC',
}: AreaListingsProps) {
  const [sort, setSort] = useState('Newest');
  const [open, setOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement | null>(null);
  const dark = tone === 'dark';

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const sorted = useMemo(() => {
    if (sort === 'Lowest Price') return [...listings].sort((a, b) => toNumber(a.price) - toNumber(b.price));
    if (sort === 'Highest Price') return [...listings].sort((a, b) => toNumber(b.price) - toNumber(a.price));
    return listings;
  }, [listings, sort]);

  const card = dark
    ? 'border-background-50/10 bg-background-50/[0.05] hover:border-background-50/30'
    : 'border-background-200 bg-background-50 hover:border-foreground-300';
  const headingColor = dark ? 'text-background-50' : 'text-foreground-950';
  const bodyColor = dark ? 'text-background-200/80' : 'text-foreground-600';
  const metaColor = dark ? 'text-background-200/70' : 'text-foreground-500';
  const divider = dark ? 'border-background-50/10' : 'border-background-200';
  const streetColor = dark ? 'text-background-50' : 'text-foreground-950';
  const priceColor = dark ? 'text-background-100' : 'text-foreground-950';
  const specColor = dark ? 'text-background-200/80' : 'text-foreground-600';
  const specIcon = dark ? 'text-background-200/60' : 'text-foreground-400';
  const arrowBtn = dark
    ? 'border-background-50/25 text-background-100 group-hover:border-background-50 group-hover:bg-background-50 group-hover:text-foreground-950'
    : 'border-foreground-300 text-foreground-800 group-hover:border-foreground-950 group-hover:bg-foreground-950 group-hover:text-background-50';

  return (
    <section
      id={id}
      className={`px-5 py-24 md:px-10 md:py-32 ${dark ? 'bg-foreground-950' : 'bg-background-50'}`}
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow tone={dark ? 'light' : 'dark'} index={index}>
              {eyebrow}
            </Eyebrow>
            <h2
              className={`mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] md:text-[52px] ${headingColor}`}
            >
              {titleLead} <em className={`italic ${dark ? 'text-background-100' : 'text-foreground-950'}`}>{titleAccent}</em>
            </h2>
            <p className={`mt-6 text-[15px] leading-relaxed md:text-[16.5px] ${bodyColor}`}>{text}</p>
          </Reveal>

          <Reveal className="flex flex-wrap items-center gap-3">
            {variant === 'sale' ? (
              <div ref={sortRef} className="relative">
                <button
                  type="button"
                  onClick={() => setOpen((value) => !value)}
                  aria-haspopup="listbox"
                  aria-expanded={open}
                  className={`flex items-center gap-2.5 whitespace-nowrap rounded-full border px-5 py-3 text-[13px] font-medium transition-colors duration-300 ${
                    dark
                      ? 'border-background-50/25 text-background-100 hover:border-background-50/60'
                      : 'border-background-300 text-foreground-800 hover:border-foreground-400'
                  }`}
                >
                  {sort}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {open ? (
                  <div
                    role="listbox"
                    className="absolute left-0 top-full z-40 mt-2 w-44 overflow-hidden rounded-2xl border border-background-300 bg-background-50 p-2"
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        role="option"
                        aria-selected={option === sort}
                        onClick={() => {
                          setSort(option);
                          setOpen(false);
                        }}
                        className={`block w-full rounded-xl px-4 py-2.5 text-left text-[13px] transition-colors duration-200 ${
                          option === sort
                            ? 'bg-foreground-950 text-background-50'
                            : 'text-foreground-700 hover:bg-background-100 hover:text-foreground-950'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
            <CtaButton href={viewAllHref}>View More Listings</CtaButton>
          </Reveal>
        </div>

        <div data-product-shop className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
          {sorted.map((listing, i) => (
            <Reveal key={listing.id} delay={(i % 3) * 70}>
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-[26px] border transition-colors duration-300 ${card}`}
              >
                <div className="relative h-[280px] w-full overflow-hidden md:h-[320px]">
                  <img
              loading="lazy"
              decoding="async"
                    src={listing.image}
                    alt={`${listing.street}, ${listing.city} — available in ${areaName}`}
                    title={`${listing.street} ${listing.city} listing`}
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
                    <p className={`flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.16em] ${metaColor}`}>
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {listing.city}
                    </p>
                    <h3 className={`mt-4 font-heading text-[22px] leading-tight md:text-[24px] ${streetColor}`}>
                      {listing.street}
                    </h3>
                    <p className={`mt-4 font-heading text-[24px] leading-none ${priceColor}`}>{listing.price}</p>
                  </div>

                  <div className={`flex items-center justify-between gap-4 border-t pt-5 ${divider}`}>
                    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] ${specColor}`}>
                      {listing.beds ? (
                        <span className="flex items-center gap-1.5">
                          <BedDouble className={`h-4 w-4 ${specIcon}`} aria-hidden="true" />
                          {listing.beds} Bd
                        </span>
                      ) : null}
                      {listing.baths ? (
                        <span className="flex items-center gap-1.5">
                          <Bath className={`h-4 w-4 ${specIcon}`} aria-hidden="true" />
                          {listing.baths} Ba
                        </span>
                      ) : null}
                      <span className="flex items-center gap-1.5">
                        <Ruler className={`h-4 w-4 ${specIcon}`} aria-hidden="true" />
                        {listing.sqft} Sqft
                      </span>
                    </div>
                    <span
                      className={`arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${arrowBtn}`}
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}