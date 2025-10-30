'use client';
import Button from '@/components/ui/Button';
import type { PerformanceMetric } from '@/types';
import { ClockPlus, RotateCw, ChartSpline, BanknoteIcon, CircleDollarSign, UserRoundPlus, Shield } from 'lucide-react';

export default function PerformanceSection() {
  const performanceMetrics = [
    {
      icon: ClockPlus,
      value: "+41%",
      title: "체류시간 증가",
      description: "DAU 대비 평균 체류시간 향상",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      textColor: "text-blue-600"
    },
    {
      icon: RotateCw,
      value: "+27%",
      title: "재방문율 증가",
      description: "7일 내 재방문 사용자 비율",
      color: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      textColor: "text-emerald-600"
    },
    {
      icon: ChartSpline,
      value: "+34%",
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
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              매체 성과 개선 사례
            </h2>
            <p 
              className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium leading-[29px] sm:leading-[33px] lg:leading-[39px] text-gray-600"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              EDEN 오퍼월 도입 후 실제 성과 향상 지표
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_10px_15px_rgba(0,0,0,0.1)]">
            <div className="text-center mb-8">
              <h3 
                className="text-xl sm:text-2xl font-bold leading-7 text-gray-800 mb-4"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                더 오래, 더 자주, 더 많이.
              </h3>
              <p 
                className="text-base sm:text-lg font-medium leading-lg text-gray-600"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                매체 고유의 UI로 녹아든 오퍼월은 광고 피로감을 낮추고 유저 만족도를 높입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {performanceMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className={`w-24 h-24 ${metric.color} rounded-6xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                  <div 
                    className={`text-[24px] sm:text-[28px] lg:text-[30px] font-medium leading-[29px] sm:leading-[33px] lg:leading-[36px] ${metric.textColor} mb-2`}
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    {metric.value}
                  </div>
                  <h4 
                    className="text-base font-medium leading-5 text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    {metric.title}
                  </h4>
                  <p 
                    className="text-sm font-medium leading-sm text-gray-600"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    {metric.description}
                  </p>
                </div>
              );
              })}
            </div>
          </div>

          {/* Media Benefits */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_10px_15px_rgba(0,0,0,0.1)]">
            <div className="text-center mb-8">
              <h3 
                className="text-xl sm:text-2xl font-medium leading-7 text-gray-800"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                매체가 얻는 효과
              </h3>
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
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      유료 결제율 상승
                    </h4>
                    <p 
                      className="text-base font-medium leading-5 text-gray-600"
                      style={{ fontFamily: 'Noto Sans KR' }}
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
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      서비스 재활성화
                    </h4>
                    <p 
                      className="text-base font-medium leading-5 text-gray-600"
                      style={{ fontFamily: 'Noto Sans KR' }}
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
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      광고 부가수익 확보
                    </h4>
                    <p 
                      className="text-base font-medium leading-5 text-gray-600"
                      style={{ fontFamily: 'Noto Sans KR' }}
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
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      브랜드 신뢰 상승
                    </h4>
                    <p 
                      className="text-base font-medium leading-5 text-gray-600"
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      광고 피로도 최소화, 자연스러운 노출로 이미지 보호
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="w-full h-[76px] bg-emerald-50 rounded-lg flex items-center justify-center px-6">
                <p className="font-['Noto_Sans_KR'] font-medium text-[20px] leading-[24px] text-center text-emerald-800">
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

