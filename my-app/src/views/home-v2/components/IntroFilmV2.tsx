'use client';

import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { Eyebrow } from '@/views/home-v2/components/shared';

/**
 * Brandon's intro film, sitting between the services grid and the about
 * section.
 *
 * Click to play, with sound, rather than the muted autoplay the hero uses.
 * Two reasons: someone is speaking to camera, so a muted loop throws away the
 * whole point of it; and an autoplaying file this size would be charged to
 * every visitor whether they wanted it or not. `preload="metadata"` means the
 * page only fetches enough to show the first frame and learn the duration -
 * the body of the file is not touched until somebody presses play.
 *
 * The source is a portrait clip, so it is framed 9:16 in its own column
 * rather than stretched across the section the way a landscape cut would be.
 *
 * The file shipped here is not the master. That was a 141.72 MB 1080x1920
 * edit export at 24.13 Mbps - a delivery format, not a web one. This is the
 * same 1080x1920 re-encoded at CRF 27 (2.91 Mbps, 17.1 MB), which is an 8x
 * saving and indistinguishable in a frame that renders about 420px wide.
 * Faststart is set, so it begins playing without fetching the whole file.
 */
export default function IntroFilmV2() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    const v = videoRef.current;
    if (!v) return;
    setStarted(true);
    v.play().catch(() => {
      // Autoplay policy can still refuse; the native controls below are the
      // fallback, so there is nothing to recover here.
    });
  }

  return (
    <section id="intro-film" className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <Eyebrow tone="light">Meet Brandon</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[54px]">
            A minute with <em className="italic">Brandon Wilson</em>
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-background-200 md:text-[16.5px]">
            Before you pick an agent, hear how he thinks about the work &mdash; the strategy behind a move, and what
            clear guidance across the DMV actually looks like.
          </p>
        </Reveal>

        <Reveal className="order-1 lg:order-2" delay={130}>
          <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[26px] border border-background-50/15 bg-black shadow-2xl">
            <video
              ref={videoRef}
              className="intro-film aspect-[9/16] h-full w-full object-cover"
              src="/video/bw-intro.mp4"
              poster="/video/bw-intro-poster.jpg"
              preload="metadata"
              playsInline
              controls={started}
              onEnded={() => setStarted(false)}
            />

            {/* The cover sits over the first frame until play is pressed, then
                unmounts so it cannot swallow clicks meant for the controls. */}
            {!started && (
              <button
                type="button"
                onClick={play}
                aria-label="Play Brandon's intro film"
                className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-foreground-950/35 transition-colors duration-300 hover:bg-foreground-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-inset"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-background-50/50 text-background-50 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-background-50 group-hover:bg-background-50/15">
                  <Play className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden="true" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-background-100">
                  Watch the film
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
