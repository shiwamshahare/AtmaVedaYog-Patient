import React, { useEffect, useState } from "react";
import CarouselCard from "../Cards/CardSpecialTreatment/CarouselCard";
const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        // Reverse direction at boundaries
        if (prev === 0 && direction === -1) {
          setDirection(1);
          return prev + 1;
        }
        if (prev === data.length - 4 && direction === 1) {
          setDirection(-1);
          return prev - 1;
        }

        // Move forward or backward based on direction
        return prev + direction;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [data, direction]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="z-[99] grid  w-full overflow-hidden relative py-6 bg-transparent grid-cols-1 ">
      <div
        className="flex z-[99] lg:w-1/4 sm:w-2/3 gap-12 ps-12 mb-12 transition-transform duration-500 ease-in-out "
        style={{
          transform: `translateX(-${current * 100 + 10}%)`,
        }}
      >
        {data.map((item) => (
          <CarouselCard
            title={item.title}
            desc={item.desc}
            type={item.type}
            url={item.url}
            key={item.id}
          />
        ))}
      </div>
      <div className="absolute  bottom-0 inset-0 flex justify-center items-end overflow-visible">
        {/* 5 is added to avoid unnecessary dots */}
        {data.slice(0, 5).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`md:h-5 h-3 w-3 md:w-5 ${
              idx === current ? "bg-green-700" : "bg-gray-400"
            } rounded-full m-2`}
          ></button>
        ))}
      </div>{" "}
    </div>
  );
};

export default Carousel;
