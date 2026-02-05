import HomePage from './HomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPA 랭킹 부스팅형 광고',
  description: '인포플래닛 에덴(ADEN)의 CPA 기반 랭킹 부스팅 광고. N사 쇼핑·플레이스 순위에 직접 영향을 주는 퍼포먼스 마케팅 솔루션.',
  keywords: '에덴, ADEN, 인포플래닛, CPA 광고, N사 쇼핑 순위, 플레이스 순위, SMB 마케팅, 부스팅 광고, 퍼포먼스 마케팅, 랭킹 상승',
  openGraph: {
    title: '에덴(ADEN) - 인포플래닛 CPA 랭킹 부스팅형 광고',
    description: '인포플래닛 에덴(ADEN)의 CPA 기반 랭킹 부스팅 광고. N사 쇼핑·플레이스 순위에 직접 영향을 주는 퍼포먼스 마케팅 솔루션.',
    url: 'https://aden.ai.kr',
  },
  alternates: {
    canonical: 'https://aden.ai.kr',
  },
}

export default function Page() {
  return <HomePage />
}
