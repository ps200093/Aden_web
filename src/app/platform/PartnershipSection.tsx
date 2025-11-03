'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import type { IntegrationStep } from '@/types';
import { Send, Settings, ChartBar, Rocket, Handshake, ArrowRight, ArrowDown } from 'lucide-react';

export default function PartnershipSection() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('partnership-steps');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleContactClick = () => {
    router.push('/contact');
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
      description: "SDK/웹앱 전환, 정산 개시",
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
            >
              매체 제휴 프로세스
            </h2>
            <p 
              className="text-base sm:text-lg lg:text-xl font-medium leading-6 text-gray-600"
            >
              ADEN 오퍼월 도입은 단 4단계면 충분합니다
            </p>
          </div>

          {/* Partnership Steps */}
          <div id="partnership-steps" className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)]">
            {/* Mobile Layout (< sm) */}
            <div className="flex sm:hidden flex-col gap-4 mb-6">
              {/* Row 1: Steps 1 and 2 */}
              <div className="flex items-center gap-3">
                {/* Step 1 */}
                <div 
                  className={`flex-1 flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: '0ms' }}
                >
                  <div className={`w-12 h-12 ${partnershipSteps[0].stepColor} rounded-full flex items-center justify-center mb-3`}>
                    <span 
                      className="text-base font-medium leading-[19px] text-white"
                    >
                      {partnershipSteps[0].step}
                    </span>
                  </div>
                  <h3 
                    className="text-base font-medium leading-[22px] text-[#111827] mb-3 min-h-[22px]"
                  >
                    {partnershipSteps[0].title}
                  </h3>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <p 
                      className="text-xs font-medium leading-[16px] text-[#4B5563] min-h-[32px] flex items-center justify-center"
                    >
                      {partnershipSteps[0].description}
                    </p>
                    <div className={`${partnershipSteps[0].bgColor} rounded-lg w-full h-10 flex items-center justify-center`}>
                      <Send className={`w-4 h-5 ${partnershipSteps[0].iconColor}`} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex items-center justify-center pt-20">
                  <ArrowRight className="w-6 h-6 text-gray-400" strokeWidth={2} />
                </div>
                
                {/* Step 2 */}
                <div 
                  className={`flex-1 flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: '150ms' }}
                >
                  <div className={`w-12 h-12 ${partnershipSteps[1].stepColor} rounded-full flex items-center justify-center mb-3`}>
                    <span 
                      className="text-base font-medium leading-[19px] text-white"
                    >
                      {partnershipSteps[1].step}
                    </span>
                  </div>
                  <h3 
                    className="text-base font-medium leading-[22px] text-[#111827] mb-3 min-h-[22px]"
                  >
                    {partnershipSteps[1].title}
                  </h3>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <p 
                      className="text-xs font-medium leading-[16px] text-[#4B5563] min-h-[32px] flex items-center justify-center"
                    >
                      {partnershipSteps[1].description}
                    </p>
                    <div className={`${partnershipSteps[1].bgColor} rounded-lg w-full h-10 flex items-center justify-center`}>
                      <Settings className={`w-4 h-5 ${partnershipSteps[1].iconColor}`} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Down - positioned under step 2 */}
              <div className="grid grid-cols-2 gap-3">
                <div></div>
                <div className="flex justify-center pl-4">
                  <ArrowDown className="w-6 h-6 text-gray-400" strokeWidth={2} />
                </div>
              </div>

              {/* Row 2: Steps 4 and 3 */}
              <div className="flex items-center gap-3">
                {/* Step 4 */}
                <div 
                  className={`flex-1 flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: '450ms' }}
                >
                  <div className={`w-12 h-12 ${partnershipSteps[3].stepColor} rounded-full flex items-center justify-center mb-3`}>
                    <span 
                      className="text-base font-medium leading-[19px] text-white"
                    >
                      {partnershipSteps[3].step}
                    </span>
                  </div>
                  <h3 
                    className="text-base font-medium leading-[22px] text-[#111827] mb-3 min-h-[22px]"
                  >
                    {partnershipSteps[3].title}
                  </h3>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <p 
                      className="text-xs font-medium leading-[16px] text-[#4B5563] min-h-[32px] flex items-center justify-center"
                    >
                      {partnershipSteps[3].description}
                    </p>
                    <div className={`${partnershipSteps[3].bgColor} rounded-lg w-full h-10 flex items-center justify-center`}>
                      <Rocket className={`w-4 h-5 ${partnershipSteps[3].iconColor}`} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex items-center justify-center pt-20">
                  <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-180" strokeWidth={2} />
                </div>
                
                {/* Step 3 */}
                <div 
                  className={`flex-1 flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <div className={`w-12 h-12 ${partnershipSteps[2].stepColor} rounded-full flex items-center justify-center mb-3`}>
                    <span 
                      className="text-base font-medium leading-[19px] text-white"
                    >
                      {partnershipSteps[2].step}
                    </span>
                  </div>
                  <h3 
                    className="text-base font-medium leading-[22px] text-[#111827] mb-3 min-h-[22px]"
                  >
                    {partnershipSteps[2].title}
                  </h3>
                  <div className="flex flex-col items-center gap-2 w-full">
                    <p 
                      className="text-xs font-medium leading-[16px] text-[#4B5563] min-h-[32px] flex items-center justify-center"
                    >
                      {partnershipSteps[2].description}
                    </p>
                    <div className={`${partnershipSteps[2].bgColor} rounded-lg w-full h-10 flex items-center justify-center`}>
                      <ChartBar className={`w-4 h-5 ${partnershipSteps[2].iconColor}`} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet and Desktop Layout (>= sm) */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {partnershipSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 ${step.stepColor} rounded-full flex items-center justify-center mb-4`}>
                    <span 
                      className="text-lg lg:text-[20px] font-medium leading-[22px] lg:leading-[24px] text-white"
                    >
                      {step.step}
                    </span>
                  </div>
                  <h3 
                    className="text-lg lg:text-[18px] font-medium leading-[25px] lg:leading-[28px] text-[#111827] mb-4 lg:mb-5 min-h-[25px] lg:min-h-[28px]"
                  >
                    {step.title}
                  </h3>
                  <div className="flex flex-col items-center gap-[10px] w-full">
                    <p 
                      className="text-sm lg:text-[14px] font-medium leading-[18px] lg:leading-[20px] text-[#4B5563] min-h-[36px] lg:min-h-[40px] flex items-center justify-center"
                    >
                      {step.description}
                    </p>
                    <div className={`${step.bgColor} rounded-lg w-full max-w-[268px] h-12 lg:h-[52px] flex items-center justify-center`}>
                      <step.icon className={`w-5 h-6 ${step.iconColor}`} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleContactClick}
                className="bg-[#10B981] hover:bg-emerald-700 text-white rounded-lg h-10 sm:h-11 lg:h-12 px-6 sm:px-7 lg:px-8 inline-flex items-center justify-center gap-2"
              >
                <Handshake className="w-4 h-4 sm:w-5 sm:h-4 text-white" strokeWidth={2.5} />
                <span 
                  className="text-sm sm:text-base lg:text-[16px] font-medium leading-[17px] sm:leading-[19px]"
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

