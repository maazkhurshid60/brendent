import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { aboutServices } from '@/mocks/aboutData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function AboutServices() {
  return (
    <section id="services" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index="05">What We Do</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            Serving Every Step of <em className="italic">Your Move</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Buying, selling or exploring — a clear next step for every goal across Washington, DC, Maryland and
            Northern Virginia.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {aboutServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 110}>
              <a
                href={service.href}
                aria-label={`${service.title} with BW Metro Properties`}
                className="group relative flex h-[440px] flex-col justify-end overflow-hidden rounded-[26px] p-8 md:h-[520px]"
              >
                <img
              loading="lazy"
              decoding="async"
                  src={service.image}
                  alt={`${service.title} — BW Metro Properties across the DMV`}
                  title={`${service.title} with BW Metro Properties`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/45 to-foreground-950/10"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-background-200">
                    0{index + 1}
                  </p>
                  <h3 className="text-scrim-sm mt-3 font-heading text-[30px] leading-none text-background-50">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-background-200">
                    {service.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-background-50">
                    Learn more
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}