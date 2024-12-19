import React from "react";
import useFetch from "../../../hooks/useFetch";
import HeadingTitle from "../../../ui/HeadingTitle";
import Sections from "../../../ui/Sections";
import CarouselCard from "../../../ui/Cards/CardSpecialTreatment/CarouselCard";

const SpecialityTreatment = () => {
  const [data] = useFetch("/data/specialTreatmentData.json");
  return (
    <main>
      <Sections>
        <HeadingTitle
          title="Speciality Treatment"
          subTitle="Reliable, treatment guiding, and deep root diagnosis is the gateway
            to the best and affordable healthcare."
        />
        <div className="z-[99] grid w-full overflow-hidden relative py-6  grid-cols-4 gap-8">
          {data &&
            data.map((item) => (
              <CarouselCard
                title={item.title}
                desc={item.desc}
                type={item.type}
                key={item.id}
              />
            ))}
        </div>
      </Sections>
    </main>
  );
};

export default SpecialityTreatment;
