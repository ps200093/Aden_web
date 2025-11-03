'use client';
import Button from '@/components/ui/Button';
import { Phone, ArrowUpFromLine } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CTASection() {
  const router = useRouter();
  
  const handleInquiry = () => {
    router.push('/contact');
  }

  const handlePhoneConsult = () => {
    // Handle phone consultation action
  }

  return (
    <section className="w-full bg-[#10182b] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px] sm:py-[60px] md:py-[72px]">
          <div className="flex flex-col gap-[32px] items-center">
            {/* Main Content */}
            <div className="flex flex-col gap-[32px] sm:gap-[40px] md:gap-[48px] items-center w-full">
              <div className="w-full max-w-[1232px] text-center space-y-6">
                <h2 
                  className="w-full font-medium text-center text-white"
                  style={{ 
                    fontFamily: 'Noto Sans KR', 
                    fontStyle: 'normal',
                    fontSize: 'clamp(32px, 5vw, 48px)',
                    lineHeight: '1.2'
                  }}
                >
                  성과로 증명되는 광고
                </h2>
                <p 
                  className="w-full font-medium text-center text-[#D1FAE5]"
                  style={{ 
                    fontFamily: 'Noto Sans KR', 
                    fontStyle: 'normal',
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    lineHeight: '28px'
                  }}
                >
                  실유저 참여가 매출로 이어지는 CPA 광고를 지금 시작하세요.
                </p>
                <h3 
                  className="w-full font-medium text-center text-[#6EE7B7]"
                  style={{ 
                    fontFamily: 'Noto Sans KR', 
                    fontStyle: 'normal',
                    fontSize: 'clamp(24px, 3vw, 30px)',
                    lineHeight: '36px'
                  }}
                >
                  Game Changer ADEN
                </h3>
              </div>

              {/* CTA Buttons */}
              <div className="w-full max-w-[672px] flex flex-col sm:flex-row gap-4 sm:gap-6 px-4">
                {/* ADEN 광고 집행 문의하기 버튼 */}
                <button
                  onClick={handleInquiry}
                  className="flex-1 h-[64px] bg-[#10B981] rounded-[8px] flex items-center justify-center gap-3 hover:bg-[#059669] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Y축과 X축을 부드럽게 연결 */}
                    <path d="M2 2 L2 15 Q2 16 3 16 L17 16" stroke="#10182B" strokeWidth="2" strokeLinecap="round"/>
                    {/* 라인 차트 */}
                    <path d="M5 12L8 8L12 10L16 3" stroke="#10182B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="5" cy="12" r="1.5" fill="#10182B"/>
                    <circle cx="8" cy="8" r="1.5" fill="#10182B"/>
                    <circle cx="12" cy="10" r="1.5" fill="#10182B"/>
                    <circle cx="16" cy="3" r="1.5" fill="#10182B"/>
                  </svg>
                  <span 
                    className="text-[18px] font-medium leading-[22px] text-center text-[#10182B] whitespace-nowrap"
                    style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                  >
                    ADEN 광고 집행 문의하기
                  </span>
                </button>

                {/* 전화 상담 요청 버튼 */}
                <button
                  onClick={handlePhoneConsult}
                  className="flex-1 h-[64px] bg-transparent border-2 border-[#10B981] rounded-[8px] flex items-center justify-center gap-3 hover:bg-[#10B981]/10 transition-colors"
                >
                  <Phone className="w-[18px] h-[18px] text-[#10B981] fill-[#10B981]" />
                  <span 
                    className="text-[18px] font-medium leading-[22px] text-center text-[#10B981] whitespace-nowrap"
                    style={{ fontFamily: 'Noto Sans KR', fontStyle: 'normal' }}
                  >
                    전화 상담 요청
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Arrow */}
            <div className="flex justify-center items-center mt-[5px]">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="맨 위로 이동"
              >
                <ArrowUpFromLine className="w-[58px] h-[38px] text-[#10B981]" strokeWidth={2.0} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

