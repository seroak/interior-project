import type { Meta, StoryObj } from "@storybook/react-vite";

import { StyleOptionGrid } from "../features/interior/StyleOptionGrid/StyleOptionGrid";
import { fn } from "storybook/test";

const meta = {
  title: "Components/StyleOptionGrid",
  component: StyleOptionGrid,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "600px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],

  argTypes: {
    options: {
      control: "object",
      description: "StyleOptionGrid의 options 속성",
    },
    onSelect: {
      action: "onSelect",
      description: "StyleOptionGrid의 onSelect 이벤트",
      defaultValue: fn(),
    },
    selectedOptionIndex: {
      control: "number",
      description: "StyleOptionGrid의 selectedOptionIndex 속성",
      defaultValue: 0,
    },
  },
  args: {
    onSelect: fn(),
  },
} satisfies Meta<typeof StyleOptionGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        title: "모던",
        description: "깔끔하고 세련된 현대적인 스타일",
      },
      {
        title: "엔티크",
        description: "빈티지하고 고급스러운 클래식 스타일",
      },
      {
        title: "플랜테리어",
        description: "자연스럽고 편안한 식물 중심 스타일",
      },
      {
        title: "빈티지",
        description: "레트로하고 감성적인 빈티지 스타일",
      },
    ],
    onSelect: fn(),
    selectedOptionIndex: 0,
  },
};

export const TwoOptions: Story = {
  args: {
    options: [
      {
        title: "모던",
        description: "깔끔하고 세련된 현대적인 스타일",
      },
      {
        title: "엔티크",
        description: "빈티지하고 고급스러운 클래식 스타일",
      },
    ],
    onSelect: fn(),
    selectedOptionIndex: 0,
  },
};
