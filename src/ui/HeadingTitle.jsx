import React from "react";

const HeadingTitle = ({ title, subTitle = "", className = "" }) => {
  return (
    <div
      className={`w-full  flex flex-col justify-center items-center text-center ${className}`}
    >
      <h2 className="text-4xl md:text-5xl tracking-tighter leading-loose font-bold">
        {title}
      </h2>
      {/* Only render subtitle if it exists */}
      {subTitle && <p className="font-normal mt-2">{subTitle}</p>}{" "}
    </div>
  );
};

export default HeadingTitle;
