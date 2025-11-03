'use client';
export default function ArchitectureSection() {
  return (
    <section className="w-full bg-[#F9FAFB]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="py-[40px] sm:py-[60px] md:py-[80px]">
          <div className="relative w-full max-w-[1280px] mx-auto">
            {/* Header */}
            <div className="relative w-full max-w-[1232px] h-[112px] mx-auto mb-[64px]" style={{ marginLeft: '24px' }}>
              {/* 제목 */}
              <h2 
                className="absolute w-full h-[44px] left-0 top-0 text-center"
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '36px',
                  lineHeight: '40px',
                  color: '#111827'
                }}
              >
                데이터 기반 광고 네트워크
              </h2>
              
              {/* 설명 */}
              <p 
                className="absolute w-full max-w-[1154px] h-[56px] left-1/2 -translate-x-1/2 top-[56px] text-center"
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '28px',
                  color: '#4B5563'
                }}
              >
                Aden은 유저의 특성에 맞춘 개인화된 미션을 통해 브랜드와 소비자를 연결하는 리워드 광고 네트워크입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}