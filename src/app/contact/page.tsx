'use client';
import Header from '@/components/common/Header';
import FooterSection from '@/components/common/FooterSection';
import HeroSection from '@/app/contact/HeroSection';
import CounselSection from '@/app/contact/CounselSection';
import ContactSection from '@/app/contact/ContactSection';
import QuestionSection from '@/app/contact/QuestionSection';
// import FloatingContact from '@/components/common/FloatingContact';

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
