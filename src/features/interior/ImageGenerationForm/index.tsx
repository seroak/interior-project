import { ImgUpload } from "../ImgUpload";
import { StyleOptionGrid } from "../StyleOptionGrid";
import { GeneratedImageResult } from "../GeneratedImageResult";
import { LoadingSpinner } from "@/features/interior/ImgUpload/components/LoadingSpinner";
import { useImageGenerate } from "./hooks/useImageGenerate";
import { motion } from "framer-motion";
export const ImageGenerationForm = () => {
  const {
    generatedImageUrls,
    previewUrl,
    isGenerating,
    handleImageSelect,
    handleClearImage,
    handleImgGenerate,
    handleCloseResult,
  } = useImageGenerate();

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-10">이미지 업로드</h2>
        {isGenerating ? (
          <div className="w-full h-[800px] flex items-center ">
            <LoadingSpinner />
          </div>
        ) : generatedImageUrls ? (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-max-[1200px]"
            >
              <GeneratedImageResult
                originalImageUrl={previewUrl ?? ""}
                generatedImageUrl={generatedImageUrls}
                onClose={handleCloseResult}
              />
            </motion.div>
            <div className="w-full h-[1px] bg-gray-200 my-5" />
            <section className="mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6">스타일 선택</h2>
              <StyleOptionGrid />
            </section>
          </div>
        ) : (
          <div className="flex flex-col gap-[20px]">
            <div className="w-full max-w-[1200px] h-[800px] flex items-center ">
              <ImgUpload
                onImageSelect={handleImageSelect}
                previewUrl={previewUrl}
                onClear={handleClearImage}
                onImageGenerate={handleImgGenerate}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
