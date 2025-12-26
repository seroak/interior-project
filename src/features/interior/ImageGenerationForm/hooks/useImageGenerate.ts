import { saveImageRecord, uploadImageToStorage } from "@/services/imageService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface GeneratedImage {
  styleId: string;
  image: string;
}

interface GenerateImageResponse {
  generated_image: string;
  style_id: string;
}

export const useImageGenerate = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [genteratedImages, setgenteratedImages] = useState<GeneratedImage[] | null>(null);
  const [isSharing, setIsSharing] = useState(false);

  const { mutate: generateImage, isPending: isGenerating } = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://open.vulcan.site:8001/api/get_styled_images", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Generation failed");
      const data = await response.json();

      return data;
    },

    onSuccess: (data) => {
      const targets: GeneratedImage[] = [];
      data.results.map((item: GenerateImageResponse) => {
        targets.push({
          styleId: item.style_id,
          image: item.generated_image,
        });
      });
      setgenteratedImages(targets);
    },
    onError: (err) => {
      console.error(err);
      alert("이미지 생성 실패");
    },
  });

  const {
    data: generatedImageUrls,
    isLoading: isFetchingImages,
    isError,
    error,
  } = useQuery({
    queryKey: ["fetchingImages", genteratedImages],

    enabled: !!genteratedImages && genteratedImages.length > 0,

    queryFn: async () => {
      if (!genteratedImages) return {};
      const promises = genteratedImages.map(async (genteratedImage) => {
        const res = await fetch(`http://open.vulcan.site:8001/api/images/${genteratedImage.image}`);
        if (!res.ok) throw new Error(`Fetch failed for ${genteratedImage.image}`);

        const blob = await res.blob();
        const imageUrl = URL.createObjectURL(blob);

        return [genteratedImage.styleId, imageUrl];
      });

      const results = await Promise.all(promises);
      return Object.fromEntries(results);
    },
  });

  useEffect(() => {
    if (isError) {
      console.error(error);
      alert("이미지 변환 실패 다시 시도 해주세요");
    }
  }, [isError, error]);
  const handleImageSelect = (file: File) => {
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleClearImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleImgGenerate = () => {
    if (!selectedFile) {
      alert("이미지를 먼저 업로드해주세요.");
      return;
    }

    generateImage(selectedFile);
  };

  const handleCloseResult = () => {
    setgenteratedImages(null);
    setPreviewUrl(null);
    setSelectedFile(null);
  };

  const handleShareImage = async () => {
    if (!generatedImageUrls || !previewUrl) {
      alert("공유할 이미지가 없습니다.");
      return;
    }

    try {
      setIsSharing(true);

      // 1. Upload Original Image
      // preview 이미지를 실제 이미지로 변환
      const originalRes = await fetch(previewUrl);
      const originalBlob = await originalRes.blob();
      const originalPublicUrl = await uploadImageToStorage(originalBlob);

      // 2. Upload Generated Images (All 4)
      const generatedPublicUrls: Record<string, string> = {};

      // 4개 생성된 이미지를 실제 이미지로 변환
      for (const [styleId, blobUrl] of Object.entries(generatedImageUrls)) {
        const res = await fetch(blobUrl as string);
        const blob = await res.blob();
        const publicUrl = await uploadImageToStorage(blob);
        generatedPublicUrls[styleId] = publicUrl;
      }

      // 3. Save to Database
      const shareId = await saveImageRecord(originalPublicUrl, generatedPublicUrls);

      // 4. Copy Link
      const shareLink = `${window.location.origin}/share/${shareId}`;
      await navigator.clipboard.writeText(shareLink);
      alert("공유 링크가 복사되었습니다!");
    } catch (err) {
      console.log("hi");
      console.log(err);
      console.error(err);
      alert("공유하기 실패: " + (err as Error).message);
    } finally {
      setIsSharing(false);
    }
  };

  return {
    generatedImageUrls,
    previewUrl,
    isGenerating,
    isFetchingImages,
    handleImageSelect,
    handleClearImage,
    handleImgGenerate,
    handleCloseResult,
    handleShareImage,
    isSharing,
  };
};
