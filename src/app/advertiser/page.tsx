'use client';
import Header from '@/components/common/Header';
import HeroSection from '@/app/advertiser/HeroSection';
import SMBSection from '@/app/advertiser/SMBSection';
import StrengthsSection from '@/app/advertiser/StrengthsSection';
import TechnologySection from '@/app/advertiser/TechnologySection';
import CTASection from '@/app/advertiser/CTASection';
import FooterSection from '@/components/common/FooterSection';
import FloatingContact from '@/components/common/FloatingContact';

export default function AdvertiserPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SMBSection />
        <StrengthsSection />
        <TechnologySection />
        <CTASection />
      </main>
      <FooterSection />
      <FloatingContact />
    </>
  )
}

