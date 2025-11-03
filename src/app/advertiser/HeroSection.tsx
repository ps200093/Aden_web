'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const router = useRouter();
  const [beforeRank, setBeforeRank] = useState(100)
  const [afterRank, setAfterRank] = useState(50)

  const handleStartCampaign = () => {
    router.push('/contact');
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
        <div className="pt-[32px] sm:pt-[48px] md:pt-[56px] lg:pt-[64px] pb-[32px] sm:pb-[48px] md:pb-[56px] lg:pb-[64px]">
          <div className="flex flex-col lg:flex-row justify-start items-center gap-[24px] sm:gap-[32px] lg:gap-[40px]">
            {/* Left Content */}
            <div className="w-full lg:w-[60%] flex flex-col gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] items-center lg:items-start text-center lg:text-left">
              <div className="w-full lg:w-[92%] flex flex-col gap-[20px] sm:gap-[18px] md:gap-[20px] lg:gap-[22px] items-center lg:items-start">
                <h1 
                  className="w-full font-bold text-white mt-[24px] sm:mt-[28px] md:mt-[32px] lg:mt-0"
                  style={{ 
                    fontSize: 'clamp(32px, 5vw + 8px, 64px)',
                    lineHeight: 'clamp(1.2, 1.125 + 0.05vw, 1.3)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  CPA 기반<br />랭킹 부스팅형 광고
                </h1>
                <p 
                  className="w-full font-medium text-white"
                  style={{ 
                    fontSize: 'clamp(15px, 1.5vw + 6px, 20px)',
                    lineHeight: 'clamp(1.5, 1.4 + 0.1vw, 1.6)',
                    marginBottom: 'clamp(12px, 1.5vw + 8px, 24px)'
                  }}
                >
                  SMB(중소사업자)부터 대형 브랜드까지 <br className="hidden sm:block" /> N사사 쇼핑·플레이스 순위에 직접 영향을 주는 <br className="hidden sm:block" /> 단 하나의 퍼포먼스 미션
                </p>
                <div className="w-full max-w-[541px] bg-[#ECFDF5] border border-[#A7F3D0] rounded-[6px] sm:rounded-[8px] px-[14px] sm:px-[17px] py-[14px] sm:py-[17px] flex items-center"
                  style={{
                    minHeight: 'clamp(54px, 8vw, 58px)'
                  }}
                >
                  <p 
                    className="font-medium text-[#065F46]"
                    style={{ 
                      fontSize: 'clamp(13px, 1.2vw + 4px, 16px)',
                      lineHeight: 'clamp(1.3, 1.2 + 0.1vw, 1.4)'
                    }}
                  >
                    ADEN은 광고주의 "매출 전환율"만으로 평가받습니다.
                  </p>
                </div>
              </div>
              <Button
                onClick={handleStartCampaign}
                className="flex items-center justify-center w-full sm:w-auto min-w-[280px] sm:min-w-[300px] lg:min-w-[324px] bg-[#169B68] hover:bg-[#138558] transition-colors rounded-[6px] sm:rounded-[8px] text-white font-medium"
                style={{ 
                  fontSize: 'clamp(15px, 1.2vw + 6px, 18px)',
                  lineHeight: '1.3',
                  height: 'clamp(50px, 8vw, 60px)',
                  padding: '0 clamp(20px, 3vw, 24px)',
                  gap: 'clamp(6px, 0.8vw, 8px)'
                }}
              >
                <svg 
                  viewBox="0 0 18 18" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ 
                    width: 'clamp(15px, 1.5vw + 2px, 18px)', 
                    height: 'clamp(15px, 1.5vw + 2px, 18px)',
                    flexShrink: '0'
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
              <div className="w-full max-w-[500px] bg-white rounded-xl sm:rounded-2xl shadow-[0px_25px_50px_#0000003f] animate-[fadeInUp_0.8s_ease-out]"
                style={{
                  padding: 'clamp(20px, 3vw + 8px, 32px)'
                }}
              >
                <div className="flex flex-col items-center animate-[fadeIn_0.6s_ease-out]"
                  style={{
                    gap: 'clamp(6px, 1vw, 8px)',
                    marginBottom: 'clamp(18px, 2.5vw + 4px, 24px)'
                  }}
                >
                  <h3 
                    className="font-medium text-center text-[#111827]"
                    style={{ 
                      fontSize: 'clamp(17px, 1.5vw + 4px, 20px)',
                      lineHeight: 'clamp(1.2, 1.2 + 0.05vw, 1.3)'
                    }}
                  >
                    N사 쇼핑/플레이스 순위
                  </h3>
                  <p 
                    className="font-medium text-center text-[#4b5563]"
                    style={{ 
                      fontSize: 'clamp(13px, 1.2vw + 3px, 16px)',
                      lineHeight: 'clamp(1.3, 1.25 + 0.05vw, 1.35)'
                    }}
                  >
                    빠르고 확실한 랭킹 상승 효과
                  </p>
                </div>

                <div className="flex flex-col items-center"
                  style={{
                    gap: 'clamp(16px, 2.5vw + 4px, 26px)'
                  }}
                >
                  {/* Before Ranking */}
                  <div className="w-full bg-[#fef2f2] rounded-base flex justify-between items-center animate-[slideInLeft_0.6s_ease-out_0.3s_both]"
                    style={{
                      padding: 'clamp(12px, 2vw, 16px)'
                    }}
                  >
                    <div className="flex items-center"
                      style={{
                        gap: 'clamp(10px, 1.5vw, 12px)'
                      }}
                    >
                      <div 
                        className="bg-accent-red rounded-2xl flex items-center justify-center"
                        style={{
                          width: 'clamp(28px, 4vw + 2px, 32px)',
                          height: 'clamp(28px, 4vw + 2px, 32px)'
                        }}
                      >
                        <span 
                          className="font-medium text-white"
                          style={{ 
                            fontSize: 'clamp(13px, 1.2vw + 2px, 16px)',
                            lineHeight: '1.2'
                          }}
                        >
                          {beforeRank}
                        </span>
                      </div>
                      <span 
                        className="font-medium text-[#374151]"
                        style={{ 
                          fontSize: 'clamp(13px, 1.2vw + 2px, 16px)',
                          lineHeight: '1.3'
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
                        width: 'clamp(10px, 1.5vw + 1px, 12px)',
                        height: 'clamp(20px, 3vw + 2px, 24px)',
                        flexShrink: '0'
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
                      width: 'clamp(20px, 3vw + 2px, 26px)',
                      height: 'clamp(24px, 3.5vw + 2px, 30px)',
                      flexShrink: '0'
                    }}
                  >
                    <path d="M13 3L13 27M13 27L6 20M13 27L20 20" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                  {/* After Ranking */}
                  <div className="w-full bg-[#ECFDF5] rounded-base flex justify-between items-center animate-[slideInRight_0.6s_ease-out_0.9s_both]"
                    style={{
                      padding: 'clamp(12px, 2vw, 16px)'
                    }}
                  >
                    <div className="flex items-center"
                      style={{
                        gap: 'clamp(10px, 1.5vw, 12px)'
                      }}
                    >
                      <div 
                        className="bg-accent-emerald rounded-2xl flex items-center justify-center"
                        style={{
                          width: 'clamp(28px, 4vw + 2px, 32px)',
                          height: 'clamp(28px, 4vw + 2px, 32px)'
                        }}
                      >
                        <span 
                          className="font-medium text-white"
                          style={{ 
                            fontSize: 'clamp(13px, 1.2vw + 2px, 16px)',
                            lineHeight: '1.2'
                          }}
                        >
                          {afterRank}
                        </span>
                      </div>
                      <span 
                        className="font-medium text-[#374151]"
                        style={{ 
                          fontSize: 'clamp(13px, 1.2vw + 2px, 16px)',
                          lineHeight: '1.3'
                        }}
                      >
                        ADEN과 함께한 순위
                      </span>
                    </div>
                    <svg 
                      viewBox="0 0 12 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        width: 'clamp(10px, 1.5vw + 1px, 12px)',
                        height: 'clamp(20px, 3vw + 2px, 24px)',
                        flexShrink: '0'
                      }}
                    >
                      <path d="M6 20L6 4M6 4L2 8M6 4L10 8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div className="text-center animate-[fadeIn_0.6s_ease-out_1.2s_both]"
                  style={{
                    marginTop: 'clamp(10px, 1.5vw, 14px)',
                    marginBottom: 'clamp(6px, 1vw, 8px)'
                  }}
                >
                  <span 
                    className="font-medium text-[#059669]"
                    style={{ 
                      fontSize: 'clamp(17px, 2vw + 4px, 24px)',
                      lineHeight: '1.3'
                    }}
                  >
                    Rank UP by Inflow
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center flex justify-center px-4"
            style={{
              marginTop: 'clamp(36px, 6vw + 12px, 80px)'
            }}
          >
            <p 
              className="w-full max-w-[1010px] font-medium text-[#065F46]"
              style={{ 
                fontSize: 'clamp(14px, 1.2vw + 5px, 18px)',
                lineHeight: 'clamp(1.5, 1.55 + 0.05vw, 1.65)'
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

