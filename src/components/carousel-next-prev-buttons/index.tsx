import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import { useWindowSize } from "../../hooks/useWindowSize";
import Button from "../button";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";

interface ICarouselNextPrevButtonsProps {
  hideNextBtn: boolean;
  hidePrevBtn: boolean;
  prev: () => void;
  next: () => void;
}

const CarouselNextPrevButtons = ({
  hideNextBtn,
  hidePrevBtn,
  prev,
  next,
}: ICarouselNextPrevButtonsProps) => {
  const { mobile } = useWindowSize();

  if (mobile) return null;

  return (
    <>
      {!hideNextBtn && (
        <div className="absolute top-4 -left-5 h-[calc(100%-50px)] flex items-center">
          <Button
            onClick={next}
            className="rounded-full w-fit bg-gray-700 opacity-70 hover:bg-gray-200 hover:text-gray-800 hover:scale-110 hover:opacity-100 transition-all ease-in-out duration-300"
          >
            <ChevronLeftIcon className="size-4" />
          </Button>
        </div>
      )}
      {!hidePrevBtn && (
        <div className="absolute top-4 -right-5 h-[calc(100%-50px)] flex items-center">
          <Button
            onClick={prev}
            className="rounded-full w-fit bg-gray-700 opacity-70 hover:bg-gray-200 hover:text-gray-800 hover:scale-110 hover:opacity-100 transition-all ease-in-out duration-300"
          >
            <ChevronRightIcon className="size-4" />
          </Button>
        </div>
      )}
    </>
  );
};

export default CarouselNextPrevButtons;
