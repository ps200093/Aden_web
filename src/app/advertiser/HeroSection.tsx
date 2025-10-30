'use client';
import { useState, ChangeEvent } from 'react';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState('')

  const handleStartCampaign = () => {
    // Handle campaign start action
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <section className="w-full bg-gradient-to-br from-[#169B68] from-15% to-[#F5F97F] to-85% relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-[28px] sm:pt-[40px] md:pt-[56px] pb-[28px] sm:pb-[40px] md:pb-[56px]">
          <div className="flex flex-col lg:flex-row justify-start items-center gap-[20px] lg:gap-[40px]">
            {/* Left Content */}
            <div className="w-full lg:w-[60%] flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] items-start">
              <div className="w-full lg:w-[92%] flex flex-col gap-[11px] sm:gap-[16px] md:gap-[22px] items-start">
                <h1 
                  className="max-w-[375px] text-[64px] font-bold leading-[72px] text-left text-white"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  CPA 랭킹<br />부스팅형 광고
                </h1>
                <p 
                  className="max-w-[541px] text-[20px] font-medium leading-[28px] text-left text-white mb-[24px]"
                  style={{ fontFamily: 'Noto Sans KR' }}
                >
                  SMB(중소사업자)부터 대형 브랜드까지 <br /> 네이버 쇼핑·플레이스 순위에 직접 영향을 주는 <br /> 단 하나의 퍼포먼스 미션
                </p>
                <div className="w-full">
                  <EditText
                    placeholder={'ADEN은 광고주의 "전환율"만으로 평가받습니다.'}
                    value={searchValue}
                    onChange={handleSearchChange}
                    className="w-full max-w-[540.97px] h-[58px] bg-[#ECFDF5] border border-[#A7F3D0] rounded-[8px] px-[17px] py-[17px] text-[16px] font-medium leading-[19px] text-[#065F46] placeholder:text-[#065F46]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  />
                </div>
              </div>
              <Button
                onClick={handleStartCampaign}
                className="flex items-center justify-center gap-[6px] w-[324.14px] h-[60px] bg-[#169B68] rounded-[8px] text-white text-[18px] font-medium leading-[22px] pl-[32px] pr-[31.14px]"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Y축과 X축을 부드럽게 연결 */}
                  <path d="M2 2 L2 15 Q2 16 3 16 L17 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  {/* 라인 차트 */}
                  <path d="M5 12L8 8L12 10L16 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="5" cy="12" r="1.5" fill="white"/>
                  <circle cx="8" cy="8" r="1.5" fill="white"/>
                  <circle cx="12" cy="10" r="1.5" fill="white"/>
                  <circle cx="16" cy="3" r="1.5" fill="white"/>
                </svg>
                <span className="text-center">랭킹 부스팅 캠페인 시작하기</span>
              </Button>
            </div>

            {/* Right Content - Ranking Card */}
            <div className="w-full lg:w-[48%] flex justify-center items-center">
              <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-[0px_25px_50px_#0000003f] p-[24px] sm:p-[28px] md:p-[32px]">
                <div className="flex flex-col gap-[8px] items-center mb-[24px]">
                  <h3 
                    className="text-[18px] sm:text-[20px] font-medium leading-[22px] sm:leading-[24px] text-center text-[#111827]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    네이버 쇼핑/플레이스 순위
                  </h3>
                  <p 
                    className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-center text-[#4b5563]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    바르고 확실한 랭킹 상승 효과
                  </p>
                </div>

                <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[26px] items-center">
                  {/* Before Ranking */}
                  <div className="w-full bg-[#fef2f2] rounded-base p-[16px] flex justify-between items-center">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[32px] h-[32px] bg-accent-red rounded-2xl flex items-center justify-center">
                        <span 
                          className="text-[16px] font-medium leading-[20px] text-white"
                          style={{ fontFamily: 'Noto Sans KR' }}
                        >
                          50
                        </span>
                      </div>
                      <span 
                        className="text-[16px] font-medium leading-[20px] text-[#374151]"
                        style={{ fontFamily: 'Noto Sans KR' }}
                      >
                        기존 순위
                      </span>
                    </div>
                    <svg className="w-[12px] h-[24px]" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4L6 20M6 20L2 16M6 20L10 16" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Arrow */}
                  <svg className="w-[26px] h-[30px]" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 3L13 27M13 27L6 20M13 27L20 20" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* After Ranking */}
                  <div className="w-full bg-[#ECFDF5] rounded-base p-[16px] flex justify-between items-center">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[32px] h-[32px] bg-accent-emerald rounded-2xl flex items-center justify-center">
                        <span 
                          className="text-[16px] font-medium leading-[20px] text-white"
                          style={{ fontFamily: 'Noto Sans KR' }}
                        >
                          1
                        </span>
                      </div>
                      <span 
                        className="text-[16px] font-medium leading-[20px] text-[#374151]"
                        style={{ fontFamily: 'Noto Sans KR' }}
                      >
                        ADEN 후 순위
                      </span>
                    </div>
                    <svg className="w-[12px] h-[24px]" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 20L6 4M6 4L2 8M6 4L10 8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="mt-[14px] mb-[8px] text-center">
                  <span 
                    className="text-[20px] sm:text-[24px] font-medium leading-[24px] sm:leading-[29px] text-[#059669]"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  >
                    Rank UP by Inflow
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-[40px] sm:mt-[60px] md:mt-[80px] text-center flex justify-center">
            <p 
              className="max-w-[1010px] text-[18px] font-medium leading-[28px] text-[#065F46]"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              ADEN의 광고는 노출에서 시작하여 유저 액션의 완료까지 매끄럽게 진행됩니다. 전환율을 높고 이탈율은 적은 이상향을 향해 나아갑니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

