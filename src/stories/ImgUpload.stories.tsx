import type { Meta, StoryObj } from "@storybook/react-vite";

import ImgUpload from "../features/interior/ImgUpload";
import { fn } from "storybook/test";

const meta = {
  title: "Components/ImgUpload",
  component: ImgUpload,
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
          maxWidth: "800px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],

  argTypes: {
    onImageSelect: {
      action: "onImageSelect",
      description: "ImgUpload의 onImageSelect 이벤트",
      defaultValue: fn(),
    },
    maxSizeMB: {
      control: "number",
      description: "ImgUpload의 maxSizeMB 속성",
      defaultValue: 10,
    },
    acceptedTypes: {
      control: "object",
      description: "ImgUpload의 acceptedTypes 속성",
      defaultValue: ["image/jpeg", "image/png", "image/webp"],
    },
  },
  args: {
    onImageSelect: fn(),
    previewUrl: null,
    onClear: fn(),
  },
} satisfies Meta<typeof ImgUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onImageSelect: fn(),
    previewUrl: null,
    onClear: fn(),
    maxSizeMB: 10,
    acceptedTypes: ["image/jpeg", "image/png", "image/webp"],
  },
};

export const SmallSize: Story = {
  args: {
    onImageSelect: fn(),
    previewUrl: null,
    onClear: fn(),
    maxSizeMB: 5,
    acceptedTypes: ["image/jpeg", "image/png", "image/webp"],
  },
};

export const JPEGOnly: Story = {
  args: {
    onImageSelect: fn(),
    previewUrl: null,
    onClear: fn(),

    maxSizeMB: 10,
    acceptedTypes: ["image/jpeg"],
  },
};
