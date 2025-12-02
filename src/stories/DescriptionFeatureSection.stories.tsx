import type { Meta, StoryObj } from "@storybook/react-vite";

import { DescriptionFeatureSection } from "../features/home/FeatureSection/DescriptionFeatureSection";
import { fn } from "storybook/test";

const meta = {
  title: "FeatureSection/RandingFeatureSection",
  component: DescriptionFeatureSection,
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
    title: { control: "text", description: "RandingFeatureSection의 title 속성", defaultValue: "title" },
    description: {
      control: "text",
      description: "RandingFeatureSection의 description 속성",
      defaultValue: "description",
    },
    numberText: { control: "text", description: "RandingFeatureSection의 numberText 속성", defaultValue: "1" },
    label: { control: "text", description: "RandingFeatureSection의 label 속성", defaultValue: "label" },
    iconPath: { control: "text", description: "RandingFeatureSection의 iconPath 속성", defaultValue: "" },
    onClick: { action: "onClick", description: "RandingFeatureSection의 onClick 이벤트", defaultValue: fn() },
    imgPath: { control: "text", description: "RandingFeatureSection의 imgPath 속성", defaultValue: "" },
    alt: { control: "text", description: "RandingFeatureSection의 alt 속성", defaultValue: "icon" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof DescriptionFeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PricingCard: Story = {
  args: {
    title: "사진 업로드",
    description: "드래그 앤 드롭 또는 파일 선택으로 사진을 불러오거나 원하는 공간 이미지를 선택해 업로드하세요.",
    numberText: "01",
    imgPath: "./pricing.png",
    alt: "icon",
    label: "사진 업로드",
    iconPath: "./photo-upload.svg",
    onClick: fn(),
  },
};
