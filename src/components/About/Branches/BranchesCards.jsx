import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const DATA = [
  "Rahatni, Pune 411017 (Urban)",
  "Pimpri, Pune 411018 (Urban)",
  "Bhambed, Ratnagiri (Rural)",
  "Bhingar, Ahmednagar (Rural)",
];

const BranchesCards = () => {
  return (
    <>
      {DATA.map((item, idx) => (
        <div
          className="flex items-center border-2 bg-white p-4 sm:p-6 rounded-lg shadow-md text-lg text-gray-800 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
          key={idx}
        >
          {/* Icon Section */}
          <div className="flex-shrink-0 text-green-700 text-2xl mr-4">
            <FaLocationDot />
          </div>
          {/* Text Section */}
          <div className="flex-grow">
            <p className="text-sm sm:text-base">{item}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BranchesCards;
