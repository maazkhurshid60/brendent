import type { ReactNode } from 'react';

/** Shared shells: the card, the KPI tile and the ranked bar list. */

export function Card({
  title,
  hint,
  action,
  children,
  className = '',
}: {
  title: string;
  hint?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-background-300 bg-background-50 p-5 md:p-6 ${className}`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="font-heading text-[18px] leading-tight text-foreground-950">{title}</h2>
          {hint ? <p className="mt-1 text-[12px] text-foreground-500">{hint}</p> : null}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

/**
 * Change against the previous period.
 *
 * Direction is carried by the arrow and the sign as well as the colour, so it
 * survives a red/green-blind reader and a black-and-white printout.
 *
 * `null` previous means there is nothing to compare against - a fresh install
 * has no prior window - and that is said in words rather than shown as 0%,
 * which would read as "flat" when the truth is "unknown".
 */
function Delta({
  current,
  previous,
  goodWhenUp = true,
}: {
  current: number;
  previous: number | null;
  goodWhenUp?: boolean;
}) {
  if (previous === null) {
    return <span className="text-[11.5px] text-foreground-500">no prior period</span>;
  }
  if (previous === 0) {
    return (
      <span className="text-[11.5px] text-foreground-500">
        {current === 0 ? 'no change' : 'first data'}
      </span>
    );
  }

  const pct = ((current - previous) / previous) * 100;
  const up = pct >= 0;
  const good = up === goodWhenUp;
  const tone = good
    ? 'bg-state-ok/12 text-state-ok'
    : 'bg-state-off/12 text-state-off';

  return (
    <span className="flex items-center gap-1.5">
      <span className={`rounded-md px-1.5 py-0.5 text-[11.5px] font-semibold tabular-nums ${tone}`}>
        <span aria-hidden="true">{up ? '▲' : '▼'}</span> {Math.abs(pct).toFixed(1)}%
      </span>
      <span className="text-[11.5px] text-foreground-500">vs prev. period</span>
    </span>
  );
}

/**
 * A lone headline number. The form heuristic says a single magnitude with no
 * shape to show is a stat tile, not a chart, so these carry no sparkline.
 */
export function Stat({
  label,
  value,
  previous = null,
  hint,
  goodWhenUp = true,
  unavailable = false,
}: {
  label: string;
  value: string | number;
  previous?: number | null;
  hint?: string;
  goodWhenUp?: boolean;
  /** the source feeding this tile is not connected */
  unavailable?: boolean;
}) {
  return (
    <div className="flex flex-col justify-between px-5 py-4">
      <p className="text-[12.5px] text-foreground-600">{label}</p>
      <p
        className={`mt-2 font-heading text-[30px] leading-none tracking-tight md:text-[34px] ${
          unavailable ? 'text-foreground-500' : 'text-foreground-950'
        }`}
      >
        {typeof value === 'number' ? value.toLocaleString() : value}
      </p>
      <div className="mt-2.5">
        {unavailable ? (
          <span className="text-[11.5px] text-foreground-500">not connected</span>
        ) : (
          <Delta current={typeof value === 'number' ? value : 0} previous={previous} goodWhenUp={goodWhenUp} />
        )}
      </div>
      {hint ? <p className="mt-1.5 text-[11px] leading-snug text-foreground-500">{hint}</p> : null}
    </div>
  );
}

/**
 * Ranked categories. Magnitude is bar LENGTH in a single hue, so colour
 * carries no second meaning and needs no scale. Every row shows its own
 * number, which doubles as the table view the chart would otherwise owe.
 */
export function BarList({
  rows,
  emptyLabel = 'Nothing recorded yet.',
  formatValue = (n: number) => n.toLocaleString(),
  secondaryLabel,
}: {
  rows: { label: string; value: number; secondary?: number }[];
  emptyLabel?: string;
  formatValue?: (n: number) => string;
  secondaryLabel?: string;
}) {
  if (rows.length === 0) {
    return <p className="py-8 text-center text-[13px] text-foreground-500">{emptyLabel}</p>;
  }
  const max = Math.max(...rows.map((r) => r.value), 1);
  const allZero = rows.every((r) => r.value === 0);

  return (
    <ol className="space-y-3">
      {rows.map((r) => (
        <li key={r.label}>
          <div className="flex items-baseline justify-between gap-4">
            <span className="truncate text-[13px] text-foreground-800" title={r.label}>
              {r.label}
            </span>
            <span className="shrink-0 text-[13px] font-medium tabular-nums text-foreground-950">
              {formatValue(r.value)}
              {r.secondary !== undefined && secondaryLabel ? (
                <span className="ml-2 text-[11.5px] font-normal text-foreground-500">
                  {r.secondary.toLocaleString()} {secondaryLabel}
                </span>
              ) : null}
            </span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-background-200">
            {/* At zero the track is left empty rather than given a minimum
                stub, so "nothing here" never looks like "a little here". */}
            {allZero ? null : (
              <div
                className="h-full rounded-full bg-chart-1"
                style={{ width: `${Math.max((r.value / max) * 100, r.value > 0 ? 1.5 : 0)}%` }}
              />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
