import { describe, it, expect, beforeEach, vi } from "vitest";
import { useAuthStore } from "../useAuthStore";
import type { User, Session } from "@supabase/supabase-js";

// Supabase 모킹
vi.mock("@/lib/supabase", () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      resetPasswordForEmail: vi.fn(),
      updateUser: vi.fn(),
      getSession: vi.fn(),
    },
  },
}));

describe("useAuthStore", () => {
  beforeEach(() => {
    // 각 테스트 전에 store 초기화
    useAuthStore.setState({
      user: null,
      session: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,
    });
  });

  describe("초기 상태", () => {
    it("초기 상태가 올바르게 설정되어야 함", () => {
      const state = useAuthStore.getState();
      expect(state.user).toBeNull();
      expect(state.session).toBeNull();
      expect(state.isLoading).toBe(false);
      expect(state.error).toBeNull();
      expect(state.isAuthenticated).toBe(false);
    });
  });

  describe("setUser", () => {
    it("사용자를 설정하고 isAuthenticated를 업데이트해야 함", () => {
      const mockUser = {
        id: "123",
        email: "test@example.com",
      } as User;

      useAuthStore.getState().setUser(mockUser);
      const state = useAuthStore.getState();

      expect(state.user).toEqual(mockUser);
      // session이 없으면 isAuthenticated는 false
      expect(state.isAuthenticated).toBe(false);
    });

    it("사용자와 세션이 모두 있으면 isAuthenticated가 true여야 함", () => {
      const mockUser = {
        id: "123",
        email: "test@example.com",
      } as User;

      const mockSession = {
        access_token: "token",
        user: mockUser,
      } as Session;

      useAuthStore.getState().setSession(mockSession);
      useAuthStore.getState().setUser(mockUser);

      const state = useAuthStore.getState();
      expect(state.isAuthenticated).toBe(true);
    });
  });

  describe("setSession", () => {
    it("세션을 설정하고 isAuthenticated를 업데이트해야 함", () => {
      const mockSession = {
        access_token: "token",
        user: null,
      } as unknown as Session;

      useAuthStore.getState().setSession(mockSession);
      const state = useAuthStore.getState();

      expect(state.session).toEqual(mockSession);
      // user가 없으면 isAuthenticated는 false
      expect(state.isAuthenticated).toBe(false);
    });
  });

  describe("setLoading", () => {
    it("로딩 상태를 설정해야 함", () => {
      useAuthStore.getState().setLoading(true);
      expect(useAuthStore.getState().isLoading).toBe(true);

      useAuthStore.getState().setLoading(false);
      expect(useAuthStore.getState().isLoading).toBe(false);
    });
  });

  describe("setError", () => {
    it("에러를 설정해야 함", () => {
      const mockError = {
        message: "Test error",
        name: "AuthError",
      } as any;

      useAuthStore.getState().setError(mockError);
      expect(useAuthStore.getState().error).toEqual(mockError);

      useAuthStore.getState().setError(null);
      expect(useAuthStore.getState().error).toBeNull();
    });
  });
});
