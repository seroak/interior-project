import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/store/useAuthStore";
import { LoadingSpinner } from "@/components/shared";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setUser, setSession } = useAuthStore();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // URL의 hash에서 세션 정보 추출
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          console.error("세션 가져오기 에러:", error);
          navigate("/login?error=oauth_failed");
          return;
        }

        if (data.session) {
          // 세션 설정
          setUser(data.session.user);
          setSession(data.session);
          useAuthStore.setState({
            isAuthenticated: data.session.user !== null && data.session !== null,
            isLoading: false,
          });

          // 원래 가려던 페이지로 리다이렉트 (있으면)
          const from = searchParams.get("from") || "/";
          navigate(from, { replace: true });
        } else {
          // 세션이 없으면 로그인 페이지로
          navigate("/login?error=no_session", { replace: true });
        }
      } catch (err) {
        console.error("인증 콜백 처리 에러:", err);
        navigate("/login?error=oauth_failed", { replace: true });
      }
    };

    handleAuthCallback();
  }, [navigate, setUser, setSession, searchParams]);

  return <LoadingSpinner message="인증 처리 중..." fullScreen />;
};

export default AuthCallback;
