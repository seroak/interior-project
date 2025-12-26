import type { AuthError } from "@supabase/supabase-js";

/**
 * Supabase Auth 에러를 사용자 친화적인 메시지로 변환
 * @param error - Supabase AuthError 객체
 * @returns 사용자 친화적인 에러 메시지
 */
export const getAuthErrorMessage = (error: AuthError | null): string => {
  if (!error) {
    return "알 수 없는 오류가 발생했습니다.";
  }

  const errorMessage = error.message.toLowerCase();

  // 이메일 관련 에러
  if (errorMessage.includes("invalid login credentials") || errorMessage.includes("invalid credentials")) {
    return "이메일 또는 비밀번호가 올바르지 않습니다.";
  }

  if (errorMessage.includes("email not confirmed")) {
    return "이메일 인증이 필요합니다. 이메일을 확인해주세요.";
  }

  if (errorMessage.includes("user already registered") || errorMessage.includes("already registered")) {
    return "이미 가입된 이메일입니다.";
  }

  if (errorMessage.includes("email address is invalid")) {
    return "올바른 이메일 형식이 아닙니다.";
  }

  // 비밀번호 관련 에러
  if (errorMessage.includes("password")) {
    if (errorMessage.includes("too short")) {
      return "비밀번호는 최소 6자 이상이어야 합니다.";
    }
    if (errorMessage.includes("too long")) {
      return "비밀번호는 72자 이하여야 합니다.";
    }
    return "비밀번호 형식이 올바르지 않습니다.";
  }

  // 네트워크 에러
  if (errorMessage.includes("network") || errorMessage.includes("fetch")) {
    return "네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.";
  }

  // 토큰 관련 에러
  if (errorMessage.includes("token") || errorMessage.includes("session")) {
    return "세션이 만료되었습니다. 다시 로그인해주세요.";
  }

  // 기타 에러는 원본 메시지 반환
  return error.message || "알 수 없는 오류가 발생했습니다.";
};

/**
 * 에러 코드에 따른 사용자 친화적인 메시지 반환
 * @param errorCode - Supabase 에러 코드
 * @returns 에러 메시지
 */
export const getErrorCodeMessage = (errorCode: string): string => {
  const errorMessages: Record<string, string> = {
    invalid_credentials: "이메일 또는 비밀번호가 올바르지 않습니다.",
    email_not_confirmed: "이메일 인증이 필요합니다. 이메일을 확인해주세요.",
    user_already_registered: "이미 가입된 이메일입니다.",
    invalid_email: "올바른 이메일 형식이 아닙니다.",
    weak_password: "비밀번호가 너무 약합니다.",
    network_error: "네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.",
    session_expired: "세션이 만료되었습니다. 다시 로그인해주세요.",
  };

  return errorMessages[errorCode] || "알 수 없는 오류가 발생했습니다.";
};

/**
 * 에러가 특정 타입인지 확인
 * @param error - AuthError 객체
 * @param errorType - 확인할 에러 타입
 * @returns 에러 타입 일치 여부
 */
export const isErrorType = (error: AuthError | null, errorType: string): boolean => {
  if (!error) return false;
  return error.message.toLowerCase().includes(errorType.toLowerCase());
};
