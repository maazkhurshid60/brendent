import Link from 'next/link';
import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Icon from '@/components/base/Icon';
import { brand, footerColumns, socialLinks } from '@/mocks/homeData';

interface SiteFooterProps {
  /** Prefix applied to hash links so they resolve correctly from any route. */
  linkBase?: string;
}

const legalLinks = ['Accessibility', 'Privacy Policy', 'Sitemap'];

/**
 * Closing ink band.
 *
 * Four blocks across twelve columns: the brand and its socials, three link
 * columns, then visit-and-contact with the brokerage credential beneath it.
 *
 * Both logos sit directly on the ground here. They are coral-and-white assets
 * built for dark backgrounds, so the dark chips they used to need on the cream
 * footer are gone rather than restyled.
 */
export default function SiteFooter({ linkBase = '' }: SiteFooterProps) {
  const resolve = (href: string) => (href.startsWith('#') ? `${linkBase}${href}` : href);

  /* Headings stay coral; the gold below is the hover colour only.
     text-accent-400 is oklch(0.81 0.068 88), which renders exactly the
     #D3BF8F the studio asked for - so this stays on the token scale
     instead of hardcoding the hex. */
  const columnHeading = 'text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-400';
  const linkClass =
    'group relative inline-block break-words text-[15px] leading-snug text-background-100 transition-colors duration-300 hover:text-accent-400';
  const linkRail = (
    <span
      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent-400/70 transition-transform duration-300 group-hover:scale-x-100"
      aria-hidden="true"
    />
  );

  return (
    <footer className="relative overflow-hidden bg-foreground-950 text-background-100">
      <div className="relative mx-auto max-w-[1420px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <img
              loading="lazy"
              decoding="async"
              src={brand.logo}
              alt="BW Metro Properties logo"
              className="h-12 w-auto object-contain md:h-14"
            />
            <p className="mt-7 max-w-md text-[15.5px] leading-relaxed text-background-100/85">
              Brandon Wilson — a full-time real estate professional serving buyers, sellers and
              investors across Washington, D.C., Maryland and Northern Virginia.
            </p>
            <div className="mt-8 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-background-50/25 text-background-100 transition-colors duration-300 hover:border-background-50 hover:bg-background-50 hover:text-foreground-950"
                >
                  <Icon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className={columnHeading}>{column.title}</h4>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('#') ? (
                        <a href={resolve(link.href)} className={linkClass}>
                          {link.label}
                          {linkRail}
                        </a>
                      ) : (
                        <Link href={link.href} className={linkClass}>
                          {link.label}
                          {linkRail}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Visit & contact, with the brokerage credential beneath */}
          <div className="lg:col-span-3">
            <h4 className={columnHeading}>Visit &amp; Contact</h4>
            <ul className="mt-6 flex flex-col gap-4 text-[15px] leading-snug text-background-100/85">
              <li className="flex items-start gap-3">
                <MapPin className="mt-[3px] h-4 w-4 shrink-0 text-background-200/70" aria-hidden="true" />
                <span>{brand.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-[3px] h-4 w-4 shrink-0 text-background-200/70" aria-hidden="true" />
                <span>Open Daily 8:00am – 6:00pm · free to contact 24/7</span>
              </li>
              <li>
                <a
                  href={brand.phoneHref}
                  className="flex items-start gap-3 transition-colors duration-300 hover:text-accent-400"
                >
                  <Phone className="mt-[3px] h-4 w-4 shrink-0 text-background-200/70" aria-hidden="true" />
                  <span>(202) 998-4593</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-start gap-3 break-all transition-colors duration-300 hover:text-accent-400"
                >
                  <Mail className="mt-[3px] h-4 w-4 shrink-0 text-background-200/70" aria-hidden="true" />
                  <span>{brand.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-[3px] h-4 w-4 shrink-0 text-background-200/70"
                  aria-hidden="true"
                />
                <span>{brand.licenses}</span>
              </li>
            </ul>

            <div className="mt-9">
              <p className={columnHeading}>Affiliated With</p>
              <img
              loading="lazy"
              decoding="async"
                src={brand.psrLogo}
                alt="Pearson Smith Realty logo"
                className="mt-5 h-11 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-16 flex flex-col gap-4 border-t border-background-50/[0.12] pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-20">
          <p className="text-xs text-background-200/65">
            © 2026 Unbound Solutions dba BW Metro Properties · Licensed in DC, VA &amp; MD
          </p>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item}>
                <a
                  href={resolve('#top')}
                  className="whitespace-nowrap text-xs text-background-200/65 transition-colors duration-300 hover:text-accent-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
