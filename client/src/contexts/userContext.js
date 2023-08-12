import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [isShowMenu, setShowMenu] = useState(false);
  return (
    <UserContext.Provider value={{ isShowMenu, setShowMenu }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
