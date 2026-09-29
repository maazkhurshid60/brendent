'use client';

import { useEffect } from 'react';

/**
 * Adds `.is-visible` to every `.reveal` element once it scrolls into view,
 * powering the staggered on-scroll animations.
 *
 * One class mutation per element, and the element is unobserved immediately
 * afterwards, so the work is done once and never repeated. See the note beside
 * `.reveal` in index.css for why there is no will-change hint.
 */

export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (nodes.length === 0) return undefined;

    // Someone who has asked for less motion gets the content, not the choreography.
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);

          // Exactly one class mutation per element. Style recalculation is the
          // biggest single cost on these pages, and every extra add/remove
          // during a scroll is another pass over the subtree.
          el.classList.add('is-visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);
}
