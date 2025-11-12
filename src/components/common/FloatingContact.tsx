'use client';
import { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const phoneNumber = '02-1234-5678'; // 실제 전화번호로 변경하세요

  useEffect(() => {
    // 모바일 기기 감지
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePhoneClick = () => {
    if (isMobile) {
      // 모바일: 전화 앱 실행
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // 데스크탑: 전화번호 복사
      navigator.clipboard.writeText(phoneNumber).then(() => {
        alert(`전화번호가 복사되었습니다: ${phoneNumber}`);
      });
    }
  };

  const handleKakaoClick = () => {
    // 카카오톡 채널 URL로 변경하세요
    window.open('http://pf.kakao.com/_tgSHn', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 flex flex-col items-center">
      {/* 추가 버튼들 (전화, 카카오톡) */}
      <div 
        className={`flex flex-col items-center gap-2 sm:gap-3 mb-2 sm:mb-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* 전화 버튼 */}
        <div className="relative group">
          <button
            onClick={handlePhoneClick}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label={isMobile ? "전화하기" : "전화번호 복사"}
          >
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
          </button>
          {/* 전화번호 툴팁 (데스크탑) */}
          {!isMobile && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {phoneNumber}
              <div className="text-xs text-gray-300 mt-1">클릭하여 복사</div>
            </div>
          )}
        </div>

        {/* 카카오톡 버튼 */}
        <button
          onClick={handleKakaoClick}
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#FEE500] rounded-full shadow-lg hover:bg-[#FDD835] active:bg-[#FBC02D] transition-all duration-200 hover:scale-110 active:scale-95"
          aria-label="카카오톡 문의"
        >
          <svg 
            className="w-6 h-6 sm:w-7 sm:h-7" 
            viewBox="0 0 24 24"
            fill="#3C1E1E"
          >
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.76 1.88 5.19 4.67 6.63-.21.77-.68 2.43-.78 2.82-.13.51.18.5.38.37.14-.09 2.26-1.53 3.17-2.14.52.07 1.05.11 1.56.11 5.52 0 10-3.58 10-8S17.52 3 12 3z"/>
          </svg>
        </button>
      </div>

      {/* 메인 문의하기 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-accent-emerald rounded-full shadow-xl hover:bg-emerald-600 active:bg-emerald-700 transition-all duration-300 ${
          isOpen ? 'rotate-45' : ''
        }`}
        aria-label="문의하기"
      >
        <svg 
          className="w-7 h-7 sm:w-8 sm:h-8 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 4v16m8-8H4" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
            />
          )}
        </svg>
      </button>

      {/* 툴팁 (데스크톱에서만 표시) */}
      {!isOpen && (
        <div className="hidden lg:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          문의하기
        </div>
      )}
    </div>
  );
}

