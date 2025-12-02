import { CircleNumber } from "@/components/CircleNumber";

export interface FeatureDescriptionHeaderProps {
  numberText: string;
  title: string;
  description: string;
}

export const FeatureDescriptionHeader = ({ numberText, title, description }: FeatureDescriptionHeaderProps) => {
  return (
    <div className="flex flex-col gap-[30px]">
      <CircleNumber numberText={numberText} />
      <p className="text-[36px] font-nanum-square font-extrabold text-pure-white">{title}</p>
      <div className="w-[483px]">
        <p className="text-[22px] font-nanum-square font-regular text-pure-white">{description}</p>
      </div>
    </div>
  );
};
