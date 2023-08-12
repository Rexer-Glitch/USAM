import React, { createContext, useState } from "react";

const DashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {
  const [isShowMenu, setShowMenu] = useState(false);
  return (
    <DashboardContext.Provider value={{ isShowMenu, setShowMenu }}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContextProvider, DashboardContext };
