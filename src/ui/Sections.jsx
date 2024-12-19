import React from "react";

const Sections = ({
  children,
  isEven,
  id,
  padding = "py-12",
  height = "h-auto",
  className = "", // Added custom className prop for flexibility
}) => {
  return (
    <section
      id={id}
      className={`w-full ${height} lg:${padding}  p-4 flex justify-center items-center lg:scroll-mt-12 ${
        isEven ? "bg-[#cde8d172]" : "bg-[#F8FAFC]"
      } ${className}`} // Added custom className for additional styling
    >
      <div className="lg:w-11/12 w-full backdrop-blur-sm flex flex-col justify-center items-center rounded-lg border-2 lg:p-8 lg:pt-6 mb-6 shadow-inner shadow-orange-200 drop-shadow-xl border-black/25">
        {children}
      </div>
    </section>
  );
};

export default Sections;
