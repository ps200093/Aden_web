'use client';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { Shield, Check } from 'lucide-react';

export default function StrengthsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState([false, false, false]);
  const [isRealTimeDashboardVisible, setIsRealTimeDashboardVisible] = useState(false);
  const [participantCount, setParticipantCount] = useState(0);
  const [completionRate, setCompletionRate] = useState(0);
  const [validTraffic, setValidTraffic] = useState(0);
  const [settlementAmount, setSettlementAmount] = useState(0);

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

    const section = document.getElementById('firewall-card');
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
    // Dashboard 섹션 Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isDashboardVisible) {
            setIsDashboardVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const dashboard = document.getElementById('dashboard-card');
    if (dashboard) {
      observer.observe(dashboard);
    }

    return () => {
      if (dashboard) {
        observer.unobserve(dashboard);
      }
    };
  }, [isDashboardVisible]);

  // 체크박스 순차적으로 체크
  useEffect(() => {
    if (!isDashboardVisible) return;

    const timers = [
      setTimeout(() => setCheckedItems([true, false, false]), 400),
      setTimeout(() => setCheckedItems([true, true, false]), 800),
      setTimeout(() => setCheckedItems([true, true, true]), 1200),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [isDashboardVisible]);

  useEffect(() => {
    // 실시간 대시보드 Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isRealTimeDashboardVisible) {
            setIsRealTimeDashboardVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const realTimeDashboard = document.getElementById('realtime-dashboard-card');
    if (realTimeDashboard) {
      observer.observe(realTimeDashboard);
    }

    return () => {
      if (realTimeDashboard) {
        observer.unobserve(realTimeDashboard);
      }
    };
  }, [isRealTimeDashboardVisible]);

  // 숫자 카운트업 애니메이션
  useEffect(() => {
    if (!isRealTimeDashboardVisible) return;

    // 참여 수 카운트업 (0 -> 1,247)
    const participantTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setParticipantCount((prev) => {
          if (prev >= 1247) {
            clearInterval(interval);
            return 1247;
          }
          return prev + 50;
        });
      }, 20);
      return () => clearInterval(interval);
    }, 200);

    // 완료율 카운트업 (0 -> 87.3)
    const rateTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setCompletionRate((prev) => {
          if (prev >= 87.3) {
            clearInterval(interval);
            return 87.3;
          }
          return Math.min(prev + 3.5, 87.3);
        });
      }, 20);
      return () => clearInterval(interval);
    }, 400);

    // 유효 트래픽 카운트업 (0 -> 94.2)
    const trafficTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setValidTraffic((prev) => {
          if (prev >= 94.2) {
            clearInterval(interval);
            return 94.2;
          }
          return Math.min(prev + 3.8, 94.2);
        });
      }, 20);
      return () => clearInterval(interval);
    }, 600);

    // 정산 금액 카운트업 (0 -> 847,200)
    const amountTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setSettlementAmount((prev) => {
          if (prev >= 847200) {
            clearInterval(interval);
            return 847200;
          }
          return prev + 34000;
        });
      }, 20);
      return () => clearInterval(interval);
    }, 800);

    return () => {
      clearTimeout(participantTimer);
      clearTimeout(rateTimer);
      clearTimeout(trafficTimer);
      clearTimeout(amountTimer);
    };
  }, [isRealTimeDashboardVisible]);

  return (
    <section className="w-full bg-background-secondary overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ 
          paddingTop: 'clamp(40px, 6vw + 12px, 80px)',
          paddingBottom: 'clamp(40px, 6vw + 12px, 80px)'
        }}>
          {/* Header */}
          <div className="w-full text-center"
            style={{
              marginBottom: 'clamp(32px, 5vw + 12px, 74px)'
            }}
          >
            <h2 
              className="w-full font-medium text-center text-[#111827]"
              style={{ 
                fontFamily: 'Noto Sans KR', 
                fontStyle: 'normal',
                fontSize: 'clamp(26px, 2.5vw + 8px, 36px)',
                lineHeight: 'clamp(1.2, 1.2 + 0.05vw, 1.3)',
                marginBottom: 'clamp(12px, 1.5vw, 16px)'
              }}
            >
              왜 ADEN인가?
            </h2>
            <p 
              className="w-full font-medium text-center text-[#4B5563]"
              style={{ 
                fontFamily: 'Noto Sans KR', 
                fontStyle: 'normal',
                fontSize: 'clamp(15px, 1.2vw + 6px, 20px)',
                lineHeight: 'clamp(1.5, 1.4 + 0.1vw, 1.6)'
              }}
            >
              업계 최고 수준의 기술력과 투명성으로 완성된 광고 플랫폼
            </p>
          </div>

          {/* Strength 1 */}
          <div className="w-full flex flex-col lg:flex-row items-center"
            style={{
              gap: 'clamp(24px, 4vw, 48px)',
              marginBottom: 'clamp(32px, 5vw + 8px, 64px)'
            }}
          >
            {/* Left Content */}
            <div className="w-full max-w-[592px] flex-1">
              <div className="flex items-center"
                style={{
                  gap: 'clamp(12px, 2vw, 16px)',
                  marginBottom: 'clamp(20px, 3vw, 24px)'
                }}
              >
                <div className="bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 'clamp(40px, 6vw, 48px)',
                    height: 'clamp(40px, 6vw, 48px)'
                  }}
                >
                  <span 
                    className="font-medium text-white"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(16px, 2vw, 18px)',
                      lineHeight: '1.2'
                    }}
                  >
                    1
                  </span>
                </div>
                <h3 
                  className="font-medium text-[#111827]"
                  style={{ 
                    fontFamily: 'Noto Sans KR', 
                    fontStyle: 'normal',
                    fontSize: 'clamp(20px, 2vw + 4px, 24px)',
                    lineHeight: 'clamp(1.3, 1.33 + 0.05vw, 1.4)'
                  }}
                >
                  독자적 서비스 개발로 리스크 제로
                </h3>
              </div>
              <p 
                className="font-medium"
                style={{ 
                  fontFamily: 'Noto Sans KR', 
                  fontStyle: 'normal',
                  fontSize: 'clamp(16px, 1.5vw + 4px, 20px)',
                  lineHeight: 'clamp(1.5, 1.5 + 0.05vw, 1.6)',
                  marginBottom: 'clamp(20px, 3vw, 24px)'
                }}
              >
                <span className="text-[#059669]">절대 미달이 없는 구조</span><br />
                <span className="text-black">광고 발주량 이상의 트래픽을 자체적으로 발생시켜 미달을 미연에 방지합니다.</span><br />
                <span className="text-black">모든 참여 데이터는 실시간 모니터링되며,</span><br />
                <span className="text-black">부정 유입(Fraud) 및 자동화 트래픽은 방화벽 레벨에서 차단합니다.</span>
              </p>
              <div 
                className="w-full bg-[#ECFDF5] border border-[#A7F3D0] rounded-[6px] sm:rounded-[8px]"
                style={{
                  padding: 'clamp(14px, 2vw, 16px)'
                }}
              >
                <p 
                  className="font-medium text-center text-[#065F46]"
                  style={{ 
                    fontFamily: 'Noto Sans KR', 
                    fontStyle: 'normal',
                    fontSize: 'clamp(14px, 1.2vw + 3px, 16px)',
                    lineHeight: '1.3'
                  }}
                >
                  "No underdelivery. No inflated traffic."
                </p>
              </div>
            </div>

            {/* Right Content - Firewall Card */}
            <div id="firewall-card" className="w-full max-w-[592px] flex-1">
              <div className="w-full bg-white rounded-xl sm:rounded-[16px] animate-[fadeInUp_0.8s_ease-out]" 
                style={{ 
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)',
                  padding: 'clamp(24px, 4vw, 32px)'
                }}
              >
                {/* Header with Icon */}
                <div className="flex flex-col items-center animate-[fadeIn_0.6s_ease-out_0.2s_both]"
                  style={{
                    marginBottom: 'clamp(24px, 4vw, 32px)'
                  }}
                >
                  <div className="rounded-full animate-[pulse_2s_ease-in-out_infinite]" 
                    style={{ 
                      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 70.71%)', 
                      opacity: 0.99,
                      width: 'clamp(80px, 12vw, 100.58px)',
                      height: 'clamp(80px, 12vw, 100.58px)',
                      marginBottom: 'clamp(12px, 2vw, 16px)'
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative"
                        style={{
                          width: 'clamp(26px, 4vw, 31.42px)',
                          height: 'clamp(26px, 4vw, 31.42px)'
                        }}
                      >
                        {/* 전체 테두리 */}
                        <Shield 
                          className="absolute inset-0 w-full h-full text-white" 
                          strokeWidth={2}
                          fill="none"
                        />
                        {/* 왼쪽 반만 채우기 */}
                        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                          <Shield 
                            className="w-full h-full text-white" 
                            strokeWidth={2}
                            fill="white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 
                    className="font-medium text-center text-[#111827]"
                    style={{ 
                      fontFamily: 'Noto Sans KR', 
                      fontStyle: 'normal',
                      fontSize: 'clamp(17px, 1.5vw + 4px, 20px)',
                      lineHeight: 'clamp(1.3, 1.4 + 0.05vw, 1.45)'
                    }}
                  >
                    EDEN Firewall in Action
                  </h4>
                </div>

                {/* Status Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.5vw, 12px)' }}>
                  {/* Fraud Traffic */}
                  <div className={`w-full bg-[#FEF2F2] rounded-[6px] sm:rounded-[8px] flex items-center justify-between transition-all duration-500 ${isVisible ? 'animate-[slideInLeft_0.6s_ease-out_0.4s_both]' : 'opacity-0'}`}
                    style={{
                      padding: 'clamp(12px, 2vw, 14px) clamp(12px, 1.5vw, 12px)'
                    }}
                  >
                    <span 
                      className="font-medium text-[#B91C1C]"
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                        lineHeight: '1.3'
                      }}
                    >
                      Fraud Traffic
                    </span>
                    <span className="bg-[#EF4444] rounded-full flex items-center justify-center animate-[pulse_2s_ease-in-out_1s_infinite]"
                      style={{
                        padding: 'clamp(5px, 1vw, 6px) clamp(12px, 2vw, 16px)',
                        minWidth: 'clamp(90px, 14vw, 100px)'
                      }}
                    >
                      <span 
                        className="font-medium text-center text-white"
                        style={{ 
                          fontFamily: 'Noto Sans KR', 
                          fontStyle: 'normal',
                          fontSize: 'clamp(12px, 1vw + 2px, 14px)',
                          lineHeight: '1.2'
                        }}
                      >
                        REJECTED
                      </span>
                    </span>
                  </div>

                  {/* Bot Activity */}
                  <div className={`w-full bg-[#FEF2F2] rounded-[6px] sm:rounded-[8px] flex items-center justify-between transition-all duration-500 ${isVisible ? 'animate-[slideInLeft_0.6s_ease-out_0.6s_both]' : 'opacity-0'}`}
                    style={{
                      padding: 'clamp(12px, 2vw, 14px) clamp(12px, 1.5vw, 12px)'
                    }}
                  >
                    <span 
                      className="font-medium text-[#B91C1C]"
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                        lineHeight: '1.3'
                      }}
                    >
                      Bot Activity
                    </span>
                    <span className="bg-[#EF4444] rounded-full flex items-center justify-center animate-[pulse_2s_ease-in-out_1.2s_infinite]"
                      style={{
                        padding: 'clamp(5px, 1vw, 6px) clamp(12px, 2vw, 16px)',
                        minWidth: 'clamp(90px, 14vw, 100px)'
                      }}
                    >
                      <span 
                        className="font-medium text-center text-white"
                        style={{ 
                          fontFamily: 'Noto Sans KR', 
                          fontStyle: 'normal',
                          fontSize: 'clamp(12px, 1vw + 2px, 14px)',
                          lineHeight: '1.2'
                        }}
                      >
                        BLOCKED
                      </span>
                    </span>
                  </div>

                  {/* Valid User */}
                  <div className={`w-full bg-[#ECFDF5] rounded-[6px] sm:rounded-[8px] flex items-center justify-between transition-all duration-500 ${isVisible ? 'animate-[slideInRight_0.6s_ease-out_0.8s_both]' : 'opacity-0'}`}
                    style={{
                      padding: 'clamp(12px, 2vw, 14px) clamp(12px, 1.5vw, 12px)'
                    }}
                  >
                    <span 
                      className="font-medium text-[#047857]"
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                        lineHeight: '1.3'
                      }}
                    >
                      Valid User
                    </span>
                    <span className="bg-[#10B981] rounded-full flex items-center justify-center animate-[pulse_2s_ease-in-out_1.4s_infinite]"
                      style={{
                        padding: 'clamp(5px, 1vw, 6px) clamp(12px, 2vw, 16px)',
                        minWidth: 'clamp(90px, 14vw, 100px)'
                      }}
                    >
                      <span 
                        className="font-medium text-center text-white"
                        style={{ 
                          fontFamily: 'Noto Sans KR', 
                          fontStyle: 'normal',
                          fontSize: 'clamp(12px, 1vw + 2px, 14px)',
                          lineHeight: '1.2'
                        }}
                      >
                        APPROVED
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strength 2 */}
          <div className="w-full flex flex-col-reverse lg:flex-row items-center"
            style={{
              gap: 'clamp(24px, 4vw, 48px)',
              marginBottom: 'clamp(32px, 5vw + 8px, 64px)'
            }}
          >
            {/* Left Content - Dashboard Card */}
            <div id="dashboard-card" className="w-full max-w-[592px] flex-1">
              <div className="w-full bg-white rounded-xl sm:rounded-[16px]" 
                style={{ 
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)',
                  padding: 'clamp(24px, 4vw, 32px)'
                }}
              >
                <h4 
                  className="font-medium text-center text-[#111827]"
                  style={{ 
                    fontFamily: 'Noto Sans KR', 
                    fontStyle: 'normal',
                    fontSize: 'clamp(17px, 1.5vw + 4px, 20px)',
                    lineHeight: 'clamp(1.3, 1.4 + 0.05vw, 1.45)',
                    marginBottom: 'clamp(20px, 3vw, 24px)'
                  }}
                >
                  매체 지정 대시보드
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2vw, 16px)', marginBottom: 'clamp(12px, 2vw, 16px)' }}>
                  {/* Active Media Items */}
                  <div className="w-full border border-[#e5e7eb] rounded-[6px] sm:rounded-[8px] flex justify-between items-center"
                    style={{
                      padding: 'clamp(16px, 2.5vw, 20px) clamp(12px, 2vw, 16px)'
                    }}
                  >
                    <div className="flex items-center"
                      style={{ gap: 'clamp(10px, 1.5vw, 12px)' }}
                    >
                      <div className={`rounded-[4px] flex items-center justify-center flex-shrink-0 transition-all duration-500 ${checkedItems[0] ? 'bg-[#3b82f6] scale-100' : 'bg-white border border-[#e5e7eb] scale-90'}`}
                        style={{
                          width: 'clamp(18px, 2.5vw, 20px)',
                          height: 'clamp(18px, 2.5vw, 20px)'
                        }}
                      >
                        <Check className={`text-white transition-all duration-300 ${checkedItems[0] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} 
                          strokeWidth={3}
                          style={{
                            width: 'clamp(12px, 1.8vw, 14px)',
                            height: 'clamp(12px, 1.8vw, 14px)'
                          }}
                        />
                      </div>
                      <span 
                        className="font-medium text-[#374151]"
                        style={{ 
                          fontFamily: 'Noto Sans KR', 
                          fontStyle: 'normal',
                          fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                          lineHeight: '1.3'
                        }}
                      >
                        카카오뱅크 앱
                      </span>
                    </div>
                    <span 
                      className="font-medium text-[#6b7280] whitespace-nowrap"
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(12px, 1vw + 2px, 14px)',
                        lineHeight: '1.2'
                      }}
                    >
                      활성 매체
                    </span>
                  </div>

                  <div className="w-full border border-[#e5e7eb] rounded-[6px] sm:rounded-[8px] flex justify-between items-center"
                    style={{
                      padding: 'clamp(16px, 2.5vw, 20px) clamp(12px, 2vw, 16px)'
                    }}
                  >
                    <div className="flex items-center"
                      style={{ gap: 'clamp(10px, 1.5vw, 12px)' }}
                    >
                      <div className={`rounded-[4px] flex items-center justify-center flex-shrink-0 transition-all duration-500 ${checkedItems[1] ? 'bg-[#3b82f6] scale-100' : 'bg-white border border-[#e5e7eb] scale-90'}`}
                        style={{
                          width: 'clamp(18px, 2.5vw, 20px)',
                          height: 'clamp(18px, 2.5vw, 20px)'
                        }}
                      >
                        <Check className={`text-white transition-all duration-300 ${checkedItems[1] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} 
                          strokeWidth={3}
                          style={{
                            width: 'clamp(12px, 1.8vw, 14px)',
                            height: 'clamp(12px, 1.8vw, 14px)'
                          }}
                        />
                      </div>
                      <span 
                        className="font-medium text-[#374151]"
                        style={{ 
                          fontFamily: 'Noto Sans KR', 
                          fontStyle: 'normal',
                          fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                          lineHeight: '1.3'
                        }}
                      >
                        배달의민족
                      </span>
                    </div>
                    <span 
                      className="font-medium text-[#6b7280] whitespace-nowrap"
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(12px, 1vw + 2px, 14px)',
                        lineHeight: '1.2'
                      }}
                    >
                      활성 매체
                    </span>
                  </div>

                  <div className="w-full border border-[#e5e7eb] rounded-[6px] sm:rounded-[8px] flex justify-between items-center"
                    style={{
                      padding: 'clamp(16px, 2.5vw, 20px) clamp(12px, 2vw, 16px)'
                    }}
                  >
                    <div className="flex items-center"
                      style={{ gap: 'clamp(10px, 1.5vw, 12px)' }}
                    >
                      <div className={`rounded-[4px] flex-shrink-0 transition-all duration-500 ${checkedItems[2] ? 'bg-white border border-black' : 'bg-white border border-[#e5e7eb]'}`}
                        style={{
                          width: 'clamp(18px, 2.5vw, 20px)',
                          height: 'clamp(18px, 2.5vw, 20px)'
                        }}
                      ></div>
                      <span 
                        className="font-medium text-[#374151]"
                        style={{ 
                          fontFamily: 'Noto Sans KR', 
                          fontStyle: 'normal',
                          fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                          lineHeight: '1.3'
                        }}
                      >
                        토스 앱
                      </span>
                    </div>
                    <span 
                      className="font-medium text-[#6b7280] whitespace-nowrap"
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(12px, 1vw + 2px, 14px)',
                        lineHeight: '1.2'
                      }}
                    >
                      선택 가능
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full max-w-[592px] flex-1">
              <div className="flex items-center"
                style={{
                  gap: 'clamp(12px, 2vw, 16px)',
                  marginBottom: 'clamp(20px, 3vw, 24px)'
                }}
              >
                <div className="bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 'clamp(40px, 6vw, 48px)',
                    height: 'clamp(40px, 6vw, 48px)'
                  }}
                >
                  <span 
                    className="font-medium text-white"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(16px, 2vw, 18px)',
                      lineHeight: '1.2'
                    }}
                  >
                    2
                  </span>
                </div>
                <h3 
                  className="font-medium text-[#111827]"
                  style={{ 
                    fontFamily: 'Noto Sans KR', 
                    fontStyle: 'normal',
                    fontSize: 'clamp(20px, 2vw + 4px, 24px)',
                    lineHeight: 'clamp(1.3, 1.33 + 0.05vw, 1.4)'
                  }}
                >
                  매체 지정이 가능한 투명한 노출 구조
                </h3>
              </div>
              <p 
                className="font-medium"
                style={{ 
                  fontFamily: 'Noto Sans KR', 
                  fontStyle: 'normal',
                  fontSize: 'clamp(16px, 1.5vw + 4px, 20px)',
                  lineHeight: 'clamp(1.5, 1.5 + 0.05vw, 1.6)',
                  marginBottom: 'clamp(20px, 3vw, 24px)'
                }}
              >
                <span className="text-black">기존 오퍼월은 광고주가 본인의 광고가<br />어디에 노출되는지조차 알 수 없었습니다.</span><br />
                <span className="text-black">ADEN은 다릅니다. 광고주는 노출 매체<br />리스트를 확인하고, 원하는 매체를 직접 지정 할 수 있습니다.</span><br />
              </p>
              <div 
                className="w-full bg-[#DBEAFE] border border-[#93C5FD] rounded-[6px] sm:rounded-[8px]"
                style={{
                  padding: 'clamp(14px, 2vw, 16px)'
                }}
              >
                <p className="w-full flex items-center justify-center">
                  <span 
                    className="font-medium text-center text-[#1e40af]"
                    style={{ 
                      fontFamily: 'Noto Sans KR', 
                      fontStyle: 'normal',
                      fontSize: 'clamp(14px, 1.2vw + 3px, 16px)',
                      lineHeight: '1.3'
                    }}
                  >
                    "Your Ad. Your Choice."
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Strength 3 */}
          <div className="w-full flex flex-col lg:flex-row items-center"
            style={{
              gap: 'clamp(24px, 4vw, 48px)'
            }}
          >
            {/* Left Content */}
            <div className="w-full max-w-[592px] flex-1">
              <div className="flex items-center"
                style={{
                  gap: 'clamp(12px, 2vw, 16px)',
                  marginBottom: 'clamp(20px, 3vw, 24px)'
                }}
              >
                <div className="bg-[#a855f7] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    width: 'clamp(40px, 6vw, 48px)',
                    height: 'clamp(40px, 6vw, 48px)'
                  }}
                >
                  <span 
                    className="font-medium text-white"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(16px, 2vw, 18px)',
                      lineHeight: '1.2'
                    }}
                  >
                    3
                  </span>
                </div>
                <h3 
                  className="font-medium text-[#111827]"
                  style={{ 
                    fontFamily: 'Noto Sans KR', 
                    fontStyle: 'normal',
                    fontSize: 'clamp(20px, 2vw + 4px, 24px)',
                    lineHeight: 'clamp(1.3, 1.33 + 0.05vw, 1.4)'
                  }}
                >
                  24시간 정산 페이지 제공
                </h3>
              </div>
              <p 
                className="font-medium"
                style={{ 
                  fontFamily: 'Noto Sans KR', 
                  fontStyle: 'normal',
                  fontSize: 'clamp(16px, 1.5vw + 4px, 20px)',
                  lineHeight: 'clamp(1.5, 1.5 + 0.05vw, 1.6)',
                  marginBottom: 'clamp(20px, 3vw, 24px)'
                }}
              >
                <span className="text-black">광고주는 전용 어드민을 통해 실시간 집행 현황, 참여 로그, 정산 금액을 확인할 수 있습니다.</span><br />
                <span className="text-black">불투명한 "월 단위 보고서"가 아닌, 언제든 확인 가능한 체계적 정산 프로세스</span>
              </p>
              <div 
                className="w-full bg-[#F3E8FF] border border-[#E9D5FF] rounded-[6px] sm:rounded-[8px]"
                style={{
                  padding: 'clamp(14px, 2vw, 16px)'
                }}
              >
                <p className="w-full flex items-center justify-center">
                  <span 
                    className="font-medium text-center text-[#7e22ce]"
                    style={{ 
                      fontFamily: 'Noto Sans KR', 
                      fontStyle: 'normal',
                      fontSize: 'clamp(14px, 1.2vw + 3px, 16px)',
                      lineHeight: '1.3'
                    }}
                  >
                    "Real-time Monitoring"
                  </span>
                </p>
              </div>
            </div>

            {/* Right Content - Dashboard Card */}
            <div id="realtime-dashboard-card" className="w-full max-w-[592px] flex-1">
              <div className="w-full bg-white rounded-xl sm:rounded-[16px]" 
                style={{ 
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)',
                  padding: 'clamp(24px, 4vw, 32px)'
                }}
              >
                <h4 
                  className="font-medium text-center text-[#111827]"
                  style={{ 
                    fontFamily: 'Noto Sans KR', 
                    fontStyle: 'normal',
                    fontSize: 'clamp(17px, 1.5vw + 4px, 20px)',
                    lineHeight: 'clamp(1.3, 1.4 + 0.05vw, 1.45)',
                    marginBottom: 'clamp(20px, 3vw, 24px)'
                  }}
                >
                  실시간 대시보드
                </h4>

                <div className="flex"
                  style={{
                    gap: 'clamp(12px, 2vw, 16px)',
                    marginBottom: 'clamp(20px, 3vw, 24px)'
                  }}
                >
                  <div className={`flex-1 bg-[#ECFDF5] rounded-[6px] sm:rounded-[8px] transition-all duration-500 ${isRealTimeDashboardVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                    style={{
                      padding: 'clamp(12px, 2vw, 16px)'
                    }}
                  >
                    <div className="font-medium text-[#059669] text-center" 
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(20px, 2.5vw + 4px, 24px)',
                        lineHeight: '1.2',
                        marginBottom: 'clamp(6px, 1vw, 8px)'
                      }}
                    >
                      {participantCount.toLocaleString()}
                    </div>
                    <div className="font-medium text-[#4b5563] text-center" 
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(12px, 1vw + 2px, 14px)',
                        lineHeight: '1.2'
                      }}
                    >
                      오늘 참여 수
                    </div>
                  </div>
                  <div className={`flex-1 bg-[#DBEAFE] rounded-[6px] sm:rounded-[8px] transition-all duration-500 delay-200 ${isRealTimeDashboardVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                    style={{
                      padding: 'clamp(12px, 2vw, 16px)'
                    }}
                  >
                    <div className="font-medium text-[#2563eb] text-center" 
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(20px, 2.5vw + 4px, 24px)',
                        lineHeight: '1.2',
                        marginBottom: 'clamp(6px, 1vw, 8px)'
                      }}
                    >
                      {completionRate.toFixed(1)}%
                    </div>
                    <div className="font-medium text-[#4b5563] text-center" 
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(12px, 1vw + 2px, 14px)',
                        lineHeight: '1.2'
                      }}
                    >
                      미션 완료율
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.5vw, 12px)' }}>
                  <div className="w-full bg-[#ECFDF5] rounded-[6px] sm:rounded-[8px] border-l-[3px] border-l-[#10B981] flex justify-between items-center"
                    style={{
                      padding: 'clamp(12px, 2vw, 16px) clamp(10px, 1.5vw, 12px)'
                    }}
                  >
                    <span 
                      className="font-medium text-[#047857]"
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                        lineHeight: '1.3'
                      }}
                    >
                      유효 트래픽
                    </span>
                    <span 
                      className="font-medium text-[#059669]"
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                        lineHeight: '1.3'
                      }}
                    >
                      {validTraffic.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-[#F3E8FF] rounded-[6px] sm:rounded-[8px] border-l-[3px] border-l-[#a855f7] flex justify-between items-center"
                    style={{
                      padding: 'clamp(12px, 2vw, 16px) clamp(10px, 1.5vw, 12px)'
                    }}
                  >
                    <span 
                      className="font-medium text-[#7e22ce]"
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                        lineHeight: '1.3'
                      }}
                    >
                      정산 금액
                    </span>
                    <span 
                      className="font-medium text-[#9333ea]"
                      style={{ 
                        fontFamily: 'Noto Sans KR', 
                        fontStyle: 'normal',
                        fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                        lineHeight: '1.3'
                      }}
                    >
                      ₩ {settlementAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

