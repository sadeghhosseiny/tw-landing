import { useWindowSize } from "../../../hooks/useWindowSize";
import Button from "../../button";

interface IDotsProps {
  sliderDataLength: number;
  slideIndex: number;
}

const Dots = ({ sliderDataLength, slideIndex }: IDotsProps) => {
  const { mobile } = useWindowSize();

  if (!mobile) return null;
  return (
    <div className="z-20 flex w-full justify-center items-end gap-3 mb-2 select-none">
      {Array.from({ length: sliderDataLength }).map((item, index) => (
        <Button
          key={index}
          className={`bottom-0 w-1 h-1 p-0 transition-all ease-in-out duration-300 rounded-full ${
            slideIndex === index
              ? "scale-125 bg-gray-100"
              : "scale-100 bg-gray-700"
          }`}
        />
      ))}
    </div>
  );
};

export default Dots;
