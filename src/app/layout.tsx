import '../styles/index.css'
import { Metadata, Viewport } from 'next'
import { Figtree } from 'next/font/google'
import StructuredData from '@/components/common/StructuredData'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: '에덴(ADEN) - 인포플래닛 마케팅 솔루션',
    template: '에덴(ADEN) - 인포플래닛 | %s',
  },
  description: '인포플래닛의 에덴(ADEN)은 CPA 기반 퍼포먼스 마케팅 플랫폼입니다. N사 쇼핑·플레이스 순위 상승, SMB 마케팅 솔루션을 제공합니다.',
  keywords: '에덴, ADEN, 인포플래닛, 마케팅 솔루션, CPA 광고, 퍼포먼스 마케팅, N사 쇼핑, 플레이스 광고, SMB 마케팅, 랭킹 부스팅',
  authors: [{ name: '인포플래닛' }],
  creator: '인포플래닛',
  publisher: '인포플래닛',
  icons: {
    icon: '/images/logo.ico',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  metadataBase: new URL('https://aden.ai.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://aden.ai.kr',
    siteName: '에덴(ADEN) - 인포플래닛',
    title: {
      default: '에덴(ADEN) - 인포플래닛 마케팅 솔루션',
      template: '에덴(ADEN) - 인포플래닛 | %s',
    },
    description: '인포플래닛의 에덴(ADEN)은 CPA 기반 퍼포먼스 마케팅 플랫폼입니다. N사 쇼핑·플레이스 순위 상승, SMB 마케팅 솔루션을 제공합니다.',
    images: [
      {
        url: '/images/Hero_image.svg',
        width: 1200,
        height: 630,
        alt: '에덴(ADEN) - 인포플래닛 마케팅 플랫폼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '에덴(ADEN) - 인포플래닛 마케팅 솔루션',
    description: '인포플래닛의 에덴(ADEN)은 CPA 기반 퍼포먼스 마케팅 플랫폼입니다.',
    images: ['/images/Hero_image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${figtree.variable}`}>
      <head>
        <meta name="naver-site-verification" content="8e9126bd33794e7d68161cd194edbce45ac2a8c9" />
        <StructuredData />
      </head>
      <body className={figtree.className}>{children}</body>
    </html>
  )
}

