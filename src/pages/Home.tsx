import { DescriptionFeatureSection, TopFeatureSection } from "@/features/home";
import { AnimationBeforeAfter } from "@/components/shared";

import { IMAGE_PATHS } from "@/components/shared/AnimationBeforeAfter/constants";
const Home = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col flex-1 items-center w-full max-w-[1920px] min-w-[1000px] bg-white mx-auto">
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
      </div>
      <div className="w-full mb-[100px]">
        <DescriptionFeatureSection />
      </div>
    </div>
  );
};

export default Home;
