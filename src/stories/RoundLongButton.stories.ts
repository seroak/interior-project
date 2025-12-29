import type { Meta, StoryObj } from "@storybook/react-vite";

import { RoundLongButton } from "../components/ui/Button/RoundLongButton";
import { fn } from "storybook/test";

const meta = {
  title: "Button/RoundLongButton",
  component: RoundLongButton,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    title: {
      control: "text",
      description: "RoundLongButton의 title 속성",
      defaultValue: "버튼",
    },
    onClick: {
      action: "onClick",
      description: "RoundLongButton의 onClick 이벤트",
      defaultValue: fn(),
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof RoundLongButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "버튼",
    onClick: fn(),
  },
};

export const LongText: Story = {
  args: {
    title: "긴 텍스트가 들어가는 버튼입니다",
    onClick: fn(),
  },
};

export const ActionButton: Story = {
  args: {
    title: "다음 단계로",
    onClick: fn(),
  },
};
