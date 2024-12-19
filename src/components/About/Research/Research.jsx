import React from "react";
import Sections from "../../../ui/Sections";
import HeadingTitle from "../../../ui/HeadingTitle";

const Research = () => {
  const data = [
    "Reversal of cellular aging.",
    "Reversal of organ injury.",
    "Non-medicinal approach to those chronic diseases that are limitations to present-day medicines.",
    "Biochemical disease markers.",
    "Immune markers.",
    "Anthropometric analysis.",
    "Chakra physiology.",
    "Psycho-somatic axis.",
    "Somato-psychic axis.",
    "Hormones as health indicators and disease markers.",
    "Limitations of modern diagnostic tools and methods.",
  ];

  return (
    <Sections>
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:gap-12 gap-6  lg:p-12 items-center">
          <HeadingTitle
            title="Research and Medical Studies"
            className="text-4xl lg:text-5xl font-bold text-center"
          />
          <p className="text-lg lg:text-xl indent-8 text-justify">
            Yoga, homeopathy, though immensely powerful sciences, have enormous
            untapped applicability in Medicine. Atmavedayog empowers through its
            tools of diagnostic and holistic research in yoga, homeopathy, or
            any AYUSH branches of medicine.
          </p>
          <p className="text-lg lg:text-xl indent-8">
            Atmavedayog also plans to support, sponsor, and guide young
            researchers in the field of yoga to take up research.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col py-6  lg:p-12 border-t-2 lg:border-t-0 lg:border-l-2 mt-6 lg:mt-0">
          <h6 className="text-2xl lg:text-3xl font-bold py-4">
            Present ongoing clinical research at Atmavedayog:
          </h6>
          <ul className="space-y-3 text-lg lg:text-xl">
            {data.map((item, idx) => (
              <li key={idx} className="text-lg">
                {idx + 1}. {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Sections>
  );
};

export default Research;
