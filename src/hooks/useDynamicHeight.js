import { useRef, useState, useEffect } from "react";

const useDynamicHeight = (isOpen) => {
  const ref = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(`${ref.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return { ref, height };
};

export default useDynamicHeight;
