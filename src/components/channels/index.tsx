import { T1 } from "../../assets/icons/Ch";
import { T2 } from "../../assets/icons/Ch2";
import { T3 } from "../../assets/icons/Ch3";
import { T4 } from "../../assets/icons/Ch4";
import { T5 } from "../../assets/icons/Ch5";
import { T6 } from "../../assets/icons/Ch6";
import Text from "../text";
import Bars4Icon from "@heroicons/react/24/outline/Bars4Icon";
import Channel from "./channel";

export const channels = [
  {
    icon: <T1 />,
    title: "جام جم",
  },
  {
    icon: <T2 />,
    title: "جام جم",
  },
  {
    icon: <T3 />,
    title: "جام جم",
  },
  {
    icon: <T4 />,
    title: "جام جم",
  },
  {
    icon: <T5 />,
    title: "جام جم",
  },
  {
    icon: <T6 />,
    title: "جام جم",
  },
  {
    icon: <T6 />,
    title: "جام جم",
  },
  {
    icon: <T6 />,
    title: "جام جم",
  },
  {
    icon: <T6 />,
    title: "جام جم",
  },
  {
    icon: <T6 />,
    title: "جام جم",
  },
  {
    icon: <T6 />,
    title: "جام جم",
  },
  {
    icon: <T6 />,
    title: "جام جم",
  },
];

const Channels = () => {
  return (
    <div className="px-10 channels">
      <div className="mt-20 max-w-80">
        <div className="flex flex-wrap">
          {channels.map((item, index) => (
            <Channel key={index} icon={item.icon} title={item.title} />
          ))}
        </div>
        <div className="border border-red-600 rounded-sm p-3 hover:bg-red-500 group transition-all cursor-pointer duration-300">
          <div className="flex items-center justify-between">
            <Text className="text-red-600 group-hover:text-gray-300 duration-300 text-sm">
              پخش زنده شبکه های تلویزیون
            </Text>
            <Bars4Icon className="size-6 text-red-600 group-hover:text-gray-300 duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channels;
