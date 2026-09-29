'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import HeroV2 from '@/views/home-v2/components/HeroV2';
import AboutV2 from '@/views/home-v2/components/AboutV2';
import WhyV2 from '@/views/home-v2/components/WhyV2';
import ServicesV2 from '@/views/home-v2/components/ServicesV2';
import IntroFilmV2 from '@/views/home-v2/components/IntroFilmV2';
import ListingsV2 from '@/views/home-v2/components/ListingsV2';
import ValuationV2 from '@/views/home-v2/components/ValuationV2';
import CommunitiesV2 from '@/views/home-v2/components/CommunitiesV2';
import ServiceTabsV2 from '@/views/home-v2/components/ServiceTabsV2';
import StartV2 from '@/views/home-v2/components/StartV2';
import ProcessV2 from '@/views/home-v2/components/ProcessV2';
import AreasV2 from '@/views/home-v2/components/AreasV2';
import PartnersV2 from '@/views/home-v2/components/PartnersV2';
import TestimonialsV2 from '@/views/home-v2/components/TestimonialsV2';
import InstagramV2 from '@/views/home-v2/components/InstagramV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';

export default function HomeV2() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 />
      <main>
        <HeroV2 />
        <ServicesV2 />
        <IntroFilmV2 />
        <AboutV2 />
        <WhyV2 />
        <ListingsV2 />
        <ValuationV2 />
        <CommunitiesV2 />
        <ServiceTabsV2 />
        <StartV2 />
        <ProcessV2 />
        <AreasV2 />
        <PartnersV2 />
        <TestimonialsV2 />
        <InstagramV2 />
        <CtaV2 />
      </main>
      <FooterV2 />
    </div>
  );
}