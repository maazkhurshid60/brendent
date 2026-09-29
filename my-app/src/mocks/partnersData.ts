// Content for the Partners page — mirrors the real BW Metro Properties
// "Partners" page section for section, adapted to our own design system.

export const partnersHero = {
  eyebrow: 'Trusted Partners',
  titleLead: 'You Can',
  titleAccent: 'Rely On',
  text: "I’ve built strong relationships with a network of trusted professionals who share the same commitment to quality, communication, and results.",
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg',
};

export const partnersIntro = {
  eyebrow: 'Your Trusted Network of Experts',
  title: 'My Go-To Partners',
  paragraphs: [
    'A successful real estate experience goes beyond just buying or selling a home—it requires the right team behind you. That’s why I’ve built strong relationships with a network of trusted professionals who share the same commitment to quality, communication, and results. From experienced lenders and home inspectors to contractors, title companies, and insurance providers, each partner is carefully selected to ensure you receive reliable service every step of the way. Whether you need financing guidance, property insights, or post-closing support, you’ll have access to a team that helps make the process smooth, efficient, and stress-free.',
  ],
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-6235.jpeg',
};

export type ContactType = 'phone' | 'email' | 'website' | 'address' | 'instagram';

export interface PartnerContact {
  type: ContactType;
  label: string;
  href: string;
}

export interface FeaturedPartner {
  category: string;
  name: string;
  image: string;
  contacts: PartnerContact[];
  site: string;
}

export const featuredPartnersCopy = {
  eyebrow: 'Lenders, inspectors, and service providers',
  title: 'Our Trusted Partners',
};

export const featuredPartners: FeaturedPartner[] = [
  {
    category: 'Home Inspector',
    name: 'Rachel Oslund · Lode Star Inspection Services',
    image: 'https://public.readdy.ai/ai/img_res/edited_7132ecb08345ec24d09e5e4737e59b03_ced7ca3f.jpg',
    contacts: [
      { type: 'phone', label: '410.878.3039', href: 'tel:4108783039' },
      { type: 'email', label: 'LodeStar@LodeStarInspections.com', href: 'mailto:LodeStar@LodeStarInspections.com' },
      { type: 'website', label: 'www.LodeStarInspections.com', href: 'https://www.LodeStarInspections.com/' },
    ],
    site: 'https://www.LodeStarInspections.com/',
  },
  {
    category: 'Title Company',
    name: 'Phoenix S. Ayotte, Esq. · Equity Title and Escrow',
    image: 'https://public.readdy.ai/ai/img_res/edited_c50caf7d1344bcc50109fe4e9fb519f5_ced7ca3f.jpg',
    contacts: [
      { type: 'phone', label: '703.544.9004 Ext. 705', href: 'tel:7035449004' },
      { type: 'email', label: 'payotte@etetitle.com', href: 'mailto:payotte@etetitle.com' },
      { type: 'website', label: 'etetitle.com/about-us', href: 'https://www.etetitle.com/about-us/' },
    ],
    site: 'https://www.etetitle.com/about-us/',
  },
  {
    category: 'Lender',
    name: 'Sam Winkeler · First Heritage Mortgage',
    image: 'https://public.readdy.ai/ai/img_res/edited_e731791c38d1d78169d919e28092e7d0_ced7ca3f.jpg',
    contacts: [
      { type: 'phone', label: '207.440.7553', href: 'tel:2074407553' },
      { type: 'email', label: 'swinkeler@fhmtg.com', href: 'mailto:swinkeler@fhmtg.com' },
      { type: 'website', label: 'fhmtg.com/officers/sam-winkeler', href: 'https://fhmtg.com/officers/sam-winkeler/' },
    ],
    site: 'https://fhmtg.com/officers/sam-winkeler/',
  },
  {
    category: 'Handy Man',
    name: 'Fredy Rodas · Home Improvement',
    image: 'https://public.readdy.ai/ai/img_res/edited_3aac949bee8f1d4424add619939e2421_7b2a4deb.jpg',
    contacts: [
      { type: 'phone', label: '703-309-7964', href: 'tel:7033097964' },
      { type: 'email', label: 'fredyhandymanremodeling@gmail.com', href: 'mailto:fredyhandymanremodeling@gmail.com' },
      { type: 'instagram', label: 'fredyhr.llc', href: 'https://www.instagram.com/fredyhr.llc/?hl=en' },
    ],
    site: 'https://www.instagram.com/fredyhr.llc/',
  },
  {
    category: 'Insurance',
    name: 'Jahan Green · RightAway Insurance',
    image: 'https://public.readdy.ai/ai/img_res/edited_29ac3aa8a96c5fc943e9b5f4c4805e82_7b2a4deb.jpg',
    contacts: [
      { type: 'phone', label: '888-643-2161', href: 'tel:8886432161' },
      { type: 'email', label: 'Info@rightawayinsurance.com', href: 'mailto:Info@rightawayinsurance.com' },
      { type: 'website', label: 'rightawayinsurance.com', href: 'https://www.rightawayinsurance.com/' },
    ],
    site: 'https://www.rightawayinsurance.com/',
  },
  {
    category: 'Cleaning Service',
    name: 'The Clean Agenda · House Cleaning Service',
    image: 'https://public.readdy.ai/ai/img_res/edited_d8ca6a474b17c3170af36a62c73fe56e_f7658f1a.jpg',
    contacts: [
      { type: 'phone', label: '202.991.1691', href: 'tel:2029911691' },
      { type: 'email', label: 'Team@thecleanagenda.com', href: 'mailto:Team@thecleanagenda.com' },
      { type: 'website', label: 'thecleanagenda.com', href: 'https://thecleanagenda.com/' },
    ],
    site: 'https://thecleanagenda.com/',
  },
  {
    category: 'Lender',
    name: 'Shannon Leydig · Vellum Mortgage',
    image: 'https://public.readdy.ai/ai/img_res/edited_9b159345eb4c76e616979f77a77335e0_f7658f1a.jpg',
    contacts: [
      { type: 'phone', label: '571.830.2814', href: 'tel:5718302814' },
      { type: 'email', label: 'sleydig@vellummortgage.com', href: 'mailto:sleydig@vellummortgage.com' },
      { type: 'website', label: 'shannonleydig.vellum-pos.com', href: 'https://shannonleydig.vellum-pos.com/' },
    ],
    site: 'https://shannonleydig.vellum-pos.com/',
  },
];

