import React from "react";
import Sections from "../../../ui/Sections";

const DATA1 = [
  "Healthcare - Primary to tertiary.",
  "Non-Invasive Diagnostic - Online to Offline",
  "AI-powered telemedicine tools.",
  "Homeopathic Medicine formulations.",
  "Research in Yog Diagnostic and Therapeutics.",
  "Education - Advanced Yog, Clinical medicine, Integrative management.",
  "Health care entrepreneurship.",
  "Community Health.",
  "Corporate Health.",
];

const DATA2 = [
  {
    id: 1,
    name: "DiagnoNeo",
    description:
      "AI-based Non-Invasive diagnostic platform with over 180+ tests.",
  },
  {
    id: 2,
    name: "Atmavedayog Android and iOS Applications",
    description:
      "Telemedicine platform for online and offline medical management of general and critical care patients.",
  },
  {
    id: 3,
    name: "Over 302 Medicine Formulations",
    description:
      "Proprietary homeopathic medicine formulas developed by Dr. Sadanand Rasal for general, moderate, and severely critical patients.",
  },
  {
    id: 4,
    name: "Community Medicine",
    description:
      "Precise prevention, anti-aging, geriatric healthcare, and health predictive statistics.",
  },
  {
    id: 5,
    name: "Organ Reversal and End Stage Critical Patient Management",
    description:
      "Critical home care management and rapid critical patient management for CCU/ICU patients.",
  },
  {
    id: 6,
    name: "Atmavedayog Info-tech",
    description:
      "Development and invention of AI-based tools for AYUSH-based healthcare, research, and mass community health programs.",
  },
];

const FeaturePoints = () => {
  return (
    <Sections isEven>
      {/* Active Field Section */}
      <div className="w-full lg:w-4/6 flex flex-col gap-8">
        <div>
          <h6 className="text-xl sm:text-2xl font-bold text-center lg:text-left">
            Active Field of Company Work
          </h6>
        </div>
        <div className="text-base sm:text-lg">
          <ul className="flex flex-col space-y-4">
            {DATA1.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="font-bold">{idx + 1}.</span>
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Innovative Products Section */}
      <div className="w-full lg:w-4/6 flex flex-col gap-8 mt-12">
        <div>
          <h6 className="text-xl sm:text-2xl font-bold text-center lg:text-left">
            Company Innovative Product Portfolios:
          </h6>
        </div>
        <div className="text-base sm:text-lg">
          <ul className="flex flex-col space-y-6">
            {DATA2.map((item) => (
              <li key={item.id}>
                <strong>
                  {item.id}. {item.name}:
                </strong>
                <p className="mt-1 ml-6">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Sections>
  );
};

export default FeaturePoints;
