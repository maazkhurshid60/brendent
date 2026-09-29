import { Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Icon from '@/components/base/Icon';
import { brand, socialLinks } from '@/mocks/homeData';
import { contactDetails } from '@/mocks/getInTouchData';

const iconRegistry: Record<string, LucideIcon> = {
  phone: Phone,
  email: Mail,
  office: MapPin,
};

export default function ContactInfoCard() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-foreground-950 p-8 md:p-12">
      <div className="v2-grain absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <img
              loading="lazy"
              decoding="async"
          src={brand.logo}
          alt="BW Metro Properties logo"
          className="h-11 w-auto brightness-0 invert md:h-12"
        />
        <p className="mt-4 text-[10.5px] font-semibold uppercase tracking-[0.28em] text-background-300/70">
          {brand.advisor} · Realtor
        </p>
      </div>

      <div className="relative mt-10 flex flex-col gap-7">
        {contactDetails.map((item) => {
          const IconComponent = iconRegistry[item.icon] ?? Phone;
          const isExternal = item.href.startsWith('http');
          return (
            <div key={`${item.label}-${item.value}`} className="group">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-background-300/60">
                {item.label}
              </p>
              <a
                href={item.href}
                {...(isExternal ? { target: '_blank', rel: 'nofollow noopener noreferrer' } : {})}
                className="mt-2.5 flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-background-50/15 bg-background-50/5 text-background-100 transition-colors duration-300 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-background-50">
                  <IconComponent className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="break-words font-heading text-[19px] leading-snug text-background-50 transition-colors duration-300 group-hover:text-primary-400 md:text-[21px]">
                  {item.value}
                </span>
              </a>
            </div>
          );
        })}
      </div>

      <div className="relative mt-auto pt-10">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-background-300/60">
          Follow Along
        </p>
        <div className="flex flex-wrap items-center gap-2.5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-background-50/20 text-background-100 transition-colors duration-300 hover:border-background-50 hover:bg-background-50 hover:text-foreground-950"
            >
              <Icon name={social.icon} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}