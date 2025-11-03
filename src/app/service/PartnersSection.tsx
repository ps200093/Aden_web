'use client';

// 파트너 데이터
const partners = [
  { id: 1, name: '신한 SOL페이', logo: '/images/partners/shinhan.svg' },
  { id: 2, name: '케이뱅크', logo: '/images/partners/kbank.svg' },
  { id: 3, name: '에이블리', logo: '/images/partners/ably.svg' },
  { id: 4, name: '카카오뱅크', logo: '/images/partners/kakaobank.svg' },
  { id: 5, name: '배달의 민족', logo: '/images/partners/baemin.svg' },
  { id: 6, name: 'TOSS', logo: '/images/partners/toss.svg' },
  { id: 7, name: '하나머니', logo: '/images/partners/hana.svg' },
  { id: 8, name: 'OK 캐쉬백', logo: '/images/partners/okcash.svg' },
  { id: 9, name: '페이코', logo: '/images/partners/payco.svg' },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-[#11192C] overflow-hidden" style={{ height: '568px' }}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px] sm:py-[60px] md:py-[80px]">
          <div className="relative w-full max-w-[1280px] mx-auto">
            {/* Header */}
            <div className="w-full h-[84px] mb-[66px]">
              {/* 제목 */}
              <h2 
                className="w-full h-[44px] text-center"
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  lineHeight: '40px',
                  color: '#FFFFFF'
                }}
              >
                Our Partners
              </h2>
              
              {/* 설명 */}
              <p 
                className="w-full h-[28px] mt-[18px] text-center"
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  lineHeight: '28px',
                  color: '#FFFFFF'
                }}
              >
                이미 수많은 브랜드가 Aden과 함께하고 있습니다.
              </p>
            </div>

            {/* 무한 슬라이드 컨테이너 */}
            <div className="w-full overflow-hidden mb-[27px]">
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(calc(-179px * 9 - 24px * 9));
                  }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
              `}</style>
              
              <div className="flex gap-[24px] animate-scroll">
                {/* 원본 */}
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="relative flex-shrink-0"
                    style={{
                      width: '179px',
                      height: '155px',
                      background: 'linear-gradient(180deg, #10B981 0%, #BFCAFF 100%)',
                      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                      borderRadius: '8px'
                    }}
                  >
                    {/* 로고 */}
                    <div
                      className="absolute"
                      style={{
                        width: '75px',
                        height: '75px',
                        left: 'calc(50% - 75px/2)',
                        top: '15px',
                        background: `url(${partner.logo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '10px'
                      }}
                    />
                    
                    {/* 파트너 이름 */}
                    <div
                      className="absolute"
                      style={{
                        width: '179px',
                        height: '28px',
                        left: 'calc(50% - 179px/2)',
                        top: '107px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '29px',
                        textAlign: 'center',
                        color: '#11192C'
                      }}
                    >
                      {partner.name}
                    </div>
                  </div>
                ))}
                
                {/* 복제본 (무한 루프용) */}
                {partners.map((partner) => (
                  <div
                    key={`${partner.id}-clone`}
                    className="relative flex-shrink-0"
                    style={{
                      width: '179px',
                      height: '155px',
                      background: 'linear-gradient(180deg, #10B981 0%, #BFCAFF 100%)',
                      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                      borderRadius: '8px'
                    }}
                  >
                    {/* 로고 */}
                    <div
                      className="absolute"
                      style={{
                        width: '75px',
                        height: '75px',
                        left: 'calc(50% - 75px/2)',
                        top: '15px',
                        background: `url(${partner.logo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '10px'
                      }}
                    />
                    
                    {/* 파트너 이름 */}
                    <div
                      className="absolute"
                      style={{
                        width: '179px',
                        height: '28px',
                        left: 'calc(50% - 179px/2)',
                        top: '107px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '29px',
                        textAlign: 'center',
                        color: '#11192C'
                      }}
                    >
                      {partner.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 추가 파트너 텍스트 */}
            <div
              className="w-full h-[28px] text-center mb-[46px]"
              style={{
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: '28px',
                color: '#FFFFFF'
              }}
            >
              그 외 + 20개사
            </div>

            {/* 하단 메시지 */}
            <div className="w-full">
              <p
                className="w-full h-[28px] text-center"
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(18px, 2.5vw, 24px)',
                  lineHeight: '28px',
                  color: '#FFFFFF'
                }}
              >
                "ADEN은 지금 이 순간에도 <br className="md:hidden" />새로운 파트너를 맞이하고 있습니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}