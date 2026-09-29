import { ArrowUpRight, Bath, BedDouble, MapPin, Ruler } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { featuredProperties } from '@/mocks/homeData';

export default function FeaturedProperties() {
  return (
    <section id="listings" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow text-[11px] text-accent-700">New to the Market</p>
            <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.015em] text-foreground-950 md:text-[48px]">
              Featured <span className="underline-brand">Properties</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              Browse a selection of homes currently available in the DMV region and see what your next chapter could
              look like.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-3">
            <a
              href="/vip-home-search"
              className="whitespace-nowrap rounded-full border border-background-300 px-7 py-4 text-sm font-semibold text-foreground-900 transition-colors duration-300 hover:border-primary-300 hover:text-primary-600"
            >
              VIP Home Search
            </a>
            <a
              href="#listings"
              className="whitespace-nowrap rounded-full bg-primary-500 px-7 py-4 text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
            >
              View All Listings
            </a>
          </Reveal>
        </div>

        <div
          data-product-shop
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3"
        >
          {featuredProperties.map((property, index) => (
            <Reveal key={property.id} delay={index * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-background-200 bg-background-50 transition-colors duration-300 hover:border-primary-300">
                <div className="relative h-[380px] w-full overflow-hidden md:h-[460px]">
                  <img
              loading="lazy"
              decoding="async"
                    src={property.image}
                    alt={`${property.address}, ${property.city} — home for sale in the DMV`}
                    title={`${property.address} ${property.city} home for sale`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/45 to-foreground-950/15"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="eyebrow text-[10px] text-accent-300">{property.tag}</p>
                    <h3 className="text-scrim-sm mt-3 font-heading text-[28px] leading-tight text-background-50 md:text-[32px]">
                      {property.address}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 items-start justify-between gap-5 p-7">
                  <div>
                    <p className="flex items-center gap-2 text-[13px] text-foreground-500">
                      <MapPin className="h-4 w-4 text-primary-500" aria-hidden="true" />
                      {property.city}
                    </p>
                    <p className="mt-4 font-heading text-[24px] leading-none text-foreground-950">
                      {property.price}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-foreground-600">
                      <span className="flex items-center gap-2">
                        <BedDouble className="h-4 w-4 text-primary-500" aria-hidden="true" />
                        {property.beds} Bd
                      </span>
                      <span className="flex items-center gap-2">
                        <Bath className="h-4 w-4 text-primary-500" aria-hidden="true" />
                        {property.baths} Ba
                      </span>
                      <span className="flex items-center gap-2">
                        <Ruler className="h-4 w-4 text-primary-500" aria-hidden="true" />
                        {property.sqft} Sqft
                      </span>
                    </div>
                  </div>
                  <span className="arrow-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-colors duration-300 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-background-50">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}