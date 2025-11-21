import { useRef } from "react";
import { useMotionValue, useTransform } from "framer-motion";

import { useBeforeAfterAnimation } from "./hooks/useBeforeAfterAnimation";
import { ImageLayer } from "./components/ImageLayer";
import { IMAGE_PATHS } from "./constants";

interface AnimationBeforeAfterProps {
  delay?: number;
}

const AnimationBeforeAfter = ({ delay = 0 }: AnimationBeforeAfterProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  // 애니메이션 시작 (0 -> 1)
  useBeforeAfterAnimation({
    containerRef,
    x,
    delay,
  });

  const clipPath = useTransform(x, (value) => {
    const percentage = value * 100;
    return `inset(0 ${100 - percentage}% 0 0)`;
  });

  return (
    <div
      ref={containerRef}
      className="mx-auto overflow-hidden rounded-lg shadow-2xl z-0"
      style={{ willChange: "transform" }}
    >
      <img src={IMAGE_PATHS.before} alt="before" className="w-full h-auto block" style={{ willChange: "transform" }} />

      <ImageLayer clipPath={clipPath} imageSrc={IMAGE_PATHS.after} alt="after" />
    </div>
  );
};

export default AnimationBeforeAfter;
