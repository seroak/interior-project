import { useAuthStore } from "@/store/useAuthStore";

/**
 * 인증 상태와 액션을 쉽게 사용할 수 있는 편의 훅
 * useAuthStore를 래핑하여 자주 사용되는 인증 로직을 제공합니다.
 */
export const useAuth = () => {
  const store = useAuthStore();

  return {
    // 상태
    user: store.user,
    session: store.session,
    isAuthenticated: store.isAuthenticated,
    isLoading: store.isLoading,
    error: store.error,

    // 액션
    signIn: store.signIn,
    signUp: store.signUp,
    signOut: store.signOut,
    resetPassword: store.resetPassword,
    updateUser: store.updateUser,

    // 편의 메서드
    isLoggedIn: store.isAuthenticated,
    currentUser: store.user,
  };
};
