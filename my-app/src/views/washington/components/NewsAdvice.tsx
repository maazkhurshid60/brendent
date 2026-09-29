import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { newsCopy, newsPosts } from '@/mocks/washingtonData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

interface NewsPost {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
}

interface NewsCopy {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  text: string;
  cta: { label: string; href: string };
}

interface NewsAdviceProps {
  copy?: NewsCopy;
  posts?: NewsPost[];
}

export default function NewsAdvice({ copy = newsCopy, posts = newsPosts }: NewsAdviceProps) {
  return (
    <section id="advice" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="06">{copy.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              {copy.titleLead} <em className="italic">{copy.titleAccent}</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">{copy.text}</p>
          </Reveal>
          <Reveal>
            <CtaButton href={copy.cta.href}>{copy.cta.label}</CtaButton>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 90}>
              <article className="blog-card group flex h-full flex-col overflow-hidden rounded-[26px] border border-background-200 bg-background-50">
                <a href={post.href} className="flex h-full flex-col" aria-label={post.title}>
                  <div className="relative h-[240px] w-full overflow-hidden md:h-[260px]">
                    <img
              loading="lazy"
              decoding="async"
                      src={post.image}
                      alt={post.title}
                      title={`${post.title} — Washington DC real estate advice`}
                      className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-background-50/92 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground-800 backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                    <div>
                      <p className="text-[11.5px] font-medium uppercase tracking-[0.16em] text-foreground-500">
                        {post.date}
                      </p>
                      <h3 className="mt-4 font-heading text-[23px] leading-snug text-foreground-950 md:text-[25px]">
                        {post.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-t border-background-200 pt-5">
                      <span className="text-[12.5px] font-semibold text-foreground-700">Read article</span>
                      <span className="blog-arrow flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground-300 text-foreground-800 transition-colors duration-300 group-hover:border-foreground-950 group-hover:bg-foreground-950 group-hover:text-background-50">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}