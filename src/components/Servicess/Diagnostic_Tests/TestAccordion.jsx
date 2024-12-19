import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import TestCards from "./TestCards";
import ReadMore from "../../../ui/ReadMore";

const TestAccordion = ({ testData, selected, setSelected }) => {
  const toggle = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="space-y-6 px-6 py-6">
      {testData &&
        testData.map((item) => (
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
                    {item.title}
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
              className={`transition-all overflow-hidden ${
                selected === item.id ? "h-full" : "max-h-0"
              }`}
            >
              <div className="mt-2 text-gray-600 mb-6">
                <ReadMore text={item.description} maxLength={200} />
              </div>
              <TestCards selected={selected} data={item.lists} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default TestAccordion;
