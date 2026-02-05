import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '문의하기',
  description: '인포플래닛 에덴(ADEN) 문의 및 상담 신청. 광고주·매체 제휴 문의, 마케팅 상담을 통해 맞춤형 CPA 솔루션을 제안받으세요.',
  keywords: '에덴, ADEN, 인포플래닛, 문의, 상담, 광고 문의, 제휴 문의, 마케팅 상담',
  openGraph: {
    title: '에덴(ADEN) - 인포플래닛 문의하기',
    description: '인포플래닛 에덴(ADEN) 문의 및 상담 신청. 광고주·매체 제휴 문의, 마케팅 상담을 통해 맞춤형 CPA 솔루션을 제안받으세요.',
    url: 'https://aden.ai.kr/contact',
  },
  alternates: {
    canonical: 'https://aden.ai.kr/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
