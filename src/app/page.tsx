import HomePage from './HomePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPA 랭킹 부스팅형 광고 | ADEN 마케팅 플랫폼',
  description: 'SMB부터 대형 브랜드까지 N사 쇼핑·플레이스 순위에 직접 영향을 주는 CPA 광고. 독자적 서비스 개발, 매체 지정 가능, 24시간 정산으로 성과를 증명하는 ADEN 마케팅 솔루션.',
  keywords: 'CPA 광고, N사 쇼핑 순위, 플레이스 순위, SMB 마케팅, 부스팅 광고, 퍼포먼스 마케팅, ADEN, 랭킹 상승',
  openGraph: {
    title: 'CPA 랭킹 부스팅형 광고 | ADEN 마케팅 플랫폼',
    description: 'SMB부터 대형 브랜드까지 N사 쇼핑·플레이스 순위에 직접 영향을 주는 CPA 광고. 독자적 서비스 개발, 매체 지정 가능, 24시간 정산으로 성과를 증명하는 ADEN 마케팅 솔루션.',
  }
}

export default function Page() {
  return <HomePage />
}
