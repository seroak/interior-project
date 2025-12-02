import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router";
import { TopFeatureSection } from "../features/home/FeatureSection/TopFeatureSection";

const meta = {
  title: "FeatureSection/TopFeatureSection",
  component: TopFeatureSection,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000000",
            position: "relative",
          }}
        >
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof TopFeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
