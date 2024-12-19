import React from "react";
import Sections from "../../../ui/Sections";

const AboutLanding = () => {
  return (
    <Sections isEven height="sm:min-h-[90vh]">
      <div className="w-full sm:w-5/6 lg:w-3/4 px-4 sm:px-8 lg:px-12 flex h-full justify-center flex-col my-12">
        {/* Tagline */}
        <p className="text-base sm:text-lg lg:text-xl text-center sm:text-left mb-4">
          Your digital gateway to health recovery for illness, happiness &amp;
          longevity of life.
        </p>

        {/* Booking Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center sm:text-left my-5">
          Book Today:
        </h2>

        {/* Services Offered */}
        <h4 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-center sm:text-left mb-5 lg:mb-8 leading-relaxed sm:leading-normal lg:leading-snug">
          Medical Consultation - Test - Wellness Session - Treatment - Holistic
          Expert Talk.
        </h4>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-center sm:text-left">
          All integrated holistic medical services in one place.
        </p>
      </div>
    </Sections>
  );
};

export default AboutLanding;
