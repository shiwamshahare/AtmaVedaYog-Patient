import React from "react";
import useFetch from "../../../hooks/useFetch";
import ReadMore from "../../../ui/ReadMore";
import BorderEffect from "../../../ui/BorderEffect";

const PackageAll = () => {
  const [data] = useFetch("/data/packagesData.json");

  return (
    <div className="grid grid-cols-2 justify-center gap-4">
      {data &&
        data.map((service) => (
          <BorderEffect key={service.packageName}>
            <div className="relative z-10 bg-white rounded-lg w-full h-full p-5 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">
                {service.packageName}
              </h3>
              <p className="text-gray-600 mb-4">
                <ReadMore text={service.description} maxLength={120} />
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-700 mb-4">
                    <p>
                      <strong>Type:</strong>{" "}
                      {service.type ? service.type : "N/A"}
                    </p>
                  </div>
                  <div className="text-gray-700 mb-4">
                    <p>
                      <strong>Price:</strong>
                    </p>
                    <p>{service.monthlyCharges}</p>
                  </div>
                </div>

                <div className="text-gray-700 mb-4">
                  <p>
                    <strong>Included Services:</strong>
                  </p>
                  <ul>
                    {service.includes.map((include, idx) => (
                      <li key={idx}>{include}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="btn1">Buy</button>
            </div>
          </BorderEffect>
        ))}
    </div>
  );
};

export default PackageAll;
