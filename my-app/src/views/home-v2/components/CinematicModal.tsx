'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface Frame {
  src: string;
  alt: string;
  caption: string;
}

const frames: Frame[] = [
  {
    src: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide.jpeg',
    alt: 'Old Town Alexandria, Virginia at golden hour',
    caption: 'Old Town Alexandria, Virginia',
  },
  {
    src: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide-AUTOx1150.fit.jpg',
    alt: 'Bethesda Row neighborhood in Maryland',
    caption: 'Bethesda Row, Maryland',
  },
  {
    src: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg',
    alt: 'Washington, D.C. skyline at dusk',
    caption: 'Washington, D.C.',
  },
  {
    src: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-6235.jpeg',
    alt: 'Brandon Wilson of BW Metro Properties',
    caption: 'Brandon Wilson · BW Metro Properties',
  },
  {
    src: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg',
    alt: 'Arlington, Virginia neighborhood',
    caption: 'Arlington, Virginia',
  },
];

interface CinematicModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CinematicModal({ open, onClose }: CinematicModalProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!open) return undefined;
    setIndex(0);
    const id = window.setInterval(() => setIndex((current) => (current + 1) % frames.length), 4200);
    return () => window.clearInterval(id);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground-950/96 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="BW Metro cinematic reel"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close film"
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-background-50/30 text-background-50 transition-colors hover:bg-background-50/10 md:right-8 md:top-8"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="relative w-full max-w-6xl">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-foreground-950 md:aspect-[16/9]">
          {frames.map((frame, frameIndex) => (
            <div
              key={frame.src}
              className={`absolute inset-0 transition-opacity duration-[1300ms] ease-in-out ${
                frameIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
              loading="lazy"
              decoding="async" src={frame.src} alt={frame.alt} className="h-full w-full object-cover object-top" />
            </div>
          ))}
          <div
            className="absolute inset-0 bg-gradient-to-t from-foreground-950/90 via-transparent to-foreground-950/40"
            aria-hidden="true"
          />
          <div className="v2-grain absolute inset-0" aria-hidden="true" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-10">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-background-200">
                BW Metro — The Reel
              </p>
              <p className="mt-2.5 font-heading text-[26px] leading-tight text-background-50 md:text-[38px]">
                {frames[index].caption}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {frames.map((frame, frameIndex) => (
                <button
                  key={frame.src}
                  type="button"
                  onClick={() => setIndex(frameIndex)}
                  aria-label={`Show frame ${frameIndex + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    frameIndex === index ? 'w-8 bg-background-50' : 'w-1.5 bg-background-50/40 hover:bg-background-50/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}