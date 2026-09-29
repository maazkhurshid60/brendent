'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone } from 'lucide-react';
import { brand, navLinks } from '@/mocks/homeData';
import SidebarDrawer from '@/views/home-v2/components/SidebarDrawer';

interface SiteNavbarProps {
  /** Prefix applied to hash links so they resolve correctly from any route. */
  linkBase?: string;
  /** Where the logo points. */
  homeHref?: string;
}

/**
 * Site masthead — a solid ink bar, at every scroll position.
 *
 * It does not go transparent over the hero. That matters for the wordmark:
 * the logo asset is coral-and-white built for dark grounds, so a permanently
 * dark bar is the only state where it can show its real colours instead of
 * being flattened to a silhouette with a brightness filter.
 *
 * Scrolling adds a shadow and a reading-progress hairline along the bottom
 * edge; nothing else moves, so the bar never reflows the page under it.
 */
export default function SiteNavbar({ linkBase = '', homeHref = '#top' }: SiteNavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const travel = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 40);
      setProgress(travel > 0 ? Math.min(y / travel, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // The dropdown is driven by state rather than :hover alone so it can be
  // opened from the keyboard and dismissed with Escape or an outside click.
  const closeMenu = useCallback(() => setOpenMenu(null), []);

  useEffect(() => {
    if (!openMenu) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    const onPointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [openMenu, closeMenu]);

  const logoIsHash = homeHref.startsWith('#');
  const resolve = (href: string) => (href.startsWith('#') ? `${linkBase}${href}` : href);

  const isCurrent = (href: string) => !href.startsWith('#') && pathname === href;
  const isGroupCurrent = (children?: { href: string }[]) =>
    Boolean(children?.some((child) => isCurrent(child.href)));

  const itemClass = (active: boolean) =>
    `group relative inline-flex items-center gap-1.5 whitespace-nowrap py-1 text-[14px] font-medium tracking-wide transition-colors duration-300 ${
      active ? 'text-background-50' : 'text-background-100 hover:text-primary-400'
    }`;

  // Hairline under each item: parked at zero width, drawn left-to-right on
  // hover, and held open in coral for the route you are currently on.
  const railClass = (active: boolean) =>
    `absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-300 group-hover:scale-x-100 ${
      active ? 'scale-x-100 bg-primary-500' : 'scale-x-0 bg-background-50/70'
    }`;

  const logoImg = (
    <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
      src={brand.logo}
      alt="BW Metro Properties logo"
      className="h-9 w-auto md:h-10"
    />
  );

  return (
    <>
      {/* Transparent over the hero, solid once the page moves.
          The wordmark needs no brightness filter in either state: the hero
          runs Brandon's film under .v2-scrim, so the bar sits on dark at the
          top and on the ink band after the scroll - the coral-and-white logo
          reads on both. That is what let this go back to transparent without
          the flattened silhouette the cream version used to need. */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? 'border-background-50/10 bg-foreground-950 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)]'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between gap-6 px-5 md:h-[88px] md:px-10">
          {logoIsHash ? (
            <a href={homeHref} className="flex shrink-0 items-center" aria-label="BW Metro Properties home">
              {logoImg}
            </a>
          ) : (
            <Link href={homeHref} className="flex shrink-0 items-center" aria-label="BW Metro Properties home">
              {logoImg}
            </Link>
          )}

          <nav ref={navRef} className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              if (link.children) {
                const open = openMenu === link.label;
                const active = isGroupCurrent(link.children);
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(link.label)}
                    onMouseLeave={closeMenu}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={open}
                      onClick={() => setOpenMenu(open ? null : link.label)}
                      className={itemClass(active || open)}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                      <span className={railClass(active)} aria-hidden="true" />
                    </button>

                    <div
                      className={`absolute left-1/2 top-full z-50 w-[268px] -translate-x-1/2 pt-5 transition-all duration-300 ${
                        open
                          ? 'pointer-events-auto translate-y-0 opacity-100'
                          : 'pointer-events-none translate-y-1 opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-background-50/12 bg-foreground-950 shadow-[0_30px_60px_-30px_rgba(0,0,0,1)]">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={closeMenu}
                            aria-current={isCurrent(child.href) ? 'page' : undefined}
                            className={`group/item flex items-center justify-between gap-3 border-b border-background-50/10 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 last:border-b-0 hover:bg-background-50/[0.07] ${
                              isCurrent(child.href)
                                ? 'bg-background-50/[0.07] text-primary-400'
                                : 'text-background-100 hover:text-background-50'
                            }`}
                          >
                            {child.label}
                            <span
                              className="h-px w-4 shrink-0 bg-current opacity-40 transition-all duration-300 group-hover/item:w-6 group-hover/item:opacity-90"
                              aria-hidden="true"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Leaving via a sibling link counts as an outside click that the
              // document listener cannot see, since it lands inside the nav.
              const active = isCurrent(link.href);
              return link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={resolve(link.href)}
                  onClick={closeMenu}
                  className={itemClass(active)}
                >
                  {link.label}
                  <span className={railClass(active)} aria-hidden="true" />
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? 'page' : undefined}
                  className={itemClass(active)}
                >
                  {link.label}
                  <span className={railClass(active)} aria-hidden="true" />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={brand.phoneHref}
              className="hidden items-center gap-2.5 whitespace-nowrap text-[14px] font-medium text-background-50 transition-colors duration-300 hover:text-primary-400 xl:flex"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {brand.phone}
            </a>

            {/* Every route renders CtaV2, which owns #contact, so this stays a
                same-page anchor rather than being prefixed with linkBase. */}
            <a
              href="#contact"
              className="btn-shimmer hidden whitespace-nowrap rounded-full bg-primary-500 px-7 py-3.5 text-[13.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600 md:inline-block"
            >
              Schedule a Consultation
            </a>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              className="group flex h-12 items-center gap-3 whitespace-nowrap rounded-full border border-background-50/25 px-5 text-background-50 transition-colors duration-300 hover:border-background-50/70 hover:bg-background-50/10"
            >
              {/* Three rules of uneven length that re-shuffle on hover. */}
              <span className="flex h-[11px] w-[18px] flex-col justify-between" aria-hidden="true">
                <span className="h-px w-full bg-current transition-all duration-300 group-hover:w-3/4" />
                <span className="h-px w-3/4 bg-current transition-all duration-300 group-hover:w-full" />
                <span className="h-px w-full bg-current transition-all duration-300 group-hover:w-1/2" />
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em]">Menu</span>
            </button>
          </div>
        </div>

        {/* Reading progress, along the bottom edge. Appears once the page moves. */}
        <div
          className={`absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <div
            className="h-full origin-left bg-gradient-to-r from-primary-500 to-accent-500"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      <SidebarDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} linkBase={linkBase} />
    </>
  );
}
