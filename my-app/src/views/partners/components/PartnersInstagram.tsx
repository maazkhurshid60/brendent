import { Instagram } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { brand, instagramPosts } from '@/mocks/homeData';
import { partnersInstagramCopy } from '@/mocks/partnersData';
import { Eyebrow } from '@/views/home-v2/components/shared';

/**
 * `sectionIndex` lets the combined Resources page renumber this section. On the
 * standalone Partners page it keeps its own number, so nothing changes there.
 */
export default function PartnersInstagram({ sectionIndex = '06' }: { sectionIndex?: string }) {
  return (
    <section id="instagram" className="bg-background-100 px-5 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow index={sectionIndex} className="justify-center">
            {partnersInstagramCopy.eyebrow}
          </Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-tight tracking-[-0.025em] text-foreground-950 md:text-[52px]">
            Follow us on <em className="italic">Instagram</em>
          </h2>
          <p className="mt-5 max-w-lg text-[14.5px] leading-relaxed text-foreground-600">
            DMV listings, market insights and behind-the-scenes moments from Brandon&rsquo;s week.
          </p>
          <a
            href={brand.instagram}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-shimmer mt-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Follow us
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 55}>
              <a
                href={brand.instagram}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="View this post on Instagram"
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-foreground-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-background-50" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}