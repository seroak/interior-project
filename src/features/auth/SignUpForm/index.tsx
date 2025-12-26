import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/Input";
import { useSignUp } from "./hooks/useSignUp";
import { OAuthButton } from "@/components/auth/OAuthButton";

export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, isPending, error, clearError } = useSignUp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    register({ email, password, confirmPassword });
  };

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <div className="bg-white rounded-[20px] p-8 shadow-lg">
        <h2 className="text-[32px] font-nanum-square font-extrabold text-center mb-8 text-gray-900">회원가입</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            id="email"
            type="email"
            label="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            required
            disabled={isPending}
            error={error && error.includes("이메일") ? error : undefined}
          />

          <Input
            id="password"
            type="password"
            label="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요 (최소 6자)"
            required
            disabled={isPending}
            showPasswordToggle
            error={error && error.includes("비밀번호") && !error.includes("일치") ? error : undefined}
          />

          <Input
            id="confirmPassword"
            type="password"
            label="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호를 다시 입력하세요"
            required
            disabled={isPending}
            showPasswordToggle
            error={error && error.includes("일치") ? error : undefined}
          />

          {error && !error.includes("이메일") && !error.includes("비밀번호") && (
            <div className="text-[14px] font-nanum-square font-regular text-red-500 text-center">{error}</div>
          )}

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={isPending}
              className="flex cursor-pointer bg-raw-umber justify-center items-center gap-2 rounded-[10px] px-[30px] py-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <p className="text-[18px] font-nanum-square font-bold text-pure-white">
                {isPending ? "가입 중..." : "회원가입"}
              </p>
            </button>

            <div className="relative flex items-center gap-4 my-2">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="text-[12px] font-nanum-square font-regular text-gray-500">또는</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col gap-3">
              <OAuthButton provider="google" />
              <OAuthButton provider="github" />
              <OAuthButton provider="kakao" />
            </div>

            <div className="text-center">
              <Link
                to="/login"
                className="text-[14px] font-nanum-square font-regular text-gray-600 hover:text-raw-umber transition-colors"
              >
                이미 계정이 있으신가요? 로그인
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
