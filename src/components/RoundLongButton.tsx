interface RoundLongButtonProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
const RoundLongButton = ({ title, onClick }: RoundLongButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer justify-center items-center gap-3 w-full bg-selected-black  rounded-[10px] px-[30px] py-[15px]"
    >
      <p className="text-[24px] font-nanum-square font-bold text-pure-white">{title}</p>
    </div>
  );
};

export default RoundLongButton;
