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
      description: "불필요한 요소를 배제하고 단순한 형태와 여백을 강조한 깔끔하고 절제된 스타일",
    },
    {
      title: "Scandinavian",
      description: "밝은 원목과 화이트 톤을 중심으로 자연 채광과 따뜻함을 더한 편안하고 아늑한 스타일",
    },
    {
      title: "Modern",
      description: "대담한 직선과 모던한 소재를 활용해 세련되고 기능적인 공간을 만드는 스타일",
    },
    {
      title: "Vintage",
      description: "과거의 감성과 낡은 질감을 현대적으로 재해석한 개성 있고 따뜻한 분위기의 스타일",
    },
  ],
  selectedStyleTitle: "Minimalist",
  selectedStyleIndex: 0,
  setSelectedStyleTitle: (title: string) => set({ selectedStyleTitle: title }),
  setSelectedStyleIndex: (index: number) => set({ selectedStyleIndex: index }),
}));
