import { useState } from "react";
import StyleOption from "./StyleOption";
interface SelectedOption {
  title: string;
  description: string;
}
export interface StyleOptionGridProps {
  options: SelectedOption[];
  selectedOptionIndex: number;
  onSelect: (index: number) => void;
}

export const StyleOptionGrid = ({ options, selectedOptionIndex, onSelect }: StyleOptionGridProps) => {
  const [selectedOption, setSelectedOption] = useState<SelectedOption>(options[selectedOptionIndex]);
  return (
    <div className="grid grid-cols-2 gap-[20px]">
      {options.map((option, index) => (
        <div key={index} onClick={() => onSelect(index)} className="cursor-pointer h-full">
          <StyleOption
            title={option.title}
            description={option.description}
            onClick={() => setSelectedOption(option)}
            isSelected={selectedOption.title === option.title}
          />
        </div>
      ))}
    </div>
  );
};
