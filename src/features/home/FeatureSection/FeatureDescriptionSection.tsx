import { RoundButton } from "@/components/ui/Button/RoundButton";

interface FeatureDescriptionSectionProps {
  number: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  rightImageSrc: string;
  backgroundImageSrc: string;
}

export const FeatureDescriptionSection = ({
  number,
  title,
  description,
  buttonText,
  onButtonClick,
  rightImageSrc,
  backgroundImageSrc,
}: FeatureDescriptionSectionProps) => {
  return (
    <div className="w-full relative z-10 pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src={backgroundImageSrc}
          alt="gradient background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="w-full max-w-[1700px] mx-auto flex flex-col lg:flex-row justify-between gap-20 items-end">
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-16 w-full lg:w-auto flex flex-col justify-center mb-20 pl-[100px] z-20 self-center">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h3 className={`text-[32px] font-nanum-square font-bold transition-colors duration-500 text-black`}>
                {number}. {title}
              </h3>
              <p
                className={`text-[18px] font-nanum-square whitespace-pre-line leading-relaxed transition-colors duration-500 text-black`}
              >
                {description}
              </p>
            </div>
          </div>
          <div className="w-[200px]">
            <RoundButton iconPath="./photo-upload.svg" alt="button icon" onClick={onButtonClick}>
              {buttonText}
            </RoundButton>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 w-full flex justify-end min-w-[600px] relative pr-[100px]">
          <img
            src={rightImageSrc}
            className="w-full max-w-[900px] shadow-lg rounded-t-lg"
            alt="Feature Description Preview"
          />
        </div>
      </div>
    </div>
  );
};
