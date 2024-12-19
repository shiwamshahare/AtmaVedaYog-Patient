import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import Images from "./Images";
import Dots from "./Dots";

const DRAG_BUFFER = 50;
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 4;

const ImageCarousel = ({ img }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const dragX = useMotionValue(0);
  const imgs = img ? img.map((imgss) => imgss) : [];

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIdx((prev) => {
          // Reverse direction at boundaries
          if (prev === 0 && direction === -1) {
            setDirection(1);
            return prev + 1;
          }
          if (prev === imgs.length - 1 && direction === 1) {
            setDirection(-1);
            return prev - 1;
          }

          // Move forward or backward based on direction
          return prev + direction;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [direction, imgs.length, dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIdx < imgs.length - 1) {
      setImgIdx((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIdx > 0) {
      setImgIdx((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden p-2 m-auto w-full h-full">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIdx * 100}%` }}
        transition={{
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
          duration: 1,
        }}
        onDragEnd={onDragEnd}
        className="flex w-full h-full items-center cursor-grab active:cursor-grabbing"
      >
        <Images imgIdx={imgIdx} imgs={imgs} />
      </motion.div>
      <Dots imgIdx={imgIdx} setImgIdx={setImgIdx} imgs={imgs} />
    </div>
  );
};

export default ImageCarousel;
