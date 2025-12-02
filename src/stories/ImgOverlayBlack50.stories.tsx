import type { Meta, StoryObj } from "@storybook/react-vite";

import ImgOverlayBlack50 from "../components/ImgOverlayBlack50";
import AnimationBeforeAfter from "@/components/AnimationBeforeAfter";
const meta = {
  title: "Components/ImgOverlayBlack50",
  component: ImgOverlayBlack50,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#000000",
          width: "1000px",
          height: "500px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],

  argTypes: {
    children: { control: "object", description: "ImgOverlayBlack50의 children 속성", defaultValue: "사진 업로드" },
    className: { control: "text", description: "Additional CSS classes" },
  },
  args: {},
} satisfies Meta<typeof ImgOverlayBlack50>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImgOverlayBlack50Story: Story = {
  args: {
    children: <AnimationBeforeAfter beforeImgPath="/before.webp" afterImgPath="/after.webp" />,
  },
};
