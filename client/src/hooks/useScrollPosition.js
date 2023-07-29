import { useEffect, useState } from "react";

function UseScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(
    parseInt(window.scrollY)
  );

  useEffect(() => {
    const setScroll = () => {
      setScrollPosition(parseInt(window.scrollY));
    };

    window.addEventListener("scroll", setScroll);

    return () => window.removeEventListener("scroll", setScroll);
  }, [scrollPosition]);

  return scrollPosition;
}

export default UseScrollPosition;
