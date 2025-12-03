import ImgOverlayBlack60 from "@/components/ImgOverlayBlack50";
import { RoundButton } from "@/components/ui/Button/RoundButton";
import { FeatureHeroText } from "./FeatureHeroText";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export const TopFeatureSection = () => {
  const navigate = useNavigate();
  return (
    <ImgOverlayBlack60 className="h-full">
      <div className="w-full h-[780px] flex items-center justify-center">
        <div className="w-full h-[780px] object-cover">
          <img
            className="w-full h-full object-cover"
            src="main_bg.webp"
            alt="bg-img"
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>

      <div className="absolute w-full flex flex-col items-center justify-center top-0 left-0 z-20 gap-[200px] pt-[200px]">
        <motion.div
          className="flex flex-col gap-[20px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <FeatureHeroText
            title="평범한 원룸이 특별한 공간이 되는 순간"
            description={`AI 인테리어가 공간의 한계를 넘어,\n당신만의 감성과 스타일을 담은 새로운 공간을 만들어 드립니다.`}
          />
        </motion.div>
        <motion.div
          className="w-[200px]"
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
