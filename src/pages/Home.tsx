import DescriptionFeatureSection from "../components/FeatureSection/DescriptionFeatureSection";

import TopFeatureSection from "../components/FeatureSection/TopFeatureSection";
import ImgOverlayBlack60 from "../components/ImgOverlayBlack50";
const Home = () => {
  return (
    <div className="w-full h-full bg-black">
      <div className="flex flex-col flex-1 items-center w-full max-w-[1920px] min-w-[1400px] bg-gray-400 mx-auto">
        <TopFeatureSection />
        <ImgOverlayBlack60>
          <div className="flex flex-col items-center gap-[100px] py-[100px] w-full bg-[url('/bottom-bg.png')] bg-cover bg-center bg-no-repeat">
            <DescriptionFeatureSection
              title="사진 업로드"
              description="드래그 앤 드롭 또는 파일 선택으로 사진을 불러오거나 원하는 공간 이미지를 선택해 업로드하세요."
              numberText="01"
              imgPath="./pricing.png"
              alt="icon"
              label="사진 업로드"
              iconPath="./photo-upload.svg"
              onClick={() => {}}
            />
            <DescriptionFeatureSection
              title="스타일 선택"
              description="모던, 엔티크, 플랜테리어, 빈티지 중에서 원하는 분위기를 선택해 적용해보세요."
              numberText="02"
              imgPath="./pricing.png"
              alt="icon"
              label="사진 업로드"
              iconPath="./photo-upload.svg"
              onClick={() => {}}
            />
            <DescriptionFeatureSection
              title="결과 확인"
              description="선택한 스타일을 기반으로 AI가 변환한 이미지를 확인하고 바뀐 공간의 분위기를 바로 비교해보세요."
              numberText="03"
              imgPath="./pricing.png"
              alt="icon"
              label="사진 업로드"
              iconPath="./photo-upload.svg"
              onClick={() => {}}
            />
          </div>
        </ImgOverlayBlack60>
      </div>
    </div>
  );
};

export default Home;
