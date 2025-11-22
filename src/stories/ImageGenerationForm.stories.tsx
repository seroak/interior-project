import type { Meta, StoryObj } from "@storybook/react-vite";
import ImageGenerationForm from "../components/ImageGenerationForm";
import { fn } from "storybook/test";

const meta = {
  title: "Components/ImageGenerationForm",
  component: ImageGenerationForm,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "800px", padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    onGenerate: {
      action: "onGenerate",
      description: "ImageGenerationForm의 이미지 생성하는 이벤트",
      defaultValue: fn(),
    },
  },
} satisfies Meta<typeof ImageGenerationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onGenerate: fn(),
  },
};
