import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <span>
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <button
        onClick={toggleReadMore}
        className="text-blue-500 ml-1 hover:underline"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </span>
  );
};

export default ReadMore;
