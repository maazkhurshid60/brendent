import type { Metadata } from 'next';
import { loadDashboard } from '@/lib/analytics/load';
import TrendChart from '@/views/dashboard/components/TrendChart';
import { NotLiveBanner, SectionHead, Shell } from '@/views/dashboard/components/Chrome';
import { BarList, Card, Stat } from '@/views/dashboard/components/panels';

export const metadata: Metadata = { title: 'Audience | BW Metro Properties' };
export const revalidate = 900;

interface Props {
  searchParams: Promise<{ range?: string }>;
}

function secs(n: number): string {
  const m = Math.floor(n / 60);
  const s = Math.round(n % 60);
  return m ? `${m}m ${s}s` : `${s}s`;
}

export default async function AudienceSection({ searchParams }: Props) {
  const { range } = await searchParams;
  const { days, ga, incomplete, collecting } = await loadDashboard(range);
  const t = ga.data.totals;

  return (
    <Shell>
      <SectionHead
        title="Audience"
        lead="Who arrives, how they got here, and what they do once they land."
        days={days}
        basePath="/dashboard/audience"
      />

      {incomplete ? (
        <div className="mt-6">
          <NotLiveBanner collecting={collecting} />
        </div>
      ) : null}

      <div className="mt-6 grid grid-cols-2 divide-background-300 overflow-hidden rounded-2xl border border-background-300 bg-background-50 md:grid-cols-4 md:divide-x">
        <Stat
          label="Users"
          value={t.activeUsers}
          previous={ga.data.previousTotals?.activeUsers ?? null}
          unavailable={!ga.live}
        />
        <Stat
          label="New users"
          value={t.newUsers}
          previous={ga.data.previousTotals?.newUsers ?? null}
          hint="First visit in this window"
          unavailable={!ga.live}
        />
        <Stat
          label="Average visit"
          value={secs(t.averageSessionDuration)}
          previous={null}
          hint="Time on the site per session"
          unavailable={!ga.live}
        />
        <Stat
          label="Bounce rate"
          value={`${(t.bounceRate * 100).toFixed(1)}%`}
          previous={null}
          hint="Left without engaging. Lower is better."
          unavailable={!ga.live}
        />
      </div>

      <div className="mt-4">
        <Card title="Users per day" hint={`Last ${days} days`}>
          <TrendChart
            series={[
              {
                key: 'users',
                label: 'Users',
                tone: 1,
                points: ga.data.daily.map((d) => ({ date: d.date, value: d.users })),
              },
            ]}
          />
        </Card>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <Card title="How they arrive" hint="Sessions by channel">
          <BarList rows={ga.data.channels} />
        </Card>
        <Card title="Device">
          <BarList rows={ga.data.devices} />
        </Card>
        <Card title="Where they are">
          <BarList rows={ga.data.countries} emptyLabel="No countries recorded yet." />
        </Card>
      </div>
    </Shell>
  );
}
