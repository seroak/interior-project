import { create } from "zustand";
import type { User, Session, AuthError } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

let resolveAuth: (value: boolean) => void;

export const authInitialized = new Promise<boolean>((res) => {
  resolveAuth = res;
});

interface AuthState {
  // 상태
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: AuthError | null;

  // Computed values
  isAuthenticated: boolean;

  // Actions
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signInWithOAuth: (provider: "google" | "github" | "kakao") => Promise<{ error: AuthError | null }>;
  signUp: (email: string, password: string, metadata?: Record<string, any>) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<{ error: AuthError | null }>;
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>;
  updateUser: (updates: {
    email?: string;
    password?: string;
    data?: Record<string, any>;
  }) => Promise<{ error: AuthError | null }>;
  initializeAuth: () => Promise<void>;
  setUser: (user: User | null) => void;
  setSession: (session: Session | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: AuthError | null) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  // 초기 상태
  user: null,
  session: null,
  isLoading: true,
  error: null,
  isAuthenticated: false,

  // Actions
  signIn: async (email: string, password: string) => {
    set({ isLoading: true, error: null });

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        set({ error, isLoading: false });
        return { error };
      }

      set({
        user: data.user,
        session: data.session,
        isAuthenticated: data.user !== null && data.session !== null,
        error: null,
        isLoading: false,
      });

      return { error: null };
    } catch (err) {
      const authError = err as AuthError;
      set({ error: authError, isLoading: false });
      return { error: authError };
    }
  },

  /**
   * OAuth 제공자를 통한 로그인
   * @param provider - OAuth 제공자 (google, github, kakao)
   * @returns 에러 객체 (성공 시 null)
   */
  signInWithOAuth: async (provider: "google" | "github" | "kakao") => {
    set({ isLoading: true, error: null });
    console.log("signInWithOAuth", provider);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      console.log("error", error);
      if (error) {
        set({ error, isLoading: false });
        return { error };
      }

      // OAuth는 리다이렉트를 사용하므로 여기서는 에러만 반환
      // 실제 인증은 콜백 페이지에서 처리됨
      return { error: null };
    } catch (err) {
      const authError = err as AuthError;
      set({ error: authError, isLoading: false });
      return { error: authError };
    }
  },

  /**
   * 이메일/비밀번호로 회원가입
   * @param email - 사용자 이메일
   * @param password - 사용자 비밀번호
   * @param metadata - 추가 사용자 메타데이터 (선택사항)
   * @returns 에러 객체 (성공 시 null)
   */
  signUp: async (email: string, password: string, metadata?: Record<string, any>) => {
    set({ isLoading: true, error: null });

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
        },
      });

      if (error) {
        set({ error, isLoading: false });
        return { error };
      }

      set({
        user: data.user,
        session: data.session,
        isAuthenticated: data.user !== null && data.session !== null,
        error: null,
        isLoading: false,
      });

      return { error: null };
    } catch (err) {
      const authError = err as AuthError;
      set({ error: authError, isLoading: false });
      return { error: authError };
    }
  },

  /**
   * 로그아웃
   * 현재 세션을 종료하고 사용자 정보를 초기화합니다.
   * @returns 에러 객체 (성공 시 null)
   */
  signOut: async () => {
    set({ isLoading: true, error: null });

    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        set({ error, isLoading: false });
        return { error };
      }

      set({
        user: null,
        session: null,
        isAuthenticated: false,
        error: null,
        isLoading: false,
      });

      return { error: null };
    } catch (err) {
      const authError = err as AuthError;
      set({ error: authError, isLoading: false });
      return { error: authError };
    }
  },

  /**
   * 비밀번호 재설정 이메일 전송
   * @param email - 비밀번호를 재설정할 이메일 주소
   * @returns 에러 객체 (성공 시 null)
   */
  resetPassword: async (email: string) => {
    set({ isLoading: true, error: null });

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        set({ error, isLoading: false });
        return { error };
      }

      set({ error: null, isLoading: false });
      return { error: null };
    } catch (err) {
      const authError = err as AuthError;
      set({ error: authError, isLoading: false });
      return { error: authError };
    }
  },

  /**
   * 사용자 정보 업데이트
   * @param updates - 업데이트할 사용자 정보 (이메일, 비밀번호, 메타데이터)
   * @returns 에러 객체 (성공 시 null)
   */
  updateUser: async (updates: { email?: string; password?: string; data?: Record<string, any> }) => {
    set({ isLoading: true, error: null });

    try {
      const updateData: { email?: string; password?: string; data?: Record<string, any> } = {};

      if (updates.email) updateData.email = updates.email;
      if (updates.password) updateData.password = updates.password;
      if (updates.data) updateData.data = updates.data;

      const { data, error } = await supabase.auth.updateUser(updateData);

      if (error) {
        set({ error, isLoading: false });
        return { error };
      }

      // updateUser는 user만 반환하므로 기존 session 유지
      const currentSession = get().session;

      set({
        user: data.user,
        session: currentSession,
        isAuthenticated: data.user !== null && currentSession !== null,
        error: null,
        isLoading: false,
      });

      return { error: null };
    } catch (err) {
      const authError = err as AuthError;
      set({ error: authError, isLoading: false });
      return { error: authError };
    }
  },

  /**
   * 초기 인증 상태 복원
   * 앱 시작 시 저장된 세션을 확인하고 인증 상태를 복원합니다.
   */
  initializeAuth: async () => {
    set({ isLoading: true });
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // ... 기존 set 로직 유지
      set({
        user: session?.user ?? null,
        session,
        isAuthenticated: !!session?.user,
        error: null,
        isLoading: false,
      });
    } catch (err) {
      set({ isLoading: false });
    } finally {
      // 2. [중요] 성공하든 실패하든 "인증 확인이 끝났다"고 신호를 보냅니다.
      resolveAuth(true);
    }
  },

  // Internal setters (for auth state listener)
  setUser: (user: User | null) => set({ user, isAuthenticated: user !== null && get().session !== null }),
  setSession: (session: Session | null) => set({ session, isAuthenticated: get().user !== null && session !== null }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: AuthError | null) => set({ error }),
}));
