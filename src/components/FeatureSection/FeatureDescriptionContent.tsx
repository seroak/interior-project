import { RoundButton } from "../RoundButton";
import { FeatureDescriptionHeader } from "./FeatureDescriptionHeader";

export interface FeatureDescriptionContentProps {
  numberText: string;
  title: string;
  description: string;
  alt: string;
  label: string;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const FeatureDescriptionContent = ({
  numberText,
  title,
  description,
  alt,
  label,
  iconPath,
  onClick,
}: FeatureDescriptionContentProps) => {
  return (
    <div className="flex flex-col gap-[50px]">
      <FeatureDescriptionHeader numberText={numberText} title={title} description={description} />
      <div className="w-[239px]">
        <RoundButton alt={alt} iconPath={iconPath} onClick={onClick}>
          {label}
        </RoundButton>
      </div>
    </div>
  );
};
