import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import Icon from '@/components/base/Icon';
import { lookingTo } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function StartV2() {
  return (
    <section className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow index="08" className="justify-center">
            Where Would You Like to Start?
          </Eyebrow>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lookingTo.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <a
                href={item.href}
                className="group relative flex h-[440px] flex-col justify-between overflow-hidden rounded-[26px] p-7 md:h-[520px]"
              >
                <img
              loading="lazy"
              decoding="async"
                  src={item.image}
                  alt={`${item.title} with BW Metro Properties across the DMV`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/50 to-foreground-950/25"
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-background-50/25 bg-background-50/10 text-background-50 backdrop-blur-md">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-heading text-[15px] text-background-50/60">
                    0{index + 1}
                  </span>
                </div>
                <div className="relative">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-background-200">
                    {item.eyebrow}
                  </p>
                  <h3 className="text-scrim-sm mt-3 font-heading text-[30px] leading-none text-background-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-background-200">{item.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-background-50">
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