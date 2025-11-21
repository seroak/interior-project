import { useState, useRef } from "react";

interface UseImageUploadProps {
  onImageSelect?: (file: File) => void;
  maxSizeMB?: number;
  acceptedTypes?: string[];
}

export const useImageUpload = ({
  onImageSelect,
  maxSizeMB = 20,
  acceptedTypes = ["image/jpeg", "image/png", "image/webp"],
}: UseImageUploadProps = {}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const validateFile = (file: File): boolean => {
    // Check file type
    if (acceptedTypes.length > 0 && !acceptedTypes.includes(file.type)) {
      alert(`File type not supported. Please upload: ${acceptedTypes.join(", ")}`);
      return false;
    }

    // Check file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`File size exceeds ${maxSizeMB}MB limit.`);
      return false;
    }

    return true;
  };

  const startUpload = (file: File) => {
    if (!validateFile(file)) return;

    setIsUploading(true);
    setFileName(file.name);
    
    // Simulate upload delay
    setTimeout(() => {
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setIsUploading(false);
      
      if (onImageSelect) {
        onImageSelect(file);
      }
    }, 1500); // 1.5 seconds delay
  };

  const cancelUpload = () => {
    setIsUploading(false);
    setFileName("");
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      startUpload(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      startUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return {
    isUploading,
    fileName,
    fileInputRef,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    triggerFileInput,
    cancelUpload,
    acceptedTypes,
    previewUrl,
  };
};
