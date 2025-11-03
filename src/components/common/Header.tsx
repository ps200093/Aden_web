'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface MenuItem {
  text: string;
  href: string;
}

interface HeaderProps {
  className?: string;
  [key: string]: any;
}

const Header = ({ className, ...props }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const menuItems: MenuItem[] = [
    { text: 'Service', href: '/service' },
    { text: 'Advertiser', href: '/advertiser' },
    { text: 'Platform', href: '/platform' },
    { text: 'Contact', href: '/contact' },
  ]

  return (
    <header 
      className={twMerge(
        'w-full bg-header-background relative border-b-[3px] border-gray-500',
        className
      )}
      style={{
        paddingLeft: 'clamp(16px, 3vw, 38px)',
        paddingRight: 'clamp(16px, 3vw, 38px)',
        paddingTop: 'clamp(16px, 2.5vw, 22px)',
        paddingBottom: 'clamp(16px, 2.5vw, 22px)'
      }}
      {...props}
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <img 
                src="/images/img_header_logo.svg" 
                alt="ADEN Logo"
                style={{
                  width: 'clamp(120px, 15vw, 190px)',
                  height: 'auto'
                }}
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              padding: 'clamp(6px, 1vw, 8px)'
            }}
          >
            <svg 
              className="text-header-text" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{
                width: 'clamp(22px, 3vw, 24px)',
                height: 'clamp(22px, 3vw, 24px)'
              }}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="flex items-center"
              style={{
                gap: 'clamp(40px, 6vw, 74px)'
              }}
            >
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={twMerge(
                      'font-medium transition-colors duration-200',
                      'hover:text-accent-emerald focus:outline-none focus:text-accent-emerald',
                      isActive 
                        ? 'text-accent-emerald font-bold' : 'text-header-text'
                    )}
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(18px, 1.8vw + 2px, 24px)',
                      lineHeight: 'clamp(1.3, 1.25 + 0.05vw, 1.4)'
                    }}
                  >
                    {item.text}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          <nav className={twMerge(
            'lg:hidden absolute top-full left-0 right-0 z-50',
            'bg-header-background border-t border-border-primary shadow-lg',
            menuOpen ? 'block' : 'hidden'
          )}>
            <div style={{
              padding: 'clamp(12px, 2vw, 16px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(12px, 2vw, 16px)'
            }}>
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={twMerge(
                      'block font-medium rounded-base',
                      'transition-colors duration-200',
                      'hover:bg-background-success focus:outline-none focus:bg-background-success',
                      isActive 
                        ? 'text-accent-emerald font-bold bg-background-success' : 'text-header-text'
                    )}
                    style={{ 
                      fontFamily: 'Noto Sans KR',
                      fontSize: 'clamp(15px, 2vw + 2px, 16px)',
                      lineHeight: 'clamp(1.3, 1.25 + 0.05vw, 1.4)',
                      padding: 'clamp(8px, 1.5vw, 10px) clamp(12px, 2vw, 16px)'
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

