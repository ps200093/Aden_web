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
      {/* Ellipse 3 - Outer blur */}
      <div 
        className="absolute w-[383px] h-[383px] left-[602px] top-[86px] rounded-full"
        style={{
          background: 'rgba(113, 255, 189, 0.24)',
          filter: 'blur(7.15px)'
        }}
      />
      
      {/* Ellipse 1 - Middle blur */}
      <div 
        className="absolute w-[277px] h-[277px] left-[655px] top-[139px] rounded-full"
        style={{
          background: 'rgba(101, 255, 194, 0.24)',
          filter: 'blur(3.8px)'
        }}
      />
      
      {/* Ellipse 2 - Inner gradient */}
      <div 
        className="absolute w-[187px] h-[187px] left-[700px] top-[184px] rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(147.53deg, #6EE7B7 -4.14%, #169B68 89.48%)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        }}
      >
        <img 
          src="/images/img_service_logo.svg" 
          alt="SADEN Logo" 
          className="w-[112px] h-[21px]"
        />
      </div>
      
      {/* Rectangle 4 - 광고주 */}
      <div 
        className="absolute w-[119px] h-[55px] left-[744px] top-[72px] rounded-[32px] flex items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, #20C173 0%, #0F5B36 100%)',
          boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)'
        }}
      >
        <span 
          className="text-[20px] font-bold leading-[24px] text-center text-white"
          style={{ fontFamily: 'Noto Sans KR' }}
        >
          광고주
        </span>
      </div>
      
      {/* Rectangle 5 - 매체 */}
      <div 
        className="absolute w-[106px] h-[55px] left-[549px] top-[250px] rounded-[32px] flex items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, #20C173 0%, #0F5B36 100%)',
          boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)'
        }}
      >
        <span 
          className="text-[20px] font-bold leading-[24px] text-center text-white"
          style={{ fontFamily: 'Noto Sans KR' }}
        >
          매체
        </span>
      </div>
      
      {/* Rectangle 6 - 사용자 */}
      <div 
        className="absolute w-[119px] h-[55px] left-[838px] top-[392px] rounded-[32px] flex items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, #20C173 0%, #0F5B36 100%)',
          boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)'
        }}
      >
        <span 
          className="text-[20px] font-bold leading-[24px] text-center text-white"
          style={{ fontFamily: 'Noto Sans KR' }}
        >
          사용자
        </span>
      </div>
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-[28px] sm:pt-[40px] md:pt-[56px] pb-[28px] sm:pb-[40px] md:pb-[56px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px] lg:gap-[40px]">
            {/* Left Content */}
            <div className="w-full lg:w-[60%] flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] items-start">
              <div className="w-full lg:w-[92%] flex flex-col gap-[11px] sm:gap-[16px] md:gap-[22px] items-start">
                <h1 
                  className="max-w-[512px] text-[64px] font-bold leading-[72px] text-left text-white"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  ADEN은 광고의 <br />유토피아 입니다
                </h1>
                
                {/* Ad-End i Ad-And Logo */}
                <div className="relative w-[228.52px] h-[32px] mt-[32px]">
                  {/* Ad-End */}
                  <span 
                    className="absolute left-0 top-0 w-[87px] h-[32px] text-[24px] font-medium leading-[32px] text-center text-white"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    Ad-End
                  </span>
                  
                  {/* Arrow icon */}
                  <div className="absolute left-[102.52px] top-0 w-[31px] h-[32px] flex items-center justify-center">
                    <ArrowRight className="w-[28px] h-[28px] text-white" strokeWidth={3.5} />
                  </div>
                  
                  {/* Ad-And */}
                  <span 
                    className="absolute left-[139.52px] top-0 w-[89px] h-[32px] text-[24px] font-medium leading-[32px] text-center text-white"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    Ad-And
                  </span>
                </div>
                
                {/* Description Text */}
                <p 
                  className="w-[504px] h-[32px] text-[24px] font-medium leading-[32px] text-center text-white"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  불합리한 구조를 끝내고, 모두의 만족을 실현합니다
                </p>
                
                {/* Download Button */}
                <button 
                  className="relative w-[324.14px] h-[60px] bg-[#169B68] rounded-[8px] flex items-center justify-center mt-[35px]"
                  onClick={() => {
                    // Handle download action
                  }}
                >
                  <Download className="absolute left-[44px] w-[20px] h-[20px] text-white" strokeWidth={3} />
                  <span 
                    className="text-[18px] font-medium leading-[22px] text-center text-white"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    회사 소개서 다운로드
                  </span>
                </button>
              </div>
            </div>
            
            {/* Right Content - Phone Image */}
            <div className="w-full lg:w-[40%] flex justify-center lg:justify-end items-center">
              <img 
                src="/images/service_phone.png" 
                alt="Service Phone Mockup" 
                className="w-[600px] h-auto"
                style={{ minWidth: '600px', marginRight: '-180px' }}
              />
            </div>
          </div>
          
          {/* Bottom Text */}
          <div className="w-full flex justify-center mt-[40px]">
            <p 
              className="w-[727px] h-[44px] text-[16px] font-medium leading-[28px] text-center"
              style={{ 
                fontFamily: 'Noto Sans KR',
                color: '#065F46'
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
