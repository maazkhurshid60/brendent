'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import ResourcesHero from '@/views/resources/components/ResourcesHero';
import SectionNav, { type NavSection } from '@/views/resources/components/SectionNav';
import JourneyPaths from '@/views/resources/components/JourneyPaths';
import GuidesChecklists from '@/views/resources/components/GuidesChecklists';
import CondoEducation from '@/views/resources/components/CondoEducation';
import ResourcePathSection from '@/views/resources/components/ResourcePathSection';
import BookBand from '@/views/resources/components/BookBand';
import Insights from '@/views/resources/components/Insights';
import FaqSection from '@/views/resources/components/FaqSection';
import InvestSection from '@/views/resources/components/InvestSection';
import PartnersIntro from '@/views/partners/components/PartnersIntro';
import FeaturedPartners from '@/views/partners/components/FeaturedPartners';
import CommunityBusinesses from '@/views/partners/components/CommunityBusinesses';
import PartnersDirectory from '@/views/partners/components/PartnersDirectory';
import PartnersTestimonials from '@/views/partners/components/PartnersTestimonials';
import { bookBands, buyerResources, sellerResources } from '@/mocks/resourcesData';

/**
 * Resources and Partners, merged into one page at the client's request.
 *
 * The order is the order of the decision, not of the two old pages: learn what
 * the move involves, then meet the people who carry it out. So the partner
 * network sits after the guides and the FAQ, and the single closing call to
 * action serves both halves rather than each keeping its own.
 *
 * Two things had to change to make one page out of two:
 *
 * - The section numbers. Both pages counted their own sections from 01, so
 *   stacked as they were the eyebrows would have run 01-06 and then 01-06
 *   again. The partner sections now take their number as a prop and continue
 *   from 07.
 *
 * - Navigability. This document is roughly twice the height of either original,
 *   which would bury the partner directory near the bottom, so a sticky jump
 *   bar sits under the header. It is a plain anchor list, so the page stays a
 *   single URL that Google reads whole and find-in-page still searches.
 *
 * The Instagram strip from the old Partners page is left off. It closed that
 * page, and here it would sit in the middle of the document interrupting the
 * run toward the contact form; the same strip still runs on the Partners page
 * and the home page.
 */

const SECTIONS: NavSection[] = [
  { id: 'start', label: 'Start here' },
  { id: 'guides', label: 'Guides' },
  { id: 'condo-basics', label: 'Condos' },
  { id: 'buying', label: 'Buying' },
  { id: 'selling', label: 'Selling' },
  { id: 'intro', label: 'FAQ' },
  { id: 'network', label: 'Partners' },
  { id: 'directory', label: 'Directory' },
];

export default function Resources() {
  useReveal();

  const [buyGuide, homeLoan] = bookBands;

  return (
    <div className="resources-combined min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <ResourcesHero />
        <SectionNav sections={SECTIONS} />

        {/* ------------------------- resources ------------------------- */}
        <JourneyPaths />
        <GuidesChecklists />
        <CondoEducation />

        <ResourcePathSection
          id={buyerResources.id}
          eyebrow={buyerResources.eyebrow}
          titleLead={buyerResources.titleLead}
          titleAccent={buyerResources.titleAccent}
          text={buyerResources.text}
          cta={buyerResources.cta}
          ctaHref={buyerResources.ctaHref}
          tone="muted"
        />

        <BookBand
          id={buyGuide.id}
          eyebrow={buyGuide.eyebrow}
          titleLead={buyGuide.titleLead}
          titleAccent={buyGuide.titleAccent}
          text={buyGuide.text}
          cover={buyGuide.cover}
          bookTitle={buyGuide.bookTitle}
          tone="light"
        />

        <ResourcePathSection
          id={sellerResources.id}
          eyebrow={sellerResources.eyebrow}
          titleLead={sellerResources.titleLead}
          titleAccent={sellerResources.titleAccent}
          text={sellerResources.text}
          cta={sellerResources.cta}
          ctaHref={sellerResources.ctaHref}
          tone="muted"
        />

        <Insights />

        <BookBand
          id={homeLoan.id}
          eyebrow={homeLoan.eyebrow}
          titleLead={homeLoan.titleLead}
          titleAccent={homeLoan.titleAccent}
          text={homeLoan.text}
          cover={homeLoan.cover}
          bookTitle={homeLoan.bookTitle}
          tone="muted"
        />

        <FaqSection />
        <InvestSection />

        {/* -------------------------- partners -------------------------- */}
        <PartnersIntro sectionIndex="07" />
        <FeaturedPartners sectionIndex="08" />
        <CommunityBusinesses sectionIndex="09" />
        <PartnersDirectory sectionIndex="10" />
        <PartnersTestimonials sectionIndex="11" />

        {/* 12, continuing the count - CtaV2's own default is the home page's 13. */}
        <CtaV2 sectionIndex="12" />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}
