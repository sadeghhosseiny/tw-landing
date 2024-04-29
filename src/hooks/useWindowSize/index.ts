import { useEffect, useState } from "react";

interface WindowSizeReturnType {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
};

function screenType(width: number): WindowSizeReturnType {
  if (!width) return { mobile: true, tablet: false, desktop: false };
  return {
    mobile: width <= 575,
    tablet: width > 575 && width <= 976,
    desktop: width > 976,
  };
}

export function useWindowSize(): WindowSizeReturnType {
  const [mobile, setMobile] = useState<boolean>(screenType(0).mobile);
  const [tablet, setTablet] = useState<boolean>(screenType(0).tablet);
  const [desktop, setDesktop] = useState<boolean>(screenType(0).tablet);

  const handleResize = () => {
    const sizes = screenType(window.innerWidth);
    setMobile(sizes.mobile);
    setTablet(sizes.tablet);
    setDesktop(sizes.desktop);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return { mobile, tablet, desktop };
}
