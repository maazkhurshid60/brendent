import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { serviceCards } from '@/mocks/homeData';

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[11px] text-accent-700">DMV Real Estate Services</p>
          <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.015em] text-foreground-950 md:text-[50px]">
            Turning Dreams <span className="underline-brand">into Keys</span>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Strategic Real Estate Guidance Across Washington, DC, Maryland &amp; Virginia.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {serviceCards.map((card, index) => (
            <Reveal key={card.id} delay={index * 110}>
              <a
                href={card.href}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-background-200 bg-background-50 transition-colors duration-300 hover:border-primary-300"
              >
                <div className="relative h-[440px] w-full overflow-hidden md:h-[560px]">
                  <img
              loading="lazy"
              decoding="async"
                    src={card.image}
                    alt={`${card.title} — ${card.eyebrow} services across the DC Metro`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/45 to-foreground-950/15"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="eyebrow text-[10px] text-accent-300">{card.eyebrow}</p>
                    <h3 className="text-scrim-sm mt-3 font-heading text-[30px] leading-none text-background-50 md:text-[34px]">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-between gap-5 p-7">
                  <p className="text-[13.5px] leading-relaxed text-foreground-600">{card.text}</p>
                  <span className="arrow-btn flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-colors duration-300 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-background-50">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
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