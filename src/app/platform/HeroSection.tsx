'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { Handshake, Building2, Smartphone, Users, ArrowRight, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트 마운트 시 애니메이션 시작
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    router.push('/contact');
  };
  return (
    <section className="w-full bg-gradient-to-br from-[#169B68] from-15% to-[#F5F97F] to-85% relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px] py-[38px] sm:py-[56px] lg:py-[76px]">
        <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="w-full lg:w-[46%] flex flex-col gap-[15px] sm:gap-[22px] lg:gap-[30px] order-2 lg:order-1">
            <div className="flex flex-col gap-[11px] sm:gap-[16px] lg:gap-[22px]">
              <h1 
                className="text-[32px] sm:text-[48px] lg:text-[64px] font-bold leading-[36px] sm:leading-[54px] lg:leading-[72px] text-white"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                매체의 새롭고 투명한 <br />수익 생태계
              </h1>
              
              <p 
                className="text-base sm:text-lg lg:text-xl font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px] text-white"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                ADEN 오퍼월은 '매체 중심'으로 설계된 새로운 광고 수익 구조입니다.<br />
                광고주까지 직접 공급·관리하여 불필요한 중간 마진을 없애고,<br />
                매체사의 성장과 유저 경험 개선에 집중합니다.
              </p>
              
              <div className="relative w-full max-w-[570.69px] h-[58px] bg-emerald-50 border border-emerald-200 rounded-lg">
                <p className="absolute left-[17px] top-[17px] font-['Noto_Sans_KR'] font-medium text-base leading-[19px] text-emerald-800">
                  Less Margin, Full Transparency.
                </p>
              </div>
              
              <p 
                className="text-sm sm:text-base lg:text-lg font-medium leading-[20px] sm:leading-[25px] lg:leading-[28px] text-white mt-4"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                기존 오퍼월은 네트워크 수익이 커질수록 매체의 몫은 줄어드는 구조였습니다.<br /><br />
                ADEN은 광고주–매체–유저 간 직접 연결(Direct Link) 방식을 통해<br />
                수익 투명성·정산 속도·UI 완성도를 모두 확보했습니다.
              </p>
            </div>
            
            <Button
              text="매체 제휴 문의하기"
              className="w-auto bg-accent-emerald text-white hover:bg-primary-dark px-8 py-4 rounded-base flex items-center gap-4"
              onClick={handleContactClick}
            >
              <Handshake className="w-[26px] h-[26px]" strokeWidth={3} />
              매체 제휴 문의하기
            </Button>
          </div>

          {/* Right Content - Direct Link Structure */}
          <div className="w-full lg:w-[42%] lg:ml-auto order-1 lg:order-2">
            <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-[0px_25px_50px_rgba(0,0,0,0.25)] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col gap-6">
                <div className={`text-center transition-all duration-500 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 
                    className="text-lg sm:text-xl font-medium leading-6 text-gray-800 mb-2"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    Direct Link 수익 구조
                  </h3>
                  <p 
                    className="text-sm sm:text-base font-medium leading-5 text-gray-600"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    중간 단계 제거 → 매체 순마진 증가
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                  {/* Advertiser to ADEN */}
                  <div className={`flex items-center w-full max-w-[400px] transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <div className="flex items-center gap-3" style={{ minWidth: 'fit-content' }}>
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <span 
                        className="text-base font-medium text-gray-700"
                        style={{ fontFamily: 'Noto Sans KR' }}
                      >
                        광고주
                      </span>
                    </div>
                    
                    <div className="flex-1 flex justify-center">
                      <ArrowRight className="w-8 h-8 text-emerald-600" strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex items-center gap-3" style={{ minWidth: 'fit-content' }}>
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                        <span 
                          className="text-lg font-bold text-white"
                          style={{ fontFamily: 'Noto Sans KR' }}
                        >
                          A
                        </span>
                      </div>
                      <span 
                        className="text-base font-medium text-gray-700"
                        style={{ fontFamily: 'Noto Sans KR' }}
                      >
                        ADEN
                      </span>
                    </div>
                  </div>

                  {/* Arrow Down */}
                  <div className={`flex justify-center py-2 transition-all duration-500 delay-[400ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <ArrowDown className="w-8 h-8 text-emerald-600" strokeWidth={2.5} />
                  </div>

                  {/* Media to User */}
                  <div className={`flex items-center w-full max-w-[400px] transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <div className="flex items-center gap-3" style={{ minWidth: 'fit-content' }}>
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                      </div>
                      <span 
                        className="text-base font-medium text-gray-700"
                        style={{ fontFamily: 'Noto Sans KR' }}
                      >
                        매체
                      </span>
                    </div>
                    
                    <div className="flex-1 flex justify-center">
                      <ArrowRight className="w-8 h-8 text-emerald-600" strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex items-center gap-3" style={{ minWidth: 'fit-content' }}>
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <span 
                        className="text-base font-medium text-gray-700"
                        style={{ fontFamily: 'Noto Sans KR' }}
                      >
                        유저
                      </span>
                    </div>
                  </div>
                </div>

                <div className={`w-full max-w-[506.69px] h-[56px] bg-emerald-50 rounded-lg flex items-center justify-center transition-all duration-500 delay-[600ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <span 
                    className="font-['Noto_Sans_KR'] font-medium text-base leading-[19px] text-center text-emerald-800"
                  >
                    중간 마진 최소화로 매체 수익 극대화
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

