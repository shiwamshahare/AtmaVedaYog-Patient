import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Sections from "../../../ui/Sections";
import HeadingTitle from "../../../ui/HeadingTitle";
import PricingComponent from "./PricingComponent";
const PackagesShowcase = () => {
  return (
    <Sections>
      <HeadingTitle
        title="Packages"
        subTitle="Discover the perfect plan for you and your family"
      />

      <div className="mt-10 w-full ">
        <PricingComponent />
      </div>
      <br />
      <br />
      <NavLink
        to="/services/packages"
        className="btn2 flex justify-center items-center gap-3"
      >
        View all packages <FaGreaterThan />
      </NavLink>
    </Sections>
  );
};

export default PackagesShowcase;
