import type { Meta, StoryObj } from "@storybook/react-vite";
import ImgOverlayBlack55 from "../components/ImgOverlayBlack55";

const meta = {
  title: "Components/ImgOverlayBlack55",
  component: ImgOverlayBlack55,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "800px",
          height: "400px",
          position: "relative",
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    children: { control: "object", description: "ImgOverlayBlack55의 children 속성", defaultValue: "사진 업로드" },
    className: { control: "text", description: "Additional CSS classes" },
  },
} satisfies Meta<typeof ImgOverlayBlack55>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
        alt="Example"
        className="w-full h-full object-cover"
      />
    ),
    className: "h-full",
  },
};

export const WithTextContent: Story = {
  args: {
    children: (
      <>
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="Example"
          className="w-full h-full object-cover"
        />
        <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center gap-[30px]">
          <h1 className="text-white text-[50px] font-extrabold">Title Here</h1>
          <p className="text-white text-[22px] font-regular">Description text goes here.</p>
        </div>
      </>
    ),
    className: "h-full",
  },
};
