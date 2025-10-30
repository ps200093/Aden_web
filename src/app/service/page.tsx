'use client';
import Header from '@/components/common/Header';
import ServiceHeroSection from '@/app/service/ServiceHeroSection';
import IntroSection from '@/app/service/IntroSection';
import ArchitectureSection from '@/app/service/ArchitectureSection';
import ReasonSection from '@/app/service/ReasonSection';
import PartnersSection from '@/app/service/PartnersSection';
import FooterSection from '@/components/common/FooterSection';

export default function ServicePage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHeroSection />
        <IntroSection />
        <ArchitectureSection />
        <ReasonSection />
        <PartnersSection />
      </main>
      <FooterSection />
    </>
  )
}

