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
    afterImgPath: { control: "text", description: "변경전 이미지", defaultValue: "/before.webp" },
    beforeImgPath: { control: "text", description: "변경후 이미지", defaultValue: "/after.webp" },
  },
  args: {},
} satisfies Meta<typeof AnimationBeforeAfter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const One: Story = {
  args: {
    afterImgPath: "/before.webp",
    beforeImgPath: "/after.webp",
  },
};
