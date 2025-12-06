import type { Meta, StoryObj } from "@storybook/react-vite";

import { FeatureDescriptionContent } from "../features/home/FeatureSection/FeatureDescriptionContent";
import { fn, userEvent, expect } from "storybook/test";
const meta = {
  title: "FeatureSection/FeatureDescriptionContent",
  component: FeatureDescriptionContent,
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
    title: { control: "text", description: "FeatureDescriptionContent의 title 속성", defaultValue: "title" },
    description: {
      control: "text",
      description: "FeatureDescriptionContent의 description 속성",
      defaultValue: "description",
    },
    numberText: {
      control: "text",
      description: "FeatureDescriptionContent의 numberText 속성",
      defaultValue: "01",
    },
    label: { control: "text", description: "FeatureDescriptionContent의 label 속성", defaultValue: "label" },
    iconPath: {
      control: "text",
      description: "FeatureDescriptionContent의 iconPath 속성",
      defaultValue: "",
    },
    onClick: {
      action: "onClick",
      description: "FeatureDescriptionContent의 onClick 이벤트",
      defaultValue: fn(),
    },
    alt: { control: "text", description: "FeatureDescriptionContent의 alt 속성", defaultValue: "icon" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof FeatureDescriptionContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhotoUpload: Story = {
  args: {
    title: "사진 업로드",
    description: "드래그 앤 드롭 또는 파일 선택으로 사진을 불러오거나 원하는 공간 이미지를 선택해 업로드하세요.",
    numberText: "01",
    alt: "icon",
    label: "사진 업로드",
    iconPath: "./photo-upload.svg",
    onClick: fn(),
  },
  play: async ({ canvas, args }) => {
    const allTexts = await canvas.findAllByText("사진 업로드");
    const buttonTextEl = allTexts[1];
    await userEvent.click(buttonTextEl.parentElement!);
    expect(args.onClick).toHaveBeenCalled();
  },
};

export const StyleSelection: Story = {
  args: {
    title: "스타일 선택",
    description: "모던, 엔티크, 플랜테리어, 빈티지 중에서 원하는 분위기를 선택해 적용해보세요.",
    numberText: "02",
    alt: "icon",
    label: "사진 업로드",
    iconPath: "./photo-upload.svg",
    onClick: fn(),
  },
};

export const ResultCheck: Story = {
  args: {
    title: "결과 확인",
    description: "선택한 스타일을 기반으로 AI가 변환한 이미지를 확인하고 바뀐 공간의 분위기를 바로 비교해보세요.",
    numberText: "03",
    alt: "icon",
    label: "사진 업로드",
    iconPath: "./photo-upload.svg",
    onClick: fn(),
  },
};
