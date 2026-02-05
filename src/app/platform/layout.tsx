import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '매체 제휴',
  description: '인포플래닛 에덴(ADEN) 매체 제휴 프로그램. 오퍼월 솔루션으로 수익을 극대화하고 사용자 리텐션을 높이는 CPA 기반 파트너십 플랫폼.',
  keywords: '에덴, ADEN, 인포플래닛, 매체 제휴, 오퍼월, 리워드 광고, CPA 플랫폼, 수익화, 광고 파트너십',
  openGraph: {
    title: '에덴(ADEN) - 인포플래닛 매체 제휴',
    description: '인포플래닛 에덴(ADEN) 매체 제휴 프로그램. 오퍼월 솔루션으로 수익을 극대화하고 사용자 리텐션을 높이는 CPA 기반 파트너십 플랫폼.',
    url: 'https://aden.ai.kr/platform',
  },
  alternates: {
    canonical: 'https://aden.ai.kr/platform',
  },
}

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
