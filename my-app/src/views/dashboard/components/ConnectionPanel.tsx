import type { SourceState, SourceStatus } from '@/lib/analytics/status';

/**
 * Which sources are live and which are not.
 *
 * State is carried by a word, an icon glyph and a colour together - never
 * colour alone - because this panel is the one thing on the page a
 * red/green-blind reader absolutely must not misread. Getting "connected" and
 * "missing" the wrong way round here would send someone hunting a traffic
 * problem that is really a configuration problem.
 */

const LOOK: Record<SourceState, { word: string; glyph: string; dot: string; chip: string }> = {
  live: {
    word: 'Connected',
    glyph: '✓',
    dot: 'bg-state-ok',
    chip: 'bg-state-ok/12 text-state-ok ring-1 ring-state-ok/25',
  },
  missing: {
    word: 'Not connected',
    glyph: '○',
    dot: 'bg-foreground-400',
    chip: 'bg-background-200 text-foreground-600 ring-1 ring-background-400/60',
  },
  error: {
    word: 'Error',
    glyph: '!',
    dot: 'bg-state-off',
    chip: 'bg-state-off/12 text-state-off ring-1 ring-state-off/25',
  },
};

export function StatusChip({ state }: { state: SourceState }) {
  const l = LOOK[state];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${l.chip}`}
    >
      <span aria-hidden="true">{l.glyph}</span>
      {l.word}
    </span>
  );
}

function Source({ source }: { source: SourceStatus }) {
  const l = LOOK[source.state];
  const missing = source.vars.filter((v) => !v.set);

  return (
    <li className="rounded-xl border border-background-300 bg-background-50 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${l.dot}`} aria-hidden="true" />
          <div>
            <p className="text-[14px] font-semibold text-foreground-950">{source.title}</p>
            <p className="mt-1 max-w-sm text-[12.5px] leading-relaxed text-foreground-600">
              {source.provides}
            </p>
          </div>
        </div>
        <StatusChip state={source.state} />
      </div>

      {source.error ? (
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-lg bg-state-off/8 p-2.5 text-[11px] leading-relaxed text-foreground-800">
          {source.error}
        </pre>
      ) : null}

      {missing.length > 0 ? (
        <div className="mt-3 border-t border-background-300 pt-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground-500">
            Missing {missing.length === 1 ? 'variable' : 'variables'}
          </p>
          <ul className="mt-2 space-y-2">
            {missing.map((v) => (
              <li key={v.name}>
                <code className="text-[12px] font-semibold text-foreground-950">{v.name}</code>
                {v.public ? (
                  <span className="ml-2 rounded bg-background-200 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-foreground-600">
                    browser
                  </span>
                ) : null}
                <p className="mt-0.5 text-[12px] leading-relaxed text-foreground-600">{v.what}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
}

export default function ConnectionPanel({ sources }: { sources: SourceStatus[] }) {
  const live = sources.filter((s) => s.state === 'live').length;

  return (
    <section className="rounded-2xl border border-background-300 bg-background-100 p-5">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 className="font-heading text-[19px] leading-tight text-foreground-950">Data connections</h2>
        <span className="text-[12.5px] tabular-nums text-foreground-500">
          {live} of {sources.length} live
        </span>
      </div>

      <ul className="space-y-3">
        {sources.map((s) => (
          <Source key={s.key} source={s} />
        ))}
      </ul>
    </section>
  );
}
