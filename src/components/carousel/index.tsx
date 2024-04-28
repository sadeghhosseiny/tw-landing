import { useRef, useState } from "react";
import Button from "../button";
import Text from "../text";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";

interface ICarouselItemsProps {
  path?: string;
  carouselItems: {
    image: string;
    title: string;
    description: string;
    duration: string;
    isNewEpisode: boolean;
    id: number;
  }[];
}

const itemScrollNumber = 4;

const Carousel = ({
  path = "/images/carousel",
  carouselItems,
}: ICarouselItemsProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const restItemsForScroll = useRef<number>(carouselItems.length);
  const [hideNextBtn, setHideNextBtn] = useState<boolean>(false);
  const [hidePrevBtn, setHidePrevBtn] = useState<boolean>(true);

  const scroll = (direction: string) => {
    const containerWidth = elementRef.current?.clientWidth;
    const scroll = elementRef.current?.scrollLeft;

    if (
      containerWidth !== undefined &&
      scroll !== undefined &&
      elementRef.current
    ) {
      elementRef.current.scrollLeft =
        scroll + (direction === "prev" ? containerWidth : -containerWidth);
    }
  };

  const calcHideNextPrevBtn = (direction: string) => {
    console.log("cur ", restItemsForScroll.current);

    restItemsForScroll.current =
      restItemsForScroll.current +
      (direction === "prev" ? itemScrollNumber : -itemScrollNumber);

    return direction === "prev"
      ? restItemsForScroll.current === carouselItems.length
      : restItemsForScroll.current <= itemScrollNumber;
  };

  const next = () => {
    scroll("next");
    const hide = calcHideNextPrevBtn("next");
    hide && setHideNextBtn(true);

    setHidePrevBtn(false);
  };

  const prev = () => {
    scroll("prev");
    const hide = calcHideNextPrevBtn("prev");
    hide && setHidePrevBtn(true);

    setHideNextBtn(false);
  };

  return (
    <div className="relative">
      <div
        ref={elementRef}
        className="flex gap-2 image-container relative mb-4 overflow-x-auto whitespace-nowrap snap-x snap-mandatory transition-all ease-in-out duration-500 no-scrollbar scroll-smooth"
      >
        {carouselItems.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex-shrink-0 snap-start w-[calc(100%/4)] relative"
            >
              <img
                src={process.env.PUBLIC_URL + `${path}/${item.image}`}
                alt="carousel"
                className={`carousel-image w-full`}
              />
              {item.isNewEpisode && (
                <Text className="absolute text-sm bottom-[56px] bg-red-600 p-1 right-1">
                  قسمت جدید
                </Text>
              )}
              <Text className="absolute bottom-[56px] bg-black p-1 left-1">
                {item.duration}
              </Text>
              <Text className="mt-1">{item.title}</Text>
              <Text className="text-sm mt-1 text-gray-500">
                {item.description}
              </Text>
            </div>
          );
        })}
      </div>
      {!hideNextBtn && (
        <div>
          <Button
            onClick={next}
            className="absolute z-10 rounded-full bg-gray-700 left-[-20px] top-12 opacity-70 hover:bg-gray-200 hover:text-gray-800 hover:scale-110 hover:opacity-100 transition-all ease-in-out duration-300"
          >
            <ChevronLeftIcon className="size-4" />
          </Button>
        </div>
      )}
      {!hidePrevBtn && (
        <Button
          onClick={prev}
          className="absolute z-10 rounded-full bg-gray-700 right-[-20px] top-12 opacity-70 hover:bg-gray-200 hover:text-gray-800 hover:scale-110 hover:opacity-100 transition-all ease-in-out duration-300"
        >
          <ChevronRightIcon className="size-4" />
        </Button>
      )}
    </div>
  );
};

export default Carousel;