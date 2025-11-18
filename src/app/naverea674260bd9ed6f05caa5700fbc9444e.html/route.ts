import { NextResponse } from 'next/server'

export async function GET() {
  const html = 'naver-site-verification: naverea674260bd9ed6f05caa5700fbc9444e.html'
  
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  })
}

