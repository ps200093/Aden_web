'use client';
export default function ComparisonSection() {
  return (
    <section className="w-full bg-background-secondary">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px] sm:py-[60px] md:py-[80px]">
          {/* Header */}
          <div className="flex flex-col gap-[12px] items-center mb-[32px] sm:mb-[48px] md:mb-[62px] px-[20px] sm:px-[40px] md:px-[56px]">
            <h2 
              className="text-[24px] sm:text-[30px] md:text-[36px] font-medium leading-[29px] sm:leading-[37px] md:leading-[44px] text-center text-[#111827]"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              업계 비교 분석
            </h2>
            <p 
              className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-[#4b5563]"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              기존 업체 대비 ADEN의 차별화된 장점
            </p>
          </div>

          {/* Comparison Table */}
          <div className="w-full bg-white rounded-2xl shadow-[0px_10px_15px_#00000019] overflow-hidden">
            {/* Table Header */}
            <div className="bg-table-header flex">
              <div className="flex-1 text-center py-[16px] px-[34px]">
                <span 
                  className="text-[18px] sm:text-[20px] font-medium leading-[22px] sm:leading-[24px] text-[#111827]"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  구분
                </span>
              </div>
              <div className="flex-1 text-center py-[16px] px-[8px]">
                <span 
                  className="text-[18px] sm:text-[20px] font-medium leading-[22px] sm:leading-[24px] text-[#4b5563]"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  버즈빌·에디슨·SKP 등
                </span>
              </div>
              <div className="flex-1 text-center py-[16px] px-[34px]">
                <span 
                  className="text-[18px] sm:text-[20px] font-medium leading-[22px] sm:leading-[24px] text-[#059669]"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  ADEN
                </span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col">
              {/* Revenue Sharing */}
              <div className="flex border-b border-border-primary">
                <div className="flex-1 text-center py-[16px] px-[34px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#111827]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    수익배분/정산
                  </span>
                </div>
                <div className="flex-1 text-center py-[16px] px-[6px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#dc2626]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    네트워크 마진 큼, 정산 지연
                  </span>
                </div>
                <div className="flex-1 text-center py-[16px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#059669]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    매체 우선 Rev-Share, Net-7/14
                  </span>
                </div>
              </div>

              {/* Inventory Distribution */}
              <div className="flex bg-table-header border-b border-border-primary">
                <div className="flex-1 text-center py-[16px] px-[34px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#111827]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    인벤토리 배분
                  </span>
                </div>
                <div className="flex-1 text-center py-[16px] px-[34px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#dc2626]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    대형/금융권 중심
                  </span>
                </div>
                <div className="flex-1 text-center py-[16px] px-[20px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#059669]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    일일 500만 타로 균형 공급
                  </span>
                </div>
              </div>

              {/* UX/Branding */}
              <div className="flex border-b border-border-primary">
                <div className="flex-1 text-center py-[16px] px-[34px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#111827]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    UX/브랜딩
                  </span>
                </div>
                <div className="flex-1 text-center py-[16px] px-[10px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#dc2626]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    전용 오퍼월 → '광고' 인지
                  </span>
                </div>
                <div className="flex-1 text-center py-[16px] px-[34px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#059669]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    브랜드 맞춤형 UI
                  </span>
                </div>
              </div>

              {/* Implementation Difficulty */}
              <div className="flex bg-table-header border-b border-border-primary">
                <div className="flex-1 text-center py-[16px] px-[34px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#111827]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    도입 난이도
                  </span>
                </div>
                <div className="flex-1 text-center py-[16px] px-[34px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#dc2626]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    SDK 의존
                  </span>
                </div>
                <div className="flex-1 text-center py-[16px] px-[14px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#059669]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    SDK-less PoC → 경량 SDK
                  </span>
                </div>
              </div>

              {/* Transparency */}
              <div className="flex">
                <div className="flex-1 text-center py-[16px] px-[34px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#111827]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    투명성
                  </span>
                </div>
                <div className="flex-1 text-center py-[16px] px-[34px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#dc2626]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    집행 매체 비공개
                  </span>
                </div>
                <div className="flex-1 text-center py-[16px] px-[34px]">
                  <span 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#059669]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    매체 공개 + 지정 가능
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

