import { Mail, Phone } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { brand } from '@/mocks/homeData';
import { propertiesBrandBand } from '@/mocks/propertiesData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function PropertiesBrandBand() {
  return (
    <section className="bg-foreground-950 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end lg:gap-16">
          <Reveal>
            <Eyebrow tone="light">{propertiesBrandBand.eyebrow}</Eyebrow>
            <h2 className="mt-7 font-heading text-[36px] font-normal leading-[1.03] tracking-[-0.025em] text-background-50 md:text-[56px]">
              {propertiesBrandBand.titleLead} <em className="italic">{propertiesBrandBand.titleAccent}</em>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-background-200 md:text-[16.5px]">
              {propertiesBrandBand.text}
            </p>
          </Reveal>

          <Reveal className="lg:pl-10">
            <div className="rounded-[24px] border border-background-50/12 bg-background-50/5 p-7 md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-background-200/70">
                Talk to Brandon
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center gap-3 whitespace-nowrap text-[15px] font-medium text-background-50 transition-colors duration-300 hover:text-primary-300"
                >
                  <Phone className="h-4 w-4 text-background-200/70" aria-hidden="true" />
                  {brand.phone}
                </a>
                <a
                  href={`mailto:${brand.email}`}
                  className="inline-flex items-center gap-3 break-all text-[15px] font-medium text-background-50 transition-colors duration-300 hover:text-primary-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-background-200/70" aria-hidden="true" />
                  {brand.email}
                </a>
              </div>

              <div className="mt-7 border-t border-background-50/12 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-background-200/70">
                  State Licenses
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-background-200">{brand.licenses}</p>
              </div>

              <div className="mt-7 flex flex-col gap-5 border-t border-background-50/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="inline-flex items-center justify-center">
                  <img
              loading="lazy"
              decoding="async"
                    src={brand.psrLogo}
                    alt="Pearson Smith Realty logo"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <p className="text-[11.5px] text-background-200/70">{propertiesBrandBand.copyright}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}