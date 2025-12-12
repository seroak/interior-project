import { create } from "zustand";

interface StyleOption {
  title: string;
  description: string;
}

interface StyleOptionsState {
  styleIndexObject: {
    minimalist: number;
    scandinavian: number;
    modern: number;
    vintage: number;
  };
  styleOptions: StyleOption[];
  selectedStyleTitle: string;
  selectedStyleIndex: number;
  setSelectedStyleTitle: (title: string) => void;
  setSelectedStyleIndex: (index: number) => void;
}

export const useStyleOptions = create<StyleOptionsState>((set) => ({
  styleIndexObject: {
    minimalist: 0,
    scandinavian: 1,
    modern: 2,
    vintage: 3,
  },
  styleOptions: [
    {
      title: "Minimalist",
      description: "직선과 미니멀한 색감으로 구성된 세련되고 깔끔한 분위기",
    },
    {
      title: "Scandinavian",
      description: "직선과 미니멀한 색감으로 구성된 세련되고 깔끔한 분위기",
    },
    {
      title: "Modern",
      description: "직선과 미니멀한 색감으로 구성된 세련되고 깔끔한 분위기",
    },
    {
      title: "Vintage",
      description: "과거의 감성과 낡은 질감을 현대적으로 재해석한 개성 있는 스타일",
    },
  ],
  selectedStyleTitle: "Minimalist",
  selectedStyleIndex: 0,
  setSelectedStyleTitle: (title: string) => set({ selectedStyleTitle: title }),
  setSelectedStyleIndex: (index: number) => set({ selectedStyleIndex: index }),
}));
