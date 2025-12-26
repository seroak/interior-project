import { expect, afterEach, vi } from "vitest";
// React Testing Library가 설치되면 주석 해제
// import { cleanup } from "@testing-library/react";
// import * as matchers from "@testing-library/jest-dom/matchers";

// Testing Library matchers 확장 (설치 후 주석 해제)
// expect.extend(matchers);

// 각 테스트 후 cleanup (React Testing Library 설치 후 주석 해제)
// afterEach(() => {
//   cleanup();
// });

// 전역 모킹 설정
vi.mock("@/lib/supabase", () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      resetPasswordForEmail: vi.fn(),
      updateUser: vi.fn(),
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(() => ({
        data: { subscription: { unsubscribe: vi.fn() } },
      })),
    },
  },
  getSupabaseClient: vi.fn(),
}));


