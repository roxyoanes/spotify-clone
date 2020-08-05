import { useState, useEffect } from "react";

const scrollHook = (): { scrolled: boolean } => {
  const [scrolled, setScroll] = useState(false);

  const handleScroll = () => {
    const isTop = window.scrollY === 0;
    if (isTop === true) {
      setScroll(scrolled);
    } else {
      setScroll(!scrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled };
};

export default scrollHook;
