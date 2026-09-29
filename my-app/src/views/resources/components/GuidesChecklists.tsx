import type { LucideIcon } from 'lucide-react';
import { BookOpen, Calculator, ClipboardCheck, ClipboardList } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { Eyebrow } from '@/views/home-v2/components/shared';
import { guides, guidesCopy } from '@/mocks/resourcesData';

const iconMap: Record<string, LucideIcon> = {
  checklist: ClipboardList,
  prep: ClipboardCheck,
  guide: BookOpen,
  investor: Calculator,
};

export default function GuidesChecklists() {
  return (
    <section id="guides" className="relative overflow-hidden bg-foreground-950 px-5 py-20 md:px-10 md:py-28">
      <div className="v2-grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="light" index="02">
            {guidesCopy.eyebrow}
          </Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-background-50 md:text-[52px]">
            {guidesCopy.titleLead} <em className="italic">{guidesCopy.titleAccent}</em>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-background-200">{guidesCopy.text}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-background-50/10 pt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-background-50/10">
          {guides.map((guide, index) => {
            const IconComponent = iconMap[guide.icon] ?? ClipboardList;
            return (
              <Reveal key={guide.title} className="h-full lg:px-8 lg:first:pl-0 lg:last:pr-0" delay={index * 80}>
                <article className="svc-card group relative flex h-full flex-col rounded-[18px] border border-background-50/10 bg-background-50/[0.03] p-7 transition-colors duration-500 md:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-background-50/15 text-background-200/80 transition-colors duration-500 group-hover:border-accent-500/50 group-hover:text-accent-400">
                      <IconComponent className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-background-200/70 transition-colors duration-500 group-hover:text-accent-400">
                      {guide.label}
                    </p>
                  </div>
                  <span
                    className="svc-hairline mt-6 block h-px w-full bg-gradient-to-r from-primary-500 via-accent-500 to-transparent"
                    aria-hidden="true"
                  />
                  <h3 className="mt-7 font-heading text-[24px] font-normal leading-[1.15] tracking-[-0.01em] text-background-50">
                    {guide.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-background-200/70">{guide.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 border-t border-background-50/10 pt-10">
          <h3 className="mx-auto max-w-3xl text-center font-heading text-[24px] font-normal leading-snug text-background-50 md:text-[34px]">
            {guidesCopy.footnote}
          </h3>
        </Reveal>
      </div>
    </section>
  );
}