'use client';
import { ShieldX, BotOff, Gamepad2 } from 'lucide-react';

export default function TechnologySection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px] sm:py-[50px] md:py-[58px]">
          {/* Header */}
          <div className="w-full text-center mb-[32px] sm:mb-[48px] md:mb-[62px]">
            <h2 
              className="w-full font-medium text-center text-[#111827] mb-4"
              style={{ 
                fontStyle: 'normal',
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                lineHeight: '1.2'
              }}
            >
              기술력 & 보안
            </h2>
            <p 
              className="w-full font-medium text-center text-[#4B5563]"
              style={{ 
                fontStyle: 'normal',
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '28px'
              }}
            >
              업계 최고 수준의 개발진이 만든 오퍼월 인프라
            </p>
          </div>

          {/* Technology Cards */}
          <div className="flex flex-col md:flex-row gap-[24px] sm:gap-[28px] md:gap-[32px] justify-center">
            {/* Fraud Prevention */}
            <div className="w-full md:w-[388px] bg-[linear-gradient(135deg,#fef2f2_0%,#fee2e2_100%)] rounded-2xl px-[30px] py-[32px]">
              <div className="flex flex-col gap-[16px] items-center mb-[22px] px-[20px] sm:px-[40px] md:px-[56px]">
                <div className="w-[96px] h-[96px] bg-accent-red rounded-full flex items-center justify-center">
                  <ShieldX className="w-[52px] h-[52px] text-white" />
                </div>
                <h3 
                  className="text-[18px] sm:text-[20px] font-medium leading-[22px] sm:leading-[24px] text-center text-[#111827]"
                >
                  어뷰징 차단
                </h3>
              </div>
              <p 
                className="text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[28px] text-left text-[#374151] w-full"
              >
                고질적인 문제인 부정 참여 및 중복 클릭,<br />
                ADEN의 전용 방화벽 시스템으로 원천 차단<br />
                비정상 IP, 매크로 탐지, 행동 패턴 분석까지
              </p>
            </div>

            {/* Cherry Picker Detection */}
            <div className="w-full md:w-[388px] bg-[linear-gradient(135deg,#fff7ed_0%,#ffedd5_100%)] rounded-2xl px-[30px] py-[32px]">
              <div className="flex flex-col gap-[16px] items-center mb-[22px] px-[20px] sm:px-[40px] md:px-[56px]">
                <div className="w-[96px] h-[96px] bg-accent-orange rounded-full flex items-center justify-center">
                  <BotOff className="w-[52px] h-[52px] text-white" />
                </div>
                <h3 
                  className="text-[18px] sm:text-[20px] font-medium leading-[22px] sm:leading-[24px] text-center text-[#111827]"
                >
                  체리피커 선별
                </h3>
              </div>
              <p 
                className="text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[28px] text-left text-[#374151] w-full mb-[20px]"
              >
                반복적으로 리워드만 취득하는 체리피커는<br />
                AI 행동 분석을 통해 실시간 필터링<br />
                광고 예산이 "진짜 유저"에게만 집행
              </p>
            </div>

            {/* Gamification */}
            <div className="w-full md:w-[388px] bg-[linear-gradient(135deg,#faf5ff_0%,#f3e8ff_100%)] rounded-2xl px-[30px] py-[32px]">
              <div className="flex flex-col gap-[16px] items-center mb-[22px] px-[20px] sm:px-[40px] md:px-[56px]">
                <div className="w-[96px] h-[96px] bg-accent-purple rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-[52px] h-[52px] text-white" />
                </div>
                <h3 
                  className="text-[18px] sm:text-[20px] font-medium leading-[22px] sm:leading-[24px] text-center text-[#111827]"
                >
                  게이미피케이션
                </h3>
              </div>
              <p 
                className="text-[14px] sm:text-[16px] font-medium leading-[20px] sm:leading-[28px] text-left text-[#374151] w-full"
              >
                빙고·룰렛·보물찾기 등 간단한 게임형 미션으로<br />
                참여율과 재미를 함께 향상하고,<br />
                오퍼월 자체 비용으로 추가 리워드 제공
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

