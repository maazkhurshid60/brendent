import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ExploreStat from '@/views/explore-areas/components/ExploreStat';
import type { AreaGuide } from '@/mocks/exploreAreaData';

interface AreaCardProps {
  area: AreaGuide;
}

export default function AreaCard({ area }: AreaCardProps) {
  const statRows = [
    { label: 'Median Selling Price', sub: '(30 days)', value: area.stats.price, prefix: '$' },
    { label: 'Median Days On Market', value: area.stats.days },
    { label: 'Active Listings', value: area.stats.listings },
    { label: 'Recent Sales', sub: '(30 days)', value: area.stats.sales },
  ];

  return (
    <article
      id={`area-${area.id}`}
      data-area={area.id}
      className="area-anchor group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[26px] border border-background-300 bg-background-50 transition-colors duration-500 hover:border-foreground-300"
    >
      <div className="relative h-[220px] overflow-hidden">
        <img
              loading="lazy"
              decoding="async"
          src={area.image}
          alt={`${area.name} area guide`}
          title={`${area.name} real estate area guide`}
          className="h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.06]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground-950/80 via-foreground-950/25 to-transparent"
          aria-hidden="true"
        />
        <span className="absolute left-5 top-5 rounded-full bg-background-50/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground-800 backdrop-blur">
          {area.tag}
        </span>
        <h3 className="text-scrim-sm absolute bottom-5 left-6 right-6 font-heading text-[27px] leading-tight text-background-50">
          {area.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {area.href ? (
          <Link
            href={area.href}
            className="group/link inline-flex items-center gap-2 whitespace-nowrap text-[13px] font-semibold text-foreground-900 transition-colors duration-300 hover:text-primary-600"
          >
            {/* Stretches the hit area over the whole card so the image and
                heading are clickable too, not just this line of text. */}
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            Learn More About {area.name}
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        ) : (
          <p className="text-[13px] font-semibold text-foreground-400">
            {area.name} guide coming soon
          </p>
        )}

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-background-200 pt-6">
          {statRows.map((stat) => (
            <div key={stat.label}>
              <p className="text-[11px] font-semibold uppercase leading-snug tracking-[0.12em] text-foreground-400">
                {stat.label}
                {stat.sub ? <span className="ml-1 font-normal normal-case tracking-normal">{stat.sub}</span> : null}
              </p>
              <p className="mt-2 font-heading text-[26px] leading-none text-foreground-950">
                <ExploreStat value={stat.value} prefix={stat.prefix} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}