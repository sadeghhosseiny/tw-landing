import Text from "../../Text";

interface IChannelProps {
  icon: React.ReactNode;
  title: string;
}

const Channel = ({ icon, title }: IChannelProps) => {
  return (
    <div className="w-1/4 gap-4 mb-6 flex cursor-pointer justify-center">
      <div>
        <div className="border border-gray-800 hover:border-red-600 transition-colors duration-300 p-1 rounded-full">
          {icon}
        </div>
        <Text className="text-sm text-center">{title}</Text>
      </div>
    </div>
  );
};

export default Channel;
