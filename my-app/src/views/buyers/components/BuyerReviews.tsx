'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { buyerReviews, buyerReviewsImage } from '@/mocks/buyersData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function BuyerReviews() {
  const [index, setIndex] = useState(0);
  const review = buyerReviews[index];

  const go = (direction: number) => {
    setIndex((current) => (current + direction + buyerReviews.length) % buyerReviews.length);
  };

  return (
    <section id="testimonials" className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="h-[420px] w-full overflow-hidden rounded-[30px] md:h-[620px]">
              <img
              loading="lazy"
              decoding="async"
                src={buyerReviewsImage}
                alt="Brandon Wilson with a happy DMV buyer client"
                title="BW Metro Properties client success stories"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <Eyebrow tone="light" index="06">
              In the Words of our Clients
            </Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[52px]">
              Success <em className="italic">Stories</em>
            </h2>

            <figure className="mt-9 rounded-[26px] border border-background-50/10 bg-background-50/[0.04] p-8 md:p-9">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-0.5 text-background-100">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4" fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background-200/60">
                  Google Review
                </span>
              </div>

              <blockquote className="mt-6 max-h-[280px] overflow-y-auto pr-2 text-[14.5px] leading-relaxed text-background-100">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3.5 border-t border-background-50/10 pt-6">
                <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <img
              loading="lazy"
              decoding="async"
                    src={review.avatar}
                    alt={`${review.name}, BW Metro Properties buyer`}
                    className="h-full w-full object-cover object-top"
                  />
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-background-50">{review.name}</span>
                  <span className="block text-[12px] text-background-200/70">Verified Google review</span>
                </span>
              </figcaption>
            </figure>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous review"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-background-50/25 text-background-100 transition-colors duration-300 hover:border-background-50 hover:bg-background-50/10"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next review"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-background-50/25 text-background-100 transition-colors duration-300 hover:border-background-50 hover:bg-background-50/10"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <div className="ml-2 flex items-center gap-2" role="tablist" aria-label="Choose a review">
                  {buyerReviews.map((item, dotIndex) => (
                    <button
                      key={item.name}
                      type="button"
                      role="tab"
                      aria-selected={dotIndex === index}
                      aria-label={`Show review from ${item.name}`}
                      onClick={() => setIndex(dotIndex)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        dotIndex === index ? 'w-7 bg-background-50' : 'w-2 bg-background-50/30 hover:bg-background-50/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <CtaButton href="#testimonials">Read All</CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}