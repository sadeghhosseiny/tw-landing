import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import { TwIcon } from "../../../assets/icons/tw-icon";
import Text from "../../text";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import { useScroll } from "../../../hooks/useScroll";

const DesktopHeader = () => {
  const scrollThreshold = useScroll(70);

  return (
    <header
      className={`flex z-10 items-center justify-between w-full pl-4 border-b border-b-gray-50 border-opacity-10 fixed top-0 transition-all ease-in-out duration-300 ${
        scrollThreshold ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex gap-4 items-center justify-between">
        <span>
          <TwIcon />
        </span>
        <div className="relative text-link-underline">
          <Text>خانه</Text>
        </div>
        <div className="relative text-link-underline">
          <Text>پخش زنده</Text>
        </div>
        <div className="relative text-link-underline">
          <Text>فیلم / سریال</Text>
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <MagnifyingGlassIcon className="w-6 text-white" />
        </div>
        <div>
          <UserIcon className="w-6 text-white" />
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
