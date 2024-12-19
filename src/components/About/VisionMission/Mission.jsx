import React from "react";
import Sections from "../../../ui/Sections";
import VissionMissionCard from "./VissionMissionCard";

const Mission = () => {
  const data = [
    "Empowering 'Made in India' with 100% authentic innovative healthcare solutions that will make India the global leader and hub of healthcare in the field of diagnostic innovation, preventive healthcare, delaying aging, and organ healing in critical and chronic disease conditions.",
    "To make the world realize the ancient glory of Yog and Veda as guiding paths for the world of medicine to follow.",
    "Creating healthcare full of compassion for human lives, passion to heal sufferings, and gratitude to Atmaswarupa.",
  ];

  return (
    <Sections>
      <VissionMissionCard
        data={data}
        title="Mission"
        flexType="flex-row-reverse"
      />
    </Sections>
  );
};

export default Mission;
