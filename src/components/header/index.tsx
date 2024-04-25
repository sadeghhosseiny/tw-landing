import { TwIcon } from "../../assets/icons/tw-icon";
import Text from "../Text";
import MagnifyingGlass from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import User from "@heroicons/react/24/outline/UserIcon";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full pl-4 border-b border-b-gray-800 fixed top-0">
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
          <MagnifyingGlass className="w-6 text-white" />
        </div>
        <div>
          <User className="w-6 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
