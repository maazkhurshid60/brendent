/**
 * What is actually wired up, and what is not.
 *
 * The dashboard now always renders its full shape - every tile, every chart -
 * whether or not anything is connected. That is a deliberate choice: an empty
 * shell tells you what the page will look like once data arrives, which a wall
 * of setup text does not.
 *
 * But it carries an obvious risk. A row of zeros is indistinguishable from a
 * genuinely dead week unless the page says which one it is looking at, and
 * "nobody visited" and "nothing is measuring" are opposite conclusions that
 * would lead to opposite decisions. So every zero on this page is accompanied
 * by state from here, and the distinction is made in words, not by absence.
 */

export type SourceState = 'live' | 'missing' | 'error';

export interface VarStatus {
  name: string;
  set: boolean;
  /** public = shipped to the browser; the rest never leave the server */
  public?: boolean;
  what: string;
}

export interface SourceStatus {
  key: 'collection' | 'ga4' | 'gsc';
  title: string;
  state: SourceState;
  /** one line on what this source contributes */
  provides: string;
  vars: VarStatus[];
  /** set when state === 'error' */
  error?: string;
}

function has(name: string): boolean {
  return Boolean(process.env[name]?.trim());
}

/**
 * Collection is listed separately from reporting on purpose. The measurement
 * ID is what *records* visits; the property ID and service account only *read*
 * them back. Someone can wire the reading side perfectly and still see zeros
 * forever because the tag was never installed, and that failure is invisible
 * unless the two are shown apart.
 */
export function collectionStatus(): SourceStatus {
  const set = has('NEXT_PUBLIC_GA_ID');
  return {
    key: 'collection',
    title: 'Tracking tag',
    state: set ? 'live' : 'missing',
    provides: set
      ? 'Installed on every page. Visits are being recorded from this point forward.'
      : 'Not installed. Nothing is being recorded, and no history is accumulating.',
    vars: [
      {
        name: 'NEXT_PUBLIC_GA_ID',
        set,
        public: true,
        what: 'The GA4 measurement ID (G-XXXXXXXXXX). The only variable sent to the browser, and the only one that collects anything.',
      },
    ],
  };
}

export function ga4Status(error?: string): SourceStatus {
  const vars: VarStatus[] = [
    { name: 'GA4_PROPERTY_ID', set: has('GA4_PROPERTY_ID'), what: 'Numeric property ID, from Admin → Property details. Not the G- id.' },
    { name: 'GOOGLE_SERVICE_ACCOUNT_EMAIL', set: has('GOOGLE_SERVICE_ACCOUNT_EMAIL'), what: 'Service account address, ending @<project>.iam.gserviceaccount.com.' },
    { name: 'GOOGLE_PRIVATE_KEY', set: has('GOOGLE_PRIVATE_KEY'), what: 'private_key from the service account JSON, with the literal backslash-n line breaks left exactly as they are in the file.' },
  ];
  const complete = vars.every((v) => v.set);
  return {
    key: 'ga4',
    title: 'Google Analytics',
    state: error ? 'error' : complete ? 'live' : 'missing',
    provides: 'Visitors, sessions, page views, devices, countries, and which pages get read.',
    vars,
    error,
  };
}

export function gscStatus(error?: string): SourceStatus {
  const vars: VarStatus[] = [
    { name: 'GSC_SITE_URL', set: has('GSC_SITE_URL'), what: 'Exactly as Search Console lists it, e.g. sc-domain:bwmetroproperties.com' },
    { name: 'GOOGLE_SERVICE_ACCOUNT_EMAIL', set: has('GOOGLE_SERVICE_ACCOUNT_EMAIL'), what: 'The same service account as above.' },
    { name: 'GOOGLE_PRIVATE_KEY', set: has('GOOGLE_PRIVATE_KEY'), what: 'The same private key as above.' },
  ];
  const complete = vars.every((v) => v.set);
  return {
    key: 'gsc',
    title: 'Search Console',
    state: error ? 'error' : complete ? 'live' : 'missing',
    provides: 'Impressions, clicks, click-through rate, ranking position, and the queries people search.',
    vars,
    error,
  };
}

/** True when nothing at all is wired, which changes the page's headline. */
export function nothingConnected(sources: SourceStatus[]): boolean {
  return sources.every((s) => s.state === 'missing');
}
