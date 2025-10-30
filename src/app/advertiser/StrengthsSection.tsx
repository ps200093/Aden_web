'use client';
import Button from '@/components/ui/Button';
import { Shield, Check } from 'lucide-react';

export default function StrengthsSection() {
  return (
    <section className="w-full bg-background-secondary overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px] sm:py-[60px] md:py-[80px]">
          {/* Header */}
          <div className="w-full text-center mb-[32px] sm:mb-[48px] md:mb-[74px]">
            <h2 
              className="w-full font-medium text-center text-[#111827] mb-4"
              style={{ 
                fontFamily: 'Noto Sans KR', 
                fontStyle: 'normal',
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                lineHeight: '1.2'
              }}
            >
              왜 ADEN인가?
            </h2>
            <p 
              className="w-full font-medium text-center text-[#4B5563]"
              style={{ 
                fontFamily: 'Noto Sans KR', 
                fontStyle: 'normal',
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '28px'
              }}
            >
              업계 최고 수준의 기술력과 투명성으로 완성된 광고 플랫폼
            </p>
          </div>

          {/* Strength 1 */}
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 mb-[32px] sm:mb-[48px] md:mb-[64px] items-center">
            {/* Left Content */}
            <div className="w-full max-w-[592px] flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[48px] h-[48px] bg-[#10B981] rounded-full flex items-center justify-center flex-shrink-0">
                  <span 
                    className="text-[18px] font-medium leading-[22px] text-white"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    1
                  </span>
                </div>
                <h3 
                  className="text-[24px] font-medium leading-[32px] text-[#111827]"
                  style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                >
                  독자적 서비스 개발로 리스크 제로
                </h3>
              </div>
              <p 
                className="text-[20px] font-medium leading-[30px] mb-6"
                style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
              >
                <span className="text-[#059669]">절대 미달이 없는 구조</span><br />
                <span className="text-black">광고 발주량 이상의 트래픽을 자체적으로 발생시켜 미달을 미연에 방지합니다.</span><br />
                <span className="text-black">모든 참여 데이터는 실시간 모니터링되며,</span> <br />
                <span className="text-black">부정 유입(Fraud) 및 자동화 트래픽은 방화벽 레벨에서 차단합니다.</span>
              </p>
              <div 
                className="w-full bg-[#ECFDF5] border border-[#A7F3D0] rounded-[8px] p-4"
              >
                <p 
                  className="text-[16px] font-medium leading-[19px] text-center text-[#065F46]"
                  style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                >
                  "No underdelivery. No inflated traffic."
                </p>
              </div>
            </div>

            {/* Right Content - Firewall Card */}
            <div className="w-full max-w-[592px] flex-1">
              <div className="w-full bg-white rounded-[16px] p-8" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)' }}>
                {/* Header with Icon */}
                <div className="flex flex-col items-center mb-8">
                  <div className="w-[100.58px] h-[100.58px] rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 70.71%)', opacity: 0.99 }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative w-[31.42px] h-[31.42px]">
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
                    className="text-[20px] font-medium leading-[28px] text-center text-[#111827]"
                    style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                  >
                    EDEN Firewall in Action
                  </h4>
                </div>

                {/* Status Cards */}
                <div className="space-y-3">
                  {/* Fraud Traffic */}
                  <div className="w-full bg-[#FEF2F2] rounded-[8px] px-3 py-[14px] flex items-center justify-between">
                    <span 
                      className="text-[16px] font-medium leading-[19px] text-[#B91C1C]"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      Fraud Traffic
                    </span>
                    <span className="bg-[#EF4444] rounded-full px-4 py-1.5">
                      <span 
                        className="text-[14px] font-medium leading-[17px] text-center text-white"
                        style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                      >
                        REJECTED
                      </span>
                    </span>
                  </div>

                  {/* Bot Activity */}
                  <div className="w-full bg-[#FEF2F2] rounded-[8px] px-3 py-[14px] flex items-center justify-between">
                    <span 
                      className="text-[16px] font-medium leading-[19px] text-[#B91C1C]"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      Bot Activity
                    </span>
                    <span className="bg-[#EF4444] rounded-full px-4 py-1.5">
                      <span 
                        className="text-[14px] font-medium leading-[17px] text-center text-white"
                        style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                      >
                        BLOCKED
                      </span>
                    </span>
                  </div>

                  {/* Valid User */}
                  <div className="w-full bg-[#ECFDF5] rounded-[8px] px-3 py-[14px] flex items-center justify-between">
                    <span 
                      className="text-[16px] font-medium leading-[19px] text-[#047857]"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      Valid User
                    </span>
                    <span className="bg-[#10B981] rounded-full px-4 py-1.5">
                      <span 
                        className="text-[14px] font-medium leading-[17px] text-center text-white"
                        style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
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
          <div className="w-full flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 mb-[32px] sm:mb-[48px] md:mb-[64px] items-center">
            {/* Left Content - Dashboard Card */}
            <div className="w-full max-w-[592px] flex-1">
              <div className="w-full bg-white rounded-[16px] p-8" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)' }}>
                <h4 
                  className="text-[20px] font-medium leading-[28px] text-center text-[#111827] mb-6"
                  style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                >
                  매체 지정 대시보드
                </h4>

                <div className="space-y-4 mb-4">
                  {/* Active Media Items */}
                  <div className="w-full border border-[#e5e7eb] rounded-[8px] flex justify-between items-center px-[16px] py-5">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[20px] h-[20px] bg-[#3b82f6] rounded-[4px] flex items-center justify-center flex-shrink-0">
                        <Check className="w-[14px] h-[14px] text-white" strokeWidth={3} />
                      </div>
                      <span 
                        className="text-[16px] font-medium leading-[20px] text-[#374151]"
                        style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                      >
                        카카오뱅크 앱
                      </span>
                    </div>
                    <span 
                      className="text-[14px] font-medium leading-[17px] text-[#6b7280] whitespace-nowrap"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      활성 매체
                    </span>
                  </div>

                  <div className="w-full border border-[#e5e7eb] rounded-[8px] flex justify-between items-center px-[16px] py-5">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[20px] h-[20px] bg-[#3b82f6] rounded-[4px] flex items-center justify-center flex-shrink-0">
                        <Check className="w-[14px] h-[14px] text-white" strokeWidth={3} />
                      </div>
                      <span 
                        className="text-[16px] font-medium leading-[20px] text-[#374151]"
                        style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                      >
                        배달의민족
                      </span>
                    </div>
                    <span 
                      className="text-[14px] font-medium leading-[17px] text-[#6b7280] whitespace-nowrap"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      활성 매체
                    </span>
                  </div>

                  <div className="w-full border border-[#e5e7eb] rounded-[8px] flex justify-between items-center px-[16px] py-5">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[20px] h-[20px] bg-white border border-black rounded-[4px] flex-shrink-0"></div>
                      <span 
                        className="text-[16px] font-medium leading-[20px] text-[#374151]"
                        style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                      >
                        토스 앱
                      </span>
                    </div>
                    <span 
                      className="text-[14px] font-medium leading-[17px] text-[#6b7280] whitespace-nowrap"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      선택 가능
                    </span>
                  </div>
                </div>

                <div 
                  className="w-full bg-[#DBEAFE] border border-[#93C5FD] rounded-[8px] p-4"
                >
                  <p className="w-full flex items-center justify-center">
                    <span 
                      className="text-[16px] font-medium leading-[19px] text-center text-[#1e40af]"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      "Your Ad. Your Choice."
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full max-w-[592px] flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[48px] h-[48px] bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0">
                  <span 
                    className="text-[18px] font-medium leading-[22px] text-white"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    2
                  </span>
                </div>
                <h3 
                  className="text-[24px] font-medium leading-[32px] text-[#111827]"
                  style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                >
                  매체 지정이 가능한 투명한 노출 구조
                </h3>
              </div>
              <p 
                className="text-[20px] font-medium leading-[30px]"
                style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
              >
                <span className="text-black">기존 오퍼월은 광고주가 본인의 광고가<br />어디에 노출되는지조차 알 수 없었습니다.</span><br />
                <span className="text-black">ADEN은 다릅니다. 광고주는 노출 매체<br />리스트를 확인하고, 원하는 매체를 직접 지정 할 수 있습니다.</span><br />
              </p>
            </div>
          </div>

          {/* Strength 3 */}
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full max-w-[592px] flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[48px] h-[48px] bg-[#a855f7] rounded-full flex items-center justify-center flex-shrink-0">
                  <span 
                    className="text-[18px] font-medium leading-[22px] text-white"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    3
                  </span>
                </div>
                <h3 
                  className="text-[24px] font-medium leading-[32px] text-[#111827]"
                  style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                >
                  24시간 정산 페이지 제공
                </h3>
              </div>
              <p 
                className="text-[20px] font-medium leading-[30px]"
                style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
              >
                <span className="text-black">광고주는 전용 어드민을 통해 실시간 집행 현황, 참여 로그, 정산 금액을 확인할 수 있습니다.</span><br />
                <span className="text-black">불투명한 "월 단위 보고서"가 아닌, 언제든 확인 가능한 체계적 정산 프로세스</span>
              </p>
            </div>

            {/* Right Content - Dashboard Card */}
            <div className="w-full max-w-[592px] flex-1">
              <div className="w-full bg-white rounded-[16px] p-8" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)' }}>
                <h4 
                  className="text-[20px] font-medium leading-[28px] text-center text-[#111827] mb-6"
                  style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                >
                  실시간 대시보드
                </h4>

                <div className="flex gap-[16px] mb-6">
                  <div className="flex-1 bg-[#ECFDF5] rounded-[8px] p-[16px]">
                    <div className="text-[24px] font-medium leading-[29px] text-[#059669] mb-[8px] text-center" style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}>
                      1,247
                    </div>
                    <div className="text-[14px] font-medium leading-[17px] text-[#4b5563] text-center" style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}>
                      오늘 참여 수
                    </div>
                  </div>
                  <div className="flex-1 bg-[#DBEAFE] rounded-[8px] p-[16px]">
                    <div className="text-[24px] font-medium leading-[29px] text-[#2563eb] mb-[8px] text-center" style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}>
                      87.3%
                    </div>
                    <div className="text-[14px] font-medium leading-[17px] text-[#4b5563] text-center" style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}>
                      미션 완료율
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="w-full bg-[#ECFDF5] rounded-[8px] border-l-[3px] border-l-[#10B981] flex justify-between items-center px-[12px] py-[16px]">
                    <span 
                      className="text-[16px] font-medium leading-[20px] text-[#047857]"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      유효 트래픽
                    </span>
                    <span 
                      className="text-[16px] font-medium leading-[20px] text-[#059669]"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      94.2%
                    </span>
                  </div>
                  <div className="w-full bg-[#F3E8FF] rounded-[8px] border-l-[3px] border-l-[#a855f7] flex justify-between items-center px-[12px] py-[16px]">
                    <span 
                      className="text-[16px] font-medium leading-[20px] text-[#7e22ce]"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      정산 금액
                    </span>
                    <span 
                      className="text-[16px] font-medium leading-[20px] text-[#9333ea]"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      ₩847,200
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

