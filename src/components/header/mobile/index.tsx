import UserIcon from "@heroicons/react/24/outline/UserIcon";
import { TwIcon } from "../../../assets/icons/tw-icon";
import Text from "../../text";
import { useScroll } from "../../../hooks/useScroll";

const MobileHeader = () => {
  const scrollThreshold = useScroll(70);

  return (
    <header>
      <div className="flex w-full items-center justify-between p-3">
        <span>
          <TwIcon />
        </span>
        <div>
          <UserIcon className="w-6 text-white" />
        </div>
      </div>
      <div
        className={`flex w-full z-30 fixed gap-10 items-center justify-center p-5 transition-all ease-in-out duration-300 ${
          scrollThreshold ? "bg-black top-0" : "bg-transparent top-16"
        }`}
      >
        <Text className="text-base">فیلم و سریال</Text>
        <Text className="text-base">ورزش</Text>
        <Text className="text-base">کودک</Text>
      </div>
    </header>
  );
};

export default MobileHeader;
