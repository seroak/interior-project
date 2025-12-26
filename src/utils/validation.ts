/**
 * 이메일 유효성 검사
 * @param email - 검사할 이메일 주소
 * @returns 유효한 이메일인지 여부
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 비밀번호 강도 검사
 * @param password - 검사할 비밀번호
 * @returns 검사 결과 객체
 */
export const validatePassword = (
  password: string
): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 6) {
    errors.push("비밀번호는 최소 6자 이상이어야 합니다.");
  }

  if (password.length > 72) {
    errors.push("비밀번호는 72자 이하여야 합니다.");
  }

  // 선택적: 더 강한 비밀번호 정책
  // if (!/[A-Z]/.test(password)) {
  //   errors.push("비밀번호에 대문자가 포함되어야 합니다.");
  // }
  // if (!/[a-z]/.test(password)) {
  //   errors.push("비밀번호에 소문자가 포함되어야 합니다.");
  // }
  // if (!/[0-9]/.test(password)) {
  //   errors.push("비밀번호에 숫자가 포함되어야 합니다.");
  // }
  // if (!/[!@#$%^&*]/.test(password)) {
  //   errors.push("비밀번호에 특수문자가 포함되어야 합니다.");
  // }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * 비밀번호 일치 검사
 * @param password - 원본 비밀번호
 * @param confirmPassword - 확인 비밀번호
 * @returns 일치 여부
 */
export const isPasswordMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};

/**
 * 이메일 유효성 검사 및 에러 메시지 반환
 * @param email - 검사할 이메일 주소
 * @returns 에러 메시지 (유효하면 undefined)
 */
export const getEmailError = (email: string): string | undefined => {
  if (!email) {
    return "이메일을 입력해주세요.";
  }
  if (!isValidEmail(email)) {
    return "올바른 이메일 형식이 아닙니다.";
  }
  return undefined;
};

/**
 * 비밀번호 유효성 검사 및 에러 메시지 반환
 * @param password - 검사할 비밀번호
 * @returns 에러 메시지 (유효하면 undefined)
 */
export const getPasswordError = (password: string): string | undefined => {
  if (!password) {
    return "비밀번호를 입력해주세요.";
  }
  const validation = validatePassword(password);
  if (!validation.isValid) {
    return validation.errors[0]; // 첫 번째 에러만 반환
  }
  return undefined;
};
