import React from "react";
import Sections from "../../ui/Sections";
import HeadingTitle from "../../ui/HeadingTitle";
import Carousel from "../../ui/Carousel/Carousel";
import useFetch from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

import { FaGreaterThan } from "react-icons/fa";
const CoursesShowcase = () => {
  const [data] = useFetch("/data/coursesData.json");
  return (
    <Sections id="courses">
      <HeadingTitle title="Courses" subTitle="" />
      <Carousel data={data} />
      <br />

      <NavLink
        to="/courses"
        className="btn2 flex justify-center items-center gap-3"
      >
        View all Courses <FaGreaterThan />
      </NavLink>
    </Sections>
  );
};

export default CoursesShowcase;
