import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface DropZoneProps {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onClick: () => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  acceptedTypes: string[];
}

export const DropZone = ({
  onDrop,
  onDragOver,
  onClick,
  onFileSelect,
  fileInputRef,
  acceptedTypes,
}: DropZoneProps) => {
  return (
    <div
      className="border-2 border-dashed border-blue-200 rounded-xl p-10 flex flex-col items-center justify-center bg-white hover:bg-blue-50 transition-colors cursor-pointer h-[320px]"
      onDrop={onDrop}
      onDragOver={onDragOver}
      onClick={onClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={onFileSelect}
        accept={acceptedTypes.join(",")}
      />
      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-500">
        <ImageIcon size={32} />
      </div>
      <p className="text-lg font-medium text-gray-700 mb-2">
        Drop your image here, or <span className="text-blue-500 font-bold">browse</span>
      </p>
      <p className="text-sm text-gray-400">Supports: {acceptedTypes.map(t => t.split('/')[1].toUpperCase()).join(", ")}</p>
    </div>
  );
};
