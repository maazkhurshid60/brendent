'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {
  ChartNoAxesColumn,
  ExternalLink,
  FileText,
  Menu,
  Plug,
  Search,
  Users,
  X,
} from 'lucide-react';

/**
 * Section navigation.
 *
 * Every section is a real route rather than an anchor into one long page, so a
 * link can be bookmarked, opened in a new tab and sent to someone. The date
 * range travels with it: switching from Pages to Search while looking at 90
 * days and silently landing back on 28 would quietly change the numbers under
 * whoever is reading them.
 *
 * Sections whose source is not connected still appear and are still reachable.
 * Hiding them would make the dashboard look permanently smaller than it is,
 * and each one explains its own empty state better than a missing link does.
 */

const NAV = [
  { href: '/dashboard', label: 'Overview', icon: ChartNoAxesColumn, exact: true },
  { href: '/dashboard/pages', label: 'Pages', icon: FileText },
  { href: '/dashboard/audience', label: 'Audience', icon: Users },
  { href: '/dashboard/search', label: 'Google Search', icon: Search },
  { href: '/dashboard/connections', label: 'Connections', icon: Plug },
];

function NavList({
  pathname,
  query,
  onNavigate,
  liveCount,
  total,
}: {
  pathname: string;
  query: string;
  onNavigate?: () => void;
  liveCount: number;
  total: number;
}) {
  return (
    <nav aria-label="Dashboard sections" className="flex flex-col gap-0.5">
      {NAV.map((item) => {
        const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={`${item.href}${query}`}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13.5px] transition-colors ${
              active
                ? 'bg-foreground-950 font-medium text-background-50'
                : 'text-foreground-700 hover:bg-background-200 hover:text-foreground-950'
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{item.label}</span>
            {item.href === '/dashboard/connections' ? (
              <span
                className={`ml-auto shrink-0 rounded-full px-1.5 py-0.5 text-[10.5px] font-semibold tabular-nums ${
                  active
                    ? 'bg-background-50/20 text-background-50'
                    : liveCount === total
                      ? 'bg-state-ok/15 text-state-ok'
                      : 'bg-state-warn/20 text-foreground-800'
                }`}
              >
                {liveCount}/{total}
              </span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}

export default function Sidebar({ liveCount, total }: { liveCount: number; total: number }) {
  const pathname = usePathname();
  const params = useSearchParams();
  const [open, setOpen] = useState(false);

  const range = params.get('range');
  const query = range ? `?range=${range}` : '';

  const brand = (
    <div className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground-950 font-heading text-[14px] leading-none text-background-50"
      >
        BW
      </span>
      <div className="min-w-0 leading-tight">
        <p className="truncate text-[13.5px] font-semibold text-foreground-950">BW Metro Properties</p>
        <p className="text-[11px] text-foreground-500">Site analytics</p>
      </div>
    </div>
  );

  const footer = (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-[12.5px] text-foreground-600 transition-colors hover:bg-background-200 hover:text-foreground-950"
    >
      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      View the site
    </Link>
  );

  return (
    <>
      {/* ---------------------------- desktop rail ---------------------------- */}
      <aside className="sticky top-0 hidden h-screen w-[236px] shrink-0 flex-col border-r border-background-300 bg-background-50 px-3 py-4 lg:flex">
        <div className="px-1 pb-5">{brand}</div>
        <NavList pathname={pathname} query={query} liveCount={liveCount} total={total} />
        <div className="mt-auto border-t border-background-200 pt-2">{footer}</div>
      </aside>

      {/* ------------------------------ mobile bar ---------------------------- */}
      <div className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-background-300 bg-background-50/95 px-4 py-3 backdrop-blur lg:hidden">
        {brand}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open sections"
          className="rounded-lg border border-background-300 p-2 text-foreground-700"
        >
          <Menu className="h-4.5 w-4.5" aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close sections"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground-950/45"
          />
          <div className="absolute inset-y-0 left-0 flex w-[254px] flex-col bg-background-50 px-3 py-4 shadow-2xl">
            <div className="flex items-start justify-between gap-2 px-1 pb-5">
              {brand}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close sections"
                className="-mr-1 rounded-lg p-1.5 text-foreground-600"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <NavList
              pathname={pathname}
              query={query}
              onNavigate={() => setOpen(false)}
              liveCount={liveCount}
              total={total}
            />
            <div className="mt-auto border-t border-background-200 pt-2">{footer}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
