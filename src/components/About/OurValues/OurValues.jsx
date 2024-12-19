import React from "react";
import Sections from "../../../ui/Sections";
import HeadingTitle from "../../../ui/HeadingTitle";
import OurValuesCard from "./OurValuesCard";

const OurValues = () => {
  return (
    <Sections isEven>
      <HeadingTitle title="Our Values" />
      <OurValuesCard />
    </Sections>
  );
};

export default OurValues;
