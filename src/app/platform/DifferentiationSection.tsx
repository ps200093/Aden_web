'use client';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import type { DifferentiationPoint, IntegrationStep } from '@/types';
import { MoveUp, MoveDown, CircleCheck } from 'lucide-react';

export default function DifferentiationSection() {
  const [isPoint1Visible, setIsPoint1Visible] = useState(false);
  const [isPoint2Visible, setIsPoint2Visible] = useState(false);
  const [isPoint3Visible, setIsPoint3Visible] = useState(false);
  const [isPoint4Visible, setIsPoint4Visible] = useState(false);
  const [missionCount, setMissionCount] = useState(0);
  const [largeMediaPercent, setLargeMediaPercent] = useState(0);
  const [mediumMediaPercent, setMediumMediaPercent] = useState(0);
  const [smallMediaPercent, setSmallMediaPercent] = useState(0);

  useEffect(() => {
    if (isPoint2Visible && missionCount === 0) {
      const targetValue = 5000000;
      const duration = 2000; // 2초
      const frameRate = 1000 / 60; // 60fps
      const totalFrames = Math.round(duration / frameRate);
      
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // easeOut 효과: 처음엔 빠르게, 나중엔 천천히
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeProgress * targetValue);
        
        if (frame >= totalFrames) {
          setMissionCount(targetValue);
          clearInterval(timer);
        } else {
          setMissionCount(currentValue);
        }
      }, frameRate);

      return () => clearInterval(timer);
    }
  }, [isPoint2Visible]);

  useEffect(() => {
    if (isPoint2Visible && largeMediaPercent === 0) {
      // 대형 매체: 85%
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 1;
          if (current >= 85) {
            setLargeMediaPercent(85);
            clearInterval(timer);
          } else {
            setLargeMediaPercent(current);
          }
        }, 20);
      }, 300);

      // 중형 매체: 82%
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 1;
          if (current >= 82) {
            setMediumMediaPercent(82);
            clearInterval(timer);
          } else {
            setMediumMediaPercent(current);
          }
        }, 20);
      }, 400);

      // 소형 매체: 78%
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 1;
          if (current >= 78) {
            setSmallMediaPercent(78);
            clearInterval(timer);
          } else {
            setSmallMediaPercent(current);
          }
        }, 20);
      }, 500);
    }
  }, [isPoint2Visible]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const point1Observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPoint1Visible(true);
        }
      },
      { threshold: 0.2 }
    );

    const point2Observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPoint2Visible(true);
        }
      },
      { threshold: 0.2 }
    );

    const point3Observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPoint3Visible(true);
        }
      },
      { threshold: 0.2 }
    );

    const point4Observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPoint4Visible(true);
        }
      },
      { threshold: 0.2 }
    );

    const point1Element = document.getElementById('point-1');
    const point2Element = document.getElementById('point-2');
    const point3Element = document.getElementById('point-3');
    const point4Element = document.getElementById('point-4');

    if (point1Element) {
      point1Observer.observe(point1Element);
      observers.push(point1Observer);
    }
    if (point2Element) {
      point2Observer.observe(point2Element);
      observers.push(point2Observer);
    }
    if (point3Element) {
      point3Observer.observe(point3Element);
      observers.push(point3Observer);
    }
    if (point4Element) {
      point4Observer.observe(point4Element);
      observers.push(point4Observer);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const differentiationPoints: DifferentiationPoint[] = [
    {
      id: 1,
      title: "브랜드 맞춤 '광고 같지 않은' UI/UX",
      description: "ADEN은 매체의 앱/웹 디자인 언어를 그대로 반영해 광고가 아닌 서비스의 일부처럼 보이는 오퍼월을 제공합니다.",
      benefits: [
        "광고 노출 시 거부감 ↓",
        "유저 체류시간 ↑", 
        "재방문율 ↑"
      ],
      quote: "Ad looks like your brand."
    },
    {
      id: 2,
      title: "일일 5백만 타 인벤토리 보유",
      description: "일일 5,000,000회 이상 참여 가능한 미션 물량 확보. 매체의 DAU/MAU에 맞춰 최적화된 참여량을 자동 배분합니다.",
      additionalInfo: "대형 매체에만 집중되는 기존 관행을 탈피해, 모든 제휴 매체가 균등하게 참여할 수 있도록 설계되었습니다."
    },
    {
      id: 3,
      title: "투명한 정산 구조",
      description: "ADEN은 CPA 미션만 과금합니다. 클릭·노출·앱유입형 광고 등은 과금되지 않습니다. 또한 랭킹상승형 미션 분배표를 사전 공개하고, 차감 로그(규칙ID / 타임스탬프 / 패턴)를 매체 전용 대시보드에서 실시간으로 열람할 수 있습니다. 매체 수익 = 광고주의 실성과 1:1로 연결.",
      quote: "Transparent Settlement"
    },
    {
      id: 4,
      title: "도입이 쉬운 구조",
      description: "도입에 필요한 개발 리소스를 최소화했습니다.",
      features: [
        {
          title: "SDK-less PoC",
          description: "인앱 WebView / SDK 방식 → 앱 업데이트 불필요"
        },
        {
          title: "경량 SDK",
          description: "서버 드리븐 운영 → 릴리즈 없이 노출순서, 쿨다운 변경 가능"
        },
        {
          title: "웹앱 지원",
          description: "모든 형태의 매체에서 즉시 탑재 가능"
        }
      ],
      conclusion: "매체는 단 2주 만에 PoC 결과를 확인하고 즉시 도입까지 진행할 수 있습니다."
    }
  ];

  const integrationSteps: IntegrationStep[] = [
    {
      step: "1",
      title: "파라미터 교환",
      description: "기본 연동 정보 설정",
      bgColor: "bg-blue-50",
      stepColor: "bg-blue-500",
      iconColor: "bg-blue-200"
    },
    {
      step: "2", 
      title: "오퍼월 연동",
      description: "WebView/SDK",
      bgColor: "bg-green-50",
      stepColor: "bg-green-500",
      iconColor: "bg-green-200"
    },
    {
      step: "3",
      title: "실트래픽 테스트", 
      description: "성과 검증",
      bgColor: "bg-yellow-50",
      stepColor: "bg-yellow-500",
      iconColor: "bg-yellow-200"
    },
    {
      step: "4",
      title: "정산 완료",
      description: "Net 정산 개시",
      bgColor: "bg-purple-50",
      stepColor: "bg-purple-500",
      iconColor: "bg-purple-200"
    }
  ];

  return (
    <section className="w-full bg-white py-[40px] sm:py-[60px] lg:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-[36px] sm:gap-[54px] lg:gap-[72px]">
          {/* Section Header */}
          <div className="text-center">
            <h2 
              className="text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[34px] sm:leading-[38px] lg:leading-[44px] text-gray-800 mb-3"
            >
              ADEN의 차별화 포인트
            </h2>
            <p 
              className="text-base sm:text-lg lg:text-xl font-medium leading-6 text-gray-600"
            >
              매체 중심으로 설계된 4가지 핵심 강점
            </p>
          </div>

          {/* Point 1 - Brand Customization */}
          <div id="point-1" className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start transition-all duration-700 ${isPoint1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span 
                    className="text-lg font-medium text-white"
                  >
                    1
                  </span>
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-medium leading-7 text-gray-800"
                >
                  브랜드 맞춤 '광고 같지 않은' UI/UX
                </h3>
              </div>

              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px] text-gray-700"
              >
                <span className="text-gray-600">ADEN은 매체의 앱/웹 디자인 언어를 그대로 반영해</span>
                <span className="text-blue-600"> 광고가 아닌 서비스의 일부처럼 보이는 오퍼월</span>
                <span className="text-gray-600">을 제공합니다.</span>
              </p>

              <div className="bg-blue-50 rounded-base p-4">
                <div className="flex flex-col gap-2">
                  {differentiationPoints[0].benefits?.map((benefit, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-2 transition-all duration-500 ${isPoint1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      {benefit.includes('↓') ? (
                        <MoveDown className="w-4 h-4 text-red-500" strokeWidth={3.5}/>
                      ) : (
                        <MoveUp className="w-4 h-4 text-emerald-500" strokeWidth={3.5}/>
                      )}
                      <span 
                        className="text-sm sm:text-base font-medium text-blue-800"
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px] text-blue-600"
              >
                매체의 브랜드 아이덴티티에 완벽히 녹아드는 커스터마이징.<br/>
                ADEN의 오퍼월은 유저의 하루 루틴 안으로 자연스럽게 스며듭니다.
              </p>

              <div className="w-full max-w-[592px] h-[58px] bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center">
                <p className="font-medium text-[20px] leading-[24px] text-center text-blue-800">
                  "AD is embedded in your platform"
                </p>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="w-full lg:w-[48%] order-2">
              <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_10px_15px_rgba(0,0,0,0.1)] max-w-[592px] transition-all duration-700 delay-300 ${isPoint1Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="text-center mb-6">
                  <h4 
                    className="text-lg sm:text-xl font-medium leading-6 text-gray-800"
                  >
                    Before & After 비교
                  </h4>
                </div>

                <div className="flex gap-4">
                  {/* Before */}
                  <div className="w-1/2 bg-gray-100 rounded-base p-4">
                    <div className="text-center mb-3">
                      <span 
                        className="text-sm font-medium text-red-600"
                      >
                        일반 오퍼월
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {['광고 리스트', '광고 배너', '광고 버튼'].map((item, index) => (
                        <div key={index} className="bg-white border border-red-200 rounded p-2">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-red-400 rounded"></div>
                            <span 
                              className="text-xs font-medium text-black"
                            >
                              {item}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* After */}
                  <div className="w-1/2 bg-emerald-50 rounded-base p-4">
                    <div className="text-center mb-3">
                      <span 
                        className="text-sm font-medium text-emerald-600"
                      >
                        ADEN 커스텀
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      {['브랜드 미션', '맞춤 리워드', '브랜드 컬러'].map((item, index) => (
                        <div key={index} className="bg-white border border-emerald-200 rounded p-2">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-emerald-400 rounded"></div>
                            <span 
                              className="text-xs font-medium text-black"
                            >
                              {item}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Point 2 - Inventory */}
          <div id="point-2" className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start transition-all duration-700 ${isPoint2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_10px_15px_rgba(0,0,0,0.1)] max-w-[592px] transition-all duration-700 delay-300 ${isPoint2Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="text-center mb-8">
                  <h3 
                    className="text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[34px] sm:leading-[38px] lg:leading-[44px] text-emerald-600 mb-2"
                  >
                    {missionCount.toLocaleString()}+
                  </h3>
                  <p 
                    className="text-lg sm:text-xl font-medium leading-6 text-gray-800 mb-1"
                  >
                    Daily Missions
                  </p>
                  <p 
                    className="text-sm sm:text-base font-medium leading-5 text-gray-600"
                  >
                    매일 참여 가능한 미션 물량
                  </p>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  {[
                    { label: '대형 매체 (100만+ DAU)', percentage: largeMediaPercent, color: 'emerald' },
                    { label: '중형 매체 (10만+ DAU)', percentage: mediumMediaPercent, color: 'blue' },
                    { label: '소형 매체 (1만+ DAU)', percentage: smallMediaPercent, color: 'purple' }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className={`bg-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'purple'}-50 rounded-base p-3`}
                    >
                      <div className="flex justify-between items-center">
                        <span 
                          className={`text-sm sm:text-base font-medium text-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'purple'}-700`}
                        >
                          {item.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded h-2">
                            <div 
                              className={`h-2 bg-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'purple'}-600 rounded transition-all duration-300 ease-out`}
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                          <span 
                            className={`text-sm font-medium text-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'purple'}-600`}
                          >
                            {item.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span 
                    className="text-lg font-medium text-white"
                  >
                    2
                  </span>
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-medium leading-7 text-gray-800"
                >
                  일일 5백만 타 인벤토리 보유
                </h3>
              </div>

              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px]"
              >
                <span className="text-emerald-600">일일 5,000,000회 이상 참여 가능한 미션 물량 확보.</span>
                <span className="text-gray-700"> 매체의 DAU/MAU에 맞춰 최적화된 참여량을 자동 배분합니다.</span>
              </p>

              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px] text-gray-700"
              >
                대형 매체에만 집중되는 기존 관행을 탈피해, 모든 제휴 매체가 균등하게 참여할 수 있도록 설계되었습니다.
              </p>

              <div className="w-full max-w-[592px] h-[58px] bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center">
                <p className="font-medium text-[20px] leading-[24px] text-center text-emerald-800">
                  "Fair Distribution"
                </p>
              </div>
            </div>
          </div>

          {/* Point 3 - Transparent Settlement */}
          <div id="point-3" className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start transition-all duration-700 ${isPoint3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span 
                    className="text-lg font-medium text-white"
                  >
                    3
                  </span>
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-medium leading-7 text-gray-800"
                >
                  투명한 정산 구조
                </h3>
              </div>

              <p
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px]"
              >
                <span className="text-purple-600">기존 오퍼월들의 불리한 계약에서 벗어나세요.</span>
              </p>

              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px] text-black"
              >
                랭킹상승형에만 집중하여 미션 수익 분배율을 사전 공개하고,<br />
                매체 전용 대시보드에서 실시간으로 열람할 수 있습니다.<br />
                매체 수익과 광고주의 실성과를 1:1로 연결합니다.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-base p-4 text-center">
                <span 
                  className="text-lg sm:text-xl font-medium text-purple-700"
                >
                  "정산의 모든 단계가 투명히 열려 있습니다."
                </span>
              </div>
            </div>

            <div className="w-full lg:w-[48%] order-2">
              <TransparencyFlow isVisible={isPoint3Visible} />
            </div>
          </div>

          {/* Point 4 - Easy Integration */}
          <div id="point-4" className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start transition-all duration-700 ${isPoint4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className={`bg-white rounded-2xl p-8 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] max-w-[592px] transition-all duration-700 delay-300 ${isPoint4Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="text-center mb-[52px]">
                  <h4 
                    className="font-medium text-[20px] leading-[24px] text-center text-gray-900"
                  >
                    4-Step Integration Flow
                  </h4>
                </div>

                <div className="flex flex-col gap-4">
                  {integrationSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className={`${step.bgColor} rounded-lg p-4 h-[76px] flex items-center transition-all duration-500 ${isPoint4Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 ${step.stepColor} rounded-full flex items-center justify-center`}>
                          <span 
                            className="font-medium text-[14px] leading-[17px] text-white"
                          >
                            {step.step}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h5 
                            className="font-medium text-[16px] leading-[19px] text-gray-900 mb-1"
                          >
                            {step.title}
                          </h5>
                          <p 
                            className="font-medium text-[14px] leading-[17px] text-gray-600"
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <span 
                    className="text-lg font-medium text-white"
                  >
                    4
                  </span>
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-medium leading-7 text-gray-800"
                >
                  도입이 쉬운 구조
                </h3>
              </div>

              <p 
                className="text-base font-medium leading-6"
              >
                <span className="text-orange-600">도입에 필요한 개발 리소스를 최소화 </span>
                <span className="text-gray-700">했습니다.</span>
              </p>

              <div className="flex flex-col gap-3">
                {differentiationPoints[3].features?.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 transition-all duration-500 ${isPoint4Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                      <CircleCheck className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h5 
                        className="text-base font-medium text-gray-800 mb-1"
                      >
                        {feature.title}
                      </h5>
                      <p 
                        className="text-sm font-medium text-gray-600"
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p 
                className="text-base font-medium leading-5 text-orange-600"
              >
                매체는 단 2주 만에 PoC 결과를 확인하고 즉시 정산까지 진행할 수 있습니다.
              </p>

              <div className="w-full max-w-[592px] h-[58px] bg-orange-50 border border-orange-200 rounded-lg flex items-center justify-center">
                <p className="font-medium text-[20px] leading-[24px] text-center text-orange-800">
                  "No Man-Hour for Platform"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component for Transparency Flow with client-side state
function TransparencyFlow({ isVisible }: { isVisible: boolean }) {
  const [dailyRevenue, setDailyRevenue] = useState(0);
  const [completionRate, setCompletionRate] = useState(0);
  const [validParticipation, setValidParticipation] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [rankingChange, setRankingChange] = useState(0);

  useEffect(() => {
    if (isVisible && dailyRevenue === 0) {
      // 오늘 매출: ₩2,847,200
      const targetRevenue = 2847200;
      const duration = 1500;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      
      let frame = 0;
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeProgress * targetRevenue);
        
        if (frame >= totalFrames) {
          setDailyRevenue(targetRevenue);
          clearInterval(timer);
        } else {
          setDailyRevenue(currentValue);
        }
      }, frameRate);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && completionRate === 0) {
      // 완료율: 94.2%
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 0.3;
          if (current >= 94.2) {
            setCompletionRate(94.2);
            clearInterval(timer);
          } else {
            setCompletionRate(parseFloat(current.toFixed(1)));
          }
        }, 5);
      }, 5);

      // 유효 참여: 1,247건
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 15;
          if (current >= 1247) {
            setValidParticipation(1247);
            clearInterval(timer);
          } else {
            setValidParticipation(current);
          }
        }, 15);
      }, 400);

      // 차감 내역: 23건
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 1;
          if (current >= 23) {
            setDeductions(23);
            clearInterval(timer);
          } else {
            setDeductions(current);
          }
        }, 30);
      }, 600);

      // 순위 변화: +6.2%
      setTimeout(() => {
        let current = 0;
        const timer = setInterval(() => {
          current += 0.2;
          if (current >= 6.2) {
            setRankingChange(6.2);
            clearInterval(timer);
          } else {
            setRankingChange(parseFloat(current.toFixed(1)));
          }
        }, 25);
      }, 800);
    }
  }, [isVisible]);

  return (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_10px_15px_rgba(0,0,0,0.1)] max-w-[592px] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="text-center mb-6">
        <h4 
          className="text-lg sm:text-xl font-medium leading-6 text-gray-800"
        >
          Data Transparency Flow
        </h4>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="w-1/2 bg-emerald-50 rounded-base p-4 text-center">
          <div 
            className="text-xl sm:text-2xl font-medium text-emerald-600 mb-1"
          >
            ₩{dailyRevenue.toLocaleString()}
          </div>
          <div 
            className="text-sm font-medium text-gray-600"
          >
            오늘 매출
          </div>
        </div>
        <div className="w-1/2 bg-blue-50 rounded-base p-4 text-center">
          <div 
            className="text-xl sm:text-2xl font-medium text-blue-600 mb-1"
          >
            {completionRate.toFixed(1)}%
          </div>
          <div 
            className="text-sm font-medium text-gray-600"
          >
            완료율
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-emerald-50 p-3 flex justify-between items-center rounded-lg border-l-3 border-emerald-600">
          <span 
            className="text-sm font-medium text-emerald-700"
          >
            유효 참여
          </span>
          <span 
            className="text-base font-medium text-emerald-600"
          >
            {validParticipation.toLocaleString()}건
          </span>
        </div>
        <div className="bg-red-50 p-3 flex justify-between items-center rounded-lg border-l-3 border-red-600">
          <span 
            className="text-sm font-medium text-red-700"
          >
            차감 내역
          </span>
          <span 
            className="text-base font-medium text-red-600"
          >
            {deductions}건
          </span>
        </div>
        <div className="bg-purple-50 p-3 flex justify-between items-center rounded-lg border-l-3 border-purple-600">
          <span 
            className="text-sm font-medium text-purple-700"
          >
            유저 유입률 변화
          </span>
          <span 
            className="text-base font-medium text-purple-600"
          >
            +{rankingChange.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}
