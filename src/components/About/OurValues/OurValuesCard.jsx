import React from "react";
import useLazyLoadCards from "../../../hooks/useLazyLoadCards";

const OurValuesCard = () => {
  const data = [
    {
      title: "Patient Needs Care",
      lists: [
        "Suggest only those solutions which are best for the patient irrespective of the system of medicine we represent.",
        "Alleviate his fear created by the present medical system.",
        "Bring hope in hopeless situations with realistic approaches.",
      ],
    },
    {
      title: "Spiritual Path to Walk On",
      lists: [
        "Truthfulness with actions and promises on the same page.",
        "Promise only what can be fulfilled with assurance.",
        "Repay his hard-earned money if the limitation of our knowledge is the cause of not achieving results.",
        "Sat Sat Buddhi, Sat Sat Vivek.",
        "Saccha Sauda.",
      ],
    },
    {
      title: "Symbiosis",
      lists: [
        "Collaboration with various systems of medicine to create result-oriented treatment protocols.",
        "Respect the unified goal of healing from sufferings of all systems of medicine and value each opinion and experience without prejudice.",
        "Demonstrate moral courage to accept limitations and incorporate new ideas to increase the scope.",
      ],
    },
    {
      title: "Leadership",
      lists: [
        "Take initiatives for the growth of all associates.",
        "Ownership and pride in decisions and actions.",
        "Support every community and nation-building call.",
        "Help and initiate steps to facilitate social health entrepreneurship.",
      ],
    },
    {
      title: "Innovation",
      lists: [
        "Innovate to facilitate, speed up, and scale healthcare for the rich and reach the poor.",
        "Focus on improvising for precision in innovative solutions.",
        "Facilitate better options for patients rather than challenging the existing medical system.",
      ],
    },
  ];

  const { visibleItems, itemRefs } = useLazyLoadCards(data.length);

  return (
    <div className="w-full flex flex-col gap-8 lg:p-12">
      {data.map((item, idx) => (
        <div
          ref={(el) => (itemRefs.current[idx] = el)}
          data-index={idx}
          key={idx}
          className={`flex flex-col lg:flex-row lg:gap-12 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
        >
          {visibleItems[idx] && (
            <div className="bg-[#F8FAFC] flex w-full lg:w-2/3 gap-6 lg:gap-12 p-6 lg:p-12 flex-col border-2 border-black/25 rounded-lg drop-shadow-xl shadow-xl">
              <h5 className="text-2xl lg:text-3xl font-bold">{item.title}</h5>
              <ul className="space-y-3 list-item ms-2">
                {item.lists.map((list, idx) => (
                  <li key={idx} className="list-disc text-lg">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="lg:w-1/3"></div>
        </div>
      ))}
    </div>
  );
};

export default OurValuesCard;
