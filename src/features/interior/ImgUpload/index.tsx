import { useImageUpload } from "./hooks/useImageUpload";
import { DropZone } from "./components/DropZone";
import { motion } from "framer-motion";
import RoundLongButton from "@/components/ui/Button/RoundLongButton";
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
    <div className="w-full h-full mx-auto ">
      {previewUrl ? (
        <div className="flex flex-col gap-[20px] w-full h-full">
          <div className="relative w-full flex-1 border-2 border-transparent rounded-xl overflow-hidden">
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
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-sm transition-colors"
              aria-label="Clear image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <RoundLongButton title={"생성하기"} onClick={onImageGenerate} />
        </div>
      ) : (
        <div className="flex flex-col gap-[20px] w-full h-full">
          <DropZone
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={triggerFileInput}
            onFileSelect={handleFileSelect}
            fileInputRef={fileInputRef}
            acceptedTypes={validTypes}
          />
          <RoundLongButton title={"업로드"} onClick={triggerFileInput} />
        </div>
      )}
    </div>
  );
};
