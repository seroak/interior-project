export interface WhiteOpacityCardProps {
  alt: string;
  imgPath: string;
}

export const WhiteOpacityCard = ({ alt, imgPath }: WhiteOpacityCardProps) => {
  return (
    <div className="bg-opacity-white rounded-[20px] px-8 py-8 min-w-[635px]">
      <img src={imgPath} alt={alt} className="w-auto h-auto  rounded-[10px]" />
    </div>
  );
};
