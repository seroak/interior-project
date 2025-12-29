import { supabase } from "./supabase";
import { useAuthStore } from "@/store/useAuthStore";

export function setupAuthListener() {
  const { setUser, setSession, setError } = useAuthStore.getState();

  // 초기 세션 복원
  useAuthStore.getState().initializeAuth();

  // 인증 상태 변경 리스너
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange(async (event, session) => {
    switch (event) {
      case "SIGNED_IN":
      case "TOKEN_REFRESHED":
        setUser(session?.user ?? null);
        setSession(session);
        useAuthStore.setState({ isAuthenticated: session?.user !== null && session !== null });
        setError(null);
        break;

      case "SIGNED_OUT":
        setUser(null);
        setSession(null);
        useAuthStore.setState({ isAuthenticated: false });
        setError(null);
        break;

      case "USER_UPDATED":
        setUser(session?.user ?? null);
        setSession(session);
        useAuthStore.setState({ isAuthenticated: session?.user !== null && session !== null });
        break;

      default:
        // 기타 이벤트는 세션만 업데이트
        setUser(session?.user ?? null);
        setSession(session);
    }
  });

  // cleanup 함수 반환 (필요시 사용)
  return () => {
    subscription.unsubscribe();
  };
}
