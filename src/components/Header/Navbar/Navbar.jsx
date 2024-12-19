import React, { memo, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "../../../ui/Dropdown";
import Modal from "../../../ui/Modal";
import useFetch from "../../../hooks/useFetch";

const Navbar = memo(() => {
  const navigate = useNavigate();
  const [data] = useFetch("/data/dropdownData.json");

  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="xl:flex hidden">
      <ul className="flex gap-4 z-20 capitalize max-w-max justify-center items-center">
        <NavLink to="/about">About</NavLink>
        <li>
          {data && (
            <Dropdown
              title="Services"
              url="/services"
              items={data.services.map((item) => ({
                text: (
                  <div className="flex items-center gap-2">
                    <img src={item.icon} alt={item.name} className="w-5 h-5" />
                    {item.name}
                  </div>
                ),
                to: item.url,
              }))}
              onItemSelect={scrollToSection}
            />
          )}
        </li>
        <li>
          {data && (
            <Dropdown
              title="Courses"
              url="/courses"
              items={data.courses.map((item) => ({
                text: (
                  <div className="flex items-center gap-2">
                    <img src={item.icon} alt={item.name} className="w-5 h-5" />
                    {item.name}
                  </div>
                ),
                to: item.url,
              }))}
              onItemSelect={scrollToSection}
            />
          )}
        </li>
        <li>
          <Modal title="Book an Appointment" btn="btn2" type="appointment" />
        </li>
        <li>
          <Modal title="Login / SignUp" btn="btn1" type="login" />
        </li>
      </ul>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
