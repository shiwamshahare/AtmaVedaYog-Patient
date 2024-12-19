import { motion } from "framer-motion";
import React from "react";

const Images = ({ imgIdx, imgs }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: imgIdx === idx ? 0.95 : 0.85 }}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
          }}
          className="aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover border-2"
        />
      ))}
    </>
  );
};

export default Images;
