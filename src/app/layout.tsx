import '../styles/index.css'
import { Metadata, Viewport } from 'next'
import { Figtree } from 'next/font/google'

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
    default: 'ADEN - 마케팅의 시작과 끝',                           
    template: 'ADEN - 마케팅의 시작과 끝 | %s',                     
  },
  description: 'ADEN은 마케팅의 시작과 끝을 함께합니다. 최적의 마케팅 솔루션을 제공하여 성과를 극대화합니다.',
  keywords: 'ADEN, 마케팅, 솔루션, 성과, 광고, 퍼포먼스, 마케팅 솔루션',
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
  },
  
  openGraph: {
    type: 'website',
    title: {
      default: 'ADEN - 마케팅의 시작과 끝',                        
      template: 'ADEN - 마케팅의 시작과 끝 | %s',                 
    },
    description: 'ADEN은 마케팅의 시작과 끝을 함께합니다. 최적의 마케팅 솔루션을 제공하여 성과를 극대화합니다.',
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
        <meta name="naver-site-verification" content="2e02982e9e38b445d394d7d63d43478f9838d02f" />
      </head>
      <body className={figtree.className}>{children}</body>
    </html>
  )
}

