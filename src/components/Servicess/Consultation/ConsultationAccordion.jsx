import React from "react";
import { FaPlus } from "react-icons/fa";
import ConsultationCard from "./ConsultationCard";
import useDynamicHeight from "../../../hooks/useDynamicHeight";

const ConsultationAccordion = ({ data, selected, setSelected }) => {
  const toggle = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="space-y-6 px-6 py-6 w-5/6">
      {data &&
        data.map((item) => {
          const isOpen = selected === item.id;
          const { ref, height } = useDynamicHeight(isOpen);

          return (
            <div
              key={item.id}
              className="border-b-2 border-black/25 pb-4 scroll-m-0"
            >
              <div className="mb-2">
                <h5>
                  <button
                    className={`w-full text-left flex items-center justify-center flex-col ${
                      selected === item.id ? "text-black" : "text-gray-800"
                    }`}
                    type="button"
                    onClick={() => toggle(item.id)}
                  >
                    <div className="flex items-center text-lg font-bold justify-between w-full">
                      {item.service}
                      <span
                        className={`transition-transform ease-in-out duration-500 ${
                          selected === item.id ? "rotate-[135deg]" : "rotate-0"
                        }`}
                      >
                        <FaPlus />
                      </span>
                    </div>
                  </button>
                </h5>
              </div>
              <div
                ref={ref}
                style={{ height }}
                className={`transition-all duration-500 ease-[0.22, 1, 0.36, 1] overflow-hidden`}
              >
                <div className="mt-2 text-gray-600 mb-6 space-y-3">
                  {item.description}
                </div>
                <ConsultationCard data={item} />
                <div>
                  <button className="btn1 mt-3">Book Now</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ConsultationAccordion;
