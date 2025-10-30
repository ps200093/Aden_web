# ADEN Website - Next.js + TypeScript

ADEN CPA 마케팅 플랫폼의 공식 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with class-variance-authority
- **Font**: Noto Sans KR

## 시작하기

### 패키지 설치

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 프로덕션 빌드

```bash
npm run build
npm run start
```

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈 페이지
│   ├── HomePage.tsx       # 홈 페이지 컴포넌트
│   ├── HeroSection.tsx    # 히어로 섹션
│   ├── SMBSection.tsx     # SMB 섹션
│   ├── StrengthsSection.tsx
│   ├── TechnologySection.tsx
│   ├── ComparisonSection.tsx
│   ├── CTASection.tsx
│   ├── FooterSection.tsx
│   └── marketing-solutions/
│       ├── page.tsx
│       └── MarketingSolutionsPage.tsx
├── components/            # 재사용 가능한 컴포넌트
│   ├── common/
│   │   └── Header.tsx
│   └── ui/
│       ├── Button.tsx
│       └── EditText.tsx
├── styles/               # 글로벌 스타일
│   ├── index.css
│   └── tailwind.css
└── types/               # TypeScript 타입 정의
    └── index.ts
```

## 주요 기능

- 🎨 모던한 UI/UX 디자인
- 📱 완전한 반응형 디자인
- ⚡ Next.js 14의 최신 기능 활용
- 🔒 TypeScript로 타입 안정성 보장
- 🎯 SEO 최적화
- 🌐 다국어 지원 준비

## 라이선스

© 2025 ADEN. All rights reserved.

