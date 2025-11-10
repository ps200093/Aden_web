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

    // 플레이스 매출 137%
    const placeTimer = setTimeout(() => {
      const placeInterval = setInterval(() => {
        setPlaceExposure((prev) => {
          if (prev >= 137) {
            clearInterval(placeInterval);
            return 137;
          }
          return prev + 2;
        });
      }, 20);
      return () => clearInterval(placeInterval);
    }, 200);

    // 쇼핑 매출 142%
    const searchTimer = setTimeout(() => {
      const searchInterval = setInterval(() => {
        setShoppingSearch((prev) => {
          if (prev >= 142) {
            clearInterval(searchInterval);
            return 142;
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
                marginTop: 'clamp(0px, 4vw, 32px)'
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
                  플레이스, 쇼핑 순위 상승 후<br />
                  매출 평균 상승률
                </h3>

                {/* Stats Container */}
                <div className="w-full"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(24px, 3.5vw, 32px)',
                    marginBottom: 'clamp(20px, 3vw, 24px)'
                  }}
                >
                  {/* Place Exposure */}
                  <div className="flex flex-col animate-[fadeIn_0.6s_ease-out_0.2s_both]"
                    style={{ gap: 'clamp(8px, 1.5vw, 12px)' }}
                  >
                    <div className="flex items-center justify-between">
                      <span 
                        className="font-medium text-[#374151]"
                        style={{ 
                          fontStyle: 'normal',
                          fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                          lineHeight: 'clamp(1.3, 1.5 + 0.05vw, 1.6)'
                        }}
                      >
                        플레이스 매출
                      </span>
                      <span 
                        className="font-bold text-[#2563EB]"
                        style={{ 
                          fontStyle: 'normal',
                          fontSize: 'clamp(16px, 1.5vw + 2px, 20px)',
                          lineHeight: 'clamp(1.3, 1.5 + 0.05vw, 1.6)',
                          opacity: placeExposure > 0 ? 1 : 0,
                          transition: 'opacity 0.3s ease-out'
                        }}
                      >
                        +{placeExposure}%
                      </span>
                    </div>
                    <div className="relative w-full">
                      {/* 그래프 바 */}
                      <div 
                        className="relative bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-[9999px] shadow-lg"
                        style={{ 
                          width: `${(placeExposure / 150) * 100}%`,
                          height: 'clamp(24px, 3vw, 32px)',
                          transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          transformOrigin: 'left',
                          animation: placeExposure > 0 ? 'pulse 2s infinite' : 'none'
                        }}
                      >
                        <div 
                          className="absolute inset-0 bg-white/20 rounded-[9999px]"
                          style={{
                            animation: placeExposure >= 137 ? 'shimmer 2s infinite' : 'none'
                          }}
                        ></div>
                      </div>
                      {/* 100% 기준선 - 그래프 위에 표시 */}
                      <div 
                        className="absolute left-0 top-0 w-full flex items-center pointer-events-none"
                        style={{ 
                          height: 'clamp(24px, 3vw, 32px)',
                          zIndex: 10
                        }}
                      >
                        <div 
                          className="relative h-full flex items-center"
                          style={{ width: 'calc(100% / 1.5)' }}
                        >
                          <div 
                            className="absolute right-0 top-0 h-full border-r-[3px] border-dashed border-[#FF6B6B]"
                            style={{ 
                              boxShadow: '0 0 8px rgba(255, 107, 107, 0.4)'
                            }}
                          ></div>
                          <span 
                            className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full ml-2 text-[#FF6B6B] font-bold whitespace-nowrap bg-white px-1 rounded"
                            style={{ 
                              fontSize: 'clamp(11px, 1.1vw, 13px)',
                              textShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
                            }}
                          >
                            100%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shopping Search */}
                  <div className="flex flex-col animate-[fadeIn_0.6s_ease-out_0.4s_both]"
                    style={{ gap: 'clamp(8px, 1.5vw, 12px)' }}
                  >
                    <div className="flex items-center justify-between">
                      <span 
                        className="font-medium text-[#374151]"
                        style={{ 
                          fontStyle: 'normal',
                          fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                          lineHeight: 'clamp(1.3, 1.5 + 0.05vw, 1.6)'
                        }}
                      >
                        쇼핑 매출
                      </span>
                      <span 
                        className="font-bold text-[#059669]"
                        style={{ 
                          fontStyle: 'normal',
                          fontSize: 'clamp(16px, 1.5vw + 2px, 20px)',
                          lineHeight: 'clamp(1.3, 1.5 + 0.05vw, 1.6)',
                          opacity: shoppingSearch > 0 ? 1 : 0,
                          transition: 'opacity 0.3s ease-out'
                        }}
                      >
                        +{shoppingSearch}%
                      </span>
                    </div>
                    <div className="relative w-full">
                      {/* 그래프 바 */}
                      <div 
                        className="relative bg-gradient-to-r from-[#10B981] to-[#059669] rounded-[9999px] shadow-lg"
                        style={{ 
                          width: `${(shoppingSearch / 150) * 100}%`,
                          height: 'clamp(24px, 3vw, 32px)',
                          transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          transformOrigin: 'left',
                          animation: shoppingSearch > 0 ? 'pulse 2s infinite' : 'none'
                        }}
                      >
                        <div 
                          className="absolute inset-0 bg-white/20 rounded-[9999px]"
                          style={{
                            animation: shoppingSearch >= 142 ? 'shimmer 2s infinite' : 'none'
                          }}
                        ></div>
                      </div>
                      {/* 100% 기준선 - 그래프 위에 표시 */}
                      <div 
                        className="absolute left-0 top-0 w-full flex items-center pointer-events-none"
                        style={{ 
                          height: 'clamp(24px, 3vw, 32px)',
                          zIndex: 10
                        }}
                      >
                        <div 
                          className="relative h-full flex items-center"
                          style={{ width: 'calc(100% / 1.5)' }}
                        >
                          <div 
                            className="absolute right-0 top-0 h-full border-r-[3px] border-dashed border-[#FF6B6B]"
                            style={{ 
                              boxShadow: '0 0 8px rgba(255, 107, 107, 0.4)'
                            }}
                          ></div>
                          <span 
                            className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full ml-2 text-[#FF6B6B] font-bold whitespace-nowrap bg-white px-1 rounded"
                            style={{ 
                              fontSize: 'clamp(11px, 1.1vw, 13px)',
                              textShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
                            }}
                          >
                            100%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shopping Inflow */}
                  {/* <div className="flex items-center justify-between animate-[fadeIn_0.6s_ease-out_0.6s_both]"
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
                  </div> */}
                </div>

                {/* CTA Text */}
                {/* <div className="w-full bg-[#ECFDF5] rounded-[6px] sm:rounded-[8px] animate-[fadeIn_0.6s_ease-out_0.8s_both]"
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

