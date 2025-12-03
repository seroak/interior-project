# 🏠 AI Interior Styling Service

사용자가 업로드한 방 사진을 AI 기술을 활용하여 원하는 인테리어 스타일로 변환해주는 웹 서비스입니다.

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

1. **이미지 포맷 최적화**: `ffmpeg`를 사용하여 기존 PNG 이미지를 차세대 포맷인 **WebP**로 변환
2. **브라우저 렌더링 우선순위 조정**:
   - `index.html`에 `<link rel="preload">` 태그를 추가하여 리소스 다운로드 시점을 앞당겼습니다.
   - `<img>` 태그에 `fetchPriority="high"` 및 `loading="eager"` 속성을 명시하여 브라우저가 해당 이미지를 최우선으로 처리하도록 했습니다.

### 2. 기능 단위 폴더 구조 적용

**문제 상황**:
컴포넌트와 기능이 혼재되어 있어 코드 응집도가 떨어지고 유지보수성이 떨어지는 현상이 발생.

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

## How to Run

```bash
# 1. 저장소 클론
git clone https://github.com/seroak/interior-project.git

# 2. 의존성 패키지 설치
npm install

# 3. 개발 서버 실행
npm run dev
```
