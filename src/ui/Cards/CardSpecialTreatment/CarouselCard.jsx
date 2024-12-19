import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BorderEffect from "../../BorderEffect";

const CarouselCard = ({
  imgSrc = "",
  title,
  subTitle = "",
  desc,
  type,
  url,
}) => {
  return (
    <BorderEffect>
      <div className="relative z-10 bg-white rounded-lg w-full h-full grid">
        {/* if image available */}
        {/* {imgSrc && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-full h-48 overflow-hidden"
          >
            <motion.img
              src={imgSrc}
              alt={title}
              className="w-full h-full object-cover object-center"
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        )} */}
        <div className="p-5 flex flex-col justify-between w-full">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            {subTitle && (
              <h4 className="text-lg text-gray-700 mb-2">{subTitle}</h4>
            )}
            <p className="text-gray-600 mb-4 text-sm">{desc}</p>
          </div>
          <Link to={url} className="w-full">
            <button className="btn1 w-full">
              {type ? `Book ${type}` : "Buy"}
            </button>
          </Link>
        </div>
      </div>
    </BorderEffect>
  );
};

export default CarouselCard;
