import Text from "../../text";

interface ICarouselItemProps {
  item: {
    image: string;
    isNewEpisode: boolean;
    duration: string;
    title: string;
    description: string;
  };
  path: string;
}

const CarouselItem = ({ item, path }: ICarouselItemProps) => {
  return (
    <div className="flex-shrink-0 snap-start w-[calc(100%/1.5)] sm:w-[calc(100%/4)] relative">
      <img
        src={process.env.PUBLIC_URL + `${path}/${item.image}`}
        draggable={false}
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
      <Text className="text-sm mt-1 text-gray-500">{item.description}</Text>
    </div>
  );
};

export default CarouselItem;
