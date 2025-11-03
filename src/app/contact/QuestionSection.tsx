'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

type UserType = '매체사' | '광고주';

const faqDataByType: Record<UserType, FAQItem[]> = {
  매체사: [
    {
      question: 'Aden 오퍼월을 도입하면 어떤 효과가 있나요?',
      answer: '비용 없이 추가 매출 창출, 앱/웹 체류시간·재방문율 증가, 매체 브랜드 톤 그대로 유지합니다. "No-Cost Growth : 세 마리 토끼 잡기"',
    },
    {
      question: '사용자 경험을 해치지 않나요?',
      answer: '광고판 삽입 방식이 아닌, 매체 UI·톤 그대로 커스텀 적용됩니다. 출석형/게임형 UX로 참여율과 재방문율이 상승합니다.',
    },
    {
      question: '수익 배분은 어떻게 되나요?',
      answer: '기존 오퍼월 대비 매체 우선 수익 배분 구조를 제공합니다. (조건부로 프라임 공급 정책 포함 가능)',
    },
    {
      question: '매체의 도입 부담은 없나요?',
      answer: 'Web-App 연동으로 즉시 도입 가능하며, 경량 SDK(Server-driven)로 업데이트 부담을 최소화합니다. 매체 내부 개발 인력 요구 없습니다.',
    },
    {
      question: '운영/정산은 어떻게 확인하나요?',
      answer: 'Aden이 모두 전담합니다. 실시간 모니터링, 자동 인보이스, 전환 로그 제공으로 매체 운영팀은 리포트 확인만 하시면 됩니다.',
    },
    {
      question: '언제부터 수익이 발생하나요?',
      answer: '도입 즉시 가능합니다. 초기 매체는 우선 인벤토리 공급으로 첫 달부터 유의미한 매출 창출이 가능합니다.',
    },
    {
      question: '사용자 불만이나 CS는 어떻게 하나요?',
      answer: '전환 및 리워드 관련 CS는 Aden에서 직접 대응합니다. 매체 CS 부담은 없습니다.',
    },
  ],
  광고주: [
    {
      question: 'Aden 오퍼월은 어떤 광고 시스템인가요?',
      answer: 'Aden은 성과형(CPA) 랭킹 부스팅 미션 중심의 네이버 플레이스/쇼핑 특화 오퍼월입니다. 유저가 실제 행동을 완료했을 때만 비용이 발생합니다.',
    },
    {
      question: '광고 효율과 전환 품질은 어떻게 보장하나요?',
      answer: '실수요 기반 사용자 참여, 실시간 인증(로그인·세션 기반), 어뷰징/체리피커 자동 차단, 오프라인 매장 기반 미션도 적용 가능합니다. "숫자가 아니라, 실제 고객을 유도합니다."',
    },
    {
      question: '어떤 매체에 노출되며, 직접 지정도 가능한가요?',
      answer: '가능합니다 ✅<br/>대형 및 성장 중인 매체사에 맞춤 노출하여 원하는 타겟 중심 전환을 극대화합니다.',
    },
    {
      question: 'KR(전환) 수량이 부족하거나 초과되면?',
      answer: 'Aden은 충분한 인벤토리를 사전 확보하고, 발주량 대비 초과 유입을 세팅하여 미달 없는 운영(미달률 0 목표)을 지향합니다.',
    },
    {
      question: '최소 예산은 어떻게 되나요?',
      answer: '캠페인 목적 및 기간에 따라 달라지며, 목표 효율 기반 예산 설계를 진행합니다.',
    },
    {
      question: 'Fraud 혹은 어뷰징 발생 시 어떻게 처리되나요?',
      answer: '자동 차감 + 근거 로그 제공, 이의제기 SLA 보장, 광고주 손실 제로화 운영으로 처리합니다.',
    },
  ],
};

export default function QuestionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [userType, setUserType] = useState<UserType>('매체사');

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleToggle = () => {
    setUserType(prevType => prevType === '매체사' ? '광고주' : '매체사');
    setOpenIndex(null); // 타입 변경 시 열린 아코디언 닫기
  };

  const currentFaqData = faqDataByType[userType];

  return (
    <section className="w-full bg-[#F9FAFB] py-20">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="max-w-[896px] mx-auto">
          {/* 헤더 */}
          <div className="mb-[64px] text-center">
            <h2 className="font-medium text-[36px] leading-[40px] text-[#111827] mb-4">
              자주 묻는 질문
            </h2>
            <p className="font-medium text-[20px] leading-[28px] text-[#4B5563]">
              궁금한 점을 빠르게 확인해보세요
            </p>
          </div>

          {/* 사용자 타입 토글 */}
          <div className="flex justify-center mb-8">
            <div 
              className="relative inline-flex bg-[#F3F4F6] rounded-lg p-1 cursor-pointer"
              onClick={handleToggle}
            >
              {/* 슬라이딩 배경 */}
              <div
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-md shadow-md transition-all duration-300 ease-out"
                style={{
                  left: userType === '매체사' ? '4px' : 'calc(50% + 0px)',
                }}
              />
              
              {/* 버튼들 */}
              <div
                className={`relative z-10 px-8 py-2.5 rounded-md font-semibold text-[15px] leading-[20px] transition-all duration-300 pointer-events-none ${
                  userType === '매체사'
                    ? 'text-[#2563EB] scale-105'
                    : 'text-[#9CA3AF]'
                }`}
              >
                매체사
              </div>
              <div
                className={`relative z-10 px-8 py-2.5 rounded-md font-semibold text-[15px] leading-[20px] transition-all duration-300 pointer-events-none ${
                  userType === '광고주'
                    ? 'text-[#2563EB] scale-105'
                    : 'text-[#9CA3AF]'
                }`}
              >
                광고주
              </div>
            </div>
          </div>

          {/* FAQ 아코디언 */}
          <div className="space-y-4">
            {currentFaqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full h-[56px] px-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-[16px] leading-[24px] text-[#111827]">
                    {faq.question}
                  </span>
                  <div className="flex items-center justify-center w-4 h-4 transition-transform duration-300" 
                       style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* 답변 영역 */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === index ? '200px' : '0',
                    opacity: openIndex === index ? '1' : '0',
                  }}
                >
                  <div className="px-6 py-4 border-t border-gray-100">
                    <p 
                      className="text-[14px] leading-[22px] text-[#6B7280]"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

