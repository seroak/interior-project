import type { Meta, StoryObj } from "@storybook/react-vite";
import GeneratedImageResult from "../components/GeneratedImageResult";
import { fn } from "storybook/test";

const meta = {
  title: "Components/GeneratedImageResult",
  component: GeneratedImageResult,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageUrl: { control: "text", description: "GeneratedImageResult의 imageUrl 속성", defaultValue: "" },
    onClose: { action: "onClose", description: "GeneratedImageResult의 onClose 이벤트", defaultValue: fn() },
  },
  args: {
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    onClose: fn(),
  },
} satisfies Meta<typeof GeneratedImageResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
};
