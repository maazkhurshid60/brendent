'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';
import { faqCopy, faqs } from '@/mocks/resourcesData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="intro" className="bg-background-100 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow index="05">{faqCopy.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-foreground-950 md:text-[52px]">
              {faqCopy.titleLead} <em className="italic">{faqCopy.titleAccent}</em>
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={item.question} delay={index * 50}>
                  <div className="border-t border-background-300 last:border-b">
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="font-heading text-[18px] leading-snug text-foreground-950 transition-colors duration-300 group-hover:text-primary-600 md:text-[20px]">
                        {item.question}
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-colors duration-300 group-hover:border-foreground-950 group-hover:bg-foreground-950 group-hover:text-background-50">
                        {isOpen ? <Minus className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-xl pb-6 pr-12 text-[14.5px] leading-relaxed text-foreground-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="lg:col-span-5" delay={120}>
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[28px] border border-background-300 bg-foreground-950">
              <div className="relative h-[300px] w-full overflow-hidden bg-background-200">
                <img
              loading="lazy"
              decoding="async"
                  src={faqCopy.profileImage}
                  alt="Brandon Wilson — BW Metro Properties"
                  title="Brandon Wilson — BW Metro Properties"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-[28px] font-normal leading-tight text-background-50 md:text-[34px]">
                  {faqCopy.asideTitleLead} <em className="italic">{faqCopy.asideTitleAccent}</em>
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-background-200/90">{faqCopy.asideText}</p>
                <div className="mt-7">
                  <CtaButton href="/get-in-touch">{faqCopy.asideCta}</CtaButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}