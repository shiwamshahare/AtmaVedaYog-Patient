import React, { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";
import { DashboardContext } from "../../context/DashboardContext/DashboardContext";
import DashboardBreadcrumb from "../../ui/Breadcrumb/DashboardBreadcrumb";

const PatientDashboard = () => {
  const { collapsed } = useContext(DashboardContext);
  const location = useLocation(); // Get the current location to check for matching routes

  // Check if the current location is the root of /services or if there's no specific service selected
  const isAtRoot = location.pathname === "/user";

  return (
    <main className="bg-[#F8FAFC] h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden transition-[margin] duration-300">
      <Sidebar />
      <div className={`${collapsed ? "md:ml-[70px]" : "md:ml-[240px]"}`}>
        <DashboardBreadcrumb />
        {/* If there's no specific service selected, display AllServices */}
        {isAtRoot ? <Dashboard /> : <Outlet />}
      </div>
    </main>
  );
};

export default PatientDashboard;
