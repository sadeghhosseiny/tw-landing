import { BaleIcon } from "../../assets/icons/bale";
import { LinkedIn } from "../../assets/icons/linkedin";
import { Instagram } from "../../assets/icons/instagram";
import Text from "../text";

const Footer = () => {
  return (
    <footer className="flex items-center fixed bottom-0 bg-black py-3 px-10 justify-between w-full">
      <div className="flex gap-6 items-center">
        <div className="flex items-center p-2 border border-gray-300">
          <Text className="cursor-pointer">دانلود اپلیکیشن</Text>
        </div>
        <div className="relative text-mini-link-underline">
          <Text className="text-mini-link">قوانین</Text>
        </div>
        <div className="relative text-mini-link-underline">
          <Text className="text-mini-link">فرصت های همکاری</Text>
        </div>
        <div className="relative text-mini-link-underline">
          <Text className="text-mini-link">درباره تلوبیون</Text>
        </div>
        <div className="relative text-mini-link-underline">
          <Text className="text-mini-link">بلاگ</Text>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Text className="text-mini-link">
          تمامی حقوق برای تلوبیون محفوظ است
        </Text>
        <div className="cursor-pointer">
          <BaleIcon />
        </div>
        <div className="cursor-pointer">
          <LinkedIn />
        </div>
        <div className="cursor-pointer">
          <Instagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
