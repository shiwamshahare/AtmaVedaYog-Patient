import React from "react";
import Sections from "../../../ui/Sections";
import HeadingTitle from "../../../ui/HeadingTitle";
import BranchesCards from "./BranchesCards";

const Branches = () => {
  return (
    <Sections>
      {/* Heading Section */}
      <HeadingTitle title="Branches & Clinics" />

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        <BranchesCards />
      </div>
    </Sections>
  );
};

export default Branches;
