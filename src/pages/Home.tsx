import { useNavigate } from "react-router";
import { DescriptionFeatureSection, TopFeatureSection } from "@/features/home";
import { AnimationBeforeAfter } from "@/components/shared";
import { ImgOverlayBlack50 } from "@/components/ui";
import { IMAGE_PATHS } from "@/components/shared/AnimationBeforeAfter/constants";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-black">
      <div className="flex flex-col flex-1 items-center w-full max-w-[1920px] min-w-[1000px] bg-gray-400 mx-auto">
        <TopFeatureSection />
        <div className="w-full bg-white flex flex-col items-center py-[100px] px-[192px] gap-[70px]">
          <div className="flex flex-col items-center gap-[30px]">
            <span className="text-[48px] font-nanum-square font-extrabold text-center">Before & After</span>
            <span className="text-[20px] font-nanum-square font-regular text-center">
              공간의 온도와 분위기, 그리고 당신의 취향까지. 원하는 스타일과 색감, 요구사항을 입력하면 AI가 그 감성을
              그대로 반영해 제안합니다. 단 한 장의 사진으로, 나만의 취향이 담긴 인테리어를 만나보세요.
            </span>
          </div>

          <div className="w-full flex items-center">
            <AnimationBeforeAfter beforeImgPath={IMAGE_PATHS.before} afterImgPath={IMAGE_PATHS.after} />
          </div>
        </div>

        <ImgOverlayBlack50>
          <div className="flex flex-col items-center gap-[100px] py-[100px] w-full bg-[url('/bottom-bg.png')] bg-cover bg-center bg-no-repeat">
            <DescriptionFeatureSection
              title="사진 업로드"
              description="드래그 앤 드롭 또는 파일 선택으로 사진을 불러오거나 원하는 공간 이미지를 선택해 업로드하세요."
              numberText="01"
              imgPath="./pricing.png"
              alt="icon"
              label="사진 업로드"
              iconPath="./photo-upload.svg"
              onClick={() => {
                navigate("/interior");
              }}
            />
            <DescriptionFeatureSection
              title="스타일 선택"
              description="모던, 엔티크, 플랜테리어, 빈티지 중에서 원하는 분위기를 선택해 적용해보세요."
              numberText="02"
              imgPath="./pricing.png"
              alt="icon"
              label="사진 업로드"
              iconPath="./photo-upload.svg"
              onClick={() => {
                navigate("/interior");
              }}
            />
            <DescriptionFeatureSection
              title="결과 확인"
              description="선택한 스타일을 기반으로 AI가 변환한 이미지를 확인하고 바뀐 공간의 분위기를 바로 비교해보세요."
              numberText="03"
              imgPath="./pricing.png"
              alt="icon"
              label="사진 업로드"
              iconPath="./photo-upload.svg"
              onClick={() => {
                navigate("/interior");
              }}
            />
          </div>
        </ImgOverlayBlack50>
      </div>
    </div>
  );
};

export default Home;
