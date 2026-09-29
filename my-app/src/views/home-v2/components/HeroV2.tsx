'use client';

import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

export default function HeroV2() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-foreground-950">
      {/* Brandon's own footage, replacing the Pexels stock clip this hero used
          to stream from a third-party CDN.

          The source is a 888 MB 4K/60 camera master, which is a delivery
          format, not a web one. What ships is 720p30 with the audio track
          dropped: the hero autoplays, and an autoplaying video has to be muted
          anyway, so the audio was pure weight. 720p rather than 1080p because
          .v2-scrim lays a heavy dark gradient over this and .v2-grain a noise
          layer on top of that - the detail a larger encode buys is not
          detail anyone can see through them.

          No `preload` override: a muted autoplay background is fetched by the
          browser regardless, and declaring otherwise only fights it. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/video/hero-poster.jpg"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      {/* Headline and the two calls to action, and nothing else. The vertical
          reel rails, the $5.1M card, the watch-the-film button and the scroll
          cue were all removed at the studio's request, which is why this is a
          single column rather than the 1.15fr/0.85fr split it used to be -
          the right-hand column held the card and the film button, and an
          empty grid track would only have pushed the headline off centre.

          Both the headline and the buttons sit to the RIGHT from lg up. The
          h1 needs ml-auto as well as text-right: max-w-4xl caps its box, and
          a capped block stays at the left of its container no matter how the
          text inside it is aligned. The eyebrow's rule is drawn before its
          label, so it is reversed here to keep the rule on the outer edge
          rather than trapping it between the label and the margin.

          Phones keep the left edge: at that width the column is barely wider
          than the text, so right-ragged setting buys nothing and costs the
          clean left margin the buttons share. */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-between gap-12 px-5 pb-12 pt-32 md:px-10 md:pb-16 md:pt-44">
        <div className="v2-rise lg:text-right">
          <Eyebrow tone="light" className="lg:flex-row-reverse">
            Serving Buyers, Sellers &amp; Investors Across the DMV Region
          </Eyebrow>
          <h1 className="text-scrim mt-8 max-w-4xl font-heading text-[42px] font-normal leading-[0.98] tracking-[-0.03em] text-background-50 md:text-[74px] lg:ml-auto lg:text-[96px]">
            Clearing the path forward to <em className="italic">move smart</em>, build wealth, and live well.
          </h1>
        </div>

        <div
          className="v2-rise flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end"
          style={{ animationDelay: '340ms' }}
        >
          <CtaButton href="#contact">Schedule a Consultation</CtaButton>
          <GhostButton href="#value" tone="light">
            Get your home value
          </GhostButton>
        </div>
      </div>
    </section>
  );
}
