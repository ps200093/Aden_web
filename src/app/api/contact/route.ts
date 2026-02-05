import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      inquiryType,
      companyName,
      contactName,
      email,
      phone,
      monthlyBudget,
      dau,
      message,
    } = body;

    // Gmail SMTP transporter 설정
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // TLS 사용
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 문의 유형 한글 변환
    const inquiryTypeText = inquiryType === 'advertiser' ? '광고주' : '매체사';

    // 예산/DAU 텍스트 변환
    const budgetOptions: { [key: string]: string } = {
      'under-1000': '100만원 미만',
      '1000-3000': '100만원 - 300만원',
      '3000-5000': '300만원 - 500만원',
      '5000-10000': '500만원 - 1,000만원',
      'over-10000': '1,000만원 이상',
    };

    const dauOptions: { [key: string]: string } = {
      'under-10k': '1만 미만',
      '10k-50k': '1만 - 5만',
      '50k-100k': '5만 - 10만',
      '100k-500k': '10만 - 50만',
      'over-500k': '50만 이상',
    };

    // 이메일 내용 생성
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
    .field { margin-bottom: 20px; }
    .field-label { font-weight: 600; color: #374151; margin-bottom: 5px; }
    .field-value { color: #1f2937; padding: 10px; background: #f9fafb; border-radius: 5px; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 ADEN 상담 신청</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">새로운 문의가 접수되었습니다</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">📋 문의 유형</div>
        <div class="field-value">${inquiryTypeText}</div>
      </div>
      
      <div class="field">
        <div class="field-label">🏢 회사명</div>
        <div class="field-value">${companyName}</div>
      </div>
      
      <div class="field">
        <div class="field-label">👤 담당자명</div>
        <div class="field-value">${contactName}</div>
      </div>
      
      <div class="field">
        <div class="field-label">📧 이메일</div>
        <div class="field-value">${email}</div>
      </div>
      
      <div class="field">
        <div class="field-label">📱 연락처</div>
        <div class="field-value">${phone}</div>
      </div>
      
      ${monthlyBudget ? `
      <div class="field">
        <div class="field-label">💰 월 예산</div>
        <div class="field-value">${budgetOptions[monthlyBudget] || monthlyBudget}</div>
      </div>
      ` : ''}
      
      ${dau ? `
      <div class="field">
        <div class="field-label">📊 DAU</div>
        <div class="field-value">${dauOptions[dau] || dau}</div>
      </div>
      ` : ''}
      
      ${message ? `
      <div class="field">
        <div class="field-label">💬 문의 내용</div>
        <div class="field-value" style="white-space: pre-wrap;">${message}</div>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      <p>이 메일은 ADEN 웹사이트 상담 신청 폼에서 자동 발송되었습니다.</p>
      <p style="margin-top: 10px; color: #9ca3af; font-size: 12px;">접수 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</p>
    </div>
  </div>
</body>
</html>
    `;

    // 이메일 발송
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM}" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `[ADEN 상담 신청] ${inquiryTypeText} - ${companyName}`,
      html: emailContent,
    });

    return NextResponse.json(
      { success: true, message: '문의가 성공적으로 전송되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    return NextResponse.json(
      { success: false, message: '문의 전송에 실패했습니다. 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
