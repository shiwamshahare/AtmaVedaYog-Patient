import React from "react";

const BorderEffect = ({ children }) => {
  return (
    <div className="relative group w-full h-full flex-shrink-0 rounded-lg overflow-hidden flex flex-col justify-center items-center p-[2px] shadow-inner drop-shadow-md hover:drop-shadow-2xl">
      <div className="absolute w-full h-full bg-gradient-to-tr from-green-500 via-blue-500 to-orange-500  blur-[10px]  group-hover:animate-spin duration-2000 opacity-0 transition-opacity group-hover:opacity-80" />
      {children}
    </div>
  );
};

export default BorderEffect;
