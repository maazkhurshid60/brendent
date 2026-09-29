import { ExternalLink, Quote, Star } from 'lucide-react';
import type { SuccessReview } from '@/mocks/successStoriesData';

interface ReviewCardProps {
  review: SuccessReview;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <figure className="review-card group relative overflow-hidden rounded-[24px] border border-background-200 bg-background-50 p-7 md:p-8">
      <span
        className="review-hairline absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-500 to-accent-500"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-4">
        <div
          className="flex items-center gap-0.5 text-primary-500"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: review.rating }).map((_, starIndex) => (
            <Star key={starIndex} className="h-4 w-4" fill="currentColor" aria-hidden="true" />
          ))}
        </div>
        <span className="review-quote flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-900">
          <Quote className="h-4 w-4" fill="currentColor" aria-hidden="true" />
        </span>
      </div>

      <blockquote className="mt-6 text-[14.5px] leading-relaxed text-foreground-700">{review.text}</blockquote>

      <figcaption className="mt-7 flex items-center gap-4 border-t border-background-200 pt-6">
        <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <img
              loading="lazy"
              decoding="async"
            src={review.avatar}
            alt={`${review.name}, BW Metro Properties client`}
            className="h-full w-full object-cover object-top"
          />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[14.5px] font-semibold text-foreground-950">{review.name}</span>
          <a
            href={review.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="mt-0.5 inline-flex items-center gap-1.5 whitespace-nowrap text-[12px] text-foreground-500 transition-colors duration-300 hover:text-primary-600"
          >
            View review on Google
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        </span>
      </figcaption>
    </figure>
  );
}