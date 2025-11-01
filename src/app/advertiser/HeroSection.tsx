'use client';
import { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const [beforeRank, setBeforeRank] = useState(100)
  const [afterRank, setAfterRank] = useState(50)

  const handleStartCampaign = () => {
    // Handle campaign start action
  }

  // 숫자 카운트 애니메이션
  useEffect(() => {
    const beforeTimer = setTimeout(() => {
      const beforeInterval = setInterval(() => {
        setBeforeRank((prev) => {
          if (prev <= 50) {
            clearInterval(beforeInterval)
            return 50
          }
          return prev - 2
        })
      }, 100)
      return () => clearInterval(beforeInterval)
    }, 400)

    const afterTimer = setTimeout(() => {
      const afterInterval = setInterval(() => {
        setAfterRank((prev) => {
          if (prev <= 1) {
            clearInterval(afterInterval)
            return 1
          }
          return prev - 2
        })
      }, 30)
      return () => clearInterval(afterInterval)
    }, 1000)

    return () => {
      clearTimeout(beforeTimer)
      clearTimeout(afterTimer)
    }
  }, [])

  return (
    <section className="w-full bg-gradient-to-br from-[#169B68] from-15% to-[#F5F97F] to-85% relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-[28px] sm:pt-[40px] md:pt-[56px] pb-[28px] sm:pb-[40px] md:pb-[56px]">
          <div className="flex flex-col lg:flex-row justify-start items-center gap-[20px] lg:gap-[40px]">
            {/* Left Content */}
            <div className="w-full lg:w-[60%] flex flex-col gap-[20px] sm:gap-[30px] md:gap-[40px] items-center lg:items-start text-center lg:text-left">
              <div className="w-full lg:w-[92%] flex flex-col gap-[11px] sm:gap-[16px] md:gap-[22px] items-center lg:items-start">
                <h1 
                  className="w-full font-bold text-white mt-[32px] lg:mt-0"
                  style={{ 
                    fontFamily: 'Noto Sans KR',
                    fontSize: 'clamp(36px, 6vw, 64px)',
                    lineHeight: '1.125'
                  }}
                >
                  CPA 랭킹<br />부스팅형 광고
                </h1>
                <p 
                  className="w-full font-medium text-white"
                  style={{ 
                    fontFamily: 'Noto Sans KR',
                    fontSize: 'clamp(16px, 2.2vw, 20px)',
                    lineHeight: '1.4',
                    marginBottom: 'clamp(16px, 2.5vw, 24px)'
                  }}
                >
                  SMB(중소사업자)부터 대형 브랜드까지 <br className="hidden sm:block" /> 네이버 쇼핑·플레이스 순위에 직접 영향을 주는 <br className="hidden sm:block" /> 단 하나의 퍼포먼스 미션
                </p>
                <div className="w-full max-w-[541px] min-h-[58px] bg-[#ECFDF5] border border-[#A7F3D0] rounded-[8px] px-[17px] py-[17px] flex items-center">
                  <p 
                    className="font-medium text-[#065F46]"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      lineHeight: '1.2'
                    }}
                  >
                    ADEN은 광고주의 "전환율"만으로 평가받습니다.
                  </p>
                </div>
              </div>
              <Button
                onClick={handleStartCampaign}
                className="flex items-center justify-center gap-[6px] w-full sm:w-auto min-w-[280px] sm:min-w-[324px] h-[52px] sm:h-[56px] lg:h-[60px] bg-[#169B68] hover:bg-[#138558] transition-colors rounded-[8px] text-white font-medium px-6"
                style={{ 
                  fontFamily: 'Noto Sans KR',
                  fontSize: 'clamp(16px, 2vw, 18px)',
                  lineHeight: '1.2'
                }}
              >
                <svg 
                  viewBox="0 0 18 18" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ 
                    width: 'clamp(16px, 2vw, 18px)', 
                    height: 'clamp(16px, 2vw, 18px)' 
                  }}
                >
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
            <div className="w-full lg:w-[48%] flex justify-center items-center order-first lg:order-last">
              <div className="w-full max-w-[500px] bg-white rounded-2xl shadow-[0px_25px_50px_#0000003f] p-[24px] sm:p-[28px] md:p-[32px] animate-[fadeInUp_0.8s_ease-out]">
                <div className="flex flex-col gap-[8px] items-center mb-[20px] sm:mb-[24px] animate-[fadeIn_0.6s_ease-out]">
                  <h3 
                    className="font-medium text-center text-[#111827]"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(18px, 2.2vw, 20px)',
                      lineHeight: '1.2'
                    }}
                  >
                    네이버 쇼핑/플레이스 순위
                  </h3>
                  <p 
                    className="font-medium text-center text-[#4b5563]"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      lineHeight: '1.25'
                    }}
                  >
                    빠르고 확실한 랭킹 상승 효과
                  </p>
                </div>

                <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[26px] items-center">
                  {/* Before Ranking */}
                  <div className="w-full bg-[#fef2f2] rounded-base p-[14px] sm:p-[16px] flex justify-between items-center animate-[slideInLeft_0.6s_ease-out_0.3s_both]">
                    <div className="flex items-center gap-[10px] sm:gap-[12px]">
                      <div 
                        className="bg-accent-red rounded-2xl flex items-center justify-center"
                        style={{
                          width: 'clamp(28px, 4vw, 32px)',
                          height: 'clamp(28px, 4vw, 32px)'
                        }}
                      >
                        <span 
                          className="font-medium text-white"
                          style={{ 
                            fontFamily: 'Noto Sans KR',
                            fontSize: 'clamp(14px, 1.8vw, 16px)',
                            lineHeight: '1.25'
                          }}
                        >
                          {beforeRank}
                        </span>
                      </div>
                      <span 
                        className="font-medium text-[#374151]"
                        style={{ 
                          fontFamily: 'Noto Sans KR',
                          fontSize: 'clamp(14px, 1.8vw, 16px)',
                          lineHeight: '1.25'
                        }}
                      >
                        기존 순위
                      </span>
                    </div>
                    <svg 
                      viewBox="0 0 12 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: 'clamp(10px, 1.5vw, 12px)',
                        height: 'clamp(20px, 3vw, 24px)'
                      }}
                    >
                      <path d="M6 4L6 20M6 20L2 16M6 20L10 16" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Arrow */}
                  <svg 
                    viewBox="0 0 26 30" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="animate-[bounce_1.5s_ease-in-out_0.8s_infinite]"
                    style={{
                      width: 'clamp(22px, 3vw, 26px)',
                      height: 'clamp(26px, 3.5vw, 30px)'
                    }}
                  >
                    <path d="M13 3L13 27M13 27L6 20M13 27L20 20" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* After Ranking */}
                  <div className="w-full bg-[#ECFDF5] rounded-base p-[14px] sm:p-[16px] flex justify-between items-center animate-[slideInRight_0.6s_ease-out_0.9s_both]">
                    <div className="flex items-center gap-[10px] sm:gap-[12px]">
                      <div 
                        className="bg-accent-emerald rounded-2xl flex items-center justify-center"
                        style={{
                          width: 'clamp(28px, 4vw, 32px)',
                          height: 'clamp(28px, 4vw, 32px)'
                        }}
                      >
                        <span 
                          className="font-medium text-white"
                          style={{ 
                            fontFamily: 'Noto Sans KR',
                            fontSize: 'clamp(14px, 1.8vw, 16px)',
                            lineHeight: '1.25'
                          }}
                        >
                          {afterRank}
                        </span>
                      </div>
                      <span 
                        className="font-medium text-[#374151]"
                        style={{ 
                          fontFamily: 'Noto Sans KR',
                          fontSize: 'clamp(14px, 1.8vw, 16px)',
                          lineHeight: '1.25'
                        }}
                      >
                        ADEN 후 순위
                      </span>
                    </div>
                    <svg 
                      viewBox="0 0 12 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: 'clamp(10px, 1.5vw, 12px)',
                        height: 'clamp(20px, 3vw, 24px)'
                      }}
                    >
                      <path d="M6 20L6 4M6 4L2 8M6 4L10 8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="mt-[12px] sm:mt-[14px] mb-[8px] text-center animate-[fadeIn_0.6s_ease-out_1.2s_both]">
                  <span 
                    className="font-medium text-[#059669]"
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      lineHeight: '1.2'
                    }}
                  >
                    Rank UP by Inflow
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-[40px] sm:mt-[60px] md:mt-[80px] text-center flex justify-center px-4">
            <p 
              className="w-full max-w-[1010px] font-medium text-[#065F46]"
              style={{ 
                fontFamily: 'Noto Sans KR',
                fontSize: 'clamp(16px, 2vw, 18px)',
                lineHeight: '1.55'
              }}
            >
              ADEN의 광고는 노출에서 시작하여 유저 액션의 완료까지 매끄럽게 진행됩니다. 전환율을 높고 이탈율은 적은 이상향을 향해 나아갑니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

