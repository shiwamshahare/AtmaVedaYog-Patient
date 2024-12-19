import React from "react";
import Sections from "../../../ui/Sections";
import VissionMissionCard from "./VissionMissionCard";

const VissionMission = () => {
  const visionData = [
    "To assist the growth of the nation by focusing on the health and happiness of its families.",
    "Reinventing ancient wisdom of Yog, Veda, and traditional medicine to create the world’s best integrative holistic medicine offering compassionate patient care.",
    "Creating a world-class integrative holistic healthcare system in India, providing medical care to urban, rural, and remote areas with minimal infrastructure and cost-effective efficiency, while expanding globally.",
  ];

  const missionData = [
    "Empowering 'Made in India' with 100% authentic, innovative healthcare solutions to make India the global leader in diagnostic innovation, preventive healthcare, aging delay, and organ healing for critical and chronic conditions.",
    "To bring global recognition to the ancient glory of Yog and Veda as guiding principles for modern medicine.",
    "Fostering compassionate healthcare driven by passion to heal, gratitude to Atmaswarupa, and dedication to alleviating suffering.",
  ];

  return (
    <Sections isEven>
      <div className="flex flex-col gap-12 w-full items-center justify-center">
        <VissionMissionCard
          data={visionData}
          title="Vision"
          flexType="flex-row"
        />
        <VissionMissionCard
          data={missionData}
          title="Mission"
          flexType="flex-row-reverse"
        />
      </div>
    </Sections>
  );
};

export default VissionMission;
