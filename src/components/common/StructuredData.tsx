export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '인포플래닛',
    alternateName: '에덴',
    url: 'https://aden.ai.kr',
    logo: 'https://aden.ai.kr/images/logo.svg',
    description: '인포플래닛의 에덴(ADEN)은 CPA 기반 퍼포먼스 마케팅 플랫폼입니다.',
    sameAs: [
      // 소셜 미디어 링크가 있다면 추가
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: 'Korean',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '에덴(ADEN) - 인포플래닛',
    url: 'https://aden.ai.kr',
    description: '인포플래닛의 에덴(ADEN)은 CPA 기반 퍼포먼스 마케팅 플랫폼입니다.',
    publisher: {
      '@type': 'Organization',
      name: '인포플래닛',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: '에덴(ADEN) 마케팅 플랫폼',
    provider: {
      '@type': 'Organization',
      name: '인포플래닛',
    },
    serviceType: 'CPA 퍼포먼스 마케팅',
    description: 'N사 쇼핑·플레이스 순위 상승을 위한 CPA 기반 랭킹 부스팅 광고 서비스',
    areaServed: {
      '@type': 'Country',
      name: 'KR',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
