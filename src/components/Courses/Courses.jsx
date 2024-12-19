import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumb4 from "../../ui/Breadcrumb";
import AllCourses from "./AllCourses"; // Import the AllCourc component

const Courcses = () => {
  const location = useLocation(); // Get the current location to check for matching routes

  // Check if the current location is the root of /services or if there's no specific service selected
  const isAtRoot = location.pathname === "/courses";

  return (
    <main>
      <Breadcrumb4 type="Courses" url="/courses" />
      {/* If there's no specific service selected, display AllServices */}
      {isAtRoot ? <AllCourses /> : <Outlet />}
    </main>
  );
};

export default Courcses;
