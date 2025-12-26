import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/Input";
import { useResetPassword } from "./hooks/useResetPassword";

export const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const { sendResetEmail, isPending, error, success, clearError, clearSuccess } = useResetPassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    clearSuccess();
    sendResetEmail(email);
  };

  if (success) {
    return (
      <div className="w-full max-w-[400px] mx-auto">
        <div className="bg-white rounded-[20px] p-8 shadow-lg">
          <h2 className="text-[32px] font-nanum-square font-extrabold text-center mb-6 text-gray-900">
            이메일 전송 완료
          </h2>
          <div className="flex flex-col gap-4 text-center">
            <p className="text-[16px] font-nanum-square font-regular text-gray-700">
              {email}로 비밀번호 재설정 링크를 전송했습니다.
            </p>
            <p className="text-[14px] font-nanum-square font-regular text-gray-600">
              이메일을 확인하고 링크를 클릭하여 비밀번호를 재설정하세요.
            </p>
            <Link
              to="/login"
              className="mt-4 text-[14px] font-nanum-square font-regular text-raw-umber hover:underline"
            >
              로그인 페이지로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[400px] mx-auto">
      <div className="bg-white rounded-[20px] p-8 shadow-lg">
        <h2 className="text-[32px] font-nanum-square font-extrabold text-center mb-8 text-gray-900">비밀번호 재설정</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="text-[14px] font-nanum-square font-regular text-gray-600 mb-2">
            가입하신 이메일 주소를 입력하시면 비밀번호 재설정 링크를 보내드립니다.
          </div>

          <Input
            id="email"
            type="email"
            label="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            required
            disabled={isPending}
            error={error ?? undefined}
          />

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={isPending}
              className="flex cursor-pointer bg-raw-umber justify-center items-center gap-2 rounded-[10px] px-[30px] py-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <p className="text-[18px] font-nanum-square font-bold text-pure-white">
                {isPending ? "전송 중..." : "재설정 링크 전송"}
              </p>
            </button>

            <div className="text-center">
              <Link
                to="/login"
                className="text-[14px] font-nanum-square font-regular text-gray-600 hover:text-raw-umber transition-colors"
              >
                로그인 페이지로 돌아가기
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
