import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import Icon from '@/components/base/Icon';
import { lookingTo } from '@/mocks/homeData';

export default function LookingToBand() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-shell">
        <Reveal className="text-center">
          <p className="eyebrow text-[11px] text-accent-700">Where Would You Like to Start?</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lookingTo.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <a
                href={item.href}
                className="group relative flex h-[420px] flex-col justify-between overflow-hidden rounded-[26px] p-7 md:h-[500px]"
              >
                <img
              loading="lazy"
              decoding="async"
                  src={item.image}
                  alt={`${item.title} with BW Metro Properties across the DMV`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/55 to-foreground-950/35"
                  aria-hidden="true"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-background-50/25 bg-background-50/10 text-background-50 backdrop-blur-md">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <div className="relative">
                  <p className="eyebrow text-[10px] text-accent-300">{item.eyebrow}</p>
                  <h3 className="text-scrim-sm mt-3 font-heading text-[30px] leading-none text-background-50">{item.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-background-200">{item.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-background-50">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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