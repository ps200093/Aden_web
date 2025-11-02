'use client';
import { useState, useEffect } from 'react';

export default function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('comparison-table');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  const comparisonData = [
    {
      category: '수익 구조',
      competitor: '대행사 경유, 중간 마진 높음',
      aden: '광고주 직접 공급·관리, 중간 마진 최소화',
      competitorColor: '#DC2626',
      adenColor: '#059669',
      bgColor: '#FFFFFF'
    },
    {
      category: 'UX/브랜딩',
      competitor: '오퍼월 고정 UI/UX → \'광고 페이지\' 인식',
      aden: '매체 톤 그대로 커스텀, 광고 같지 않은 UI/UX',
      competitorColor: '#DC2626',
      adenColor: '#059669',
      bgColor: '#F9FAFB'
    },
    {
      category: '정산 체계',
      competitor: '클릭·노출·앱유입형 등 혼합 과금/불공정계약',
      aden: 'CPA 기반 단일 과금, 투명한 분배표 제공',
      competitorColor: '#DC2626',
      adenColor: '#059669',
      bgColor: '#FFFFFF'
    },
    {
      category: '인벤토리',
      competitor: '대형 매체 우선 배분, 중형 매체 소외',
      aden: '일일 5백만 타 보유, DAU/MAU별 균등 배분',
      competitorColor: '#DC2626',
      adenColor: '#059669',
      bgColor: '#F9FAFB'
    },
    {
      category: '통합 난이도',
      competitor: 'SDK 필수, 앱 업데이트 필요',
      aden: 'SDK-less 2주 PoC, 경량SDK/웹앱 최적화 진행',
      competitorColor: '#DC2626',
      adenColor: '#059669',
      bgColor: '#FFFFFF'
    },
    {
      category: 'Fraud 관리',
      competitor: '어뷰징 차단 시스템 제한적',
      aden: 'AI 기반 패턴 탐지 + 로그 실시간 공개',
      competitorColor: '#DC2626',
      adenColor: '#059669',
      bgColor: '#F9FAFB'
    },
    {
      category: '데이터 가시성',
      competitor: '정산 보고서 중심',
      aden: '실시간 대시보드 + 차감 로그 ID 기반 제공',
      competitorColor: '#DC2626',
      adenColor: '#059669',
      bgColor: '#FFFFFF'
    }
  ];

  return (
    <section className="w-full bg-white py-[40px] sm:py-[60px] lg:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px]">
        <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[62px]">
          {/* Section Header */}
          <div className="text-center">
            <h2 
              className="text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[34px] sm:leading-[38px] lg:leading-[44px] mb-3"
              style={{ fontFamily: 'Noto Sans KR', color: '#111827' }}
            >
              왜 ADEN인가?
            </h2>
            <p 
              className="text-base sm:text-lg lg:text-xl font-medium leading-6"
              style={{ fontFamily: 'Noto Sans KR', color: '#6B7280' }}
            >
              기존 업계 대비 ADEN의 차별화된 장점
            </p>
          </div>

          {/* Comparison Table */}
          <div 
            id="comparison-table"
            className="mx-auto rounded-2xl overflow-hidden"
            style={{
              width: '100%',
              maxWidth: '1232px',
              background: '#FFFFFF',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)'
            }}
          >
            <table 
              className="w-full"
              style={{ 
                width: '100%'
              }}
            >
              {/* Table Header */}
              <thead>
                <tr 
                  style={{ 
                    height: '52px',
                    background: '#F9FAFB'
                  }}
                >
                  <th 
                    style={{ 
                      width: '18.2%',
                      height: '52px',
                      padding: '17px 0'
                    }}
                  >
                    <div 
                      className="text-base sm:text-lg lg:text-2xl font-medium leading-[19px] sm:leading-[22px] lg:leading-[29px] text-center"
                      style={{
                        fontFamily: 'Noto Sans KR',
                        color: '#111827'
                      }}
                    >
                      구분
                    </div>
                  </th>
                  <th 
                    style={{ 
                      width: '37.9%',
                      height: '52px',
                      padding: '17px 0'
                    }}
                  >
                    <div 
                      className="text-base sm:text-lg lg:text-2xl font-medium leading-[19px] sm:leading-[22px] lg:leading-[29px] text-center"
                      style={{
                        fontFamily: 'Noto Sans KR',
                        color: '#4B5563'
                      }}
                    >
                      기존 오퍼월
                    </div>
                  </th>
                  <th 
                    style={{ 
                      width: '43.9%',
                      height: '52px',
                      padding: '17px 0'
                    }}
                  >
                    <div 
                      className="text-base sm:text-lg lg:text-2xl font-medium leading-[19px] sm:leading-[22px] lg:leading-[29px] text-center"
                      style={{
                        fontFamily: 'Noto Sans KR',
                        color: '#059669'
                      }}
                    >
                      ADEN
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={index}
                    className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    style={{ 
                      height: '57px',
                      background: row.bgColor,
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <td 
                      style={{ 
                        width: '18.2%',
                        height: '57px',
                        padding: '18px 0'
                      }}
                    >
                      <div 
                        className="text-xs sm:text-sm lg:text-base font-medium leading-[14px] sm:leading-[17px] lg:leading-[19px] text-center"
                        style={{
                          fontFamily: 'Noto Sans KR',
                          color: '#111827'
                        }}
                      >
                        {row.category}
                      </div>
                    </td>
                    <td 
                      style={{ 
                        width: '37.9%',
                        height: '57px',
                        padding: '18px 4px'
                      }}
                    >
                      <div 
                        className="text-xs sm:text-sm lg:text-base font-medium leading-[14px] sm:leading-[17px] lg:leading-[19px] text-center"
                        style={{
                          fontFamily: 'Noto Sans KR',
                          color: row.competitorColor
                        }}
                      >
                        {row.competitor}
                      </div>
                    </td>
                    <td 
                      style={{ 
                        width: '43.9%',
                        height: '57px',
                        padding: '18px 4px'
                      }}
                    >
                      <div 
                        className="text-xs sm:text-sm lg:text-base font-medium leading-[14px] sm:leading-[17px] lg:leading-[19px] text-center"
                        style={{
                          fontFamily: 'Noto Sans KR',
                          color: row.adenColor
                        }}
                      >
                        {row.aden}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
  