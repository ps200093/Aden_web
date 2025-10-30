'use client';
import Button from '@/components/ui/Button';
import { Store, Scissors, ShoppingBag } from 'lucide-react';

export default function SMBSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px] sm:py-[60px] md:py-[80px]">
          {/* Header */}
          <div className="flex flex-col gap-[12px] items-center mb-[32px] sm:mb-[48px] md:mb-[64px] text-center">
            <h2 
              className="w-full font-medium text-center text-[#111827]"
              style={{ 
                fontFamily: 'Noto Sans KR', 
                fontStyle: 'normal',
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                lineHeight: '1.2'
              }}
            >
              대형 광고주는 물론, 중소 소상공인까지
            </h2>
            <p 
              className="w-full max-w-[690px] font-medium text-center text-[#4B5563] px-4"
              style={{ 
                fontFamily: 'Noto Sans KR', 
                fontStyle: 'normal',
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '1.4'
              }}
            >
              ADEN은 광고주의 차별없이 모두가 참여할 수 있는 순위 특화형 광고를 제공합니다.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-[48px] items-start justify-center">
            {/* Left Content - Service Cards */}
            <div className="flex flex-col gap-[24px] items-center lg:items-start w-full max-w-[592px]">
              {/* Cafe & Restaurant */}
              <div className="w-full rounded-[12px] p-[24px] space-y-4" style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 70.71%)' }}>
                <div className="flex items-center gap-3">
                  <Store className="w-[27px] h-[32px] flex-shrink-0" strokeWidth={3} color="#2563EB" />
                  <h3   
                    className="font-medium text-[20px] leading-[28px] text-[#111827]"
                    style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                  >
                    카페 & 음식점
                  </h3>
                </div>
                <p 
                  className="font-medium text-[20px] leading-[24px] text-[#000000]"
                  style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                >
                  네이버 플레이스 순위 상승으로 방문객 증가
                </p>
              </div>

              {/* Beauty & Salon */}
              <div className="w-full rounded-[12px] p-[24px] space-y-4" style={{ background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 70.71%)' }}>
                <div className="flex items-center gap-3">
                  <Scissors 
                    className="w-[24px] h-[32px] flex-shrink-0" 
                    strokeWidth={3} 
                    color="#9333EA"
                  />
                  <h3 
                    className="font-medium text-[20px] leading-[28px] text-[#111827]"
                    style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                  >
                    미용실 & 뷰티샵
                  </h3>
                </div>
                <p 
                  className="font-medium text-[20px] leading-[24px] text-[#000000]"
                  style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                >
                  지역 검색 노출 극대화로 신규 고객 유치
                </p>
              </div>

              {/* Shopping & Brand */}
              <div className="w-full rounded-[12px] p-[24px] space-y-4" style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 70.71%)' }}>
                <div className="flex items-center gap-3">
                  <ShoppingBag 
                    className="w-[20px] h-[32px] flex-shrink-0" 
                    strokeWidth={3} 
                    color="#059669"
                  />
                  <h3 
                    className="font-medium text-[20px] leading-[28px] text-[#111827]"
                    style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                  >
                    쇼핑몰 & 브랜드
                  </h3>
                </div>
                <p 
                  className="font-medium text-[20px] leading-[24px] text-[#000000]"
                  style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                >
                  네이버 쇼핑 검색 순위 개선으로 매출 증대
                </p>
              </div>

              {/* Additional Text */}
              <div className="w-full flex justify-center mt-[-25px]">
                <div className="text-center text-[#169B68]" style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal', lineHeight: '1.4' }}>
                  <span className="text-[40px] font-black">+</span>
                  <br/>
                  <span className="text-[24px] font-medium">그 외 온오프라인 사업자</span>
                  <br/>
                  <span className="text-[24px] font-medium">매출 증대가 필요한 모든 비즈니스를 대상</span>
                </div>
              </div>
            </div>

            {/* Right Content - Performance Card */}
            <div className="w-full max-w-[592px] flex-shrink-0 lg:mt-[72px]">
              <div className="w-full bg-white rounded-[16px] shadow-[0px_25px_50px_rgba(0,0,0,0.25)] p-8">
                {/* Header */}
                <h3 
                  className="w-full font-medium text-[24px] leading-[29px] text-center text-[#111827] mb-8"
                  style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                >
                  한정된 예산으로도
                </h3>

                {/* Stats Container */}
                <div className="w-full space-y-6 mb-6">
                  {/* Place Exposure */}
                  <div className="flex items-center justify-between gap-4">
                    <span 
                      className="font-medium text-[16px] leading-[24px] text-[#374151] whitespace-nowrap"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      플레이스 노출
                    </span>
                    <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                      <div className="flex-1 h-[8px] bg-[#E5E7EB] rounded-[9999px] relative">
                        <div className="absolute w-[85%] h-[8px] left-0 top-0 bg-[#10B981] rounded-[9999px]"></div>
                      </div>
                      <span 
                        className="font-medium text-[16px] leading-[24px] text-[#059669] whitespace-nowrap"
                        style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                      >
                        85%
                      </span>
                    </div>
                  </div>

                  {/* Shopping Search */}
                  <div className="flex items-center justify-between gap-4">
                    <span 
                      className="font-medium text-[16px] leading-[24px] text-[#374151] whitespace-nowrap"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      쇼핑 검색
                    </span>
                    <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                      <div className="flex-1 h-[8px] bg-[#E5E7EB] rounded-[9999px] relative">
                        <div className="absolute w-[78%] h-[8px] left-0 top-0 bg-[#3B82F6] rounded-[9999px]"></div>
                      </div>
                      <span 
                        className="font-medium text-[16px] leading-[24px] text-[#2563EB] whitespace-nowrap"
                        style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                      >
                        78%
                      </span>
                    </div>
                  </div>

                  {/* Shopping Inflow */}
                  <div className="flex items-center justify-between gap-4">
                    <span 
                      className="font-medium text-[16px] leading-[24px] text-[#374151] whitespace-nowrap"
                      style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                    >
                      쇼핑 유입
                    </span>
                    <div className="flex items-center gap-2 flex-1 max-w-[200px]">
                      <div className="flex-1 h-[8px] bg-[#E5E7EB] rounded-[9999px] relative">
                        <div className="absolute w-[92%] h-[8px] left-0 top-0 bg-[#A855F7] rounded-[9999px]"></div>
                      </div>
                      <span 
                        className="font-medium text-[16px] leading-[24px] text-[#9333EA] whitespace-nowrap"
                        style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                      >
                        92%
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="w-full bg-[#ECFDF5] rounded-[8px] p-4">
                  <p 
                    className="w-full font-medium text-[20px] leading-[24px] text-center text-[#065F46]"
                    style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                  >
                    순위 상승으로 플레이스·쇼핑 노출 효과 극대화
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

