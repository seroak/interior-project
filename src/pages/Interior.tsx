import { ImageGenerationForm } from "@/features/interior";
import { useNavigate } from "react-router-dom";
const Interior = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-white font-nanum-square">
      <header className="fixed top-0 left-0 w-full h-[80px] bg-white shadow-md z-50 flex items-center px-10">
        <div
          className="text-2xl font-extrabold text-gray-900 tracking-wider cursor-pointer"
          onClick={() => navigate("/")}
        >
          INTERIOR
        </div>
      </header>
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
