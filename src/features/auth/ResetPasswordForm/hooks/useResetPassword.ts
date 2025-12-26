import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { getAuthErrorMessage } from "@/utils/auth";

/**
 * 비밀번호 재설정 기능을 제공하는 커스텀 훅
 * React Query mutation을 사용하여 비밀번호 재설정 이메일 전송 상태를 관리합니다.
 *
 * @returns 비밀번호 재설정 이메일 전송 함수, 로딩 상태, 에러 메시지, 성공 상태
 *
 * @example
 * ```tsx
 * const { sendResetEmail, isPending, error, success } = useResetPassword();
 * sendResetEmail("user@example.com");
 * ```
 */
export const useResetPassword = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const resetPassword = useAuthStore((state) => state.resetPassword);

  const { mutate: sendResetEmail, isPending } = useMutation({
    mutationFn: async (email: string) => {
      setError(null);
      setSuccess(false);
      const result = await resetPassword(email);

      if (result.error) {
        throw result.error;
      }

      return result;
    },
    onSuccess: () => {
      setSuccess(true);
    },
    onError: (err: any) => {
      // 사용자 친화적인 에러 메시지로 변환
      const errorMessage = getAuthErrorMessage(err);
      setError(errorMessage);
    },
  });

  return {
    sendResetEmail,
    isPending,
    error,
    success,
    clearError: () => setError(null),
    clearSuccess: () => setSuccess(false),
  };
};
