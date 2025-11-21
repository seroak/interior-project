export interface RoundButtonProps {
  children: string;
  alt: string;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const RoundButton = ({ children, alt, iconPath, onClick }: RoundButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer justify-between items-center gap-3 border-2 border-pure-white rounded-[34px] px-[30px] py-[15px]"
    >
      <p className="text-[18px] font-nanum-square font-bold text-pure-white">{children}</p>
      <img src={iconPath} alt={alt} className="w-5 h-5" />
    </div>
  );
};
