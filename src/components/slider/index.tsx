import { sliderData } from "../../mock-data/main-slider";
import { useEffect, useState } from "react";
import useDraggable from "../../hooks/useDraggable";
import Slide from "./slide";
import SliderNextPrevButtons from "./slider-next-prev-buttons";
import Dots from "./dots";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlider = () => setSlideIndex(slideIndex + 1);
  const handlePrevSlider = () => setSlideIndex(slideIndex - 1);

  const { onTouchStart } = useDraggable({
    onDragMove: (diff) => {
      if (diff > 50) {
        handleNextSlider();
      } else if (diff < -50) {
        handlePrevSlider();
      }
    },
  });

  useEffect(() => {
    const lastIndex = sliderData.length - 1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(0);
    }
  }, [slideIndex]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideIndex]);

  return (
    <div className="w-full">
      <div
        className="mx-auto overflow-hidden w-full h-full"
        onMouseDown={onTouchStart}
        onTouchStart={onTouchStart}
      >
        <div className="w-full sm:h-full flex relative h-[32rem] linear-gradient-effect select-none">
          {sliderData.map((item, index) => (
            <Slide
              key={item.id}
              index={index}
              slideIndex={slideIndex}
              sliderDataLength={sliderData.length}
              image={item.image}
              title={item.title}
              description={item.description}
              type={item.type}
            />
          ))}
          <SliderNextPrevButtons
            handleNextSlider={handleNextSlider}
            handlePrevSlider={handlePrevSlider}
          />
          <Dots slideIndex={slideIndex} sliderDataLength={sliderData.length} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
