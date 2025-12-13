import AnimationBeforeAfter from "@/components/shared/AnimationBeforeAfter";
import { useStyleOptions } from "@/store/useStyleOptions";
interface GeneratedImageResultProps {
  originalImageUrl: string;
  generatedImageUrl: Record<string, string>;
  onClose: () => void;
}

export const GeneratedImageResult = ({ originalImageUrl, generatedImageUrl, onClose }: GeneratedImageResultProps) => {
  const selectedStyleTitle = useStyleOptions((state) => state.selectedStyleTitle);
  const currentImage = generatedImageUrl[selectedStyleTitle.toLowerCase()];
  return (
    <div className="w-full mx-auto flex flex-col items-center">
      {currentImage && (
        <div className="relative w-full max-w-[1000px] h-[600px] flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-200">
          <div className="mx-auto overflow-hidden rounded-lg shadow-2xl h-full w-fit flex items-center justify-center">
            <AnimationBeforeAfter
              beforeImgPath={originalImageUrl}
              afterImgPath={currentImage}
              className="h-full w-auto object-contain"
            />
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors z-20"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
