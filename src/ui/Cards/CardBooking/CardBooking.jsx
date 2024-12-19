import React from "react";
import { Link } from "react-router-dom";
import BorderEffect from "../../BorderEffect";

const CardBooking = ({ imgSrc, title, subTitle, description, type, url }) => {
  // console.time("componentRender");

  // console.timeEnd("componentRender");
  return (
    <BorderEffect>
      <div className="relative z-10 bg-white rounded-lg w-full flex">
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          {subTitle && (
            <h4 className="text-lg text-gray-700 mb-2">{subTitle}</h4>
          )}
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
          <Link to={url}>
            <button className="btn1 w-fit">{`Book ${type}`}</button>
          </Link>
        </div>

        {imgSrc && (
          <div className="grid w-fit overflow-hidden">
            <img
              src={imgSrc}
              alt={title}
              className="w-full h-full object-cover object-center"
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
      </div>
    </BorderEffect>
  );
};

export default CardBooking;
