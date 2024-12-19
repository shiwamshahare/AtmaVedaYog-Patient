import React from "react";
import Sections from "../../../ui/Sections";
import HeadingTitle from "../../../ui/HeadingTitle";
import DirectorsCards from "./DirectorsCards";
import DirectorContextProvider from "../../../context/DirectorContext/DirectorContext";

const Directors = () => {
  return (
    <DirectorContextProvider>
      <Sections>
        <HeadingTitle title="Board of Directors" />
        <div className="w-full flex flex-col px-4 md:px-8 lg:px-12 py-6 lg:py-12">
          {/* You can add additional container styles here, such as padding or margins */}
          <DirectorsCards />
        </div>
      </Sections>
    </DirectorContextProvider>
  );
};

export default Directors;
