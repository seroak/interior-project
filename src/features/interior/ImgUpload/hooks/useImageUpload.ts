import { useRef } from "react";

interface UseImageUploadProps {
  maxSizeMB?: number;
  acceptedTypes?: string[];
  onImageSelect: (file: File) => void;
}

export const useImageUpload = ({
  maxSizeMB = 20,
  acceptedTypes = ["image/jpeg", "image/png", "image/webp"],
  onImageSelect,
}: UseImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    if (acceptedTypes.length > 0 && !acceptedTypes.includes(file.type)) {
      alert(`File type not supported. Please upload: ${acceptedTypes.join(", ")}`);
      return false;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`File size exceeds ${maxSizeMB}MB limit.`);
      return false;
    }

    return true;
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        onImageSelect(file);
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        onImageSelect(file);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return {
    fileInputRef,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    triggerFileInput,
    acceptedTypes,
  };
};
