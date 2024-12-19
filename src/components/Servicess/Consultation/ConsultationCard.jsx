import React from "react";

const ConsultationCard = ({ data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-3 space-y-3">
      <div>
        <p>Type :</p>
        {data.type.map((item, idx) => (
          <span key={idx} className="test-sm font-normal">
            {item}
            {idx === 0 ? " / " : ""}
          </span>
        ))}
      </div>
      <div>
        <p>
          Duration :{" "}
          <span className="test-sm font-normal">{data.duration}</span>
        </p>
      </div>
      <div>
        <p>
          Online :{" "}
          <span className="test-sm font-normal">{data.price.Online} </span> /
          <span className="test-sm font-normal"> {data.charge_type}</span>
        </p>
        <p className="text-md">
          Offline :{" "}
          <span className="test-sm font-normal">{data.price.Online} </span> /
          <span className="test-sm font-normal"> {data.charge_type}</span>
        </p>
      </div>
    </div>
  );
};

export default ConsultationCard;
