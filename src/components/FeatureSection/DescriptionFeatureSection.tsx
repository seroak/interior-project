import { WhiteOpacityCard } from "../WhiteOpacityCard";
import { FeatureDescriptionContent } from "./FeatureDescriptionContent";
export interface DescriptionFeatureSectionProps {
  title: string;
  description: string;
  numberText: string;
  imgPath: string;
  alt: string;
  label: string;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const DescriptionFeatureSection = ({
  title,
  description,
  numberText,
  imgPath,
  alt,
  label,
  iconPath,
  onClick,
}: DescriptionFeatureSectionProps) => {
  return (
    <div className="flex items-center gap-[169px] max-w-[1351px] max-h-[506px] z-20">
      <FeatureDescriptionContent
        numberText={numberText}
        title={title}
        description={description}
        alt={alt}
        label={label}
        iconPath={iconPath}
        onClick={onClick}
      />

      <WhiteOpacityCard imgPath={imgPath} alt={alt} />
    </div>
  );
};
export default DescriptionFeatureSection;
