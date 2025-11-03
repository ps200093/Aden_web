'use client';
import { useState, useEffect } from 'react';
import { Building, Smartphone, CircleCheck } from 'lucide-react';

export default function HeroSection() {
    const [isAdvertiserVisible, setIsAdvertiserVisible] = useState(false);
    const [isMediaVisible, setIsMediaVisible] = useState(false);

    useEffect(() => {
        const observerAdvertiser = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsAdvertiserVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const observerMedia = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsMediaVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const advertiserCard = document.getElementById('advertiser-features');
        const mediaCard = document.getElementById('media-features');

        if (advertiserCard) {
            observerAdvertiser.observe(advertiserCard);
        }
        if (mediaCard) {
            observerMedia.observe(mediaCard);
        }

        return () => {
            if (advertiserCard) {
                observerAdvertiser.unobserve(advertiserCard);
            }
            if (mediaCard) {
                observerMedia.unobserve(mediaCard);
            }
        };
    }, []);

    const advertiserFeatures = [
        '랭킹 부스팅 캠페인',
        '투명한 매체 지정',
        '실시간 정산 대시보드',
        '어뷰징 방지 시스템'
    ];

    const mediaFeatures = [
        '브랜드 맞춤 UI/UX',
        '500만+ 일일 인벤토리',
        'SDK-less 2주 PoC',
        '빠른 정산'
    ];

    return (
        <section className="w-full bg-gradient-to-br from-[#169B68] from-15% to-[#F5F97F] to-85% relative">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[80px] py-[40px] sm:py-[60px] lg:py-[80px]">
            {/* Header */}
            <div className="text-center mb-[32px] sm:mb-[48px] lg:mb-[64px]">
              <h1 className="text-white text-[32px] sm:text-[48px] lg:text-[64px] font-bold leading-[38px] sm:leading-[54px] lg:leading-[72px] mb-[16px] sm:mb-[24px] lg:mb-[34px]" style={{ fontFamily: 'Noto Sans KR' }}>
                어떤 도움이 필요하신가요?
              </h1>
              <p className="text-white text-[20px] sm:text-[28px] lg:text-[36px] font-medium leading-[24px] sm:leading-[33px] lg:leading-[43px]" style={{ fontFamily: 'Noto Sans KR' }}>
                목적에 맞는 상담을 받아보세요
              </p>
            </div>

            {/* Cards Container */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center max-w-[1024px] mx-auto">
              {/* 광고주 Card */}
              <div className="w-full lg:w-[496px] bg-white/80 border border-white/20 rounded-2xl p-[20px] sm:p-[28px] lg:p-[33px] relative">
                {/* Icon */}
                <div className="flex justify-center mb-[16px] sm:mb-[20px] lg:mb-[24px]">
                  <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full bg-gradient-to-br from-[#60A5FA] to-[#2563EB] flex items-center justify-center">
                    <Building size={28} className="text-white sm:hidden" />
                    <Building size={32} className="text-white hidden sm:block lg:hidden" />
                    <Building size={36} className="text-white hidden lg:block" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#111827] text-[20px] sm:text-[22px] lg:text-[24px] font-medium leading-[24px] sm:leading-[26px] lg:leading-[29px] text-center mb-[12px] sm:mb-[14px] lg:mb-[16px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  광고주
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[17px] sm:leading-[18px] lg:leading-[19px] text-center mb-[16px] sm:mb-[20px] lg:mb-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  성과 기반 CPA 광고로 확실한 ROI를 경험하세요
                </p>

                {/* Features List */}
                <div id="advertiser-features" className="space-y-[10px] sm:space-y-[12px] mb-[16px] sm:mb-[20px] lg:mb-[24px]">
                  {advertiserFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className={`flex items-center transition-all duration-500 ${isAdvertiserVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CircleCheck size={14} className="text-[#3B82F6] mr-2 sm:mr-3 flex-shrink-0 sm:w-4 sm:h-4" />
                      <span className="text-[#374151] text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[20px] sm:leading-[22px] lg:leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Badge */}
                <div className="w-full h-[48px] sm:h-[52px] lg:h-[56px] bg-[#169B68] rounded-lg flex items-center justify-center">
                  <p className="text-white text-[14px] sm:text-[15px] lg:text-[16px] font-bold leading-[17px] sm:leading-[18px] lg:leading-[19px] text-center" style={{ fontFamily: 'Noto Sans KR' }}>
                    "성과로 증명되는 광고"
                  </p>
                </div>
              </div>

              {/* 매체 파트너 Card */}
              <div className="w-full lg:w-[496px] bg-white/80 border border-white/20 rounded-2xl p-[20px] sm:p-[28px] lg:p-[33px] relative">
                {/* Icon */}
                <div className="flex justify-center mb-[16px] sm:mb-[20px] lg:mb-[24px]">
                  <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full bg-gradient-to-br from-[#34D399] to-[#059669] flex items-center justify-center">
                    <Smartphone size={28} className="text-white sm:hidden" />
                    <Smartphone size={32} className="text-white hidden sm:block lg:hidden" />
                    <Smartphone size={36} className="text-white hidden lg:block" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#111827] text-[20px] sm:text-[22px] lg:text-[24px] font-medium leading-[24px] sm:leading-[26px] lg:leading-[29px] text-center mb-[12px] sm:mb-[14px] lg:mb-[16px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  매체 파트너
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[17px] sm:leading-[18px] lg:leading-[19px] text-center mb-[16px] sm:mb-[20px] lg:mb-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  매체 중심의 새로운 수익 생태계에 참여하세요
                </p>

                {/* Features List */}
                <div id="media-features" className="space-y-[10px] sm:space-y-[12px] mb-[16px] sm:mb-[20px] lg:mb-[24px]">
                  {mediaFeatures.map((feature, index) => (
                    <div 
                      key={index}
                      className={`flex items-center transition-all duration-500 ${isMediaVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CircleCheck size={14} className="text-[#10B981] mr-2 sm:mr-3 flex-shrink-0 sm:w-4 sm:h-4" />
                      <span className="text-[#374151] text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[20px] sm:leading-[22px] lg:leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Badge */}
                <div className="w-full h-[48px] sm:h-[52px] lg:h-[56px] bg-[#169B68] rounded-lg flex items-center justify-center">
                  <p className="text-white text-[14px] sm:text-[15px] lg:text-[16px] font-bold leading-[17px] sm:leading-[18px] lg:leading-[19px] text-center" style={{ fontFamily: 'Noto Sans KR' }}>
                    "매체와 함께 성장하는 파트너십"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
