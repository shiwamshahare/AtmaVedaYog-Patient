import React from "react";
import { FaHeart } from "react-icons/fa";

const CopyRight = () => {
  return (
    <div className="w-11/12 h-auto py-12 pb-0 flex justify-between items-center">
      <div className="w-full flex justify-start items-center text-center">
        &copy; 2024 AtmaVed Yog Pvt. Ltd. All Rights Reserved
      </div>
      <div className="flex justify-center items-center text-sm w-full">
        <ul className="flex justify-center items-center w-full h-full gap-3 ">
          <li>Help & Support</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="w-full flex justify-end items-end capitalize">
        <p className="flex justify-center items-center gap-2">
          made with
          <span className="font-extrabold text-xl text-red-500 animate-pulse">
            <FaHeart />
          </span>
          by AtmaVed Yog Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
