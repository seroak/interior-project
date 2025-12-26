import { describe, it, expect } from "vitest";
import type { AuthError } from "@supabase/supabase-js";
import { getAuthErrorMessage, getErrorCodeMessage, isErrorType } from "../auth";

describe("auth", () => {
  describe("getAuthErrorMessage", () => {
    it("null 에러에 대해 기본 메시지를 반환해야 함", () => {
      expect(getAuthErrorMessage(null)).toBe("알 수 없는 오류가 발생했습니다.");
    });

    it("잘못된 로그인 정보 에러를 변환해야 함", () => {
      const error = {
        message: "Invalid login credentials",
        name: "AuthError",
      } as AuthError;
      expect(getAuthErrorMessage(error)).toBe("이메일 또는 비밀번호가 올바르지 않습니다.");
    });

    it("이메일 미인증 에러를 변환해야 함", () => {
      const error = {
        message: "Email not confirmed",
        name: "AuthError",
      } as AuthError;
      expect(getAuthErrorMessage(error)).toBe("이메일 인증이 필요합니다. 이메일을 확인해주세요.");
    });

    it("이미 가입된 이메일 에러를 변환해야 함", () => {
      const error = {
        message: "User already registered",
        name: "AuthError",
      } as AuthError;
      expect(getAuthErrorMessage(error)).toBe("이미 가입된 이메일입니다.");
    });

    it("잘못된 이메일 형식 에러를 변환해야 함", () => {
      const error = {
        message: "Email address is invalid",
        name: "AuthError",
      } as AuthError;
      expect(getAuthErrorMessage(error)).toBe("올바른 이메일 형식이 아닙니다.");
    });

    it("짧은 비밀번호 에러를 변환해야 함", () => {
      const error = {
        message: "Password too short",
        name: "AuthError",
      } as AuthError;
      expect(getAuthErrorMessage(error)).toBe("비밀번호는 최소 6자 이상이어야 합니다.");
    });

    it("긴 비밀번호 에러를 변환해야 함", () => {
      const error = {
        message: "Password too long",
        name: "AuthError",
      } as AuthError;
      expect(getAuthErrorMessage(error)).toBe("비밀번호는 72자 이하여야 합니다.");
    });

    it("네트워크 에러를 변환해야 함", () => {
      const error = {
        message: "Network error occurred",
        name: "AuthError",
      } as AuthError;
      expect(getAuthErrorMessage(error)).toBe("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.");
    });

    it("세션 만료 에러를 변환해야 함", () => {
      const error = {
        message: "Session expired",
        name: "AuthError",
      } as AuthError;
      expect(getAuthErrorMessage(error)).toBe("세션이 만료되었습니다. 다시 로그인해주세요.");
    });

    it("알 수 없는 에러는 원본 메시지를 반환해야 함", () => {
      const error = {
        message: "Unknown error",
        name: "AuthError",
      } as AuthError;
      expect(getAuthErrorMessage(error)).toBe("Unknown error");
    });
  });

  describe("getErrorCodeMessage", () => {
    it("알려진 에러 코드에 대한 메시지를 반환해야 함", () => {
      expect(getErrorCodeMessage("invalid_credentials")).toBe("이메일 또는 비밀번호가 올바르지 않습니다.");
      expect(getErrorCodeMessage("email_not_confirmed")).toBe("이메일 인증이 필요합니다. 이메일을 확인해주세요.");
      expect(getErrorCodeMessage("user_already_registered")).toBe("이미 가입된 이메일입니다.");
    });

    it("알 수 없는 에러 코드에 대해 기본 메시지를 반환해야 함", () => {
      expect(getErrorCodeMessage("unknown_error")).toBe("알 수 없는 오류가 발생했습니다.");
    });
  });

  describe("isErrorType", () => {
    it("에러 타입이 일치하면 true를 반환해야 함", () => {
      const error = {
        message: "Invalid login credentials",
        name: "AuthError",
      } as AuthError;
      expect(isErrorType(error, "invalid")).toBe(true);
      expect(isErrorType(error, "credentials")).toBe(true);
    });

    it("에러 타입이 일치하지 않으면 false를 반환해야 함", () => {
      const error = {
        message: "Invalid login credentials",
        name: "AuthError",
      } as AuthError;
      expect(isErrorType(error, "network")).toBe(false);
    });

    it("null 에러에 대해 false를 반환해야 함", () => {
      expect(isErrorType(null, "any")).toBe(false);
    });

    it("대소문자 구분 없이 비교해야 함", () => {
      const error = {
        message: "Invalid Login Credentials",
        name: "AuthError",
      } as AuthError;
      expect(isErrorType(error, "INVALID")).toBe(true);
      expect(isErrorType(error, "invalid")).toBe(true);
    });
  });
});


