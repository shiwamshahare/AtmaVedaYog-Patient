import React from "react";
import HeadingTitle from "../../../ui/HeadingTitle";

const VissionMissionCard = ({ data, title, flexType }) => {
  return (
    <div
      className={`w-full flex lg:${flexType} flex-col border-2 bg-[#F8FAFC] border-black/25 rounded-lg p-5 lg:p-8 mb-6`}
    >
      {/* Title Section */}
      <div
        className={`w-full lg:w-1/2 flex flex-col justify-center items-center py-4 lg:py-0 ${
          title === "Vision" ? "lg:border-r-2" : "lg:border-l-2"
        } border-gray-300`}
      >
        <HeadingTitle title={title} />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 justify-center items-start">
        {data.map((item, idx) => (
          <p key={idx} className="text-base lg:text-lg">
            <strong>{idx + 1}. </strong>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default VissionMissionCard;
