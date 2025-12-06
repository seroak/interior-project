import { motion } from "framer-motion";

import { ImageLayer } from "./components/ImageLayer";
import { useBeforeAfterSlider } from "./hooks/useBeforeAfterSlider";
interface Props {
  beforeImgPath: string;
  afterImgPath: string;
  className?: string;
}
const AnimationBeforeAfter = ({ beforeImgPath, afterImgPath, className }: Props) => {
  const { containerRef, clipPath, handlePointerDown, handlePointerMove, sliderPosition } = useBeforeAfterSlider();

  return (
    <div
      ref={containerRef}
      className={`${className || "mx-auto overflow-hidden rounded-lg shadow-2xl"} z-0 relative select-none`}
      style={{ willChange: "transform" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    >
      <img
        src={beforeImgPath}
        alt="before"
        className="w-full h-full object-cover"
        style={{ willChange: "transform" }}
      />

      <ImageLayer clipPath={clipPath} imageSrc={afterImgPath} alt="after" />

      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{
          left: sliderPosition,
          willChange: "left",
        }}
      >
        <div className="absolute cursor-ew-resize top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="w-0.5 h-6 bg-gray-400"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimationBeforeAfter;
