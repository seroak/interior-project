import type { Meta, StoryObj } from "@storybook/react-vite";

import { WhiteOpacityCard } from "../components/WhiteOpacityCard";

const meta = {
  title: "Components/WhiteOpacityCard",
  component: WhiteOpacityCard,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#000000",
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
    alt: { control: "text", description: "WhiteOpacityCard의 alt 속성", defaultValue: "icon" },
    imgPath: { control: "text", description: "WhiteOpacityCard의 imgPath 속성", defaultValue: "" },
  },
} satisfies Meta<typeof WhiteOpacityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PricingCard: Story = {
  args: {
    alt: "icon",
    imgPath: "./pricing.png",
  },
};
