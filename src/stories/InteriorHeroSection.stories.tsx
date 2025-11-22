import type { Meta, StoryObj } from "@storybook/react-vite";
import InteriorHeroSection from "../components/FeatureSection/InteriorHeroSection";

const meta = {
  title: "FeatureSection/InteriorHeroSection",
  component: InteriorHeroSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof InteriorHeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
