import React from "react";
interface DropZoneProps {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onClick: () => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  acceptedTypes: string[];
}

export const DropZone = ({ onDrop, onDragOver, onClick, onFileSelect, fileInputRef, acceptedTypes }: DropZoneProps) => {
  return (
    <div
      className="flex-1 w-full flex flex-col items-center justify-center bg-transparent transition-colors cursor-pointer"
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

      {/* Image Gallery Area */}
      <div className="flex items-center justify-center mb-8 relative w-full h-[300px]">
        {/* Left Image */}
        <div className="w-[200px] h-[240px] rounded-2xl overflow-hidden shadow-lg -translate-x-15 z-0 opacity-90">
          <img src="./upload_left.png" alt="Interior 1" className="w-full h-full object-cover" />
        </div>

        {/* Right Image */}
        <div className="w-[200px] h-[240px] rounded-2xl overflow-hidden shadow-lg translate-x-15 z-0 opacity-90">
          <img src="./upload_right.png" alt="Interior 3" className="w-full h-full object-cover" />
        </div>

        {/* Center Image */}
        <div className="absolute w-[260px] h-[300px] rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white">
          <img src="./upload_center.png" alt="Interior 2" className="w-full h-full object-cover" />
        </div>
      </div>

      <p className="text-[20px] font-bold text-[#7A6248] mb-2">이미지를 선택해서 업로드 해주세요</p>
    </div>
  );
};
