'use client';
import Button from '@/components/ui/Button';
import { Handshake, Rocket } from 'lucide-react';

export default function CTASection() {
  const handleContactClick = () => {
    // Handle contact form submission
  };

  const handlePoCClick = () => {
    // Handle PoC application
  };
  const keyStats = [
    { value: '2주', label: '빠른 PoC 완료' },
    { value: '500만+', label: '일일 미션 물량' },
    { value: 'Net-7', label: '빠른 정산 주기' }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-800 to-slate-900 py-[37px] sm:py-[56px] lg:py-[74px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-[24px] sm:gap-[36px] lg:gap-[48px] items-center text-center">
          {/* Main Heading */}
          <div className="flex flex-col items-center">
            <h2 
              className="text-[32px] sm:text-[40px] lg:text-[48px] font-medium leading-[38px] sm:leading-[48px] lg:leading-[58px] text-white mb-[30px] sm:mb-[45px] lg:mb-[60px]"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              지금, ADEN과 함께 새로운 수익 생태계를 만드세요
            </h2>
            <p 
              className="text-base sm:text-lg lg:text-xl font-medium leading-6 text-gray-300 mb-[15px] sm:mb-[22px] lg:mb-[30px]"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              매체 중심으로 설계된 투명하고 공정한 광고 플랫폼
            </p>
            <p 
              className="text-[24px] sm:text-[27px] lg:text-[30px] font-medium leading-[29px] sm:leading-[32px] lg:leading-[36px] text-emerald-400"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              Ad Ends. And Begins.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
            <Button
              text="매체 제휴 문의하기"
              className="bg-emerald-600 text-slate-800 hover:bg-emerald-700 px-8 py-[18px] rounded-base flex items-center gap-4"
              onClick={handleContactClick}
            >
              <Handshake className="w-[22px] h-[22px] text-slate-800" strokeWidth={3.0} />
              매체 제휴 문의하기
            </Button>
            <Button
              text="2주 무료 PoC 신청하기"
              className="bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-800 px-8 py-[18px] rounded-base flex items-center gap-4"
              onClick={handlePoCClick}
            >
              <Rocket className="w-[18px] h-[18px] text-emerald-400" strokeWidth={3.0} />
              2주 무료 PoC 신청하기
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl">
            {keyStats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div 
                  className="text-xl sm:text-2xl font-medium leading-7 text-emerald-400"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-base font-medium leading-5 text-gray-300"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
