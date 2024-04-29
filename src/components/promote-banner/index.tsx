import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import Text from "../text";

interface IItemProps {
  item: {
    headerTitle: string;
    image: string;
    title: string;
    description: string;
  };
}

const PromoteBanner = ({ item }: IItemProps) => {
  return (
    <div className="relative">
      <div className="flex gap-3 items-center mb-4">
        <Text>{item.title}</Text>
        <ChevronLeftIcon className="size-5 text-gray-50" />
      </div>
      <img
        src={process.env.PUBLIC_URL + `images/promote/${item.image}`}
        className="w-full"
        alt="promote-banner"
      />
      <div className="w-full h-full absolute bottom-0 justify-center flex flex-col">
        <Text className=" text-2xl p-1 right-1">{item.title}</Text>
        <Text className=" p-1 right-1">{item.description}</Text>
      </div>
    </div>
  );
};

export default PromoteBanner;
