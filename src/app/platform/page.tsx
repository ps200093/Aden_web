import { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from '@/app/platform/HeroSection';
import DifferentiationSection from '@/app/platform/DifferentiationSection';
import PerformanceSection from '@/app/platform/PerformanceSection';
import ComparisonSection from '@/app/platform/ComparisonSection';
import PartnershipSection from '@/app/platform/PartnershipSection';
import CTASection from '@/app/platform/CTASection';
import FooterSection from '@/components/common/FooterSection';
import FloatingContact from '@/components/common/FloatingContact';

export const metadata: Metadata = {
  title: '플랫폼 소개',
  description: '인포플래닛 에덴(ADEN) 플랫폼은 CPA 기반 퍼포먼스 마케팅으로 N사 쇼핑·플레이스 순위를 효과적으로 상승시킵니다. 실시간 성과 측정과 데이터 기반 최적화를 제공합니다.',
  keywords: '에덴, ADEN, 인포플래닛, 마케팅 플랫폼, CPA 광고, 퍼포먼스 마케팅, N사 쇼핑 순위, 플레이스 순위, 랭킹 부스팅, 광고 플랫폼',
  openGraph: {
    title: '에덴(ADEN) - 인포플래닛 플랫폼 소개',
    description: '인포플래닛 에덴(ADEN) 플랫폼은 CPA 기반 퍼포먼스 마케팅으로 N사 쇼핑·플레이스 순위를 효과적으로 상승시킵니다.',
    url: 'https://aden.ai.kr/platform',
  },
  alternates: {
    canonical: 'https://aden.ai.kr/platform',
  },
}

export default function PlatformPage() {
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
      <FloatingContact />
    </>
  )
}
