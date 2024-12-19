import React from "react";
import { FaHome, FaWallet, FaPlus, FaCog, FaUser } from "react-icons/fa"; // Import React Icons
import Tooltip from "../../../ui/Tooltip"; // Import Tooltip component

const FloatingNavbar = () => {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-5 ">
        {/* Home Button with Tooltip */}
        <Tooltip text="Home">
          <button className="flex flex-col items-center justify-center px-5 w-full h-full rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <FaHome className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          </button>
        </Tooltip>

        {/* Wallet Button with Tooltip */}
        <Tooltip text="Wallet">
          <button className="flex flex-col items-center justify-center px-5 w-full h-full  hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <FaWallet className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          </button>
        </Tooltip>

        {/* New Button without Tooltip (no need for text here) */}
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <FaPlus className="w-4 h-4 text-white" />
            <span className="sr-only">New item</span>
          </button>
        </div>

        {/* Settings Button with Tooltip */}
        <Tooltip text="Settings">
          <button className="flex flex-col items-center justify-center px-5 w-full h-full  hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <FaCog className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          </button>
        </Tooltip>

        {/* Profile Button with Tooltip */}
        <Tooltip text="Profile">
          <button className="flex flex-col items-center justify-center px-5 w-full h-full rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <FaUser className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default FloatingNavbar;
