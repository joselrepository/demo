import { createContext, useContext } from "react";

type AuthType = {
  auth: boolean;
  changeAuth: () => void;
};

export const authContext = createContext<AuthType | null>(null);

const useAuthContext = () => {
  const context = useContext(authContext);

  if (!context) throw new Error("no auth context");

  return context;
};

export default useAuthContext;
