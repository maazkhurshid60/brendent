'use client';

import { useId, useMemo, useState } from 'react';

/**
 * One or two measures over time, on a SINGLE shared y-axis.
 *
 * Two series are allowed here only because both are plain counts of the same
 * kind of thing (people, or pages opened by those people), so one scale is
 * honest. This is never to be extended to a second axis for a measure of a
 * different unit: a dual-axis plot lets whoever draws it imply any
 * relationship they like just by sliding the two scales past each other, which
 * is why impressions and clicks are kept on separate cards rather than
 * overlaid here.
 *
 * The two hues are validated, not chosen by eye - see the note beside
 * --chart-1 in index.css. Each series also carries a checkbox with its name,
 * so identity survives without colour.
 */

export interface TrendPoint {
  date: string;
  value: number;
}

export interface Series {
  key: string;
  label: string;
  points: TrendPoint[];
  /** 1 = coral, 2 = blue */
  tone: 1 | 2;
}

const W = 560;
const H = 170;
const PAD = { top: 14, right: 10, bottom: 22, left: 10 };

const STROKE: Record<1 | 2, string> = {
  1: 'oklch(var(--chart-1))',
  2: 'oklch(var(--chart-2))',
};

function niceDate(iso: string): string {
  // GA4 hands back YYYYMMDD; Search Console hands back YYYY-MM-DD.
  const clean = iso.includes('-') ? iso : `${iso.slice(0, 4)}-${iso.slice(4, 6)}-${iso.slice(6, 8)}`;
  const d = new Date(`${clean}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
}

export default function TrendChart({
  series,
  format = (n: number) => n.toLocaleString(),
}: {
  series: Series[];
  format?: (n: number) => string;
}) {
  const uid = useId().replace(/:/g, '');
  const [hidden, setHidden] = useState<Set<string>>(new Set());
  const [hover, setHover] = useState<number | null>(null);

  const shown = series.filter((s) => !hidden.has(s.key));
  const spine = series[0]?.points ?? [];

  const geo = useMemo(() => {
    if (spine.length === 0) return null;
    // One max across every visible series - the shared scale is what keeps the
    // comparison between them meaningful.
    const max = Math.max(1, ...shown.flatMap((s) => s.points.map((p) => p.value)));
    const innerW = W - PAD.left - PAD.right;
    const innerH = H - PAD.top - PAD.bottom;
    const step = spine.length > 1 ? innerW / (spine.length - 1) : 0;
    const baseline = PAD.top + innerH;

    const paths = shown.map((s) => {
      const xy = s.points.map((p, i) => ({
        x: PAD.left + i * step,
        y: baseline - (p.value / max) * innerH,
        ...p,
      }));
      const line = xy
        .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`)
        .join(' ');
      const area =
        xy.length > 0
          ? `${line} L${xy[xy.length - 1].x.toFixed(2)},${baseline} L${xy[0].x.toFixed(2)},${baseline} Z`
          : '';
      return { ...s, xy, line, area };
    });

    const xs = spine.map((_, i) => PAD.left + i * step);
    return { paths, xs, baseline, max };
  }, [shown, spine]);

  function toggle(key: string) {
    setHidden((prev) => {
      const next = new Set(prev);
      // Never let the last visible series be switched off - an empty plot
      // frame reads as a failure rather than as a choice.
      if (next.has(key)) next.delete(key);
      else if (series.length - next.size > 1) next.add(key);
      return next;
    });
  }

  function onMove(e: React.MouseEvent<SVGSVGElement>) {
    if (!geo) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    let nearest = 0;
    let best = Infinity;
    geo.xs.forEach((cx, i) => {
      const d = Math.abs(cx - x);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setHover(nearest);
  }

  if (!geo) {
    return <p className="py-12 text-center text-[13px] text-foreground-500">No dates in this range.</p>;
  }

  const hx = hover === null ? null : geo.xs[hover];
  const frac = hover === null ? 0.5 : geo.xs[hover] / W;
  const shift = frac < 0.12 ? '-10%' : frac > 0.88 ? '-90%' : '-50%';

  return (
    <div>
      {series.length > 1 ? (
        <div className="mb-3 flex flex-wrap gap-4">
          {series.map((s) => {
            const on = !hidden.has(s.key);
            return (
              <label
                key={s.key}
                className="flex cursor-pointer items-center gap-2 text-[12.5px] text-foreground-700"
              >
                <input
                  type="checkbox"
                  checked={on}
                  onChange={() => toggle(s.key)}
                  className="h-3.5 w-3.5 rounded-[3px] border-background-400"
                  style={{ accentColor: STROKE[s.tone] }}
                />
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-[2px]"
                  style={{ background: on ? STROKE[s.tone] : 'oklch(var(--background-400))' }}
                />
                {s.label}
              </label>
            );
          })}
        </div>
      ) : null}

      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-[170px] w-full touch-none"
          role="img"
          aria-label={`${series.map((s) => s.label).join(' and ')} over time`}
          onMouseMove={onMove}
          onMouseLeave={() => setHover(null)}
        >
          <defs>
            {geo.paths.map((p) => (
              <linearGradient key={p.key} id={`${uid}-${p.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={STROKE[p.tone]} stopOpacity="0.2" />
                <stop offset="100%" stopColor={STROKE[p.tone]} stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {/* recessive baseline only - the numbers live on the tiles above */}
          <line
            x1={PAD.left}
            y1={geo.baseline}
            x2={W - PAD.right}
            y2={geo.baseline}
            stroke="oklch(var(--foreground-200))"
            strokeWidth="1"
          />

          {geo.paths.map((p) => (
            <g key={p.key}>
              <path d={p.area} fill={`url(#${uid}-${p.key})`} />
              <path
                d={p.line}
                fill="none"
                stroke={STROKE[p.tone]}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          ))}

          {hx !== null ? (
            <g>
              <line
                x1={hx}
                y1={PAD.top}
                x2={hx}
                y2={geo.baseline}
                stroke="oklch(var(--foreground-300))"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              {geo.paths.map((p) => {
                const pt = p.xy[hover as number];
                if (!pt) return null;
                return (
                  <g key={p.key}>
                    {/* surface ring so a marker still reads where lines cross */}
                    <circle cx={pt.x} cy={pt.y} r="5.5" fill="oklch(var(--background-50))" />
                    <circle cx={pt.x} cy={pt.y} r="4" fill={STROKE[p.tone]} />
                  </g>
                );
              })}
            </g>
          ) : null}
        </svg>

        {hover !== null && spine[hover] ? (
          <div
            className="pointer-events-none absolute -top-2 z-10 min-w-[128px] rounded-lg border border-background-300 bg-background-50 px-2.5 py-1.5 shadow-lg"
            style={{ left: `${frac * 100}%`, transform: `translateX(${shift})` }}
          >
            <p className="text-[10.5px] uppercase tracking-wider text-foreground-500">
              {niceDate(spine[hover].date)}
            </p>
            {geo.paths.map((p) => (
              <p key={p.key} className="mt-0.5 flex items-center gap-1.5 text-[12.5px] text-foreground-900">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{ background: STROKE[p.tone] }}
                />
                <span className="text-foreground-600">{p.label}</span>
                <span className="ml-auto font-semibold tabular-nums">
                  {format(p.xy[hover]?.value ?? 0)}
                </span>
              </p>
            ))}
          </div>
        ) : null}

        <div className="mt-1 flex justify-between text-[11px] text-foreground-500">
          <span>{niceDate(spine[0].date)}</span>
          <span>{niceDate(spine[spine.length - 1].date)}</span>
        </div>
      </div>
    </div>
  );
}
