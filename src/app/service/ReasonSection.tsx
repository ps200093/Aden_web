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
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '28px',
                color: '#4B5563'
              }}
            >
              기존 오퍼월은 광고의 '양'에 집중했습니다.<br className="md:hidden" /> Aden은 광고의 <span style={{ color: '#2563EB', fontWeight: 700 }}>'의미'</span>에 집중합니다.
            </p>
          </div>

          {/* 비교 컨텐츠 */}
          <div id="reason-comparison" className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_2.5fr_0.5fr_2.5fr_0.1fr] gap-8 lg:gap-1">
            {/* 빈칸 1 - 데스크탑에서만 표시 */}
            <div className="hidden lg:block w-full"></div>
            
            {/* 기존 구조의 문제점 */}
            <div className="w-full">
              {/* 제목 */}
              <h3 
                className={`mb-4 sm:mb-6 text-center lg:text-left transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(18px, 2.5vw, 24px)',
                  lineHeight: '32px',
                  color: '#111827'
                }}
              >
                기존 구조의 문제점
              </h3>

              {/* 문제점 리스트 */}
              <div className="space-y-3 sm:space-y-4">
                {/* 문제점 1 */}
                <div className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: '#FEE2E2',
                      borderRadius: '9999px'
                    }}
                  >
                    <X size={14} color="#C33131" strokeWidth={3} className="sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '24px', color: '#111827' }}>
                      광고판처럼 보이는 UX
                    </p>
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(13px, 1.8vw, 16px)', lineHeight: '24px', color: '#4B5563' }}>
                      사용자 경험을 저해하여 유저 이탈 유발
                    </p>
                  </div>
                </div>

                {/* 문제점 2 */}
                <div className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: '#FEE2E2',
                      borderRadius: '9999px'
                    }}
                  >
                    <X size={14} color="#C33131" strokeWidth={3} className="sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '24px', color: '#111827' }}>
                      다단계 마진
                    </p>
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(13px, 1.8vw, 16px)', lineHeight: '24px', color: '#4B5563' }}>
                      복잡한 유통 구조로 인해 매체 정산 금액 감소
                    </p>
                  </div>
                </div>

                {/* 문제점 3 */}
                <div className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: '#FEE2E2',
                      borderRadius: '9999px'
                    }}
                  >
                    <X size={14} color="#C33131" strokeWidth={3} className="sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '24px', color: '#111827' }}>
                      대형매체 우선 공급
                    </p>
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(13px, 1.8vw, 16px)', lineHeight: '24px', color: '#4B5563' }}>
                      신규 및 중소형 매체는 양질의 광고 인벤토리 확보 어려움
                    </p>
                  </div>
                </div>

                {/* 문제점 4 */}
                <div className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 delay-[400ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: '#FEE2E2',
                      borderRadius: '9999px'
                    }}
                  >
                    <X size={14} color="#C33131" strokeWidth={3} className="sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '24px', color: '#111827' }}>
                      불투명한 차감
                    </p>
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(13px, 1.8vw, 16px)', lineHeight: '24px', color: '#4B5563' }}>
                      정산 과정의 불투명성으로 인해 매체와의 신뢰 문제 발생
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 빈칸 4 - 데스크탑에서만 표시 */}
            <div className="hidden lg:block w-full"></div>

            {/* ADEN의 해법 */}
            <div className="w-full">
              {/* 제목 */}
              <h3 
                className={`mb-4 sm:mb-6 text-center lg:text-left transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(18px, 2.5vw, 24px)',
                  lineHeight: '32px',
                  color: '#059669'
                }}
              >
                ADEN의 해법
              </h3>

              {/* 해법 리스트 */}
              <div className="space-y-3 sm:space-y-4">
                {/* 해법 1 */}
                <div className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: '#D1FAE5',
                      borderRadius: '9999px'
                    }}
                  >
                    <Check size={14} color="#059669" strokeWidth={2.5} className="sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '24px', color: '#111827' }}>
                      매체 UI 그대로 적용
                    </p>
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(13px, 1.8vw, 16px)', lineHeight: '24px', color: '#4B5563' }}>
                      매체의 기존 UI를 최대한 활용하여<br className="md:hidden" /> 자연스럽게 통합된 UI 제공
                    </p>
                  </div>
                </div>

                {/* 해법 2 */}
                <div className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: '#D1FAE5',
                      borderRadius: '9999px'
                    }}
                  >
                    <Check size={14} color="#059669" strokeWidth={2.5} className="sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '24px', color: '#111827' }}>
                      매체 최우선 Rev-Share
                    </p>
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(13px, 1.8vw, 16px)', lineHeight: '24px', color: '#4B5563' }}>
                      매체 중심의 수익 배분 구조로 정산 금액 최대화
                    </p>
                  </div>
                </div>

                {/* 해법 3 */}
                <div className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: '#D1FAE5',
                      borderRadius: '9999px'
                    }}
                  >
                    <Check size={14} color="#059669" strokeWidth={2.5} className="sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '24px', color: '#111827' }}>
                      균형 있는 인벤토리 공급
                    </p>
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(13px, 1.8vw, 16px)', lineHeight: '24px', color: '#4B5563' }}>
                      일일 5백만 타 균형 공급으로 모든 매체에게 기회 제공
                    </p>
                  </div>
                </div>

                {/* 해법 4 */}
                <div className={`flex items-start gap-3 sm:gap-4 transition-all duration-500 delay-[400ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div 
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: '28px',
                      height: '28px',
                      background: '#D1FAE5',
                      borderRadius: '9999px'
                    }}
                  >
                    <Check size={14} color="#059669" strokeWidth={2.5} className="sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(14px, 2vw, 16px)', lineHeight: '24px', color: '#111827' }}>
                      정산 로그 & 증빙 공개
                    </p>
                    <p className="break-words" style={{ fontWeight: 500, fontSize: 'clamp(13px, 1.8vw, 16px)', lineHeight: '24px', color: '#4B5563' }}>
                      투명한 정산 시스템으로 매체의 신뢰 구축
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 빈칸 7 - 데스크탑에서만 표시 */}
            <div className="hidden lg:block w-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}