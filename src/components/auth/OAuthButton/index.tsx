import { useAuthStore } from "@/store/useAuthStore";
import React, { useState } from "react";

import { GithubIcon, GoogleIcon, KakaoIcon } from "@/components/shared/Icons";

type OAuthProvider = "google" | "github" | "kakao";

interface OAuthButtonProps {
  provider: OAuthProvider;
  className?: string;
}

const providerConfig: Record<
  OAuthProvider,
  { label: string; Icon: (props: { className?: string }) => React.ReactNode }
> = {
  google: { label: "Google로 로그인", Icon: GoogleIcon },
  github: { label: "GitHub로 로그인", Icon: GithubIcon },
  kakao: { label: "카카오로 로그인", Icon: KakaoIcon },
};

/**
 * OAuth 로그인 버튼 컴포넌트
 * @param provider - OAuth 제공자 (google, github, kakao)
 */
export const OAuthButton = ({ provider, className = "" }: OAuthButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const signInWithOAuth = useAuthStore((state) => state.signInWithOAuth);

  const handleOAuthLogin = async () => {
    setIsLoading(true);
    const { error } = await signInWithOAuth(provider);
    if (error) {
      console.error("OAuth 로그인 에러:", error);
      setIsLoading(false);
    }
    // 성공 시 리다이렉트되므로 setIsLoading(false)는 실행되지 않음
  };

  const { Icon, label } = providerConfig[provider];

  return (
    <button
      type="button"
      onClick={handleOAuthLogin}
      disabled={isLoading}
      className={`w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-[10px] bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          <Icon className="w-5 h-5" />
          <span className="text-[16px] font-nanum-square font-bold text-gray-700">{label}</span>
        </>
      )}
    </button>
  );
};
