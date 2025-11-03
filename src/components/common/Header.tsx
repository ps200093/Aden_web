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
        'w-full bg-header-background relative',
        'px-4 sm:px-6 md:px-8 lg:px-[38px]',
        'py-4 sm:py-5 md:py-[22px]',
        'border-b-[3px] border-gray-500',
        className
      )}
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
                className="w-[120px] sm:w-[150px] md:w-[170px] lg:w-[190px] h-auto"
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg 
              className="w-6 h-6 text-header-text" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
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
            <div className="flex items-center gap-[40px] xl:gap-[74px]">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={twMerge(
                      'text-lg xl:text-2xl leading-lg xl:leading-3xl font-medium transition-colors duration-200',
                      'hover:text-accent-emerald focus:outline-none focus:text-accent-emerald',
                      isActive 
                        ? 'text-accent-emerald font-bold' : 'text-header-text'
                    )}
                    style={{ fontFamily: 'Noto Sans KR' }}
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
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={twMerge(
                      'block text-base leading-base font-medium py-2 px-4 rounded-base',
                      'transition-colors duration-200',
                      'hover:bg-background-success focus:outline-none focus:bg-background-success',
                      isActive 
                        ? 'text-accent-emerald font-bold bg-background-success' : 'text-header-text'
                    )}
                    style={{ fontFamily: 'Noto Sans KR' }}
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

