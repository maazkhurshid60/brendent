'use client';

import type { FormEvent } from 'react';
import { ArrowDown, MapPin, Search } from 'lucide-react';
import { propertiesHero } from '@/mocks/propertiesData';
import { Eyebrow } from '@/views/home-v2/components/shared';

interface PropertiesHeroProps {
  location: string;
  onLocationChange: (value: string) => void;
  onSearch: () => void;
}

export default function PropertiesHero({ location, onLocationChange, onSearch }: PropertiesHeroProps) {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <section id="top" className="relative flex min-h-[86svh] w-full flex-col justify-end overflow-hidden bg-foreground-950">
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={propertiesHero.image}
        alt="A tree-lined metropolitan neighborhood at golden hour, representing homes for sale across the DMV"
        title="Browse properties across the DMV"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Live MLS · DC · MD · VA
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
        <div className="v2-rise max-w-3xl">
          <Eyebrow tone="light">{propertiesHero.eyebrow}</Eyebrow>
          <h1 className="text-scrim mt-7 font-heading text-[40px] font-normal leading-[0.98] tracking-[-0.03em] text-background-50 md:text-[64px] lg:text-[80px]">
            {propertiesHero.titleLead} <em className="italic">{propertiesHero.titleAccent}</em>
          </h1>
          <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.45)] md:text-[16.5px]">
            {propertiesHero.text}
          </p>
        </div>

        <form
          onSubmit={submit}
          className="v2-rise mt-10 flex w-full max-w-3xl flex-col gap-2 rounded-[22px] border border-background-50/15 bg-foreground-950/40 p-2 backdrop-blur-md sm:flex-row sm:items-center sm:rounded-full"
        >
          <span className="hidden items-center gap-2 rounded-full bg-background-50/10 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-background-100 sm:flex">
            Map Search
          </span>
          <label className="flex flex-1 items-center gap-2.5 rounded-full bg-background-50 px-4 py-3">
            <MapPin className="h-4 w-4 shrink-0 text-foreground-400" aria-hidden="true" />
            <span className="sr-only">Enter City, Address or Zip</span>
            <input
              type="search"
              name="location"
              value={location}
              onChange={(event) => onLocationChange(event.target.value)}
              placeholder="Enter City, Address or Zip"
              className="w-full bg-transparent text-[13.5px] text-foreground-900 outline-none placeholder:text-foreground-400"
            />
          </label>
          <button
            type="submit"
            className="btn-shimmer inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-3.5 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
          </button>
        </form>

        <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <a
            href="#properties-feed"
            className="inline-flex items-center gap-2 text-[12.5px] font-medium text-background-200 underline-offset-4 transition-colors duration-300 hover:text-background-50 hover:underline"
          >
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
            Search Agent / Office
          </a>
          <dl className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-background-50/12 bg-background-50/5 sm:w-auto sm:grid-cols-3">
            {propertiesHero.highlights.map((item) => (
              <div key={item.label} className="bg-foreground-950/25 px-5 py-3.5 backdrop-blur-sm">
                <dt className="text-[9.5px] font-semibold uppercase tracking-[0.24em] text-background-200/80">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-[12.5px] leading-snug text-background-100">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 hidden items-center gap-4 lg:flex">
          <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-background-200/80">
            Scroll to browse
          </span>
          <span className="v2-scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-background-50/30 text-background-50">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}