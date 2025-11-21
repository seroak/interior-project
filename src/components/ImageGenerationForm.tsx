import { useState } from "react";
import ImgUpload from "./ImgUpload";
import { StyleOptionGrid } from "./StyleOptionGrid";
import RoundLongButton from "./RoundLongButton";

interface ImageGenerationFormProps {
  onGenerate?: (image: File, styleIndex: number) => void;
}

const styleOptions = [
  {
    title: "Modern",
    description: "직선과 미니멀한 색감으로 구성된 세련되고 깔끔한 분위기",
  },
  {
    title: "Antique",
    description: "클래식한 가구와 따뜻한 컬러로 시간의 깊이를 담은 공간",
  },
  {
    title: "Planterior",
    description: "식물과 자연 소재를 중심으로 한 내추럴하고 편안한 공간",
  },
  {
    title: "Vintage",
    description: "과거의 감성과 낡은 질감을 현대적으로 재해석한 개성 있는 스타일",
  },
];

const ImageGenerationForm = ({ onGenerate }: ImageGenerationFormProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedStyleIndex, setSelectedStyleIndex] = useState<number>(0);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
  };

  const handleStyleSelect = (index: number) => {
    setSelectedStyleIndex(index);
  };

  const handleGenerate = () => {
    if (selectedImage && onGenerate) {
      onGenerate(selectedImage, selectedStyleIndex);
    } else if (!selectedImage) {
      alert("이미지를 업로드해주세요.");
    }
  };

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-10">이미지 업로드</h2>
        <ImgUpload onImageSelect={handleImageSelect} />
      </section>
      <div className="w-full h-[1px] bg-gray-200 my-5" />
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">스타일 선택</h2>
        <StyleOptionGrid options={styleOptions} selectedOptionIndex={selectedStyleIndex} onSelect={handleStyleSelect} />
      </section>
      <div className="w-full h-[1px] bg-gray-200 my-5" />
      <div className="mt-8">
        <RoundLongButton title="생성하기" onClick={handleGenerate} />
      </div>
    </div>
  );
};
export default ImageGenerationForm;
