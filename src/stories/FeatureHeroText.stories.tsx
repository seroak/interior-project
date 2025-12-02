import type { Meta, StoryObj } from "@storybook/react-vite";

import { FeatureHeroText } from "../features/home/FeatureSection/FeatureHeroText";

const meta = {
  title: "FeatureSection/FeatureHeroText",
  component: FeatureHeroText,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#000000",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],

  argTypes: {
    title: {
      control: "text",
      description: "FeatureHeroText의 title 속성",
      defaultValue: "평범한 원룸이 특별한 공간이 되는 순간",
    },
    description: {
      control: "text",
      description: "FeatureHeroText의 description 속성",
      defaultValue:
        "공간의 온도와 분위기, 그리고 당신의 취향까지 단 한 장의 사진으로, 나만의 취향이 담긴 인테리어를 만나보세요",
    },
  },
  args: {},
} satisfies Meta<typeof FeatureHeroText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "평범한 원룸이 특별한 공간이 되는 순간",
    description:
      "공간의 온도와 분위기, 그리고 당신의 취향까지 단 한 장의 사진으로, 나만의 취향이 담긴 인테리어를 만나보세요",
  },
};

export const Custom: Story = {
  args: {
    title: "나만의 공간을 디자인하세요",
    description:
      "AI 기술로 당신의 상상력을 현실로 만들어보세요. 몇 번의 클릭만으로 완전히 새로운 공간을 경험할 수 있습니다.",
  },
};
