import { sliderData } from "../../mock-data/main-slider";
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import Button from "../button";
import { useEffect, useRef, useState } from "react";
import Text from "../text";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlider = () => setSlideIndex(slideIndex + 1);
  const handlePrevSlider = () => setSlideIndex(slideIndex - 1);

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
      <div className="mx-auto overflow-hidden w-full h-full">
        <div className="w-full h-full flex relative linear-gradient-effect">
          {sliderData.map((item, index) => {
            const { image, id, title, description, type } = item;
            let position = "nextSlide";
            if (index === slideIndex) {
              position = "activeSlide";
            }
            if (
              index === slideIndex - 1 ||
              (slideIndex === 0 && index === sliderData.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <div key={id}>
                <div
                  className={`absolute top-0 left-0 w-full h-full opacity-0 transition-all ease-out duration-500 ${position}`}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={process.env.PUBLIC_URL + `/images/slider/${image}.jpg`}
                    alt="slider"
                  />
                </div>
                <div
                  className={`absolute top-0 left-0 w-full h-full opacity-0 bg-transparent z-10 transition-all ease-out duration-500 ${position}`}
                >
                  <Text className="text-2xl absolute bottom-32 right-5">
                    {title}
                  </Text>
                  <Text className="text-sm font-normal absolute bottom-24 right-5 z-20">
                    {description}
                  </Text>
                  <Button className="absolute bottom-8 right-5 bg-white text-gray-700">
                    {type}
                  </Button>
                </div>
              </div>
            );
          })}
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
        </div>
      </div>
    </div>
  );
};

export default Slider;
