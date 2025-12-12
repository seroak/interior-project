import { useImageUpload } from "./hooks/useImageUpload";
import { DropZone } from "./components/DropZone";
import { motion } from "framer-motion";

interface ImgUploadProps {
  maxSizeMB?: number;
  acceptedTypes?: string[];
  onImageSelect: (file: File) => void;
  previewUrl: string | null;
  onClear: () => void;
  onImageGenerate: () => void;
}

export const ImgUpload = ({
  maxSizeMB,
  acceptedTypes,
  onImageSelect,
  previewUrl,
  onClear,
  onImageGenerate,
}: ImgUploadProps) => {
  const {
    fileInputRef,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    triggerFileInput,
    acceptedTypes: validTypes,
  } = useImageUpload({ maxSizeMB, acceptedTypes, onImageSelect });

  return (
    <div className="w-full h-full mx-auto flex flex-col gap-6 bg-white rounded-[30px] shadow-lg p-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">이미지 업로드</h2>
        {previewUrl && (
          <button
            onClick={onImageGenerate}
            className="px-4 py-2 bg-[#4B3D2A] text-white rounded-lg text-[14px] font-bold hover:bg-[#3A2F20] transition-colors"
          >
            생성하기
          </button>
        )}
      </div>

      {previewUrl ? (
        <div className="relative w-full flex-1 rounded-[20px] overflow-hidden bg-gray-100">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img src={previewUrl} alt="preview" className="w-full h-full object-contain" />
          </motion.div>
          <button
            onClick={onClear}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
            aria-label="Clear image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ) : (
        <DropZone
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={triggerFileInput}
          onFileSelect={handleFileSelect}
          fileInputRef={fileInputRef}
          acceptedTypes={validTypes}
        />
      )}
    </div>
  );
};
