import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoundButton } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export const DescriptionFeatureSection = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      number: "01",
      title: "사진을 업로드 하세요.",
      description: "인테리어를 원하는 빈 방이나 가구가 있는 방 사진을\n선택해 업로드 하세요.",
    },
    {
      number: "02",
      title: "스타일을 선택하세요.",
      description: "모던, 엔티크, 플랜테리어, 빈티지 등 다양한 디자인\n스타일을 선택해 적용해보세요.",
    },
    {
      number: "03",
      title: "결과를 확인하세요.",
      description: "선택한 스타일을 기반으로 AI가 변환한 이미지를\n확인하고 바뀐 공간의 분위기를 바로 비교해보세요.",
    },
  ];

  const currentImage = index === 0 ? "/main-upload-description.png" : "/main-result-description.png";

  return (
    <div className="w-full relative z-10 pt-20 pb-0 overflow-hidden">
      {/* Background Gradient Carousel */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index}
            src="/gradation-bg.png"
            alt="gradient background"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "linear" }}
          />
        </AnimatePresence>
      </div>

      <div className="w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row justify-between gap-20">
        {/* Left Side: Steps */}
        <div className="flex flex-col gap-16 flex-none justify-center mb-20 pl-[100px] z-20">
          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h3
                  className={`text-[32px] font-nanum-square font-bold transition-colors duration-500 ${
                    i === index ? "text-black" : "text-gray-text"
                  }`}
                >
                  {step.number}. {step.title}
                </h3>
                <p
                  className={`text-[18px] font-nanum-square whitespace-pre-line leading-relaxed transition-colors duration-500 ${
                    i === index ? "text-black" : "text-gray-text"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="w-[200px]">
            <RoundButton iconPath="./photo-upload.svg" alt="uplod Button" onClick={() => navigate("/interior")}>
              사진 업로드
            </RoundButton>
          </div>
        </div>

        {/* Right Side: Preview Card Carousel */}
        <div className="flex-1 w-full flex flex-col justify-end min-w-[900px] relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              className="w-full"
              initial={{ x: "100vw" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100vw" }}
              transition={{ duration: 0.8, ease: "linear" }}
            >
              <img src={currentImage} className="w-full" alt="Description Preview" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
