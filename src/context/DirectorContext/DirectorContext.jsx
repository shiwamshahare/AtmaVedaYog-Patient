import React, { createContext, useState } from "react";
import useFetch from "../../hooks/useFetch";

// Create context
export const DirectorsContext = createContext(null);

// Provide context
export const DirectorContextProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [data] = useFetch("/data/directorsData.json");

  return (
    <DirectorsContext.Provider
      value={{ data: data || [], selectedId, setSelectedId }}
    >
      {children}
    </DirectorsContext.Provider>
  );
};

export default DirectorContextProvider;
