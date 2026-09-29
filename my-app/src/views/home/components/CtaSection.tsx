import { Phone } from 'lucide-react';
import Reveal from '@/components/base/Reveal';

export default function CtaSection() {
  return (
    <section id="contact" className="px-3 pb-3 md:px-5">
      <div className="relative mx-auto flex max-w-[1520px] flex-col items-center overflow-hidden rounded-[24px] px-6 py-24 text-center md:rounded-[36px] md:px-14 md:py-32">
        <img
              loading="lazy"
              decoding="async"
          src="https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg"
          alt="Washington DC at dusk — the market BW Metro Properties serves"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div
          className="absolute inset-0 bg-foreground-950/80"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-foreground-950/60 via-transparent to-foreground-950/70"
          aria-hidden="true"
        />

        <Reveal className="relative max-w-3xl">
          <p className="eyebrow text-[11px] text-accent-300 [text-shadow:0_1px_18px_rgba(0,0,0,0.45)]">Ready To Make Your Next Move?</p>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.06] tracking-[-0.02em] text-background-50 [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] md:text-[58px]">
            Let&rsquo;s build a strategy that works for your goals.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.5)] md:text-[16.5px]">
            Buyers, sellers and investors across Washington DC, Maryland and Northern Virginia trust BW Metro
            Properties to clear the path forward.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="btn-shimmer whitespace-nowrap rounded-full bg-primary-500 px-9 py-4 text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
            >
              Connect With Us
            </a>
            <a
              href="tel:+12029984593"
              className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-50/35 px-9 py-4 text-sm font-semibold text-background-50 transition-colors duration-300 hover:border-background-50/80 hover:bg-background-50/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (202) 998-4593
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}