import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeatureDescriptionSection } from "../features/home/FeatureSection/FeatureDescriptionSection";
import { fn } from "storybook/test";

const meta = {
  title: "FeatureSection/FeatureDescriptionSection",
  component: FeatureDescriptionSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    number: { control: "text", description: "Step number" },
    title: { control: "text", description: "Title text" },
    description: { control: "text", description: "Description text" },
    buttonText: { control: "text", description: "Button label" },
    rightImageSrc: { control: "text", description: "Path to the right image" },
    backgroundImageSrc: { control: "text", description: "Path to the background image" },
  },
  args: {
    onButtonClick: fn(),
  },
} satisfies Meta<typeof FeatureDescriptionSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Step1: Story = {
  args: {
    number: "01",
    title: "사진을 업로드 하세요.",
    description: `인테리어를 원하는 빈 방이나 가구가 있는 방 사진을\n선택해 업로드 하세요.`,
    buttonText: "사진 업로드",
    rightImageSrc: "/main-upload-description.png",
    backgroundImageSrc: "/gradation-bg.png",
  },
};

export const Step2: Story = {
  args: {
    number: "02",
    title: "스타일을 선택하세요.",
    description: `모던, 엔티크, 플랜테리어, 빈티지 등 다양한 디자인\n스타일을 선택해 적용해보세요.`,
    buttonText: "스타일 선택",
    rightImageSrc: "/main-result-description.png", // Assuming this image exists or using a placeholder
    backgroundImageSrc: "/gradation-bg.png",
  },
};
