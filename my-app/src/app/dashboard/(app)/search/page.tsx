import type { Metadata } from 'next';
import { loadDashboard } from '@/lib/analytics/load';
import TrendChart from '@/views/dashboard/components/TrendChart';
import { NotLiveBanner, SectionHead, Shell } from '@/views/dashboard/components/Chrome';
import { BarList, Card, Stat } from '@/views/dashboard/components/panels';

export const metadata: Metadata = { title: 'Google Search | BW Metro Properties' };
export const revalidate = 900;

interface Props {
  searchParams: Promise<{ range?: string }>;
}

export default async function SearchSection({ searchParams }: Props) {
  const { range } = await searchParams;
  const { days, gsc, collecting } = await loadDashboard(range);
  const g = gsc.data.totals;
  const prev = gsc.data.previousTotals;

  return (
    <Shell>
      <SectionHead
        title="Google Search"
        lead="Impressions are how often the site appeared in results; clicks are how often someone chose it. Search Console reports about two days behind."
        days={days}
        basePath="/dashboard/search"
      />

      {!gsc.live ? (
        <div className="mt-6">
          <NotLiveBanner collecting={collecting} />
        </div>
      ) : null}

      <div className="mt-6 grid grid-cols-2 divide-background-300 overflow-hidden rounded-2xl border border-background-300 bg-background-50 md:grid-cols-4 md:divide-x">
        <Stat
          label="Impressions"
          value={Math.round(g.impressions)}
          previous={prev ? Math.round(prev.impressions) : null}
          unavailable={!gsc.live}
        />
        <Stat
          label="Clicks"
          value={Math.round(g.clicks)}
          previous={prev ? Math.round(prev.clicks) : null}
          unavailable={!gsc.live}
        />
        <Stat
          label="Click-through rate"
          value={`${(g.ctr * 100).toFixed(1)}%`}
          previous={null}
          hint="Clicks per impression"
          unavailable={!gsc.live}
        />
        <Stat
          label="Average position"
          value={g.position ? g.position.toFixed(1) : '0'}
          previous={null}
          hint="Weighted by impressions. Lower is better."
          unavailable={!gsc.live}
        />
      </div>

      {/* Two cards, not one overlay. Impressions outscale clicks by orders of
          magnitude, so plotting them together would need a second y-axis - and
          a dual-axis chart lets whoever draws it imply any relationship they
          like just by sliding the two scales past each other. */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card title="Impressions per day" hint="Appearances in Google results">
          <TrendChart
            series={[
              {
                key: 'impr',
                label: 'Impressions',
                tone: 1,
                points: gsc.data.daily.map((d) => ({ date: d.date, value: d.impressions })),
              },
            ]}
          />
        </Card>
        <Card title="Clicks per day" hint="On its own scale, not stacked on impressions">
          <TrendChart
            series={[
              {
                key: 'clicks',
                label: 'Clicks',
                tone: 1,
                points: gsc.data.daily.map((d) => ({ date: d.date, value: d.clicks })),
              },
            ]}
          />
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card title="What people search for" hint="Queries that surfaced the site">
          <BarList
            rows={gsc.data.queries.map((q) => ({
              label: q.label,
              value: Math.round(q.impressions),
              secondary: Math.round(q.clicks),
            }))}
            secondaryLabel="clicks"
            emptyLabel={
              gsc.live
                ? 'No queries recorded in this range.'
                : 'Connect Search Console to see the queries people use.'
            }
          />
        </Card>
        <Card title="Pages found in search" hint="Which pages the results point at">
          <BarList
            rows={gsc.data.pages.map((p) => ({
              label: p.label.replace(/^https?:\/\/[^/]+/, '') || '/',
              value: Math.round(p.impressions),
              secondary: Math.round(p.clicks),
            }))}
            secondaryLabel="clicks"
            emptyLabel={
              gsc.live ? 'No pages recorded in this range.' : 'Connect Search Console to see pages.'
            }
          />
        </Card>
      </div>
    </Shell>
  );
}
