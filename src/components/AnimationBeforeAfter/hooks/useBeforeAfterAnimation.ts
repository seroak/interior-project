import { useEffect, useRef } from "react";
import { MotionValue, animate } from "framer-motion";
import { ANIMATION_CONFIG, INTERSECTION_CONFIG } from "../constants";

interface UseBeforeAfterAnimationProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  x: MotionValue<number>;
  delay?: number;
}

export const useBeforeAfterAnimation = ({ containerRef, x, delay = 0 }: UseBeforeAfterAnimationProps) => {
  const hasAnimatedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          
          // delay 후에 0에서 1(100%)로 애니메이션
          timeoutRef.current = setTimeout(() => {
            animate(x, 1, {
              duration: ANIMATION_CONFIG.duration,
              ease: ANIMATION_CONFIG.ease,
            });
          }, delay * 1000);
        }
      },
      INTERSECTION_CONFIG
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [containerRef, x, delay]);

  return { hasAnimated: hasAnimatedRef.current };
};
