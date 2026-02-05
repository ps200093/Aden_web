import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '광고주 솔루션',
  description: '인포플래닛 에덴(ADEN)의 광고주 맞춤 마케팅 솔루션. SMB 사업자를 위한 CPA 기반 N사 쇼핑·플레이스 광고로 실질적인 매출 증대를 경험하세요.',
  keywords: '에덴, ADEN, 인포플래닛, 광고주, SMB 마케팅, 쇼핑몰 광고, 플레이스 광고, CPA 광고, 중소상공인, 자영업자',
  openGraph: {
    title: '에덴(ADEN) - 인포플래닛 광고주 솔루션',
    description: '인포플래닛 에덴(ADEN)의 광고주 맞춤 마케팅 솔루션. SMB 사업자를 위한 CPA 기반 N사 쇼핑·플레이스 광고로 실질적인 매출 증대를 경험하세요.',
    url: 'https://aden.ai.kr/advertiser',
  },
  alternates: {
    canonical: 'https://aden.ai.kr/advertiser',
  },
}

export default function AdvertiserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
