'use client';
import { useState, useEffect } from 'react';

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [revisitRate, setRevisitRate] = useState(0);
  const [participationCount, setParticipationCount] = useState(0);

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
      { threshold: 0.3 }
    );

    const section = document.getElementById('intro-stats-cards');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isVisible]);

  // 숫자 카운트업 애니메이션
  useEffect(() => {
    if (!isVisible) return;

    // 300만 카운트업
    const userTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setUserCount((prev) => {
          if (prev >= 500) {
            clearInterval(interval);
            return 500;
          }
          return prev + 12;
        });
      }, 20);
      return () => clearInterval(interval);
    }, 200);

    // 72% 카운트업
    const rateTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setRevisitRate((prev) => {
          if (prev >= 72) {
            clearInterval(interval);
            return 72;
          }
          return prev + 3;
        });
      }, 20);
      return () => clearInterval(interval);
    }, 400);

    // 9회 카운트업
    const participationTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setParticipationCount((prev) => {
          if (prev >= 8) {
            clearInterval(interval);
            return 8;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }, 600);

    return () => {
      clearTimeout(userTimer);
      clearTimeout(rateTimer);
      clearTimeout(participationTimer);
    };
  }, [isVisible]);

  return (
    <section className="w-full bg-background overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px] sm:py-[60px] md:py-[80px]">
          <div className="relative w-full max-w-[1280px] mx-auto">
            {/* Header */}
            <div className="w-full mb-[48px] sm:mb-[56px] lg:mb-[64px]">
              {/* 제목 */}
              <h2 
                className="w-full text-center mb-[12px] sm:mb-[14px] lg:mb-[16px]"
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  lineHeight: '1.4',
                  color: '#111827'
                }}
              >
                데이터 기반 광고 네트워크
              </h2>
              
              {/* 설명 */}
              <p 
                className="w-full text-center px-4"
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(16px, 2vw, 24px)',
                  lineHeight: '1.6',
                  color: '#4B5563'
                }}
              >
                Aden은 유저의 특성에 맞춘 개인화된 미션을 통해 브랜드와 소비자를 연결하는 리워드 광고 네트워크입니다.
              </p>
            </div>

            {/* 통계 카드 섹션 */}
            <div id="intro-stats-cards" className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* 카드 1: 300만 유저 */}
              <div 
                className="w-full min-h-[220px] sm:min-h-[240px] lg:h-[244px] rounded-[12px] sm:rounded-[16px] flex flex-col items-center justify-between py-[24px] sm:py-[28px] lg:py-[32px] px-[24px] sm:px-[28px] lg:px-[32px]"
                style={{
                  background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 70.71%)'
                }}
              >
                {/* 원형 차트 아이콘 */}
                <div className="w-[80px] h-[80px] sm:w-[88px] sm:h-[88px] lg:w-[96px] lg:h-[96px]">
                  <svg className="w-full h-full" viewBox="0 0 96 96">
                    {/* 배경 원 */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="6.4"
                    />
                    {/* 진행 원 (300만 표현) */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="6.4"
                      strokeDasharray="281.6"
                      strokeDashoffset={isVisible ? "70.4" : "281.6"}
                      transform="rotate(-90 48 48)"
                      style={{
                        transition: 'stroke-dashoffset 1.5s ease-out 0.2s'
                      }}
                    />
                    {/* 텍스트 */}
                    <text
                      x="48"
                      y="56"
                      textAnchor="middle"
                      style={{
                        fontWeight: 500,
                        fontSize: 'clamp(20px, 4vw, 24px)',
                        fill: '#059669'
                      }}
                    >
                      {userCount}만
                    </text>
                  </svg>
                </div>
                
                <div className="flex flex-col gap-1 sm:gap-2 text-center">
                  {/* 제목 */}
                  <p
                    className="text-[18px] sm:text-[19px] lg:text-[20px]"
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '28px',
                      color: '#111827'
                    }}
                  >
                    일 평균 유입 유저
                  </p>
                  
                  {/* 설명 */}
                  <p
                    className="text-[16px] sm:text-[18px] lg:text-[20px]"
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '24px',
                      color: '#4B5563'
                    }}
                  >
                    매일 500만명의 활성 유저
                  </p>
                </div>
              </div>

              {/* 카드 2: 72% 재방문율 */}
              <div 
                className="w-full min-h-[220px] sm:min-h-[240px] lg:h-[244px] rounded-[12px] sm:rounded-[16px] flex flex-col items-center justify-between py-[24px] sm:py-[28px] lg:py-[32px] px-[24px] sm:px-[28px] lg:px-[32px]"
                style={{
                  background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 70.71%)'
                }}
              >
                {/* 원형 차트 아이콘 */}
                <div className="w-[80px] h-[80px] sm:w-[88px] sm:h-[88px] lg:w-[96px] lg:h-[96px]">
                  <svg className="w-full h-full" viewBox="0 0 96 96">
                    {/* 배경 원 */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="6.4"
                    />
                    {/* 진행 원 (72%) */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="6.4"
                      strokeDasharray="281.6"
                      strokeDashoffset={isVisible ? "78.85" : "281.6"}
                      transform="rotate(-90 48 48)"
                      style={{
                        transition: 'stroke-dashoffset 1.5s ease-out 0.4s'
                      }}
                    />
                    {/* 텍스트 */}
                    <text
                      x="48"
                      y="56"
                      textAnchor="middle"
                      style={{
                        fontWeight: 500,
                        fontSize: 'clamp(20px, 4vw, 24px)',
                        fill: '#2563EB'
                      }}
                    >
                      {revisitRate}%
                    </text>
                  </svg>
                </div>
                
                <div className="flex flex-col gap-1 sm:gap-2 text-center">
                  {/* 제목 */}
                  <p
                    className="text-[18px] sm:text-[19px] lg:text-[20px]"
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '28px',
                      color: '#111827'
                    }}
                  >
                    리워드 유저 재방문율
                  </p>
                  
                  {/* 설명 */}
                  <p
                    className="text-[16px] sm:text-[18px] lg:text-[20px]"
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '24px',
                      color: '#4B5563'
                    }}
                  >
                    높은 유저 유지율
                  </p>
                </div>
              </div>

              {/* 카드 3: 8회 참여 */}
              <div 
                className="w-full min-h-[220px] sm:min-h-[240px] lg:h-[244px] rounded-[12px] sm:rounded-[16px] flex flex-col items-center justify-between py-[24px] sm:py-[28px] lg:py-[32px] px-[24px] sm:px-[28px] lg:px-[32px] sm:col-span-2 lg:col-span-1"
                style={{
                  background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 70.71%)'
                }}
              >
                {/* 원형 차트 아이콘 */}
                <div className="w-[80px] h-[80px] sm:w-[88px] sm:h-[88px] lg:w-[96px] lg:h-[96px]">
                  <svg className="w-full h-full" viewBox="0 0 96 96">
                    {/* 배경 원 */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="6.4"
                    />
                    {/* 진행 원 (8회) */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="6.4"
                      strokeDasharray="281.6"
                      strokeDashoffset={isVisible ? "140.8" : "281.6"}
                      transform="rotate(-90 48 48)"
                      style={{
                        transition: 'stroke-dashoffset 1.5s ease-out 0.6s'
                      }}
                    />
                    {/* 텍스트 */}
                    <text
                      x="48"
                      y="56"
                      textAnchor="middle"
                      style={{
                        fontWeight: 500,
                        fontSize: 'clamp(20px, 4vw, 24px)',
                        fill: '#9333EA'
                      }}
                    >
                      {participationCount}회
                    </text>
                  </svg>
                </div>
                
                <div className="flex flex-col gap-1 sm:gap-2 text-center">
                  {/* 제목 */}
                  <p
                    className="text-[18px] sm:text-[19px] lg:text-[20px]"
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '28px',
                      color: '#111827'
                    }}
                  >
                    일 평균 유저 참여
                  </p>
                  
                  {/* 설명 */}
                  <p
                    className="text-[16px] sm:text-[18px] lg:text-[20px]"
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '24px',
                      color: '#4B5563'
                    }}
                  >
                    활발한 참여 생태계
                  </p>
                </div>
              </div>
            </div>

            {/* 인용문 섹션 */}
            <div className="w-full mt-[48px] sm:mt-[56px] lg:mt-[64px]">
              <p
                className="w-full text-center px-4"
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(18px, 2.5vw, 32px)',
                  lineHeight: '1.5',
                  color: '#4B5563'
                }}
              >
                "개인화된 미션으로 <span style={{ color: '#10B981' }}>광고의 피로</span>가 아닌 <span style={{ color: '#10B981' }}>새로운 재미</span>를 선사합니다"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}