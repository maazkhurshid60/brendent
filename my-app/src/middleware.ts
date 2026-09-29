import { NextResponse, type NextRequest } from 'next/server';
import { DASHBOARD_COOKIE, sessionToken } from '@/lib/dashboardAuth';

/**
 * Gate on /dashboard.
 *
 * Fail CLOSED: if DASHBOARD_PASSWORD is unset the route is refused outright
 * rather than served. An open analytics page publishes the site's traffic, its
 * best queries and its weakest pages to anyone who guesses the URL, so "not
 * configured yet" has to mean "nobody gets in", never "everybody does".
 */
export async function middleware(req: NextRequest) {
  const password = process.env.DASHBOARD_PASSWORD;
  const loginUrl = new URL('/dashboard/login', req.url);

  if (!password) {
    return new NextResponse(
      'The dashboard is not configured. Set DASHBOARD_PASSWORD to enable it.',
      { status: 503, headers: { 'Content-Type': 'text/plain', 'X-Robots-Tag': 'noindex' } },
    );
  }

  const cookie = req.cookies.get(DASHBOARD_COOKIE)?.value;
  if (cookie && cookie === (await sessionToken(password))) {
    return NextResponse.next();
  }

  loginUrl.searchParams.set('next', req.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  // The login page itself must stay reachable, or there is no way in.
  matcher: ['/dashboard', '/dashboard/((?!login).*)'],
};
