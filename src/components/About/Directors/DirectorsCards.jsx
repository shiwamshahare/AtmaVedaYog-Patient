import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../ui/Modal";
import { DirectorsContext } from "../../../context/DirectorContext/DirectorContext";

const DirectorsCards = () => {
  const { data, selectedId, setSelectedId } = useContext(DirectorsContext);

  // Update the selected director ID
  const handleSelectId = (id) => {
    setSelectedId(id);
  };

  console.log(selectedId);

  return (
    <div className="w-full flex flex-col items-center xl:py-6 gap-4">
      {data.map((item) => (
        <div
          key={item.id} // Use item.id instead of idx
          className="w-full flex flex-col xl:flex-row items-center justify-between border-2 border-black/25 rounded-lg "
        >
          {/* Image Section */}
          <div className="flex flex-col justify-center items-center text-center w-full xl:w-2/5 xl:m-12 m-4 lg:p-12 p-4 gap-6 border-b xl:border-b-0 xl:border-r-2  border-black/25">
            <img
              src={item.imgSrc}
              alt={item.name}
              className="drop-shadow-2xl rounded-xl xl:border-2 border-black/25 lg:w-1/2"
            />
            <h6 className="text-3xl pt-3">
              {item.name}
              <p className="text-lg font-normal">{item.title}</p>
            </h6>
          </div>

          {/* Info Section */}
          <div className="w-full xl:w-3/5 lg:py-12 sm:pe-12 p-4 text-justify">
            {item.info.map((para, idx) => (
              <div key={idx}>
                {para && (
                  <>
                    <p className="indent-8 text-lg">{para}</p>
                    <br />
                  </>
                )}
              </div>
            ))}

            <p
              onClick={() => handleSelectId(item.id)}
              className="cursor-pointer text-blue-600"
            >
              <Modal title="Know more..." btn="btn2" type="directors" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectorsCards;
