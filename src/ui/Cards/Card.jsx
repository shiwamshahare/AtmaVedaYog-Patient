import React from "react";
import { motion } from "framer-motion";
import BorderEffect from "../BorderEffect";

const Card = ({ imgSrc, title, subTitle, description, type }) => {
  return (
    <BorderEffect>
      <motion.div className="p-8 flex-1 flex flex-col">
        <motion.h3 className="text-2xl font-semibold mb-2">{title}</motion.h3>
        {subTitle && <h4 className="text-lg text-gray-700 mb-2">{subTitle}</h4>}
        <motion.p className="text-gray-600 mb-4 text-sm">
          {description}
        </motion.p>
        <motion.button whileTap={{ scale: 0.95 }} className="btn1">
          {`Book ${type}`}
        </motion.button>
      </motion.div>
      {imgSrc && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="grid w-auto overflow-hidden"
        >
          <motion.img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover object-center"
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      )}
    </BorderEffect>
  );
};

export default Card;
