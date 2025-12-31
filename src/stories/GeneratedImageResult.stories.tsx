import type { Meta, StoryObj } from "@storybook/react-vite";
import { GeneratedImageResult } from "../features/interior/GeneratedImageResult";
import { fn } from "storybook/test";

const meta = {
  title: "Components/GeneratedImageResult",
  component: GeneratedImageResult,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    originalImageUrl: { control: "text", description: "원본 이미지 URL" },
    generatedImageUrl: { control: "text", description: "생성된 이미지 URL" },
    onClose: { action: "onClose", description: "닫기 이벤트" },
    onShareCloudflare: { action: "onShareCloudflare", description: "클라우드 플레어 공유 이벤트" },
    isSharing: { control: "boolean", description: "공유 중 여부" },
    shareLink: { control: "text", description: "공유 링크" },
  },
  args: {
    originalImageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop",
    generatedImageUrl: {
      minimalist: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      scandinavian: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      modern: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      vintage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    },
    onClose: fn(),
    onShareCloudflare: fn(),
    isSharing: false,
    shareLink: null,
  },
} satisfies Meta<typeof GeneratedImageResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    originalImageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop",
    generatedImageUrl: {
      minimalist: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      scandinavian: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      modern: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
      vintage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    },
    onClose: fn(),
    onShareCloudflare: fn(),
    isSharing: false,
    shareLink: null,
  },
};
