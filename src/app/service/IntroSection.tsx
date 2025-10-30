'use client';
export default function IntroSection() {
  return (
    <section className="w-full bg-background overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px] sm:py-[60px] md:py-[80px]">
          <div className="relative w-full max-w-[1280px] mx-auto">
            {/* Header */}
            <div className="w-full mb-[64px]">
              {/* 제목 */}
              <h2 
                className="w-full text-center mb-[16px]"
                style={{
                  fontFamily: 'Noto Sans KR',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(24px, 3.5vw, 36px)',
                  lineHeight: '40px',
                  color: '#111827'
                }}
              >
                데이터 기반 광고 네트워크
              </h2>
              
              {/* 설명 */}
              <p 
                className="w-full text-center px-4"
                style={{
                  fontFamily: 'Noto Sans KR',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(16px, 2vw, 24px)',
                  lineHeight: '28px',
                  color: '#4B5563'
                }}
              >
                에덴은 유저의 특성에 맞춘 개인화된 미션을 통해 브랜드와 소비자를 연결하는 리워드 광고 네트워크입니다.
              </p>
            </div>

            {/* 통계 카드 섹션 */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
              {/* 카드 1: 300만 유저 */}
              <div 
                className="w-full h-[244px] rounded-[16px] flex flex-col items-center justify-between py-[32px] px-[32px]"
                style={{
                  background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 70.71%)'
                }}
              >
                {/* 원형 차트 아이콘 */}
                <div className="w-[96px] h-[96px]">
                  <svg className="w-[96px] h-[96px]" viewBox="0 0 96 96">
                    {/* 배경 원 */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="6.4"
                    />
                    {/* 진행 원 (300만 표현) */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="6.4"
                      strokeDasharray="281.6"
                      strokeDashoffset="70.4"
                      transform="rotate(-90 48 48)"
                    />
                    {/* 텍스트 */}
                    <text
                      x="48"
                      y="56"
                      textAnchor="middle"
                      style={{
                        fontFamily: 'Noto Sans KR',
                        fontWeight: 500,
                        fontSize: '24px',
                        fill: '#059669'
                      }}
                    >
                      300만
                    </text>
                  </svg>
                </div>
                
                <div className="flex flex-col gap-2 text-center">
                  {/* 제목 */}
                  <p
                    style={{
                      fontFamily: 'Noto Sans KR',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: '#111827'
                    }}
                  >
                    일 평균 유입 유저
                  </p>
                  
                  {/* 설명 */}
                  <p
                    style={{
                      fontFamily: 'Noto Sans KR',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '24px',
                      color: '#4B5563'
                    }}
                  >
                    매일 300만명의 활성 사용자
                  </p>
                </div>
              </div>

              {/* 카드 2: 72% 재방문율 */}
              <div 
                className="w-full h-[244px] rounded-[16px] flex flex-col items-center justify-between py-[32px] px-[32px]"
                style={{
                  background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 70.71%)'
                }}
              >
                {/* 원형 차트 아이콘 */}
                <div className="w-[96px] h-[96px]">
                  <svg className="w-[96px] h-[96px]" viewBox="0 0 96 96">
                    {/* 배경 원 */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="6.4"
                    />
                    {/* 진행 원 (72%) */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="6.4"
                      strokeDasharray="281.6"
                      strokeDashoffset="78.85"
                      transform="rotate(-90 48 48)"
                    />
                    {/* 텍스트 */}
                    <text
                      x="48"
                      y="56"
                      textAnchor="middle"
                      style={{
                        fontFamily: 'Noto Sans KR',
                        fontWeight: 500,
                        fontSize: '24px',
                        fill: '#2563EB'
                      }}
                    >
                      72%
                    </text>
                  </svg>
                </div>
                
                <div className="flex flex-col gap-2 text-center">
                  {/* 제목 */}
                  <p
                    style={{
                      fontFamily: 'Noto Sans KR',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: '#111827'
                    }}
                  >
                    리워드 유저 재방문율
                  </p>
                  
                  {/* 설명 */}
                  <p
                    style={{
                      fontFamily: 'Noto Sans KR',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '24px',
                      color: '#4B5563'
                    }}
                  >
                    높은 사용자 유지율
                  </p>
                </div>
              </div>

              {/* 카드 3: 9회 참여 */}
              <div 
                className="w-full h-[244px] rounded-[16px] flex flex-col items-center justify-between py-[32px] px-[32px]"
                style={{
                  background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 70.71%)'
                }}
              >
                {/* 원형 차트 아이콘 */}
                <div className="w-[96px] h-[96px]">
                  <svg className="w-[96px] h-[96px]" viewBox="0 0 96 96">
                    {/* 배경 원 */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="6.4"
                    />
                    {/* 진행 원 (9회) */}
                    <circle
                      cx="48"
                      cy="48"
                      r="44.8"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="6.4"
                      strokeDasharray="281.6"
                      strokeDashoffset="140.8"
                      transform="rotate(-90 48 48)"
                    />
                    {/* 텍스트 */}
                    <text
                      x="48"
                      y="56"
                      textAnchor="middle"
                      style={{
                        fontFamily: 'Noto Sans KR',
                        fontWeight: 500,
                        fontSize: '24px',
                        fill: '#9333EA'
                      }}
                    >
                      9회
                    </text>
                  </svg>
                </div>
                
                <div className="flex flex-col gap-2 text-center">
                  {/* 제목 */}
                  <p
                    style={{
                      fontFamily: 'Noto Sans KR',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: '#111827'
                    }}
                  >
                    일 평균 유저 참여
                  </p>
                  
                  {/* 설명 */}
                  <p
                    style={{
                      fontFamily: 'Noto Sans KR',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '24px',
                      color: '#4B5563'
                    }}
                  >
                    활발한 참여 생태계
                  </p>
                </div>
              </div>
            </div>

            {/* 인용문 섹션 */}
            <div className="w-full mt-[64px]">
              <p
                className="w-full text-center px-4"
                style={{
                  fontFamily: 'Noto Sans KR',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(20px, 3vw, 32px)',
                  lineHeight: '1.5',
                  color: '#4B5563'
                }}
              >
                "개인화된 미션으로 광고의 피로가 아닌 새로운 재미를 선사합니다"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}