import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard sign in | BW Metro Properties',
  robots: { index: false, follow: false },
};

interface Props {
  searchParams: Promise<{ error?: string; next?: string }>;
}

export default async function DashboardLogin({ searchParams }: Props) {
  const { error, next } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-foreground-950 px-5 py-16">
      <div className="w-full max-w-sm">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-background-200/70">
          BW Metro Properties
        </p>
        <h1 className="mt-4 font-heading text-[32px] font-normal leading-tight text-background-50">
          Performance dashboard
        </h1>
        <p className="mt-3 text-[14px] leading-relaxed text-background-200">
          This page is private. Enter the dashboard password to continue.
        </p>

        <form action="/api/dashboard/login" method="POST" className="mt-8">
          <input type="hidden" name="next" value={next ?? '/dashboard'} />
          <label htmlFor="password" className="sr-only">
            Dashboard password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            autoFocus
            required
            className="w-full rounded-xl border border-background-50/20 bg-background-50/5 px-4 py-3 text-[15px] text-background-50 placeholder:text-background-200/50 focus:border-background-50/50 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
            placeholder="Password"
          />

          {error ? (
            <p role="alert" className="mt-3 text-[13px] text-primary-300">
              That password was not correct.
            </p>
          ) : null}

          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-primary-500 px-6 py-3 text-[14px] font-semibold text-background-50 transition-colors duration-200 hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
