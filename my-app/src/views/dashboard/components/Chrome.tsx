import Link from 'next/link';
import { RANGES } from '@/lib/analytics/load';

/**
 * The header every section shares: its name, the date range, and - when
 * something is not reporting - an unmissable note that the numbers below are a
 * setup state rather than a finding.
 */

export function SectionHead({
  title,
  lead,
  days,
  basePath,
  showRange = true,
}: {
  title: string;
  lead?: string;
  days: number;
  /** the route the range buttons should stay on */
  basePath: string;
  showRange?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-5">
      <div className="min-w-0">
        <h1 className="font-heading text-[30px] font-normal leading-tight tracking-tight text-foreground-950 md:text-[38px]">
          {title}
        </h1>
        {lead ? <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-foreground-600">{lead}</p> : null}
      </div>

      {showRange ? (
        <nav
          aria-label="Date range"
          className="flex shrink-0 gap-1 rounded-full border border-background-300 bg-background-50 p-1"
        >
          {RANGES.map((r) => (
            <Link
              key={r}
              href={`${basePath}?range=${r}`}
              aria-current={r === days ? 'page' : undefined}
              className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                r === days
                  ? 'bg-foreground-950 text-background-50'
                  : 'text-foreground-600 hover:text-foreground-950'
              }`}
            >
              {r} days
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}

/**
 * Sits ABOVE the numbers, never below them: by the time someone has scrolled
 * past a row of zeros they have already drawn a conclusion from them, and
 * "nobody visited" and "nothing is measuring" are opposite conclusions that
 * would lead to opposite decisions.
 */
export function NotLiveBanner({ collecting }: { collecting: boolean }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-state-warn/35 bg-state-warn/10 px-4 py-3">
      <span
        aria-hidden="true"
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-state-warn text-[12px] font-bold leading-none text-foreground-950"
      >
        !
      </span>
      <div>
        <p className="text-[13.5px] font-semibold text-foreground-950">
          {collecting
            ? 'Collecting, but not reporting yet'
            : 'Every number here is zero because nothing is measuring the site yet'}
        </p>
        <p className="mt-1 text-[12.5px] leading-relaxed text-foreground-700">
          {collecting
            ? 'The tracking tag is installed and recording visits, but the reporting credentials are incomplete, so this page cannot read them back. See Connections.'
            : 'These zeros are a setup state, not a traffic finding. Analytics is also not retrospective — history starts the day the tag goes live, so nothing before then can be recovered.'}{' '}
          <Link href="/dashboard/connections" className="font-medium text-foreground-950 underline underline-offset-2">
            Set it up
          </Link>
        </p>
      </div>
    </div>
  );
}

/** Wraps a section's body so every route has the same gutters and rhythm. */
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-[1180px] px-5 py-8 md:px-8 md:py-10">{children}</main>
  );
}
