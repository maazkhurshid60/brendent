'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Mail, Phone, X } from 'lucide-react';
import Icon from '@/components/base/Icon';
import { brand, menuGroups, socialLinks } from '@/mocks/homeData';

interface SidebarDrawerProps {
  open: boolean;
  onClose: () => void;
  /** Prefix applied to hash links so they resolve correctly from any route. */
  linkBase?: string;
}

export default function SidebarDrawer({ open, onClose, linkBase = '' }: SidebarDrawerProps) {
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  let itemIndex = 0;

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-foreground-950/55 backdrop-blur-[3px] transition-opacity duration-500 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-[460px] flex-col bg-background-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header — eyebrow label + close */}
        <div className="flex items-center justify-between border-b border-background-200 px-6 py-5 md:px-8">
          <p className="eyebrow text-[11px] text-foreground-500">Menu</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-background-300 text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable navigation */}
        <div className="flex-1 overflow-y-auto px-6 py-8 md:px-8">
          {open ? (
            <>
              <div className="drawer-item" style={{ animationDelay: '40ms' }}>
                <img
              loading="lazy"
              decoding="async"
                  src={brand.logo}
                  alt="BW Metro Properties logo"
                  className="h-8 w-auto brightness-0"
                />
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground-400">
                  {brand.advisor}
                </p>
              </div>

              <nav className="mt-9">
                {menuGroups.map((group, groupIdx) => (
                  <div key={group.label} className={groupIdx === menuGroups.length - 1 ? '' : 'mb-9'}>
                    <p className="flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.28em] text-foreground-400">
                      <span className="tabular-nums">{String(groupIdx + 1).padStart(2, '0')}</span>
                      <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
                      <span>{group.label}</span>
                    </p>
                    <ul className="mt-3 flex flex-col">
                      {group.items.map((item) => {
                        const delay = 100 + groupIdx * 140 + itemIndex * 32;
                        itemIndex += 1;
                        const itemClass =
                          'group flex items-center justify-between border-b border-background-200/80 py-3.5';
                        const label = (
                          <>
                            <span className="font-heading text-[19px] leading-snug text-foreground-900 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-600">
                              {item.label}
                            </span>
                            <ChevronRight
                              className="h-4 w-4 text-foreground-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-primary-500"
                              aria-hidden="true"
                            />
                          </>
                        );
                        return (
                          <li
                            key={`${group.label}-${item.label}`}
                            className="drawer-item"
                            style={{ animationDelay: `${delay}ms` }}
                          >
                            {item.href.startsWith('#') ? (
                              <a href={`${linkBase}${item.href}`} onClick={onClose} className={itemClass}>
                                {label}
                              </a>
                            ) : (
                              <Link href={item.href} onClick={onClose} className={itemClass}>
                                {label}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </nav>
            </>
          ) : null}
        </div>

        {/* Footer — contact + CTA + socials */}
        <div className="border-t border-background-200 px-6 py-6 md:px-8">
          {open ? (
            <div className="drawer-item" style={{ animationDelay: '1500ms' }}>
              <div className="flex flex-col gap-3">
                <a href={brand.phoneHref} className="group flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-900 transition-colors duration-300 group-hover:bg-foreground-950 group-hover:text-background-50">
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground-400">
                      Call or Text
                    </span>
                    <span className="text-[13.5px] font-medium text-foreground-900 transition-colors duration-300 group-hover:text-primary-600">
                      {brand.phone}
                    </span>
                  </span>
                </a>
                <a href={`mailto:${brand.email}`} className="group flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-900 transition-colors duration-300 group-hover:bg-foreground-950 group-hover:text-background-50">
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground-400">
                      Email
                    </span>
                    <span className="text-[13.5px] font-medium text-foreground-900 transition-colors duration-300 group-hover:text-primary-600">
                      {brand.email}
                    </span>
                  </span>
                </a>
              </div>

              <a
                href={`${linkBase}#contact`}
                onClick={onClose}
                className="btn-shimmer mt-5 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600"
              >
                Let&apos;s Connect
              </a>

              <div className="mt-5 flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-background-300 text-foreground-600 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
                  >
                    <Icon name={social.icon} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </aside>
    </>
  );
}