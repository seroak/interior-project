export interface RoundButtonProps {
  children: string;
  alt: string;
  iconPath?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
  isLoading?: boolean;
}

export const RoundButton = ({ children, alt, iconPath, onClick, disabled, isLoading }: RoundButtonProps) => {
  return (
    <div
      onClick={disabled || isLoading ? undefined : onClick}
      className={`flex justify-between items-center gap-2 rounded-[10px] px-[30px] py-[15px] bg-raw-umber transition-all ${
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[#5C4B35]"
      }`}
    >
      <p className="text-[18px] font-nanum-square font-bold text-pure-white">{children}</p>
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        iconPath && <img src={iconPath} alt={alt} className="w-5 h-5" />
      )}
    </div>
  );
};
