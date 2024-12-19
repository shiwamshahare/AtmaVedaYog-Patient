import React from "react";
import DashboardContextProvider from "../../context/DashboardContext/DashboardContext";
import PatientDashboard from "./PatientDashboard";

const UserDashboard = () => {
  return (
    <DashboardContextProvider>
      <PatientDashboard />
    </DashboardContextProvider>
  );
};

export default UserDashboard;
