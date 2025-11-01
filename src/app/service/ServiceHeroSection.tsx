'use client';
import { useState, ChangeEvent } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';

export default function ServiceHeroSection() {
  const [searchValue, setSearchValue] = useState('')

  const handleStartCampaign = () => {
    // Handle campaign start action
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <section className="w-full bg-gradient-to-br from-[#169B68] from-15% to-[#F5F97F] to-85% relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-[28px] sm:pt-[40px] md:pt-[56px] pb-[28px] sm:pb-[40px] md:pb-[56px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px] lg:gap-[40px]">
            {/* Left Content */}
            <div className="w-full lg:w-[60%] flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] items-center lg:items-start text-center lg:text-left">
              <div className="w-full lg:w-[92%] flex flex-col gap-[14px] sm:gap-[18px] md:gap-[22px] items-center lg:items-start">
                <h1 
                  className="w-full max-w-full lg:max-w-[512px] font-bold text-white"
                  style={{ 
                    fontFamily: 'Noto Sans KR',
                    fontSize: 'clamp(32px, 6vw, 64px)',
                    lineHeight: '1.15'
                  }}
                >
                  ADEN은 광고의 <br />유토피아 입니다
                </h1>
                
                {/* Ad-End i Ad-And Logo */}
                <div className="relative flex items-center gap-[10px] sm:gap-[14px] lg:gap-[16px] mt-[16px] sm:mt-[24px] lg:mt-[32px]">
                  {/* Ad-End */}
                  <span 
                    className="font-medium text-white"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(18px, 2.8vw, 24px)',
                      lineHeight: '1.3'
                    }}
                  >
                    Ad-End
                  </span>
                  
                  {/* Arrow icon */}
                  <div className="flex items-center justify-center">
                    <ArrowRight 
                      className="text-white" 
                      style={{ 
                        width: 'clamp(20px, 3vw, 28px)', 
                        height: 'clamp(20px, 3vw, 28px)' 
                      }} 
                      strokeWidth={3.5} 
                    />
                  </div>
                  
                  {/* Ad-And */}
                  <span 
                    className="font-medium text-white"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(18px, 2.8vw, 24px)',
                      lineHeight: '1.3'
                    }}
                  >
                    Ad-And
                  </span>
                </div>
                
                {/* Description Text */}
                <p 
                  className="w-full max-w-full lg:max-w-[504px] font-medium text-white"
                  style={{ 
                    fontFamily: 'Noto Sans KR',
                    fontSize: 'clamp(16px, 2.5vw, 24px)',
                    lineHeight: '1.4'
                  }}
                >
                  불합리한 구조를 끝내고, 모두의 만족을 실현합니다
                </p>
                
                {/* Download Button */}
                <button 
                  className="w-full sm:w-auto min-w-[280px] lg:min-w-[324px] h-[52px] sm:h-[56px] lg:h-[60px] bg-[#169B68] hover:bg-[#138558] transition-colors rounded-[8px] flex items-center justify-center gap-3 px-6 mt-[20px] sm:mt-[28px] lg:mt-[35px]"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/documents/ADEN_회사소개서.pdf';
                    link.download = 'ADEN_회사소개서.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download 
                    className="text-white" 
                    style={{ 
                      width: 'clamp(18px, 2.2vw, 20px)', 
                      height: 'clamp(18px, 2.2vw, 20px)' 
                    }} 
                    strokeWidth={3} 
                  />
                  <span 
                    className="font-medium text-white"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(16px, 2vw, 18px)',
                      lineHeight: '1.3'
                    }}
                  >
                    회사 소개서 다운로드
                  </span>
                </button>
              </div>
            </div>
            
            {/* Right Content - Phone Image with decorative elements */}
            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end items-center order-first lg:order-last">
              <div className="relative">
                {/* Ellipse 3 - Outer blur - 데스크톱만 표시 */}
                <div 
                  className="hidden lg:block absolute rounded-full pointer-events-none z-0"
                  style={{
                    width: '60%',
                    paddingBottom: '60%',
                    left: '-25%',
                    top: '10%',
                    background: 'rgba(113, 255, 189, 0.24)',
                    filter: 'blur(7.15px)'
                  }}
                />
                
                {/* Ellipse 1 - Middle blur - 데스크톱만 표시 */}
                <div 
                  className="hidden lg:block absolute rounded-full pointer-events-none z-0"
                  style={{
                    width: '43%',
                    paddingBottom: '43%',
                    left: '-16.5%',
                    top: '22%',
                    background: 'rgba(101, 255, 194, 0.24)',
                    filter: 'blur(3.8px)'
                  }}
                />
                
                {/* Ellipse 2 - Inner gradient - 데스크톱만 표시 */}
                <div 
                  className="hidden lg:flex absolute rounded-full items-center justify-center pointer-events-none z-10"
                  style={{
                    width: '29%',
                    paddingBottom: '29%',
                    left: '-9%',
                    top: '30.3%',
                    background: 'linear-gradient(147.53deg, #6EE7B7 -4.14%, #169B68 89.48%)',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  <img 
                    src="/images/img_service_logo.svg" 
                    alt="SADEN Logo" 
                    className="absolute w-[60%] h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                
                {/* Rectangle 4 - 광고주 - 데스크톱만 표시 */}
                <div 
                  className="hidden lg:flex absolute rounded-[32px] items-center justify-center pointer-events-none z-10"
                  style={{
                    minWidth: '80px',
                    height: '40px',
                    left: '-2%',
                    top: '7%',
                    background: 'linear-gradient(180deg, #20C173 0%, #0F5B36 100%)',
                    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
                    padding: '0 12px'
                  }}
                >
                  <span 
                    className="font-bold text-center text-white whitespace-nowrap"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: '15px',
                      lineHeight: '1.2'
                    }}
                  >
                    광고주
                  </span>
                </div>
                
                {/* Rectangle 5 - 매체 - 데스크톱만 표시 */}
                <div 
                  className="hidden lg:flex absolute rounded-[32px] items-center justify-center pointer-events-none z-10"
                  style={{
                    minWidth: '75px',
                    height: '40px',
                    left: '-24%',
                    top: '40%',
                    background: 'linear-gradient(180deg, #20C173 0%, #0F5B36 100%)',
                    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
                    padding: '0 12px'
                  }}
                >
                  <span 
                    className="font-bold text-center text-white whitespace-nowrap"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: '15px',
                      lineHeight: '1.2'
                    }}
                  >
                    매체
                  </span>
                </div>
                
                {/* Rectangle 6 - 사용자 - 데스크톱만 표시 */}
                <div 
                  className="hidden lg:flex absolute rounded-[32px] items-center justify-center pointer-events-none z-10"
                  style={{
                    minWidth: '80px',
                    height: '40px',
                    left: '17%',
                    bottom: '15%',
                    background: 'linear-gradient(180deg, #20C173 0%, #0F5B36 100%)',
                    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
                    padding: '0 12px'
                  }}
                >
                  <span 
                    className="font-bold text-center text-white whitespace-nowrap"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: '15px',
                      lineHeight: '1.2'
                    }}
                  >
                    사용자
                  </span>
                </div>
                
                {/* Phone Image */}
                <img 
                  src="/images/service_phone.png" 
                  alt="Service Phone Mockup" 
                  className="relative z-[5] w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[650px] h-auto lg:ml-[100px] animate-[float_3s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
          
          {/* Bottom Text */}
          <div className="w-full flex justify-center mt-[32px] sm:mt-[40px] lg:mt-[48px]">
            <p 
              className="w-full max-w-full sm:max-w-[650px] lg:max-w-[750px] font-medium text-center px-4"
              style={{ 
                fontFamily: 'Noto Sans KR',
                color: '#065F46',
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                lineHeight: '1.75'
              }}
            >
              광고의 가장 중요한 본질은 '공존'. 에덴은 광고주, 매체, 사용자 모두가 이익을 얻는 새로운 생태계를 만듭니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
