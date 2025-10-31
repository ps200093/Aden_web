# ADEN Website - Next.js + TypeScript

ADEN CPA 마케팅 플랫폼의 공식 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 14.2.0 (App Router)
- **Language**: TypeScript 5.3+
- **Styling**: Tailwind CSS 3.4+
- **UI Libraries**: 
  - class-variance-authority (CVA)
  - tailwind-merge
  - lucide-react (아이콘)
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

### 코드 린팅

```bash
npm run lint
```

## 프로젝트 구조

```
src/
├── app/                        # Next.js App Router 페이지
│   ├── layout.tsx             # 루트 레이아웃
│   ├── page.tsx               # 홈 페이지 (메타데이터)
│   ├── HomePage.tsx           # 홈 페이지 컴포넌트
│   ├── ComparisonSection.tsx  # 공통 비교 섹션
│   │
│   ├── service/               # 서비스 소개 페이지
│   │   ├── page.tsx
│   │   ├── ServiceHeroSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── ArchitectureSection.tsx
│   │   ├── ReasonSection.tsx
│   │   └── PartnersSection.tsx
│   │
│   ├── advertiser/            # 광고주 페이지
│   │   ├── page.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SMBSection.tsx
│   │   ├── StrengthsSection.tsx
│   │   ├── TechnologySection.tsx
│   │   └── CTASection.tsx
│   │
│   ├── platform/              # 플랫폼 페이지
│   │   ├── page.tsx
│   │   ├── HeroSection.tsx
│   │   ├── DifferentiationSection.tsx
│   │   ├── PerformanceSection.tsx
│   │   ├── PartnershipSection.tsx
│   │   ├── ComparisonSection.tsx
│   │   └── CTASection.tsx
│   │
│   └── contact/               # 문의 페이지
│       ├── page.tsx
│       ├── HeroSection.tsx
│       ├── ContactSection.tsx
│       ├── CounselSection.tsx
│       └── QuestionSection.tsx
│
├── components/                # 재사용 가능한 컴포넌트
│   ├── common/
│   │   ├── Header.tsx        # 네비게이션 헤더
│   │   └── FooterSection.tsx # 푸터
│   └── ui/
│       ├── Button.tsx        # 버튼 컴포넌트 (CVA)
│       └── EditText.tsx      # 입력 필드 컴포넌트
│
├── styles/                    # 글로벌 스타일
│   ├── index.css
│   └── tailwind.css
│
└── types/                     # TypeScript 타입 정의
    └── index.ts
```

## 페이지 구성

### 1. 홈페이지 (`/`)
- 서비스 히어로 섹션
- 서비스 소개
- 아키텍처 설명
- 선택 이유
- 파트너사 소개

### 2. 광고주 페이지 (`/advertiser`)
- 광고주를 위한 솔루션 소개
- SMB 대상 서비스
- 주요 강점
- 기술적 우위
- CTA (Call To Action)

### 3. 플랫폼 페이지 (`/platform`)
- 플랫폼 차별화 요소
- 성과 지표
- 파트너십 정보
- 경쟁사 비교
- CTA

### 4. 문의 페이지 (`/contact`)
- 문의 양식
- 상담 신청
- 자주 묻는 질문

## 주요 기능

- 🎨 모던한 UI/UX 디자인
- 📱 완전한 반응형 디자인 (모바일/태블릿/데스크톱)
- ⚡ Next.js 14 App Router 활용
- 🔒 TypeScript로 타입 안정성 보장
- 🎯 SEO 최적화 (메타데이터, OpenGraph)
- 🎨 CVA를 활용한 재사용 가능한 UI 컴포넌트
- 🌟 Tailwind CSS 커스텀 유틸리티 클래스
- 🖼️ 최적화된 이미지 자산 관리

## 개발 환경

- Node.js 20.11+
- React 18.3+
- Next.js 14.2+
- TypeScript 5.3+

## 폴더 설명

- `public/images/`: 이미지 자산 (로고, 파트너사 로고 등)
- `src/app/`: 라우팅 및 페이지 컴포넌트
- `src/components/`: 재사용 가능한 공통 컴포넌트
- `src/styles/`: 글로벌 스타일 및 Tailwind 설정
- `src/types/`: TypeScript 타입 정의

## 라이선스

© 2025 ADEN. All rights reserved.

