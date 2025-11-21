import { useEffect, useState } from "react";

export const useContainerWidth = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidth = () => {
      const width = container.offsetWidth;
      if (width > 0) {
        setContainerWidth(width);
      }
    };

    // 초기 너비 설정
    updateWidth();

    // ResizeObserver를 사용하여 더 정확한 리사이즈 감지
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        if (width > 0) {
          setContainerWidth(width);
        }
      }
    });

    resizeObserver.observe(container);

    // window resize도 함께 감지 (fallback)
    window.addEventListener("resize", updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, [containerRef]);

  return containerWidth;
};
