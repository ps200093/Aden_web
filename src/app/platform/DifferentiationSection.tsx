'use client';
import Button from '@/components/ui/Button';
import type { DifferentiationPoint, IntegrationStep } from '@/types';
import { MoveUp, MoveDown, CircleCheck } from 'lucide-react';

export default function DifferentiationSection() {
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
      quote: "정산의 모든 단계가 열려 있습니다."
    },
    {
      id: 4,
      title: "도입이 쉬운 구조",
      description: "도입에 필요한 개발 리소스를 최소화했습니다.",
      features: [
        {
          title: "SDK-less PoC",
          description: "인앱 WebView / 유니버설 링크 방식 → 앱 업데이트 불필요"
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
      conclusion: "매체는 단 2주 만에 PoC 결과를 확인하고 즉시 정산까지 진행할 수 있습니다."
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
      title: "링크 연동",
      description: "WebView/유니버설 링크",
      bgColor: "bg-green-50",
      stepColor: "bg-green-500",
      iconColor: "bg-green-200"
    },
    {
      step: "3",
      title: "실트래픽 테스트", 
      description: "14일간 성과 검증",
      bgColor: "bg-yellow-50",
      stepColor: "bg-yellow-500",
      iconColor: "bg-yellow-200"
    },
    {
      step: "4",
      title: "정산 완료",
      description: "Net-7 정산 개시",
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
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              ADEN의 차별화 포인트
            </h2>
            <p 
              className="text-base sm:text-lg lg:text-xl font-medium leading-6 text-gray-600"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              매체 중심으로 설계된 4가지 핵심 강점
            </p>
          </div>

          {/* Point 1 - Brand Customization */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span 
                    className="text-lg font-medium text-white"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    1
                  </span>
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-medium leading-7 text-gray-800"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  브랜드 맞춤 '광고 같지 않은' UI/UX
                </h3>
              </div>

              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px] text-gray-700"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                <span className="text-gray-600">ADEN은 매체의 앱/웹 디자인 언어를 그대로 반영해</span>
                <span className="text-blue-600"> 광고가 아닌 서비스의 일부처럼 보이는 오퍼월</span>
                <span className="text-gray-600">을 제공합니다.</span>
              </p>

              <div className="bg-blue-50 rounded-base p-4">
                <div className="flex flex-col gap-2">
                  {differentiationPoints[0].benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {benefit.includes('↓') ? (
                        <MoveDown className="w-4 h-4 text-red-500" strokeWidth={3.5}/>
                      ) : (
                        <MoveUp className="w-4 h-4 text-emerald-500" strokeWidth={3.5}/>
                      )}
                      <span 
                        className="text-sm sm:text-base font-medium text-blue-800"
                        style={{ fontFamily: 'Noto Sans KR' }}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px] text-blue-600"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                매체의 브랜드 아이덴티티에 완벽히 녹아드는 커스터마이징. ADEN의 오퍼월은 유저의 하루 루틴 안으로 자연스럽게 스며듭니다.
              </p>

              <div className="w-full max-w-[592px] h-[58px] bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center">
                <p className="font-['Noto_Sans_KR'] font-medium text-[20px] leading-[24px] text-center text-blue-800">
                  "Ad looks like your brand."
                </p>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="w-full lg:w-[48%]">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_10px_15px_rgba(0,0,0,0.1)] max-w-[592px]">
                <div className="text-center mb-6">
                  <h4 
                    className="text-lg sm:text-xl font-medium leading-6 text-gray-800"
                    style={{ fontFamily: 'Noto Sans KR' }}
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
                        style={{ fontFamily: 'Noto Sans KR' }}
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
                              style={{ fontFamily: 'Noto Sans KR' }}
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
                        style={{ fontFamily: 'Noto Sans KR' }}
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
                              style={{ fontFamily: 'Noto Sans KR' }}
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
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_10px_15px_rgba(0,0,0,0.1)] max-w-[592px]">
                <div className="text-center mb-8">
                  <h3 
                    className="text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[34px] sm:leading-[38px] lg:leading-[44px] text-emerald-600 mb-2"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    5,000,000+
                  </h3>
                  <p 
                    className="text-lg sm:text-xl font-medium leading-6 text-gray-800 mb-1"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    Daily Missions
                  </p>
                  <p 
                    className="text-sm sm:text-base font-medium leading-5 text-gray-600"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    매일 참여 가능한 미션 물량
                  </p>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  {[
                    { label: '대형 매체 (100만+ DAU)', percentage: '85%', color: 'emerald' },
                    { label: '중형 매체 (10만+ DAU)', percentage: '82%', color: 'blue' },
                    { label: '소형 매체 (1만+ DAU)', percentage: '78%', color: 'purple' }
                  ].map((item, index) => (
                    <div key={index} className={`bg-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'purple'}-50 rounded-base p-3`}>
                      <div className="flex justify-between items-center">
                        <span 
                          className={`text-sm sm:text-base font-medium text-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'purple'}-700`}
                          style={{ fontFamily: 'Noto Sans KR' }}
                        >
                          {item.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 rounded h-2">
                            <div 
                              className={`h-2 bg-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'purple'}-600 rounded`}
                              style={{ width: item.percentage }}
                            ></div>
                          </div>
                          <span 
                            className={`text-sm font-medium text-${item.color === 'emerald' ? 'emerald' : item.color === 'blue' ? 'blue' : 'purple'}-600`}
                            style={{ fontFamily: 'Noto Sans KR' }}
                          >
                            {item.percentage}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-50 rounded-base p-4 text-center">
                  <span 
                    className="text-lg sm:text-xl font-medium text-emerald-700"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    모든 제휴 매체 균등 분배
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span 
                    className="text-lg font-medium text-white"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    2
                  </span>
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-medium leading-7 text-gray-800"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  일일 5백만 타 인벤토리 보유
                </h3>
              </div>

              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px]"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                <span className="text-emerald-600">일일 5,000,000회 이상 참여 가능한 미션 물량 확보.</span>
                <span className="text-gray-700"> 매체의 DAU/MAU에 맞춰 최적화된 참여량을 자동 배분합니다.</span>
              </p>

              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px] text-gray-700"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                대형 매체에만 집중되는 기존 관행을 탈피해, 모든 제휴 매체가 균등하게 참여할 수 있도록 설계되었습니다.
              </p>
            </div>
          </div>

          {/* Point 3 - Transparent Settlement */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span 
                    className="text-lg font-medium text-white"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    3
                  </span>
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-medium leading-7 text-gray-800"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  투명한 정산 구조
                </h3>
              </div>

              <p
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px]"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                <span className="text-purple-600">기존 오퍼월들의 불리한 계약에서 벗어나세요.</span>
              </p>

              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px] text-black"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                랭킹상승형에만 집중하여 미션 수익 분배율을 사전 공개하고,<br />
                매체 전용 대시보드에서 실시간으로 열람할 수 있습니다.<br />
                매체 수익과 광고주의 실성과를 1:1로 연결합니다.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-base p-4 text-center">
                <span 
                  className="text-lg sm:text-xl font-medium text-purple-700"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  "정산의 모든 단계가 투명히 열려 있습니다."
                </span>
              </div>
            </div>

            <div className="w-full lg:w-[48%]">
              <TransparencyFlow />
            </div>
          </div>

          {/* Point 4 - Easy Integration */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] max-w-[592px]">
                <div className="text-center mb-[52px]">
                  <h4 
                    className="font-['Noto_Sans_KR'] font-medium text-[20px] leading-[24px] text-center text-gray-900"
                  >
                    4-Step Integration Flow
                  </h4>
                </div>

                <div className="flex flex-col gap-4">
                  {integrationSteps.map((step, index) => (
                    <div key={index} className={`${step.bgColor} rounded-lg p-4 h-[76px] flex items-center`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 ${step.stepColor} rounded-full flex items-center justify-center`}>
                          <span 
                            className="font-['Noto_Sans_KR'] font-medium text-[14px] leading-[17px] text-white"
                          >
                            {step.step}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h5 
                            className="font-['Noto_Sans_KR'] font-medium text-[16px] leading-[19px] text-gray-900 mb-1"
                          >
                            {step.title}
                          </h5>
                          <p 
                            className="font-['Noto_Sans_KR'] font-medium text-[14px] leading-[17px] text-gray-600"
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="w-full h-[56px] bg-orange-50 rounded-lg flex items-center justify-center">
                    <p className="font-['Noto_Sans_KR'] font-medium text-[20px] leading-[24px] text-center text-orange-900">
                      "매체 내부 리소스 투입 최소화"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <span 
                    className="text-lg font-medium text-white"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    4
                  </span>
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-medium leading-7 text-gray-800"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  도입이 쉬운 구조
                </h3>
              </div>

              <p 
                className="text-base font-medium leading-6"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                <span className="text-orange-600">도입에 필요한 개발 리소스를 최소화 </span>
                <span className="text-gray-700">했습니다.</span>
              </p>

              <div className="flex flex-col gap-3">
                {differentiationPoints[3].features?.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                      <CircleCheck className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h5 
                        className="text-base font-medium text-gray-800 mb-1"
                        style={{ fontFamily: 'Noto Sans KR' }}
                      >
                        {feature.title}
                      </h5>
                      <p 
                        className="text-sm font-medium text-gray-600"
                        style={{ fontFamily: 'Noto Sans KR' }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p 
                className="text-base font-medium leading-5 text-orange-600"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                매체는 단 2주 만에 PoC 결과를 확인하고 즉시 정산까지 진행할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component for Transparency Flow with client-side state
function TransparencyFlow() {
  const [dailyRevenue, setDailyRevenue] = useState('₩2,847,200');
  const [completionRate, setCompletionRate] = useState('94.2%');

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_10px_15px_rgba(0,0,0,0.1)] max-w-[592px]">
      <div className="text-center mb-6">
        <h4 
          className="text-lg sm:text-xl font-medium leading-6 text-gray-800"
          style={{ fontFamily: 'Noto Sans KR' }}
        >
          Data Transparency Flow
        </h4>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="w-1/2 bg-emerald-50 rounded-base p-4 text-center">
          <div 
            className="text-xl sm:text-2xl font-medium text-emerald-600 mb-1"
            style={{ fontFamily: 'Noto Sans KR' }}
          >
            {dailyRevenue}
          </div>
          <div 
            className="text-sm font-medium text-gray-600"
            style={{ fontFamily: 'Noto Sans KR' }}
          >
            오늘 매출
          </div>
        </div>
        <div className="w-1/2 bg-blue-50 rounded-base p-4 text-center">
          <div 
            className="text-xl sm:text-2xl font-medium text-blue-600 mb-1"
            style={{ fontFamily: 'Noto Sans KR' }}
          >
            {completionRate}
          </div>
          <div 
            className="text-sm font-medium text-gray-600"
            style={{ fontFamily: 'Noto Sans KR' }}
          >
            완료율
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-emerald-50 p-3 flex justify-between items-center rounded-lg border-l-3 border-emerald-600">
          <span 
            className="text-sm font-medium text-emerald-700"
            style={{ fontFamily: 'Noto Sans KR' }}
          >
            유효 참여
          </span>
          <span 
            className="text-base font-medium text-emerald-600"
            style={{ fontFamily: 'Noto Sans KR' }}
          >
            1,247건
          </span>
        </div>
        <div className="bg-red-50 p-3 flex justify-between items-center rounded-lg border-l-3 border-red-600">
          <span 
            className="text-sm font-medium text-red-700"
            style={{ fontFamily: 'Noto Sans KR' }}
          >
            차감 내역
          </span>
          <span 
            className="text-base font-medium text-red-600"
            style={{ fontFamily: 'Noto Sans KR' }}
          >
            23건
          </span>
        </div>
        <div className="bg-purple-50 p-3 flex justify-between items-center rounded-lg border-l-3 border-purple-600">
          <span 
            className="text-sm font-medium text-purple-700"
            style={{ fontFamily: 'Noto Sans KR' }}
          >
            순위 변화
          </span>
          <span 
            className="text-base font-medium text-purple-600"
            style={{ fontFamily: 'Noto Sans KR' }}
          >
            +6.2%
          </span>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';

