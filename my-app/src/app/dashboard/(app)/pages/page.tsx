import type { Metadata } from 'next';
import { loadDashboard, pageRows } from '@/lib/analytics/load';
import { SITE_PAGES } from '@/lib/analytics/sitePages';
import PagesTable from '@/views/dashboard/components/PagesTable';
import { NotLiveBanner, SectionHead, Shell } from '@/views/dashboard/components/Chrome';
import { Card } from '@/views/dashboard/components/panels';

export const metadata: Metadata = { title: 'Pages | BW Metro Properties' };
export const revalidate = 900;

interface Props {
  searchParams: Promise<{ range?: string }>;
}

/** Group counts come from the route registry, so they are correct whether or
 *  not anything is measuring - they describe the site, not its traffic. */
const GROUPS = ['Core', 'Areas', 'Tools', 'Content'] as const;

export default async function PagesSection({ searchParams }: Props) {
  const { range } = await searchParams;
  const { days, ga, incomplete, collecting } = await loadDashboard(range);
  const rows = pageRows(ga);

  return (
    <Shell>
      <SectionHead
        title="Pages"
        lead="Every public page on the site, and how much of the reading each one accounts for."
        days={days}
        basePath="/dashboard/pages"
      />

      {incomplete ? (
        <div className="mt-6">
          <NotLiveBanner collecting={collecting} />
        </div>
      ) : null}

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {GROUPS.map((g) => {
          const n = SITE_PAGES.filter((p) => p.group === g).length;
          return (
            <div key={g} className="rounded-xl border border-background-300 bg-background-50 px-4 py-3">
              <p className="text-[12px] text-foreground-600">{g}</p>
              <p className="mt-1 font-heading text-[24px] leading-none text-foreground-950">{n}</p>
              <p className="mt-1 text-[11px] text-foreground-500">
                {n === 1 ? 'page' : 'pages'}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4">
        <Card
          title={ga.live ? 'Measured pages' : 'All pages'}
          hint={
            ga.live
              ? `Views and users over the last ${days} days`
              : 'The site as it stands, every route reading zero'
          }
        >
          <PagesTable rows={rows} connected={ga.live} initialShowAll />
        </Card>
      </div>
    </Shell>
  );
}
