'use client';
import { MoveRight } from 'lucide-react';

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-[#F9FAFB] overflow-hidden py-[40px] sm:py-[60px] md:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="w-full mb-[68px]">
            {/* 제목 */}
            <h2 
              className="w-full text-center mb-[16px]"
              style={{
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 'clamp(24px, 3.5vw, 36px)',
                lineHeight: '40px',
                color: '#111827'
              }}
            >
              Aden Loop 구조
            </h2>
            
            {/* 설명 - 화살표 포함 */}
            <div 
              className="w-full flex flex-wrap items-center justify-center gap-2 md:gap-4 px-4"
              style={{
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 'clamp(16px, 2.5vw, 32px)',
                lineHeight: '28px',
                color: '#4B5563'
              }}
            >
              <span>광고주</span>
              <MoveRight size={28} className="hidden sm:inline" />
              <span>매체</span>
              <MoveRight size={28} className="hidden sm:inline" />
              <span>유저</span>
              <MoveRight size={28} className="hidden sm:inline" />
              <span>리워드</span>
              <MoveRight size={28} className="hidden sm:inline" />
              <span>재참여</span>
              <MoveRight size={28} className="hidden sm:inline" />
              <span>매출 증가</span>
            </div>
          </div>

          {/* 순환 구조 다이어그램 */}
          <div className="w-full flex justify-center mb-[64px]">
            <div 
              className="relative"
              style={{
                width: 'min(384px, 75vw)',
                height: 'min(384px, 75vw)',
                maxWidth: '384px',
                maxHeight: '384px'
              }}
            >
              {/* 원형 테두리 */}
              <div 
                className="absolute w-full h-full"
                style={{
                  border: '4px solid #A7F3D0',
                  borderRadius: '9999px',
                  boxSizing: 'border-box'
                }}
              >
                {/* 중앙 ADEN 텍스트 */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    lineHeight: '48px',
                    color: '#059669'
                  }}
                >
                  ADEN
                </div>

                {/* 광고주 - 상단 */}
                <div 
                  className="absolute flex items-center justify-center left-1/2 transform -translate-x-1/2"
                  style={{
                    width: '88px',
                    height: '36px',
                    top: '-16px',
                    background: '#10B981',
                    borderRadius: '8px'
                  }}
                >
                  <span
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    광고주
                  </span>
                </div>

                {/* 매체 - 우측 상단 */}
                <div 
                  className="absolute flex items-center justify-center"
                  style={{
                    width: '88px',
                    height: '36px',
                    right: '-23px',
                    top: '22.7%',
                    background: '#3B82F6',
                    borderRadius: '8px'
                  }}
                >
                  <span
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    매체
                  </span>
                </div>

                {/* 유저 - 우측 하단 */}
                <div 
                  className="absolute flex items-center justify-center"
                  style={{
                    width: '88px',
                    height: '36px',
                    right: '-23px',
                    bottom: '20.7%',
                    background: '#A855F7',
                    borderRadius: '8px'
                  }}
                >
                  <span
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    유저
                  </span>
                </div>

                {/* 리워드 - 하단 */}
                <div 
                  className="absolute flex items-center justify-center left-1/2 transform -translate-x-1/2"
                  style={{
                    width: '88px',
                    height: '36px',
                    bottom: '-16px',
                    background: '#F97316',
                    borderRadius: '8px'
                  }}
                >
                  <span
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    리워드
                  </span>
                </div>

                {/* 재참여 - 좌측 하단 */}
                <div 
                  className="absolute flex items-center justify-center"
                  style={{
                    width: '88px',
                    height: '36px',
                    left: '-23px',
                    bottom: '20.7%',
                    background: '#EC4899',
                    borderRadius: '8px'
                  }}
                >
                  <span
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    재참여
                  </span>
                </div>

                {/* 매출증가 - 좌측 상단 */}
                <div 
                  className="absolute flex items-center justify-center"
                  style={{
                    width: '88px',
                    height: '36px',
                    left: '-23px',
                    top: '22.7%',
                    background: '#22C55E',
                    borderRadius: '8px'
                  }}
                >
                  <span
                    style={{
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px',
                      textAlign: 'center',
                      color: '#FFFFFF'
                    }}
                  >
                    매출증가
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 설명 카드 */}
          <div className="w-full max-w-[896px] mx-auto px-4">
            <div 
              className="w-full bg-white rounded-[16px] p-6 md:p-8"
              style={{
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* 제목 */}
              <h3 
                className="mb-6"
                style={{
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: 'clamp(20px, 2.5vw, 24px)',
                  lineHeight: '29px',
                  color: '#111827'
                }}
              >
                "새로운 상생 관계를 설계합니다."
              </h3>

              {/* 설명 컨테이너 */}
              <div className="space-y-4">
                {/* 첫 번째 문단 */}
                <p
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    lineHeight: '1.5',
                    color: '#374151'
                  }}
                >
                  Aden은 단순히 광고를 나열하지 않습니다. <br />
                  다양한 데일리 미션 구조로 피로도를 줄이고, 유저의 하루 루틴 속으로 광고를 녹여냅니다.
                </p>

                {/* 두 번째 문단 */}
                <p
                  style={{
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    lineHeight: '1.5',
                    color: '#374151'
                  }}
                >
                  어렵지 않은 미션이라는 일관성, 투명한 정산 구조로 <br />
                  광고주, 매체사, 그리고 Aden이 함께 성장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}