import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuthErrorMessage } from "@/utils/auth";

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  metadata?: Record<string, any>;
}

/**
 * 회원가입 기능을 제공하는 커스텀 훅
 * React Query mutation을 사용하여 회원가입 상태를 관리합니다.
 *
 * @returns 회원가입 함수, 로딩 상태, 에러 메시지
 *
 * @example
 * ```tsx
 * const { register, isPending, error } = useSignUp();
 * register({ email: "user@example.com", password: "password123", confirmPassword: "password123" });
 * ```
 */
export const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const signUp = useAuthStore((state) => state.signUp);

  const { mutate: register, isPending } = useMutation({
    mutationFn: async (data: SignUpFormData) => {
      setError(null);

      // 비밀번호 확인 검증
      if (data.password !== data.confirmPassword) {
        throw new Error("비밀번호가 일치하지 않습니다.");
      }

      const result = await signUp(data.email, data.password, data.metadata);

      if (result.error) {
        throw result.error;
      }

      return result;
    },
    onSuccess: (data) => {
      // 이메일 인증이 필요한 경우와 즉시 로그인되는 경우 처리
      if (data.error === null) {
        // 회원가입 성공 시 로그인 페이지로 리다이렉트
        // (이메일 인증이 필요한 경우를 대비)
        navigate("/login", {
          state: { message: "회원가입이 완료되었습니다. 이메일을 확인해주세요." },
        });
      }
    },
    onError: (err: any) => {
      // 비밀번호 확인 에러는 그대로 표시
      if (err.message && err.message.includes("비밀번호가 일치하지 않습니다")) {
        setError(err.message);
        return;
      }
      // 그 외 에러는 사용자 친화적인 메시지로 변환
      const errorMessage = getAuthErrorMessage(err);
      setError(errorMessage);
    },
  });

  return {
    register,
    isPending,
    error,
    clearError: () => setError(null),
  };
};
