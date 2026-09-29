import Reveal from '@/components/base/Reveal';
import { stats } from '@/mocks/homeData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

export default function AboutV2() {
  return (
    <section id="about" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow index="01" className="justify-center">
            About Us
          </Eyebrow>
          <p className="mt-8 font-heading text-[26px] font-normal italic leading-[1.28] tracking-[-0.01em] text-foreground-950 md:text-[42px]">
            &ldquo;Brandon Wilson is a modern real estate professional dedicated to connecting people with properties
            that truly fit their lifestyle and goals.&rdquo;
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <Reveal>
            <div className="relative h-full">
              <div className="h-[460px] w-full overflow-hidden rounded-[30px] md:h-[680px]">
                <img
              loading="lazy"
              decoding="async"
                  src="https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-6235.jpeg"
                  alt="Brandon Wilson, DMV realtor with BW Metro Properties"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl border border-background-50/20 bg-foreground-950/60 px-6 py-4 backdrop-blur-md">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-background-200">
                    Brandon Wilson
                  </p>
                  <p className="mt-1.5 font-heading text-lg text-background-50">ABR · SRS · MRP · RENE</p>
                </div>
                <span className="font-heading text-[46px] leading-none text-background-50/25" aria-hidden="true">
                  01
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <Eyebrow>Meet Brandon Wilson</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Strategic Approach to <em className="italic">Real Estate</em>
            </h2>
            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              Brandon Wilson is a dedicated full-time real estate professional serving clients throughout the
              Washington, D.C., Maryland, and Northern Virginia area. Known for his commitment to excellence and
              personalized service, Brandon combines real-world experience, business acumen, and a genuine passion for
              helping people achieve their homeownership and investment goals.
            </p>

            <div className="mt-12 border-t border-background-300 pt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground-500">
                Verified Track Record
              </p>
              <div className="mt-6 grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-[32px] leading-none text-foreground-950 md:text-[44px]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-[12.5px] leading-snug text-foreground-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton href="#contact">Schedule a Consultation</CtaButton>
              <GhostButton href="#services">Get to know me</GhostButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}