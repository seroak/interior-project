import type { GeneratedImageResultProps } from "@/types";
import { useState } from "react";
export const useImageGenerate = () => {
  const [generatedImageUrls, setGeneratedImageUrls] = useState<GeneratedImageResultProps[] | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setGeneratedImageUrls(null);
  };

  const handleClearImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl(null);
    setGeneratedImageUrls(null);
  };

  const handleImgGenerate = () => {
    if (!selectedFile) {
      alert("이미지를 먼저 업로드해주세요.");
      return;
    }

    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      setGeneratedImageUrls([
        {
          title: "Modern",
          image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
        },
        {
          title: "Antique",
          image:
            "https://sakan.co/blog/wp-content/webp-express/webp-images/uploads/2022/10/sidekix-media-_AK42TQRyCw-unsplash.jpg.webp",
        },
        {
          title: "Planterior",
          image:
            "https://sakan.co/blog/wp-content/webp-express/webp-images/uploads/2022/10/huy-nguyen-BydlY6ZrkYo-unsplash.jpg.webp",
        },
        {
          title: "Vintage",
          image:
            "https://sakan.co/blog/wp-content/webp-express/webp-images/uploads/2022/10/sidekix-media-r_y2VBvEOIE-unsplash.jpg.webp",
        },
      ]);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCloseResult = () => {
    setGeneratedImageUrls(null);
  };
  return {
    generatedImageUrls,
    previewUrl,
    isGenerating,
    handleImageSelect,
    handleClearImage,
    handleImgGenerate,
    handleCloseResult,
  };
};
