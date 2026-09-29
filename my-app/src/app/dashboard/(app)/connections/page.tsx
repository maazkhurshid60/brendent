import type { Metadata } from 'next';
import { loadDashboard } from '@/lib/analytics/load';
import ConnectionPanel from '@/views/dashboard/components/ConnectionPanel';
import { SectionHead, Shell } from '@/views/dashboard/components/Chrome';

export const metadata: Metadata = { title: 'Connections | BW Metro Properties' };
export const revalidate = 900;

interface Props {
  searchParams: Promise<{ range?: string }>;
}

const STEPS: [string, string][] = [
  [
    'Create a GA4 property',
    'analytics.google.com → Admin → Create property. Copy the measurement ID (G-…) and the numeric property ID; they are two different values and both are needed.',
  ],
  [
    'Verify the site in Search Console',
    'search.google.com/search-console. This is the only source of impressions — Google Analytics does not have them at all.',
  ],
  [
    'Make a service account',
    'console.cloud.google.com → IAM → Service Accounts → create, then add a JSON key. Enable the "Google Analytics Data API" and the "Search Console API" for that project.',
  ],
  [
    'Grant it read access on both properties',
    'In GA4: Admin → Property access management → add the service account email as Viewer. In Search Console: Settings → Users and permissions → add it as a Full or Restricted user. This is the step people skip, and it is what produces a 403 once the keys are already in.',
  ],
  [
    'Add the variables',
    'Locally in .env.local; on the host, in its environment settings. Then redeploy. Everything except the measurement ID is read only on the server, so no key is ever sent to a browser.',
  ],
];

export default async function ConnectionsSection({ searchParams }: Props) {
  const { range } = await searchParams;
  const { days, sources } = await loadDashboard(range);
  const live = sources.filter((s) => s.state === 'live').length;

  return (
    <Shell>
      <SectionHead
        title="Connections"
        lead="What is feeding this dashboard, and what is still missing. These steps only need doing once, and only someone with the Google account can do them."
        days={days}
        basePath="/dashboard/connections"
        showRange={false}
      />

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <ConnectionPanel sources={sources} />

        <div className="rounded-2xl border border-background-300 bg-background-50 p-5 md:p-6">
          <h2 className="font-heading text-[19px] leading-tight text-foreground-950">
            How to connect it
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-foreground-600">
            Analytics is not retrospective. History begins the day the tracking tag goes live, so the
            sooner step&nbsp;1 lands, the sooner there is anything to look at.
          </p>

          <ol className="mt-5 space-y-4">
            {STEPS.map(([title, body], i) => (
              <li key={title} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground-950 text-[11.5px] font-semibold text-background-50">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[13.5px] font-medium text-foreground-950">{title}</p>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-foreground-600">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          {live === sources.length ? (
            <p className="mt-5 rounded-lg bg-state-ok/10 px-3 py-2 text-[12.5px] text-foreground-800">
              All three sources are live. Nothing here needs doing.
            </p>
          ) : null}
        </div>
      </div>
    </Shell>
  );
}
