'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { aboutReviews, successStories } from '@/mocks/aboutData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function SuccessStories() {
  const [index, setIndex] = useState(0);
  const total = aboutReviews.length;
  const review = aboutReviews[index];

  const go = (direction: number) => {
    setIndex((current) => (current + direction + total) % total);
  };

  return (
    <section id="reviews" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="flex flex-col">
            <Eyebrow index="04">{successStories.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[38px] font-normal leading-[1.02] tracking-[-0.025em] text-foreground-950 md:text-[58px]">
              Success <em className="italic">Stories</em>
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {successStories.description}
            </p>

            <div className="relative mt-10 overflow-hidden rounded-[28px] border border-background-200 bg-background-100 p-8 md:p-10">
              <div key={index} className="about-fade">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1 text-primary-500">
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4" fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-background-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground-600">
                    Google Review
                  </span>
                </div>

                <blockquote className="mt-7 text-[15.5px] leading-relaxed text-foreground-700 md:text-[16.5px]">
                  {review.text}
                </blockquote>

                <figcaption className="mt-8 flex items-center gap-4 border-t border-background-200 pt-7">
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
                    <span className="block text-[14.5px] font-semibold text-foreground-950">{review.name}</span>
                    <span className="block text-[12.5px] text-foreground-500">{review.role}</span>
                  </span>
                </figcaption>
              </div>

              <div className="mt-9 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {aboutReviews.map((item, dotIndex) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-label={`Show review ${dotIndex + 1} of ${total}`}
                      aria-current={dotIndex === index}
                      onClick={() => setIndex(dotIndex)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIndex === index ? 'w-7 bg-primary-500' : 'w-1.5 bg-background-400 hover:bg-foreground-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    aria-label="Previous review"
                    onClick={() => go(-1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-background-300 text-foreground-900 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next review"
                    onClick={() => go(1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-background-300 text-foreground-900 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <CtaButton href={successStories.ctaHref}>{successStories.cta}</CtaButton>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative">
              <div className="h-[440px] w-full overflow-hidden rounded-[30px] md:h-[720px]">
                <img
              loading="lazy"
              decoding="async"
                  src={successStories.image}
                  alt="A happy BW Metro Properties client outside their new DMV home"
                  title="BW Metro Properties client success stories"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl border border-background-50/20 bg-foreground-950/60 px-5 py-3.5 backdrop-blur-md">
                <span className="font-heading text-[30px] leading-none text-background-50">
                  {successStories.rating}
                </span>
                <span className="flex items-center gap-0.5 text-background-100">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true" />
                  ))}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}