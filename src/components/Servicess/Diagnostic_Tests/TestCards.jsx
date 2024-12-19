import React from "react";
import ReadMore from "../../../ui/ReadMore";
import useLazyLoadCards from "../../../hooks/useLazyLoadCards";
import BorderEffect from "../../../ui/BorderEffect";

const TestCards = ({ data }) => {
  const { visibleItems, itemRefs } = useLazyLoadCards(data.length);
  return (
    <div className="grid h-full grid-cols-2 justify-center gap-5">
      {data &&
        data.map((test) => (
          <div
            ref={(el) => (itemRefs.current[test.test_id] = el)}
            data-index={test.test_id}
            key={test.test_id}
          >
            <BorderEffect>
              {visibleItems[test.test_id] && (
                <>
                  <div className="absolute w-full h-full  border-2 border-black bg-[linear-gradient(to_tr,_#22c55e,_#3b82f6,_#facc15,_#84cc16,_#f97316)] blur-[10px] group-hover:animate-spin duration-[6000ms] ease-linear opacity-0 transition-opacity group-hover:opacity-80" />
                  <div className="relative z-10 bg-white rounded-lg w-full h-full p-5 flex flex-col ">
                    <h3 className="text-2xl font-semibold mb-4 text-center">
                      {test.test_name}
                    </h3>
                    {test.indications && (
                      <p className="text-gray-600 mb-4">
                        <ReadMore text={test.indications} maxLength={75} />
                      </p>
                    )}

                    <div className="grid grid-cols-2">
                      {test.Charges && (
                        <div className=" text-gray-700 mb-4 flex flex-col items-start justify-start">
                          <p>
                            <strong>Charges : </strong>
                          </p>
                          <p className="text-sm">{test.Charges}</p>
                        </div>
                      )}
                      {test.type_of_test && (
                        <div className="text-gray-700 mb-4 flex flex-col items-start justify-start">
                          <p>
                            <strong>Type of test : </strong>
                          </p>
                          <p className="text-sm">{test.type_of_test}</p>
                        </div>
                      )}

                      {test.where_to_do && (
                        <div className="text-gray-700 mb-4 flex flex-col items-start justify-start">
                          <p>
                            <strong>Where to do :</strong>
                          </p>
                          <p className="text-sm">{test.where_to_do}</p>
                        </div>
                      )}
                      {test.technology && (
                        <div className="text-gray-700 mb-4 flex flex-col items-start justify-start">
                          <p>
                            <strong>Technology :</strong>
                          </p>
                          <p className="text-sm">{test.technology}</p>
                        </div>
                      )}

                      {test.test_for_age_group && (
                        <div className="text-gray-700 mb-4 flex flex-col items-start justify-start">
                          <p>
                            <strong>Test for age group :</strong>
                          </p>
                          <p className="text-sm">{test.test_for_age_group}</p>
                        </div>
                      )}
                      {test.test_category && (
                        <div className="text-gray-700 mb-4 flex flex-col items-start justify-start">
                          <strong>Test category :</strong>

                          <p>{test.test_category}</p>
                        </div>
                      )}
                    </div>

                    {test.image_name && (
                      <div className="text-gray-700 mb-4 flex flex-col items-start justify-start">
                        <p>{test.image_name}</p>
                      </div>
                    )}
                    <button className="btn1">Buy</button>
                  </div>
                </>
              )}
            </BorderEffect>
          </div>
        ))}
    </div>
  );
};

export default TestCards;
