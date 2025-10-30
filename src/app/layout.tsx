import '../styles/index.css'
import { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'ADEN CPA Marketing Platform',                           
    template: 'ADEN CPA Marketing Platform | %s',                     
  },
  description: 'Comprehensive CPA marketing platform offering advanced analytics, fraud prevention, SMB Fair Play Marketing, and 24/7 support to optimize your marketing campaigns and ROI.',
  keywords: 'CPA marketing, performance analytics, fraud prevention, marketing platform, attribution analysis, data transparency, marketing solutions',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'ADEN CPA Marketing Platform',                        
      template: 'ADEN CPA Marketing Platform | %s',                 
    },
    description: 'Transform your marketing performance with ADEN comprehensive CPA platform featuring advanced analytics, fraud prevention tools, and global market reach capabilities.',
  },
}
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

