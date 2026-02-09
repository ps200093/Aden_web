import { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from '@/app/advertiser/HeroSection';
import SMBSection from '@/app/advertiser/SMBSection';
import StrengthsSection from '@/app/advertiser/StrengthsSection';
import TechnologySection from '@/app/advertiser/TechnologySection';
import CTASection from '@/app/advertiser/CTASection';
import FooterSection from '@/components/common/FooterSection';
import FloatingContact from '@/components/common/FloatingContact';

export const metadata: Metadata = {
  title: '광고주 솔루션',
  description: '인포플래닛 에덴(ADEN) 광고주 솔루션은 소상공인과 중소기업을 위한 맞춤형 마케팅을 제공합니다. N사 쇼핑·플레이스 랭킹 부스팅으로 매출 증대를 실현하세요.',
  keywords: '에덴, ADEN, 인포플래닛, 광고주 솔루션, SMB 광고, 소상공인 마케팅, 중소기업 광고, N사 쇼핑 광고, 플레이스 광고, 랭킹 부스팅',
  openGraph: {
    title: '에덴(ADEN) - 인포플래닛 광고주 솔루션',
    description: '인포플래닛 에덴(ADEN) 광고주 솔루션은 소상공인과 중소기업을 위한 맞춤형 마케팅을 제공합니다.',
    url: 'https://aden.ai.kr/advertiser',
  },
  alternates: {
    canonical: 'https://aden.ai.kr/advertiser',
  },
}

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

