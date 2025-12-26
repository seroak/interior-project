import { describe, it, expect } from "vitest";
import { isValidEmail, validatePassword, isPasswordMatch, getEmailError, getPasswordError } from "../validation";

describe("validation", () => {
  describe("isValidEmail", () => {
    it("유효한 이메일 형식을 반환해야 함", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
      expect(isValidEmail("user.name@example.co.uk")).toBe(true);
      expect(isValidEmail("user+tag@example.com")).toBe(true);
    });

    it("유효하지 않은 이메일 형식을 반환해야 함", () => {
      expect(isValidEmail("invalid-email")).toBe(false);
      expect(isValidEmail("@example.com")).toBe(false);
      expect(isValidEmail("user@")).toBe(false);
      expect(isValidEmail("user@example")).toBe(false);
      expect(isValidEmail("")).toBe(false);
    });
  });

  describe("validatePassword", () => {
    it("유효한 비밀번호를 통과해야 함", () => {
      const result = validatePassword("password123");
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it("6자 미만 비밀번호를 거부해야 함", () => {
      const result = validatePassword("short");
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain("비밀번호는 최소 6자 이상이어야 합니다.");
    });

    it("72자 초과 비밀번호를 거부해야 함", () => {
      const longPassword = "a".repeat(73);
      const result = validatePassword(longPassword);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain("비밀번호는 72자 이하여야 합니다.");
    });

    it("경계값 테스트: 6자 비밀번호는 통과해야 함", () => {
      const result = validatePassword("123456");
      expect(result.isValid).toBe(true);
    });

    it("경계값 테스트: 72자 비밀번호는 통과해야 함", () => {
      const password = "a".repeat(72);
      const result = validatePassword(password);
      expect(result.isValid).toBe(true);
    });
  });

  describe("isPasswordMatch", () => {
    it("일치하는 비밀번호를 반환해야 함", () => {
      expect(isPasswordMatch("password123", "password123")).toBe(true);
    });

    it("일치하지 않는 비밀번호를 반환해야 함", () => {
      expect(isPasswordMatch("password123", "password456")).toBe(false);
      expect(isPasswordMatch("password", "")).toBe(false);
    });
  });

  describe("getEmailError", () => {
    it("빈 이메일에 대한 에러 메시지를 반환해야 함", () => {
      expect(getEmailError("")).toBe("이메일을 입력해주세요.");
    });

    it("유효하지 않은 이메일 형식에 대한 에러 메시지를 반환해야 함", () => {
      expect(getEmailError("invalid-email")).toBe("올바른 이메일 형식이 아닙니다.");
      expect(getEmailError("user@")).toBe("올바른 이메일 형식이 아닙니다.");
    });

    it("유효한 이메일에 대해 undefined를 반환해야 함", () => {
      expect(getEmailError("test@example.com")).toBeUndefined();
    });
  });

  describe("getPasswordError", () => {
    it("빈 비밀번호에 대한 에러 메시지를 반환해야 함", () => {
      expect(getPasswordError("")).toBe("비밀번호를 입력해주세요.");
    });

    it("짧은 비밀번호에 대한 에러 메시지를 반환해야 함", () => {
      expect(getPasswordError("short")).toBe("비밀번호는 최소 6자 이상이어야 합니다.");
    });

    it("유효한 비밀번호에 대해 undefined를 반환해야 함", () => {
      expect(getPasswordError("password123")).toBeUndefined();
    });
  });
});
