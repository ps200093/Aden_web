'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export default function FooterSection() {
  const pathname = usePathname()

  const menuItems = [
    { text: 'Service', href: '/service' },
    { text: 'Advertiser', href: '/advertiser' },
    { text: 'Platform', href: '/platform' },
    { text: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="w-full bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-[40px]">
          {/* Top Navigation */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 md:gap-[50px] mt-[18px] mb-[40px] sm:mb-[66px]">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link 
                  key={index}
                  href={item.href} 
                  className={twMerge(
                    "font-medium transition-colors hover:text-accent-emerald",
                    isActive ? "text-accent-emerald font-bold" : "text-[#838383]"
                  )}
                  style={{ 
                    fontFamily: 'Noto Sans KR', 
                    letterSpacing: '0.005em',
                    fontSize: 'clamp(16px, 2vw, 20px)',
                    lineHeight: '24px'
                  }}
                >
                  {item.text}
                </Link>
              )
            })}
          </div>

          {/* Privacy Policy */}
          <div className="mb-[30px]">
            <Link 
              href="/" 
              className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-accent-emerald hover:underline"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              개인정보처리방침
            </Link>
          </div>

          {/* Divider Line */}
          <div className="w-full max-w-[1280px] h-[2px] bg-background-divider mb-[28px]"></div>

          {/* Company Info */}
          <div className="flex flex-col gap-[16px] items-start mb-[30px]">
            <div className="flex items-center flex-wrap">
              <div className="flex items-center">
                <img 
                  src="/images/img_footer_logo.svg" 
                  alt="company logo" 
                  className="w-[150px] sm:w-[180px] md:w-[219px] h-auto"
                />
              </div>
              <span 
                className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-accent-emerald -ml-16 sm:-ml-20"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                (주)인포플래닛
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span 
                className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#838383] hidden sm:inline"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                |
              </span>
              <span 
                className="text-[14px] sm:text-[16px] font-medium leading-[17px] sm:leading-[20px] text-[#838383]"
                style={{ fontFamily: 'Noto Sans KR' }}
              >
                서울특별시 강남구 논현로80길 7 &nbsp;&nbsp;7층
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <span 
              className="text-[12px] font-medium leading-[15px] text-[#838383]"
              style={{ fontFamily: 'Noto Sans KR' }}
            >
              © 2025 ADEN. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

