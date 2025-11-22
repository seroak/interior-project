import type { Meta, StoryObj } from "@storybook/react-vite";

import AnimationBeforeAfter from "@/components/AnimationBeforeAfter";

const meta = {
  title: "Components/AnimationBeforeAfter",
  component: AnimationBeforeAfter,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    delay: { control: "number", description: "AnimationBeforeAfter의 delay 속성", defaultValue: 0 },
  },
  args: {},
} satisfies Meta<typeof AnimationBeforeAfter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const One: Story = {};
