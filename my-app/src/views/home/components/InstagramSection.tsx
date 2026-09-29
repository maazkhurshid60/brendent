import { Instagram } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { brand, instagramPosts } from '@/mocks/homeData';

export default function InstagramSection() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-shell">
        <Reveal className="flex flex-col items-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600">
            <Instagram className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2
            className="mt-6 text-[34px] leading-tight text-foreground-950 md:text-[52px]"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Follow Us On Instagram
          </h2>
          <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-foreground-600">
            DMV listings, market insights and behind-the-scenes moments from Brandon&rsquo;s week.
          </p>
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
              loading="lazy"
              decoding="async"
                  src={post.image}
                  alt={post.alt}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
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