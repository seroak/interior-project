export interface FeatureHeroTextProps {
  title: string;
  description: string;
}

export const FeatureHeroText = ({ title, description }: FeatureHeroTextProps) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <span className="text-[36px] font-nanum-square font-extrabold text-pure-white text-left">{title}</span>
      <p className="text-[22px] font-nanum-square font-regular text-pure-white text-left">{description}</p>
    </div>
  );
};
