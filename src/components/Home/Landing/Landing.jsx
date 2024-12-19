import React from "react";
import useFetch from "../../../hooks/useFetch";
import CardBooking from "../../../ui/Cards/CardBooking/CardBooking";

const Landing = () => {
  const [data] = useFetch("/data/landingCardsData.json");

  // Ensure data is loaded and has the expected structure
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="w-full h-auto my-8 pb-24 flex justify-center items-center">
      <div className="w-11/12 backdrop-blur-sm rounded-lg border-2 p-8 pt-8 pb-20 shadow-inner shadow-orange-200 drop-shadow-xl border-black/25">
        <div className="w-full grid-cols-2 grid gap-6 py-6">
          {data.fourcards.map((item) => (
            <CardBooking
              key={item.id}
              imgSrc={item.imgSrc}
              title={item.title}
              subTitle={item.subTitle}
              type={item.type}
              url={item.url}
              description={item.description}
            />
          ))}
        </div>
        <div className="w-full grid-cols-3 grid gap-6">
          {data.threecards.map((item) => (
            <CardBooking
              key={item.id}
              imgSrc={item.imgSrc}
              title={item.title}
              subTitle={item.subTitle}
              type={item.type}
              url={item.url}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landing;
