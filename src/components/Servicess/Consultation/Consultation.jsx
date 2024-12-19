import React, { useState } from "react";
import Sections from "../../../ui/Sections";
import HeadingTitle from "../../../ui/HeadingTitle";
import ConsultationAccordion from "./ConsultationAccordion";
import useFetch from "../../../hooks/useFetch";

const Consultation = () => {
  const [data] = useFetch("/data/consultationData.json");
  const [index, setIndex] = useState(1);
  return (
    <main>
      <Sections>
        <HeadingTitle title="Consultation" />
        <ConsultationAccordion
          data={data}
          selected={index}
          setSelected={setIndex}
        />
      </Sections>
    </main>
  );
};

export default Consultation;
