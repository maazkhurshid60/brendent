'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquare, Phone, X } from 'lucide-react';
import { brand } from '@/mocks/homeData';

/**
 * Floating call / text button, on every page.
 *
 * Deliberate choices:
 *
 * - It starts CLOSED and opens on click. The live site pops its panel open by
 *   itself, which means on a phone the first thing a visitor meets is a card
 *   covering the content they came for, and they have to dismiss it before
 *   reading anything. A button that looks like what it does costs nothing and
 *   asks for nothing.
 *
 * - Dismissing it is remembered for the session (not forever), so it stops
 *   nagging someone reading several pages, but a fresh visit still offers it.
 *   sessionStorage can throw in a locked-down browser, so both access points
 *   are guarded and the widget simply behaves as un-dismissed if it fails.
 *
 * - The number comes from `brand`, the same source as the header and footer, so
 *   there is one phone number on this site and it cannot drift between places.
 *
 * - Text is offered beside Call. "Call or text" is the promise on the card, and
 *   a lot of people would rather text an agent than ring one.
 */

const COPY = {
  heading: 'Do you have questions?',
  sub: 'Call or text today — we are here to help.',
  consent:
    'By calling or texting you agree to be contacted by BW Metro Properties. Message and data rates may apply. Reply STOP at any time to opt out.',
};

const DISMISS_KEY = 'bw-call-dismissed';

/**
 * Routes that never show it. The dashboard is a private tool - nobody rings the
 * office from it, and a floating button in that corner would sit on top of the
 * chart tooltips. Checked here rather than with a CSS `:has()` rule, so the
 * exclusion is explicit and does not depend on a marker class being remembered
 * on some page in the future.
 */
const HIDE_ON = ['/dashboard'];

export default function CallWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Starts VISIBLE so the button - and the phone number inside it - are in the
  // server-rendered HTML rather than appearing a beat after hydration. The
  // dismissal check then runs on mount and hides it again for the small number
  // of people who closed it earlier this session.
  const [hidden, setHidden] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Read on mount, not during render: sessionStorage is not available on the
  // server, so consulting it while rendering would produce different markup on
  // each side and trip a hydration mismatch.
  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === '1';
    } catch {
      // Private mode or blocked storage - treat as not dismissed.
    }
    setHidden(dismissed);
  }, []);

  // Escape closes the panel, and focus goes back to the button that opened it,
  // so a keyboard user is not dropped at the top of the document.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onClick(e: MouseEvent) {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || buttonRef.current?.contains(t)) return;
      setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  function dismiss() {
    setOpen(false);
    setHidden(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // Nothing to recover: it simply reappears on the next page.
    }
  }

  if (hidden || HIDE_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3 print:hidden"
      style={{
        // Clear the iOS home indicator and Android gesture bar.
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
    >
      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Call or text BW Metro Properties"
          className="call-panel w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-background-300 bg-background-50 p-5 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-heading text-[17px] leading-snug text-foreground-950">
                {COPY.heading}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-foreground-600">{COPY.sub}</p>
            </div>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close and hide for this visit"
              className="-mr-1 -mt-1 shrink-0 rounded-lg p-1.5 text-foreground-500 transition-colors hover:bg-background-200 hover:text-foreground-950"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <a
              href={brand.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-foreground-950 px-4 py-3 text-[14px] font-semibold text-background-50 transition-colors hover:bg-foreground-800"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {brand.phone}
            </a>
            <a
              href={`sms:${brand.phoneHref.replace('tel:', '')}`}
              className="flex items-center justify-center gap-2 rounded-full border border-background-300 px-4 py-3 text-[14px] font-semibold text-foreground-900 transition-colors hover:border-foreground-950"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Send a text
            </a>
          </div>

          <p className="mt-3 text-[10.5px] leading-relaxed text-foreground-500">{COPY.consent}</p>
        </div>
      ) : null}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close call options' : 'Call or text us'}
        className="call-fab flex h-14 w-14 items-center justify-center rounded-full bg-foreground-950 text-background-50 shadow-xl transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Phone className="h-5 w-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
