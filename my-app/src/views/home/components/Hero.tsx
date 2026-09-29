import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="px-3 pt-3 md:px-5 md:pt-5">
      <div className="relative mx-auto flex min-h-[660px] w-full max-w-[1520px] flex-col justify-between overflow-hidden rounded-[24px] p-6 md:min-h-[860px] md:rounded-[36px] md:p-12">
        <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
          src="https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide.jpeg"
          alt="Washington DC metro area at golden hour with warm city lights"
          className="animate-ken-burns absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden="true" />

        <div className="relative grid gap-8 pt-28 md:grid-cols-[1.05fr_0.95fr] md:items-start md:pt-32">
          <div className="animate-fade-up">
            <span className="animate-float inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-background-50">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="eyebrow text-scrim mt-7 max-w-md text-[11px] leading-relaxed text-accent-300 md:text-xs">
              Serving Buyers, Sellers &amp; Investors Across the DMV Region
            </p>
          </div>

          <div
            className="animate-fade-up rounded-3xl border border-background-50/25 bg-foreground-950/62 p-5 backdrop-blur-md md:ml-auto md:max-w-sm"
            style={{ animationDelay: '240ms' }}
          >
            <div className="flex items-start gap-5">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl md:h-28 md:w-28">
                <img
              loading="eager"
              fetchPriority="high"
              decoding="async"
                  src="https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide-AUTOx1150.fit.jpg"
                  alt="Bethesda Row neighborhood, a DMV community BW Metro Properties serves"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <p className="font-heading text-[36px] leading-none text-background-50">$5.1M</p>
                <p className="mt-3 text-[13px] leading-relaxed text-background-200">
                  In verified career sales volume across the Washington DC Metro — built on clarity, strategy and
                  long-term wealth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16">
          <h1
            className="text-scrim max-w-6xl animate-fade-up font-heading text-[40px] font-normal leading-[1.02] tracking-[-0.025em] text-background-50 md:text-[68px] lg:text-[86px]"
            style={{ animationDelay: '120ms' }}
          >
            Clearing the path forward to help you move smart, build wealth, and live well.
          </h1>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="btn-shimmer whitespace-nowrap rounded-full bg-primary-500 px-8 py-4 text-center text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
            >
              Schedule a Consultation
            </a>
            <a
              href="#value"
              className="whitespace-nowrap rounded-full border border-background-50/35 px-8 py-4 text-center text-sm font-semibold text-background-50 transition-colors duration-300 hover:border-background-50/80 hover:bg-background-50/10"
            >
              Get your home value
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}