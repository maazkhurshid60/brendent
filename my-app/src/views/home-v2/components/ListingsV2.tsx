import { ArrowUpRight, Bath, BedDouble, MapPin, Ruler } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { featuredProperties } from '@/mocks/homeData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

export default function ListingsV2() {
  return (
    <section id="listings" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="04">New to the Market</Eyebrow>
            <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Featured <em className="italic">Properties</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              Browse a selection of homes currently available in the DMV region and see what your next chapter could
              look like.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-3">
            <GhostButton href="/vip-home-search">VIP Home Search</GhostButton>
            <CtaButton href="#listings">View All Listings</CtaButton>
          </Reveal>
        </div>

        <div
          data-product-shop
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3"
        >
          {featuredProperties.map((property, index) => (
            <Reveal key={property.id} delay={index * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-background-200 bg-background-50 transition-colors duration-300 hover:border-foreground-300">
                <div className="relative h-[300px] w-full overflow-hidden md:h-[340px]">
                  <img
              loading="lazy"
              decoding="async"
                    src={property.image}
                    alt={`${property.address}, ${property.city} — home for sale in the DMV`}
                    title={`${property.address} ${property.city} home for sale`}
                    className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-background-50/92 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-800 backdrop-blur">
                    {property.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                  <div>
                    <p className="flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.16em] text-foreground-500">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {property.city}
                    </p>
                    <h3 className="mt-4 font-heading text-[24px] leading-tight text-foreground-950 md:text-[27px]">
                      {property.address}
                    </h3>
                    <p className="mt-4 font-heading text-[24px] leading-none text-foreground-950">{property.price}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-background-200 pt-5">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-foreground-600">
                      <span className="flex items-center gap-1.5">
                        <BedDouble className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                        {property.beds} Bd
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Bath className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                        {property.baths} Ba
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Ruler className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                        {property.sqft} Sqft
                      </span>
                    </div>
                    <span className="arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground-300 text-foreground-800 transition-colors duration-300 group-hover:border-foreground-950 group-hover:bg-foreground-950 group-hover:text-background-50">
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