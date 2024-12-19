import React, { useContext } from "react";
import { DirectorsContext } from "../../../../context/DirectorContext/DirectorContext";
import FoundersProfile from "./FoundersProfile";

const DirectorsProfile = () => {
  const { data, selectedId } = useContext(DirectorsContext);

  // Find the selected director based on selectedId
  const selectedDirector = data.find((item) => item.id === selectedId);

  // Handle case if selectedDirector is not found
  if (!selectedDirector) {
    return <FoundersProfile />;
  }

  return (
    <div className="max-h-[87vh] overflow-y-auto flex flex-col mx-4 sm:mx-8 md:mx-12">
      {/* Ensure selectedId is valid and selectedDirector exists */}
      {selectedId > 1 ? (
        <div className="flex flex-col">
          <h5 className="text-2xl my-6 sm:text-xl md:text-2xl">
            {selectedDirector.name}
          </h5>
          <h6 className="text-lg my-6 sm:text-base md:text-lg">
            {selectedDirector.title}
          </h6>
          <img
            src={selectedDirector.imgSrc}
            alt={`${selectedDirector.name} - ${selectedDirector.title}`}
            className="w-full h-auto sm:w-8/12 md:w-7/12 lg:w-6/12"
          />
          {selectedDirector.info.map((para, idx) => (
            <p key={idx} className="my-6">
              {para}
            </p>
          ))}
        </div>
      ) : (
        <FoundersProfile />
      )}
    </div>
  );
};

export default DirectorsProfile;
