import type { Metadata } from 'next';
import Link from 'next/link';
import { loadDashboard, pageRows } from '@/lib/analytics/load';
import TrendChart from '@/views/dashboard/components/TrendChart';
import FunnelChart from '@/views/dashboard/components/FunnelChart';
import PagesTable from '@/views/dashboard/components/PagesTable';
import { NotLiveBanner, SectionHead, Shell } from '@/views/dashboard/components/Chrome';
import { Card, Stat } from '@/views/dashboard/components/panels';

export const metadata: Metadata = { title: 'Overview | BW Metro Properties' };
export const revalidate = 900;

interface Props {
  searchParams: Promise<{ range?: string }>;
}

export default async function OverviewPage({ searchParams }: Props) {
  const { range } = await searchParams;
  const { days, ga, gsc, incomplete, collecting } = await loadDashboard(range);

  const t = ga.data.totals;
  const g = gsc.data.totals;
  const rows = pageRows(ga);

  return (
    <Shell>
      <SectionHead
        title="Overview"
        lead={`The last ${days} days at a glance, each figure against the same length of time before it.`}
        days={days}
        basePath="/dashboard"
      />

      {incomplete ? (
        <div className="mt-6">
          <NotLiveBanner collecting={collecting} />
        </div>
      ) : null}

      <div className="mt-6 grid grid-cols-2 divide-background-300 overflow-hidden rounded-2xl border border-background-300 bg-background-50 md:grid-cols-3 md:divide-x lg:grid-cols-5">
        <Stat
          label="Users"
          value={t.activeUsers}
          previous={ga.data.previousTotals?.activeUsers ?? null}
          unavailable={!ga.live}
        />
        <Stat
          label="Sessions"
          value={t.sessions}
          previous={ga.data.previousTotals?.sessions ?? null}
          unavailable={!ga.live}
        />
        <Stat
          label="Page views"
          value={t.screenPageViews}
          previous={ga.data.previousTotals?.screenPageViews ?? null}
          unavailable={!ga.live}
        />
        <Stat
          label="Search impressions"
          value={Math.round(g.impressions)}
          previous={gsc.data.previousTotals ? Math.round(gsc.data.previousTotals.impressions) : null}
          hint="Times the site appeared in Google"
          unavailable={!gsc.live}
        />
        <Stat
          label="Search clicks"
          value={Math.round(g.clicks)}
          previous={gsc.data.previousTotals ? Math.round(gsc.data.previousTotals.clicks) : null}
          hint="Times someone chose it"
          unavailable={!gsc.live}
        />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
        <Card title="From search result to reader" hint="Each stage as a share of the one before it">
          <FunnelChart
            stages={[
              { label: 'Impressions', value: Math.round(g.impressions), note: 'appeared in Google' },
              { label: 'Clicks', value: Math.round(g.clicks), note: 'chose the result' },
              { label: 'Sessions', value: t.sessions, note: 'visits, all sources' },
              { label: 'Page views', value: t.screenPageViews, note: 'pages opened' },
            ]}
          />
        </Card>

        <Card title="Traffic trend" hint={`Last ${days} days, one shared scale`}>
          <TrendChart
            series={[
              {
                key: 'users',
                label: 'Users',
                tone: 1,
                points: ga.data.daily.map((d) => ({ date: d.date, value: d.users })),
              },
              {
                key: 'views',
                label: 'Page views',
                tone: 2,
                points: ga.data.daily.map((d) => ({ date: d.date, value: d.views })),
              },
            ]}
          />
        </Card>
      </div>

      <div className="mt-4">
        <Card
          title="Most read pages"
          hint="Top ten by views"
          action={
            <Link
              href={`/dashboard/pages?range=${days}`}
              className="shrink-0 rounded-full border border-background-300 px-3 py-1.5 text-[12.5px] font-medium text-foreground-700 transition-colors hover:border-background-400 hover:text-foreground-950"
            >
              All pages &rarr;
            </Link>
          }
        >
          <PagesTable rows={rows.slice(0, 10)} connected={ga.live} compact />
        </Card>
      </div>
    </Shell>
  );
}
