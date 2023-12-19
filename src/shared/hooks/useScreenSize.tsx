import { useEffect, useState } from "react";

const useScreenSize = () => {
  const validWindow = typeof window !== "undefined";
  const [windowWidth, setWindowWidth] = useState(validWindow ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (validWindow) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (validWindow) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return {
    windowWidth,
    setWindowWidth,
  };
};

export default useScreenSize;
