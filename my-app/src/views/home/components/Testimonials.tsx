import { BadgeCheck, Star } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import SectionHeading from '@/components/base/SectionHeading';
import { testimonials } from '@/mocks/homeData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-3 py-3 md:px-5">
      <div className="mx-auto max-w-[1520px] overflow-hidden rounded-[24px] bg-secondary-950 px-6 py-20 md:rounded-[36px] md:px-14 md:py-28">
        <SectionHeading
          eyebrow="What Clients Are Saying"
          title="Our Client Testimonials"
          description="Real reviews from buyers, sellers and investors who trusted Brandon with one of the biggest decisions of their lives."
          tone="dark"
        />

        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((review, index) => (
            <Reveal key={review.name} delay={index * 60} className="mb-6 break-inside-avoid">
              <figure className="rounded-[24px] border border-background-50/10 bg-secondary-900/60 p-7">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-0.5 text-accent-400">
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <BadgeCheck className="h-5 w-5 text-background-200/70" aria-hidden="true" />
                </div>
                <blockquote className="mt-6 text-[14.5px] leading-relaxed text-background-100">
                  {review.text}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-background-50/10 pt-6">
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
                    <span className="block text-[14px] font-semibold text-background-50">{review.name}</span>
                    <span className="block text-[12px] text-background-200/70">{review.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}