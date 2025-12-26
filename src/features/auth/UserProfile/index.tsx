import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

/**
 * 사용자 프로필 컴포넌트
 * 로그인한 사용자의 정보를 표시하고 로그아웃 기능을 제공합니다.
 *
 * @example
 * ```tsx
 * <UserProfile />
 * ```
 */
export const UserProfile = () => {
  const navigate = useNavigate();
  const { user, signOut, isLoading } = useAuthStore();

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        <span className="text-[14px] font-nanum-square font-regular text-gray-600">로딩 중...</span>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-[20px] shadow-lg">
      <div className="flex flex-col gap-2">
        <h3 className="text-[20px] font-nanum-square font-extrabold text-gray-900">프로필</h3>
        <div className="flex flex-col gap-1">
          <div className="text-[14px] font-nanum-square font-regular text-gray-600">이메일</div>
          <div className="text-[16px] font-nanum-square font-bold text-gray-900">{user.email}</div>
        </div>
        {user.created_at && (
          <div className="flex flex-col gap-1 mt-2">
            <div className="text-[14px] font-nanum-square font-regular text-gray-600">가입일</div>
            <div className="text-[14px] font-nanum-square font-regular text-gray-700">
              {new Date(user.created_at).toLocaleDateString("ko-KR")}
            </div>
          </div>
        )}
      </div>

      <button
        onClick={handleLogout}
        className="w-full px-4 py-2 bg-red-500 rounded-[10px] text-[14px] font-nanum-square font-bold text-white hover:bg-red-600 transition-colors"
      >
        로그아웃
      </button>
    </div>
  );
};
