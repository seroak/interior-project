import { create } from "zustand";

interface StyleOption {
  title: string;
  description: string;
}

interface StyleOptionsState {
  styleOptions: StyleOption[];
  selectedStyleTitle: string;
  selectedStyleIndex: number;
  setSelectedStyleTitle: (title: string) => void;
  setSelectedStyleIndex: (index: number) => void;
}

export const useStyleOptions = create<StyleOptionsState>((set) => ({
  styleOptions: [
    {
      title: "Modern",
      description: "직선과 미니멀한 색감으로 구성된 세련되고 깔끔한 분위기",
    },
    {
      title: "Antique",
      description: "클래식한 가구와 따뜻한 컬러로 시간의 깊이를 담은 공간",
    },
    {
      title: "Planterior",
      description: "식물과 자연 소재를 중심으로 한 내추럴하고 편안한 공간",
    },
    {
      title: "Vintage",
      description: "과거의 감성과 낡은 질감을 현대적으로 재해석한 개성 있는 스타일",
    },
  ],
  selectedStyleTitle: "Modern",
  selectedStyleIndex: 0,
  setSelectedStyleTitle: (title: string) => set({ selectedStyleTitle: title }),
  setSelectedStyleIndex: (index: number) => set({ selectedStyleIndex: index }),
}));
