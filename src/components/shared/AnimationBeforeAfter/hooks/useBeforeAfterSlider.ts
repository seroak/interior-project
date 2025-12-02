import { useRef, useState, useEffect } from "react";
import { useMotionValue, useTransform } from "framer-motion";

export const useBeforeAfterSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0.5); // 시작 위치를 50%로 설정

  const clipPath = useTransform(x, (value) => {
    const percentage = value * 100;
    return `inset(0 ${100 - percentage}% 0 0)`;
  });

  const updatePosition = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, offsetX / rect.width));

    x.set(percentage);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalPointerMove = (e: PointerEvent) => {
      updatePosition(e.clientX);
    };

    const handleGlobalPointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handleGlobalPointerMove);
    window.addEventListener("pointerup", handleGlobalPointerUp);

    return () => {
      window.removeEventListener("pointermove", handleGlobalPointerMove);
      window.removeEventListener("pointerup", handleGlobalPointerUp);
    };
  }, [isDragging]);

  const sliderPosition = useTransform(x, (value) => `${value * 100}%`);
  return { containerRef, clipPath, handlePointerDown, handlePointerMove, sliderPosition };
};
