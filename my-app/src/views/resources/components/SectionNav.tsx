'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Jump navigation for the combined Resources + Partners page.
 *
 * Merging two long marketing pages puts the partner directory - the thing
 * people come here to find a plumber or a lender in - roughly four fifths of
 * the way down a very tall document. Almost nobody scrolls that far. This bar
 * keeps every part of the page one click away, and marks where you are.
 *
 * It is a real anchor list, not a tab widget: all the content stays in one
 * document at one URL, so it is still one page to Google and still works with
 * the browser's own find-in-page.
 */

export interface NavSection {
  id: string;
  label: string;
}

export default function SectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? '');
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => n !== null);
    if (nodes.length === 0) return;

    // rootMargin pulls the trigger line down below the two stacked bars (the
    // site's fixed header plus this one), so a section counts as "current"
    // when it reaches the top of the readable area rather than the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-152px 0px -55% 0px', threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [sections]);

  // Keep the active chip in view on narrow screens, where the bar scrolls.
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const chip = bar.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!chip) return;
    const left = chip.offsetLeft - bar.clientWidth / 2 + chip.clientWidth / 2;
    bar.scrollTo({ left: Math.max(left, 0), behavior: 'smooth' });
  }, [active]);

  return (
    <div className="sticky top-[72px] z-30 border-y border-background-200 bg-background-100/95 backdrop-blur md:top-[84px]">
      <div
        ref={barRef}
        className="mx-auto flex max-w-[1280px] gap-1.5 overflow-x-auto px-5 py-2.5 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {sections.map((s) => {
          const on = s.id === active;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              data-id={s.id}
              aria-current={on ? 'true' : undefined}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors duration-300 ${
                on
                  ? 'bg-foreground-950 text-background-50'
                  : 'text-foreground-600 hover:bg-background-200 hover:text-foreground-950'
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
