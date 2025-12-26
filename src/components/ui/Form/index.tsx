import { FormHTMLAttributes, ReactNode } from "react";

/**
 * Form 래퍼 컴포넌트
 * 폼 관련 공통 스타일링과 유효성 검사를 통합합니다.
 *
 * @example
 * ```tsx
 * <Form onSubmit={handleSubmit}>
 *   <Input label="이메일" type="email" />
 *   <Input label="비밀번호" type="password" />
 *   <button type="submit">제출</button>
 * </Form>
 * ```
 */
export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  /**
   * 폼 제출 핸들러
   */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  /**
   * 폼 내부 컨텐츠
   */
  children: ReactNode;
  /**
   * 추가 CSS 클래스
   */
  className?: string;
}

/**
 * Form 컴포넌트
 * 폼 제출 시 기본 동작을 방지하고 커스텀 핸들러를 실행합니다.
 */
export const Form = ({ onSubmit, children, className = "", ...props }: FormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className={className} {...props}>
      {children}
    </form>
  );
};

Form.displayName = "Form";
