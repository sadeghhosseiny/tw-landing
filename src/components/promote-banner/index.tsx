import Text from "../text";

interface IItemProps {
  item: {
    image: string;
    title: string;
    description: string;
  };
}

const PromoteBanner = ({ item }: IItemProps) => {
  return (
    <div className="relative">
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
