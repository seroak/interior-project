import { useLocation } from "react-router-dom";
import { LoginForm } from "@/features/auth";

const Login = () => {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div className="w-full min-h-screen bg-gray-50 font-nanum-square flex items-center justify-center py-[120px] px-4">
      <div className="w-full max-w-[500px]">
        {message && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-[10px] text-center">
            <p className="text-[14px] font-nanum-square font-regular text-green-700">{message}</p>
          </div>
        )}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
