import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { neighborhoods } from '@/mocks/washingtonData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function Neighborhoods() {
  return (
    <section id="neighborhoods" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="01">Explore the District</Eyebrow>
            <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Neighborhoods
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              From riverside high-rises to leafy historic blocks, get to know the character of every Washington
              neighborhood we serve.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-foreground-500">
              {neighborhoods.length} Featured Areas
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {neighborhoods.map((area, index) => (
            <Reveal key={area.name} delay={(index % 4) * 60}>
              <a
                href={area.href ?? '#featured-listings'}
                aria-label={`Explore ${area.name}`}
                className="group relative block h-[240px] w-full overflow-hidden rounded-[22px] border border-background-200 bg-foreground-950"
              >
                <img
              loading="lazy"
              decoding="async"
                  src={area.image}
                  alt={`${area.name} neighborhood in Washington, D.C.`}
                  title={`${area.name} Washington DC neighborhood`}
                  className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground-950/90 via-foreground-950/25 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-background-50/35 text-background-50 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="absolute inset-x-5 bottom-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-background-200/90">
                    Explore
                  </p>
                  <span
                    className="mt-2 block h-px w-10 origin-left scale-x-0 bg-gradient-to-r from-primary-500 via-accent-500 to-transparent transition-transform duration-700 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                  <h3 className="mt-2 font-heading text-[21px] leading-tight text-background-50">{area.name}</h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}