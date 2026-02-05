import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '서비스 소개',
  description: '인포플래닛 에덴(ADEN) 서비스 소개. 10년 이상의 CPA 마케팅 노하우와 독자적 기술력으로 검증된 퍼포먼스 광고 플랫폼의 차별점을 확인하세요.',
  keywords: '에덴, ADEN, 인포플래닛, 서비스 소개, CPA 플랫폼, 마케팅 기술, 퍼포먼스 광고, 광고 인프라',
  openGraph: {
    title: '에덴(ADEN) - 인포플래닛 서비스 소개',
    description: '인포플래닛 에덴(ADEN) 서비스 소개. 10년 이상의 CPA 마케팅 노하우와 독자적 기술력으로 검증된 퍼포먼스 광고 플랫폼의 차별점을 확인하세요.',
    url: 'https://aden.ai.kr/service',
  },
  alternates: {
    canonical: 'https://aden.ai.kr/service',
  },
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
