'use client';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import type { PerformanceMetric } from '@/types';
import { ClockPlus, RotateCw, ChartSpline, BanknoteIcon, CircleDollarSign, UserRoundPlus, Shield } from 'lucide-react';

export default function PerformanceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [stayTimeIncrease, setStayTimeIncrease] = useState(0);
  const [revisitIncrease, setRevisitIncrease] = useState(0);
  const [revenueIncrease, setRevenueIncrease] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('performance-metrics');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && stayTimeIncrease === 0) {
      // 체류시간 증가: +41%
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 1;
          if (current >= 41) {
            setStayTimeIncrease(41);
            clearInterval(timer);
          } else {
            setStayTimeIncrease(current);
          }
        }, 25);
      }, 100);

      // 재방문율 증가: +27%
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 1;
          if (current >= 27) {
            setRevisitIncrease(27);
            clearInterval(timer);
          } else {
            setRevisitIncrease(current);
          }
        }, 30);
      }, 200);

      // 매출 증가: +34%
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 1;
          if (current >= 34) {
            setRevenueIncrease(34);
            clearInterval(timer);
          } else {
            setRevenueIncrease(current);
          }
        }, 28);
      }, 300);
    }
  }, [isVisible]);

  const performanceMetrics = [
    {
      icon: ClockPlus,
      value: stayTimeIncrease,
      title: "체류시간 증가",
      description: "DAU 대비 평균 체류시간 향상",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      textColor: "text-blue-600"
    },
    {
      icon: RotateCw,
      value: revisitIncrease,
      title: "재방문율 증가",
      description: "7일 내 재방문 유저 비율",
      color: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      textColor: "text-emerald-600"
    },
    {
      icon: ChartSpline,
      value: revenueIncrease,
      title: "매출 증가",
      description: "오퍼월 관련 부가 수익 상승",
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      textColor: "text-purple-600"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-[40px] sm:py-[60px] lg:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-[32px] sm:gap-[40px] lg:gap-[50px]">
          {/* Section Header */}
          <div className="text-center">
            <h2 
              className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold leading-[34px] sm:leading-[38px] lg:leading-[44px] text-gray-800 mb-4"
            >
              매체 성과 개선 사례
            </h2>
            <p 
              className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium leading-[29px] sm:leading-[33px] lg:leading-[39px] text-gray-600"
            >
              EDEN 오퍼월 도입 후 실제 성과 향상 지표
            </p>
          </div>

          {/* Performance Metrics */}
          <div id="performance-metrics" className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_10px_15px_rgba(0,0,0,0.1)]">
            <div className="text-center mb-8">
              <h3 
                className="text-xl sm:text-2xl font-bold leading-7 text-gray-800 mb-4"
              >
                더 오래, 더 자주, 더 많이.
              </h3>
              <p 
                className="text-base sm:text-lg font-medium leading-lg text-gray-600"
              >
                매체 고유의 UI로 녹아든 오퍼월은 광고 피로감을 낮추고 유저 만족도를 높입니다.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-12">
              {performanceMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${metric.color} rounded-3xl sm:rounded-5xl lg:rounded-6xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" strokeWidth={2.5} />
                    </div>
                  <div 
                    className={`text-lg sm:text-2xl lg:text-[30px] font-medium leading-[22px] sm:leading-[29px] lg:leading-[36px] ${metric.textColor} mb-1 sm:mb-2`}
                  >
                    +{metric.value}%
                  </div>
                  <h4 
                    className="text-xs sm:text-sm lg:text-base font-medium leading-[14px] sm:leading-[17px] lg:leading-5 text-gray-800 mb-1 sm:mb-2"
                  >
                    {metric.title}
                  </h4>
                  <p 
                    className="text-[10px] sm:text-xs lg:text-sm font-medium leading-[12px] sm:leading-[14px] lg:leading-sm text-gray-600"
                  >
                    {metric.description}
                  </p>
                </div>
              );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <BanknoteIcon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-lg font-medium leading-lg text-gray-800 mb-2"
                    >
                      유료 결제율 상승
                    </h4>
                    <p 
                      className="text-base font-medium leading-5 text-gray-600"
                    >
                      무료 포인트로 구매 전환 유도, 결제 퍼널 개선
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <UserRoundPlus className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-lg font-medium leading-lg text-gray-800 mb-2"
                    >
                      서비스 재활성화
                    </h4>
                    <p 
                      className="text-base font-medium leading-5 text-gray-600"
                    >
                      미션 참여로 휴면 유저 복귀 유도
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <CircleDollarSign className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-lg font-medium leading-lg text-gray-800 mb-2"
                    >
                      광고 부가수익 확보
                    </h4>
                    <p 
                      className="text-base font-medium leading-5 text-gray-600"
                    >
                      리워드 기반 광고로 안정적인 부가수익 창출
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-3xl flex items-center justify-center flex-shrink-0">
                    <div className="relative w-6 h-6">
                      <Shield 
                        className="absolute inset-0 w-full h-full text-white" 
                        strokeWidth={2.5}
                        fill="none"
                      />
                      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                        <Shield 
                          className="w-full h-full text-white" 
                          strokeWidth={2.5}
                          fill="white"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-lg font-medium leading-lg text-gray-800 mb-2"
                    >
                      브랜드 신뢰 유지
                    </h4>
                    <p 
                      className="text-base font-medium leading-5 text-gray-600"
                    >
                      광고 피로도 최소화, 자연스러운 노출로 이미지 보호
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="w-full h-[76px] bg-emerald-50 rounded-lg flex items-center justify-center px-6">
                <p className="font-medium text-[20px] leading-[24px] text-center text-emerald-800">
                  "비용 투자 없는 매체 활성화가 가능합니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

