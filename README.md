# 🏠 AI Interior Styling Service

사용자가 업로드한 방 사진을 AI 기술을 활용하여 원하는 인테리어 스타일로 변환해주는 웹 서비스입니다.

## 🔐 인증 시스템

이 프로젝트는 Supabase Auth를 사용한 완전한 인증 시스템을 포함하고 있습니다.

### 인증 기능

- ✅ 이메일/비밀번호 로그인
- ✅ 회원가입
- ✅ 비밀번호 재설정
- ✅ 세션 관리 및 자동 로그인 유지
- ✅ 보호된 라우트 (Protected Routes)
- ✅ 공개 라우트 (Public Routes - 로그인된 사용자 리다이렉트)

## 🛠 Tech Stack

| Category             | Technology                  |
| -------------------- | --------------------------- |
| **Core**             | React 19, TypeScript, Vite  |
| **Styling**          | Tailwind CSS, Framer Motion |
| **State Management** | Zustand                     |
| **Testing/CDD**      | Storybook, Vitest           |
| **Package Manager**  | npm                         |

## Key Features

- ** 이미지 업로드**

  - 드래그 앤 드롭을 지원하는 직관업로드 UI
  - 업로드 즉시 미리보기 제공 및 로딩 상태 시각화

- ** Before / After 비교 (인터랙티브)**
  - 변환 전/후 이미지를 슬라이더로 직접 움직이며 비교 가능
  - `Framer Motion`을 활용한 부드러운 인터랙션 구현

## 성능 개선 사항

### 1. 이미지 로딩 성능 최적화 (LCP 개선)

**문제 상황**:
배포 후 메인 페이지의 고해상도 배너 이미지 로딩이 지연되는 현상이 발생.

**해결 과정**:

1. **이미지 포맷 최적화**: `ffmpeg`를 사용하여 기존 PNG 이미지를 **WebP**로 변환
2. **브라우저 렌더링 우선순위 조정**:
   - `index.html`에 `<link rel="preload">` 태그를 추가하여 리소스를 preload.
   - `<img>` 태그에 `fetchPriority="high"` 및 `loading="eager"` 속성을 명시하여 브라우저가 해당 이미지 우선 처리.

### 2. 기능 단위 폴더 구조 적용

**문제 상황**:
컴포넌트와 기능이 혼재되어 있어 코드 유지보수성에 문제 발생.

**해결**:
기능 단위로 폴더 구조를 재편하는 기능 단위 폴더 구조 도입.

예시

- `src/features/`: 도메인 비즈니스 로직을 포함한 컴포넌트 그룹
- `src/components/shared/`: 도메인과 무관한 순수 UI 컴포넌트 .

##Folder Structure

```
src/
├── components/      # 재사용 가능한 공통 UI 컴포넌트
│   ├── shared/      # 도메인 무관한 순수 컴포넌트 (Button, Layout 등)
│   └── ui/          # 디자인 시스템 기반의 기초 UI 요소
├── features/        # 도메인별 기능 단위 컴포넌트 그룹
│   ├── home/        # 메인 페이지 관련 기능
│   └── interior/    # 인테리어 생성 관련 핵심 기능 (업로드, 스타일 선택 등)
├── hooks/           # 전역적으로 사용되는 커스텀 훅
├── pages/           # 라우팅 단위의 페이지 컴포넌트
├── stores/          # Zustand 전역 상태 관리
├── stories/         # Storybook 스토리 파일
└── utils/           # 유틸리티 함수 및 상수
```

## 🔧 환경 변수 설정

프로젝트를 실행하기 전에 `.env` 파일을 생성하고 다음 환경 변수를 설정해야 합니다:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

### Supabase 설정 방법

1. [Supabase](https://supabase.com)에서 프로젝트 생성
2. 프로젝트 설정 > API에서 URL과 `anon` 키 복사
3. `.env` 파일에 위 변수들을 설정
4. Authentication > Settings에서 Email Auth 활성화

## 🚀 인증 플로우

### 1. 회원가입 플로우

```
사용자 → /signup → SignUpForm → useSignUp 훅 → useAuthStore.signUp() → Supabase Auth
                                                                    ↓
                                                          성공 시 /login으로 리다이렉트
```

### 2. 로그인 플로우

```
사용자 → /login → LoginForm → useLogin 훅 → useAuthStore.signIn() → Supabase Auth
                                                              ↓
                                                    성공 시 원래 페이지 또는 홈으로 리다이렉트
```

### 3. 세션 관리

- 앱 시작 시 `setupAuthListener()`가 자동으로 실행되어 저장된 세션을 복원합니다.
- `onAuthStateChange` 리스너가 인증 상태 변경을 감지하고 Zustand store를 자동 업데이트합니다.
- 새로고침 후에도 세션이 유지됩니다.

### 4. 보호된 라우트

```tsx
// ProtectedRoute로 감싸면 인증이 필요한 페이지가 됩니다
<ProtectedRoute>
  <Interior />
</ProtectedRoute>
```

- 미인증 사용자는 자동으로 `/login`으로 리다이렉트됩니다.
- 로그인 후 원래 가려던 페이지로 돌아갑니다.

### 5. 공개 라우트

```tsx
// PublicRoute로 감싸면 이미 로그인된 사용자는 홈으로 리다이렉트됩니다
<PublicRoute>
  <Login />
</PublicRoute>
```

## 📁 인증 관련 파일 구조

```
src/
├── lib/
│   ├── supabase.ts              # Supabase 클라이언트 싱글톤
│   └── authListener.ts          # 인증 상태 변경 리스너
├── store/
│   └── useAuthStore.ts          # Zustand 인증 상태 관리
├── features/
│   └── auth/
│       ├── LoginForm/           # 로그인 폼 컴포넌트
│       ├── SignUpForm/          # 회원가입 폼 컴포넌트
│       ├── ResetPasswordForm/   # 비밀번호 재설정 폼
│       └── UserProfile/         # 사용자 프로필 컴포넌트
├── components/
│   ├── auth/
│   │   ├── ProtectedRoute.tsx  # 보호된 라우트 컴포넌트
│   │   └── PublicRoute.tsx     # 공개 라우트 컴포넌트
│   └── ErrorBoundary/           # 전역 에러 바운더리
├── pages/
│   ├── Login.tsx                # 로그인 페이지
│   ├── SignUp.tsx               # 회원가입 페이지
│   └── ResetPassword.tsx        # 비밀번호 재설정 페이지
├── hooks/
│   ├── useAuth.ts               # 인증 편의 훅
│   └── useRequireAuth.ts        # 인증 필수 훅
└── utils/
    ├── auth.ts                  # 인증 유틸리티 (에러 메시지 변환)
    └── validation.ts            # 입력 유효성 검사
```

## How to Run

```bash
# 1. 저장소 클론
git clone https://github.com/seroak/interior-project.git

# 2. 의존성 패키지 설치
npm install

# 3. .env 파일 생성 및 환경 변수 설정 (위 참조)

# 4. 개발 서버 실행
npm run dev
```
