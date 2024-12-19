import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const scrollHeight = document.documentElement.scrollHeight; // Total height of the document
      const clientHeight = window.innerHeight; // Height of the visible viewport

      const totalScrollableHeight = scrollHeight - clientHeight;
      const progress = scrollTop / totalScrollableHeight || 0; // Avoid NaN for no scrolling
      setScrollProgress(progress);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full rounded-full h-[2px]  -z-50">
      <div
        className="h-full bg-green-700"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transformOrigin: "left",
          transition: "transform 0.2s ease-out", // Smooth scaling
        }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
