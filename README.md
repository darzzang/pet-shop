# Pet Shop - 반려동물 용품 쇼핑몰

바이브코딩으로 생성한 반려동물 용품 쇼핑몰 React 프로젝트입니다.

## 🚀 시작하기

### 필수 조건
- Node.js (v14 이상)
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

### 빌드

```bash
# 프로덕션 빌드
npm run build
```

### 테스트

```bash
# 테스트 실행
npm test
```

## 🛠 기술 스택
- **React 18.2.0** - 사용자 인터페이스 구축
- **Tailwind CSS 3.3.0** - 스타일링 및 반응형 디자인
- **React Scripts 5.0.1** - 개발 환경 및 빌드 도구
- **PostCSS 8.4.24** - CSS 전처리기
- **Autoprefixer 10.4.14** - CSS 벤더 프리픽스 자동화

## 📁 프로젝트 구조

```
pet-shop/
├── public/
│   └── index.html          # HTML 템플릿
├── src/
│   ├── components/
│   │   └── ThumbnailComponent.jsx  # Figma 디자인 컴포넌트
│   ├── App.js              # 메인 앱 컴포넌트
│   ├── index.js            # 앱 진입점
│   └── index.css           # 글로벌 스타일 (Tailwind CSS)
├── package.json            # 프로젝트 설정 및 의존성
├── tailwind.config.js      # Tailwind CSS 설정
├── postcss.config.js       # PostCSS 설정
└── .gitignore             # Git 제외 파일 목록
```

## 🎨 주요 기능

### Figma 디자인 변환
- **ThumbnailComponent**: Figma에서 추출한 디자인을 React 컴포넌트로 구현
- **정확한 픽셀 단위**: Figma의 정확한 위치와 크기를 CSS로 재현
- **커스텀 커서**: 다양한 색상의 커서 디자인 (파란색, 주황색, 보라색)

### 반응형 디자인
- **Tailwind CSS**: 유틸리티 클래스 기반 스타일링
- **모바일 친화적**: 다양한 화면 크기에 대응

### 개발 환경
- **Hot Reload**: 코드 변경 시 자동 새로고침
- **ESLint**: 코드 품질 관리
- **Jest**: 테스트 프레임워크

## 🎯 컴포넌트 상세

### ThumbnailComponent
- **크기**: 1200px × 720px
- **주요 요소**:
  - "Click me" 헤드라인 (노란색 배경, 검은색 테두리)
  - 3가지 색상의 커서 (파란색, 주황색, 보라색)
  - 장식용 벡터 요소들
  - 그림자 효과

## 🚀 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm start` | 개발 서버 실행 (http://localhost:3000) |
| `npm run build` | 프로덕션용 빌드 생성 |
| `npm test` | 테스트 실행 |
| `npm run eject` | CRA 설정 추출 (주의: 되돌릴 수 없음) |

## 📦 의존성

### Production Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-scripts`: 5.0.1
- `web-vitals`: ^2.1.4

### Development Dependencies
- `tailwindcss`: ^3.3.0
- `autoprefixer`: ^10.4.14
- `postcss`: ^8.4.24

## 🔧 설정 파일

- **tailwind.config.js**: Tailwind CSS 설정
- **postcss.config.js**: PostCSS 플러그인 설정
- **.gitignore**: Git에서 제외할 파일 목록

## 📝 라이선스

이 프로젝트는 개인 학습 목적으로 제작되었습니다. 