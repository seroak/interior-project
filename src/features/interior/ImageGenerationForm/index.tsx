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
    isFetchingImages,
    handleImageSelect,
    handleClearImage,
    handleImgGenerate,
    handleCloseResult,
    handleShareImage,
    isSharing,
  } = useImageGenerate();

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <section className="mb-10">
        {isGenerating || isFetchingImages ? (
          <div className="w-full h-[800px] flex items-center ">
            <LoadingSpinner />
          </div>
        ) : generatedImageUrls ? (
          <div className="flex flex-col gap-10">
            <div className="bg-white rounded-[30px] shadow-lg p-10 flex flex-col gap-6">
              <h2 className="text-xl font-bold text-gray-900">이미지 업로드</h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full"
              >
                <GeneratedImageResult
                  originalImageUrl={previewUrl ?? ""}
                  generatedImageUrl={generatedImageUrls}
                  onClose={handleCloseResult}
                  onShare={handleShareImage}
                  isSharing={isSharing}
                />
              </motion.div>
            </div>

            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">스타일 선택</h2>
                <button
                  onClick={handleImgGenerate}
                  className="px-4 py-2 bg-[#4B3D2A] text-white rounded-lg text-[14px] font-bold hover:bg-[#3A2F20] transition-colors"
                >
                  재생성하기
                </button>
              </div>
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
