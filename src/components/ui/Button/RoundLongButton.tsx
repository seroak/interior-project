interface RoundLongButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
}
const RoundLongButton = ({ title, onClick, disabled }: RoundLongButtonProps) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={`flex justify-center items-center gap-3 w-full bg-raw-umber rounded-[10px] px-[30px] py-[15px] transition-opacity ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:opacity-90"
      }`}
    >
      <p className="text-[24px] font-nanum-square font-bold text-pure-white">{title}</p>
    </div>
  );
};

export default RoundLongButton;
