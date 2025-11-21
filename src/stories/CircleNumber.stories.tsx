import type { Meta, StoryObj } from "@storybook/react-vite";

import { CircleNumber } from "../components/CircleNumber";

const meta = {
  title: "Components/CircleNumber",
  component: CircleNumber,
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
    numberText: { control: "text", description: "CircleNumber의 number 속성", defaultValue: 1 },
  },
  args: {},
} satisfies Meta<typeof CircleNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const One: Story = {
  args: {
    numberText: "01",
  },
};
export const Two: Story = {
  args: {
    numberText: "02",
  },
};
