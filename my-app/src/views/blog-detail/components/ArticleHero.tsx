import Link from 'next/link';
import { ArrowDown, CalendarDays, ChevronRight, Clock, User } from 'lucide-react';
import { articleMeta } from '@/mocks/blogDetailData';

export default function ArticleHero() {
  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden bg-foreground-950">
      <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
        src={articleMeta.heroImage}
        alt={articleMeta.heroAlt}
        title={`${articleMeta.title} — BW Metro Properties`}
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      {/* Vertical cinematic meta rails */}
      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          The Journal — Buying
        </span>
      </div>
      <div className="pointer-events-none absolute left-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          DC · MD · VA
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-[1500px] flex-col justify-between gap-12 px-5 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44">
        <div className="v2-rise max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-background-200/80"
          >
            <Link
              href={articleMeta.breadcrumb.href}
              className="transition-colors duration-300 hover:text-background-50"
            >
              {articleMeta.breadcrumb.label}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <Link
              href={articleMeta.breadcrumb.href}
              className="transition-colors duration-300 hover:text-background-50"
            >
              {articleMeta.category}
            </Link>
          </nav>

          <span className="mt-8 inline-flex rounded-full border border-background-50/25 bg-background-50/10 px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-background-50 backdrop-blur-md">
            {articleMeta.category}
          </span>

          <h1 className="text-scrim mt-7 font-heading text-[40px] font-normal leading-[1.05] tracking-[-0.03em] text-background-50 md:text-[64px] lg:text-[80px]">
            {articleMeta.title}
          </h1>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12.5px] text-background-200 [text-shadow:0_1px_18px_rgba(0,0,0,0.55)]">
            <span className="flex items-center gap-2">
              <User className="h-3.5 w-3.5 text-background-200/70" aria-hidden="true" />
              By <span className="font-medium text-background-50">{articleMeta.author}</span>
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="h-3.5 w-3.5 text-background-200/70" aria-hidden="true" />
              {articleMeta.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-background-200/70" aria-hidden="true" />
              {articleMeta.readTime}
            </span>
          </div>
        </div>

        <div className="v2-rise flex items-center gap-4" style={{ animationDelay: '300ms' }}>
          <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-background-200/80">
            Scroll to read
          </span>
          <span className="v2-scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-background-50/30 text-background-50">
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}