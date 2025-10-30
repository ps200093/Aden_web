'use client';
import Header from '@/components/common/Header';
import FooterSection from '@/components/common/FooterSection';
import ServiceHeroSection from '@/app/service/ServiceHeroSection';
import IntroSection from '@/app/service/IntroSection';
import ArchitectureSection from '@/app/service/ArchitectureSection';
import ReasonSection from '@/app/service/ReasonSection';
import PartnersSection from '@/app/service/PartnersSection';

export default function HomePage() {
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

