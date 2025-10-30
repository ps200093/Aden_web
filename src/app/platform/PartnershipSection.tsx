'use client';
import Button from '@/components/ui/Button';
import type { IntegrationStep } from '@/types';
import { Send, Settings, ChartBar, Rocket, Handshake } from 'lucide-react';

export default function PartnershipSection() {
  const handleContactClick = () => {
    // Handle contact form submission
  };
  const partnershipSteps = [
    {
      step: "1",
      title: "제휴 신청",
      description: "문의 등록 및 매체사 기본정보 전달",
      bgColor: "bg-[#EFF6FF]",
      stepColor: "bg-[#3B82F6]",
      iconColor: "text-[#3B82F6]",
      icon: Send
    },
    {
      step: "2",
      title: "PoC 세팅", 
      description: "파라미터·서명키 교환, WebView/링크 연동",
      bgColor: "bg-[#ECFDF5]",
      stepColor: "bg-[#10B981]",
      iconColor: "text-[#10B981]",
      icon: Settings
    },
    {
      step: "3",
      title: "실 트래픽 테스트",
      description: "14일간 참여율 및 수익 검증", 
      bgColor: "bg-[#FEFCE8]",
      stepColor: "bg-[#EAB308]",
      iconColor: "text-[#EAB308]",
      icon: ChartBar
    },
    {
      step: "4",
      title: "정식 런칭",
      description: "SDK/웹앱 전환, Net-7 정산 개시",
      bgColor: "bg-[#FAF5FF]", 
      stepColor: "bg-[#A855F7]",
      iconColor: "text-[#A855F7]",
      icon: Rocket
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-[40px] sm:py-[60px] lg:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[64px]">
          {/* Section Header */}
          <div className="text-center">
            <h2 
              className="text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[34px] sm:leading-[38px] lg:leading-[44px] text-gray-800 mb-3"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              매체 제휴 프로세스
            </h2>
            <p 
              className="text-base sm:text-lg lg:text-xl font-medium leading-6 text-gray-600"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              ADEN 오퍼월 도입은 단 4단계면 충분합니다
            </p>
          </div>

          {/* Partnership Steps */}
          <div className="bg-white rounded-2xl p-8 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {partnershipSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${step.stepColor} rounded-full flex items-center justify-center mb-4`}>
                    <span 
                      className="text-[20px] font-medium leading-[24px] text-white"
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3 
                    className="text-[18px] font-medium leading-[28px] text-[#111827] mb-5"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    {step.title}
                  </h3>
                  <div className="flex flex-col items-center gap-[10px]">
                    <p 
                      className="text-[14px] font-medium leading-[20px] text-[#4B5563]"
                      style={{ fontFamily: 'Noto Sans KR' }}
                    >
                      {step.description}
                    </p>
                    <div className={`${step.bgColor} rounded-lg w-[268px] h-[52px] flex items-center justify-center`}>
                      <step.icon className={`w-5 h-6 ${step.iconColor}`} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleContactClick}
                className="bg-[#10B981] hover:bg-emerald-700 text-white rounded-lg h-12 px-8 inline-flex items-center justify-center gap-2"
              >
                <Handshake className="w-5 h-4 text-white" strokeWidth={2.5} />
                <span 
                  className="text-[16px] font-medium leading-[19px]"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  매체 제휴 문의하기
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

