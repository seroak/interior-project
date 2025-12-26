import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { getAuthErrorMessage } from "@/utils/auth";

interface LoginFormData {
  email: string;
  password: string;
}

/**
 * 로그인 기능을 제공하는 커스텀 훅
 * React Query mutation을 사용하여 로그인 상태를 관리합니다.
 *
 * @returns 로그인 함수, 로딩 상태, 에러 메시지
 *
 * @example
 * ```tsx
 * const { login, isPending, error } = useLogin();
 * login({ email: "user@example.com", password: "password123" });
 * ```
 */
export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const signIn = useAuthStore((state) => state.signIn);

  const { mutate: login, isPending } = useMutation({
    mutationFn: async (data: LoginFormData) => {
      setError(null);
      const result = await signIn(data.email, data.password);

      if (result.error) {
        throw result.error;
      }

      return result;
    },
    onSuccess: () => {
      // 로그인 성공 시 원래 가려던 페이지로 리다이렉트
      // 또는 홈으로 리다이렉트
      const from = (location.state as any)?.from || "/";
      navigate(from, { replace: true });
    },
    onError: (err: any) => {
      // 사용자 친화적인 에러 메시지로 변환
      const errorMessage = getAuthErrorMessage(err);
      setError(errorMessage);
    },
  });

  return {
    login,
    isPending,
    error,
    clearError: () => setError(null),
  };
};
