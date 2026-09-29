'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { blogCategories, blogJournal, blogPosts, type BlogPost } from '@/mocks/blogData';
import { Eyebrow } from '@/views/home-v2/components/shared';

function PostCard({ post }: { post: BlogPost }) {
  const isInternal = post.href.startsWith('/');
  const cardClass =
    'blog-card group flex h-full flex-col overflow-hidden rounded-[22px] border border-background-200 bg-background-50';

  const inner = (
    <>
      <div className="relative h-[210px] w-full overflow-hidden md:h-[230px]">
        <img
              loading="lazy"
              decoding="async"
          src={post.image}
          alt={`${post.title} — BW Metro Properties blog`}
          title={`${post.title} — BW Metro Properties`}
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground-950/35 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-background-50/25 bg-foreground-950/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-background-50 backdrop-blur-md"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-[21px] font-normal leading-snug tracking-[-0.01em] text-foreground-950 md:text-[22px]">
          {post.title}
        </h3>
        <p className="mt-3 text-[13.5px] leading-relaxed text-foreground-600">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-foreground-900">
          Read Article
          <ArrowUpRight className="blog-arrow h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </>
  );

  if (isInternal) {
    return (
      <Link href={post.href} aria-label={`Read: ${post.title}`} className={cardClass}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={post.href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`Read: ${post.title}`}
      className={cardClass}
    >
      {inner}
    </a>
  );
}

export default function BlogGrid() {
  const [active, setActive] = useState<string>('All');

  const filtered = useMemo(
    () => (active === 'All' ? blogPosts : blogPosts.filter((post) => post.categories.includes(active))),
    [active],
  );

  return (
    <section id="journal" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="01">{blogJournal.eyebrow}</Eyebrow>
            <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              {blogJournal.title} <em className="italic">{blogJournal.titleAccent}</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {blogJournal.text}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:pb-2">
            <div className="flex flex-wrap items-center gap-2 rounded-full border border-background-200 bg-background-50 px-2 py-2">
              {blogCategories.map((category) => {
                const isActive = category === active;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(category)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                      isActive
                        ? 'bg-primary-500 text-background-50'
                        : 'text-foreground-600 hover:bg-background-200 hover:text-foreground-950'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div key={active} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
          {filtered.map((post, index) => (
            <div
              key={post.id}
              className="blog-fade h-full"
              style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-14 text-center text-sm text-foreground-500">
            No articles in this category yet — check back soon.
          </p>
        ) : null}
      </div>
    </section>
  );
}