'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Q. 우리 앱 릴리즈 없이 시작 가능한가요?',
    answer: '네, 가능합니다. 아덴의 솔루션은 SDK 방식으로 빠르게 통합할 수 있으며, 기존 앱 구조를 변경하지 않고도 시작할 수 있습니다.',
  },
  {
    question: 'Q. 우리 브랜드 톤에 맞춘 디자인이 가능한가요',
    answer: '물론입니다. 귀사의 브랜드 아이덴티티에 맞춰 색상, 폰트, UI 요소를 완벽하게 커스터마이징할 수 있습니다.',
  },
  {
    question: 'Q. 인벤토리(광고 물량)는 충분한가요?',
    answer: '아덴은 다양한 프리미엄 광고주와 파트너십을 맺고 있어 충분한 광고 인벤토리를 보유하고 있습니다. 안정적인 광고 노출을 보장합니다.',
  },
  {
    question: 'Q. 정산·차감 투명성은 어떻게 담보하나요?',
    answer: '실시간 대시보드를 통해 모든 거래 내역을 투명하게 확인하실 수 있으며, 정기적인 리포트를 제공합니다. 블록체인 기술을 활용한 투명한 정산 시스템을 갖추고 있습니다.',
  },
  {
    question: 'Q. 기존 벤더와 병행이 가능한가요?',
    answer: '네, 가능합니다. 기존 광고 솔루션과 함께 병행하여 운영할 수 있으며, 단계적으로 전환하실 수도 있습니다.',
  },
];

export default function QuestionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-20">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="max-w-[896px] mx-auto">
          {/* 헤더 */}
          <div className="mb-[64px] text-center">
            <h2 className="font-['Noto_Sans_KR'] font-medium text-[36px] leading-[40px] text-[#111827] mb-4">
              자주 묻는 질문
            </h2>
            <p className="font-['Noto_Sans_KR'] font-medium text-[20px] leading-[28px] text-[#4B5563]">
              궁금한 점을 빠르게 확인해보세요
            </p>
          </div>

          {/* FAQ 아코디언 */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full h-[56px] px-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-['Noto_Sans_KR'] font-medium text-[16px] leading-[24px] text-[#111827]">
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
                    <p className="font-['Noto_Sans_KR'] text-[14px] leading-[22px] text-[#6B7280]">
                      {faq.answer}
                    </p>
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

