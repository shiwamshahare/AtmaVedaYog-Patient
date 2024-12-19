import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumb4 from "../../ui/Breadcrumb";
import AllServices from "./AllServices"; // Import the AllServices component

const Services = () => {
  const location = useLocation(); // Get the current location to check for matching routes

  // Check if the current location is the root of /services or if there's no specific service selected
  const isAtRoot = location.pathname === "/services";

  return (
    <main>
      <Breadcrumb4 type="Services" url="/services" />
      {/* If there's no specific service selected, display AllServices */}
      {isAtRoot ? <AllServices /> : <Outlet />}
    </main>
  );
};

export default Services;
