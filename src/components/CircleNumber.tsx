export interface CircleNumberProps {
  numberText: string;
}

export const CircleNumber = ({ numberText }: CircleNumberProps) => {
  return (
    <div className="flex items-center justify-center border-2 border-pure-white rounded-full aspect-square w-14 h-14 tracking-widest">
      <p className=" font-nanum-square font-extrabold text-pure-white">{numberText}</p>
    </div>
  );
};
