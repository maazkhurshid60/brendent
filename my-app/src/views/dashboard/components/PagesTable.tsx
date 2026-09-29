'use client';

import { useMemo, useState } from 'react';
import { pageName } from '@/lib/analytics/sitePages';

/**
 * Every page on the site, sortable.
 *
 * Before analytics is connected this is the site's real route list reading
 * zero, which is more use than an empty box: it is a straight answer to "what
 * pages do we have", and it makes obvious that the zeros are a configuration
 * state rather than a traffic finding.
 *
 * The share bar is proportion-of-total, one hue, length as the encoding.
 */

export interface PageRow {
  path: string;
  views: number;
  users: number;
}

type SortKey = 'name' | 'views' | 'users';

export default function PagesTable({
  rows,
  connected,
  compact = false,
  initialShowAll = false,
}: {
  rows: PageRow[];
  connected: boolean;
  /** already a trimmed list (the overview) - no expander, no footer note */
  compact?: boolean;
  initialShowAll?: boolean;
}) {
  const [sort, setSort] = useState<SortKey>('views');
  const [asc, setAsc] = useState(false);
  const [showAll, setShowAll] = useState(initialShowAll);

  const total = rows.reduce((n, r) => n + r.views, 0);

  const sorted = useMemo(() => {
    const out = [...rows].sort((a, b) => {
      if (sort === 'name') return pageName(a.path).localeCompare(pageName(b.path));
      return b[sort] - a[sort];
    });
    return asc ? out.reverse() : out;
  }, [rows, sort, asc]);

  const visible = compact || showAll ? sorted : sorted.slice(0, 10);

  function head(key: SortKey, label: string, align = 'left') {
    const active = sort === key;
    return (
      <th
        scope="col"
        className={`px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${
          align === 'right' ? 'text-right' : 'text-left'
        }`}
        aria-sort={active ? (asc ? 'ascending' : 'descending') : 'none'}
      >
        <button
          type="button"
          onClick={() => {
            if (active) setAsc(!asc);
            else {
              setSort(key);
              setAsc(false);
            }
          }}
          className={`inline-flex items-center gap-1 transition-colors hover:text-foreground-950 ${
            active ? 'text-foreground-950' : 'text-foreground-500'
          }`}
        >
          {label}
          <span aria-hidden="true" className={active ? 'opacity-100' : 'opacity-35'}>
            {active && asc ? '▲' : '▼'}
          </span>
        </button>
      </th>
    );
  }

  return (
    <div>
      <div className="-mx-1 overflow-x-auto">
        <table className="w-full min-w-[540px] border-collapse">
          <thead className="border-b border-background-300">
            <tr>
              {head('name', 'Page')}
              <th
                scope="col"
                className="px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground-500"
              >
                Share of views
              </th>
              {head('views', 'Views', 'right')}
              {head('users', 'Users', 'right')}
            </tr>
          </thead>
          <tbody>
            {visible.map((r) => (
              <tr key={r.path} className="border-b border-background-200 last:border-0">
                <td className="max-w-[230px] px-3 py-2.5">
                  <p className="truncate text-[13.5px] font-medium text-foreground-950" title={r.path}>
                    {pageName(r.path)}
                  </p>
                  <p className="truncate font-mono text-[11px] text-foreground-500" title={r.path}>
                    {r.path}
                  </p>
                </td>
                <td className="px-3 py-2.5">
                  <div className="h-1.5 w-full min-w-[80px] overflow-hidden rounded-full bg-background-200">
                    {total > 0 ? (
                      <div
                        className="h-full rounded-full bg-chart-1"
                        style={{ width: `${Math.max((r.views / total) * 100, r.views > 0 ? 1.5 : 0)}%` }}
                      />
                    ) : null}
                  </div>
                </td>
                <td className="px-3 py-2.5 text-right text-[13.5px] font-medium tabular-nums text-foreground-950">
                  {r.views.toLocaleString()}
                </td>
                <td className="px-3 py-2.5 text-right text-[13.5px] tabular-nums text-foreground-700">
                  {r.users.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {compact ? null : (
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        {sorted.length > 10 ? (
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="rounded-full border border-background-300 px-3 py-1.5 text-[12.5px] font-medium text-foreground-700 transition-colors hover:border-background-400 hover:text-foreground-950"
          >
            {showAll ? 'Show top 10' : `Show all ${sorted.length} pages`}
          </button>
        ) : (
          <span />
        )}
        {!connected ? (
          <p className="text-[12px] text-foreground-500">
            The site&rsquo;s real pages, all reading zero &mdash; nothing is measuring them yet.
          </p>
        ) : null}
      </div>
      )}
    </div>
  );
}
