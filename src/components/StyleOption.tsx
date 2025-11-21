export interface StyleOptionProps {
  title: string;
  description: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
const StyleOption = ({ title, description, isSelected, onClick }: StyleOptionProps) => {
  const borderColor = !isSelected ? "border-unselected-gray" : "border-selected-black";
  return (
    <div
      onClick={onClick}
      className={`flex flex-col gap-[10px] px-[32px] py-[40px] rounded-[10px] border-2 ${borderColor}`}
    >
      <p className="text-[22px] font-extrabold">{title}</p>
      <p className="text-[18px] font-regular">{description}</p>
    </div>
  );
};

export default StyleOption;
