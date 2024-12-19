import React from "react";
import { GoHome } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const DashboardBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Exclude everything before the username (i.e., `/user/:username/`)
  const adjustedPathnames = pathnames.slice(2); // Skip 'user' and the username

  return (
    <div className=" bg-[#F8FAFC]">
      <div className="container">
        <div className="w-full ">
          <div className="px-4 py-4 border-black/25 border-b-2 sm:px-6 md:px-8 md:py-5">
            <ul className="flex items-center">
              <li className="flex items-center">
                <Link to="/" className="flex items-center hover:text-primary">
                  <span className="pr-2 text-black">
                    <GoHome />
                  </span>
                  Dashboard
                </Link>
              </li>
              {adjustedPathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 3).join("/")}`; // Adjust slicing to include `user/:username/`
                return (
                  <li key={to} className="flex items-center">
                    <span>&emsp;/&emsp; </span>
                    <Link to={to}>
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBreadcrumb;
