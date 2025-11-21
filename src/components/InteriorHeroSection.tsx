import ImgOverlayBlack55 from "./ImgOverlayBlack55";

const InteriorHeroSection = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <ImgOverlayBlack55 className="h-full">
          <img src="Interior-banner.png" alt="Interior Background" className="w-full h-full object-cover" />
          <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center gap-[30px]">
            <h1 className="text-white text-[50px] font-extrabold">AI로 실현하는 나만의 공간</h1>
            <p className="text-white text-[22px] font-regular">
              방 사진을 업로드하고 원하는 스타일을 선택하면 AI가 새로운 인테리어 디자인을 생성해드립니다.
            </p>
          </div>
        </ImgOverlayBlack55>
      </div>
    </div>
  );
};
export default InteriorHeroSection;
