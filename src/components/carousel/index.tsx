import { useRef, useState } from "react";
import Text from "../text";
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import useDraggable from "../../hooks/useDraggable";
import CarouselItem from "./carousel-item";
import CarouselNextPrevButtons from "../carousel-next-prev-buttons";

interface ICarouselItemsProps {
  path?: string;
  carouselData: {
    title?: string;
    items: {
      image: string;
      title: string;
      description: string;
      duration: string;
      isNewEpisode: boolean;
      id: number;
    }[];
  };
}
const itemScrollNumber = 4;

const Carousel = ({
  path = "/images/carousel",
  carouselData,
}: ICarouselItemsProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const restItemsForScroll = useRef<number>(carouselData.items.length);
  const [hideNextBtn, setHideNextBtn] = useState<boolean>(false);
  const [hidePrevBtn, setHidePrevBtn] = useState<boolean>(true);

  const { onTouchStart } = useDraggable({
    onDragMove: (diff) => {
      if (diff < 50) {
        next();
      } else if (diff > -50) {
        prev();
      }
    },
  });

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
    restItemsForScroll.current =
      restItemsForScroll.current +
      (direction === "prev" ? itemScrollNumber : -itemScrollNumber);

    return direction === "prev"
      ? restItemsForScroll.current === carouselData.items.length
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
      {carouselData.title && (
        <div className="flex gap-3 items-center mb-4">
          <Text>{carouselData.title}</Text>
          <ChevronLeftIcon className="size-5 text-gray-50" />
        </div>
      )}
      <div
        ref={elementRef}
        onMouseDown={onTouchStart}
        onTouchStart={onTouchStart}
        className="flex gap-2 image-container relative mb-6 overflow-x-hidden whitespace-nowrap snap-x snap-mandatory transition-all ease-in-out duration-500 no-scrollbar scroll-smooth"
      >
        {carouselData.items.map((item) => {
          return <CarouselItem key={item.id} item={item} path={path} />;
        })}
      </div>
      <CarouselNextPrevButtons
        hideNextBtn={hideNextBtn}
        hidePrevBtn={hidePrevBtn}
        next={next}
        prev={prev}
      />
    </div>
  );
};

export default Carousel;
