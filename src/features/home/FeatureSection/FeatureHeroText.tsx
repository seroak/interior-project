export interface FeatureHeroTextProps {
  title: string;

  description: string;
}

export const FeatureHeroText = ({ title, description }: FeatureHeroTextProps) => {
  return (
    <div className="flex flex-col justify-center gap-[20px]">
      <span className="text-[60px] font-nanum-square font-extrabold text-pure-white text-center">{title}</span>
      <p className="text-[26px] font-nanum-square font-regular text-pure-white text-center whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};
