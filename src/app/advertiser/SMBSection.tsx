'use client';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { Store, Scissors, ShoppingBag } from 'lucide-react';

export default function SMBSection() {
  const [placeExposure, setPlaceExposure] = useState(0);
  const [shoppingSearch, setShoppingSearch] = useState(0);
  const [shoppingInflow, setShoppingInflow] = useState(0);
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
      { threshold: 0.3 }
    );

    const section = document.getElementById('smb-performance-card');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // 플레이스 노출 85%
    const placeTimer = setTimeout(() => {
      const placeInterval = setInterval(() => {
        setPlaceExposure((prev) => {
          if (prev >= 85) {
            clearInterval(placeInterval);
            return 85;
          }
          return prev + 2;
        });
      }, 20);
      return () => clearInterval(placeInterval);
    }, 200);

    // 쇼핑 검색 78%
    const searchTimer = setTimeout(() => {
      const searchInterval = setInterval(() => {
        setShoppingSearch((prev) => {
          if (prev >= 78) {
            clearInterval(searchInterval);
            return 78;
          }
          return prev + 2;
        });
      }, 20);
      return () => clearInterval(searchInterval);
    }, 400);

    // 쇼핑 유입 92%
    const inflowTimer = setTimeout(() => {
      const inflowInterval = setInterval(() => {
        setShoppingInflow((prev) => {
          if (prev >= 92) {
            clearInterval(inflowInterval);
            return 92;
          }
          return prev + 2;
        });
      }, 20);
      return () => clearInterval(inflowInterval);
    }, 600);

    return () => {
      clearTimeout(placeTimer);
      clearTimeout(searchTimer);
      clearTimeout(inflowTimer);
    };
  }, [isVisible]);

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ 
          paddingTop: 'clamp(40px, 6vw + 12px, 80px)',
          paddingBottom: 'clamp(40px, 6vw + 12px, 80px)'
        }}>
          {/* Header */}
          <div className="flex flex-col items-center text-center"
            style={{
              gap: 'clamp(10px, 1.5vw, 12px)',
              marginBottom: 'clamp(32px, 5vw + 8px, 64px)'
            }}
          >
            <h2 
              className="w-full font-medium text-center text-[#111827]"
              style={{ 
                fontStyle: 'normal',
                fontSize: 'clamp(26px, 2.5vw + 8px, 36px)',
                lineHeight: 'clamp(1.2, 1.2 + 0.05vw, 1.3)'
              }}
            >
              SMB를 위한<br className="sm:hidden" /> Fair Play Marketing
            </h2>
            <p 
              className="w-full max-w-[690px] font-medium text-center text-[#4B5563] px-4"
              style={{ 
                fontStyle: 'normal',
                fontSize: 'clamp(15px, 1.2vw + 6px, 20px)',
                lineHeight: 'clamp(1.5, 1.4 + 0.1vw, 1.6)'
              }}
            >
              순위가 곧 노출이자, 매출.<br/>
              ADEN은 광고주의 차별없이  모두가 참여할 수 있는<br className="hidden sm:block"/>
              순위 특화형 광고를 제공합니다.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-center"
            style={{
              gap: 'clamp(32px, 5vw, 48px)'
            }}
          >
            {/* Left Content - Service Cards */}
            <div className="flex flex-col items-center lg:items-start w-full max-w-[592px]"
              style={{
                gap: 'clamp(20px, 3vw, 24px)'
              }}
            >
              {/* Cafe & Restaurant */}
              <div className="w-full rounded-[10px] sm:rounded-[12px]" 
                style={{ 
                  background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 70.71%)',
                  padding: 'clamp(18px, 3vw, 24px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(12px, 2vw, 16px)'
                }}
              >
                <div className="flex items-center"
                  style={{ gap: 'clamp(10px, 1.5vw, 12px)' }}
                >
                  <Store className="flex-shrink-0" strokeWidth={3} color="#2563EB" 
                    style={{
                      width: 'clamp(24px, 3.5vw, 27px)',
                      height: 'clamp(28px, 4vw, 32px)'
                    }}
                  />
                  <h3   
                    className="font-medium text-[#111827]"
                    style={{ 
                      fontStyle: 'normal',
                      fontSize: 'clamp(18px, 1.8vw + 4px, 20px)',
                      lineHeight: 'clamp(1.3, 1.4 + 0.05vw, 1.45)'
                    }}
                  >
                    카페 & 음식점
                  </h3>
                </div>
                <p 
                  className="font-medium text-[#000000]"
                  style={{ 
                    fontStyle: 'normal',
                    fontSize: 'clamp(16px, 1.5vw + 4px, 20px)',
                    lineHeight: 'clamp(1.3, 1.2 + 0.1vw, 1.4)'
                  }}
                >
                  N사 플레이스 순위 상승으로 방문객 증가
                </p>
              </div>

              {/* Beauty & Salon */}
              <div className="w-full rounded-[10px] sm:rounded-[12px]" 
                style={{ 
                  background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 70.71%)',
                  padding: 'clamp(18px, 3vw, 24px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(12px, 2vw, 16px)'
                }}
              >
                <div className="flex items-center"
                  style={{ gap: 'clamp(10px, 1.5vw, 12px)' }}
                >
                  <Scissors 
                    className="flex-shrink-0" 
                    strokeWidth={3} 
                    color="#9333EA"
                    style={{
                      width: 'clamp(21px, 3vw, 24px)',
                      height: 'clamp(28px, 4vw, 32px)'
                    }}
                  />
                  <h3 
                    className="font-medium text-[#111827]"
                    style={{ 
                      fontStyle: 'normal',
                      fontSize: 'clamp(18px, 1.8vw + 4px, 20px)',
                      lineHeight: 'clamp(1.3, 1.4 + 0.05vw, 1.45)'
                    }}
                  >
                    미용실 & 뷰티샵
                  </h3>
                </div>
                <p 
                  className="font-medium text-[#000000]"
                  style={{ 
                    fontStyle: 'normal',
                    fontSize: 'clamp(16px, 1.5vw + 4px, 20px)',
                    lineHeight: 'clamp(1.3, 1.2 + 0.1vw, 1.4)'
                  }}
                >
                  지역 검색 노출 극대화로 신규 고객 유치
                </p>
              </div>

              {/* Shopping & Brand */}
              <div className="w-full rounded-[10px] sm:rounded-[12px]" 
                style={{ 
                  background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 70.71%)',
                  padding: 'clamp(18px, 3vw, 24px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(12px, 2vw, 16px)'
                }}
              >
                <div className="flex items-center"
                  style={{ gap: 'clamp(10px, 1.5vw, 12px)' }}
                >
                  <ShoppingBag 
                    className="flex-shrink-0" 
                    strokeWidth={3} 
                    color="#059669"
                    style={{
                      width: 'clamp(18px, 2.5vw, 20px)',
                      height: 'clamp(28px, 4vw, 32px)'
                    }}
                  />
                  <h3 
                    className="font-medium text-[#111827]"
                    style={{ 
                      fontStyle: 'normal',
                      fontSize: 'clamp(18px, 1.8vw + 4px, 20px)',
                      lineHeight: 'clamp(1.3, 1.4 + 0.05vw, 1.45)'
                    }}
                  >
                    쇼핑몰 & 브랜드
                  </h3>
                </div>
                <p 
                  className="font-medium text-[#000000]"
                  style={{ 
                    fontStyle: 'normal',
                    fontSize: 'clamp(16px, 1.5vw + 4px, 20px)',
                    lineHeight: 'clamp(1.3, 1.2 + 0.1vw, 1.4)'
                  }}
                >
                  N사 쇼핑 검색 순위 개선으로 매출 증대
                </p>
              </div>

              {/* Additional Text */}
              <div className="w-full flex justify-center"
                style={{
                  marginTop: 'clamp(-15px, -3vw, -25px)'
                }}
              >
                <div className="text-center text-[#169B68]" 
                  style={{ 
                    fontStyle: 'normal', 
                    lineHeight: 'clamp(1.3, 1.4 + 0.05vw, 1.45)'
                  }}
                >
                  <span className="font-black"
                    style={{
                      fontSize: 'clamp(32px, 5vw, 40px)'
                    }}
                  >
                    +
                  </span>
                  <br/>
                  <span className="font-medium"
                    style={{
                      fontSize: 'clamp(18px, 2vw + 4px, 24px)'
                    }}
                  >
                    매출 증대가 필요한 모든 브랜드를 대상
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Performance Card */}
            <div id="smb-performance-card" className="w-full max-w-[592px] flex-shrink-0"
              style={{
                marginTop: 'clamp(0px, 10vw, 72px)'
              }}
            >
              <div className="w-full bg-white rounded-xl sm:rounded-[16px] shadow-[0px_25px_50px_rgba(0,0,0,0.25)] animate-[fadeInUp_0.8s_ease-out]"
                style={{
                  padding: 'clamp(24px, 4vw, 32px)'
                }}
              >
                {/* Header */}
                <h3 
                  className="w-full font-medium text-center text-[#111827] animate-[fadeIn_0.6s_ease-out]"
                  style={{ 
                    fontStyle: 'normal',
                    fontSize: 'clamp(20px, 2.5vw + 4px, 24px)',
                    lineHeight: 'clamp(1.2, 1.21 + 0.05vw, 1.3)',
                    marginBottom: 'clamp(24px, 4vw, 32px)'
                  }}
                >
                  한정된 예산으로도
                </h3>

                {/* Stats Container */}
                <div className="w-full"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(20px, 3vw, 24px)',
                    marginBottom: 'clamp(20px, 3vw, 24px)'
                  }}
                >
                  {/* Place Exposure */}
                  <div className="flex items-center justify-between animate-[fadeIn_0.6s_ease-out_0.2s_both]"
                    style={{ gap: 'clamp(12px, 2vw, 16px)' }}
                  >
                    <span 
                      className="font-medium text-[#374151] whitespace-nowrap"
                      style={{ 
                        fontStyle: 'normal',
                        fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                        lineHeight: 'clamp(1.3, 1.5 + 0.05vw, 1.6)'
                      }}
                    >
                      플레이스 노출
                    </span>
                    <div className="flex items-center flex-1"
                      style={{
                        gap: 'clamp(6px, 1vw, 8px)',
                        maxWidth: 'clamp(180px, 25vw, 200px)'
                      }}
                    >
                      <div className="flex-1 bg-[#E5E7EB] rounded-[9999px] relative overflow-hidden"
                        style={{
                          height: 'clamp(6px, 1vw, 8px)'
                        }}
                      >
                        <div 
                          className="absolute left-0 top-0 bg-[#10B981] rounded-[9999px] transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${placeExposure}%`,
                            height: 'clamp(6px, 1vw, 8px)'
                          }}
                        ></div>
                      </div>
                      <span 
                        className="font-medium text-[#059669] whitespace-nowrap"
                        style={{ 
                          fontStyle: 'normal',
                          fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                          lineHeight: 'clamp(1.3, 1.5 + 0.05vw, 1.6)'
                        }}
                      >
                        {placeExposure}%
                      </span>
                    </div>
                  </div>

                  {/* Shopping Search */}
                  <div className="flex items-center justify-between animate-[fadeIn_0.6s_ease-out_0.4s_both]"
                    style={{ gap: 'clamp(12px, 2vw, 16px)' }}
                  >
                    <span 
                      className="font-medium text-[#374151] whitespace-nowrap"
                      style={{ 
                        fontStyle: 'normal',
                        fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                        lineHeight: 'clamp(1.3, 1.5 + 0.05vw, 1.6)'
                      }}
                    >
                      쇼핑 검색
                    </span>
                    <div className="flex items-center flex-1"
                      style={{
                        gap: 'clamp(6px, 1vw, 8px)',
                        maxWidth: 'clamp(180px, 25vw, 200px)'
                      }}
                    >
                      <div className="flex-1 bg-[#E5E7EB] rounded-[9999px] relative overflow-hidden"
                        style={{
                          height: 'clamp(6px, 1vw, 8px)'
                        }}
                      >
                        <div 
                          className="absolute left-0 top-0 bg-[#3B82F6] rounded-[9999px] transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${shoppingSearch}%`,
                            height: 'clamp(6px, 1vw, 8px)'
                          }}
                        ></div>
                      </div>
                      <span 
                        className="font-medium text-[#2563EB] whitespace-nowrap"
                        style={{ 
                          fontStyle: 'normal',
                          fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                          lineHeight: 'clamp(1.3, 1.5 + 0.05vw, 1.6)'
                        }}
                      >
                        {shoppingSearch}%
                      </span>
                    </div>
                  </div>

                  {/* Shopping Inflow */}
                  <div className="flex items-center justify-between animate-[fadeIn_0.6s_ease-out_0.6s_both]"
                    style={{ gap: 'clamp(12px, 2vw, 16px)' }}
                  >
                    <span 
                      className="font-medium text-[#374151] whitespace-nowrap"
                      style={{ 
                        fontStyle: 'normal',
                        fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                        lineHeight: 'clamp(1.3, 1.5 + 0.05vw, 1.6)'
                      }}
                    >
                      쇼핑 유입
                    </span>
                    <div className="flex items-center flex-1"
                      style={{
                        gap: 'clamp(6px, 1vw, 8px)',
                        maxWidth: 'clamp(180px, 25vw, 200px)'
                      }}
                    >
                      <div className="flex-1 bg-[#E5E7EB] rounded-[9999px] relative overflow-hidden"
                        style={{
                          height: 'clamp(6px, 1vw, 8px)'
                        }}
                      >
                        <div 
                          className="absolute left-0 top-0 bg-[#A855F7] rounded-[9999px] transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${shoppingInflow}%`,
                            height: 'clamp(6px, 1vw, 8px)'
                          }}
                        ></div>
                      </div>
                      <span 
                        className="font-medium text-[#9333EA] whitespace-nowrap"
                        style={{ 
                          fontStyle: 'normal',
                          fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                          lineHeight: 'clamp(1.3, 1.5 + 0.05vw, 1.6)'
                        }}
                      >
                        {shoppingInflow}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Text */}
                <div className="w-full bg-[#ECFDF5] rounded-[6px] sm:rounded-[8px] animate-[fadeIn_0.6s_ease-out_0.8s_both]"
                  style={{
                    padding: 'clamp(14px, 2vw, 16px)'
                  }}
                >
                  <p 
                    className="w-full font-medium text-center text-[#065F46]"
                    style={{ 
                      fontStyle: 'normal',
                      fontSize: 'clamp(16px, 1.5vw + 4px, 20px)',
                      lineHeight: 'clamp(1.3, 1.2 + 0.1vw, 1.4)'
                    }}
                  >
                    순위 상승으로 플레이스·쇼핑 노출 효과 극대화
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

