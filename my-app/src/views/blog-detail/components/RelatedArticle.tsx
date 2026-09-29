import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { relatedArticle } from '@/mocks/blogDetailData';

export default function RelatedArticle() {
  return (
    <section className="mt-14 border-t border-background-200 pt-10">
      <Reveal>
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-foreground-500">
          {relatedArticle.eyebrow}
        </p>

        <a
          href={relatedArticle.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="ref-card group mt-5 flex flex-col overflow-hidden rounded-[22px] border border-background-200 bg-background-50 sm:flex-row"
        >
          <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[230px]">
            <img
              loading="lazy"
              decoding="async"
              src={relatedArticle.image}
              alt={`${relatedArticle.title} — BW Metro Properties blog`}
              title={`${relatedArticle.title} — BW Metro Properties`}
              className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
            />
          </div>

          <div className="flex flex-1 flex-col p-6 md:p-8">
            <h3 className="font-heading text-[21px] font-normal leading-snug tracking-[-0.01em] text-foreground-950 md:text-[24px]">
              {relatedArticle.title}
            </h3>
            <p className="mt-3 text-[13.5px] leading-relaxed text-foreground-600">
              {relatedArticle.excerpt}
            </p>
            <span className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-foreground-900">
              Read Article
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </a>
      </Reveal>
    </section>
  );
}