export const communityCopy = {
  eyebrow: 'Local Favorites',
  title: 'Trusted Community Businesses',
};

export const communityBusinesses: FeaturedPartner[] = [
  {
    category: 'Spa — Self Care',
    name: 'Buddies Spa · Barber, Massage, Pedicure, Manicure, Waxing',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/Buddies-Resizedpng-preview.png',
    contacts: [
      { type: 'phone', label: '202.926.7178', href: 'tel:2029267178' },
      {
        type: 'address',
        label: '317 H St NW, Washington, DC 20001',
        href: 'https://www.google.com/maps/search/?api=1&query=317+H+St+NW,+Washington,+DC+20001',
      },
      { type: 'website', label: 'buddiesspa.com', href: 'https://www.buddiesspa.com/' },
    ],
    site: 'https://www.buddiesspa.com/',
  },
];

export interface DirectoryEntry {
  category: string;
  name: string;
  contacts: PartnerContact[];
}

export const directoryCopy = {
  eyebrow: 'Recommended by Brandon',
  title: 'The Full Partner Directory',
  text: 'A trusted bench of inspectors, lenders, contractors and trades — vetted for the quality and communication our clients expect. Filter by category to find the right professional for your project.',
  cta: 'Become a partner',
  ctaHref: '/get-in-touch',
};

/**
 * The directory is DERIVED from the partner lists above rather than being its
 * own list.
 *
 * What was here before was a 39-entry list carried over from a template: the
 * numbers were Massachusetts area codes (617, 508, 774) on a DC/Maryland/
 * Virginia brokerage, one person appeared twice under two different trades,
 * and two unrelated firms shared a phone number. Publishing contact details
 * that wrong for named, real businesses is worse than publishing none, so the
 * directory now draws on the partners Brandon actually works with. The old
 * list is in git history if any of it turns out to be genuine.
 *
 * Deriving it also means the directory can never drift out of step with the
 * cards above it - there is one list, shown two ways.
 */
export const directoryEntries: DirectoryEntry[] = [...featuredPartners, ...communityBusinesses].map(
  ({ category, name, contacts }) => ({ category, name, contacts }),
);

export const partnersTestimonialCopy = {
  eyebrow: 'What Clients Are Saying',
  title: 'Our Client Testimonials',
  text: 'Real stories from buyers and sellers who trusted me with one of the biggest decisions of their lives.',
};

export const partnersInstagramCopy = {
  eyebrow: '@bwmetroproperties',
  title: 'Follow us on Instagram',
};