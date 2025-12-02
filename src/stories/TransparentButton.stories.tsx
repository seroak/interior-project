import type { Meta, StoryObj } from "@storybook/react-vite";

import { TransparentButton } from "../components/ui/Button/TransparentButton";
import { fn } from "storybook/test";

const meta = {
  title: "UI/Button/TransparentButton",
  component: TransparentButton,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    alt: { control: "text" },
    iconPath: { control: "text" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TransparentButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "사진 업로드",
    alt: "upload icon",
    iconPath: "./photo-upload.svg",
  },
};

export const WithoutIcon: Story = {
  args: {
    children: "자세히 보기",
    alt: "",
  },
};
