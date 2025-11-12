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
        <div style={{
          paddingTop: 'clamp(32px, 5vw, 40px)',
          paddingBottom: 'clamp(32px, 5vw, 40px)'
        }}>
          {/* Top Navigation */}
          <div className="flex flex-wrap items-center"
            style={{
              gap: 'clamp(16px, 4vw, 50px)',
              marginTop: 'clamp(14px, 2vw, 18px)',
              marginBottom: 'clamp(32px, 6vw, 66px)'
            }}
          >
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
                    letterSpacing: '0.005em',
                    fontSize: 'clamp(16px, 1.5vw + 4px, 20px)',
                    lineHeight: 'clamp(1.3, 1.2 + 0.1vw, 1.4)'
                  }}
                >
                  {item.text}
                </Link>
              )
            })}
          </div>

          {/* Privacy Policy */}
          <div style={{
            marginBottom: 'clamp(24px, 4vw, 30px)'
          }}>
            <Link 
              href="/" 
              className="font-medium text-accent-emerald hover:underline"
              style={{ 
                fontSize: 'clamp(14px, 1.2vw + 2px, 16px)',
                lineHeight: 'clamp(1.2, 1.21 + 0.05vw, 1.3)'
              }}
            >
              개인정보처리방침
            </Link>
          </div>

          {/* Divider Line */}
          <div className="w-full max-w-[1280px] bg-background-divider"
            style={{
              height: 'clamp(1.5px, 0.2vw, 2px)',
              marginBottom: 'clamp(22px, 3.5vw, 28px)'
            }}
          ></div>

          {/* Company Info */}
          <div className="flex flex-col items-start"
            style={{
              gap: 'clamp(12px, 2vw, 16px)',
              marginBottom: 'clamp(24px, 4vw, 30px)'
            }}
          >
            <div className="flex items-center flex-wrap">
              <div className="flex items-center">
                <img 
                  src="/images/img_footer_logo.svg" 
                  alt="company logo" 
                  style={{
                    width: 'clamp(150px, 18vw, 219px)',
                    height: 'auto'
                  }}
                />
              </div>
              <span 
                className="font-medium text-accent-emerald -ml-16 sm:-ml-20"
                style={{ 
                  fontSize: 'clamp(13px, 1.2vw + 2px, 16px)',
                  lineHeight: 'clamp(1.2, 1.21 + 0.05vw, 1.3)'
                }}
              >
                powered by InfoPlanet
              </span>
            </div>
            <div className="flex items-center"
              style={{
                gap: 'clamp(6px, 1vw, 8px)'
              }}
            >
              <span 
                className="font-medium text-[#838383] hidden sm:inline"
                style={{ 
                  fontSize: 'clamp(13px, 1.2vw + 2px, 16px)',
                  lineHeight: 'clamp(1.2, 1.21 + 0.05vw, 1.3)'
                }}
              >
                |
              </span>
              <span 
                className="font-medium text-[#838383]"
                style={{ 
                  fontSize: 'clamp(13px, 1.2vw + 2px, 16px)',
                  lineHeight: 'clamp(1.2, 1.21 + 0.05vw, 1.3)'
                }}
              >
                서울특별시 강남구 논현로80길 7 &nbsp;7층
                {/* 경기도 광주시 태전중앙 1길 5, 1동 613호 (태전동) */}
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <span 
              className="font-medium text-[#838383]"
              style={{ 
                fontSize: 'clamp(11px, 1vw + 1px, 12px)',
                lineHeight: 'clamp(1.2, 1.25 + 0.05vw, 1.3)'
              }}
            >
              © 2025 ADEN. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

