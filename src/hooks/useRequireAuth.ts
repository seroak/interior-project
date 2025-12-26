import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

/**
 * 인증이 필요한 페이지에서 사용하는 훅
 * 미인증 시 자동으로 로그인 페이지로 리다이렉트합니다.
 *
 * @param redirectTo - 리다이렉트할 경로 (기본값: "/login")
 */
export const useRequireAuth = (redirectTo: string = "/login") => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate, redirectTo]);

  return {
    isAuthenticated,
    isLoading,
  };
};
