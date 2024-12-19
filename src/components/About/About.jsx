import React from "react";
import AboutLanding from "./AboutLanding/AboutLanding";
import AboutDetail from "./AboutDetail/AboutDetail";
import FeaturePoints from "./AboutDetail/FeaturePoints";
import Branches from "./Branches/Branches";
import VissionMission from "./VisionMission/VissionMission";
import Research from "./Research/Research";
import OurValues from "./OurValues/OurValues";
import Directors from "./Directors/Directors";

const About = () => {
  return (
    <main>
      <AboutLanding />
      <AboutDetail />
      <FeaturePoints />
      <Branches />
      <VissionMission />
      <Research />
      <OurValues />
      <Directors />
    </main>
  );
};

export default About;
