import type { LucideIcon } from 'lucide-react';
import { Dumbbell, Landmark, Receipt, ScrollText, TrendingUp } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';
import { condoCopy, condoTopics } from '@/mocks/resourcesData';

const iconMap: Record<string, LucideIcon> = {
  fees: Receipt,
  rules: ScrollText,
  financing: Landmark,
  amenities: Dumbbell,
  resale: TrendingUp,
};

export default function CondoEducation() {
  return (
    <section id="condo-basics" className="bg-background-50 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index="03">{condoCopy.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-foreground-950 md:text-[52px]">
            {condoCopy.titleLead} <em className="italic">{condoCopy.titleAccent}</em>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-foreground-600">{condoCopy.text}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {condoTopics.map((topic, index) => {
            const IconComponent = iconMap[topic.icon] ?? Receipt;
            return (
              <Reveal key={topic.title} className="h-full" delay={index * 70}>
                <article className="svc-card group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-background-200 bg-background-100 p-8">
                  <span
                    className="svc-hairline absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-primary-500 via-accent-500 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="svc-icon flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                    <IconComponent className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-9 font-heading text-[26px] font-normal leading-[1.05] tracking-[-0.01em] text-foreground-950">
                    {topic.title}
                  </h3>
                  <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-foreground-600">{topic.text}</p>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={350}>
            <div className="flex h-full flex-col justify-center rounded-[24px] border border-background-200 bg-foreground-950 p-7">
              <p className="font-heading text-[22px] leading-snug text-background-50">{condoCopy.cta}</p>
              <div className="mt-6">
                <CtaButton href="/get-in-touch">Talk to Brandon</CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}