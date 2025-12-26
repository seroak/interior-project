import { SignUpForm } from "@/features/auth";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 font-nanum-square flex items-center justify-center py-[120px] px-4">
      <div className="w-full max-w-[500px]">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
