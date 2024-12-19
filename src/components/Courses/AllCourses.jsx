import React from "react";
import Sections from "../../ui/Sections";
import HeadingTitle from "../../ui/HeadingTitle";
import useFetch from "../../hooks/useFetch";
import ServiceCard from "../../ui/Cards/ServiceCard";

const AllColurses = () => {
  const [data] = useFetch("/data/coursesData.json");
  return (
    <Sections>
      <HeadingTitle title="Courses" />
      <div className="z-[99] grid w-full overflow-hidden relative py-6  grid-cols-3 gap-12 ">
        {data &&
          data.map((item) => (
            <ServiceCard
              title={item.title}
              desc={item.desc}
              subTitle={item.subTitle}
              url={item.url}
              key={item.id}
            />
          ))}
      </div>
    </Sections>
  );
};

export default AllColurses;
