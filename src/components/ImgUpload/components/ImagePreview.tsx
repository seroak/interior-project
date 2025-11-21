import { X } from "lucide-react";

interface ImagePreviewProps {
  previewUrl: string;
  fileName: string;
  onRemove: () => void;
}

export const ImagePreview = ({ previewUrl, fileName, onRemove }: ImagePreviewProps) => {
  return (
    <div className="relative w-full h-[320px] rounded-xl overflow-hidden border border-gray-200 shadow-sm group bg-gray-50">
      <img
        src={previewUrl}
        alt={fileName}
        className="w-full h-full object-contain"
      />
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={onRemove}
          className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 hover:bg-white shadow-sm transition-all"
          title="Remove image"
        >
          <X size={20} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <p className="text-white text-sm font-medium truncate">{fileName}</p>
      </div>
    </div>
  );
};
