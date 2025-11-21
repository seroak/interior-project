import type { Meta, StoryObj } from "@storybook/react-vite";

import { RoundButton } from "../components/RoundButton";
import { fn } from "storybook/test";

const meta = {
  title: "Button/RoundButton",
  component: RoundButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#000000",
          width: "1000px",
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
    alt: { control: "text", description: "RoundButton의 alt 속성", defaultValue: "icon" },
    iconPath: { control: "text", description: "RoundButton의 iconPath 속성", defaultValue: "" },
    onClick: { action: "onClick", description: "RoundButton의 onClick 이벤트", defaultValue: fn() },
    children: { control: "text", description: "RoundButton의 children 속성", defaultValue: "사진 업로드" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhotoUploadButton: Story = {
  args: {
    children: "사진 업로드",
    alt: "icon",
    iconPath: "./photo-upload.svg",
    onClick: fn(),
  },
};
