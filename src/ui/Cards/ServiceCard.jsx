import React from "react";
import { Link } from "react-router-dom";
import BorderEffect from "../BorderEffect";

const ServiceCard = ({ imgSrc, title, desc, url, subTitle }) => {
  return (
    <BorderEffect>
      <div className="relative z-10 bg-white rounded-lg p-5 flex flex-col gap-2 w-full h-full">
        {imgSrc && (
          <div className="w-full h-48 overflow-hidden">
            <img
              src={imgSrc}
              alt={title}
              className="w-full h-full object-cover object-center"
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <h4 className="text-lg mb-2">{subTitle}</h4>
        <p className="text-gray-600 mb-4 text-sm">{desc}</p>
        <Link
          to={url}
          className="btn1 text-center px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-colors"
        >
          View All
        </Link>
      </div>
    </BorderEffect>
  );
};

export default ServiceCard;
