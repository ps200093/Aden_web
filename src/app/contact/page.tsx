import { Metadata } from 'next';
import Header from '@/components/common/Header';
import FooterSection from '@/components/common/FooterSection';
import HeroSection from '@/app/contact/HeroSection';
import CounselSection from '@/app/contact/CounselSection';
import ContactSection from '@/app/contact/ContactSection';
import QuestionSection from '@/app/contact/QuestionSection';
// import FloatingContact from '@/components/common/FloatingContact';

export const metadata: Metadata = {
  title: '문의하기',
  description: '인포플래닛 에덴(ADEN) 마케팅 솔루션에 대해 궁금하신 점이 있으신가요? 전문 컨설턴트가 맞춤형 상담을 제공합니다. 지금 바로 문의하세요.',
  keywords: '에덴, ADEN, 인포플래닛, 문의하기, 상담 신청, 마케팅 상담, 광고 문의, 컨설팅 신청, CPA 광고 문의',
  openGraph: {
    title: '에덴(ADEN) - 인포플래닛 문의하기',
    description: '인포플래닛 에덴(ADEN) 마케팅 솔루션에 대해 궁금하신 점이 있으신가요? 전문 컨설턴트가 맞춤형 상담을 제공합니다.',
    url: 'https://aden.ai.kr/contact',
  },
  alternates: {
    canonical: 'https://aden.ai.kr/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CounselSection />
        <ContactSection />
        <QuestionSection />
      </main>
      <FooterSection />
      {/* <FloatingContact /> */}
    </>
  )
}
