'use client';
import { Building, Smartphone, Send, Headphones } from 'lucide-react';
import { useState } from 'react';

export default function CounselSection() {
  const [formData, setFormData] = useState({
    inquiryType: 'advertiser', // 'advertiser' or 'publisher'
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    monthlyBudget: '',
    dau: '',
    message: '',
    agreeToPrivacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-[80px]">
      <div className="w-full max-w-[896px] mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-[0px_25px_50px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="p-[48px] bg-white">
              <div className="mb-[32px]">
                <h2 className="text-[#111827] text-[30px] font-medium leading-[36px] mb-[16px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  상담 신청하기
                </h2>
                <p className="text-[#4B5563] text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  전문 컨설턴트가 맞춤형 솔루션을 제안해드립니다
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-[24px]">
                {/* 문의 유형 */}
                <div>
                  <label className="block text-[#374151] text-[14px] font-medium leading-[17px] mb-[12px]" style={{ fontFamily: 'Noto Sans KR' }}>
                    문의 유형
                  </label>
                  <div className="flex gap-[12px]">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, inquiryType: 'advertiser' })}
                      className={`flex-1 h-[50px] rounded-lg border flex items-center justify-center gap-2 transition-colors ${
                        formData.inquiryType === 'advertiser'
                          ? 'border-[#10B981] bg-[#10B981]/5'
                          : 'border-[#D1D5DB] bg-white'
                      }`}
                    >
                      <Building size={16} className="text-[#374151]" />
                      <span className="text-[#374151] text-[16px] font-medium" style={{ fontFamily: 'Noto Sans KR' }}>
                        광고주
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, inquiryType: 'publisher' })}
                      className={`flex-1 h-[50px] rounded-lg border flex items-center justify-center gap-2 transition-colors ${
                        formData.inquiryType === 'publisher'
                          ? 'border-[#10B981] bg-[#10B981]/5'
                          : 'border-[#D1D5DB] bg-white'
                      }`}
                    >
                      <Smartphone size={16} className="text-[#374151]" />
                      <span className="text-[#374151] text-[16px] font-medium" style={{ fontFamily: 'Noto Sans KR' }}>
                        매체사
                      </span>
                    </button>
                  </div>
                </div>

                {/* 회사명 & 담당자명 */}
                <div className="flex gap-[16px]">
                  <div className="flex-1">
                    <label className="block text-[#374151] text-[14px] font-medium leading-[17px] mb-[8px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      회사명 *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="회사명을 입력하세요"
                      className="w-full h-[50px] px-[16px] border border-[#D1D5DB] rounded-lg text-[12px] placeholder:text-[#ADAEBC]"
                      style={{ fontFamily: 'Inter' }}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[#374151] text-[14px] font-medium leading-[17px] mb-[8px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      담당자명 *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="담당자명을 입력하세요"
                      className="w-full h-[50px] px-[16px] border border-[#D1D5DB] rounded-lg text-[12px] placeholder:text-[#ADAEBC]"
                      style={{ fontFamily: 'Inter' }}
                    />
                  </div>
                </div>

                {/* 이메일 & 연락처 */}
                <div className="flex gap-[16px]">
                  <div className="flex-1">
                    <label className="block text-[#374151] text-[14px] font-medium leading-[17px] mb-[8px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      이메일 *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@company.com"
                      className="w-full h-[50px] px-[16px] border border-[#D1D5DB] rounded-lg text-[12px] placeholder:text-[#ADAEBC]"
                      style={{ fontFamily: 'Inter' }}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[#374151] text-[#374151] text-[14px] font-medium leading-[17px] mb-[8px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      className="w-full h-[50px] px-[16px] border border-[#D1D5DB] rounded-lg text-[12px] placeholder:text-[#ADAEBC]"
                      style={{ fontFamily: 'Inter' }}
                    />
                  </div>
                </div>

                {/* 월 예산 / DAU */}
                <div className="flex gap-[16px]">
                  <div className="flex-1">
                    <label className="block text-[#374151] text-[14px] font-medium leading-[17px] mb-[8px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      월 예산 (광고주)
                    </label>
                    <select
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full h-[48px] px-[12px] border border-[#D1D5DB] rounded-lg text-[12px] appearance-none bg-white"
                      style={{ fontFamily: 'Inter' }}
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-1000">100만원 미만</option>
                      <option value="1000-3000">100만원 - 300만원</option>
                      <option value="3000-5000">300만원 - 500만원</option>
                      <option value="5000-10000">500만원 - 1,000만원</option>
                      <option value="over-10000">1,000만원 이상</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-[#374151] text-[14px] font-medium leading-[17px] mb-[8px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      DAU (매체사)
                    </label>
                    <select
                      value={formData.dau}
                      onChange={(e) => setFormData({ ...formData, dau: e.target.value })}
                      className="w-full h-[48px] px-[12px] border border-[#D1D5DB] rounded-lg text-[12px] appearance-none bg-white"
                      style={{ fontFamily: 'Inter' }}
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-10k">1만 미만</option>
                      <option value="10k-50k">1만 - 5만</option>
                      <option value="50k-100k">5만 - 10만</option>
                      <option value="100k-500k">10만 - 50만</option>
                      <option value="over-500k">50만 이상</option>
                    </select>
                  </div>
                </div>

                {/* 문의 내용 */}
                <div>
                  <label className="block text-[#374151] text-[14px] font-medium leading-[17px] mb-[8px]" style={{ fontFamily: 'Noto Sans KR' }}>
                    문의 내용
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="구체적인 문의사항이나 요청사항을 입력해주세요"
                    rows={4}
                    className="w-full px-[16px] py-[14px] border border-[#D1D5DB] rounded-lg text-[16px] placeholder:text-[#ADAEBC] resize-none"
                    style={{ fontFamily: 'Noto Sans KR' }}
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex items-start gap-[12px]">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={formData.agreeToPrivacy}
                    onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
                    className="mt-[2px] w-[16px] h-[16px] border-[0.5px] border-black rounded-sm"
                  />
                  <label htmlFor="privacy" className="flex-1 text-[#4B5563] text-[14px] font-medium leading-[17px]" style={{ fontFamily: 'Noto Sans KR' }}>
                    개인정보 수집 및 이용에 동의합니다.{' '}
                    <a href="#" className="text-[#059669] underline">
                      자세히보기
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-[56px] bg-gradient-to-r from-[#10B981] to-[#059669] rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Send size={16} className="text-white" />
                  <span className="text-white text-[16px] font-medium" style={{ fontFamily: 'Noto Sans KR' }}>
                    상담 신청하기
                  </span>
                </button>
              </form>
            </div>

            {/* Right Side - Process Info */}
            <div className="bg-gradient-to-br from-[#10B981] to-[#059669] p-[48px] lg:rounded-r-2xl h-full">
              <div className="mb-[32px]">
                <h3 className="text-white text-[24px] font-medium leading-[32px] mb-[16px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  빠른 상담 프로세스
                </h3>
                <p className="text-[#D1FAE5] text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                  전문 컨설턴트가 신속하게 연락드립니다
                </p>
              </div>

              {/* Process Steps */}
              <div className="space-y-[24px] mb-[48px]">
                {/* Step 1 */}
                <div className="flex gap-[16px]">
                  <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#059669] text-[14px] font-medium" style={{ fontFamily: 'Noto Sans KR' }}>
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white text-[16px] font-medium leading-[24px] mb-[4px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      문의 접수
                    </h4>
                    <p className="text-[#D1FAE5] text-[14px] font-medium leading-[20px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      신청 후 1시간 내 접수 확인
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-[16px]">
                  <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#059669] text-[14px] font-medium" style={{ fontFamily: 'Noto Sans KR' }}>
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white text-[16px] font-medium leading-[24px] mb-[4px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      전문 상담
                    </h4>
                    <p className="text-[#D1FAE5] text-[14px] font-medium leading-[20px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      24시간 내 전담 컨설턴트 배정
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-[16px]">
                  <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#059669] text-[14px] font-medium" style={{ fontFamily: 'Noto Sans KR' }}>
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white text-[16px] font-medium leading-[24px] mb-[4px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      맞춤 제안
                    </h4>
                    <p className="text-[#D1FAE5] text-[14px] font-medium leading-[20px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      비즈니스에 최적화된 솔루션 제공
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-[16px]">
                  <div className="w-[32px] h-[32px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#059669] text-[14px] font-medium" style={{ fontFamily: 'Noto Sans KR' }}>
                      4
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white text-[16px] font-medium leading-[24px] mb-[4px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      시작
                    </h4>
                    <p className="text-[#D1FAE5] text-[14px] font-medium leading-[20px]" style={{ fontFamily: 'Noto Sans KR' }}>
                      2주 내 PoC 시작 또는 캠페인 런칭
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Info */}
              <div className="bg-white/10 rounded-lg p-[16px]">
                <div className="flex flex-col items-center text-center">
                  <Headphones size={24} className="text-white mb-[8px]" />
                  <p className="text-white text-[16px] font-medium leading-[24px]" style={{ fontFamily: 'Noto Sans KR' }}>
                    고객 지원
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

