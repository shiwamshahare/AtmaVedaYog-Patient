import React from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../ui/Carousel/Carousel";
import HeadingTitle from "../../../ui/HeadingTitle";
import Sections from "../../../ui/Sections";

const SpecialityTreatmentShowcase = () => {
  const [data] = useFetch("/data/specialTreatmentData.json");
  return (
    <Sections isEven id="Speciality Treatments">
      <HeadingTitle
        title="Speciality Treatment"
        subTitle="Reliable, treatment guiding, and deep root diagnosis is the gateway
            to the best and affordable healthcare."
      />

      <Carousel data={data} />
    </Sections>
  );
};

export default SpecialityTreatmentShowcase;
