/**
 * The path from "appeared in Google" to "actually read something", as the
 * proportion surviving each step.
 *
 * Every stage is drawn against the SAME baseline - the first stage's value -
 * rather than each being rescaled to fill its own column. That is the whole
 * point of a funnel: the shrinking is the finding. Rescaling each bar to its
 * own maximum would make a 2% survival rate look identical to a 90% one.
 *
 * The hatched area above each bar is what was lost at that step, so the drop
 * is a visible quantity rather than only a percentage caption.
 */

export interface FunnelStage {
  label: string;
  value: number;
  /** what the number actually counts, for the caption under the axis */
  note: string;
}

function pct(from: number, to: number): number | null {
  if (from <= 0) return null;
  return ((from - to) / from) * 100;
}

export default function FunnelChart({ stages }: { stages: FunnelStage[] }) {
  const base = stages[0]?.value ?? 0;
  const anyData = stages.some((s) => s.value > 0);

  return (
    <div>
      <div className="flex items-end gap-2 sm:gap-3">
        {stages.map((s, i) => {
          // With no data every bar is zero; a flat row of empty columns still
          // shows the shape of the funnel that will appear once data lands.
          const h = base > 0 ? Math.max((s.value / base) * 100, s.value > 0 ? 2 : 0) : 0;
          const drop = i === 0 ? null : pct(stages[i - 1].value, s.value);

          return (
            <div key={s.label} className="flex min-w-0 flex-1 flex-col">
              <div className="relative h-[190px] w-full overflow-hidden rounded-lg bg-background-200/70">
                {/* the lost portion, as texture rather than another colour */}
                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(135deg, oklch(var(--foreground-300)/0.34) 0 1px, transparent 1px 7px)',
                  }}
                />
                <div
                  className={`absolute inset-x-0 bottom-0 rounded-lg ${
                    i === 0 ? 'bg-chart-1/18 ring-1 ring-inset ring-chart-1/35' : 'bg-chart-1'
                  }`}
                  style={{ height: `${h}%` }}
                />

                {drop !== null && drop > 0 ? (
                  <span
                    className="absolute left-1/2 -translate-x-1/2 rounded-full bg-background-50 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-foreground-800 shadow-sm ring-1 ring-background-400/50"
                    style={{ bottom: `calc(${Math.min(h, 88)}% + 8px)` }}
                  >
                    &darr; {drop.toFixed(1)}%
                  </span>
                ) : null}

                <span
                  className={`absolute inset-x-0 bottom-2 text-center text-[12.5px] font-semibold tabular-nums ${
                    i === 0 || h < 18 ? 'text-foreground-800' : 'text-background-50'
                  }`}
                >
                  {s.value.toLocaleString()}
                </span>
              </div>

              <p className="mt-2 truncate text-center text-[12px] font-medium text-foreground-800" title={s.label}>
                {s.label}
              </p>
              <p className="mt-0.5 hidden text-center text-[11px] leading-snug text-foreground-500 sm:block">
                {s.note}
              </p>
            </div>
          );
        })}
      </div>

      {!anyData ? (
        <p className="mt-4 rounded-lg bg-background-200/60 px-3 py-2 text-[12px] leading-relaxed text-foreground-600">
          All stages read zero because no source is reporting yet &mdash; not because the funnel is empty.
        </p>
      ) : null}
    </div>
  );
}
