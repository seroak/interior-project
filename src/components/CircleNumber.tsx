export interface CircleNumberProps {
  numberText: string;
}

export const CircleNumber = ({ numberText }: CircleNumberProps) => {
  return (
    <div className="flex items-center justify-center w-14 h-14 tracking-widest">
      <p className="font-nanum-square font-extrabold italic text-[60px] text-[#826644]">{numberText}</p>
    </div>
  );
};
