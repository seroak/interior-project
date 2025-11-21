import InteriorHeroSection from "../components/InteriorHeroSection";
import ImageGenerationForm from "../components/ImageGenerationForm";
import GeneratedImageResult from "../components/GeneratedImageResult";
import { useState } from "react";

const Interior = () => {
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

  const handleGenerateImage = (image: File, styleIndex: number) => {
    setGeneratedImageUrl(
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
    );
  };

  const handleCloseResult = () => {
    setGeneratedImageUrl(null);
  };

  return (
    <div className="w-full min-h-screen bg-white font-nanum-square">
      <InteriorHeroSection />
      <div className="max-w-[1700px] mx-auto px-4 py-[40px]">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2">
            <ImageGenerationForm onGenerate={handleGenerateImage} />
          </div>

          <div className="w-full lg:w-1/2">
            <GeneratedImageResult imageUrl={generatedImageUrl ?? ""} onClose={handleCloseResult} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interior;
