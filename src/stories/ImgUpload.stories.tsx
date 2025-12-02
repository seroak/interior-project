import type { Meta, StoryObj } from "@storybook/react-vite";

import { ImgUpload } from "../features/interior/ImgUpload";
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
    onImageSelect: {
      action: "onImageSelect",
      description: "ImgUpload의 onImageSelect 이벤트",
      defaultValue: fn(),
    },
    previewUrl: {
      action: "previewUrl",
      description: "ImgUpload의 previewUrl 속성",
      defaultValue: null,
    },
    onClear: {
      action: "onClear",
      description: "ImgUpload의 onClear 이벤트",
      defaultValue: fn(),
    },
    onImageGenerate: {
      action: "onImageGenerate",
      description: "ImgUpload의 onImageGenerate 이벤트",
      defaultValue: fn(),
    },
  },
  args: {
    onImageSelect: fn(),
    previewUrl: null,
    onClear: fn(),
    onImageGenerate: fn(),
  },
} satisfies Meta<typeof ImgUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxSizeMB: 10,
    acceptedTypes: ["image/jpeg", "image/png", "image/webp"],
  },
};

export const SmallSize: Story = {
  args: {
    maxSizeMB: 5,
    acceptedTypes: ["image/jpeg", "image/png", "image/webp"],
  },
};

export const JPEGOnly: Story = {
  args: {
    maxSizeMB: 10,
    acceptedTypes: ["image/jpeg"],
  },
};
