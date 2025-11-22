import ImgOverlayBlack60 from "../ImgOverlayBlack50";
import AnimationBeforeAfter from "../AnimationBeforeAfter";
import { RoundButton } from "../RoundButton";
import { FeatureHeroText } from "./FeatureHeroText";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const TopFeatureSection = () => {
  const navigate = useNavigate();
  return (
    <ImgOverlayBlack60 className="h-full">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full">
          <AnimationBeforeAfter delay={1} />
        </div>
      </div>

      <div className="absolute flex flex-col top-0 left-0 z-20 gap-[200px] pl-[208px] pt-[200px] w-[697px] h-[496px]">
        <motion.div
          className="flex flex-col gap-[20px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FeatureHeroText
            title="평범한 원룸이 "
            title2="특별한 공간이 되는 순간"
            description="공간의 온도와 분위기, 그리고 당신의 취향까지 단 한 장의 사진으로, 나만의 취향이 담긴 인테리어를 만나보세요"
          />
        </motion.div>
        <motion.div
          className="w-[239px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <RoundButton
            alt="icon"
            iconPath="./photo-upload.svg"
            onClick={() => {
              navigate("/interior");
            }}
          >
            {"사진 업로드"}
          </RoundButton>
        </motion.div>
      </div>
    </ImgOverlayBlack60>
  );
};
export default TopFeatureSection;
