import { useWindowSize } from "../../hooks/useWindowSize";
import MobileFooter from "./mobile";
import DesktopFooter from "./desktop";

const Footer = () => {
  const { mobile } = useWindowSize();
  return mobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer;
