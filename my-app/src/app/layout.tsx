import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import '@/index.css';

const SITE = 'https://bwmetroproperties.com';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const TITLE = 'BW Metro Properties | Brandon Wilson, DMV Realtor';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description:
    'BW Metro Properties with Brandon Wilson, trusted DMV realtor serving Washington DC, Maryland & Northern Virginia. Buy, sell and invest with data-driven strategy and military-grade discipline across the DC Metro.',
  keywords: [
    'DMV realtor',
    'Washington DC real estate',
    'Northern Virginia homes for sale',
    'Maryland realtor',
    'Brandon Wilson',
    'BW Metro Properties',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: TITLE,
    description:
      'Clearing the path forward to help you move smart, build wealth, and live well across Washington DC, Maryland & Northern Virginia.',
    url: SITE,
    siteName: 'BW Metro Properties',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Trusted DMV real estate advisor for buyers, sellers and investors across the Washington DC Metro.',
  },
  other: {
    'geo.region': 'US-VA',
    'geo.placename': 'Fairfax, Virginia',
    'geo.position': '38.8682;-77.2269',
    ICBM: '38.8682, -77.2269',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080808',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'BW Metro Properties',
  description:
    'Full-service real estate advisory serving buyers, sellers and investors across Washington DC, Maryland and Northern Virginia.',
  url: `${SITE}/`,
  telephone: '+1-202-998-4593',
  email: 'brandon@bwmetroproperties.com',
  areaServed: ['Washington, DC', 'Maryland', 'Northern Virginia'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8315 Lee Hwy',
    addressLocality: 'Fairfax',
    addressRegion: 'VA',
    postalCode: '22031',
    addressCountry: 'US',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '18:00',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Pacifico is used for the Instagram section script logo; Fraunces and
            Onest are pulled in by index.css. Remixicon supplies the `ri-*`
            glyphs in the footer and accordions. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {/* Google Analytics. Rendered only when the measurement ID is present,
            so a local or preview build collects nothing and no empty gtag stub
            ships to visitors. `afterInteractive` keeps it off the critical
            path - analytics must never delay the hero.

            Nothing is recorded retrospectively: the numbers on /dashboard
            start from the moment this ID is first set in the environment. */}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
