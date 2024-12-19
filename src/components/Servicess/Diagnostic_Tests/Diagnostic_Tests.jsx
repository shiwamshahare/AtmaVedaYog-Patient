import React, { useState } from "react";
import Sections from "../../../ui/Sections";
import HeadingTitle from "../../../ui/HeadingTitle";
import Sidebar from "./Sidebar";
import TestAccordion from "./TestAccordion";
import useFetch from "../../../hooks/useFetch";

const Diagnostic_Tests = () => {
  const [data] = useFetch("/data/diagnosticTestData.json");

  const [index, setIndex] = useState(1);
  console.log(data);

  return (
    <main>
      <Sections>
        <HeadingTitle title="Diagnostic Tests" />
        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-1/4 pe-3">
            <Sidebar options={data} selected={index} setSelected={setIndex} />
          </div>
          <div className="md:w-3/4">
            <TestAccordion
              testData={data}
              selected={index}
              setSelected={setIndex}
            />
          </div>
        </div>
      </Sections>
    </main>
  );
};

export default Diagnostic_Tests;
