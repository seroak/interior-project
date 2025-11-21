import { useImageUpload } from "./hooks/useImageUpload";
import { DropZone } from "./components/DropZone";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { ImagePreview } from "./components/ImagePreview";

interface ImgUploadProps {
  onImageSelect?: (file: File) => void;
  maxSizeMB?: number;
  acceptedTypes?: string[];
}

const ImgUpload = ({ onImageSelect, maxSizeMB, acceptedTypes }: ImgUploadProps) => {
  const {
    isUploading,
    fileName,
    fileInputRef,
    handleFileSelect,
    handleDrop,
    handleDragOver,
    triggerFileInput,
    cancelUpload,
    acceptedTypes: validTypes,
    previewUrl,
  } = useImageUpload({ onImageSelect, maxSizeMB, acceptedTypes });

  return (
    <div className="w-full mx-auto ">
      {previewUrl ? (
        <ImagePreview previewUrl={previewUrl} fileName={fileName} onRemove={cancelUpload} />
      ) : !isUploading ? (
        <DropZone
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={triggerFileInput}
          onFileSelect={handleFileSelect}
          fileInputRef={fileInputRef}
          acceptedTypes={validTypes}
        />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ImgUpload;
