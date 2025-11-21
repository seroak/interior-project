interface GeneratedImageResultProps {
  imageUrl: string;
  onClose: () => void;
}

const GeneratedImageResult = ({ imageUrl, onClose }: GeneratedImageResultProps) => {
  return (
    <div className="w-full max-w-[800px] mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-10">생성된 이미지</h2>
      {imageUrl ? (
        <div className="relative w-full rounded-lg overflow-hidden border-2 border-[#0099FF]">
          <img src={imageUrl} alt="Generated Interior" className="w-full h-auto object-cover" />
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
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
      ) : (
        <div className="w-full h-[320px] bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 text-sm">이미지를 생성해주세요</p>
        </div>
      )}
    </div>
  );
};

export default GeneratedImageResult;
