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
      className="w-full h-full min-h-[400px] border-2 border-dashed border-[#382922] rounded-[20px] flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer gap-6"
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
        data-testid="file-input"
      />

      <div className="w-[100px] h-[100px] rounded-[20px] flex items-center justify-center">
        <img src="upload_icon.svg" alt="upload_icon" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-[18px] font-nanum-square font-bold text-gray-text">이미지를 선택해서 업로드 하세요.</p>
        <p className="text-[14px] font-nanum-square font-regular text-gray-text">(10MB 이내 / JPG, JPEG, PNG)</p>
      </div>

      <button className="px-6 py-2 bg-[#4B3D2A] text-white rounded-lg text-[14px] font-bold hover:bg-[#3A2F20] transition-colors cursor-pointer">
        업로드하기
      </button>
    </div>
  );
};
