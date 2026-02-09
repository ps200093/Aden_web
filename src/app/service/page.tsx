import { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServiceHeroSection from '@/app/service/ServiceHeroSection';
import IntroSection from '@/app/service/IntroSection';
import ArchitectureSection from '@/app/service/ArchitectureSection';
import ReasonSection from '@/app/service/ReasonSection';
import PartnersSection from '@/app/service/PartnersSection';
import FooterSection from '@/components/common/FooterSection';
import FloatingContact from '@/components/common/FloatingContact';

export const metadata: Metadata = {
  title: '서비스 소개',
  description: '인포플래닛 에덴(ADEN) 서비스는 AI 기반 광고 최적화와 실시간 성과 분석으로 SMB 마케팅을 지원합니다. 투명한 CPA 과금 체계와 전문 컨설팅을 제공합니다.',
  keywords: '에덴, ADEN, 인포플래닛, 마케팅 서비스, SMB 마케팅, AI 광고 최적화, CPA 과금, 성과 분석, 광고 컨설팅, 퍼포먼스 마케팅',
  openGraph: {
    title: '에덴(ADEN) - 인포플래닛 서비스 소개',
    description: '인포플래닛 에덴(ADEN) 서비스는 AI 기반 광고 최적화와 실시간 성과 분석으로 SMB 마케팅을 지원합니다.',
    url: 'https://aden.ai.kr/service',
  },
  alternates: {
    canonical: 'https://aden.ai.kr/service',
  },
}

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
      <FloatingContact />
    </>
  )
}

