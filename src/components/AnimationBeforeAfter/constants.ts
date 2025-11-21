export const ANIMATION_CONFIG = {
  duration: 2,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  throttleDelay: 100,
} as const;

export const INTERSECTION_CONFIG = {
  threshold: 0.1,
  rootMargin: "50px",
} as const;

export const IMAGE_PATHS = {
  before: "/before.webp",
  after: "/after.webp",
} as const;
