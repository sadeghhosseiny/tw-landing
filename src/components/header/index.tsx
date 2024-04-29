import { useWindowSize } from "../../hooks/useWindowSize";
import MobileHeader from "./mobile";
import DesktopHeader from "./desktop";

const Header = () => {
  const { mobile } = useWindowSize();

  return mobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
