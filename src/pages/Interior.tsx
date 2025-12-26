import { ImageGenerationForm } from "@/features/interior";
import { useAuthStore } from "@/store/useAuthStore";
import { LoadingSpinner } from "@/components/shared";

const Interior = () => {
  const { isLoading } = useAuthStore();

  // authLoader가 실행 중일 때 (isLoading이 true) 로딩 스피너 표시
  if (isLoading) {
    return <LoadingSpinner message="인증 상태를 확인하는 중..." fullScreen />;
  }

  return (
    <div className="w-full min-h-screen bg-white font-nanum-square">
      <div className="max-w-[1700px] mx-auto px-4 py-[40px] pt-[120px]">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full ">
            <ImageGenerationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interior;
