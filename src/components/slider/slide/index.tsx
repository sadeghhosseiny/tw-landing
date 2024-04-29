import Button from "../../button";
import Text from "../../text";

interface ISlideProps {
  index: number;
  slideIndex: number;
  sliderDataLength: number;
  image: string;
  title: string;
  description: string;
  type: string;
}

const Slide = ({
  index,
  slideIndex,
  sliderDataLength,
  image,
  title,
  description,
  type,
}: ISlideProps) => {
  let position = "nextSlide";
  if (index === slideIndex) {
    position = "activeSlide";
  }
  if (
    index === slideIndex - 1 ||
    (slideIndex === 0 && index === sliderDataLength - 1)
  ) {
    position = "lastSlide";
  }

  return (
    <div>
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
        className={`absolute flex flex-col items-center sm:items-start justify-end gap-3 bottom-7 left-0 w-full h-full opacity-0 bg-transparent z-10 transition-all ease-out duration-500 ${position}`}
      >
        <Text className="text-2xl bottom-32 right-5">{title}</Text>
        <Text className="text-sm font-normal bottom-24 right-5 z-20">
          {description}
        </Text>
        <Button className="bottom-8 right-5 bg-white text-gray-700">
          {type}
        </Button>
      </div>
    </div>
  );
};

export default Slide;
