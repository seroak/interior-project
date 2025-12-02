import { ImageGenerationForm } from "@/features/interior";
const Interior = () => {
  return (
    <div className="w-full min-h-screen bg-white font-nanum-square">
      <div className="max-w-[1700px] mx-auto px-4 py-[40px]">
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
