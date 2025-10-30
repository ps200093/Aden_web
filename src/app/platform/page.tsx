'use client';
import Header from '@/components/common/Header';
import HeroSection from '@/app/platform/HeroSection';
import DifferentiationSection from '@/app/platform/DifferentiationSection';
import PerformanceSection from '@/app/platform/PerformanceSection';
import ComparisonSection from '@/app/platform/ComparisonSection';
import PartnershipSection from '@/app/platform/PartnershipSection';
import CTASection from '@/app/platform/CTASection';
import FooterSection from '@/components/common/FooterSection';

export default function AdvertiserPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DifferentiationSection />
        <PerformanceSection />
        <ComparisonSection />
        <PartnershipSection />
        <CTASection />
      </main>
      <FooterSection />
    </>
  )
}
