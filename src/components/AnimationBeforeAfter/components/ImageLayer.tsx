import { motion, MotionValue } from "framer-motion";

interface ImageLayerProps {
  clipPath: MotionValue<string>;
  imageSrc: string;
  alt: string;
}

export const ImageLayer = ({ clipPath, imageSrc, alt }: ImageLayerProps) => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      style={{
        clipPath: clipPath,
        willChange: "clip-path",
      }}
    >
      <img src={imageSrc} alt={alt} className="w-full h-auto block" />
    </motion.div>
  );
};
