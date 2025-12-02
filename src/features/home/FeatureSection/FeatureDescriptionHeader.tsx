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
      <p className="text-[36px] font-nanum-square font-extrabold text-pure-black">{title}</p>
      <div className="w-[483px]">
        <p className="text-[22px] font-nanum-square font-regular text-gray-600">{description}</p>
      </div>
    </div>
  );
};
