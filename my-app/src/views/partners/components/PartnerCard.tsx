import { Globe, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ContactType, FeaturedPartner } from '@/mocks/partnersData';

const contactIcons: Record<ContactType, LucideIcon> = {
  phone: Phone,
  email: Mail,
  website: Globe,
  address: MapPin,
  instagram: Instagram,
};

interface PartnerCardProps {
  partner: FeaturedPartner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <article className="partner-card group flex h-full flex-col overflow-hidden rounded-[24px] border border-background-200 bg-background-50">
      <span className="partner-hairline block h-[2px] w-full bg-gradient-to-r from-primary-500 to-accent-500" aria-hidden="true" />

      <div className="relative h-[240px] w-full overflow-hidden bg-background-100 md:h-[300px]">
        <img
              loading="lazy"
              decoding="async"
          src={partner.image}
          alt={`${partner.name} — trusted BW Metro Properties partner`}
          title={`${partner.category} — BW Metro Properties Partners`}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/25 via-transparent to-transparent" aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-600">{partner.category}</p>
        <h3 className="mt-3 font-heading text-[21px] leading-snug text-foreground-950 md:text-[24px]">{partner.name}</h3>

        <ul className="mt-5 flex flex-col gap-3 border-t border-background-200 pt-5">
          {partner.contacts.map((contact) => {
            const Icon = contactIcons[contact.type];
            return (
              <li key={`${contact.type}-${contact.label}`}>
                <a
                  href={contact.href}
                  target={contact.type === 'phone' || contact.type === 'email' ? undefined : '_blank'}
                  rel={contact.type === 'phone' || contact.type === 'email' ? undefined : 'noopener noreferrer nofollow'}
                  className="group/row flex items-start gap-3 text-[13px] text-foreground-600 transition-colors duration-300 hover:text-foreground-950"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background-100 text-foreground-500 transition-colors duration-300 group-hover/row:bg-foreground-950 group-hover/row:text-background-50">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="break-words pt-1.5 leading-tight">{contact.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}