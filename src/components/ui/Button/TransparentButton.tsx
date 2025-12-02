export interface TransparentButtonProps {
  children: string;
  alt: string;
  iconPath?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const TransparentButton = ({ children, alt, iconPath, onClick }: TransparentButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer justify-between items-center gap-3 border-2 border-pure-white rounded-[34px] px-[30px] py-[15px] hover:bg-white/10 transition-colors"
    >
      <p className="text-[18px] font-nanum-square font-bold text-pure-white">{children}</p>
      {iconPath && <img src={iconPath} alt={alt} className="w-5 h-5" />}
    </div>
  );
};
