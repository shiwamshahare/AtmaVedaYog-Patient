import React from "react";
import Sections from "../../ui/Sections";
import HeadingTitle from "../../ui/HeadingTitle";
import ImageCarousel from "../../ui/Carousel/ImageCarousel/Carousel/ImageCarousel";

const Offers = () => {
  const images = [
    "/Images/Banner1.png",
    "/Images/Banner2.png",
    "/Images/Banner3.png",
    "/Images/Banner4.png",
    "/Images/Banner5.png",
  ];
  return (
    <Sections isEven>
      <HeadingTitle title="Offers" subTitle="" />
      <div className="w-10/12 h-full flex justify-center items-center">
        <ImageCarousel img={images} />
      </div>
    </Sections>
  );
};

export default Offers;
