import type { Meta, StoryObj } from "@storybook/react-vite";

import { StyleOption } from "../features/interior/StyleOptionGrid/StyleOption";
import { fn, userEvent, expect } from "storybook/test";

const meta = {
  title: "Components/StyleOption",
  component: StyleOption,
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
          minWidth: "400px",
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
      description: "StyleOption의 title 속성",
      defaultValue: "모던",
    },
    description: {
      control: "text",
      description: "StyleOption의 description 속성",
      defaultValue: "깔끔하고 세련된 현대적인 스타일",
    },
    isSelected: {
      control: "boolean",
      description: "StyleOption의 isSelected 속성",
      defaultValue: false,
    },
    onClick: {
      action: "onClick",
      description: "StyleOption의 onClick 이벤트",
      defaultValue: fn(),
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof StyleOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
  args: {
    title: "모던",
    description: "깔끔하고 세련된 현대적인 스타일",
    isSelected: false,
    onClick: fn(),
  },
  play: async ({ canvas, args }) => {
    // 텍스트로 요소 찾기 (StyleOption은 title을 렌더링함)
    const option = canvas.getByText("모던");

    // 클릭 시뮬레이션
    await userEvent.click(option);

    // onClick 핸들러가 호출되었는지 확인
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Selected: Story = {
  args: {
    title: "모던",
    description: "깔끔하고 세련된 현대적인 스타일",
    isSelected: true,
    onClick: fn(),
  },
};

export const Modern: Story = {
  args: {
    title: "모던",
    description: "깔끔하고 세련된 현대적인 스타일",
    isSelected: false,
    onClick: fn(),
  },
};

export const Antique: Story = {
  args: {
    title: "엔티크",
    description: "빈티지하고 고급스러운 클래식 스타일",
    isSelected: false,
    onClick: fn(),
  },
};

export const Planterior: Story = {
  args: {
    title: "플랜테리어",
    description: "자연스럽고 편안한 식물 중심 스타일",
    isSelected: false,
    onClick: fn(),
  },
};

export const Vintage: Story = {
  args: {
    title: "빈티지",
    description: "레트로하고 감성적인 빈티지 스타일",
    isSelected: false,
    onClick: fn(),
  },
};
