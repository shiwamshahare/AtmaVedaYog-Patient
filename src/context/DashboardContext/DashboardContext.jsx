import React, { createContext, useState } from "react";

// Create context
export const DashboardContext = createContext(null);

// Provide context
export const DashboardContextProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <DashboardContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
