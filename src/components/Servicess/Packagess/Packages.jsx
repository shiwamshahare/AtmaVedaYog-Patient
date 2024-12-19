import React from "react";
import HeadingTitle from "../../../ui/HeadingTitle";
import Sections from "../../../ui/Sections";
import PackageAll from "./PackageAll";
const Packages = () => {
  return (
    <Sections id="packages">
      <HeadingTitle
        title="Packages"
        subTitle="Discover the perfect plan for you and your family"
      />

      <div className="mt-10 w-full">
        <PackageAll />
      </div>
    </Sections>
  );
};

export default Packages;
