'use client';
import { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

export default function ReasonSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer로 섹션이 화면에 보일 때 애니메이션 시작
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('reason-comparison');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isVisible]);

  return (
    <section className="w-full bg-white overflow-hidden py-[40px] sm:py-[60px] md:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="w-full mb-[64px]">
            {/* 제목 */}
            <h2 
              className="w-full text-center mb-[16px]"
              style={{
                fontFamily: 'Noto Sans KR',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                lineHeight: '40px',
                color: '#111827'
              }}
            >
              왜 ADEN인가?
            </h2>
            
            {/* 설명 */}
            <p 
              className="w-full text-center px-4"
              style={{
                fontFamily: 'Noto Sans KR',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '28px',
                color: '#4B5563'
              }}
            >
              기존 오퍼월은 광고의 '양'에 집중했습니다.<br className="md:hidden" /> 에덴은 광고의 '의미'에 집중합니다.
            </p>
          </div>

          {/* 비교 컨텐츠 */}
          <div id="reason-comparison" className="w-full grid grid-cols-1 lg:grid-cols-5 gap-1 lg:gap-1">
            {/* 빈칸 1 */}
            <div className="w-full"></div>
            
            {/* 빈칸 2 */}
            {/* <div className="w-full"></div> */}
            
            {/* 3열: 기존 구조의 문제점 */}
            <div className="w-full">
              {/* 제목 */}
              <h3 
                className={`mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{
                  fontFamily: 'Noto Sans KR',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  lineHeight: '32px',
                  color: '#111827'
                }}
              >
                기존 구조의 문제점
              </h3>

              {/* 문제점 리스트 */}
              <div className="space-y-4">
                {/* 문제점 1 */}
                <div className={`flex items-start gap-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#FEE2E2',
                      borderRadius: '9999px'
                    }}
                  >
                    <X size={16} color="#C33131" strokeWidth={3} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#111827', whiteSpace: 'nowrap' }}>
                      중간 마진과 정산 지연
                    </p>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#4B5563', whiteSpace: 'nowrap' }}>
                      매체의 실질 수익 저하
                    </p>
                  </div>
                </div>

                {/* 문제점 2 */}
                <div className={`flex items-start gap-4 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#FEE2E2',
                      borderRadius: '9999px'
                    }}
                  >
                    <X size={16} color="#C33131" strokeWidth={3} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#111827', whiteSpace: 'nowrap' }}>
                      리스트형 광고 도배
                    </p>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#4B5563', whiteSpace: 'nowrap' }}>
                      유저 피로도 상승, 참여율 하락
                    </p>
                  </div>
                </div>

                {/* 문제점 3 */}
                <div className={`flex items-start gap-4 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#FEE2E2',
                      borderRadius: '9999px'
                    }}
                  >
                    <X size={16} color="#C33131" strokeWidth={3} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#111827', whiteSpace: 'nowrap' }}>
                      인벤토리 편중
                    </p>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#4B5563', whiteSpace: 'nowrap' }}>
                      대형 매체 위주의 불균형 구조
                    </p>
                  </div>
                </div>

                {/* 문제점 4 */}
                <div className={`flex items-start gap-4 transition-all duration-500 delay-[400ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#FEE2E2',
                      borderRadius: '9999px'
                    }}
                  >
                    <X size={16} color="#C33131" strokeWidth={3} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#111827', whiteSpace: 'nowrap' }}>
                      정산 불투명성
                    </p>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#4B5563', whiteSpace: 'nowrap' }}>
                      랭킹상승형 미션의 모호한 분배
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 빈칸 4 */}
            <div className="w-full"></div>

            {/* 5열: EDEN의 해법 */}
            <div className="w-full">
              {/* 제목 */}
              <h3 
                className={`mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{
                  fontFamily: 'Noto Sans KR',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  lineHeight: '32px',
                  color: '#059669'
                }}
              >
                EDEN의 해법
              </h3>

              {/* 해법 리스트 */}
              <div className="space-y-4">
                {/* 해법 1 */}
                <div className={`flex items-start gap-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#D1FAE5',
                      borderRadius: '9999px'
                    }}
                  >
                    <Check size={16} color="#059669" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#111827', whiteSpace: 'nowrap' }}>
                      매체 우선 Rev-Share
                    </p>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#4B5563', whiteSpace: 'nowrap' }}>
                      Net-7/14, 투명한 정산표
                    </p>
                  </div>
                </div>

                {/* 해법 2 */}
                <div className={`flex items-start gap-4 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#D1FAE5',
                      borderRadius: '9999px'
                    }}
                  >
                    <Check size={16} color="#059669" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#111827', whiteSpace: 'nowrap' }}>
                      브랜드 맞춤형 UI
                    </p>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#4B5563', whiteSpace: 'nowrap' }}>
                      다양한 개인화된 미션
                    </p>
                  </div>
                </div>

                {/* 해법 3 */}
                <div className={`flex items-start gap-4 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#D1FAE5',
                      borderRadius: '9999px'
                    }}
                  >
                    <Check size={16} color="#059669" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#111827', whiteSpace: 'nowrap' }}>
                      균형 공급
                    </p>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#4B5563', whiteSpace: 'nowrap' }}>
                      일일 500만 타 분배로 모든 매체 균형 공급
                    </p>
                  </div>
                </div>

                {/* 해법 4 */}
                <div className={`flex items-start gap-4 transition-all duration-500 delay-[400ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#D1FAE5',
                      borderRadius: '9999px'
                    }}
                  >
                    <Check size={16} color="#059669" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#111827', whiteSpace: 'nowrap' }}>
                      완전 투명성
                    </p>
                    <p style={{ fontFamily: 'Noto Sans KR', fontWeight: 500, fontSize: '16px', lineHeight: '24px', color: '#4B5563', whiteSpace: 'nowrap' }}>
                      규칙ID/TS/패턴 공개 + SLA 대응
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 빈칸 6 */}
            {/* <div className="w-full"></div> */}

            {/* 빈칸 7 */}
            <div className="w-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}