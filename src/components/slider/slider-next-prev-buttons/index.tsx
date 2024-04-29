import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import Button from "../../button";
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import { useWindowSize } from "../../../hooks/useWindowSize";

interface ISliderNextPrevButtonsProps {
  handleNextSlider: () => void;
  handlePrevSlider: () => void;
}

const SliderNextPrevButtons = ({
  handleNextSlider,
  handlePrevSlider,
}: ISliderNextPrevButtonsProps) => {
  const { mobile } = useWindowSize();

  if (mobile) return null;

  return (
    <div className="absolute top-24 right-4 flex gap-5 z-10">
      <Button
        onClick={handleNextSlider}
        className="p-1 text-gray-400 hover:text-gray-100 duration-300 ease-in-out"
      >
        <ChevronRightIcon className="size-5" />
      </Button>
      <Button
        onClick={handlePrevSlider}
        className="p-1 text-gray-400 hover:text-gray-100 duration-300 ease-in-out"
      >
        <ChevronLeftIcon className="size-5" />
      </Button>
    </div>
  );
};

export default SliderNextPrevButtons;
