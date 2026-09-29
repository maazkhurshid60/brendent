/**
 * Every public page on the site, with a human name.
 *
 * This exists so the pages panel has something true to show before analytics
 * is connected: the real routes, each reading zero, rather than invented rows
 * or an empty box. Once GA4 is live the measured list replaces it, and any
 * path GA4 reports that is not here still displays - the lookup only supplies
 * a nicer label, it never filters.
 *
 * /home-classic and /home-v2 are alternate builds of the homepage rather than
 * pages a visitor would navigate to, so they are grouped as internal.
 */

export interface SitePage {
  path: string;
  name: string;
  group: 'Core' | 'Areas' | 'Tools' | 'Content' | 'Internal';
}

export const SITE_PAGES: SitePage[] = [
  { path: '/', name: 'Home', group: 'Core' },
  { path: '/about', name: 'About', group: 'Core' },
  { path: '/buyers', name: 'Buyers', group: 'Core' },
  { path: '/sellers', name: 'Sellers', group: 'Core' },
  { path: '/properties', name: 'Properties', group: 'Core' },
  { path: '/exclusive-listings', name: 'Exclusive listings', group: 'Core' },
  { path: '/recently-sold', name: 'Recently sold', group: 'Core' },
  { path: '/rentals', name: 'Rentals', group: 'Core' },
  { path: '/get-in-touch', name: 'Get in touch', group: 'Core' },
  { path: '/vip-home-search', name: 'VIP home search', group: 'Core' },
  { path: '/cash-offer', name: 'Cash offer', group: 'Core' },
  { path: '/success-stories', name: 'Success stories', group: 'Core' },

  { path: '/explore-areas', name: 'Explore areas', group: 'Areas' },
  { path: '/washington', name: 'Washington DC', group: 'Areas' },
  { path: '/arlington', name: 'Arlington', group: 'Areas' },
  { path: '/alexandria', name: 'Alexandria', group: 'Areas' },
  { path: '/bethesda', name: 'Bethesda', group: 'Areas' },
  { path: '/falls-church', name: 'Falls Church', group: 'Areas' },
  { path: '/silver-spring', name: 'Silver Spring', group: 'Areas' },
  { path: '/shaw-u-street-corridor', name: 'Shaw / U Street', group: 'Areas' },

  { path: '/home-valuation', name: 'Home valuation', group: 'Tools' },
  { path: '/mortgage-calculator', name: 'Mortgage calculator', group: 'Tools' },
  { path: '/affordability-calculator', name: 'Affordability calculator', group: 'Tools' },
  { path: '/home-sale-calculator', name: 'Home sale calculator', group: 'Tools' },

  { path: '/blog', name: 'Blog', group: 'Content' },
  { path: '/resources', name: 'Resources & Partners', group: 'Content' },
  {
    path: '/blog/your-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition',
    name: 'Guide: Buying a home in the DMV',
    group: 'Content',
  },

  { path: '/home-classic', name: 'Home (classic build)', group: 'Internal' },
  { path: '/home-v2', name: 'Home (v2 build)', group: 'Internal' },
];

const BY_PATH = new Map(SITE_PAGES.map((p) => [p.path, p]));

/** Strips query and trailing slash so GA4 paths line up with the table above. */
export function normalisePath(raw: string): string {
  const noQuery = raw.split('?')[0].split('#')[0];
  if (noQuery.length > 1 && noQuery.endsWith('/')) return noQuery.slice(0, -1);
  return noQuery || '/';
}

export function pageName(path: string): string {
  return BY_PATH.get(normalisePath(path))?.name ?? normalisePath(path);
}

export const PUBLIC_PAGE_COUNT = SITE_PAGES.filter((p) => p.group !== 'Internal').length;
