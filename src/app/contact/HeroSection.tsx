'use client';
import { Building, Smartphone, CircleCheck } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="w-full bg-gradient-to-br from-[#169B68] from-15% to-[#F5F97F] to-85% relative">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] py-[60px] lg:py-[80px]">
            {/* Header */}
            <div className="text-center mb-[64px]">
              <h1 className="text-white text-[64px] font-bold leading-[40px] mb-[34px]" style={{ fontFamily: 'Noto Sans KR' }}>
                어떤 도움이 필요하신가요?
              </h1>
              <p className="text-white text-[36px] font-medium leading-[28px]" style={{ fontFamily: 'Noto Sans KR' }}>
                목적에 맞는 상담을 받아보세요
              </p>
            </div>

            {/* Cards Container */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center max-w-[1024px] mx-auto">
              {/* 광고주 Card */}
              <div className="w-full lg:w-[496px] bg-white/80 border border-white/20 rounded-2xl p-[33px] relative">
                {/* Icon */}
                <div className="flex justify-center mb-[24px]">
                  <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#60A5FA] to-[#2563EB] flex items-center justify-center">
                    <Building size={36} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#111827] text-[24px] font-medium leading-[29px] text-center mb-[16px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  광고주
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] text-[16px] font-medium leading-[19px] text-center mb-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  성과 기반 CPA 광고로 확실한 ROI를 경험하세요
                </p>

                {/* Features List */}
                <div className="space-y-[12px] mb-[24px]">
                  <div className="flex items-center">
                    <CircleCheck size={16} className="text-[#3B82F6] mr-3 flex-shrink-0" />
                    <span className="text-[#374151] text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      랭킹 부스팅 캠페인
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck size={16} className="text-[#3B82F6] mr-3 flex-shrink-0" />
                    <span className="text-[#374151] text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      투명한 매체 지정
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck size={16} className="text-[#3B82F6] mr-3 flex-shrink-0" />
                    <span className="text-[#374151] text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      실시간 정산 대시보드
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck size={16} className="text-[#3B82F6] mr-3 flex-shrink-0" />
                    <span className="text-[#374151] text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      어뷰징 방지 시스템
                    </span>
                  </div>
                </div>

                {/* CTA Badge */}
                <div className="w-full h-[56px] bg-[#169B68] rounded-lg flex items-center justify-center">
                  <p className="text-white text-[16px] font-bold leading-[19px] text-center" style={{ fontFamily: 'Noto Sans KR' }}>
                    "성과로 증명되는 광고"
                  </p>
                </div>
              </div>

              {/* 매체 파트너 Card */}
              <div className="w-full lg:w-[496px] bg-white/80 border border-white/20 rounded-2xl p-[33px] relative">
                {/* Icon */}
                <div className="flex justify-center mb-[24px]">
                  <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-br from-[#34D399] to-[#059669] flex items-center justify-center">
                    <Smartphone size={36} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#111827] text-[24px] font-medium leading-[29px] text-center mb-[16px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  매체 파트너
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] text-[16px] font-medium leading-[19px] text-center mb-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  매체 중심의 새로운 수익 생태계에 참여하세요
                </p>

                {/* Features List */}
                <div className="space-y-[12px] mb-[24px]">
                  <div className="flex items-center">
                    <CircleCheck size={16} className="text-[#10B981] mr-3 flex-shrink-0" />
                    <span className="text-[#374151] text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      브랜드 맞춤 UI/UX
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck size={16} className="text-[#10B981] mr-3 flex-shrink-0" />
                    <span className="text-[#374151] text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      500만+ 일일 인벤토리
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck size={16} className="text-[#10B981] mr-3 flex-shrink-0" />
                    <span className="text-[#374151] text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      SDK-less 2주 PoC
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CircleCheck size={16} className="text-[#10B981] mr-3 flex-shrink-0" />
                    <span className="text-[#374151] text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      Net-7 빠른 정산
                    </span>
                  </div>
                </div>

                {/* CTA Badge */}
                <div className="w-full h-[56px] bg-[#169B68] rounded-lg flex items-center justify-center">
                  <p className="text-white text-[16px] font-bold leading-[19px] text-center" style={{ fontFamily: 'Noto Sans KR' }}>
                    "매체와 함께 성장하는 파트너십"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
