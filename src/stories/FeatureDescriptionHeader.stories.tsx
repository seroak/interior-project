import type { Meta, StoryObj } from "@storybook/react-vite";

import { FeatureDescriptionHeader } from "../components/FeatureSection/FeatureDescriptionHeader";

const meta = {
  title: "FeatureSection/FeatureDescriptionHeader",
  component: FeatureDescriptionHeader,
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
    title: { control: "text", description: "FeatureDescriptionHeader의 title 속성", defaultValue: "title" },
    description: {
      control: "text",
      description: "FeatureDescriptionHeader의 description 속성",
      defaultValue: "description",
    },
    numberText: {
      control: "text",
      description: "FeatureDescriptionHeader의 numberText 속성",
      defaultValue: "01",
    },
  },
  args: {},
} satisfies Meta<typeof FeatureDescriptionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhotoUpload: Story = {
  args: {
    title: "사진 업로드",
    description: "드래그 앤 드롭 또는 파일 선택으로 사진을 불러오거나 원하는 공간 이미지를 선택해 업로드하세요.",
    numberText: "01",
  },
};

export const StyleSelection: Story = {
  args: {
    title: "스타일 선택",
    description: "모던, 엔티크, 플랜테리어, 빈티지 중에서 원하는 분위기를 선택해 적용해보세요.",
    numberText: "02",
  },
};

export const ResultCheck: Story = {
  args: {
    title: "결과 확인",
    description: "선택한 스타일을 기반으로 AI가 변환한 이미지를 확인하고 바뀐 공간의 분위기를 바로 비교해보세요.",
    numberText: "03",
  },
};

