import Reveal from '@/components/base/Reveal';
import { stats } from '@/mocks/homeData';

export default function MeetBrandon() {
  return (
    <section id="about" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-shell">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow text-[11px] text-accent-700">About Us</p>
          <p className="mt-7 font-heading text-[24px] font-normal leading-[1.35] tracking-[-0.01em] text-foreground-950 md:text-[36px]">
            &ldquo;Brandon Wilson is a modern real estate professional dedicated to connecting people with properties
            that truly fit their lifestyle and goals.&rdquo;
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="h-[440px] w-full overflow-hidden rounded-[28px] md:h-[620px]">
                <img
              loading="lazy"
              decoding="async"
                  src="https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-6235.jpeg"
                  alt="Brandon Wilson, DMV realtor with BW Metro Properties"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="animate-float absolute -bottom-6 left-6 rounded-2xl border border-background-200 bg-background-50 px-6 py-5 md:left-10">
                <p className="eyebrow text-[9.5px] text-accent-700">Brandon Wilson</p>
                <p className="mt-1.5 font-heading text-xl text-foreground-950">ABR · SRS · MRP · RENE</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow text-[11px] text-accent-700">Meet Brandon Wilson</p>
            <h2 className="mt-5 font-heading text-[32px] font-normal leading-[1.08] tracking-[-0.015em] text-foreground-950 md:text-[46px]">
              Strategic Approach to <span className="underline-brand">Real Estate</span>
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              Brandon Wilson is a dedicated full-time real estate professional serving clients throughout the
              Washington, D.C., Maryland, and Northern Virginia area. Known for his commitment to excellence and
              personalized service, Brandon combines real-world experience, business acumen, and a genuine passion for
              helping people achieve their homeownership and investment goals.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-background-200 pt-9">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-[30px] leading-none text-foreground-950 md:text-[40px]">
                    {stat.value}
                  </p>
                  <p className="mt-2.5 text-[12.5px] leading-snug text-foreground-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="whitespace-nowrap rounded-full bg-primary-500 px-8 py-4 text-center text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
              >
                Schedule a Consultation
              </a>
              <a
                href="#services"
                className="whitespace-nowrap rounded-full border border-background-300 px-8 py-4 text-center text-sm font-semibold text-foreground-900 transition-colors duration-300 hover:border-primary-300 hover:text-primary-600"
              >
                Get to know me
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}