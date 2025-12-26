import { ResetPasswordForm } from "@/features/auth";

const ResetPassword = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 font-nanum-square flex items-center justify-center py-[120px] px-4">
      <div className="w-full max-w-[500px]">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
