import React, { useState, ReactNode } from "react";
import { authContext } from "../store/store_auth";

function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState(false);
  const changeAuth = () => {
    setAuth(true);
  };
  return (
    <authContext.Provider value={{ auth, changeAuth }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
