import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact-section" className="w-full bg-white py-[40px] sm:py-[60px] lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-20">
        {/* 헤더 */}
        <div className="mb-[32px] sm:mb-[48px] lg:mb-16">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium text-gray-900 text-center mb-3 sm:mb-4 leading-[28px] sm:leading-[36px] lg:leading-[40px]">
            즉시 문의하기
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-600 text-center leading-6 sm:leading-7">
            다양한 채널로 ADEN에 문의하실 수 있습니다
          </p>
        </div>

        {/* 연락 카드들 */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 sm:gap-8">
          {/* 이메일 문의 카드 */}
          <div className="w-full sm:w-[389.33px] h-[240px] sm:h-[260px] lg:h-[280px] bg-gray-50 rounded-2xl relative mx-auto order-3 lg:order-1">
            {/* 아이콘 */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 sm:top-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>

            {/* 제목 */}
            <h3 className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[88px] sm:top-[104px] lg:top-28 text-lg sm:text-xl font-medium text-gray-900 text-center leading-[22px] sm:leading-6">
              이메일 문의
            </h3>

            {/* 설명 */}
            <p className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[124px] sm:top-[140px] lg:top-[148px] text-sm sm:text-base font-medium text-gray-600 text-center leading-[17px] sm:leading-[19px]">
              상세한 문의사항을 이메일로 보내주세요
            </p>

            {/* 연락처 */}
            <div className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[156px] sm:top-[172px] lg:top-[188px] text-sm sm:text-base font-medium text-blue-600 text-center leading-[17px] sm:leading-[19px]">
              contact@eden-ads.com
            </div>

            {/* 응답 시간 */}
            <div className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[188px] sm:top-[208px] lg:top-[228px] text-xs sm:text-sm font-medium text-gray-500 text-center leading-[16px] sm:leading-5">
              평균 응답시간: 2-4시간
            </div>
          </div>

          {/* 전화 상담 카드 */}
          <div className="w-full sm:w-[389.33px] h-[240px] sm:h-[260px] lg:h-[280px] bg-gray-50 rounded-2xl relative mx-auto order-2 lg:order-2">
            {/* 아이콘 */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 sm:top-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-emerald-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>

            {/* 제목 */}
            <h3 className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[88px] sm:top-[104px] lg:top-28 text-lg sm:text-xl font-medium text-gray-900 text-center leading-[22px] sm:leading-6">
              전화 상담
            </h3>

            {/* 설명 */}
            <p className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[124px] sm:top-[140px] lg:top-[148px] text-sm sm:text-base font-medium text-gray-600 text-center leading-[17px] sm:leading-[19px]">
              즉시 전문 상담을 받아보세요
            </p>

            {/* 연락처 */}
            <div className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[156px] sm:top-[172px] lg:top-[188px] text-sm sm:text-base font-medium text-emerald-600 text-center leading-[17px] sm:leading-[19px]">
              010-9585-9350
            </div>

            {/* 상담 시간 */}
            <div className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[188px] sm:top-[208px] lg:top-[228px] text-xs sm:text-sm font-medium text-gray-500 text-center leading-[16px] sm:leading-5">
              상담시간: 평일 09:00-18:00
            </div>
          </div>

          {/* 카카오톡 문의 카드 */}
          <div className="w-full sm:w-[389.33px] h-[240px] sm:h-[260px] lg:h-[280px] bg-gray-50 rounded-2xl relative mx-auto order-1 lg:order-3">
            {/* 아이콘 */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 sm:top-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900"
                fill="currentColor"
                viewBox="0 0 208 191"
              >
                <path d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,54.96,48.62,69.41-1.42,5-5.1,17.8-5.87,20.64-.93,3.38-.44,6.68,1.36,9.08,1.49,2,3.77,3.09,6.42,3.09,2.4,0,4.65-.89,6.35-2.51l24.93-23.47c7.26,1.12,14.67,1.76,22.19,1.76,57.44,0,104-36.71,104-82S161.44,0,104,0Z"/>
              </svg>
            </div>

            {/* 제목 */}
            <h3 className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[88px] sm:top-[104px] lg:top-28 text-lg sm:text-xl font-medium text-gray-900 text-center leading-[22px] sm:leading-6">
              카카오톡 문의
            </h3>

            {/* 설명 */}
            <p className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[124px] sm:top-[140px] lg:top-[148px] text-sm sm:text-base font-medium text-gray-600 text-center leading-[17px] sm:leading-[19px]">
              에덴 카카오톡 채널 추가 후 문의해주세요
            </p>

            {/* 연락처 */}
            <a 
              href="http://pf.kakao.com/_tgSHn"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[156px] sm:top-[172px] lg:top-[188px] text-sm sm:text-base font-medium text-yellow-600 text-center leading-[17px] sm:leading-[19px] hover:underline"
            >
              채널 바로가기
            </a>

            {/* 상담 시간 */}
            <div className="absolute left-4 right-4 sm:left-8 sm:right-8 top-[188px] sm:top-[208px] lg:top-[228px] text-xs sm:text-sm font-medium text-gray-500 text-center leading-[16px] sm:leading-5">
              상담시간: 평일 09:00-18:00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

