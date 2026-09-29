'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { successReviews } from '@/mocks/successStoriesData';
import { partnersTestimonialCopy } from '@/mocks/partnersData';
import { Eyebrow } from '@/views/home-v2/components/shared';

/**
 * `sectionIndex` lets the combined Resources page renumber this section. On the
 * standalone Partners page it keeps its own number, so nothing changes there.
 */
export default function PartnersTestimonials({ sectionIndex = '05' }: { sectionIndex?: string }) {
  const [index, setIndex] = useState(0);
  const total = successReviews.length;
  const review = successReviews[index];

  const go = (direction: number) => {
    setIndex((current) => (current + direction + total) % total);
  };

  return (
    <section id="testimonials" className="bg-background-50 px-5 py-16 md:px-10 md:py-20">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[30px] bg-foreground-950 px-6 py-16 md:px-14 md:py-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-foreground-950 via-foreground-900 to-foreground-950 opacity-90"
          aria-hidden="true"
        />
        <div className="v2-grain absolute inset-0" aria-hidden="true" />

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="flex flex-col">
            <Eyebrow tone="light" index={sectionIndex}>
              {partnersTestimonialCopy.eyebrow}
            </Eyebrow>
            <h2 className="mt-7 font-heading text-[36px] font-normal leading-[1.03] tracking-[-0.025em] text-background-50 md:text-[54px]">
              Our Client <em className="italic">Testimonials</em>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-background-200 md:text-[16.5px]">
              {partnersTestimonialCopy.text}
            </p>

            <div className="mt-9 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => go(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background-50/30 text-background-50 transition-colors duration-300 hover:border-background-50 hover:bg-background-50 hover:text-foreground-950"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => go(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background-50/30 text-background-50 transition-colors duration-300 hover:border-background-50 hover:bg-background-50 hover:text-foreground-950"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <span className="ml-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-background-300">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <figure key={index} className="about-fade rounded-[26px] border border-background-50/15 bg-background-50/5 p-8 backdrop-blur-sm md:p-10">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-accent-400">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4" fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <span className="whitespace-nowrap rounded-full bg-background-50/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-background-200">
                  Google Review
                </span>
              </div>

              <blockquote className="mt-7 text-[15.5px] leading-relaxed text-background-100 md:text-[17px]">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-background-50/15 pt-7">
                <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <img
              loading="lazy"
              decoding="async"
                    src={review.avatar}
                    alt={`${review.name}, BW Metro Properties client`}
                    className="h-full w-full object-cover object-top"
                  />
                </span>
                <span>
                  <span className="block text-[14.5px] font-semibold text-background-50">{review.name}</span>
                  <a
                    href={review.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="block text-[12.5px] text-background-300 transition-colors duration-300 hover:text-background-50"
                  >
                    View review on Google
                  </a>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}