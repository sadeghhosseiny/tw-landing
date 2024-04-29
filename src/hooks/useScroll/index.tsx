import { useEffect, useState } from "react";

export const useScroll = (scroll: number) => {
  const [scrollThreshold, setScrollThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scroll) {
        setScrollThreshold(true);
      } else {
        setScrollThreshold(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollThreshold;
};
