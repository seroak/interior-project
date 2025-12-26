import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

export const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, signOut } = useAuthStore();

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] bg-white shadow-md z-50 flex items-center justify-between px-10">
      <div
        className="text-2xl font-extrabold text-gray-900 tracking-wider cursor-pointer"
        onClick={() => navigate("/")}
      >
        INTERIOR
      </div>

      <div className="flex items-center gap-4">
        {isAuthenticated && (
          <div className="flex items-center gap-4">
            <span className="text-[14px] font-nanum-square font-regular text-gray-700">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 cursor-pointer bg-raw-umber rounded-[10px] text-[14px] font-nanum-square font-bold text-pure-white hover:opacity-90 transition-opacity"
            >
              로그아웃
            </button>
          </div>
        )}
        {!isAuthenticated && (
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 cursor-pointer bg-raw-umber rounded-[10px] text-[14px] font-nanum-square font-bold text-pure-white hover:opacity-90 transition-opacity"
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
};
