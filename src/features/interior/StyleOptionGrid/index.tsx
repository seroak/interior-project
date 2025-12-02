import { StyleOption } from "./StyleOption";
import { useStyleOptions } from "@/store/useStyleOptions";

export const StyleOptionGrid = () => {
  const setSelectedStyleTitle = useStyleOptions((state) => state.setSelectedStyleTitle);
  const selectedStyleTitle = useStyleOptions((state) => state.selectedStyleTitle);
  const setSelectedStyleIndex = useStyleOptions((state) => state.setSelectedStyleIndex);
  const styleOptions = useStyleOptions((state) => state.styleOptions);

  return (
    <div className="grid grid-cols-4 gap-[20px]">
      {styleOptions.map((option, index) => (
        <div
          key={index}
          onClick={() => {
            setSelectedStyleTitle(option.title);
            setSelectedStyleIndex(index);
          }}
          className="cursor-pointer h-full"
        >
          <StyleOption
            title={option.title}
            description={option.description}
            onClick={() => {
              setSelectedStyleTitle(option.title);
              setSelectedStyleIndex(index);
            }}
            isSelected={selectedStyleTitle === option.title}
          />
        </div>
      ))}
    </div>
  );
};
